import type { Metadata } from "next"
import { ClientStorySalonGrowthChainView } from "@/components/blog/client-story-salon-growth-chain-view"
import { clientStorySalonGrowthChainContent } from "@/lib/i18n/blog/client-story-salon-growth-chain"

export const metadata: Metadata = {
  alternates: { canonical: "https://www.dshairbeauty.co.uk/blog/client-story-salon-growth-chain" },
  title: clientStorySalonGrowthChainContent.en.seoTitle,
  description: clientStorySalonGrowthChainContent.en.seoDescription,
  robots: { index: true, follow: true },
}

export default function ClientStorySalonGrowthChainPage() {
  return <ClientStorySalonGrowthChainView locale="en" />
}
