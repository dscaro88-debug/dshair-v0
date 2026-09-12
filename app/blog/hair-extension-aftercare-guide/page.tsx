import type { Metadata } from "next"
import { hreflangAlternates } from "@/lib/i18n/config"
import { HairExtensionAftercareGuideView } from "@/components/blog/hair-extension-aftercare-guide-view"
import { hairExtensionAftercareGuideContent } from "@/lib/i18n/blog/hair-extension-aftercare-guide"

export const metadata: Metadata = {
  alternates: { canonical: "https://www.dshairbeauty.co.uk/blog/hair-extension-aftercare-guide" },
  title: hairExtensionAftercareGuideContent.en.seoTitle,
  description: hairExtensionAftercareGuideContent.en.seoDescription,
  robots: { index: true, follow: true },
}

export default function HairExtensionAftercareGuidePage() {
  return <HairExtensionAftercareGuideView locale="en" />
}
