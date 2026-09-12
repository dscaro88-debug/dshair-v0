import type { Metadata } from "next"
import { hreflangAlternates } from "@/lib/i18n/config"
import { ClipInExtensionsGuideView } from "@/components/blog/clip-in-view"
import { clipInContent } from "@/lib/i18n/blog/clip-in-extensions-guide"

export const metadata: Metadata = {
  alternates: { canonical: "https://www.dshairbeauty.co.uk/blog/clip-in-extensions-guide" },
  title: clipInContent.en.seoTitle,
  description: clipInContent.en.seoDescription,
  robots: { index: true, follow: true },
}

export default function ClipInExtensionsGuidePage() {
  return <ClipInExtensionsGuideView locale="en" />
}
