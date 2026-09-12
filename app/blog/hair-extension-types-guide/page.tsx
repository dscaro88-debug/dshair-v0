import type { Metadata } from "next"
import { hreflangAlternates } from "@/lib/i18n/config"
import { HairExtensionTypesGuideView } from "@/components/blog/hair-extension-types-guide-view"
import { hairExtensionTypesGuideContent } from "@/lib/i18n/blog/hair-extension-types-guide"

export const metadata: Metadata = {
  alternates: { canonical: "https://www.dshairbeauty.co.uk/blog/hair-extension-types-guide" },
  title: hairExtensionTypesGuideContent.en.seoTitle,
  description: hairExtensionTypesGuideContent.en.seoDescription,
  robots: { index: true, follow: true },
}

export default function HairExtensionTypesGuidePage() {
  return <HairExtensionTypesGuideView locale="en" />
}
