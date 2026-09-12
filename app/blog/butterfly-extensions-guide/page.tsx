import type { Metadata } from "next"
import { hreflangAlternates } from "@/lib/i18n/config"
import { ButterflyExtensionsGuideView } from "@/components/blog/butterfly-extensions-guide-view"
import { butterflyExtensionsGuideContent } from "@/lib/i18n/blog/butterfly-extensions-guide"

export const metadata: Metadata = {
  alternates: { canonical: "https://www.dshairbeauty.co.uk/blog/butterfly-extensions-guide" },
  title: butterflyExtensionsGuideContent.en.seoTitle,
  description: butterflyExtensionsGuideContent.en.seoDescription,
  robots: { index: true, follow: true },
}

export default function ButterflyExtensionsGuidePage() {
  return <ButterflyExtensionsGuideView locale="en" />
}
