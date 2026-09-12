import { Fragment } from "react"
import { Header } from "@/components/layout/header"
import { BlogJsonLd } from "@/components/seo/blog-jsonld"
import { Footer } from "@/components/layout/footer"
import { CartDrawer } from "@/components/cart/cart-drawer"
import { CartProvider } from "@/lib/cart-context"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, Clock, MessageCircle } from "lucide-react"
import Image from "next/image"
import { RelatedGuides } from "@/components/blog/related-guides"
import { BlogFaqSection } from "@/components/blog/blog-faq-section"
import { localeHref } from "@/lib/i18n/routing"
import type { Locale } from "@/lib/i18n/config"
import { hairExtensionMethodsComparisonContent } from "@/lib/i18n/blog/hair-extension-methods-comparison"

export function HairExtensionMethodsComparisonView({ locale }: { locale: Locale }) {
  const c = hairExtensionMethodsComparisonContent[locale]

  return (
    <CartProvider>
      <BlogJsonLd slug="hair-extension-methods-comparison" locale={locale} />
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <article className="max-w-3xl mx-auto px-4 md:px-6 py-16 md:py-20">
            <Link href={localeHref("/blog", locale)} className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8">
              <ArrowLeft className="h-4 w-4" /> {c.breadcrumb}
            </Link>

            <div className="flex items-center gap-3 text-xs text-muted-foreground mb-4">
              <span className="bg-primary/10 text-primary rounded-full px-2.5 py-1 font-medium">{c.metaCategory}</span>
              <span>{c.metaDate}</span>
              <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {c.metaReadTime}</span>
            </div>

            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium mb-6 leading-tight">
              {c.heroTitle}
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              {c.heroSubtitle}
            </p>

            <div className="relative rounded-2xl overflow-hidden mb-10 aspect-video">
              <Image src={c.heroImageSrc} alt={c.heroImageAlt} fill className="object-cover" />
            </div>

            <div className="prose prose-lg max-w-none">
              <h2>{c.whyHeading}</h2>
              <p>{c.whyP1}</p>
              <p>{c.whyP2}</p>

              {c.methods.map((m) => (
                <Fragment key={m.heading}>
                  <h2>{m.heading}</h2>
                  <p>
                    <strong>{c.methodLabels.howWorks}</strong> {m.howWorks}
                  </p>
                  <p>
                    <strong>{c.methodLabels.bestCandidate}</strong> {m.bestCandidate}
                  </p>
                  <p>
                    <strong>{c.methodLabels.appTime}</strong> {m.appTime}
                  </p>
                  <p>
                    <strong>{c.methodLabels.maintenance}</strong> {m.maintenance}
                  </p>
                  <p>
                    <strong>{c.methodLabels.priceRange}</strong> {m.priceRange}
                  </p>
                  <p>
                    <strong>{c.methodLabels.materialCost}</strong> {m.materialCost}
                  </p>
                  <p>
                    <strong>{c.methodLabels.margin}</strong> {m.margin}
                  </p>
                  {m.calloutTitle && m.calloutBody && (
                    <div className="not-prose my-4 p-4 bg-amber-50/60 border border-amber-100 rounded-lg">
                      <p className="text-sm font-semibold mb-1">{m.calloutTitle}</p>
                      <p className="text-sm text-muted-foreground">{m.calloutBody}</p>
                    </div>
                  )}
                  {m.limitations && (
                    <p>
                      <strong>{c.methodLabels.limitations}</strong> {m.limitations}
                    </p>
                  )}
                </Fragment>
              ))}

              <h2>{c.matrixHeading}</h2>
              <p>{c.matrixIntro}</p>
              <div className="overflow-x-auto">
                <table>
                  <thead>
                    <tr>
                      {c.matrixTableHead.map((h) => (
                        <th key={h}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {c.matrixTableRows.map((row) => (
                      <tr key={row[0]}>
                        {row.map((cell) => (
                          <td key={cell}>{cell}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h2>{c.costHeading}</h2>
              <p>{c.costIntro}</p>
              <div className="overflow-x-auto">
                <table>
                  <thead>
                    <tr>
                      {c.costTableHead.map((h) => (
                        <th key={h}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {c.costTableRows.map((row) => (
                      <tr key={row[0]}>
                        {row.map((cell) => (
                          <td key={cell}>{cell}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p>{c.costNote}</p>

              <h2>{c.trainingHeading}</h2>
              <p>{c.trainingIntro}</p>
              <div className="overflow-x-auto">
                <table>
                  <thead>
                    <tr>
                      {c.trainingTableHead.map((h) => (
                        <th key={h}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {c.trainingTableRows.map((row) => (
                      <tr key={row[0]}>
                        {row.map((cell) => (
                          <td key={cell}>{cell}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* ── CTA Box ─────────────────────────────── */}
              <div className="bg-primary/5 border border-primary/10 rounded-xl p-6 my-8 not-prose">
                <h3 className="font-semibold text-lg mb-2">{c.ctaBoxTitle}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {c.ctaBoxBody}
                </p>
                <div className="flex flex-wrap gap-3">
                  <Button asChild><Link href={localeHref(c.ctaPrimaryHref, locale)}>{c.ctaPrimaryLabel}</Link></Button>
                  <Button variant="outline" className="border-green-500 text-green-700 hover:bg-green-50" asChild>
                    <a href={c.ctaSecondaryHref} target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="h-4 w-4 mr-2" /> {c.ctaSecondaryLabel}
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t">
              <Link href={localeHref("/blog", locale)} className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
                <ArrowLeft className="h-4 w-4" /> {c.backLabel}
              </Link>
            </div>
          </article>
        </main>
        <BlogFaqSection slug="hair-extension-methods-comparison" title={c.faqHeading} locale={locale} />
        <RelatedGuides slug="hair-extension-methods-comparison" locale={locale} />
        <Footer />
        <CartDrawer />
      </div>
    </CartProvider>
  )
}
