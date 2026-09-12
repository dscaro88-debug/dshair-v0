import type { Metadata } from "next"
import { hreflangAlternates } from "@/lib/i18n/config"
import { HowToChooseHairExtensionSupplierView } from "@/components/blog/how-to-choose-hair-extension-supplier-view"
import { howToChooseHairExtensionSupplierContent } from "@/lib/i18n/blog/how-to-choose-hair-extension-supplier"

export const metadata: Metadata = {
  alternates: { canonical: "https://www.dshairbeauty.co.uk/blog/how-to-choose-hair-extension-supplier" },
  title: howToChooseHairExtensionSupplierContent.en.seoTitle,
  description: howToChooseHairExtensionSupplierContent.en.seoDescription,
  robots: { index: true, follow: true },
}

export default function HowToChooseHairExtensionSupplierPage() {
  return <HowToChooseHairExtensionSupplierView locale="en" />
}
