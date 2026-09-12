import { Header } from "@/components/layout/header"
import { BlogJsonLd } from "@/components/seo/blog-jsonld"
import { Footer } from "@/components/layout/footer"
import { CartDrawer } from "@/components/cart/cart-drawer"
import { CartProvider } from "@/lib/cart-context"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import Image from "next/image"
import { RelatedGuides } from "@/components/blog/related-guides"
import { BlogFaqSection } from "@/components/blog/blog-faq-section"
import { localeHref } from "@/lib/i18n/routing"
import type { Locale } from "@/lib/i18n/config"
import { hairExtensionTypesGuideContent, type ExtensionTypeCard } from "@/lib/i18n/blog/hair-extension-types-guide"

function renderTypeCards(c: {
  prosConsLabels: { pros: string; cons: string; bestFor: string }
}, type: ExtensionTypeCard) {
  return (
    <div className="not-prose grid md:grid-cols-3 gap-4 mb-6">
      {[
        { label: c.prosConsLabels.pros, icon: "✅", items: type.pros, cls: "bg-green-50 border border-green-100" },
        { label: c.prosConsLabels.cons, icon: "⚠️", items: type.cons, cls: "bg-amber-50 border border-amber-100" },
        { label: c.prosConsLabels.bestFor, icon: "👩", items: type.bestFor, cls: "bg-[#FDF8F0] border border-amber-100" },
      ].map(({ label, icon, items, cls }) => (
        <div key={label} className={`rounded-xl p-5 ${cls}`}>
          <h4 className="font-semibold text-[#4A1942] mb-3">{icon} {label}</h4>
          <ul className="space-y-1 text-sm text-[#3D2314]">
            {items.map(item => <li key={item}>• {item}</li>)}
          </ul>
        </div>
      ))}
    </div>
  )
}

export function HairExtensionTypesGuideView({ locale }: { locale: Locale }) {
  const c = hairExtensionTypesGuideContent[locale]

  return (
    <CartProvider>
      <BlogJsonLd slug="hair-extension-types-guide" locale={locale} />
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

            <div className="prose prose-lg max-w-none">

              {/* ── Quick Comparison ────────────────────── */}
              <div className="not-prose overflow-x-auto mb-12">
                <table className="w-full text-sm border-collapse rounded-xl overflow-hidden border border-amber-100">
                  <thead>
                    <tr className="bg-[#4A1942] text-white">
                      {c.comparisonTableHead.map((h) => (
                        <th key={h} className="p-4 text-left font-medium">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-amber-50 bg-white">
                    {c.comparisonRows.map((row) => (
                      <tr key={row.method} className="hover:bg-amber-50/50">
                        <td className="p-4 font-semibold text-[#4A1942]">{row.method}</td>
                        <td className="p-4 text-[#6B3A6E]">{row.time}</td>
                        <td className="p-4 text-[#6B3A6E]">{row.duration}</td>
                        <td className="p-4 text-[#6B3A6E]">{row.best}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* ── Tape-In ─────────────────────────────── */}
              <h2 className="font-serif text-3xl md:text-4xl font-medium mt-8 mb-6">{c.tapeIn.heading}</h2>
              <div className="relative rounded-2xl overflow-hidden mb-8 aspect-[16/9]">
                <Image src={c.tapeIn.imageSrc} alt={c.tapeIn.imageAlt} fill className="object-cover" />
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                <strong>{c.tapeIn.descLead}</strong>{c.tapeIn.descBody}
              </p>
              {renderTypeCards(c, c.tapeIn)}

              {/* ── K-Tip ──────────────────────────────── */}
              <h2 className="font-serif text-3xl md:text-4xl font-medium mt-12 mb-6">{c.kTip.heading}</h2>
              <div className="relative rounded-2xl overflow-hidden mb-8 aspect-[16/9]">
                <Image src={c.kTip.imageSrc} alt={c.kTip.imageAlt} fill className="object-cover" />
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                <strong>{c.kTip.descLead}</strong>{c.kTip.descBody}
              </p>
              {renderTypeCards(c, c.kTip)}

              {/* ── Weft ──────────────────────────────── */}
              <h2 className="font-serif text-3xl md:text-4xl font-medium mt-12 mb-6">{c.weft.heading}</h2>
              <div className="relative rounded-2xl overflow-hidden mb-8 aspect-[16/9]">
                <Image src={c.weft.imageSrc} alt={c.weft.imageAlt} fill className="object-cover" />
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                <strong>{c.weft.descLead}</strong>{c.weft.descBody}
              </p>
              {renderTypeCards(c, c.weft)}

              {/* ── Butterfly Weft ──────────────────────── */}
              <h2 className="font-serif text-3xl md:text-4xl font-medium mt-12 mb-6">{c.butterflyWeft.heading}</h2>
              <div className="relative rounded-2xl overflow-hidden mb-8 aspect-[16/9]">
                <Image src={c.butterflyWeft.imageSrc} alt={c.butterflyWeft.imageAlt} fill className="object-cover" />
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                <strong>{c.butterflyWeft.descLead}</strong>{c.butterflyWeft.descBody}
              </p>
              {renderTypeCards(c, c.butterflyWeft)}

              {/* ── Clip-In ─────────────────────────────── */}
              <h2 className="font-serif text-3xl md:text-4xl font-medium mt-12 mb-6">{c.clipIn.heading}</h2>
              <div className="relative rounded-2xl overflow-hidden mb-8 aspect-[16/9]">
                <Image src={c.clipIn.imageSrc} alt={c.clipIn.imageAlt} fill className="object-cover" />
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                <strong>{c.clipIn.descLead}</strong>{c.clipIn.descBody}
              </p>
              {renderTypeCards(c, c.clipIn)}

              {/* ── How to Choose ───────────────────────── */}
              <h2 className="font-serif text-3xl md:text-4xl font-medium mt-12 mb-6">{c.chooseHeading}</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                {c.chooseIntro}
              </p>

              <div className="not-prose space-y-4 mb-10">
                {c.chooseQas.map(({ q, a }) => (
                  <div key={q} className="bg-[#FDF8F0] border border-amber-100 rounded-xl p-5">
                    <p className="font-semibold text-[#4A1942] mb-2">{q}</p>
                    <p className="text-sm text-[#6B3A6E] leading-relaxed">{a}</p>
                  </div>
                ))}
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
        <BlogFaqSection slug="hair-extension-types-guide" title={c.faqHeading} locale={locale} />
        <RelatedGuides slug="hair-extension-types-guide" locale={locale} />
        <Footer />
        <CartDrawer />
      </div>
    </CartProvider>
  )
}
