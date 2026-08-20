import type { Metadata } from "next"
import { FringesBangsExtensionsGuideView } from "@/components/blog/fringes-bangs-extensions-guide-view"
import { fringesBangsExtensionsGuideContent } from "@/lib/i18n/blog/fringes-bangs-extensions-guide"

export const metadata: Metadata = {
  alternates: { canonical: "https://www.dshairbeauty.co.uk/blog/fringes-bangs-extensions-guide" },
  title: fringesBangsExtensionsGuideContent.en.seoTitle,
  description: fringesBangsExtensionsGuideContent.en.seoDescription,
  robots: {
    index: true,
    follow: true,
  },
}

export default function FringesBangsExtensionsGuidePage() {
  return <FringesBangsExtensionsGuideView locale="en" />
}
