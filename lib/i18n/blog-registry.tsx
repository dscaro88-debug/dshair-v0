// Registry mapping each localized blog post slug to its locale-aware View
// component. The dynamic /[locale]/blog/[slug] route renders the matching
// View. Add new posts here as their View + content module are created.

import type { Locale } from "./config"
import type { ComponentType } from "react"
import { ClipInExtensionsGuideView } from "@/components/blog/clip-in-view"
import { BalayageExtensionsSalonGuideView } from "@/components/blog/balayage-view"
import { FringesBangsExtensionsGuideView } from "@/components/blog/fringes-bangs-extensions-guide-view"
import { HairExtensionsTradeAccountView } from "@/components/blog/hair-extensions-trade-account-view"
import { ManchesterColourCollection2026View } from "@/components/blog/manchester-colour-collection-2026-view"

export const blogViews: Record<string, ComponentType<{ locale: Locale }>> = {
  "clip-in-extensions-guide": ClipInExtensionsGuideView,
  "balayage-extensions-salon-guide": BalayageExtensionsSalonGuideView,
  "fringes-bangs-extensions-guide": FringesBangsExtensionsGuideView,
  "hair-extensions-trade-account": HairExtensionsTradeAccountView,
  "manchester-colour-collection-2026": ManchesterColourCollection2026View,
}
