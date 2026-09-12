import type { Metadata } from "next"
import { hreflangAlternates } from "@/lib/i18n/config"
import { HairExtensionMethodsComparisonView } from "@/components/blog/hair-extension-methods-comparison-view"
import { hairExtensionMethodsComparisonContent } from "@/lib/i18n/blog/hair-extension-methods-comparison"

export const metadata: Metadata = {
  alternates: { canonical: "https://www.dshairbeauty.co.uk/blog/hair-extension-methods-comparison" },
  title: hairExtensionMethodsComparisonContent.en.seoTitle,
  description: hairExtensionMethodsComparisonContent.en.seoDescription,
  robots: { index: true, follow: true },
}

export default function HairExtensionMethodsComparisonPage() {
  return <HairExtensionMethodsComparisonView locale="en" />
}
