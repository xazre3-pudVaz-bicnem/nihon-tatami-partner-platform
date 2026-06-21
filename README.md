# 日本畳パートナーズ — サイト制作記録

**Next.js 16 + TypeScript + Tailwind CSS v4 / App Router**
ビルド: 334ページ静的生成、TypeScript エラーなし

---

## 最終仕上げ修正（2026-06-21）

### 1. 削除した仮実績表示

| 対象 | 修正内容 |
|------|----------|
| トップページ ヒーロー直下 | 「0+ 年間施工件数」「★0 お客様満足度」「0+ 対応サービス数」のセクションを完全削除（実績確定まで非表示） |
| `app/page.tsx` line 39 | 「旅館・寺社・店舗の**実績多数**」→「旅館・寺社・店舗の**ご相談にも対応**」に変更 |

### 2. 修正した見出し重複

| 対象 | 修正内容 |
|------|----------|
| `FullServicePageTemplate.tsx` 対象者別ご提案セクション | モバイル用・デスクトップ用で同一 `<h3>` を2つ出力していたレスポンシブ実装を、単一 `<h3>` + flexbox に変更。「一般住宅向け」「賃貸オーナー向け」などが二重表示されていた問題を解消 |
| `FullServicePageTemplate.tsx` 施工フロー `<ol>` | `list-none` クラスを追加し、ブラウザデフォルトの数字と `{step.step}` の両方が表示される「4. 4」問題を防止 |
| 同 よくある失敗セクション | `⚠` 記号を中性的なドット（●）に置換 |

### 3. 安全化した施工事例の表現

`data/works-detail.ts` の全 30 件の `result` フィールドを修正。

| 変更前パターン | 変更後 |
|---------------|--------|
| 「…」とのお声をいただきました | 該当文を削除（括弧引用の疑似客声を完全除去） |
| …とご満足いただけました | …という仕上がりになります |
| …とご評価いただきました | …という効果が期待できます |

`staffComment`・`challenge`・`proposal` フィールドは変更なし。

### 4. 強化した法人向けページ

#### /business/real-estate（不動産会社向け）
追加したセクション（計 6 件）:
- 「売買前の内装整備」チェックリスト（畳・床・クロス・建具の優先順位）
- 買取再販前の内装整備
- 賃貸募集前の空室整備と写真改善
- 整備費用の考え方・見積書の内訳例
- 写真付き施工報告書の内容と活用法
- 管理会社向けページとの違い

FAQ: 15 件 → 20 件に拡充

#### /business/property-management（管理会社向け）
追加したセクション（計 5 件）:
- 退去後の原状回復フロー（5 ステップ）
- 国土交通省ガイドライン準拠の説明
- 費用が変わる要因
- クレーム防止のための書類管理
- 複数棟・継続取引のメリット

FAQ: 15 件 → 20 件に拡充

### 5. コラム日付の非表示化

| 対象 | 修正内容 |
|------|----------|
| `ColumnCard.tsx` | カード一覧での日付表示を削除 |
| `column/[slug]/page.tsx` | 記事詳細ページの公開日・更新日の視覚表示を削除 |
| Article JSON-LD スキーマ | `datePublished` / `dateModified` は維持（SEO 目的） |

---

## 確認した SEO 項目

| 項目 | 状態 |
|------|------|
| `metadata.title` / `description` | 全ページ実装済み（`buildMetadata()` 共通関数） |
| `canonical` URL | 全ページ `alternates.canonical` 設定済み |
| OGP（`og:title` / `og:image` / `og:locale`） | 全ページ設定済み |
| H1 は 1 ページ 1 つ | テンプレート設計で保証 |
| パンくずリスト | `Breadcrumb` コンポーネント + `BreadcrumbList` JSON-LD |
| `FAQPage` 構造化データ | FAQを含む全サービスページに実装 |
| `Article` 構造化データ | `/column/[slug]` に実装 |
| `Organization` 構造化データ | トップページ・サービスページに実装 |
| `sitemap.xml` | 334 URL を自動生成 |
| `robots.txt` | 実装済み |
| 画像 `alt` 属性 | `next/image` で全画像に設定 |
| 内部リンク | 関連サービス・関連コラム・パンくずで相互リンク済み |

---

## 禁止表現の除去確認

以下の表現はコードベース全体から除去・使用禁止：

- 「最安値」「絶対」「100%」「日本一」「No.1」「激安」「業界最強」
- 根拠のない数値実績（0+ / ★0 などのプレースホルダー）
- 疑似顧客証言（「〜とのお声をいただきました」「〜とご評価いただきました」）

許容表現：「ご相談ください」「現地確認後に正式見積もり」「素材や枚数により変動します」

---

## ページ構成

```
334 ページ（静的生成）
├── コア: / /about /contact /price /flow /faq /works /area /materials /problems /purpose
├── サービス: /services/tatami* /services/washi* /services/resin* など 11 種
├── 法人: /business/* (6 種)、/restoration/* (4 種)
├── 目的別: /for-homeowner /for-ryokan /for-temple など
├── 比較・ガイド: /compare/* /guide/*
├── 地域: /area/saitama + 19 市区 × 5 サービス
├── 素材: /materials/[slug] × 11
├── お悩み: /problems/[slug] × 15
├── 目的: /purpose/[slug] × 9
├── 施工事例: /works/[slug] × 30
└── コラム: /column/[slug] × 52
```

## 技術スタック

```
Next.js 16 (App Router) + TypeScript strict
Tailwind CSS v4 + カスタムカラー（kiji / sumi / ai / kincya / igusa）
Framer Motion（アニメーション）
Shippori Mincho（和文見出しフォント / next/font）
Atomic Design（components/ui / sections / templates / layout）
```
