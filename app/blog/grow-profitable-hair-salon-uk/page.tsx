import type { Metadata } from "next"
import { hreflangAlternates } from "@/lib/i18n/config"
import { GrowProfitableHairSalonUkView } from "@/components/blog/grow-profitable-hair-salon-uk-view"
import { growProfitableHairSalonUkContent } from "@/lib/i18n/blog/grow-profitable-hair-salon-uk"

export const metadata: Metadata = {
  alternates: { canonical: "https://www.dshairbeauty.co.uk/blog/grow-profitable-hair-salon-uk" },
  title: growProfitableHairSalonUkContent.en.seoTitle,
  description: growProfitableHairSalonUkContent.en.seoDescription,
  robots: { index: true, follow: true },
}

export default function GrowProfitableHairSalonUkPage() {
  return <GrowProfitableHairSalonUkView locale="en" />
}
