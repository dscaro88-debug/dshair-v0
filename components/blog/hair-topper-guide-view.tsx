import { Header } from "@/components/layout/header"
import { BlogJsonLd } from "@/components/seo/blog-jsonld"
import { Footer } from "@/components/layout/footer"
import { CartDrawer } from "@/components/cart/cart-drawer"
import { CartProvider } from "@/lib/cart-context"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, Clock, MessageCircle, CheckCircle2, Users, TrendingDown, Sparkles } from "lucide-react"
import Image from "next/image"
import { RelatedGuides } from "@/components/blog/related-guides"
import { BlogFaqSection } from "@/components/blog/blog-faq-section"
import { localeHref } from "@/lib/i18n/routing"
import type { Locale } from "@/lib/i18n/config"
import { hairTopperGuideContent } from "@/lib/i18n/blog/hair-topper-guide"

const ICONS = {
  users: Users,
  trendingDown: TrendingDown,
  sparkles: Sparkles,
  clock: Clock,
} as const

// Case-study field labels are not part of the (pre-existing) content module,
// so they are translated here at the View level.
const CASE_LABELS: Record<Locale, { issue: string; solution: string; outcome: string }> = {
  en: { issue: "Client Issue", solution: "Solution Recommended", outcome: "Outcome" },
  de: { issue: "Problem der Kundin", solution: "Empfohlene Lösung", outcome: "Ergebnis" },
  fr: { issue: "Problème de la cliente", solution: "Solution recommandée", outcome: "Résultat" },
  ar: { issue: "مشكلة العميلة", solution: "الحل الموصى به", outcome: "النتيجة" },
  sv: { issue: "Kundens problem", solution: "Rekommenderad lösning", outcome: "Utfall" },
  pl: { issue: "Problem klientki", solution: "Zalecane rozwiązanie", outcome: "Wynik" },
}

export function HairTopperGuideView({ locale }: { locale: Locale }) {
  const c = hairTopperGuideContent[locale]
  const labels = CASE_LABELS[locale]

  return (
    <CartProvider>
      <BlogJsonLd slug="hair-topper-guide" locale={locale} />
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
                <Sparkles className="h-4 w-4" /> {c.heroBadge}
              </div>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium mb-6 leading-tight">
                {c.heroTitleLines[0]}<br />{c.heroTitleLines[1]}
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

              {/* ── What Is a Hair Topper ─────────────── */}
              <h2 className="font-serif text-3xl md:text-4xl font-medium mt-12 mb-6">{c.whatHeading}</h2>
              <p
                className="text-lg text-muted-foreground leading-relaxed mb-6"
                dangerouslySetInnerHTML={{ __html: c.whatParagraphs[0] }}
              />
              <p
                className="text-lg text-muted-foreground leading-relaxed mb-8"
                dangerouslySetInnerHTML={{ __html: c.whatParagraphs[1] }}
              />

              {/* ── Hero Image ────────────────────────── */}
              <div className="relative rounded-2xl overflow-hidden mb-12 aspect-[16/9]">
                <Image src={c.heroImageSrc} alt={c.heroImageAlt} fill className="object-cover" />
              </div>

              {/* ── Who Needs a Hair Topper ─────────── */}
              <h2 className="font-serif text-3xl md:text-4xl font-medium mt-12 mb-6">{c.whoHeading}</h2>

              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {c.whoCards.map(({ iconKey, title, desc }) => {
                  const Icon = ICONS[iconKey]
                  return (
                    <div key={title} className="bg-[#FDF8F0] rounded-xl p-5 border border-amber-100">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-[#4A1942]"><Icon className="h-5 w-5" /></span>
                        <h3 className="font-semibold text-[#4A1942]">{title}</h3>
                      </div>
                      <p className="text-sm text-[#6B3A6E]">{desc}</p>
                    </div>
                  )
                })}
              </div>

              {/* ── Types of Hair Toppers ──────────────── */}
              <h2 className="font-serif text-3xl md:text-4xl font-medium mt-12 mb-6">{c.typesHeading}</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                {c.typesIntro}
              </p>

              {/* Comparison table */}
              <div className="overflow-x-auto mb-10">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr>
                      {c.compareTable.headers.map((h, i) => (
                        <th
                          key={h}
                          className={`text-left p-3 bg-[#4A1942] text-white font-semibold ${i === 0 ? "rounded-tl-lg" : ""} ${i === c.compareTable.headers.length - 1 ? "rounded-tr-lg" : ""}`}
                        >
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {c.compareTable.rows.map((row) => (
                      <tr key={row.base} className={row.highlight ? "bg-amber-50" : ""}>
                        <td className="p-3 font-semibold text-[#4A1942]">{row.base}</td>
                        <td className="p-3">{row.bestFor}</td>
                        <td className="p-3">{row.natural}</td>
                        <td className="p-3">{row.comfort}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="not-prose grid md:grid-cols-3 gap-6 mb-12">
                {c.baseCards.map(({ title, color, points }) => (
                  <div key={title} className="rounded-xl overflow-hidden">
                    <div className={`${color} text-white p-4 font-semibold text-sm`}>{title}</div>
                    <div className="bg-[#FDF8F0] p-4">
                      {points.map((p) => (
                        <div key={p} className="flex items-start gap-2 mb-2 text-sm">
                          <CheckCircle2 className="h-4 w-4 text-[#4A1942] shrink-0 mt-0.5" />
                          <span className="text-[#3D2314]">{p}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* ── Application Guide ──────────────────── */}
              <h2 className="font-serif text-3xl md:text-4xl font-medium mt-12 mb-6">{c.applyHeading}</h2>
              <p
                className="text-lg text-muted-foreground mb-8"
                dangerouslySetInnerHTML={{ __html: c.applyIntro }}
              />

              <div className="not-prose grid md:grid-cols-2 gap-6 mb-10">
                {c.applySteps.map(({ step, title, desc }) => (
                  <div key={step} className="bg-white border border-amber-100 rounded-xl p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-full bg-[#4A1942] text-white flex items-center justify-center font-bold text-lg shrink-0">{step}</div>
                      <h3 className="font-semibold text-[#4A1942] text-lg">{title}</h3>
                    </div>
                    <p className="text-[#6B3A6E] text-sm leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>

              {/* ── Pro Tips ─────────────────────────── */}
              <div className="bg-[#4A1942]/5 border border-[#4A1942]/10 rounded-2xl p-8 mb-10 not-prose">
                <h3 className="font-serif text-2xl font-medium text-[#4A1942] mb-4">{c.tipsHeading}</h3>
                <ul className="space-y-3">
                  {c.tips.map((tip) => (
                    <li key={tip} className="flex items-start gap-3 text-[#3D2314]">
                      <span className="text-[#C9A84C] shrink-0 mt-1">→</span>
                      <span className="text-sm leading-relaxed">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* ── Hair Topper vs Wig vs Extensions ─── */}
              <h2 className="font-serif text-3xl md:text-4xl font-medium mt-12 mb-6">{c.vsHeading}</h2>

              <div className="overflow-x-auto mb-10">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr>
                      {c.vsTable.headers.map((h, i) => (
                        <th
                          key={h}
                          className={`text-left p-3 bg-[#4A1942] text-white font-semibold ${i === 0 ? "rounded-tl-lg" : ""} ${i === c.vsTable.headers.length - 1 ? "rounded-tr-lg" : ""}`}
                        >
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {c.vsTable.rows.map((row) => (
                      <tr key={row.feature} className={row.highlight ? "bg-amber-50" : ""}>
                        <td className="p-3 font-medium text-[#4A1942]">{row.feature}</td>
                        <td className="p-3 font-semibold text-[#4A1942]">{row.topper}</td>
                        <td className="p-3 text-[#6B3A6E]">{row.wig}</td>
                        <td className="p-3 text-[#6B3A6E]">{row.ext}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* ── Customer Cases ─────────────────────── */}
              <h2 className="font-serif text-3xl md:text-4xl font-medium mt-12 mb-6">{c.casesHeading}</h2>

              <div className="space-y-6 mb-10">
                {c.cases.map(({ name, issue, solution, result, value }) => (
                  <div key={name} className="bg-white border border-amber-100 rounded-2xl p-6 shadow-sm">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-semibold text-[#4A1942] text-lg">{name}</h3>
                      <span className="text-xs bg-[#C9A84C]/20 text-[#4A1942] px-3 py-1 rounded-full font-medium">{value}</span>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <div className="font-semibold text-[#7B3A6E] mb-1">{labels.issue}</div>
                        <p className="text-[#3D2314]">{issue}</p>
                      </div>
                      <div>
                        <div className="font-semibold text-[#7B3A6E] mb-1">{labels.solution}</div>
                        <p className="text-[#3D2314]">{solution}</p>
                      </div>
                    </div>
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <div className="font-semibold text-[#7B3A6E] mb-1 text-sm">{labels.outcome}</div>
                      <p className="text-[#3D2314] text-sm leading-relaxed">{result}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* ── Why Salons Should Stock Toppers ─── */}
              <h2 className="font-serif text-3xl md:text-4xl font-medium mt-12 mb-6">{c.whyHeading}</h2>

              <div className="not-prose grid md:grid-cols-2 gap-4 mb-10">
                {c.whyCards.map(({ icon, title, desc }) => (
                  <div key={title} className="bg-[#FDF8F0] rounded-xl p-5 border border-amber-100">
                    <div className="text-2xl mb-2">{icon}</div>
                    <h3 className="font-semibold text-[#4A1942] mb-1">{title}</h3>
                    <p className="text-sm text-[#6B3A6E]">{desc}</p>
                  </div>
                ))}
              </div>

              {/* ── CTA Box ──────────────────────────── */}
              <div className="bg-[#4A1942] rounded-2xl p-8 text-white text-center mb-10 not-prose">
                <h3 className="font-serif text-2xl md:text-3xl font-medium mb-3">
                  {c.ctaBoxTitle}
                </h3>
                <p className="text-white/80 mb-6 text-sm max-w-lg mx-auto">
                  {c.ctaBoxBody}
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button className="bg-amber-500 hover:bg-amber-600 text-white" asChild>
                    <Link href={localeHref(c.ctaBoxPrimaryHref, locale)}>{c.ctaBoxPrimaryLabel}</Link>
                  </Button>
                  <Button variant="outline" className="border-white/30 text-white hover:bg-white/10" asChild>
                    <a href={c.ctaBoxSecondaryHref} target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="h-4 w-4 mr-2" /> {c.ctaBoxSecondaryLabel}
                    </a>
                  </Button>
                </div>
              </div>

              {/* ── Back to Blog ─────────────────────── */}
              <div className="pt-8 border-t">
                <Link href={localeHref("/blog", locale)} className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
                  <ArrowLeft className="h-4 w-4" /> {c.backLabel}
                </Link>
              </div>

            </div>
          </article>
        </main>
        <BlogFaqSection slug="hair-topper-guide" title={c.faqHeading} locale={locale} />
        <RelatedGuides slug="hair-topper-guide" locale={locale} />
        <Footer />
        <CartDrawer />
      </div>
    </CartProvider>
  )
}
