const WP_API = process.env.NEXT_PUBLIC_WP_API_URL || "https://blog.nihontatami.jp/wp-json/wp/v2";

export type WPPost = {
  id: number;
  slug: string;
  date: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  content: { rendered: string };
  _embedded?: {
    "wp:featuredmedia"?: Array<{ source_url: string; alt_text: string }>;
    "wp:term"?: Array<Array<{ id: number; name: string; slug: string }>>;
  };
};

export type WPCategory = {
  id: number;
  name: string;
  slug: string;
  count: number;
};

export async function getPosts(params?: {
  per_page?: number;
  page?: number;
  category?: number;
  search?: string;
}): Promise<{ posts: WPPost[]; total: number; totalPages: number }> {
  const searchParams = new URLSearchParams({
    _embed: "1",
    per_page: String(params?.per_page || 12),
    page: String(params?.page || 1),
    ...(params?.category ? { categories: String(params.category) } : {}),
    ...(params?.search ? { search: params.search } : {}),
  });

  try {
    const res = await fetch(`${WP_API}/posts?${searchParams}`, {
      next: { revalidate: 3600 },
    });
    if (!res.ok) return { posts: [], total: 0, totalPages: 0 };
    const posts: WPPost[] = await res.json();
    const total = Number(res.headers.get("X-WP-Total") || 0);
    const totalPages = Number(res.headers.get("X-WP-TotalPages") || 0);
    return { posts, total, totalPages };
  } catch {
    return { posts: [], total: 0, totalPages: 0 };
  }
}

export async function getPost(slug: string): Promise<WPPost | null> {
  try {
    const res = await fetch(`${WP_API}/posts?slug=${slug}&_embed=1`, {
      next: { revalidate: 3600 },
    });
    if (!res.ok) return null;
    const posts: WPPost[] = await res.json();
    return posts[0] || null;
  } catch {
    return null;
  }
}

export async function getCategories(): Promise<WPCategory[]> {
  try {
    const res = await fetch(`${WP_API}/categories?per_page=50&hide_empty=true`, {
      next: { revalidate: 86400 },
    });
    if (!res.ok) return [];
    return await res.json();
  } catch {
    return [];
  }
}

export function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, "").trim();
}

export function formatDate(dateStr: string): string {
  const d = new Date(dateStr);
  return `${d.getFullYear()}年${d.getMonth() + 1}月${d.getDate()}日`;
}

export function getFeaturedImage(post: WPPost): string {
  return post._embedded?.["wp:featuredmedia"]?.[0]?.source_url || "/images/blog-placeholder.jpg";
}
