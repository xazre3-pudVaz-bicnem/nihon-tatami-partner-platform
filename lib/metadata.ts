import type { Metadata } from "next";
import { SITE_NAME, SITE_URL, SITE_DESCRIPTION, OG_IMAGE } from "./site";

export { SITE_NAME, SITE_URL };
export const PLATFORM_URL = "#";

export function buildMetadata({
  title,
  description,
  path = "",
  image,
}: {
  title: string;
  description: string;
  path?: string;
  image?: string;
}): Metadata {
  const url = `${SITE_URL}${path}`;
  const ogImage = image || OG_IMAGE;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      locale: "ja_JP",
      type: "website",
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export const defaultMetadata: Metadata = buildMetadata({
  title: `${SITE_NAME} | 畳・内装・原状回復の専門パートナー`,
  description: SITE_DESCRIPTION,
});
