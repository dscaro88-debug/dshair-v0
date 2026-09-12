import type { Metadata } from "next"
import { hreflangAlternates } from "@/lib/i18n/config"
import { SalonClientRetentionRebookingGuideView } from "@/components/blog/salon-client-retention-rebooking-guide-view"
import { salonClientRetentionRebookingGuideContent } from "@/lib/i18n/blog/salon-client-retention-rebooking-guide"

export const metadata: Metadata = {
  alternates: { canonical: "https://www.dshairbeauty.co.uk/blog/salon-client-retention-rebooking-guide" },
  title: salonClientRetentionRebookingGuideContent.en.seoTitle,
  description: salonClientRetentionRebookingGuideContent.en.seoDescription,
  robots: { index: true, follow: true },
}

export default function SalonClientRetentionRebookingGuidePage() {
  return <SalonClientRetentionRebookingGuideView locale="en" />
}
