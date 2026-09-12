import { Header } from "@/components/layout/header"
import { BlogJsonLd } from "@/components/seo/blog-jsonld"
import { Footer } from "@/components/layout/footer"
import { CartDrawer } from "@/components/cart/cart-drawer"
import { CartProvider } from "@/lib/cart-context"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, Clock, Sparkles, Droplets, Scissors, Calendar } from "lucide-react"
import { RelatedGuides } from "@/components/blog/related-guides"
import { BlogFaqSection } from "@/components/blog/blog-faq-section"
import { localeHref } from "@/lib/i18n/routing"
import type { Locale } from "@/lib/i18n/config"
import { hairExtensionAftercareGuideContent } from "@/lib/i18n/blog/hair-extension-aftercare-guide"

export function HairExtensionAftercareGuideView({ locale }: { locale: Locale }) {
  const c = hairExtensionAftercareGuideContent[locale]

  return (
    <CartProvider>
      <BlogJsonLd slug="hair-extension-aftercare-guide" locale={locale} />
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          {/* ── JSON-LD ───────────────────────────── */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "BlogPosting",
                "headline": c.jsonLdHeadline,
                "description": c.jsonLdDescription,
                "url": "https://www.dshairbeauty.co.uk/blog/hair-extension-aftercare-guide",
                "datePublished": "2026-05-01",
                "author": { "@type": "Organization", "name": "D.S HAIR & BEAUTY" },
                "publisher": { "@type": "Organization", "name": "D.S HAIR & BEAUTY" },
              })
            }}
          />

          {/* ── Hero ─────────────────────────────────── */}
          <section className="relative bg-[#4A1942] text-white overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: "radial-gradient(circle at 20% 50%, #C9A84C 0%, transparent 50%), radial-gradient(circle at 80% 50%, #7B3A6E 0%, transparent 50%)"
              }} />
            </div>
            <div className="relative max-w-4xl mx-auto px-4 md:px-6 py-20 md:py-28 text-center">
              <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 text-sm mb-6 text-amber-300">
                <Sparkles className="h-4 w-4" /> {c.heroBadge}
              </div>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium mb-6 leading-tight">
                {c.heroTitleLine1}<br />{c.heroTitleLine2}
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

          {/* ── Quick Stats ───────────────────────────── */}
          <section className="bg-[#FDF8F0] border-y border-amber-100">
            <div className="max-w-5xl mx-auto px-4 py-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                {c.stats.map(({ num, label }) => (
                  <div key={label}>
                    <div className="text-3xl font-bold text-[#4A1942]">{num}</div>
                    <div className="text-sm text-[#6B3A6E] mt-1">{label}</div>
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
            <div className="flex items-center gap-3 text-xs text-muted-foreground mb-8">
              <span className="bg-[#4A1942]/10 text-[#4A1942] rounded-full px-3 py-1 font-medium">{c.metaCategory}</span>
              <span>{c.metaDate}</span>
              <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {c.metaReadTime}</span>
            </div>

            <div className="prose prose-lg max-w-none">

              {/* ── First 48 Hours ─────────────────── */}
              <h2 className="font-serif text-3xl md:text-4xl font-medium mt-12 mb-6">{c.firstHeading}</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                {c.firstP}
              </p>
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-8">
                <h3 className="font-bold text-amber-800 mb-4 flex items-center gap-2">
                  <Calendar className="h-5 w-5" /> {c.firstChecklistHeading}
                </h3>
                <ul className="space-y-3">
                  {c.firstChecklist.map(item => (
                    <li key={item} className="text-sm text-gray-700">{item}</li>
                  ))}
                </ul>
              </div>

              {/* ── Washing ────────────────────────── */}
              <h2 className="font-serif text-3xl md:text-4xl font-medium mt-12 mb-6">{c.washHeading}</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                {c.washP}
              </p>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                  <h3 className="font-bold text-green-800 mb-4 flex items-center gap-2">
                    <Droplets className="h-5 w-5" /> {c.doHeading}
                  </h3>
                  <ul className="space-y-2 text-sm">
                    {c.doItems.map(item => (
                      <li key={item} className="flex items-start gap-2 text-green-700">
                        <span className="shrink-0">✓</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                  <h3 className="font-bold text-red-800 mb-4 flex items-center gap-2">
                    <Droplets className="h-5 w-5" /> {c.dontHeading}
                  </h3>
                  <ul className="space-y-2 text-sm">
                    {c.dontItems.map(item => (
                      <li key={item} className="flex items-start gap-2 text-red-700">
                        <span className="shrink-0">✗</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* ── Sleeping ───────────────────────── */}
              <h2 className="font-serif text-3xl md:text-4xl font-medium mt-12 mb-6">{c.sleepHeading}</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                {c.sleepP}
              </p>
              <ul className="space-y-3 mb-8">
                {c.sleepItems.map(({ title, desc }) => (
                  <li key={title} className="flex gap-3 p-4 bg-white border rounded-xl">
                    <span className="text-[#4A1942] text-xl shrink-0">💤</span>
                    <div>
                      <strong className="block">{title}</strong>
                      <span className="text-sm text-muted-foreground">{desc}</span>
                    </div>
                  </li>
                ))}
              </ul>

              {/* ── Brushing ───────────────────────── */}
              <h2 className="font-serif text-3xl md:text-4xl font-medium mt-12 mb-6">{c.brushHeading}</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                {c.brushP}
              </p>
              <div className="bg-[#4A1942]/5 rounded-xl p-6 mb-8">
                <h3 className="font-bold mb-4 flex items-center gap-2">
                  <Scissors className="h-5 w-5 text-[#4A1942]" /> {c.brushTechniqueHeading}
                </h3>
                <ol className="space-y-3">
                  {c.brushSteps.map((step, i) => (
                    <li key={step} className="flex gap-3 text-sm">
                      <span className="bg-[#4A1942] text-white w-6 h-6 rounded-full flex items-center justify-center text-xs shrink-0">{i + 1}</span>
                      <span className="text-gray-700">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>

              {/* ── Products ────────────────────────── */}
              <h2 className="font-serif text-3xl md:text-4xl font-medium mt-12 mb-6">{c.productsHeading}</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                {c.productsP}
              </p>

              <div className="grid md:grid-cols-3 gap-4 mb-8">
                {c.products.map(({ name, desc, price }) => (
                  <div key={name} className="bg-white border rounded-xl p-4 hover:shadow-md transition-shadow">
                    <h4 className="font-bold text-sm mb-1">{name}</h4>
                    <p className="text-xs text-muted-foreground mb-2">{desc}</p>
                    <span className="text-xs font-bold text-[#4A1942]">{price}</span>
                  </div>
                ))}
              </div>
              <div className="text-center mb-8">
                <Button className="bg-[#4A1942] hover:bg-[#3a1335] text-white" asChild>
                  <Link href={localeHref(c.productsCtaHref, locale)}>{c.productsCtaLabel}</Link>
                </Button>
              </div>

              {/* ── Salon Maintenance ──────────────── */}
              <h2 className="font-serif text-3xl md:text-4xl font-medium mt-12 mb-6">{c.maintenanceHeading}</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                {c.maintenanceP}
              </p>
              <div className="overflow-x-auto mb-8">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-[#4A1942] text-white">
                      {c.maintenanceTable.headers.map((h) => (
                        <th key={h} className="p-3 text-left">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {c.maintenanceTable.rows.map(({ type, tighten, replace }) => (
                      <tr key={type} className="border-b">
                        <td className="p-3 font-medium">{type}</td>
                        <td className="p-3">{tighten}</td>
                        <td className="p-3">{replace}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* ── CTA ─────────────────────────────── */}
              <div className="mt-16 bg-gradient-to-r from-[#4A1942] to-[#7B3A6E] rounded-2xl p-8 md:p-12 text-center text-white">
                <h3 className="font-serif text-2xl md:text-3xl font-medium mb-4">{c.ctaBoxTitle}</h3>
                <p className="text-white/80 mb-8 max-w-lg mx-auto">
                  {c.ctaBoxBody}
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button className="bg-amber-500 hover:bg-amber-600 text-white" asChild>
                    <Link href={localeHref(c.ctaBoxPrimaryHref, locale)}>{c.ctaBoxPrimaryLabel}</Link>
                  </Button>
                  <Button variant="outline" className="border-white/40 text-white hover:bg-white/10" asChild>
                    <Link href={localeHref(c.ctaBoxSecondaryHref, locale)}>{c.ctaBoxSecondaryLabel}</Link>
                  </Button>
                </div>
              </div>

            </div>
          </article>
        </main>
        <BlogFaqSection slug="hair-extension-aftercare-guide" title={c.faqHeading} locale={locale} />
        <RelatedGuides slug="hair-extension-aftercare-guide" locale={locale} />
        <Footer />
        <CartDrawer />
      </div>
    </CartProvider>
  )
}
