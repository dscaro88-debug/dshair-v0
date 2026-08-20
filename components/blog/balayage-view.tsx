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
import { balayageExtensionsSalonGuideContent } from "@/lib/i18n/blog/balayage-extensions-salon-guide"

export function BalayageExtensionsSalonGuideView({ locale }: { locale: Locale }) {
  const c = balayageExtensionsSalonGuideContent[locale]

  return (
    <CartProvider>
      <BlogJsonLd slug="balayage-extensions-salon-guide" locale={locale} />
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
              <h2>{c.whatHeading}</h2>
              <p>{c.whatP1}</p>
              <p>{c.whatP2}</p>

              <h2>{c.failHeading}</h2>
              <p>{c.failP}</p>
              <ul>
                {c.failItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p>{c.failP2}</p>

              <h2>{c.tonesHeading}</h2>
              <p>{c.tonesP}</p>

              <h3>{c.tone1Heading}</h3>
              <p>{c.tone1P}</p>

              <h3>{c.tone2Heading}</h3>
              <p>{c.tone2P}</p>

              <h3>{c.tone3Heading}</h3>
              <p>{c.tone3P}</p>

              <h3>{c.tone4Heading}</h3>
              <p>{c.tone4P}</p>

              <h3>{c.tone5Heading}</h3>
              <p>{c.tone5P}</p>

              <h3>{c.tone6Heading}</h3>
              <p>{c.tone6P}</p>

              <h3>{c.tone7Heading}</h3>
              <p>{c.tone7P}</p>

              <h2>{c.skinHeading}</h2>
              <p>{c.skinP}</p>
              <div className="overflow-x-auto">
                <table>
                  <thead>
                    <tr>
                      {c.skinTableHead.map((h) => (
                        <th key={h}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {c.skinTableRows.map((row) => (
                      <tr key={row[0]}>
                        {row.map((cell) => (
                          <td key={cell}>{cell}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p>
                <strong>{c.quickTestLead}</strong> {c.quickTestBody}
              </p>

              <h2>{c.pricingHeading}</h2>
              <p>{c.pricingP}</p>
              <div className="overflow-x-auto">
                <table>
                  <thead>
                    <tr>
                      {c.pricingTableHead.map((h) => (
                        <th key={h}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {c.pricingTableRows.map((row) => (
                      <tr key={row[0]}>
                        {row.map((cell) => (
                          <td key={cell}>{cell}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p>{c.pricingP2}</p>
              <div className="not-prose my-4 p-4 bg-green-50/60 border border-green-100 rounded-lg">
                <p className="text-sm font-semibold mb-1 text-green-800">{c.pricingCalloutTitle}</p>
                <p className="text-sm text-green-700/80">{c.pricingCalloutBody}</p>
              </div>

              <h2>{c.vsHeading}</h2>
              <p>{c.vsP}</p>
              <div className="overflow-x-auto">
                <table>
                  <thead>
                    <tr>
                      {c.vsTableHead.map((h) => (
                        <th key={h}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {c.vsTableRows.map((row) => (
                      <tr key={row[0]}>
                        {row.map((cell) => (
                          <td key={cell}>{cell}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <h2>{c.scriptsHeading}</h2>
              <p>
                <strong>{c.script1Lead}</strong>
              </p>
              <blockquote>
                <p>{c.script1Quote}</p>
              </blockquote>
              <p>
                <strong>{c.script2Lead}</strong>
              </p>
              <blockquote>
                <p>{c.script2Quote}</p>
              </blockquote>
              <p>
                <strong>{c.script3Lead}</strong>
              </p>
              <blockquote>
                <p>{c.script3Quote}</p>
              </blockquote>

              <h2>{c.faqHeading}</h2>
              {c.faqs.map((faq) => (
                <div key={faq.q}>
                  <h3>{faq.q}</h3>
                  <p>{faq.a}</p>
                </div>
              ))}

              {/* ── CTA Box ─────────────────────────────── */}
              <div className="bg-primary/5 border border-primary/10 rounded-xl p-6 my-8 not-prose">
                <h3 className="font-semibold text-lg mb-2">{c.ctaBoxTitle}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {c.ctaBoxBody}
                </p>
                <div className="flex flex-wrap gap-3">
                  <Button asChild>
                    <Link href={localeHref(c.ctaPrimaryHref, locale)}>{c.ctaPrimaryLabel}</Link>
                  </Button>
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
        <BlogFaqSection slug="balayage-extensions-salon-guide" />
        <RelatedGuides slug="balayage-extensions-salon-guide" />
        <Footer />
        <CartDrawer />
      </div>
    </CartProvider>
  )
}
