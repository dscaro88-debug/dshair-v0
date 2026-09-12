import type { Metadata } from "next"
import { hreflangAlternates } from "@/lib/i18n/config"
import { HairExtensionProfitMarginGuideView } from "@/components/blog/hair-extension-profit-margin-guide-view"
import { hairExtensionProfitMarginGuideContent } from "@/lib/i18n/blog/hair-extension-profit-margin-guide"

export const metadata: Metadata = {
  alternates: { canonical: "https://www.dshairbeauty.co.uk/blog/hair-extension-profit-margin-guide" },
  title: hairExtensionProfitMarginGuideContent.en.seoTitle,
  description: hairExtensionProfitMarginGuideContent.en.seoDescription,
  robots: { index: true, follow: true },
}

export default function HairExtensionProfitMarginGuidePage() {
  return <HairExtensionProfitMarginGuideView locale="en" />
}
