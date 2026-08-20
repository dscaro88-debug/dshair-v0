import type { Metadata } from "next"
import { ClientStoryPrivateLabelBrandView } from "@/components/blog/client-story-private-label-brand-view"
import { clientStoryPrivateLabelBrandContent } from "@/lib/i18n/blog/client-story-private-label-brand"

export const metadata: Metadata = {
  alternates: { canonical: "https://www.dshairbeauty.co.uk/blog/client-story-private-label-brand" },
  title: clientStoryPrivateLabelBrandContent.en.seoTitle,
  description: clientStoryPrivateLabelBrandContent.en.seoDescription,
  robots: { index: true, follow: true },
}

export default function ClientStoryPrivateLabelBrandPage() {
  return <ClientStoryPrivateLabelBrandView locale="en" />
}
