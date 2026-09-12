import type { Metadata } from "next"
import { hreflangAlternates } from "@/lib/i18n/config"
import { HowToStartSellingHairExtensionsSalonView } from "@/components/blog/how-to-start-selling-hair-extensions-salon-view"
import { howToStartSellingHairExtensionsSalonContent } from "@/lib/i18n/blog/how-to-start-selling-hair-extensions-salon"

export const metadata: Metadata = {
  alternates: { canonical: "https://www.dshairbeauty.co.uk/blog/how-to-start-selling-hair-extensions-salon" },
  title: howToStartSellingHairExtensionsSalonContent.en.seoTitle,
  description: howToStartSellingHairExtensionsSalonContent.en.seoDescription,
  robots: { index: true, follow: true },
}

export default function HowToStartSellingHairExtensionsSalonPage() {
  return <HowToStartSellingHairExtensionsSalonView locale="en" />
}
