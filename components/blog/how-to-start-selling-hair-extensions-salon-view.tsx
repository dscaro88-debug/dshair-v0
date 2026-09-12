import { Header } from "@/components/layout/header"
import { BlogJsonLd } from "@/components/seo/blog-jsonld"
import { Footer } from "@/components/layout/footer"
import { CartDrawer } from "@/components/cart/cart-drawer"
import { CartProvider } from "@/lib/cart-context"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, CheckCircle, ArrowRight, GraduationCap, Users, BadgePercent } from "lucide-react"
import { ArticleJsonLd, FaqJsonLd } from "@/components/seo/json-ld"
import { RelatedGuides } from "@/components/blog/related-guides"
import { BlogFaqSection } from "@/components/blog/blog-faq-section"
import { localeHref } from "@/lib/i18n/routing"
import type { Locale } from "@/lib/i18n/config"
import { howToStartSellingHairExtensionsSalonContent } from "@/lib/i18n/blog/how-to-start-selling-hair-extensions-salon"

const step2Icons = {
  graduationCap: GraduationCap,
  users: Users,
  badgePercent: BadgePercent,
} as const

export function HowToStartSellingHairExtensionsSalonView({ locale }: { locale: Locale }) {
  const c = howToStartSellingHairExtensionsSalonContent[locale]

  return (
    <CartProvider>
      <BlogJsonLd slug="how-to-start-selling-hair-extensions-salon" locale={locale} />
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <ArticleJsonLd
            title={c.seoTitle}
            description={c.seoDescription}
            authorUrl="https://www.dshairbeauty.co.uk/about/caro-chen"
            datePublished="2026-08-03"
            image="https://images.unsplash.com/photo-1595476108010-b4d7c3497807?w=1200&q=80"
            url="https://www.dshairbeauty.co.uk/blog/how-to-start-selling-hair-extensions-salon"
          />
          <FaqJsonLd faqs={c.faqs.map((f) => ({ question: f.q, answer: f.a }))} />

          <section className="relative bg-[#4A1942] text-white overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 20% 50%, #C9A84C 0%, transparent 50%), radial-gradient(circle at 80% 50%, #7B3A6E 0%, transparent 50%)",
                }}
              />
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
              <div className="w-10 h-10 rounded-full bg-[#4A1942] text-white flex items-center justify-center font-medium text-sm shrink-0">{c.authorBadge}</div>
              <p className="text-sm text-[#6B3A6E]">
                {c.authorLead}<Link href={localeHref(c.authorHref, locale)} className="text-[#4A1942] font-semibold underline">{c.authorName}</Link>{c.authorOutro}
              </p>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                {c.introP}
              </p>

              <h2 className="font-serif text-3xl md:text-4xl font-medium mt-8 mb-6">{c.step1Heading}</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                {c.step1PLead}<strong>{c.step1PStrong}</strong>{c.step1POutro}
              </p>

              <h2 className="font-serif text-3xl md:text-4xl font-medium mt-12 mb-6">{c.step2Heading}</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                {c.step2PLead}<strong>{c.step2PStrong1}</strong>{c.step2PMid}<strong>{c.step2PStrong2}</strong>{c.step2POutro}
              </p>
              <div className="not-prose grid md:grid-cols-3 gap-4 mb-10">
                {c.step2Cards.map(({ iconKey, title, text }) => {
                  const Icon = step2Icons[iconKey]
                  return (
                    <div key={title} className="bg-[#FDF8F0] rounded-xl p-5 border border-amber-100">
                      <Icon className="h-6 w-6 text-amber-500 mb-3" />
                      <h4 className="font-semibold text-[#4A1942] mb-2">{title}</h4>
                      <p className="text-sm text-[#6B3A6E]">{text}</p>
                    </div>
                  )
                })}
              </div>

              <h2 className="font-serif text-3xl md:text-4xl font-medium mt-12 mb-6">{c.step3Heading}</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                {c.step3P}
              </p>
              <div className="not-prose space-y-3 mb-10">
                {c.consultationSteps.map(({ step, detail }) => (
                  <div key={step} className="flex items-start gap-4 p-4 bg-[#FDF8F0] border border-amber-100 rounded-xl">
                    <CheckCircle className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#4A1942] block mb-1">{step}</strong>
                      <span className="text-sm text-[#6B3A6E]">{detail}</span>
                    </div>
                  </div>
                ))}
              </div>

              <h2 className="font-serif text-3xl md:text-4xl font-medium mt-12 mb-6">{c.step4Heading}</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                {c.step4PLead}<strong>{c.step4PStrong1}</strong>{c.step4PMid}<strong>{c.step4PStrong2}</strong>{c.step4POutro}
                <Link href={localeHref(c.profitMarginLinkHref, locale)} className="text-[#4A1942] font-semibold underline">
                  {c.profitMarginLinkLabel}
                </Link>{c.step4PFinal}
              </p>

              <h2 className="font-serif text-3xl md:text-4xl font-medium mt-12 mb-6">{c.step5Heading}</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                {c.step5P1}
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                {c.step5P2Lead}
                <Link href={localeHref(c.privateLabelLinkHref, locale)} className="text-[#4A1942] font-semibold underline">
                  {c.privateLabelLinkLabel}
                </Link>{c.step5P2Outro}
              </p>

              <div className="bg-[#4A1942] rounded-2xl p-8 text-white text-center mb-10 not-prose">
                <h3 className="font-serif text-2xl md:text-3xl font-medium mb-3">{c.ctaBoxTitle}</h3>
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

              <h2 className="font-serif text-3xl md:text-4xl font-medium mt-12 mb-6">{c.faqHeading}</h2>
              <div className="not-prose space-y-4 mb-12">
                {c.faqs.map((f) => (
                  <div key={f.q} className="border border-amber-100 rounded-xl p-5 bg-[#FDF8F0]">
                    <p className="font-semibold text-[#4A1942] mb-2">{f.q}</p>
                    <p className="text-sm text-[#6B3A6E] leading-relaxed">{f.a}</p>
                  </div>
                ))}
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-12 not-prose">
                <Link href={localeHref(c.related1Href, locale)} className="group p-5 border border-amber-100 rounded-xl hover:bg-[#FDF8F0] transition-colors">
                  <p className="text-xs text-muted-foreground mb-1">{c.related1Label}</p>
                  <p className="font-semibold text-[#4A1942] group-hover:underline">{c.related1Title}</p>
                </Link>
                <Link href={localeHref(c.related2Href, locale)} className="group p-5 border border-amber-100 rounded-xl hover:bg-[#FDF8F0] transition-colors">
                  <p className="text-xs text-muted-foreground mb-1">{c.related2Label}</p>
                  <p className="font-semibold text-[#4A1942] group-hover:underline">{c.related2Title}</p>
                </Link>
              </div>

              <div className="pt-8 border-t">
                <Link href={localeHref("/blog", locale)} className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
                  <ArrowLeft className="h-4 w-4" /> {c.backLabel}
                </Link>
              </div>
            </div>
          </article>
        </main>
        <BlogFaqSection slug="how-to-start-selling-hair-extensions-salon" title={c.faqHeading} locale={locale} />
        <RelatedGuides slug="how-to-start-selling-hair-extensions-salon" locale={locale} />
        <Footer />
        <CartDrawer />
      </div>
    </CartProvider>
  )
}
