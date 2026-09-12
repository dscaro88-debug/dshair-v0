import type { Metadata } from "next"
import { hreflangAlternates } from "@/lib/i18n/config"
import { HandTiedWeftGuideView } from "@/components/blog/hand-tied-weft-guide-view"
import { handTiedWeftGuideContent } from "@/lib/i18n/blog/hand-tied-weft-guide"

export const metadata: Metadata = {
  alternates: { canonical: "https://www.dshairbeauty.co.uk/blog/hand-tied-weft-guide" },
  title: handTiedWeftGuideContent.en.seoTitle,
  description: handTiedWeftGuideContent.en.seoDescription,
  robots: { index: true, follow: true },
}

export default function HandTiedWeftGuidePage() {
  return <HandTiedWeftGuideView locale="en" />
}
