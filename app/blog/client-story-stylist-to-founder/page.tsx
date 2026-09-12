import type { Metadata } from "next"
import { hreflangAlternates } from "@/lib/i18n/config"
import { ClientStoryStylistToFounderView } from "@/components/blog/client-story-stylist-to-founder-view"
import { clientStoryStylistToFounderContent } from "@/lib/i18n/blog/client-story-stylist-to-founder"

export const metadata: Metadata = {
  alternates: { canonical: "https://www.dshairbeauty.co.uk/blog/client-story-stylist-to-founder" },
  title: clientStoryStylistToFounderContent.en.seoTitle,
  description: clientStoryStylistToFounderContent.en.seoDescription,
  robots: { index: true, follow: true },
}

export default function ClientStoryStylistToFounderPage() {
  return <ClientStoryStylistToFounderView locale="en" />
}
