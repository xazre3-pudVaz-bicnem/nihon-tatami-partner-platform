/**
 * 毎日1記事の完全自動ブログ生成スクリプト
 *
 *  - Claude API（デフォルト: claude-haiku-4-5-20251001）で記事を生成
 *  - content/blog/ にMarkdown（frontmatter付き）で保存
 *  - GitHub Actionsから毎日実行され、mainへ直接コミットされる
 *
 * 環境変数:
 *   ANTHROPIC_API_KEY  … 必須
 *   ANTHROPIC_MODEL    … 任意。指定時はそのモデルを優先
 *
 * 実行: npx tsx scripts/generate-daily-post.ts
 */
import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import Anthropic from "@anthropic-ai/sdk";

// ── 設定 ─────────────────────────────────────────────
const DEFAULT_MODEL = "claude-haiku-4-5-20251001";
const MODEL = process.env.ANTHROPIC_MODEL || DEFAULT_MODEL;
const BLOG_DIR = path.join(process.cwd(), "content", "blog");

const SITE = {
  name: "日本畳パートナーズ",
  baseUrl: "https://www.tatami-partners.jp",
  areaKeyword: "埼玉県・関東エリア",
  businessType: "畳工事・和室リフォーム・内装工事・原状回復",
  mainKeyword: "埼玉 畳",
};

// 記事テーマプール（重複はコードで回避）
const TOPICS: { theme: string; category: string }[] = [
  { theme: "埼玉の畳張替えを検討するときに知っておきたい基本", category: "畳工事・張替え" },
  { theme: "埼玉で畳の表替えを依頼する前に知っておくこと", category: "畳工事・張替え" },
  { theme: "埼玉で畳を新調するタイミングと判断基準", category: "畳工事・張替え" },
  { theme: "畳の裏返しとは何か｜表替え・新調との違い", category: "畳の基礎知識" },
  { theme: "畳の表替えとは｜工程・向いているケースを解説", category: "畳の基礎知識" },
  { theme: "畳の新調とは｜畳床から替える意味と目安", category: "畳の基礎知識" },
  { theme: "畳交換のタイミングを見極めるサイン", category: "畳の基礎知識" },
  { theme: "畳の寿命はどのくらいか｜素材別の目安と延ばし方", category: "畳の基礎知識" },
  { theme: "い草畳と和紙畳の違い｜特徴と選び方", category: "畳の基礎知識" },
  { theme: "ダイケン畳（和紙畳）の特徴とメリット", category: "畳の基礎知識" },
  { theme: "セキスイ畳（樹脂畳）の特徴と向いている場所", category: "畳の基礎知識" },
  { theme: "琉球畳の特徴とモダン和室での活かし方", category: "畳の基礎知識" },
  { theme: "縁なし畳のメリットと注意点", category: "畳の基礎知識" },
  { theme: "和室リフォームの進め方と考え方", category: "和室リフォーム" },
  { theme: "畳からフローリングへ変更する際のポイント", category: "和室リフォーム" },
  { theme: "フローリングから畳へ変更するリフォームの考え方", category: "和室リフォーム" },
  { theme: "賃貸物件の畳交換｜入居前・退去後の考え方", category: "賃貸・原状回復" },
  { theme: "原状回復と畳工事の基礎知識", category: "賃貸・原状回復" },
  { theme: "不動産管理会社向けの畳工事の進め方", category: "法人・施設向け" },
  { theme: "旅館の畳張替えで意識したいポイント", category: "法人・施設向け" },
  { theme: "寺院・神社の畳工事で配慮すべきこと", category: "法人・施設向け" },
  { theme: "介護施設の和室メンテナンスの考え方", category: "法人・施設向け" },
  { theme: "畳のカビ対策｜原因と日常でできる予防", category: "畳のお手入れ" },
  { theme: "畳の日焼け・色あせの原因と対処", category: "畳のお手入れ" },
  { theme: "畳のへこみ・傷みが気になったときの選択肢", category: "畳のお手入れ" },
  { theme: "畳工事の費用目安の考え方", category: "費用・業者選び" },
  { theme: "畳業者の選び方｜確認しておきたいポイント", category: "費用・業者選び" },
  { theme: "埼玉で畳業者を選ぶときに見るべきこと", category: "費用・業者選び" },
  { theme: "和室を長くきれいに使うための習慣", category: "畳のお手入れ" },
  { theme: "埼玉の気候と畳｜湿気・乾燥への向き合い方", category: "畳のお手入れ" },
];

// 存在する内部リンク（実在ページのみ）
const INTERNAL_LINKS = `
- サービス一覧: ${SITE.baseUrl}/services
- 畳表替え: ${SITE.baseUrl}/services/tatami-omotegae
- 畳新調: ${SITE.baseUrl}/services/tatami-shinchou
- 畳裏返し: ${SITE.baseUrl}/services/tatami-uragaeshi
- 和室リフォーム: ${SITE.baseUrl}/interior/house-renovation
- 原状回復: ${SITE.baseUrl}/restoration
- 施工対応例: ${SITE.baseUrl}/works
- 対応エリア（埼玉）: ${SITE.baseUrl}/area/saitama
- 料金目安: ${SITE.baseUrl}/price
- 会社情報: ${SITE.baseUrl}/about
- お問い合わせ: ${SITE.baseUrl}/contact
`.trim();

// ── ユーティリティ ───────────────────────────────────
function log(msg: string) {
  console.log(`[generate-daily-post] ${msg}`);
}

function ensureBlogDir() {
  if (!fs.existsSync(BLOG_DIR)) fs.mkdirSync(BLOG_DIR, { recursive: true });
}

/** 既存記事のテーマ/slugを収集（重複回避用） */
function getExisting(): { slugs: Set<string>; themes: Set<string> } {
  ensureBlogDir();
  const slugs = new Set<string>();
  const themes = new Set<string>();
  for (const file of fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".md"))) {
    const raw = fs.readFileSync(path.join(BLOG_DIR, file), "utf8");
    const { data } = matter(raw);
    if (data.slug) slugs.add(String(data.slug));
    if (data._theme) themes.add(String(data._theme));
    if (data.title) themes.add(String(data.title));
  }
  return { slugs, themes };
}

/** まだ書いていないテーマを選ぶ。全部書き終えていたら最も古い順で再利用（角度を変える指示付き） */
function pickTopic(existingThemes: Set<string>) {
  const unused = TOPICS.filter((t) => !existingThemes.has(t.theme));
  if (unused.length > 0) {
    // 日替わりで決定的に選ぶ（実行日ベース）。ランダム非依存で再現性を確保。
    const dayIndex = Math.floor(Date.now() / 86_400_000);
    return { topic: unused[dayIndex % unused.length], reused: false };
  }
  const dayIndex = Math.floor(Date.now() / 86_400_000);
  return { topic: TOPICS[dayIndex % TOPICS.length], reused: true };
}

function slugify(input: string): string {
  const base = input
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
  return base.replace(/^-|-$/g, "");
}

function todayJST(): string {
  // UTC+9
  const now = new Date(Date.now() + 9 * 60 * 60 * 1000);
  return now.toISOString().slice(0, 10);
}

function uniqueSlug(desired: string, existing: Set<string>, dateStr: string): string {
  let slug = desired || `tatami-post-${dateStr}`;
  if (!existing.has(slug)) return slug;
  let i = 2;
  while (existing.has(`${slug}-${i}`)) i++;
  return `${slug}-${i}`;
}

// ── プロンプト ───────────────────────────────────────
function buildPrompt(theme: string, category: string, reused: boolean): string {
  return `あなたは${SITE.areaKeyword}を対応エリアとする「${SITE.name}」（${SITE.businessType}）のSEO記事ライターです。
次のテーマで、日本語のSEOブログ記事を1本書いてください。

# テーマ
${theme}

# 想定カテゴリ
${category}

# 出力フォーマット（厳守）
最初に --- で囲んだYAML frontmatterを出力し、続けてMarkdown本文を書いてください。
frontmatterの各フィールドは必ず含めること:

---
title: "記事タイトル（32文字前後・地域名や畳関連キーワードを自然に含む）"
slug: "半角英数字とハイフンのみ・内容を表す3〜6語"
description: "120文字以内の検索意図に沿った説明文"
category: "${category}"
tags: ["タグ1", "タグ2", "タグ3", "タグ4"]
---

（ここから本文。frontmatterの後に必ず空行を1行入れる）

# 本文の条件
- 全体で2,000〜3,000文字程度
- 構成: 導入文（リード）→ H2/H3で本文 → 「まとめ」H2で締める
- 見出しはMarkdownの## と ### を使う（H1（#）は本文に入れない）
- 地域名（埼玉県・関東）、畳、表替え、裏返し、新調、和室リフォームなどを文脈に沿って自然に含める
- 読者の疑問に具体的に答える専門的な内容にする
- 本文の途中または末尾で、関連する内部リンクを2〜3個、Markdownリンク形式で自然に挿入する
  利用できる実在ページ（この中からテーマに合うものだけ使う。存在しないURLは作らない）:
${INTERNAL_LINKS}

# 禁止事項（必ず守る）
- AIが書いたような定型的な前置き・免責文（「本記事では〜」「いかがでしたか」等の紋切り型）を使わない
- 「最安」「地域一番」「日本一」「No.1」「必ず即日対応」など根拠のない断定・誇大表現を使わない
- 料金・工期・対応エリアを断定しすぎない（「目安」「現地確認のうえ」等の表現を用いる）
- 素材や施工方法について不正確な断定をしない
- 事実に基づかない実績・件数・評価を書かない
${reused ? "- このテーマは過去に扱った可能性があるため、切り口・具体例・見出しを変えて新規性のある内容にする\n" : ""}
# 出力
frontmatterと本文のみを出力してください。前後に説明文やコードフェンス（\`\`\`）は付けないこと。`;
}

// ── メイン ───────────────────────────────────────────
async function main() {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    console.error("[generate-daily-post] ERROR: ANTHROPIC_API_KEY が設定されていません。");
    process.exit(1);
  }

  log(`使用モデル: ${MODEL}${process.env.ANTHROPIC_MODEL ? " (ANTHROPIC_MODEL指定)" : " (デフォルト)"}`);

  const { slugs, themes } = getExisting();
  const { topic, reused } = pickTopic(themes);
  log(`選択テーマ: ${topic.theme}（カテゴリ: ${topic.category}${reused ? " / 再利用" : ""}）`);

  const client = new Anthropic({ apiKey });

  const res = await client.messages.create({
    model: MODEL,
    max_tokens: 4096,
    messages: [{ role: "user", content: buildPrompt(topic.theme, topic.category, reused) }],
  });

  const text = res.content
    .filter((b): b is Anthropic.TextBlock => b.type === "text")
    .map((b) => b.text)
    .join("")
    .trim();

  if (!text) {
    console.error("[generate-daily-post] ERROR: 生成結果が空でした。");
    process.exit(1);
  }

  // コードフェンスが付いた場合は除去
  const cleaned = text.replace(/^```(?:markdown|md)?\s*/i, "").replace(/```\s*$/i, "").trim();

  // frontmatterを検証
  let parsed;
  try {
    parsed = matter(cleaned);
  } catch (e) {
    console.error("[generate-daily-post] ERROR: frontmatterの解析に失敗しました。", e);
    process.exit(1);
  }

  const data = parsed.data as Record<string, unknown>;
  const body = parsed.content.trim();

  if (!data.title || !body) {
    console.error("[generate-daily-post] ERROR: title または本文が不足しています。");
    process.exit(1);
  }

  const dateStr = todayJST();

  // slugを正規化＋一意化
  const rawSlug = slugify(String(data.slug || "")) || slugify(String(data.title));
  const slug = uniqueSlug(rawSlug, slugs, dateStr);

  // frontmatterを確定値で組み立て直す（必須フィールドを保証）
  const finalData = {
    title: String(data.title).trim(),
    slug,
    description: String(data.description || topic.theme).trim().slice(0, 120),
    date: dateStr,
    category: String(data.category || topic.category).trim(),
    tags: Array.isArray(data.tags) && data.tags.length
      ? data.tags.map((t) => String(t))
      : ["畳", "埼玉", topic.category],
    _theme: topic.theme, // 重複回避用の内部メタ（表示はしないが記録する）
  };

  const fileContent = matter.stringify(`\n${body}\n`, finalData);
  const fileName = `${dateStr}-${slug}.md`;
  const filePath = path.join(BLOG_DIR, fileName);

  ensureBlogDir();
  fs.writeFileSync(filePath, fileContent, "utf8");

  log(`生成完了: content/blog/${fileName}`);
  log(`タイトル: ${finalData.title}`);
  log(`カテゴリ: ${finalData.category} / 文字数(本文): ${body.length}`);
  log(`モデル: ${MODEL}`);

  // GitHub Actionsのstep outputにファイル名を渡す
  if (process.env.GITHUB_OUTPUT) {
    fs.appendFileSync(process.env.GITHUB_OUTPUT, `filename=content/blog/${fileName}\n`);
    fs.appendFileSync(process.env.GITHUB_OUTPUT, `title=${finalData.title}\n`);
    fs.appendFileSync(process.env.GITHUB_OUTPUT, `model=${MODEL}\n`);
  }
}

main().catch((err) => {
  console.error("[generate-daily-post] FATAL:", err);
  process.exit(1);
});
