import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

// ─────────────────────────────────────────────────────────────
// Markdownブログ（content/blog/*.md）を読み込むユーティリティ
// WordPress不使用。Claude API + GitHub Actionsで生成した記事を扱う。
// ─────────────────────────────────────────────────────────────

export const BLOG_DIR = path.join(process.cwd(), "content", "blog");

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string; // YYYY-MM-DD
  category: string; // 日本語カテゴリ名
  tags: string[];
  content: string; // Markdown本文
};

// カテゴリ（日本語名 ⇄ URL用スラグ）
export const BLOG_CATEGORIES = [
  { slug: "tatami-basics", name: "畳の基礎知識" },
  { slug: "tatami-koji", name: "畳工事・張替え" },
  { slug: "washitsu-reform", name: "和室リフォーム" },
  { slug: "chintai-genjo", name: "賃貸・原状回復" },
  { slug: "houjin-shisetsu", name: "法人・施設向け" },
  { slug: "oteire-care", name: "畳のお手入れ" },
  { slug: "hiyou-gyousha", name: "費用・業者選び" },
] as const;

export function categoryNameToSlug(name: string): string {
  const found = BLOG_CATEGORIES.find((c) => c.name === name);
  return found ? found.slug : "tatami-basics";
}

export function categorySlugToName(slug: string): string | undefined {
  return BLOG_CATEGORIES.find((c) => c.slug === slug)?.name;
}

function ensureDir(): boolean {
  try {
    return fs.existsSync(BLOG_DIR) && fs.statSync(BLOG_DIR).isDirectory();
  } catch {
    return false;
  }
}

function normalizeTags(input: unknown): string[] {
  if (Array.isArray(input)) return input.map((t) => String(t).trim()).filter(Boolean);
  if (typeof input === "string") return input.split(",").map((t) => t.trim()).filter(Boolean);
  return [];
}

function toDateString(input: unknown): string {
  if (!input) return "";
  if (input instanceof Date) return input.toISOString().slice(0, 10);
  // gray-matterがYAMLの日付をDate化することがあるため文字列化して先頭10文字
  return String(input).slice(0, 10);
}

/** content/blog内の全記事を日付降順で返す */
export function getAllPosts(): BlogPost[] {
  if (!ensureDir()) return [];

  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".md"));
  const posts: BlogPost[] = [];

  for (const file of files) {
    const raw = fs.readFileSync(path.join(BLOG_DIR, file), "utf8");
    const { data, content } = matter(raw);

    // slugはfrontmatter優先、なければファイル名（日付プレフィックス除去）
    const fallbackSlug = file
      .replace(/\.md$/, "")
      .replace(/^\d{4}-\d{2}-\d{2}-/, "");
    const slug = String(data.slug || fallbackSlug).trim();

    if (!data.title || !slug) continue;

    posts.push({
      slug,
      title: String(data.title).trim(),
      description: String(data.description || "").trim(),
      date: toDateString(data.date) || fallbackDateFromFile(file),
      category: String(data.category || "畳の基礎知識").trim(),
      tags: normalizeTags(data.tags),
      content: content.trim(),
    });
  }

  return posts.sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));
}

function fallbackDateFromFile(file: string): string {
  const m = file.match(/^(\d{4}-\d{2}-\d{2})/);
  return m ? m[1] : "";
}

export function getPostBySlug(slug: string): BlogPost | null {
  return getAllPosts().find((p) => p.slug === slug) || null;
}

export function getAllSlugs(): string[] {
  return getAllPosts().map((p) => p.slug);
}

export function getPostsByCategory(name: string): BlogPost[] {
  return getAllPosts().filter((p) => p.category === name);
}

/** 使用中のカテゴリを記事数付きで返す（記事0のカテゴリは含めない） */
export function getUsedCategories(): { slug: string; name: string; count: number }[] {
  const posts = getAllPosts();
  return BLOG_CATEGORIES.map((c) => ({
    slug: c.slug,
    name: c.name,
    count: posts.filter((p) => p.category === c.name).length,
  })).filter((c) => c.count > 0);
}

export function getRelatedPosts(post: BlogPost, limit = 3): BlogPost[] {
  const all = getAllPosts().filter((p) => p.slug !== post.slug);
  // 同カテゴリ優先 → 残りを新着で補完
  const sameCat = all.filter((p) => p.category === post.category);
  const rest = all.filter((p) => p.category !== post.category);
  return [...sameCat, ...rest].slice(0, limit);
}

export function formatDate(date: string): string {
  if (!date) return "";
  const d = new Date(date);
  if (Number.isNaN(d.getTime())) return date;
  return d.toLocaleDateString("ja-JP", { year: "numeric", month: "long", day: "numeric" });
}
