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
import { BestExtensionsFineHairUkView } from "@/components/blog/best-extensions-fine-hair-uk-view"
import { ButterflyExtensionsGuideView } from "@/components/blog/butterfly-extensions-guide-view"
import { ClientStoryPrivateLabelBrandView } from "@/components/blog/client-story-private-label-brand-view"
import { ClientStorySalonGrowthChainView } from "@/components/blog/client-story-salon-growth-chain-view"
import { ClientStoryStylistToFounderView } from "@/components/blog/client-story-stylist-to-founder-view"
import { SalonClientRetentionRebookingGuideView } from "@/components/blog/salon-client-retention-rebooking-guide-view"

export const blogViews: Record<string, ComponentType<{ locale: Locale }>> = {
  "clip-in-extensions-guide": ClipInExtensionsGuideView,
  "balayage-extensions-salon-guide": BalayageExtensionsSalonGuideView,
  "fringes-bangs-extensions-guide": FringesBangsExtensionsGuideView,
  "hair-extensions-trade-account": HairExtensionsTradeAccountView,
  "manchester-colour-collection-2026": ManchesterColourCollection2026View,
  "best-extensions-fine-hair-uk": BestExtensionsFineHairUkView,
  "butterfly-extensions-guide": ButterflyExtensionsGuideView,
  "client-story-private-label-brand": ClientStoryPrivateLabelBrandView,
  "client-story-salon-growth-chain": ClientStorySalonGrowthChainView,
  "client-story-stylist-to-founder": ClientStoryStylistToFounderView,
  "salon-client-retention-rebooking-guide": SalonClientRetentionRebookingGuideView,
}
