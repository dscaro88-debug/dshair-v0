import type { Metadata } from "next"
import { hreflangAlternates } from "@/lib/i18n/config"
import { ManchesterColourCollection2026View } from "@/components/blog/manchester-colour-collection-2026-view"
import { manchesterColourCollection2026Content } from "@/lib/i18n/blog/manchester-colour-collection-2026"

export const metadata: Metadata = {
  alternates: { canonical: "https://www.dshairbeauty.co.uk/blog/manchester-colour-collection-2026" },
  title: manchesterColourCollection2026Content.en.seoTitle,
  description: manchesterColourCollection2026Content.en.seoDescription,
  robots: { index: true, follow: true },
}

export default function ManchesterColourCollection2026Page() {
  return <ManchesterColourCollection2026View locale="en" />
}
