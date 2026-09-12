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
import { handTiedWeftGuideContent } from "@/lib/i18n/blog/hand-tied-weft-guide"

export function HandTiedWeftGuideView({ locale }: { locale: Locale }) {
  const c = handTiedWeftGuideContent[locale]

  return (
    <CartProvider>
      <BlogJsonLd slug="hand-tied-weft-guide" locale={locale} />
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <article className="max-w-3xl mx-auto px-4 md:px-6 py-16 md:py-20">
            {/* Breadcrumb */}
            <Link href={localeHref("/blog", locale)} className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8">
              <ArrowLeft className="h-4 w-4" /> {c.breadcrumb}
            </Link>

            {/* Meta */}
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

            {/* Hero Image */}
            <div className="relative rounded-2xl overflow-hidden mb-10 aspect-video">
              <Image src={c.heroImageSrc} alt={c.heroImageAlt} fill className="object-cover" />
            </div>

            <div className="prose prose-lg max-w-none">
              <h2>{c.whatHeading}</h2>
              <p>{c.whatP1}</p>
              <p>{c.whatP2}</p>
              <p>{c.whatP3}</p>

              <h2>{c.whyHeading}</h2>
              <ul>
                {c.whyItems.map((item) => (
                  <li key={item.label}><strong>{item.label}</strong> {item.text}</li>
                ))}
              </ul>

              <h2>{c.applyHeading}</h2>
              <p>
                {c.applyPIntro}<strong>{c.applyPStrong}</strong>{c.applyPOutro}
              </p>
              <ol>
                {c.applySteps.map((step) => (
                  <li key={step.label}><strong>{step.label}</strong> {step.text}</li>
                ))}
              </ol>
              <div className="not-prose my-4 p-4 bg-amber-50/60 border border-amber-100 rounded-lg">
                <p className="text-sm font-semibold mb-1">{c.timelineCalloutTitle}</p>
                <p className="text-sm text-muted-foreground">{c.timelineCalloutBody}</p>
              </div>

              <h2>{c.vsHeading}</h2>
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

              <h2>{c.maintenanceHeading}</h2>
              <p>{c.maintenanceP}</p>
              <div className="overflow-x-auto">
                <table>
                  <thead>
                    <tr>
                      {c.maintenanceTableHead.map((h) => (
                        <th key={h}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {c.maintenanceTableRows.map((row) => (
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
                <strong>{c.careLead}</strong> {c.careBody}
              </p>

              <h2>{c.costHeading}</h2>
              <p>{c.costP}</p>
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
              <p>{c.costP2}</p>

              <h2>{c.caseHeading}</h2>
              <blockquote>
                <p>{c.caseQuote}</p>
                <footer className="text-sm text-muted-foreground mt-2">{c.caseCite}</footer>
              </blockquote>

              <h2>{c.mistakesHeading}</h2>
              <div className="not-prose space-y-3 mb-6">
                {c.mistakes.map(({ problem, solution }) => (
                  <div key={problem} className="p-4 bg-[#FDF8F0] border border-amber-100 rounded-xl">
                    <strong className="text-[#4A1942] block mb-1">{problem}</strong>
                    <span className="text-sm text-muted-foreground">{solution}</span>
                  </div>
                ))}
              </div>

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

            {/* CTA Bottom */}
            <div className="mt-12 pt-8 border-t">
              <Link href={localeHref("/blog", locale)} className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
                <ArrowLeft className="h-4 w-4" /> {c.backLabel}
              </Link>
            </div>
          </article>
        </main>
        <BlogFaqSection slug="hand-tied-weft-guide" title={c.faqHeading} locale={locale} />
        <RelatedGuides slug="hand-tied-weft-guide" locale={locale} />
        <Footer />
        <CartDrawer />
      </div>
    </CartProvider>
  )
}
