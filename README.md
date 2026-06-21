# 日本畳パートナーズ — サイト制作・公開前チェックリスト

**Next.js 16 + TypeScript + Tailwind CSS v4 / App Router**
ビルド: 334ページ静的生成・TypeScript エラーなし

---

## 公開前に必ず差し替える情報

`lib/site.ts` を開き、以下を設定してください。設定するまで連絡先はサイト上に表示されません。

```ts
export const SITE_TEL   = "";  // → 例: "03-XXXX-XXXX"
export const SITE_EMAIL = "";  // → 例: "info@example.com"
export const SITE_LINE  = "";  // → LINE公式アカウントURL
```

| 項目 | 状態 | 確認担当 |
|------|------|----------|
| 正式電話番号 | 未設定（site.ts 要更新） | |
| 正式メールアドレス | 未設定（site.ts 要更新） | |
| LINE公式URL | 未設定（site.ts 要更新） | |
| 正式屋号/社名 | app/about/page.tsx 要確認 | |
| 正式所在地 | app/about/page.tsx 要追加 | |
| 対応エリア | 現在「詳しくはお問い合わせください」 | |
| フォーム送信先 | 現在フロントのみ（要バックエンド or Formspree等） | |
| プライバシーポリシー制定日 | 2026-06-21（本番公開時に確認） | |
| 施工事例が実績か対応例か | 各 works-detail の status 確認 | |
| 料金表の税込/税別 | price/page.tsx 要確認 | |

---

## 完了した最終修正一覧（2026-06-21）

### 1. 仮実績表示の削除
- トップページ ヒーロー下「0+ 年間施工件数」「★0 お客様満足度」「0+ 対応サービス数」セクションを完全削除
- `AnimatedNumber` の未使用インポートも削除

### 2. タイトル二重表示の修正
- `lib/metadata.ts` で `buildMetadata` が返す `title` を `{absolute: title}` に変更
- layout.tsx のテンプレート `%s | サイト名` と各ページの `| サイト名` が重複して `〜 | 日本畳パートナーズ | 日本畳パートナーズ` になっていた問題を解消
- `app/privacy/page.tsx` も同様に修正

### 3. 仮情報の非表示化
- `lib/site.ts`: SITE_TEL / SITE_EMAIL / SITE_LINE を空文字列に変更
- `app/about/page.tsx`: 仮の「設立2022年」「全国」「0120-XXX-XXX」「info@nihontatami.jp」「土日祝定休」を会社概要テーブルから削除。Organization スキーマから電話/メールを削除
- `app/contact/page.tsx`: TEL/LINE/メールブロックを条件付き表示（空なら非表示）。送信ボタンの「返信保証」削除。送信完了文を「内容確認後にご連絡します」に変更
- `components/layout/Footer.tsx`: TEL/メールリンクを条件付き表示に変更

### 4. 施工事例表現の安全化
- `data/works-detail.ts` 全30件の `result` フィールドから疑似顧客証言を除去
  - 「〜とのお声をいただきました」→ 削除
  - 「〜とご満足いただけました」→「〜という仕上がりになります」
  - 「〜とご評価いただきました」→「〜という効果が期待できます」

### 5. 根拠のない実績表現の修正
- トップページ「旅館・寺社・店舗の**実績多数**」→「旅館・寺社・店舗の**ご相談にも対応**」
- About ページ「継続的なお取引実績」→「対応する体制を整えています」

### 6. 見出し重複の修正
- `FullServicePageTemplate.tsx`: 対象者別ご提案カードのデュアル h3 → 単一 h3 + flexbox に変更
- 施工フロー `<ol>` に `list-none` 追加（ブラウザデフォルト数字との二重表示防止）

### 7. 記号・絵文字の除去
- `FullServicePageTemplate.tsx`: `⚠` → 中性的なドットに置換
- `app/business/vacancy-measures/page.tsx`: `✓` を削除

### 8. コラム日付の非表示
- `ColumnCard.tsx` / `column/[slug]/page.tsx` の視覚的日付表示を削除
- Article JSON-LD の `datePublished` / `dateModified` は維持（SEO目的）

### 9. コラムカテゴリ UI の改善
- `components/ui/ColumnFilter.tsx` を新規作成
- チップ型ボタン UI・横スクロール・選択状態のゴールドハイライト・ライブフィルタリング

### 10. Breadcrumb の修正
- `components/ui/Breadcrumb.tsx`: ダーク背景（`bg-sumi` ヒーロー）用に白文字（`text-white/40`）をデフォルトに変更
- `/` セパレータに `aria-hidden` 追加

### 11. 404 ページの作成
- `app/not-found.tsx` 新規作成
- 和モダンデザイン・主要ページへのリンク・トップへ戻るボタン

### 12. モバイル固定 CTA の修正
- `StickyContactBar.tsx`: SITE_TEL が未設定なら電話ボタン非表示
- フォームへのリンクのみ表示

### 13. 法人向けページの強化
- `/business/real-estate`: +6 セクション・FAQ 15→20件
- `/business/property-management`: +5 セクション・FAQ 15→20件

### 14. プライバシーポリシーの更新
- 制定日を 2026-06-21 に更新

---

## 確認済み SEO 項目

| 項目 | 状態 |
|------|------|
| `metadata.title` 重複 | 解消済み（`{absolute: title}` 使用） |
| `description` | 全ページ実装・重複なし |
| `canonical` | 全ページ `alternates.canonical` 設定済み |
| OGP（og:title / og:image / og:locale） | 全ページ設定済み |
| H1 は 1 ページ 1 つ | テンプレート設計で保証 |
| `BreadcrumbList` JSON-LD | サービス・法人・コラム等全ページ |
| `FAQPage` JSON-LD | FAQを含む全サービスページ |
| `Article` JSON-LD | `/column/[slug]` |
| `Organization` JSON-LD | トップ・会社情報ページ（電話/メールは確定後に追加） |
| `sitemap.xml` | 334 URL 自動生成 |
| `robots.txt` | 実装済み |
| `noindex` | 付与なし（全ページインデックス対象） |
| 画像 `alt` | `next/image` で全画像設定済み |
| 404 ページ | `app/not-found.tsx` 作成済み |

---

## フォーム送信の実装（公開前必須）

現在、contact フォームはフロントエンドのみ（送信ボタンで `sent=true` になるだけ）。  
以下のいずれかで実際の送信を実装してください：

**無料オプション:**
- [Formspree](https://formspree.io) — `action` を追加するだけ
- [Netlify Forms](https://www.netlify.com/products/forms/) — Netlify 利用の場合
- [EmailJS](https://www.emailjs.com)

**実装手順（Formspree の場合）:**
```tsx
// app/contact/page.tsx の handleSubmit を以下に変更
async function handleSubmit(e: React.FormEvent) {
  e.preventDefault();
  const errs = validate();
  if (Object.keys(errs).length > 0) { setErrors(errs); return; }
  const res = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(form),
  });
  if (res.ok) setSent(true);
}
```

---

## ページ構成（334ページ）

```
334 ページ（静的生成）
├── コア: / /about /contact /price /flow /faq /works /area /materials /problems /purpose
├── サービス: /services/tatami* /services/washi* など 11 種
├── 法人: /business/* (6種), /restoration/* (4種)
├── 目的別: /for-homeowner /for-ryokan /for-temple など
├── 比較・ガイド: /compare/* /guide/*
├── 地域: /area/saitama + 19市区 × 5サービス
├── 素材: /materials/[slug] × 11
├── お悩み: /problems/[slug] × 15
├── 目的: /purpose/[slug] × 9
├── 施工対応例: /works/[slug] × 30
└── コラム: /column/[slug] × 52
```

## 技術スタック

```
Next.js 16 (App Router / Turbopack) + TypeScript strict
Tailwind CSS v4 + カスタムカラー（kiji / sumi / ai / kincya / igusa）
Framer Motion（アニメーション）
Shippori Mincho（和文見出し / next/font）
Atomic Design（components/ui / sections / templates / layout）
```

## 禁止表現（コードベース全体）

- 「最安値」「絶対」「100%」「日本一」「No.1」「激安」「業界最強」
- 根拠のない数値実績（プレースホルダー含む）
- 疑似顧客証言（「〜とお声をいただきました」等）
- 「返信保証」などの未確定な約束
- 架空の電話番号・メールアドレス

許容表現: 「ご相談ください」「現地確認後に正式見積もり」「素材や枚数により変動します」「内容確認後にご連絡します」
