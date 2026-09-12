import { Header } from "@/components/layout/header"
import { BlogJsonLd } from "@/components/seo/blog-jsonld"
import { Footer } from "@/components/layout/footer"
import { CartDrawer } from "@/components/cart/cart-drawer"
import { CartProvider } from "@/lib/cart-context"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, Calculator, TrendingUp, PoundSterling, BarChart3 } from "lucide-react"
import Image from "next/image"
import { RelatedGuides } from "@/components/blog/related-guides"
import { BlogFaqSection } from "@/components/blog/blog-faq-section"
import { localeHref } from "@/lib/i18n/routing"
import type { Locale } from "@/lib/i18n/config"
import { hairExtensionProfitMarginGuideContent } from "@/lib/i18n/blog/hair-extension-profit-margin-guide"

export function HairExtensionProfitMarginGuideView({ locale }: { locale: Locale }) {
  const c = hairExtensionProfitMarginGuideContent[locale]

  return (
    <CartProvider>
      <BlogJsonLd slug="hair-extension-profit-margin-guide" locale={locale} />
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          {/* ── Hero ─────────────────────────────────── */}
          <section className="relative bg-[#4A1942] text-white overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: "radial-gradient(circle at 20% 50%, #C9A84C 0%, transparent 50%), radial-gradient(circle at 80% 50%, #7B3A6E 0%, transparent 50%)"
              }} />
            </div>
            <div className="relative max-w-4xl mx-auto px-4 md:px-6 py-20 md:py-28 text-center">
              <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 text-sm mb-6 text-amber-300">
                {c.heroBadge}
              </div>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium mb-6 leading-tight">
                {c.heroTitle}
              </h1>
              <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10">
                {c.heroSubtitle}
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button className="bg-amber-500 hover:bg-amber-600 text-white" asChild>
                  <Link href={localeHref(c.heroPrimaryHref, locale)}>{c.heroPrimaryLabel}</Link>
                </Button>
                <Button variant="outline" className="border-white/30 text-white hover:bg-white/10" asChild>
                  <Link href={localeHref(c.heroSecondaryHref, locale)}>{c.heroSecondaryLabel}</Link>
                </Button>
              </div>
            </div>
          </section>

          {/* ── Quick Nav ─────────────────────────────── */}
          <div className="bg-[#FDF8F0] border-b border-amber-100">
            <div className="max-w-5xl mx-auto px-4 py-3">
              <nav className="flex items-center gap-2 text-sm text-muted-foreground">
                <Link href={localeHref("/", locale)} className="hover:text-[#4A1942]">{c.navHome}</Link>
                <span>/</span>
                <Link href={localeHref("/blog", locale)} className="hover:text-[#4A1942]">{c.navBlog}</Link>
                <span>/</span>
                <span className="text-[#4A1942] font-medium">{c.navCurrent}</span>
              </nav>
            </div>
          </div>

          <article className="max-w-4xl mx-auto px-4 md:px-6 py-16">
            <div className="flex items-center gap-3 mb-8 p-4 bg-[#FDF8F0] border border-amber-100 rounded-xl not-prose">
              <div className="w-10 h-10 rounded-full bg-[#4A1942] text-white flex items-center justify-center font-medium text-sm shrink-0">{c.authorAvatar}</div>
              <p className="text-sm text-[#6B3A6E]">
                {c.authorBy} <Link href={localeHref(c.authorNameHref, locale)} className="text-[#4A1942] font-semibold underline">{c.authorName}</Link>, {c.authorTitle}
              </p>
            </div>

            <div className="prose prose-lg max-w-none">

              {/* ── Why Extensions Are Your Highest-Margin Service ── */}
              <h2 className="font-serif text-3xl md:text-4xl font-medium mt-8 mb-6">{c.whyHeading}</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                {c.whyP1Lead}<strong>{c.whyP1Strong}</strong>{c.whyP1Tail}
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                {c.whyP2}
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                {c.whyP3Lead}<strong>{c.whyP3Strong}</strong>{c.whyP3Tail}
              </p>

              {/* ── Hero Image ──────────────────────────── */}
              <div className="relative rounded-2xl overflow-hidden mb-12 aspect-[16/9]">
                <Image src={c.heroImageSrc} alt={c.heroImageAlt} fill className="object-cover" />
              </div>

              {/* ── Margin Breakdown By Method ────────────── */}
              <h2 className="font-serif text-3xl md:text-4xl font-medium mt-12 mb-6">{c.marginHeading}</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                {c.marginIntroLead}<strong>{c.marginIntroStrong}</strong>{c.marginIntroTail}
              </p>

              <div className="not-prose overflow-x-auto mb-10">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="bg-[#4A1942] text-white">
                      <th className="text-left p-3 rounded-tl-lg">{c.marginTableHead[0]}</th>
                      <th className="text-right p-3">{c.marginTableHead[1]}</th>
                      <th className="text-right p-3">{c.marginTableHead[2]}</th>
                      <th className="text-right p-3">{c.marginTableHead[3]}</th>
                      <th className="text-right p-3 rounded-tr-lg">{c.marginTableHead[4]}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {c.marginRows.map((row, i) => (
                      <tr key={row.method} className={i % 2 === 0 ? "bg-[#FDF8F0]" : "bg-white"}>
                        <td className="p-3 font-medium text-[#4A1942]">{row.method}</td>
                        <td className="text-right p-3 text-muted-foreground">{row.cost}</td>
                        <td className="text-right p-3 text-muted-foreground">{row.price}</td>
                        <td className="text-right p-3 font-semibold text-green-700">{row.margin}</td>
                        <td className="text-right p-3 font-bold text-[#4A1942]">{row.pct}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-muted-foreground mb-8">
                <em>{c.marginNote}</em>
              </p>

              {/* ── Retail vs Trade: The Hidden Cost ───────── */}
              <h2 className="font-serif text-3xl md:text-4xl font-medium mt-12 mb-6">{c.retailHeading}</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                {c.retailIntro}
              </p>

              <div className="not-prose grid md:grid-cols-2 gap-5 mb-10">
                <div className="bg-red-50 border border-red-200 rounded-xl p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <PoundSterling className="h-5 w-5 text-red-600" />
                    <h4 className="font-semibold text-red-800">{c.retailCard.title}</h4>
                  </div>
                  <ul className="space-y-2 text-sm text-red-700">
                    {c.retailCard.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                    <li><strong>{c.retailCard.marginLine}</strong></li>
                    <li className="mt-2 pt-2 border-t border-red-200">{c.retailCard.footer}</li>
                  </ul>
                </div>
                <div className="bg-green-50 border border-green-200 rounded-xl p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <TrendingUp className="h-5 w-5 text-green-600" />
                    <h4 className="font-semibold text-green-800">{c.tradeCard.title}</h4>
                  </div>
                  <ul className="space-y-2 text-sm text-green-700">
                    {c.tradeCard.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                    <li><strong>{c.tradeCard.marginLine}</strong></li>
                    <li className="mt-2 pt-2 border-t border-green-200">{c.tradeCard.footer}</li>
                  </ul>
                </div>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                <strong>{c.sameClientLead}</strong> {c.sameClientBody}<strong>{c.sameClientStrong}</strong>{c.sameClientTail}
              </p>

              {/* ── Pricing Strategies ─────────────────────── */}
              <h2 className="font-serif text-3xl md:text-4xl font-medium mt-12 mb-6">{c.pricingHeading}</h2>

              <h3 className="font-serif text-2xl font-medium mt-8 mb-4 text-[#4A1942]">{c.tieredHeading}</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                {c.tieredIntro}
              </p>
              <ul className="list-disc pl-6 space-y-2 text-lg text-muted-foreground mb-8">
                {c.tieredItems.map((item) => (
                  <li key={item.lead}><strong>{item.lead}</strong> {item.text}</li>
                ))}
              </ul>

              <h3 className="font-serif text-2xl font-medium mt-8 mb-4 text-[#4A1942]">{c.bundleHeading}</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                {c.bundleLead}<strong>{c.bundleStrong}</strong>{c.bundleTail}
              </p>

              <h3 className="font-serif text-2xl font-medium mt-8 mb-4 text-[#4A1942]">{c.maintenanceHeading}</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                {c.maintenanceLead}<strong>{c.maintenanceStrong}</strong>{c.maintenanceTail}
              </p>

              {/* ── Common Pricing Mistakes ───────────────── */}
              <h2 className="font-serif text-3xl md:text-4xl font-medium mt-12 mb-6">{c.mistakesHeading}</h2>

              <div className="not-prose space-y-3 mb-10">
                {c.mistakes.map(({ mistake, fix }) => (
                  <div key={mistake} className="flex items-start gap-4 p-4 bg-[#FDF8F0] border border-amber-100 rounded-xl">
                    <BarChart3 className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-red-700 block mb-1">{mistake}</strong>
                      <span className="text-sm text-[#6B3A6E]"><strong>{c.fixLabel}</strong> {fix}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* ── Quick Margin Formula ──────────────────── */}
              <h2 className="font-serif text-3xl md:text-4xl font-medium mt-12 mb-6">{c.formulaHeading}</h2>
              <div className="bg-[#4A1942] rounded-2xl p-6 text-white mb-10 not-prose">
                <div className="flex items-center gap-3 mb-4">
                  <Calculator className="h-6 w-6 text-amber-400" />
                  <h3 className="font-serif text-xl font-medium">{c.formulaTitle}</h3>
                </div>
                <div className="space-y-3 text-sm font-mono">
                  {c.formulaSteps.map((s) => (
                    <p key={s.label}><span className="text-amber-300">{s.label}</span> {s.text}</p>
                  ))}
                  <p className="pt-3 border-t border-white/20"><span className="text-amber-300">{c.formulaExampleLabel}</span> {c.formulaExamplePrefix}<strong className="text-amber-300 text-lg">{c.formulaExampleStrong1}</strong>{c.formulaExampleMid}<strong className="text-amber-300 text-lg">{c.formulaExampleStrong2}</strong></p>
                </div>
                <p className="mt-4 text-xs text-white/60">
                  {c.formulaFooter}<Link href={localeHref(c.formulaFooterHref, locale)} className="underline text-amber-300">{c.formulaFooterLinkLabel}</Link>
                </p>
              </div>

              {/* ── CTA Box ─────────────────────────────── */}
              <div className="bg-[#4A1942] rounded-2xl p-8 text-white text-center mb-10 not-prose">
                <h3 className="font-serif text-2xl md:text-3xl font-medium mb-3">
                  {c.ctaHeading}
                </h3>
                <p className="text-white/80 mb-6 text-sm max-w-lg mx-auto">
                  {c.ctaText}
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

              {/* ── Internal Links ─────────────────────── */}
              <div className="grid md:grid-cols-2 gap-4 mb-12 not-prose">
                <Link href={localeHref(c.relatedCard1.href, locale)} className="group p-5 border border-amber-100 rounded-xl hover:bg-[#FDF8F0] transition-colors">
                  <p className="text-xs text-muted-foreground mb-1">{c.relatedCard1.eyebrow}</p>
                  <p className="font-semibold text-[#4A1942] group-hover:underline">{c.relatedCard1.title}</p>
                </Link>
                <Link href={localeHref(c.relatedCard2.href, locale)} className="group p-5 border border-amber-100 rounded-xl hover:bg-[#FDF8F0] transition-colors">
                  <p className="text-xs text-muted-foreground mb-1">{c.relatedCard2.eyebrow}</p>
                  <p className="font-semibold text-[#4A1942] group-hover:underline">{c.relatedCard2.title}</p>
                </Link>
              </div>

              {/* ── Back to Blog ─────────────────────────── */}
              <div className="pt-8 border-t">
                <Link href={localeHref("/blog", locale)} className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
                  <ArrowLeft className="h-4 w-4" /> {c.backLabel}
                </Link>
              </div>

            </div>
          </article>
        </main>
        <BlogFaqSection slug="hair-extension-profit-margin-guide" title={c.faqHeading} locale={locale} />
        <RelatedGuides slug="hair-extension-profit-margin-guide" locale={locale} />
        <Footer />
        <CartDrawer />
      </div>
    </CartProvider>
  )
}
