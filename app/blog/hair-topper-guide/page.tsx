import type { Metadata } from "next"
import { hreflangAlternates } from "@/lib/i18n/config"
import { HairTopperGuideView } from "@/components/blog/hair-topper-guide-view"
import { hairTopperGuideContent } from "@/lib/i18n/blog/hair-topper-guide"

export const metadata: Metadata = {
  alternates: { canonical: "https://www.dshairbeauty.co.uk/blog/hair-topper-guide" },
  title: hairTopperGuideContent.en.seoTitle,
  description: hairTopperGuideContent.en.seoDescription,
  robots: { index: true, follow: true },
}

export default function HairTopperGuidePage() {
  return <HairTopperGuideView locale="en" />
}
