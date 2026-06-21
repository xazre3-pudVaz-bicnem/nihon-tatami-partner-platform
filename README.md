# 日本畳パートナーズ — 公開前チェックリスト & 変更履歴

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

| 項目 | 状態 | 担当 |
|------|------|------|
| 正式電話番号 | 未設定（site.ts 要更新） | |
| 正式メールアドレス | 未設定（site.ts 要更新） | |
| LINE公式URL | 未設定（site.ts 要更新） | |
| 正式屋号/社名 | app/about/page.tsx 要確認 | |
| 正式所在地 | app/about/page.tsx 要追加 | |
| 対応エリア | 現在「詳しくはお問い合わせください」| |
| フォーム送信先 | フロントのみ（要実装 → README 下部参照）| |
| プライバシーポリシー制定日 | 2026-06-21（本番公開時に確認）| |
| 施工事例が実績か対応例か | works-detail.ts の各 status 確認 | |
| 料金の税込/税別 | price/page.tsx 全行に税込表示済み | |

---

## 公開前チェックリスト

### 必須（情報差し替え）
- [ ] lib/site.ts に正式電話番号・メール・LINE URL を設定
- [ ] app/about/page.tsx に正式所在地・屋号を追加
- [ ] Organization/LocalBusiness スキーマに正式情報を追記
- [ ] フォーム送信先を実装（Formspree 等、下部参照）
- [ ] プライバシーポリシーの問い合わせ窓口を正式情報に更新

### SEO・構造化データ
- [ ] Google Search Console にサイトを登録
- [ ] sitemap.xml を Search Console に送信（/sitemap.xml で自動生成済み）
- [ ] robots.txt 確認（/robots.txt で自動生成済み）
- [ ] OGP 画像（/og-image.jpg）を正式画像に差し替え
- [ ] favicon を正式ファイルに差し替え

### 公開前に確認するページ
- [ ] / (トップ)
- [ ] /contact (フォーム動作確認)
- [ ] /about (会社情報)
- [ ] /privacy (プライバシーポリシー)
- [ ] /works (施工対応例)
- [ ] /price (料金)
- [ ] /business/* (法人向け全6ページ)
- [ ] /interior (内装工事)
- [ ] /restoration (原状回復)
- [ ] /column (コラム一覧)

### 技術確認
- [ ] npm run build → エラーなし（現時点で確認済み）
- [ ] TypeScript エラーなし（確認済み）
- [ ] 内部リンク切れなし
- [ ] console error なし（ブラウザで確認）
- [ ] フォーム送信テスト
- [ ] スマホ表示確認（iOS Safari / Android Chrome）
- [ ] Lighthouse スコア確認

---

## フォーム送信実装（公開前必須）

現在 contact フォームはフロントのみ（`setSent(true)` で完了画面表示）。

**Formspree（無料）での実装手順:**
1. [formspree.io](https://formspree.io) でアカウント作成・フォーム ID を取得
2. `app/contact/page.tsx` の `handleSubmit` を以下に変更:

```tsx
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

## 変更履歴（最終品質改善セッション — 2026-06-21）

### 安全性・仮情報の削除

| 対象 | 変更内容 |
|------|----------|
| `lib/site.ts` | SITE_TEL / SITE_EMAIL / SITE_LINE を空文字列に変更。表示は条件付きに |
| `app/page.tsx` | LocalBusiness スキーマから空の `telephone` フィールドを除去。フロー Step1「電話・LINE」→「お問い合わせフォーム」に修正 |
| `app/about/page.tsx` | 仮設立年・仮電話・仮メールを会社概要テーブルから削除。Organization スキーマから電話/メールを削除 |
| `app/contact/page.tsx` | TEL/LINE/メールブロックを条件付き表示（空なら非表示）。「返信保証」削除、送信完了文修正 |
| `components/layout/Footer.tsx` | TEL/メールリンクを条件付き表示。お問い合わせフォームリンクを常時表示 |
| `components/ui/StickyContactBar.tsx` | SITE_TEL 未設定時は電話ボタン非表示 |

### タイトル・SEO 修正

| 対象 | 変更内容 |
|------|----------|
| `lib/metadata.ts` | `buildMetadata` が返す title を `{absolute: title}` に変更 → layout テンプレートとの二重表示を解消 |
| `app/privacy/page.tsx` | 同様に `{absolute: ...}` で修正 |
| `app/works/page.tsx` | タイトル「施工事例 | ...実績」→「施工対応例・施工イメージ | ...」に変更 |
| `app/works/[slug]/page.tsx` | タイトル「施工事例」→「施工対応例・施工イメージ」 |

### 施工事例・表現の安全化

| 対象 | 変更内容 |
|------|----------|
| `data/works-detail.ts` 全30件 | `result` フィールドから疑似顧客証言を除去。「〜ご満足いただきました」→「〜という仕上がりになります」 |
| `app/page.tsx` REASONS | 「施工後の確認を徹底し、仕上がりに満足いただいてから引き渡します」→表現を softened |
| `app/works/page.tsx` | 「施工実績をご紹介します」→「施工対応例・施工イメージをご紹介します。実際の素材・費用は現地確認後にご案内します」 |
| `app/blog/page.tsx` | フォールバック投稿の「ご依頼で実施しました」→「想定例・工程の流れ」に変更 |

### UI / コンポーネント修正

| 対象 | 変更内容 |
|------|----------|
| `components/ui/Breadcrumb.tsx` | `variant="dark"`（デフォルト）で白文字化。`/` セパレータに `aria-hidden` |
| `components/ui/ColumnFilter.tsx` | 新規作成。チップ型 UI・横スクロール・ライブフィルタリング |
| `app/not-found.tsx` | 404ページ新規作成（和モダンデザイン・主要リンク） |
| `components/templates/FullServicePageTemplate.tsx` | h3 重複（mobile/desktop 二重）を単一 h3 + flexbox に修正。`⚠` 記号を削除 |

### ページ内容の大幅拡充

| ページ | 追加内容 |
|--------|----------|
| `/interior` | +6 セクション（リフォームとの違い、工事範囲詳細、費用要因、施工の流れ、施工前注意点、法人向け進め方）、FAQ 15 → 20 問 |
| `/restoration` | +6 セクション（原状回復とリフォームの違い、賃貸退去範囲、店舗退去範囲、管理会社向け流れ、費用要因、写真付き報告書）、FAQ 15 → 20 問 |
| `/business/ryokan` | +5 セクション（3重要点、客室別素材表、段階施工手順、インバウンド品質管理、メンテナンス計画）、FAQ 15 → 20 問 |
| `/business/temple-shrine` | +5 セクション（4配慮、空間別対応、整備タイムライン、縁の選び方、施工中配慮）、FAQ 15 → 20 問 |
| `/business/store` | +5 セクション（3重要点、業種別対応、営業継続施工、費用要因、整備チェックリスト）、FAQ 12 → 17 問 |
| `/business/real-estate` | FAQ 20 問・内覧整備・空室写真・売買前対応の詳細セクション |
| `/business/property-management` | FAQ 20 問・退去後対応・複数物件・写真報告の詳細セクション |
| `/privacy` | ミニマルな6項目から8セクションの正式プライバシーポリシーに拡充 |

### コラム・施工事例

| 対象 | 変更内容 |
|------|----------|
| `/column` | `ColumnFilter.tsx` 導入でチップ型カテゴリフィルタリング |
| `data/works-detail.ts` | 30件の施工対応例データの証言表現を中立化 |

---

## サイト役割の整理

このサイトは **日本畳パートナーズ（施工会社）のコーポレートサイト** として設計されています。

- 自社での畳工事・内装・原状回復の受注サイト
- BtoC（一般住宅）と BtoB（法人・管理会社・旅館・寺社・店舗）の両対応
- 業者検索プラットフォーム的な導線は設けていない

---

## ページ構成（334ページ）

```
334 ページ（静的生成）
├── コア: / /about /contact /price /flow /faq /works /area /materials /problems /purpose
├── サービス: /services/tatami* /services/washi* など 11 種
├── 法人: /business/* (6種), /restoration/* (4種)
├── 目的別: /for-homeowner /for-ryokan /for-temple など
├── 比較・ガイド: /compare/* /guide/*
├── 地域: /area/saitama + 19市区 × 5サービス（95ページ）
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

- 「最安値」「絶対」「100%」「日本一」「No.1」「激安」「業界最強」「お約束します」
- 根拠のない数値実績（プレースホルダー含む）
- 疑似顧客証言（「〜とお声をいただきました」「〜とご満足いただきました」等）
- 「返信保証」などの未確定な約束
- 架空の電話番号・メールアドレス

**許容表現:** 「ご相談ください」「現地確認後に正式見積もり」「素材や枚数により変動します」「内容確認後にご連絡します」「対応できる体制を整えています」
