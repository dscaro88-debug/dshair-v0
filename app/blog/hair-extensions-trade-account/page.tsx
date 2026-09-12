import type { Metadata } from "next"
import { hreflangAlternates } from "@/lib/i18n/config"
import { HairExtensionsTradeAccountView } from "@/components/blog/hair-extensions-trade-account-view"
import { hairExtensionsTradeAccountContent } from "@/lib/i18n/blog/hair-extensions-trade-account"

export const metadata: Metadata = {
  alternates: { canonical: "https://www.dshairbeauty.co.uk/blog/hair-extensions-trade-account" },
  title: hairExtensionsTradeAccountContent.en.seoTitle,
  description: hairExtensionsTradeAccountContent.en.seoDescription,
  robots: { index: true, follow: true },
}

export default function HairExtensionsTradeAccountPage() {
  return <HairExtensionsTradeAccountView locale="en" />
}
