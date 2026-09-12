import type { Metadata } from "next"
import { hreflangAlternates } from "@/lib/i18n/config"
import { BestExtensionsFineHairUkView } from "@/components/blog/best-extensions-fine-hair-uk-view"
import { bestExtensionsFineHairUkContent } from "@/lib/i18n/blog/best-extensions-fine-hair-uk"

export const metadata: Metadata = {
  alternates: { canonical: "https://www.dshairbeauty.co.uk/blog/best-extensions-fine-hair-uk" },
  title: bestExtensionsFineHairUkContent.en.seoTitle,
  description: bestExtensionsFineHairUkContent.en.seoDescription,
  robots: { index: true, follow: true },
}

export default function BestExtensionsFineHairUkPage() {
  return <BestExtensionsFineHairUkView locale="en" />
}
