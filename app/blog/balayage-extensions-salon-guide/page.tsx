import type { Metadata } from "next"
import { hreflangAlternates } from "@/lib/i18n/config"
import { BalayageExtensionsSalonGuideView } from "@/components/blog/balayage-view"
import { balayageExtensionsSalonGuideContent } from "@/lib/i18n/blog/balayage-extensions-salon-guide"

export const metadata: Metadata = {
  alternates: { canonical: "https://www.dshairbeauty.co.uk/blog/balayage-extensions-salon-guide" },
  title: balayageExtensionsSalonGuideContent.en.seoTitle,
  description: balayageExtensionsSalonGuideContent.en.seoDescription,
  robots: { index: true, follow: true },
}

export default function BalayageExtensionsSalonGuidePage() {
  return <BalayageExtensionsSalonGuideView locale="en" />
}
