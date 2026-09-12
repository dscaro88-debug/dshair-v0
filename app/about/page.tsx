import type { Metadata } from "next"
import { hreflangAlternates } from "@/lib/i18n/config"
import { AboutView } from "@/components/pages/about-view"
import { aboutContent } from "@/lib/i18n/pages/about"

export const metadata: Metadata = {
  title: aboutContent.en.metaTitle,
  description: aboutContent.en.metaDescription,
  alternates: {
    canonical: "https://www.dshairbeauty.co.uk/about",
    languages: hreflangAlternates("/about"),
  },
  openGraph: {
    title: aboutContent.en.metaTitle,
    description: aboutContent.en.metaDescription,
    url: "https://www.dshairbeauty.co.uk/about",
    type: "website",
    locale: "en_GB",
    siteName: "D.S HAIR & BEAUTY",
  },
}

export default function AboutPage() {
  return <AboutView content={aboutContent.en} locale="en" />
}
