import { Header } from "@/components/layout/header"
import { BlogJsonLd } from "@/components/seo/blog-jsonld"
import { Footer } from "@/components/layout/footer"
import { CartDrawer } from "@/components/cart/cart-drawer"
import { CartProvider } from "@/lib/cart-context"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, CheckCircle, Users, Package, BadgePercent, Truck } from "lucide-react"
import { RelatedGuides } from "@/components/blog/related-guides"
import { BlogFaqSection } from "@/components/blog/blog-faq-section"
import { hairExtensionsTradeAccountContent } from "@/lib/i18n/blog/hair-extensions-trade-account"
import { localeHref } from "@/lib/i18n/routing"
import type { Locale } from "@/lib/i18n/config"

const INCLUDES_ICONS = {
  badgePercent: BadgePercent,
  package: Package,
  truck: Truck,
  users: Users,
} as const

export function HairExtensionsTradeAccountView({ locale }: { locale: Locale }) {
  const c = hairExtensionsTradeAccountContent[locale]

  return (
    <CartProvider>
      <BlogJsonLd slug="hair-extensions-trade-account" locale={locale} />
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
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
                  <Link href={localeHref(c.ctaPrimaryHref, locale)}>{c.ctaPrimaryLabel}</Link>
                </Button>
                <Button variant="outline" className="border-white/30 text-white hover:bg-white/10" asChild>
                  <Link href={localeHref(c.ctaSecondaryHref, locale)}>{c.ctaSecondaryLabel}</Link>
                </Button>
              </div>
            </div>
          </section>

          <div className="bg-[#FDF8F0] border-b border-amber-100">
            <div className="max-w-5xl mx-auto px-4 py-3">
              <nav className="flex items-center gap-2 text-sm text-muted-foreground">
                <Link href={localeHref("/", locale)} className="hover:text-[#4A1942]">{c.breadcrumbHome}</Link>
                <span>/</span>
                <Link href={localeHref("/blog", locale)} className="hover:text-[#4A1942]">{c.breadcrumbBlog}</Link>
                <span>/</span>
                <span className="text-[#4A1942] font-medium">{c.breadcrumbCurrent}</span>
              </nav>
            </div>
          </div>

          <article className="max-w-4xl mx-auto px-4 md:px-6 py-16">
            <div className="flex items-center gap-3 mb-8 p-4 bg-[#FDF8F0] border border-amber-100 rounded-xl not-prose">
              <div className="w-10 h-10 rounded-full bg-[#4A1942] text-white flex items-center justify-center font-medium text-sm shrink-0">CC</div>
              <p className="text-sm text-[#6B3A6E]">
                {c.authorKicker} <Link href={localeHref("/about/caro-chen", locale)} className="text-[#4A1942] font-semibold underline">Caro Chen</Link>, {c.authorRole}
              </p>
            </div>

            <div className="prose prose-lg max-w-none">
              <h2 className="font-serif text-3xl md:text-4xl font-medium mt-2 mb-6">{c.whatHeading}</h2>
              {c.whatParagraphs.map((p, i) => (
                <p key={i} className="text-lg text-muted-foreground leading-relaxed mb-6">{p}</p>
              ))}

              <h2 className="font-serif text-3xl md:text-4xl font-medium mt-12 mb-6">{c.includesHeading}</h2>
              <div className="not-prose grid md:grid-cols-2 gap-4 mb-10">
                {c.includesCards.map(({ icon, title, text }) => {
                  const Icon = INCLUDES_ICONS[icon]
                  return (
                    <div key={title} className="bg-[#FDF8F0] rounded-xl p-5 border border-amber-100">
                      <Icon className="h-6 w-6 text-amber-500 mb-3" />
                      <h4 className="font-semibold text-[#4A1942] mb-2">{title}</h4>
                      <p className="text-sm text-[#6B3A6E]">{text}</p>
                    </div>
                  )
                })}
              </div>

              <h2 className="font-serif text-3xl md:text-4xl font-medium mt-12 mb-6">{c.qualifyHeading}</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                {c.qualifyIntro}
              </p>
              <div className="not-prose space-y-3 mb-10">
                {c.qualifySteps.map(({ step, detail }) => (
                  <div key={step} className="flex items-start gap-4 p-4 bg-[#FDF8F0] border border-amber-100 rounded-xl">
                    <CheckCircle className="h-5 w-5 text-amber-500 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#4A1942] block mb-1">{step}</strong>
                      <span className="text-sm text-[#6B3A6E]">{detail}</span>
                    </div>
                  </div>
                ))}
              </div>

              <h2 className="font-serif text-3xl md:text-4xl font-medium mt-12 mb-6">{c.compareHeading}</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                {c.compareIntro}
              </p>
              <div className="not-prose grid md:grid-cols-2 gap-4 mb-10">
                <div className="bg-[#FDF8F0] rounded-xl p-5 border border-amber-100">
                  <h4 className="font-semibold text-[#4A1942] mb-2">{c.tradeCardTitle}</h4>
                  <ul className="text-sm text-[#6B3A6E] space-y-1 list-disc pl-4">
                    {c.tradeCardItems.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="bg-[#FDF8F0] rounded-xl p-5 border border-amber-100">
                  <h4 className="font-semibold text-[#4A1942] mb-2">{c.privateLabelCardTitle}</h4>
                  <ul className="text-sm text-[#6B3A6E] space-y-1 list-disc pl-4">
                    {c.privateLabelCardItems.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                {c.compareOutroBefore}
                <Link href={localeHref("/blog/private-label-hair-extensions-uk", locale)} className="text-[#4A1942] font-semibold underline">
                  {c.compareOutroLink}
                </Link>
                {c.compareOutroAfter}
              </p>

              <h2 className="font-serif text-3xl md:text-4xl font-medium mt-12 mb-6">{c.factoryHeading}</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                {c.factoryP1Before}
                <a href="https://wigexporter.com" className="text-[#4A1942] font-semibold underline" target="_blank" rel="noopener noreferrer">
                  {c.factoryP1Link}
                </a>
                {c.factoryP1After}
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                {c.factoryP2Before}
                <Link href={localeHref("/switch-trade-supplier", locale)} className="text-[#4A1942] font-semibold underline">
                  {c.factoryP2Link}
                </Link>
                {c.factoryP2After}
              </p>

              <div className="bg-[#4A1942] rounded-2xl p-8 text-white text-center mb-10 not-prose">
                <h3 className="font-serif text-2xl md:text-3xl font-medium mb-3">{c.ctaBoxTitle}</h3>
                <p className="text-white/80 mb-6 text-sm max-w-lg mx-auto">
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

              <BlogFaqSection slug="hair-extensions-trade-account" title={c.faqHeading} locale={locale} />

              <div className="grid md:grid-cols-2 gap-4 mb-12 not-prose">
                <Link href={localeHref(c.relatedCard1Href, locale)} className="group p-5 border border-amber-100 rounded-xl hover:bg-[#FDF8F0] transition-colors">
                  <p className="text-xs text-muted-foreground mb-1">{c.relatedKicker}</p>
                  <p className="font-semibold text-[#4A1942] group-hover:underline">{c.relatedCard1Title}</p>
                </Link>
                <Link href={localeHref(c.relatedCard2Href, locale)} className="group p-5 border border-amber-100 rounded-xl hover:bg-[#FDF8F0] transition-colors">
                  <p className="text-xs text-muted-foreground mb-1">{c.relatedKicker}</p>
                  <p className="font-semibold text-[#4A1942] group-hover:underline">{c.relatedCard2Title}</p>
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
        <BlogFaqSection slug="hair-extensions-trade-account" />
        <RelatedGuides slug="hair-extensions-trade-account" locale={locale} />
        <Footer />
        <CartDrawer />
      </div>
    </CartProvider>
  )
}
