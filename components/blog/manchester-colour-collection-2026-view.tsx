import { Header } from "@/components/layout/header"
import { BlogJsonLd } from "@/components/seo/blog-jsonld"
import { Footer } from "@/components/layout/footer"
import { CartDrawer } from "@/components/cart/cart-drawer"
import { CartProvider } from "@/lib/cart-context"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, Clock, Sparkles, Palette } from "lucide-react"
import { RelatedGuides } from "@/components/blog/related-guides"
import { BlogFaqSection } from "@/components/blog/blog-faq-section"
import { localeHref } from "@/lib/i18n/routing"
import type { Locale } from "@/lib/i18n/config"
import { manchesterColourCollection2026Content } from "@/lib/i18n/blog/manchester-colour-collection-2026"

export function ManchesterColourCollection2026View({ locale }: { locale: Locale }) {
  const c = manchesterColourCollection2026Content[locale]

  return (
    <CartProvider>
      <BlogJsonLd slug="manchester-colour-collection-2026" locale={locale} />
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">

          {/* ── Hero ─────────────────────────────────── */}
          <section className="relative bg-[#1C1C2E] text-white overflow-hidden">
            <div className="absolute inset-0 opacity-20">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 15% 50%, #C9A84C 0%, transparent 45%), radial-gradient(circle at 85% 30%, #8B6A9A 0%, transparent 50%), radial-gradient(circle at 50% 80%, #D4956A 0%, transparent 40%)",
                }}
              />
            </div>
            <div className="relative max-w-4xl mx-auto px-4 md:px-6 py-20 md:py-28 text-center">
              <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 text-sm mb-6 text-amber-300">
                <Palette className="h-4 w-4" /> {c.heroBadge}
              </div>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium mb-6 leading-tight">
                {c.heroTitleLines[0]}<br />
                <span className="text-amber-300">{c.heroTitleLines[1]}</span>
              </h1>
              <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10">
                {c.heroSubtitle}
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button className="bg-amber-500 hover:bg-amber-600 text-white" asChild>
                  <Link href={localeHref(c.ctaPrimaryHref, locale)}>{c.ctaPrimaryLabel}</Link>
                </Button>
                <Button variant="outline" className="border-white/30 text-white hover:bg-white/10" asChild>
                  <Link href={localeHref(c.ctaSecondaryHref, locale)}>{c.ctaSecondaryLabel}</Link>
                </Button>
              </div>
            </div>
          </section>

          {/* ── Colour Swatch Bar ─────────────────────── */}
          <section className="bg-white border-b">
            <div className="max-w-5xl mx-auto px-4 py-6">
              <div className="flex justify-center gap-3 flex-wrap">
                {c.colourSwatches.map((colour) => (
                  <div key={colour.name} className="flex flex-col items-center gap-1.5">
                    <div
                      className="w-10 h-10 rounded-full border border-gray-200 shadow-sm"
                      style={{ backgroundColor: colour.hex }}
                    />
                    <span className="text-[10px] text-muted-foreground text-center max-w-[60px] leading-tight">
                      {colour.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <article className="max-w-4xl mx-auto px-4 md:px-6 py-16">

            {/* ── Breadcrumb ───────────────────────── */}
            <Link href={localeHref("/blog", locale)} className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8">
              <ArrowLeft className="h-4 w-4" /> {c.breadcrumb}
            </Link>

            {/* Meta */}
            <div className="flex items-center gap-3 text-xs text-muted-foreground mb-10">
              <span className="bg-primary/10 text-primary rounded-full px-3 py-1 font-medium">{c.metaCategory}</span>
              <span>{c.metaDate}</span>
              <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {c.metaReadTime}</span>
            </div>

            {/* ── SECTION 1: Core Shades ───────────── */}
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl">✦</span>
                <h2 className="font-serif text-3xl md:text-4xl font-medium">
                  {c.section1Heading}
                </h2>
              </div>
              <p className="text-lg text-muted-foreground mb-10 pl-9">
                {c.section1Subtitle}
              </p>

              {/* Card 1: Icy Manchester */}
              <div className="rounded-2xl overflow-hidden border bg-card mb-8">
                <div className="h-3" style={{ background: "linear-gradient(to right, #F0EFED, #E8E4D8, #F5F0E8)" }} />
                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-serif text-2xl font-medium mb-1">{c.cards[0].title}</h3>
                      <p className="text-sm text-muted-foreground font-mono">{c.cards[0].shadesPrefix} {c.cards[0].shadesValue}</p>
                    </div>
                    <div className="flex gap-2 shrink-0">
                      {["#F0EFED", "#E8E4D8", "#F5F0E8"].map((col) => (
                        <div key={col} className="w-8 h-8 rounded-full border border-gray-200" style={{ backgroundColor: col }} />
                      ))}
                    </div>
                  </div>
                  <p className="text-base text-foreground leading-relaxed mb-4">
                    {c.cards[0].para1}
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {c.cards[0].para2}
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 text-sm bg-secondary/50 rounded-xl p-4">
                    <div>
                      <span className="font-medium">{c.bestForLabel}</span>
                      <span className="text-muted-foreground ml-2">{c.cards[0].bestForValue}</span>
                    </div>
                    <div>
                      <span className="font-medium">{c.clientProfileLabel}</span>
                      <span className="text-muted-foreground ml-2">{c.cards[0].clientProfileValue}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 2: Cookies & Cream */}
              <div className="rounded-2xl overflow-hidden border bg-card mb-8">
                <div className="h-3" style={{ background: "linear-gradient(to right, #C9A97A, #B8956A, #D4B090)" }} />
                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-serif text-2xl font-medium mb-1">{c.cards[1].title}</h3>
                      <p className="text-sm text-muted-foreground font-mono">{c.cards[1].shadesPrefix} {c.cards[1].shadesValue}</p>
                    </div>
                    <div className="flex gap-2 shrink-0">
                      {["#C9A97A", "#B8956A", "#D4B090"].map((col) => (
                        <div key={col} className="w-8 h-8 rounded-full border border-gray-200" style={{ backgroundColor: col }} />
                      ))}
                    </div>
                  </div>
                  <p className="text-base text-foreground leading-relaxed mb-4">
                    {c.cards[1].para1}
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {c.cards[1].para2}
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 text-sm bg-secondary/50 rounded-xl p-4">
                    <div>
                      <span className="font-medium">{c.bestForLabel}</span>
                      <span className="text-muted-foreground ml-2">{c.cards[1].bestForValue}</span>
                    </div>
                    <div>
                      <span className="font-medium">{c.clientProfileLabel}</span>
                      <span className="text-muted-foreground ml-2">{c.cards[1].clientProfileValue}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 3: Espresso */}
              <div className="rounded-2xl overflow-hidden border bg-card mb-8">
                <div className="h-3" style={{ background: "linear-gradient(to right, #2C1810, #4A2C1A, #3A2010)" }} />
                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-serif text-2xl font-medium mb-1">{c.cards[2].title}</h3>
                      <p className="text-sm text-muted-foreground font-mono">{c.cards[2].shadesPrefix} {c.cards[2].shadesValue}</p>
                    </div>
                    <div className="flex gap-2 shrink-0">
                      {["#2C1810", "#4A2C1A", "#6B3A20"].map((col) => (
                        <div key={col} className="w-8 h-8 rounded-full border border-gray-200" style={{ backgroundColor: col }} />
                      ))}
                    </div>
                  </div>
                  <p className="text-base text-foreground leading-relaxed mb-4">
                    {c.cards[2].para1}
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {c.cards[2].para2}
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 text-sm bg-secondary/50 rounded-xl p-4">
                    <div>
                      <span className="font-medium">{c.bestForLabel}</span>
                      <span className="text-muted-foreground ml-2">{c.cards[2].bestForValue}</span>
                    </div>
                    <div>
                      <span className="font-medium">{c.clientProfileLabel}</span>
                      <span className="text-muted-foreground ml-2">{c.cards[2].clientProfileValue}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ── SECTION 2: Trend Shades ──────────── */}
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-2">
                <Sparkles className="h-6 w-6 text-amber-500" />
                <h2 className="font-serif text-3xl md:text-4xl font-medium">
                  {c.section2Heading}
                </h2>
              </div>
              <p className="text-lg text-muted-foreground mb-10 pl-9">
                {c.section2Subtitle}
              </p>

              {/* Card 4: Manchester Melt */}
              <div className="rounded-2xl overflow-hidden border bg-card mb-8">
                <div className="h-3" style={{ background: "linear-gradient(to right, #3A2C18, #8B6340, #D4B080)" }} />
                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-serif text-2xl font-medium mb-1">{c.cards[3].title}</h3>
                      <p className="text-sm text-muted-foreground font-mono">{c.cards[3].shadesPrefix} {c.cards[3].shadesValue}</p>
                    </div>
                    <div className="flex gap-2 shrink-0">
                      {["#3A2C18", "#8B6340", "#D4B080"].map((col) => (
                        <div key={col} className="w-8 h-8 rounded-full border border-gray-200" style={{ backgroundColor: col }} />
                      ))}
                    </div>
                  </div>
                  <p className="text-base text-foreground leading-relaxed mb-4">
                    {c.cards[3].para1}
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {c.cards[3].para2}
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 text-sm bg-secondary/50 rounded-xl p-4">
                    <div>
                      <span className="font-medium">{c.bestForLabel}</span>
                      <span className="text-muted-foreground ml-2">{c.cards[3].bestForValue}</span>
                    </div>
                    <div>
                      <span className="font-medium">{c.clientProfileLabel}</span>
                      <span className="text-muted-foreground ml-2">{c.cards[3].clientProfileValue}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 5: Cinnamon Copper */}
              <div className="rounded-2xl overflow-hidden border bg-card mb-8">
                <div className="h-3" style={{ background: "linear-gradient(to right, #8B3A1A, #C46A3A, #E08050)" }} />
                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-serif text-2xl font-medium mb-1">{c.cards[4].title}</h3>
                      <p className="text-sm text-muted-foreground font-mono">{c.cards[4].shadesPrefix} {c.cards[4].shadesValue}</p>
                    </div>
                    <div className="flex gap-2 shrink-0">
                      {["#8B3A1A", "#C46A3A", "#E08050"].map((col) => (
                        <div key={col} className="w-8 h-8 rounded-full border border-gray-200" style={{ backgroundColor: col }} />
                      ))}
                    </div>
                  </div>
                  <p className="text-base text-foreground leading-relaxed mb-4">
                    {c.cards[4].para1}
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {c.cards[4].para2}
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 text-sm bg-secondary/50 rounded-xl p-4">
                    <div>
                      <span className="font-medium">{c.bestForLabel}</span>
                      <span className="text-muted-foreground ml-2">{c.cards[4].bestForValue}</span>
                    </div>
                    <div>
                      <span className="font-medium">{c.clientProfileLabel}</span>
                      <span className="text-muted-foreground ml-2">{c.cards[4].clientProfileValue}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ── CTA ─────────────────────────────────── */}
            <div className="rounded-2xl bg-[#1C1C2E] text-white p-8 md:p-12 text-center relative overflow-hidden">
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage: "radial-gradient(circle at 30% 50%, #C9A84C 0%, transparent 50%), radial-gradient(circle at 70% 50%, #8B6A9A 0%, transparent 50%)",
                }}
              />
              <div className="relative">
                <p className="text-amber-300 text-sm tracking-widest uppercase mb-4">{c.ctaBoxLabel}</p>
                <h3 className="font-serif text-2xl md:text-3xl font-medium mb-4">
                  {c.ctaBoxTitle}
                </h3>
                <p className="text-white/70 mb-8 max-w-xl mx-auto">
                  {c.ctaBoxBody}
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button className="bg-amber-500 hover:bg-amber-600 text-white" asChild>
                    <Link href={localeHref(c.ctaBoxPrimaryHref, locale)}>{c.ctaBoxPrimaryLabel}</Link>
                  </Button>
                  <Button variant="outline" className="border-white/30 text-white hover:bg-white/10" asChild>
                    <Link href={localeHref(c.ctaBoxSecondaryHref, locale)}>{c.ctaBoxSecondaryLabel}</Link>
                  </Button>
                </div>
              </div>
            </div>

          </article>
        </main>
        <BlogFaqSection slug="manchester-colour-collection-2026" title={c.faqHeading} locale={locale} />
        <RelatedGuides slug="manchester-colour-collection-2026" locale={locale} />
        <Footer />
        <CartDrawer />
      </div>
    </CartProvider>
  )
}
