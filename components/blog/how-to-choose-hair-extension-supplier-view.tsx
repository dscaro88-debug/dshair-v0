import { Header } from "@/components/layout/header"
import { BlogJsonLd } from "@/components/seo/blog-jsonld"
import { Footer } from "@/components/layout/footer"
import { CartDrawer } from "@/components/cart/cart-drawer"
import { CartProvider } from "@/lib/cart-context"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, CheckCircle, XCircle, Phone } from "lucide-react"
import Image from "next/image"
import { RelatedGuides } from "@/components/blog/related-guides"
import { BlogFaqSection } from "@/components/blog/blog-faq-section"
import { localeHref } from "@/lib/i18n/routing"
import type { Locale } from "@/lib/i18n/config"
import { howToChooseHairExtensionSupplierContent } from "@/lib/i18n/blog/how-to-choose-hair-extension-supplier"

const toneStyles = {
  green: {
    card: "bg-green-50 border-green-100",
    dot: "bg-green-500",
    label: "text-green-800",
    text: "text-green-700/80",
  },
  amber: {
    card: "bg-amber-50 border-amber-100",
    dot: "bg-amber-500",
    label: "text-amber-800",
    text: "text-amber-700/80",
  },
  red: {
    card: "bg-red-50 border-red-100",
    dot: "bg-red-500",
    label: "text-red-800",
    text: "text-red-700/80",
  },
} as const

export function HowToChooseHairExtensionSupplierView({ locale }: { locale: Locale }) {
  const c = howToChooseHairExtensionSupplierContent[locale]

  return (
    <CartProvider>
      <BlogJsonLd slug="how-to-choose-hair-extension-supplier" locale={locale} />
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
                "headline": "How to Choose a Hair Extension Supplier for Your Salon",
                "description": "Choosing the right trade hair extension supplier can make or break your salon business. Learn the key factors to evaluate suppliers and spot red flags.",
                "url": "https://www.dshairbeauty.co.uk/blog/how-to-choose-hair-extension-supplier",
                "datePublished": "2026-05-01",
                "author": { "@type": "Organization", "name": "D.S Hair Beauty" },
                "publisher": { "@type": "Organization", "name": "D.S Hair Beauty" },
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

              {/* ── Why It Matters ──────────────────────── */}
              <h2 className="font-serif text-3xl md:text-4xl font-medium mt-8 mb-6">{c.whyHeading}</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                {c.whyP1}
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                {c.whyP2Lead}<strong>{c.whyP2Strong}</strong>{c.whyP2Outro}
              </p>

              {/* ── Hero Image ──────────────────────────── */}
              <div className="relative rounded-2xl overflow-hidden mb-12 aspect-[16/9]">
                <Image src={c.heroImageSrc} alt={c.heroImageAlt} fill className="object-cover" />
              </div>

              {/* ── Key Factors ────────────────────────── */}
              <h2 className="font-serif text-3xl md:text-4xl font-medium mt-12 mb-6">{c.keyFactorsHeading}</h2>

              <h3 className="font-serif text-2xl font-medium mt-8 mb-4 text-[#4A1942]">{c.qualityHeading}</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                {c.qualityP}
              </p>

              <div className="not-prose space-y-3 mb-6">
                {c.qualityCards.map((card) => {
                  const t = toneStyles[card.tone]
                  return (
                    <div key={card.label} className={`flex items-start gap-4 p-4 ${t.card} border rounded-xl`}>
                      <div className={`w-3 h-3 rounded-full ${t.dot} mt-1.5 shrink-0`} />
                      <div>
                        <strong className={`${t.label} block mb-1`}>{card.label}</strong>
                        <span className={`text-sm ${t.text}`}>{card.text}</span>
                      </div>
                    </div>
                  )
                })}
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                {c.qualityP2}
              </p>

              <h3 className="font-serif text-2xl font-medium mt-8 mb-4 text-[#4A1942]">{c.colourHeading}</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                {c.colourP1}
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                {c.colourP2}
              </p>

              <h3 className="font-serif text-2xl font-medium mt-8 mb-4 text-[#4A1942]">{c.rangeHeading}</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                {c.rangeP1}
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                {c.rangeP2}
              </p>

              <h3 className="font-serif text-2xl font-medium mt-8 mb-4 text-[#4A1942]">{c.leadTimeHeading}</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                {c.leadTimeP1}
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                {c.leadTimeP2}
              </p>

              <h3 className="font-serif text-2xl font-medium mt-8 mb-4 text-[#4A1942]">{c.supportHeading}</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                {c.supportP}
              </p>

              {/* ── China Factory Insights ────────────── */}
              <h2 className="font-serif text-3xl md:text-4xl font-medium mt-12 mb-6">{c.factoryHeading}</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                {c.factoryP1}
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                <strong>{c.factoryP2Strong}</strong>{c.factoryP2Body}
              </p>
              <div className="not-prose space-y-3 mb-6">
                {c.factoryTiers.map((tier) => (
                  <div key={tier.label} className="p-4 bg-[#FDF8F0] border border-amber-100 rounded-xl">
                    <strong className="text-[#4A1942] block mb-1">{tier.label}</strong>
                    <span className="text-sm text-muted-foreground">{tier.text}</span>
                  </div>
                ))}
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                <strong>{c.factoryP3Strong}</strong>{c.factoryP3Body}
              </p>

              {/* ── MOQ Negotiation ───────────────────── */}
              <h2 className="font-serif text-3xl md:text-4xl font-medium mt-12 mb-6">{c.moqHeading}</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                {c.moqP}
              </p>
              <div className="not-prose space-y-3 mb-6">
                {c.moqCards.map((card) => (
                  <div key={card.label} className="flex items-start gap-4 p-4 bg-[#FDF8F0] border border-amber-100 rounded-xl">
                    <CheckCircle className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#3D2314] block mb-1">{card.label}</strong>
                      <span className="text-sm text-muted-foreground">{card.text}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* ── Quality Testing Methods ───────────── */}
              <h2 className="font-serif text-3xl md:text-4xl font-medium mt-12 mb-6">{c.testingHeading}</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                {c.testingP}
              </p>
              <ol className="list-decimal pl-6 space-y-4 text-lg text-muted-foreground mb-6">
                {c.tests.map((test) => (
                  <li key={test.label}><strong>{test.label}</strong> {test.text}</li>
                ))}
              </ol>

              {/* ── Factory Visit Checklist ────────────── */}
              <h2 className="font-serif text-3xl md:text-4xl font-medium mt-12 mb-6">{c.visitHeading}</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                {c.visitP}
              </p>
              <div className="not-prose space-y-3 mb-6">
                {c.visitItems.map((item) => (
                  <div key={item.item} className="flex items-start gap-4 p-4 bg-[#FDF8F0] border border-amber-100 rounded-xl">
                    <CheckCircle className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#3D2314] block mb-1">{item.item}</strong>
                      <span className="text-sm text-muted-foreground">{item.detail}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* ── Red Flags ───────────────────────────── */}
              <h2 className="font-serif text-3xl md:text-4xl font-medium mt-12 mb-6">{c.redFlagsHeading}</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                {c.redFlagsP}
              </p>

              <div className="not-prose space-y-3 mb-10">
                {c.redFlags.map((item) => (
                  <div key={item.flag} className="flex items-start gap-4 p-4 bg-red-50 border border-red-100 rounded-xl">
                    <XCircle className="h-5 w-5 text-red-500 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-red-700 block mb-1">{item.flag}</strong>
                      <span className="text-sm text-red-600/80">{item.detail}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* ── Questions to Ask ───────────────────── */}
              <h2 className="font-serif text-3xl md:text-4xl font-medium mt-12 mb-6">{c.questionsHeading}</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                {c.questionsP}
              </p>

              <div className="not-prose space-y-3 mb-10">
                {c.questions.map((q, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 bg-[#FDF8F0] border border-amber-100 rounded-xl">
                    <CheckCircle className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
                    <span className="text-[#3D2314]">{q}</span>
                  </div>
                ))}
              </div>

              {/* ── UK-Based Suppliers ─────────────────── */}
              <h2 className="font-serif text-3xl md:text-4xl font-medium mt-12 mb-6">{c.ukHeading}</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                {c.ukP}
              </p>
              <ul className="list-disc pl-6 space-y-2 text-lg text-muted-foreground mb-8">
                {c.ukPoints.map((point) => (
                  <li key={point.label}><strong>{point.label}</strong> {point.text}</li>
                ))}
              </ul>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                {c.ukP2}
              </p>

              {/* ── FAQ ─────────────────────────────────── */}
              <h2 className="font-serif text-3xl md:text-4xl font-medium mt-12 mb-6">{c.faqHeading}</h2>
              {c.faqs.map((faq) => (
                <div key={faq.q}>
                  <h3 className="font-serif text-2xl font-medium mt-8 mb-4 text-[#4A1942]">{faq.q}</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    {faq.a}
                  </p>
                </div>
              ))}

              {/* ── CTA Box ─────────────────────────────── */}
              <div className="bg-[#4A1942] rounded-2xl p-8 text-white text-center mb-10 not-prose">
                <h3 className="font-serif text-2xl md:text-3xl font-medium mb-3">
                  {c.ctaBoxTitle}
                </h3>
                <p className="text-white/80 mb-6 text-sm max-w-lg mx-auto">
                  {c.ctaBoxBody}
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
                <Link href={localeHref(c.internal1Href, locale)} className="group p-5 border border-amber-100 rounded-xl hover:bg-[#FDF8F0] transition-colors">
                  <p className="text-xs text-muted-foreground mb-1">{c.internal1Label}</p>
                  <p className="font-semibold text-[#4A1942] group-hover:underline">{c.internal1Title}</p>
                </Link>
                <Link href={localeHref(c.internal2Href, locale)} className="group p-5 border border-amber-100 rounded-xl hover:bg-[#FDF8F0] transition-colors">
                  <p className="text-xs text-muted-foreground mb-1">{c.internal2Label}</p>
                  <p className="font-semibold text-[#4A1942] group-hover:underline">{c.internal2Title}</p>
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
        <BlogFaqSection slug="how-to-choose-hair-extension-supplier" title={c.faqHeading} locale={locale} />
        <RelatedGuides slug="how-to-choose-hair-extension-supplier" locale={locale} />
        <Footer />
        <CartDrawer />
      </div>
    </CartProvider>
  )
}
