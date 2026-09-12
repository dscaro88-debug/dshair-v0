import type { Locale } from "@/lib/i18n/config"

export interface ProfitMarginTableRow {
  method: string
  cost: string
  price: string
  margin: string
  pct: string
}

export interface MarginCard {
  title: string
  items: string[]
  marginLine: string
  footer: string
}

export interface PricingTierItem {
  lead: string
  text: string
}

export interface PricingMistake {
  mistake: string
  fix: string
}

export interface FormulaStep {
  label: string
  text: string
}

export interface RelatedCard {
  eyebrow: string
  title: string
  href: string
}

export interface HairExtensionProfitMarginGuideContent {
  seoTitle: string
  seoDescription: string
  heroBadge: string
  heroTitle: string
  heroSubtitle: string
  heroPrimaryLabel: string
  heroPrimaryHref: string
  heroSecondaryLabel: string
  heroSecondaryHref: string
  navHome: string
  navBlog: string
  navCurrent: string
  authorAvatar: string
  authorBy: string
  authorName: string
  authorNameHref: string
  authorTitle: string
  whyHeading: string
  whyP1Lead: string
  whyP1Strong: string
  whyP1Tail: string
  whyP2: string
  whyP3Lead: string
  whyP3Strong: string
  whyP3Tail: string
  heroImageSrc: string
  heroImageAlt: string
  marginHeading: string
  marginIntroLead: string
  marginIntroStrong: string
  marginIntroTail: string
  marginTableHead: string[]
  marginRows: ProfitMarginTableRow[]
  marginNote: string
  retailHeading: string
  retailIntro: string
  retailCard: MarginCard
  tradeCard: MarginCard
  sameClientLead: string
  sameClientBody: string
  sameClientStrong: string
  sameClientTail: string
  pricingHeading: string
  tieredHeading: string
  tieredIntro: string
  tieredItems: PricingTierItem[]
  bundleHeading: string
  bundleLead: string
  bundleStrong: string
  bundleTail: string
  maintenanceHeading: string
  maintenanceLead: string
  maintenanceStrong: string
  maintenanceTail: string
  mistakesHeading: string
  fixLabel: string
  mistakes: PricingMistake[]
  formulaHeading: string
  formulaTitle: string
  formulaSteps: FormulaStep[]
  formulaExampleLabel: string
  formulaExamplePrefix: string
  formulaExampleStrong1: string
  formulaExampleMid: string
  formulaExampleStrong2: string
  formulaFooter: string
  formulaFooterLinkLabel: string
  formulaFooterHref: string
  ctaHeading: string
  ctaText: string
  ctaPrimaryLabel: string
  ctaPrimaryHref: string
  ctaSecondaryLabel: string
  ctaSecondaryHref: string
  faqHeading: string
  faqs: { q: string; a: string }[]
  relatedCard1: RelatedCard
  relatedCard2: RelatedCard
  backLabel: string
}

const en: HairExtensionProfitMarginGuideContent = {
  seoTitle: "Hair Extension Profit Margin Guide for UK Salons: Real Numbers for 2026 | D.S Hair Beauty",
  seoDescription:
    "How much profit do hair extensions actually generate for UK salons? Real margin breakdowns by method (tape-in, K-tip, nano, weft), pricing strategies, and how trade sourcing multiplies your returns. Includes calculator-ready formulas.",
  heroBadge: "Salon Profitability",
  heroTitle: "Hair Extension Profit Margins",
  heroSubtitle:
    "Real numbers for UK salon owners. How much each extension method actually earns, why trade sourcing changes everything, and how to price for maximum profitability without scaring off clients.",
  heroPrimaryLabel: "Get Trade Pricing",
  heroPrimaryHref: "/trade-wholesale",
  heroSecondaryLabel: "Use Margin Calculator",
  heroSecondaryHref: "/trade-price-calculator",
  navHome: "Home",
  navBlog: "Blog",
  navCurrent: "Hair Extension Profit Margins",
  authorAvatar: "CC",
  authorBy: "Written by",
  authorName: "Caro Chen",
  authorNameHref: "/about/caro-chen",
  authorTitle: "Founder & Trade Director at D.S Hair & Beauty · 19 years in hair extension manufacturing",
  whyHeading: "Why Hair Extensions Are Your Highest-Margin Service",
  whyP1Lead: "Of all the services a typical UK salon offers — cuts, colour, blow-drys, treatments — ",
  whyP1Strong: "hair extensions consistently deliver the highest absolute profit per appointment hour",
  whyP1Tail:
    ". A colour correction might take 4 hours and use £40 of product. A full-head tape-in installation takes 90 minutes, uses £80–150 of product (at trade prices), and generates £300–550 in service revenue.",
  whyP2:
    "The math is straightforward: extensions combine high perceived value (clients willingly pay premium prices) with controllable product costs (especially when sourced at trade prices). The gap between those two numbers is your margin — and that gap is wider than almost anything else on your service menu.",
  whyP3Lead: "But here is what most salon owners get wrong: they buy extensions at ",
  whyP3Strong: "retail or near-retail prices",
  whyP3Tail:
    " and wonder why their margins feel tight. The difference between buying at consumer prices versus trade prices is often the difference between a 60% margin and an 85% margin on the same service. Let me show you the actual numbers.",
  heroImageSrc: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=1200&q=80",
  heroImageAlt: "Salon owner reviewing hair extension pricing and margins",
  marginHeading: "Margin Breakdown by Extension Method",
  marginIntroLead: "These figures reflect ",
  marginIntroStrong: "typical UK salon pricing in 2026",
  marginIntroTail:
    " using trade-sourced product. Actual numbers vary by location, clientele, and your positioning — but the ratios hold true across most markets.",
  marginTableHead: ["Method", "Trade Cost", "Typical Service Price", "Gross Margin", "Margin %"],
  marginRows: [
    { method: "Tape-In (full head, 40pcs)", cost: "£80–130", price: "£320–450", margin: "£190–320", pct: "60–75%" },
    { method: "K-Tip / Fusion (full head)", cost: "£120–180", price: "£400–600", margin: "£280–420", pct: "67–73%" },
    { method: "Nano Ring (full head)", cost: "£140–200", price: "£450–650", margin: "£310–450", pct: "66–72%" },
    { method: "Hand-Tied Weft (full head)", cost: "£100–160", price: "£380–520", margin: "£280–360", pct: "71–72%" },
    { method: "Clip-In (set of 120g)", cost: "£25–45", price: "£80–150", margin: "£55–105", pct: "68–72%" },
    { method: "Ponytail / Buns", cost: "£18–35", price: "£60–120", margin: "£42–85", pct: "69–73%" },
  ],
  marginNote:
    "Note: Trade costs based on factory-direct 100% Remy human hair pricing. Service prices reflect typical London/Southeast/Midlands salon rates. Regional variation ±15–20%.",
  retailHeading: "Retail vs Trade Sourcing: The Hidden Cost of Buying Wrong",
  retailIntro: "Here is a concrete example using tape-in extensions — the most popular method in UK salons right now:",
  retailCard: {
    title: "Buying at Retail Prices",
    items: [
      "Product cost: £180–260/set (consumer pricing)",
      "Service price: £350 (market-limited)",
      "Gross margin: £90–170",
    ],
    marginLine: "Margin %: 26–49%",
    footer: "You keep roughly £1 for every £2–4 of client spend.",
  },
  tradeCard: {
    title: "Buying at Trade Prices",
    items: [
      "Product cost: £80–130/set (factory-direct trade)",
      "Service price: £350–450 (you set the ceiling)",
      "Gross margin: £220–370",
    ],
    marginLine: "Margin %: 63–82%",
    footer: "You keep roughly £2–3 for every £1 of product cost.",
  },
  sameClientLead: "The same client. The same 90-minute appointment. The same result.",
  sameClientBody:
    "The only variable is where you bought the product. That is not a small difference — over a year of doing 4–6 extension appointments per week, trade sourcing can mean ",
  sameClientStrong: "£15,000–£35,000 in additional gross profit",
  sameClientTail: " compared to buying at retail prices.",
  pricingHeading: "Pricing Strategies That Maximise Margin Without Losing Clients",
  tieredHeading: "Tiered Pricing by Complexity",
  tieredIntro: "Not every full-head installation should be priced identically. Consider tiered pricing based on:",
  tieredItems: [
    { lead: "Length tiers:", text: '16", 18", 20", 22"+ each at different price points (longer = more product + more labour)' },
    { lead: "Colour complexity:", text: "Solid colours (base price) → Balayage/Ombre (+15–25%) → Custom colour match (+25–35%)" },
    { lead: "Hair density:", text: "Light enhancement (half-head) vs full volume vs extra-thick — three distinct price brackets" },
    { lead: "Method mix:", text: "Tape-in base price, nano ring premium (+20–30% for precision work), fusion premium (+30–40%)" },
  ],
  bundleHeading: "Bundle Pricing for Higher Ticket Value",
  bundleLead: "Instead of selling extensions as a standalone service, bundle them: ",
  bundleStrong: "“Extension + Colour Refresh + Blow-Dry Package”",
  bundleTail:
    " at a package price that feels like a deal to the client but lifts your average ticket by 30–50%. Bundles also increase revisit frequency — the client books back for maintenance, colour touch-ups, and removal/replacement as a predictable cycle.",
  maintenanceHeading: "The Maintenance Revenue Stream",
  maintenanceLead:
    "The real profit in extensions is not the first installation — it is the recurring revenue. Tape-ins need moving up every 6–8 weeks. Nano rings need adjustment every 4–6 weeks. Each maintenance visit is a 30–45 minute appointment generating £50–90 with minimal product cost. One full-head client generates ",
  maintenanceStrong: "£400–900/year in follow-up revenue",
  maintenanceTail:
    " alone. Build your pricing model around lifetime client value, not single-appointment extraction.",
  mistakesHeading: "5 Pricing Mistakes That Kill Your Extension Margins",
  fixLabel: "Fix:",
  mistakes: [
    {
      mistake: "Underpricing to compete with budget salons",
      fix: "Clients who shop on price alone are not your ideal extension customers. Position on quality, results, and brand — not on being cheapest.",
    },
    {
      mistake: "Pricing only on product cost + flat labour fee",
      fix: "Price on value delivered. An extension transformation that changes a client's appearance and confidence is worth far more than materials + hours.",
    },
    {
      mistake: "Giving free maintenance indefinitely",
      fix: "Include one maintenance session in the initial package price. Subsequent visits are billable services — this trains clients correctly from day one.",
    },
    {
      mistake: "Not raising prices as your skill improves",
      fix: "Your first 50 installations were practice. Your next 50 are professional-grade. Review your pricing quarterly and increase as your portfolio strengthens.",
    },
    {
      mistake: "Buying product from multiple sources with no trade account",
      fix: "Consolidate with one trade supplier. Volume consistency builds relationship benefits (better pricing, priority stock, samples) that fragmented purchasing never delivers.",
    },
  ],
  formulaHeading: "Quick Margin Formula (Use It Today)",
  formulaTitle: "Gross Margin Calculator",
  formulaSteps: [
    { label: "Step 1:", text: "Product cost (trade price) ÷ Service price = Cost Ratio" },
    { label: "Step 2:", text: "1 − Cost Ratio = Gross Margin %" },
    { label: "Step 3:", text: "Service price × Margin % = £ Profit per client" },
  ],
  formulaExampleLabel: "Example:",
  formulaExamplePrefix: "(£100 trade cost ÷ £400 service price) = 0.25 → 1 − 0.25 = ",
  formulaExampleStrong1: "75% margin",
  formulaExampleMid: " → £400 × 0.75 = ",
  formulaExampleStrong2: "£300 profit",
  formulaFooter: "For a full interactive calculator with all methods pre-loaded, try our ",
  formulaFooterLinkLabel: "Trade Price Calculator →",
  formulaFooterHref: "/trade-price-calculator",
  ctaHeading: "Ready to Improve Your Extension Margins?",
  ctaText:
    "Open a free trade account with D.S Hair Beauty and access factory-direct pricing on 100% Remy human hair extensions. No minimum order. Express 3–5 day delivery to the UK. See the margin improvement from day one.",
  ctaPrimaryLabel: "Open Trade Account →",
  ctaPrimaryHref: "/trade-wholesale",
  ctaSecondaryLabel: "Try Margin Calculator",
  ctaSecondaryHref: "/trade-price-calculator",
  faqHeading: "Frequently Asked Questions",
  faqs: [
    {
      q: "What is a typical hair extension margin for a salon?",
      a: "For a salon buying at trade and charging for both hair and application, product margins typically run 50–80% and total service margins 60–82%. The same client on a retail brand might leave only 26–49%.",
    },
    {
      q: "How do I calculate extension margin?",
      a: "Margin % = (client price − your trade cost) ÷ client price. Charge the hair and the application separately. Example: tape-in hair costs you £60 trade, application £180, client pays £420 total. Margin = (420 − 240) ÷ 420 = 43% combined, hair alone 75%.",
    },
    {
      q: "Which method has the best margin?",
      a: "Hand-tied weft and tape-in carry the strongest combined margins due to frequent re-orders and low trade cost. K-tip and nano ring are higher-ticket per application. The best method is the one your clients re-order.",
    },
    {
      q: "Does buying wholesale really change my margin?",
      a: "Yes — wholesale pricing runs 30–60% below retail. On the same client and service, moving from a retail brand to a no-minimum trade supplier can lift margin from the high-20s% to the high-70s%.",
    },
  ],
  relatedCard1: {
    eyebrow: "Related Article",
    title: "Private Label Hair Extensions: Build Your Own Brand",
    href: "/blog/private-label-hair-extensions-uk",
  },
  relatedCard2: {
    eyebrow: "Related Guide",
    title: "Wholesale Hair Extensions UK: Trade Buying Guide",
    href: "/blog/wholesale-hair-extensions-uk",
  },
  backLabel: "Back to Blog",
}

const de: HairExtensionProfitMarginGuideContent = {
  seoTitle: "Leitfaden zu Gewinnmargen bei Haarverlängerungen für UK-Salons: Echte Zahlen für 2026 | D.S Hair Beauty",
  seoDescription:
    "Wie viel Gewinn Haarverlängerungen für UK-Salons tatsächlich erwirtschaften? Echte Margenaufschlüsselungen nach Methode (tape-in, K-tip, nano, weft), Preisstrategien und wie Trade-Beschaffung Ihre Renditen vervielfacht. Inklusive rechnerfertiger Formeln.",
  heroBadge: "Salon-Rentabilität",
  heroTitle: "Gewinnmargen bei Haarverlängerungen",
  heroSubtitle:
    "Echte Zahlen für UK-Saloninhaber. Wie viel jede Verlängerungsmethode tatsächlich einbringt, warum Trade-Beschaffung alles verändert und wie Sie für maximale Rentabilität bepreisen, ohne Kunden abzuschrecken.",
  heroPrimaryLabel: "Trade-Preise anfragen",
  heroPrimaryHref: "/trade-wholesale",
  heroSecondaryLabel: "Margenrechner nutzen",
  heroSecondaryHref: "/trade-price-calculator",
  navHome: "Startseite",
  navBlog: "Blog",
  navCurrent: "Gewinnmargen bei Haarverlängerungen",
  authorAvatar: "CC",
  authorBy: "Verfasst von",
  authorName: "Caro Chen",
  authorNameHref: "/about/caro-chen",
  authorTitle: "Gründerin & Trade Director bei D.S Hair & Beauty · 19 Jahre Erfahrung in der Haarverlängerungs-Herstellung",
  whyHeading: "Warum Haarverlängerungen Ihre margenstärkste Dienstleistung sind",
  whyP1Lead: "Von allen Dienstleistungen eines typischen UK-Salons — Schnitte, Farbe, Föhnen, Behandlungen — ",
  whyP1Strong: "erzielen Haarverlängerungen durchweg den höchsten absoluten Gewinn pro Terminstunde",
  whyP1Tail:
    ". Eine Farbkorrektur kann 4 Stunden dauern und Produkte im Wert von £40 verbrauchen. Eine Ganzkopf-tape-in-Installation dauert 90 Minuten, verbraucht Produkte im Wert von £80–150 (zu Trade-Preisen) und generiert £300–550 Umsatz.",
  whyP2:
    "Die Rechnung ist einfach: Extensions kombinieren einen hohen wahrgenommenen Wert (Kunden zahlen bereitwillig Premiumpreise) mit kontrollierbaren Produktkosten (vor allem bei Trade-Beschaffung). Die Differenz zwischen diesen beiden Zahlen ist Ihre Marge — und diese Differenz ist größer als bei fast allem anderen auf Ihrer Leistungsliste.",
  whyP3Lead: "Doch hier irren sich die meisten Saloninhaber: Sie kaufen Extensions zu ",
  whyP3Strong: "Einzelhandels- oder beinahe Einzelhandelspreisen",
  whyP3Tail:
    " und fragen sich, warum ihre Margen so eng sind. Der Unterschied zwischen Kauf zu Endverbraucherpreisen und Trade-Preisen ist oft der Unterschied zwischen einer 60%-Marge und einer 85%-Marge bei derselben Dienstleistung. Lassen Sie mich Ihnen die tatsächlichen Zahlen zeigen.",
  heroImageSrc: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=1200&q=80",
  heroImageAlt: "Saloninhaberin prüft Preise und Margen für Haarverlängerungen",
  marginHeading: "Margenaufschlüsselung nach Verlängerungsmethode",
  marginIntroLead: "Diese Zahlen spiegeln ",
  marginIntroStrong: "typische UK-Salonpreise 2026",
  marginIntroTail:
    " mit über Trade bezogenen Produkten wider. Die tatsächlichen Zahlen variieren je nach Standort, Kundschaft und Positionierung — aber die Verhältnisse gelten in den meisten Märkten.",
  marginTableHead: ["Methode", "Trade-Kosten", "Typischer Servicepreis", "Bruttomarge", "Marge %"],
  marginRows: [
    { method: "Tape-In (Ganzkopf, 40 Stück)", cost: "£80–130", price: "£320–450", margin: "£190–320", pct: "60–75%" },
    { method: "K-Tip / Fusion (Ganzkopf)", cost: "£120–180", price: "£400–600", margin: "£280–420", pct: "67–73%" },
    { method: "Nano Ring (Ganzkopf)", cost: "£140–200", price: "£450–650", margin: "£310–450", pct: "66–72%" },
    { method: "Hand-Tied Weft (Ganzkopf)", cost: "£100–160", price: "£380–520", margin: "£280–360", pct: "71–72%" },
    { method: "Clip-In (Set à 120g)", cost: "£25–45", price: "£80–150", margin: "£55–105", pct: "68–72%" },
    { method: "Pferdeschwanz / Dutts", cost: "£18–35", price: "£60–120", margin: "£42–85", pct: "69–73%" },
  ],
  marginNote:
    "Hinweis: Trade-Kosten basieren auf fabrikdirekter 100% Remy-Echthaar-Bepreisung. Servicepreise spiegeln typische Salonpreise in London/Südosten/Midlands wider. Regionale Abweichung ±15–20%.",
  retailHeading: "Einzelhandel vs. Trade-Beschaffung: Die versteckten Kosten falschen Einkaufs",
  retailIntro:
    "Hier ein konkretes Beispiel mit tape-in Extensions — derzeit die beliebteste Methode in UK-Salons:",
  retailCard: {
    title: "Kauf zu Einzelhandelspreisen",
    items: [
      "Produktkosten: £180–260/Set (Endverbraucherpreise)",
      "Servicepreis: £350 (marktabhängig begrenzt)",
      "Bruttomarge: £90–170",
    ],
    marginLine: "Marge %: 26–49%",
    footer: "Sie behalten etwa £1 für je £2–4 Kundenausgaben.",
  },
  tradeCard: {
    title: "Kauf zu Trade-Preisen",
    items: [
      "Produktkosten: £80–130/Set (fabrikdirekt Trade)",
      "Servicepreis: £350–450 (Sie setzen die Obergrenze)",
      "Bruttomarge: £220–370",
    ],
    marginLine: "Marge %: 63–82%",
    footer: "Sie behalten etwa £2–3 für je £1 Produktkosten.",
  },
  sameClientLead: "Dieselbe Kundin. Derselbe 90-minütige Termin. Dasselbe Ergebnis.",
  sameClientBody:
    "Die einzige Variable ist, wo Sie das Produkt gekauft haben. Das ist kein kleiner Unterschied — bei 4–6 Verlängerungsterminen pro Woche über ein Jahr kann Trade-Beschaffung ",
  sameClientStrong: "£15.000–£35.000 zusätzlichen Bruttogewinn",
  sameClientTail: " bedeuten, verglichen mit dem Kauf zu Einzelhandelspreisen.",
  pricingHeading: "Preisstrategien, die die Marge maximieren, ohne Kunden zu verlieren",
  tieredHeading: "Gestaffelte Preise nach Komplexität",
  tieredIntro: "Nicht jede Ganzkopf-Installation sollte gleich bepreist sein. Erwägen Sie gestaffelte Preise basierend auf:",
  tieredItems: [
    { lead: "Längen-Stufen:", text: '16", 18", 20", 22"+ jeweils mit unterschiedlichen Preispunkten (länger = mehr Produkt + mehr Arbeit)' },
    { lead: "Farbkomplexität:", text: "Einheitliche Farben (Grundpreis) → Balayage/Ombre (+15–25%) → Maßgeschneiderte Farbanpassung (+25–35%)" },
    { lead: "Haardichte:", text: "Leichte Aufwertung (halber Kopf) vs. volles Volumen vs. extra dick — drei eigene Preiskategorien" },
    { lead: "Methodenmix:", text: "Tape-in Grundpreis, nano ring Premium (+20–30% für Präzisionsarbeit), Fusion Premium (+30–40%)" },
  ],
  bundleHeading: "Bündelpreise für höhere Ticketwerte",
  bundleLead: "Statt Extensions als Einzeldienstleistung zu verkaufen, bündeln Sie sie: ",
  bundleStrong: "„Extensions + Farbauffrischung + Blow-Dry-Paket“",
  bundleTail:
    " zu einem Paketpreis, der für die Kundin wie ein Schnäppchen wirkt, aber Ihren durchschnittlichen Ticketwert um 30–50% hebt. Bündel erhöhen auch die Wiederkommensfrequenz — die Kundin bucht Pflege, Farbkorrekturen und Entfernen/Wiedereinsetzen als vorhersehbaren Zyklus zurück.",
  maintenanceHeading: "Der Umsatzstrom der Pflege",
  maintenanceLead:
    "Der wahre Gewinn bei Extensions liegt nicht in der Erstinstallation, sondern in den wiederkehrenden Einnahmen. Tape-ins müssen alle 6–8 Wochen angehoben werden. Nano-Ringe brauchen alle 4–6 Wochen eine Anpassung. Jeder Pflegebesuch ist ein 30–45-minütiger Termin, der £50–90 bei minimalen Produktkosten generiert. Eine Ganzkopf-Kundin erzeugt allein ",
  maintenanceStrong: "£400–900/Jahr an Folgeumsatz",
  maintenanceTail:
    ". Bauen Sie Ihr Preismodell auf dem Customer Lifetime Value auf, nicht auf der Extraktion aus einzelnen Terminen.",
  mistakesHeading: "5 Preisirrtümer, die Ihre Extensions-Margen zerstören",
  fixLabel: "Lösung:",
  mistakes: [
    {
      mistake: "Unterbepreisung im Wettbewerb mit Billigsalons",
      fix: "Kunden, die nur auf den Preis schauen, sind nicht Ihre idealen Extension-Kunden. Positionieren Sie sich über Qualität, Ergebnisse und Marke — nicht über den niedrigsten Preis.",
    },
    {
      mistake: "Nur Produktkosten + pauschale Arbeitsgebühr bepreisen",
      fix: "Bepreisen Sie den gelieferten Wert. Eine Extension-Transformation, die Aussehen und Selbstvertrauen einer Kundin verändert, ist weit mehr wert als Material + Stunden.",
    },
    {
      mistake: "Unbegrenzte kostenlose Pflege anbieten",
      fix: "Nehmen Sie eine Pflege-Sitzung in den Paketpreis auf. Folgebesuche sind abrechenbare Leistungen — das trainiert Kunden von Tag eins richtig.",
    },
    {
      mistake: "Preise nicht anheben, wenn sich Ihre Fähigkeiten verbessern",
      fix: "Ihre ersten 50 Installationen waren Übung. Ihre nächsten 50 sind Profi-Qualität. Überprüfen Sie Ihre Preise vierteljährlich und erhöhen Sie sie, wenn Ihr Portfolio stärker wird.",
    },
    {
      mistake: "Produkte ohne Trade-Konto von mehreren Quellen kaufen",
      fix: "Bündeln Sie bei einem Trade-Lieferanten. Volumenkonsistenz schafft Beziehungsvorteile (bessere Preise, Vorzugsbestand, Muster), die fragmentierter Einkauf nie liefert.",
    },
  ],
  formulaHeading: "Schnelle Margenformel (noch heute nutzen)",
  formulaTitle: "Bruttomargen-Rechner",
  formulaSteps: [
    { label: "Schritt 1:", text: "Produktkosten (Trade-Preis) ÷ Servicepreis = Kostensatz" },
    { label: "Schritt 2:", text: "1 − Kostensatz = Bruttomarge %" },
    { label: "Schritt 3:", text: "Servicepreis × Marge % = £ Gewinn pro Kunde" },
  ],
  formulaExampleLabel: "Beispiel:",
  formulaExamplePrefix: "(£100 Trade-Kosten ÷ £400 Servicepreis) = 0,25 → 1 − 0,25 = ",
  formulaExampleStrong1: "75% Marge",
  formulaExampleMid: " → £400 × 0,75 = ",
  formulaExampleStrong2: "£300 Gewinn",
  formulaFooter: "Für einen vollständigen interaktiven Rechner mit allen vorinstallierten Methoden probieren Sie unseren ",
  formulaFooterLinkLabel: "Trade-Preisrechner →",
  formulaFooterHref: "/trade-price-calculator",
  ctaHeading: "Bereit, Ihre Extensions-Margen zu verbessern?",
  ctaText:
    "Eröffnen Sie ein kostenloses Trade-Konto bei D.S Hair Beauty und erhalten Sie fabrikdirekte Preise für 100% Remy-Echthaar-Extensions. Kein Mindestbestellwert. Express-Lieferung in 3–5 Tagen nach UK. Sehen Sie die Margenverbesserung ab Tag eins.",
  ctaPrimaryLabel: "Trade-Konto eröffnen →",
  ctaPrimaryHref: "/trade-wholesale",
  ctaSecondaryLabel: "Margenrechner testen",
  ctaSecondaryHref: "/trade-price-calculator",
  faqHeading: "Häufig gestellte Fragen",
  faqs: [
    {
      q: "Wie hoch ist eine typische Marge bei Haarverlängerungen für einen Salon?",
      a: "Bei einem Salon, der zu Trade-Preisen einkauft und Haar und Anwendung separat abrechnet, liegen Produktmargen typischerweise bei 50–80% und die Gesamt-Servicemargen bei 60–82%. Dieselbe Kundin lässt bei einer Einzelhandelsmarke nur 26–49% übrig.",
    },
    {
      q: "Wie berechne ich die Extension-Marge?",
      a: "Marge % = (Kundenpreis − Ihre Trade-Kosten) ÷ Kundenpreis. Rechnen Sie Haar und Anwendung getrennt ab. Beispiel: tape-in-Haar kostet Sie £60 Trade, die Anwendung £180, die Kundin zahlt insgesamt £420. Marge = (420 − 240) ÷ 420 = 43% kombiniert, beim Haar allein 75%.",
    },
    {
      q: "Welche Methode hat die beste Marge?",
      a: "Hand-tied weft und tape-in tragen die stärksten kombinierten Margen, weil Nachbestellzyklen häufig sind und die Trade-Kosten im Verhältnis zu den Servicegebühren niedrig sind. K-tip und nano ring sind pro Anwendung höherpreisig. Die „beste“ Methode ist die, die Ihre Kunden tatsächlich nachbestellen.",
    },
    {
      q: "Verändert der Großhandelseinkauf meine Marge wirklich?",
      a: "Ja — Großhandels- (Trade-) Preise liegen 30–60% unter dem Einzelhandel. Bei derselben Kundin und derselben Dienstleistung kann der Wechsel von einer Einzelhandelsmarke zu einem Trade-Lieferanten ohne Mindestbestellmenge die Marge von hohen 20er- auf hohe 70er-Prozente heben.",
    },
  ],
  relatedCard1: {
    eyebrow: "Verwandter Artikel",
    title: "Private Label Haarverlängerungen: Bauen Sie Ihre eigene Marke",
    href: "/blog/private-label-hair-extensions-uk",
  },
  relatedCard2: {
    eyebrow: "Verwandter Leitfaden",
    title: "Haarverlängerungen im Großhandel UK: Trade-Einkaufsleitfaden",
    href: "/blog/wholesale-hair-extensions-uk",
  },
  backLabel: "Zurück zum Blog",
}

const fr: HairExtensionProfitMarginGuideContent = {
  seoTitle: "Guide des marges bénéficiaires des extensions de cheveux pour les salons UK : les vrais chiffres 2026 | D.S Hair Beauty",
  seoDescription:
    "Combien de profit les extensions de cheveux génèrent-elles réellement pour les salons UK ? Répartition réelle des marges par méthode (tape-in, K-tip, nano, weft), stratégies de prix et comment l'approvisionnement trade multiplie vos retours. Formules prêtes pour calculatrice incluses.",
  heroBadge: "Rentabilité du salon",
  heroTitle: "Marges bénéficiaires des extensions de cheveux",
  heroSubtitle:
    "Les vrais chiffres pour les propriétaires de salons UK. Combien chaque méthode d'extension rapporte réellement, pourquoi l'approvisionnement trade change tout, et comment fixer des prix pour une rentabilité maximale sans effrayer les clientes.",
  heroPrimaryLabel: "Obtenir les prix trade",
  heroPrimaryHref: "/trade-wholesale",
  heroSecondaryLabel: "Utiliser le calculateur de marge",
  heroSecondaryHref: "/trade-price-calculator",
  navHome: "Accueil",
  navBlog: "Blog",
  navCurrent: "Marges des extensions de cheveux",
  authorAvatar: "CC",
  authorBy: "Écrit par",
  authorName: "Caro Chen",
  authorNameHref: "/about/caro-chen",
  authorTitle: "Fondatrice & Directrice Trade chez D.S Hair & Beauty · 19 ans dans la fabrication d'extensions de cheveux",
  whyHeading: "Pourquoi les extensions sont votre service à plus forte marge",
  whyP1Lead: "De tous les services qu'un salon UK typique propose — coupes, couleur, brushing, soins — ",
  whyP1Strong: "les extensions de cheveux offrent systématiquement le profit absolu le plus élevé par heure de rendez-vous",
  whyP1Tail:
    ". Une correction de couleur peut prendre 4 heures et utiliser £40 de produits. Une pose tape-in complète prend 90 minutes, utilise £80–150 de produits (aux prix trade), et génère £300–550 de chiffre d'affaires.",
  whyP2:
    "Le calcul est simple : les extensions combinent une valeur perçue élevée (les clientes paient volontiers des prix premium) avec des coûts produits maîtrisables (surtout lorsqu'ils sont achetés aux prix trade). L'écart entre ces deux chiffres est votre marge — et cet écart est plus large que presque tout le reste de votre carte de services.",
  whyP3Lead: "Mais voici ce que la plupart des propriétaires de salon ratent : ils achètent les extensions à des ",
  whyP3Strong: "prix détaillant ou quasi détaillant",
  whyP3Tail:
    " et se demandent pourquoi leurs marges sont serrées. La différence entre acheter aux prix consommateur et aux prix trade est souvent la différence entre une marge de 60% et une marge de 85% sur le même service. Laissez-moi vous montrer les vrais chiffres.",
  heroImageSrc: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=1200&q=80",
  heroImageAlt: "Propriétaire de salon vérifiant les prix et marges des extensions de cheveux",
  marginHeading: "Répartition des marges par méthode d'extension",
  marginIntroLead: "Ces chiffres reflètent ",
  marginIntroStrong: "la tarification moyenne des salons UK en 2026",
  marginIntroTail:
    " avec des produits achetés en trade. Les chiffres réels varient selon l'emplacement, la clientèle et votre positionnement — mais les ratios restent valables sur la plupart des marchés.",
  marginTableHead: ["Méthode", "Coût trade", "Prix moyen du service", "Marge brute", "Marge %"],
  marginRows: [
    { method: "Tape-In (tête complète, 40 pièces)", cost: "£80–130", price: "£320–450", margin: "£190–320", pct: "60–75%" },
    { method: "K-Tip / Fusion (tête complète)", cost: "£120–180", price: "£400–600", margin: "£280–420", pct: "67–73%" },
    { method: "Nano Ring (tête complète)", cost: "£140–200", price: "£450–650", margin: "£310–450", pct: "66–72%" },
    { method: "Hand-Tied Weft (tête complète)", cost: "£100–160", price: "£380–520", margin: "£280–360", pct: "71–72%" },
    { method: "Clip-In (set de 120g)", cost: "£25–45", price: "£80–150", margin: "£55–105", pct: "68–72%" },
    { method: "Queue de cheval / Chignons", cost: "£18–35", price: "£60–120", margin: "£42–85", pct: "69–73%" },
  ],
  marginNote:
    "Remarque : coûts trade basés sur les prix d'usine directe en 100% cheveux humains Remy. Les prix des services reflètent les tarifs moyens des salons de Londres/Sud-Est/Midlands. Variation régionale ±15–20%.",
  retailHeading: "Approvisionnement détaillant vs trade : le coût caché du mauvais achat",
  retailIntro:
    "Voici un exemple concret avec les tape-ins — la méthode la plus populaire dans les salons UK actuellement :",
  retailCard: {
    title: "Acheter aux prix détaillant",
    items: [
      "Coût du produit : £180–260/set (prix consommateur)",
      "Prix du service : £350 (limité par le marché)",
      "Marge brute : £90–170",
    ],
    marginLine: "Marge % : 26–49%",
    footer: "Vous conservez environ £1 pour chaque £2–4 dépensés par la cliente.",
  },
  tradeCard: {
    title: "Acheter aux prix trade",
    items: [
      "Coût du produit : £80–130/set (usine directe trade)",
      "Prix du service : £350–450 (vous fixez le plafond)",
      "Marge brute : £220–370",
    ],
    marginLine: "Marge % : 63–82%",
    footer: "Vous conservez environ £2–3 pour chaque £1 de coût produit.",
  },
  sameClientLead: "La même cliente. Le même rendez-vous de 90 minutes. Le même résultat.",
  sameClientBody:
    "La seule variable est l'endroit où vous avez acheté le produit. Ce n'est pas une petite différence — sur une année à raison de 4–6 rendez-vous d'extension par semaine, l'approvisionnement trade peut représenter ",
  sameClientStrong: "£15.000–£35.000 de profit brut supplémentaire",
  sameClientTail: " par rapport à l'achat aux prix détaillant.",
  pricingHeading: "Stratégies de prix qui maximisent la marge sans perdre de clientes",
  tieredHeading: "Tarification par paliers selon la complexité",
  tieredIntro: "Toutes les poses complètes ne devraient pas être facturées à l'identique. Envisagez une tarification par paliers basée sur :",
  tieredItems: [
    { lead: "Paliers de longueur :", text: '16", 18", 20", 22"+ chacun à des prix différents (plus long = plus de produit + plus de travail)' },
    { lead: "Complexité de couleur :", text: "Couleurs unies (prix de base) → Balayage/Ombre (+15–25%) → Correspondance de couleur personnalisée (+25–35%)" },
    { lead: "Densité des cheveux :", text: "Léger ajout (demi-tête) vs volume complet vs extra-épais — trois tranches de prix distinctes" },
    { lead: "Combinaison de méthodes :", text: "Tape-in au prix de base, nano ring premium (+20–30% pour le travail de précision), fusion premium (+30–40%)" },
  ],
  bundleHeading: "Tarification par lot pour des paniers plus élevés",
  bundleLead: "Au lieu de vendre les extensions comme un service isolé, regroupez-les : ",
  bundleStrong: "« Extensions + Rafraîchissement de couleur + Forfait Brushing »",
  bundleTail:
    " à un prix de forfait qui semble avantageux à la cliente mais qui augmente votre panier moyen de 30–50%. Les forfaits augmentent aussi la fréquence de retour — la cliente reprend rendez-vous pour l'entretien, les retouches de couleur et le retrait/remplacement selon un cycle prévisible.",
  maintenanceHeading: "Le flux de revenus de l'entretien",
  maintenanceLead:
    "Le vrai profit des extensions n'est pas la première pose — c'est le revenu récurrent. Les tape-ins nécessitent une remontée toutes les 6–8 semaines. Les nano rings nécessitent un ajustement toutes les 4–6 semaines. Chaque visite d'entretien est un rendez-vous de 30–45 minutes générant £50–90 avec un coût produit minimal. Une cliente en pose complète génère à elle seule ",
  maintenanceStrong: "£400–900/an de revenus de suivi",
  maintenanceTail:
    ". Construisez votre modèle de prix sur la valeur client à vie, pas sur l'extraction d'un seul rendez-vous.",
  mistakesHeading: "5 erreurs de prix qui tuent vos marges sur les extensions",
  fixLabel: "Solution :",
  mistakes: [
    {
      mistake: "Sous-tarifer pour concurrencer les salons low-cost",
      fix: "Les clientes qui ne regardent que le prix ne sont pas vos clientes d'extension idéales. Positionnez-vous sur la qualité, les résultats et la marque — pas sur le moins cher.",
    },
    {
      mistake: "Ne facturer que le coût produit + des honoraires fixes",
      fix: "Fixez le prix sur la valeur délivrée. Une transformation par extensions qui change l'apparence et la confiance d'une cliente vaut bien plus que matériaux + heures.",
    },
    {
      mistake: "Offrir l'entretien gratuit indéfiniment",
      fix: "Incluez une séance d'entretien dans le prix du forfait initial. Les visites suivantes sont des services facturables — cela forme les clientes correctement dès le premier jour.",
    },
    {
      mistake: "Ne pas augmenter vos prix à mesure que vos compétences progressent",
      fix: "Vos 50 premières poses étaient de la pratique. Vos 50 suivantes sont de niveau professionnel. Révisez vos prix chaque trimestre et augmentez-les à mesure que votre portfolio se renforce.",
    },
    {
      mistake: "Acheter auprès de plusieurs sources sans compte trade",
      fix: "Regroupez-vous auprès d'un seul fournisseur trade. La cohérence des volumes crée des avantages relationnels (meilleurs prix, stock prioritaire, échantillons) qu'un achat fragmenté n'offre jamais.",
    },
  ],
  formulaHeading: "Formule rapide de marge (à utiliser aujourd'hui)",
  formulaTitle: "Calculateur de marge brute",
  formulaSteps: [
    { label: "Étape 1 :", text: "Coût du produit (prix trade) ÷ Prix du service = Ratio de coût" },
    { label: "Étape 2 :", text: "1 − Ratio de coût = Marge brute %" },
    { label: "Étape 3 :", text: "Prix du service × Marge % = £ Profit par cliente" },
  ],
  formulaExampleLabel: "Exemple :",
  formulaExamplePrefix: "(£100 coût trade ÷ £400 prix du service) = 0,25 → 1 − 0,25 = ",
  formulaExampleStrong1: "marge de 75%",
  formulaExampleMid: " → £400 × 0,75 = ",
  formulaExampleStrong2: "£300 de profit",
  formulaFooter: "Pour un calculateur interactif complet avec toutes les méthodes préchargées, essayez notre ",
  formulaFooterLinkLabel: "Calculateur de prix trade →",
  formulaFooterHref: "/trade-price-calculator",
  ctaHeading: "Prêt à améliorer vos marges sur les extensions ?",
  ctaText:
    "Ouvrez un compte trade gratuit chez D.S Hair Beauty et accédez aux prix d'usine directe sur les extensions en 100% cheveux humains Remy. Aucun minimum de commande. Livraison express 3–5 jours au Royaume-Uni. Voyez l'amélioration de marge dès le premier jour.",
  ctaPrimaryLabel: "Ouvrir un compte trade →",
  ctaPrimaryHref: "/trade-wholesale",
  ctaSecondaryLabel: "Essayer le calculateur de marge",
  ctaSecondaryHref: "/trade-price-calculator",
  faqHeading: "Questions fréquentes",
  faqs: [
    {
      q: "Quelle est la marge typique des extensions de cheveux pour un salon ?",
      a: "Pour un salon qui achète en trade et facture à la fois les cheveux et la pose, les marges produits vont généralement de 50–80% et les marges totales sur le service de 60–82%. La même cliente sur une marque détaillante ne laisse que 26–49%.",
    },
    {
      q: "Comment calculer la marge sur les extensions ?",
      a: "Marge % = (prix client − votre coût trade) ÷ prix client. Facturez les cheveux et la pose séparément. Exemple : les cheveux tape-in vous coûtent £60 en trade, la pose £180, la cliente paie £420 au total. Marge = (420 − 240) ÷ 420 = 43% combiné, 75% sur les cheveux seuls.",
    },
    {
      q: "Quelle méthode offre la meilleure marge ?",
      a: "Le hand-tied weft et le tape-in portent les marges combinées les plus fortes grâce aux cycles de réapprovisionnement fréquents et au faible coût trade. Le K-tip et le nano ring ont un panier plus élevé par pose. La « meilleure » méthode est celle que vos clientes recommande réellement.",
    },
    {
      q: "L'achat en gros change-t-il vraiment ma marge ?",
      a: "Oui — les prix de gros (trade) sont 30–60% sous le détaillant. Sur la même cliente et le même service, passer d'une marque détaillante à un fournisseur trade sans minimum peut faire passer votre marge de la fin des 20% à la fin des 70%.",
    },
  ],
  relatedCard1: {
    eyebrow: "Article associé",
    title: "Extensions de cheveux en marque blanche : créez votre propre marque",
    href: "/blog/private-label-hair-extensions-uk",
  },
  relatedCard2: {
    eyebrow: "Guide associé",
    title: "Extensions de cheveux en gros UK : guide d'achat trade",
    href: "/blog/wholesale-hair-extensions-uk",
  },
  backLabel: "Retour au blog",
}

const ar: HairExtensionProfitMarginGuideContent = {
  seoTitle: "دليل هامش الربح في وصلات الشعر لصالونات المملكة المتحدة: أرقام حقيقية لعام 2026 | D.S Hair Beauty",
  seoDescription:
    "كم يبلغ الربح الفعلي الذي تحققه وصلات الشعر لصالونات المملكة المتحدة؟ تفصيل حقيقي لهوامش الربح حسب الطريقة (tape-in وK-tip وnano وweft)، واستراتيجيات التسعير، وكيف يضاعف التوريد بأسعار trade عوائدك. يشمل صيغاً جاهزة للحاسبة.",
  heroBadge: "ربحية الصالون",
  heroTitle: "هوامش ربح وصلات الشعر",
  heroSubtitle:
    "أرقام حقيقية لأصحاب الصالونات في المملكة المتحدة. كم تربح كل طريقة وصل فعلياً، ولماذا يغيّر التوريد بأسعار trade كل شيء، وكيف تسعّر لتحقيق أقصى ربحية دون إخافة العميلات.",
  heroPrimaryLabel: "احصل على أسعار Trade",
  heroPrimaryHref: "/trade-wholesale",
  heroSecondaryLabel: "استخدم حاسبة الهامش",
  heroSecondaryHref: "/trade-price-calculator",
  navHome: "الرئيسية",
  navBlog: "المدونة",
  navCurrent: "هوامش ربح وصلات الشعر",
  authorAvatar: "CC",
  authorBy: "كتبته",
  authorName: "Caro Chen",
  authorNameHref: "/about/caro-chen",
  authorTitle: "مؤسسة ومديرة التجارة في D.S Hair & Beauty · خبرة 19 عاماً في تصنيع وصلات الشعر",
  whyHeading: "لماذا تُعد وصلات الشعر خدمتك الأعلى هامش ربح",
  whyP1Lead: "من بين جميع الخدمات التي يقدمها صالون UK نموذجي — قص وتلوين وتجفيف وعناية — ",
  whyP1Strong: "تُحقق وصلات الشعر باستمرار أعلى ربح مطلق لكل ساعة موعد",
  whyP1Tail:
    ". قد يستغرق تصحيح اللون 4 ساعات ويستهلك منتجات بقيمة £40. أما تركيب tape-in للرأس كاملاً فيستغرق 90 دقيقة، ويستهلك منتجات بقيمة £80–150 (بأسعار trade)، ويولّد إيرادات تتراوح بين £300–550.",
  whyP2:
    "الحساب بسيط: تجمع الوصلات بين قيمة مدرَكة عالية (تدفع العميلات أسعاراً متميزة عن طيب خاطر) وتكاليف منتجات يمكن التحكم بها (خاصة عند الشراء بأسعار trade). الفجوة بين هذين الرقمين هي هامشك — وهي أوسع من أي شيء آخر تقريباً في قائمة خدماتك.",
  whyP3Lead: "لكن إليك ما يخطئ فيه معظم أصحاب الصالونات: يشترون الوصلات بأسعار ",
  whyP3Strong: "التجزئة أو شبه التجزئة",
  whyP3Tail:
    " ثم يتساءلون لماذا هوامشهم ضيقة. الفرق بين الشراء بأسعار المستهلك وبأسعار trade هو غالباً الفرق بين هامش 60% وهامش 85% على الخدمة نفسها. دعوني أريكم الأرقام الفعلية.",
  heroImageSrc: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=1200&q=80",
  heroImageAlt: "صاحبة صالون تراجع أسعار وهوامش وصلات الشعر",
  marginHeading: "تفصيل الهامش حسب طريقة الوصل",
  marginIntroLead: "تعكس هذه الأرقام ",
  marginIntroStrong: "تسعير صالونات UK النموذجي لعام 2026",
  marginIntroTail:
    " مع منتجات مُورَّدة بأسعار trade. تختلف الأرقام الفعلية حسب الموقع والعميلات وتحديد موقعك — لكن النسب تظل صحيحة في معظم الأسواق.",
  marginTableHead: ["الطريقة", "تكلفة Trade", "سعر الخدمة النموذجي", "هامش الربح الإجمالي", "الهامش %"],
  marginRows: [
    { method: "Tape-In (رأس كامل، 40 قطعة)", cost: "£80–130", price: "£320–450", margin: "£190–320", pct: "60–75%" },
    { method: "K-Tip / Fusion (رأس كامل)", cost: "£120–180", price: "£400–600", margin: "£280–420", pct: "67–73%" },
    { method: "Nano Ring (رأس كامل)", cost: "£140–200", price: "£450–650", margin: "£310–450", pct: "66–72%" },
    { method: "Hand-Tied Weft (رأس كامل)", cost: "£100–160", price: "£380–520", margin: "£280–360", pct: "71–72%" },
    { method: "Clip-In (مجموعة 120غ)", cost: "£25–45", price: "£80–150", margin: "£55–105", pct: "68–72%" },
    { method: "ذيل الحصان / الكعكات", cost: "£18–35", price: "£60–120", margin: "£42–85", pct: "69–73%" },
  ],
  marginNote:
    "ملاحظة: تستند تكاليف trade إلى تسعير مباشر من المصنع لشعر Remy الطبيعي 100%. تعكس أسعار الخدمات معدلات صالونات لندن/الجنوب الشرقي/الوسط. تباين إقليمي ±15–20%.",
  retailHeading: "التجزئة مقابل التوريد trade: التكلفة الخفية للشراء الخاطئ",
  retailIntro: "إليك مثالاً ملموساً باستخدام tape-in — الطريقة الأكثر شيوعاً في صالونات المملكة المتحدة حالياً:",
  retailCard: {
    title: "الشراء بأسعار التجزئة",
    items: [
      "تكلفة المنتج: £180–260/مجموعة (أسعار المستهلك)",
      "سعر الخدمة: £350 (محدود بالسوق)",
      "هامش الربح الإجمالي: £90–170",
    ],
    marginLine: "الهامش %: 26–49%",
    footer: "تحتفظ بنحو £1 مقابل كل £2–4 ينفقها العميل.",
  },
  tradeCard: {
    title: "الشراء بأسعار Trade",
    items: [
      "تكلفة المنتج: £80–130/مجموعة (مباشرة من المصنع بسعر trade)",
      "سعر الخدمة: £350–450 (أنت تحدد السقف)",
      "هامش الربح الإجمالي: £220–370",
    ],
    marginLine: "الهامش %: 63–82%",
    footer: "تحتفظ بنحو £2–3 مقابل كل £1 من تكلفة المنتج.",
  },
  sameClientLead: "نفس العميلة. نفس الموعد البالغ 90 دقيقة. نفس النتيجة.",
  sameClientBody:
    "المتغير الوحيد هو المكان الذي اشتريت منه المنتج. هذا ليس فرقاً صغيراً — على مدار عام من إجراء 4–6 مواعيد وصل أسبوعياً، يمكن أن يعني التوريد بأسعار trade ",
  sameClientStrong: "£15,000–£35,000 من الربح الإجمالي الإضافي",
  sameClientTail: " مقارنة بالشراء بأسعار التجزئة.",
  pricingHeading: "استراتيجيات تسعير تزيد الهامش دون خسارة العميلات",
  tieredHeading: "تسعير متدرج حسب التعقيد",
  tieredIntro: "ليس كل تركيب للرأس الكامل يجب أن يُسعَّر بشكل متطابق. فكّر في تسعير متدرج بناءً على:",
  tieredItems: [
    { lead: "مستويات الطول:", text: '16" و18" و20" و22"+، كل منها بنقطة سعر مختلفة (أطول = منتج أكثر + عمل أكثر)' },
    { lead: "تعقيد اللون:", text: "ألوان موحدة (السعر الأساسي) → Balayage/Ombre (+15–25%) → مطابقة لون مخصصة (+25–35%)" },
    { lead: "كثافة الشعر:", text: "تعزيز خفيف (نصف رأس) مقابل حجم كامل مقابل سميك جداً — ثلاث فئات أسعار منفصلة" },
    { lead: "مزيج الطرق:", text: "tape-in بالسعر الأساسي، nano ring بميزة إضافية (+20–30% للعمل الدقيق)، fusion بميزة إضافية (+30–40%)" },
  ],
  bundleHeading: "تسعير الحزم لقيمة تذكرة أعلى",
  bundleLead: "بدلاً من بيع الوصلات كخدمة مستقلة، اجمعهما في حزمة: ",
  bundleStrong: "«وصلات + تجديد لون + حزمة تجفيف»",
  bundleTail:
    " بسعر حزمة يبدو كصفقة للعميلة لكنه يرفع متوسط تذكرتك بنسبة 30–50%. تزيد الحزم أيضاً من تكرار الزيارات — إذ تحجز العميلة مواعيد الصيانة ولمسات اللون والإزالة/الاستبدال كدورة يمكن التنبؤ بها.",
  maintenanceHeading: "تدفق إيرادات الصيانة",
  maintenanceLead:
    "الربح الحقيقي في الوصلات ليس التركيب الأول — بل الإيرادات المتكررة. تحتاج tape-ins إلى إزاحة كل 6–8 أسابيع. وتحتاج nano rings إلى تعديل كل 4–6 أسابيع. كل زيارة صيانة هي موعد من 30–45 دقيقة يولّد £50–90 بأقل تكلفة منتجات. عميلة رأس كامل واحدة تولّد وحدها ",
  maintenanceStrong: "£400–900/سنة من إيرادات المتابعة",
  maintenanceTail:
    ". ابنِ نموذج تسعيرك على القيمة الدائمة للعميلة، وليس على استخلاص موعد واحد.",
  mistakesHeading: "5 أخطاء تسعير تقتل هوامش وصلاتك",
  fixLabel: "الحل:",
  mistakes: [
    {
      mistake: "تسعير منخفض لمنافسة صالونات الميزانية",
      fix: "العميلات اللواتي يبحثن عن السعر وحده لسن عميلاتك المثاليات للوصلات. روّج للجودة والنتائج والعلامة التجارية — لا لكونك الأرخص.",
    },
    {
      mistake: "التسعير على تكلفة المنتج + رسوم عمل ثابتة فقط",
      fix: "سعّر على القيمة المقدَّمة. تحوّل الوصلات الذي يغير مظهر العميلة وثقتها يساوي أكثر بكثير من المواد + الساعات.",
    },
    {
      mistake: "تقديم صيانة مجانية إلى أجل غير مسمى",
      fix: "ضمّن جلسة صيانة واحدة في سعر الحزمة الأولية. الزيارات اللاحقة خدمات قابلة للفوترة — وهذا يدرب العميلات بشكل صحيح من اليوم الأول.",
    },
    {
      mistake: "عدم رفع الأسعار مع تحسن مهاراتك",
      fix: "أول 50 تركيباً كانت تدريباً. الخمسون التالية بجودة احترافية. راجع أسعارك كل ثلاثة أشهر وارفعها مع تعزز محفظتك.",
    },
    {
      mistake: "شراء المنتجات من مصادر متعددة دون حساب trade",
      fix: "وحّد الشراء لدى مورد trade واحد. ثبات الحجم يبني مزايا علاقاتية (أسعار أفضل، مخزون ذا أولوية، عينات) لا يوفرها أبداً الشراء المجزأ.",
    },
  ],
  formulaHeading: "صيغة الهامش السريعة (استخدمها اليوم)",
  formulaTitle: "حاسبة هامش الربح الإجمالي",
  formulaSteps: [
    { label: "الخطوة 1:", text: "تكلفة المنتج (سعر trade) ÷ سعر الخدمة = نسبة التكلفة" },
    { label: "الخطوة 2:", text: "1 − نسبة التكلفة = هامش الربح الإجمالي %" },
    { label: "الخطوة 3:", text: "سعر الخدمة × الهامش % = £ ربح لكل عميلة" },
  ],
  formulaExampleLabel: "مثال:",
  formulaExamplePrefix: "(£100 تكلفة trade ÷ £400 سعر الخدمة) = 0.25 ← 1 − 0.25 = ",
  formulaExampleStrong1: "هامش 75%",
  formulaExampleMid: " ← £400 × 0.75 = ",
  formulaExampleStrong2: "£300 ربح",
  formulaFooter: "للحصول على حاسبة تفاعلية كاملة بجميع الطرق محمّلة مسبقاً، جرّب ",
  formulaFooterLinkLabel: "حاسبة أسعار Trade ←",
  formulaFooterHref: "/trade-price-calculator",
  ctaHeading: "مستعد لتحسين هوامش وصلاتك؟",
  ctaText:
    "افتح حساب trade مجانياً لدى D.S Hair Beauty وتمتع بأسعار مباشرة من المصنع لوصلات شعر Remy الطبيعي 100%. لا حد أدنى للطلب. توصيل سريع خلال 3–5 أيام إلى المملكة المتحدة. شاهد تحسن الهامش من اليوم الأول.",
  ctaPrimaryLabel: "افتح حساب Trade ←",
  ctaPrimaryHref: "/trade-wholesale",
  ctaSecondaryLabel: "جرّب حاسبة الهامش",
  ctaSecondaryHref: "/trade-price-calculator",
  faqHeading: "الأسئلة الشائعة",
  faqs: [
    {
      q: "ما هو هامش الربح النموذجي لوصلات الشعر في الصالون؟",
      a: "للصالون الذي يشتري بأسعار trade ويتقاضى أجراً عن الشعر والتطبيق معاً، تتراوح هوامش المنتجات عادةً بين 50–80% وإجمالي هوامش الخدمة بين 60–82%. أما العميلة نفسها عند علامة تجزئة فقد تترك 26–49% فقط.",
    },
    {
      q: "كيف أحسب هامش الوصلات؟",
      a: "الهامش % = (سعر العميلة − تكلفتك بأسعار trade) ÷ سعر العميلة. افرض أجراً منفصلاً عن الشعر والتطبيق. مثال: شعر tape-in يكلفك £60 trade، والتطبيق £180، وتدفع العميلة £420 إجمالاً. الهامش = (420 − 240) ÷ 420 = 43% مجتمعاً، و75% للشعر وحده.",
    },
    {
      q: "أي طريقة تحقق أفضل هامش؟",
      a: "يتميز hand-tied weft وtape-in بأقوى هوامش مجمعة بسبب دورات إعادة الطلب المتكررة وانخفاض تكلفة trade. أما K-tip وnano ring فذوا تذكرة أعلى لكل تطبيق. «الأفضل» هي الطريقة التي يعيد عملاؤك طلبها فعلياً.",
    },
    {
      q: "هل يغيّر الشراء بالجملة هامشي حقاً؟",
      a: "نعم — أسعار الجملة (trade) أقل بنسبة 30–60% من التجزئة. مع نفس العميلة ونفس الخدمة، يمكن أن يؤدي الانتقال من علامة تجزئة إلى مورد trade دون حد أدنى إلى رفع هامشك من منتصف العشرينات إلى منتصف السبعينات بالمئة.",
    },
  ],
  relatedCard1: {
    eyebrow: "مقال ذو صلة",
    title: "وصلات الشعر بالعلامة الخاصة: ابنِ علامتك التجارية",
    href: "/blog/private-label-hair-extensions-uk",
  },
  relatedCard2: {
    eyebrow: "دليل ذو صلة",
    title: "وصلات الشعر بالجملة UK: دليل الشراء trade",
    href: "/blog/wholesale-hair-extensions-uk",
  },
  backLabel: "العودة إلى المدونة",
}

const sv: HairExtensionProfitMarginGuideContent = {
  seoTitle: "Guide till vinstmarginaler för hårförlängning för brittiska salonger: Verkliga siffror för 2026 | D.S Hair Beauty",
  seoDescription:
    "Hur mycket vinst genererar hårförlängningar faktiskt för brittiska salonger? Verkliga marginaluppdelningar per metod (tape-in, K-tip, nano, weft), prissättningsstrategier och hur trade-inköp multiplicerar din avkastning. Inkluderar kalkylatorfärdiga formler.",
  heroBadge: "Salongslönsamhet",
  heroTitle: "Vinstmarginaler för hårförlängning",
  heroSubtitle:
    "Verkliga siffror för brittiska salongägare. Hur mycket varje förlängningsmetod faktiskt tjänar, varför trade-inköp förändrar allt och hur du prissätter för maximal lönsamhet utan att skrämma bort kunder.",
  heroPrimaryLabel: "Få trade-priser",
  heroPrimaryHref: "/trade-wholesale",
  heroSecondaryLabel: "Använd marginalkalkylatorn",
  heroSecondaryHref: "/trade-price-calculator",
  navHome: "Hem",
  navBlog: "Blogg",
  navCurrent: "Vinstmarginaler för hårförlängning",
  authorAvatar: "CC",
  authorBy: "Skriven av",
  authorName: "Caro Chen",
  authorNameHref: "/about/caro-chen",
  authorTitle: "Grundare & Trade Director på D.S Hair & Beauty · 19 år inom tillverkning av hårförlängningar",
  whyHeading: "Varför hårförlängningar är din tjänst med högst marginal",
  whyP1Lead: "Av alla tjänster en typisk brittisk salong erbjuder — klippningar, färg, föningar, behandlingar — ",
  whyP1Strong: "levererar hårförlängningar konsekvent högst absolut vinst per bokningstimme",
  whyP1Tail:
    ". En färgkorrigering kan ta 4 timmar och använda produkter för £40. En tape-in-installation för hela huvudet tar 90 minuter, använder produkter för £80–150 (till trade-priser) och genererar £300–550 i serviceintäkter.",
  whyP2:
    "Matten är enkel: förlängningar kombinerar högt upplevt värde (kunder betalar gärna premiumpriser) med kontrollerbara produktkostnader (särskilt vid trade-inköp). Gapet mellan dessa två siffror är din marginal — och det gapet är bredare än nästan allt annat på din tjänstemeny.",
  whyP3Lead: "Men här är det de flesta salongägare gör fel: de köper förlängningar till ",
  whyP3Strong: "detaljhandels- eller nära detaljhandelspriser",
  whyP3Tail:
    " och undrar varför marginalerna känns snäva. Skillnaden mellan att köpa till konsumentpriser kontra trade-priser är ofta skillnaden mellan en 60%-marginal och en 85%-marginal på samma tjänst. Låt mig visa dig de faktiska siffrorna.",
  heroImageSrc: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=1200&q=80",
  heroImageAlt: "Salongägare granskar prissättning och marginaler för hårförlängning",
  marginHeading: "Marginaluppdelning per förlängningsmetod",
  marginIntroLead: "Dessa siffror återspeglar ",
  marginIntroStrong: "typisk brittisk salongsprissättning 2026",
  marginIntroTail:
    " med produkter inköpta via trade. Faktiska siffror varierar beroende på läge, kundbas och din positionering — men förhållandena håller på de flesta marknader.",
  marginTableHead: ["Metod", "Trade-kostnad", "Typiskt tjänstepris", "Bruttomarginal", "Marginal %"],
  marginRows: [
    { method: "Tape-In (helt huvud, 40 st)", cost: "£80–130", price: "£320–450", margin: "£190–320", pct: "60–75%" },
    { method: "K-Tip / Fusion (helt huvud)", cost: "£120–180", price: "£400–600", margin: "£280–420", pct: "67–73%" },
    { method: "Nano Ring (helt huvud)", cost: "£140–200", price: "£450–650", margin: "£310–450", pct: "66–72%" },
    { method: "Hand-Tied Weft (helt huvud)", cost: "£100–160", price: "£380–520", margin: "£280–360", pct: "71–72%" },
    { method: "Clip-In (set om 120g)", cost: "£25–45", price: "£80–150", margin: "£55–105", pct: "68–72%" },
    { method: "Hästsvans / Knutar", cost: "£18–35", price: "£60–120", margin: "£42–85", pct: "69–73%" },
  ],
  marginNote:
    "Obs: Trade-kostnader baseras på direktpriser från fabriken för 100% Remy-äkta hår. Tjänstepriserna återspeglar typiska salongspriser i London/Sydöstra/Midlands. Regional variation ±15–20%.",
  retailHeading: "Detaljhandel vs trade-inköp: Den dolda kostnaden av att köpa fel",
  retailIntro:
    "Här är ett konkret exempel med tape-in-förlängningar — den mest populära metoden i brittiska salonger just nu:",
  retailCard: {
    title: "Köp till detaljhandelspriser",
    items: [
      "Produktkostnad: £180–260/set (konsumentpriser)",
      "Tjänstepris: £350 (marknadsbegränsat)",
      "Bruttomarginal: £90–170",
    ],
    marginLine: "Marginal %: 26–49%",
    footer: "Du behåller ungefär £1 för varje £2–4 i kundutlägg.",
  },
  tradeCard: {
    title: "Köp till trade-priser",
    items: [
      "Produktkostnad: £80–130/set (fabriksdirekt trade)",
      "Tjänstepris: £350–450 (du sätter taket)",
      "Bruttomarginal: £220–370",
    ],
    marginLine: "Marginal %: 63–82%",
    footer: "Du behåller ungefär £2–3 för varje £1 i produktkostnad.",
  },
  sameClientLead: "Samma kund. Samma 90-minutersbokning. Samma resultat.",
  sameClientBody:
    "Den enda variabeln är var du köpte produkten. Det är ingen liten skillnad — under ett år med 4–6 förlängningsbokningar i veckan kan trade-inköp innebära ",
  sameClientStrong: "£15.000–£35.000 i extra bruttovinst",
  sameClientTail: " jämfört med att köpa till detaljhandelspriser.",
  pricingHeading: "Prissättningsstrategier som maximerar marginalen utan att förlora kunder",
  tieredHeading: "Nivåbaserad prissättning efter komplexitet",
  tieredIntro: "Inte varje installation av hela huvudet bör prissättas identiskt. Överväg nivåbaserad prissättning baserat på:",
  tieredItems: [
    { lead: "Längdnivåer:", text: '16", 18", 20", 22"+ vardera till olika prisnivåer (längre = mer produkt + mer arbete)' },
    { lead: "Färgkomplexitet:", text: "Helfärger (grundpris) → Balayage/Ombre (+15–25%) → Anpassad färgmatchning (+25–35%)" },
    { lead: "Hårdensitet:", text: "Lätt förstärkning (halvt huvud) vs full volym vs extra tjockt — tre distinkta prisklasser" },
    { lead: "Metodblandning:", text: "Tape-in grundpris, nano ring premium (+20–30% för precisionsarbete), fusion premium (+30–40%)" },
  ],
  bundleHeading: "Paketprissättning för högre kundvärde",
  bundleLead: "Istället för att sälja förlängningar som en fristående tjänst, paketera dem: ",
  bundleStrong: "”Förlängningar + Färguppfräschning + Föningspaket”",
  bundleTail:
    " till ett paketpris som känns som en deal för kunden men höjer ditt genomsnittliga ordervärde med 30–50%. Paket ökar också återbesöksfrekvensen — kunden bokar in underhåll, färgjusteringar och borttagning/återinstallation som en förutsägbar cykel.",
  maintenanceHeading: "Underhållets intäktsström",
  maintenanceLead:
    "Den verkliga vinsten med förlängningar ligger inte i första installationen — utan i de återkommande intäkterna. Tape-ins behöver flyttas upp var 6–8:e vecka. Nano-ringar behöver justeras var 4–6:e vecka. Varje underhållsbesök är en 30–45-minutersbokning som genererar £50–90 med minimal produktkostnad. En helhuvudskund genererar ensam ",
  maintenanceStrong: "£400–900/år i uppföljningsintäkter",
  maintenanceTail:
    ". Bygg ditt prismodell på kundens livstidsvärde, inte på utvinning från enstaka bokningar.",
  mistakesHeading: "5 prissättningsmisstag som dödar dina förlängningsmarginaler",
  fixLabel: "Lösning:",
  mistakes: [
    {
      mistake: "Underprissättning för att konkurrera med budgetsalonger",
      fix: "Kunder som bara shoppar på pris är inte dina ideala förlängningskunder. Positionera dig på kvalitet, resultat och varumärke — inte på att vara billigast.",
    },
    {
      mistake: "Endast prissätta på produktkostnad + fast arbetsavgift",
      fix: "Prissätt på levererat värde. En förlängningstransformation som förändrar en kunds utseende och självförtroende är värd mycket mer än material + timmar.",
    },
    {
      mistake: "Ge gratis underhåll på obestämd tid",
      fix: "Inkludera ett underhållstillfälle i det initiala paketpriset. Efterföljande besök är fakturerbara tjänster — det tränar kunderna rätt från dag ett.",
    },
    {
      mistake: "Inte höja priserna när din skicklighet förbättras",
      fix: "Dina första 50 installationer var övning. Dina nästa 50 är professionell kvalitet. Gå igenom dina priser kvartalsvis och höj dem när din portfolio stärks.",
    },
    {
      mistake: "Köpa produkter från flera källor utan trade-konto",
      fix: "Samla inköpen hos en trade-leverantör. Volymkonsistens bygger relationsfördelar (bättre priser, prioriterat lager, prover) som fragmenterade inköp aldrig ger.",
    },
  ],
  formulaHeading: "Snabb marginalformel (använd den idag)",
  formulaTitle: "Kalkylator för bruttomarginal",
  formulaSteps: [
    { label: "Steg 1:", text: "Produktkostnad (trade-pris) ÷ Tjänstepris = Kostnadsförhållande" },
    { label: "Steg 2:", text: "1 − Kostnadsförhållande = Bruttomarginal %" },
    { label: "Steg 3:", text: "Tjänstepris × Marginal % = £ Vinst per kund" },
  ],
  formulaExampleLabel: "Exempel:",
  formulaExamplePrefix: "(£100 trade-kostnad ÷ £400 tjänstepris) = 0,25 → 1 − 0,25 = ",
  formulaExampleStrong1: "75% marginal",
  formulaExampleMid: " → £400 × 0,75 = ",
  formulaExampleStrong2: "£300 vinst",
  formulaFooter: "För en fullständig interaktiv kalkylator med alla metoder förinladdade, prova vår ",
  formulaFooterLinkLabel: "Trade-priskalkylator →",
  formulaFooterHref: "/trade-price-calculator",
  ctaHeading: "Redo att förbättra dina förlängningsmarginaler?",
  ctaText:
    "Öppna ett gratis trade-konto hos D.S Hair Beauty och få fabriksdirekta priser på 100% Remy-äkta hårförlängningar. Ingen minimiorder. Expressleverans 3–5 dagar till Storbritannien. Se marginalförbättringen från dag ett.",
  ctaPrimaryLabel: "Öppna trade-konto →",
  ctaPrimaryHref: "/trade-wholesale",
  ctaSecondaryLabel: "Testa marginalkalkylatorn",
  ctaSecondaryHref: "/trade-price-calculator",
  faqHeading: "Vanliga frågor",
  faqs: [
    {
      q: "Vad är en typisk marginal för hårförlängning i en salong?",
      a: "För en salong som köper in via trade och tar betalt för både hår och applicering ligger produktmarginalerna vanligtvis på 50–80% och totala tjänstemarginaler på 60–82%. Samma kund hos ett detaljhandelsvarumärke lämnar bara 26–49%.",
    },
    {
      q: "Hur räknar jag ut förlängningsmarginalen?",
      a: "Marginal % = (kundpris − din trade-kostnad) ÷ kundpris. Ta betalt för håret och appliceringen separat. Exempel: tape-in-hår kostar dig £60 i trade, appliceringen £180, kunden betalar £420 totalt. Marginal = (420 − 240) ÷ 420 = 43% kombinerat, 75% på håret ensamt.",
    },
    {
      q: "Vilken metod har bäst marginal?",
      a: "Hand-tied weft och tape-in bär de starkaste kombinerade marginalerna tack vare täta återbeställningscykler och låg trade-kostnad. K-tip och nano ring är högre prissatta per applicering. Den ”bästa” metoden är den dina kunder faktiskt återbeställer.",
    },
    {
      q: "Förändrar grossistköp verkligen min marginal?",
      a: "Ja — grossist- (trade-) priser ligger 30–60% under detaljhandeln. På samma kund och samma tjänst kan ett byte från ett detaljhandelsvarumärke till en trade-leverantör utan minimikrav höja marginalen från höga 20-talet procent till höga 70-talet procent.",
    },
  ],
  relatedCard1: {
    eyebrow: "Relaterad artikel",
    title: "Private Label hårförlängningar: Bygg ditt eget varumärke",
    href: "/blog/private-label-hair-extensions-uk",
  },
  relatedCard2: {
    eyebrow: "Relaterad guide",
    title: "Grossist hårförlängningar UK: Trade-inköpsguide",
    href: "/blog/wholesale-hair-extensions-uk",
  },
  backLabel: "Tillbaka till bloggen",
}

const pl: HairExtensionProfitMarginGuideContent = {
  seoTitle: "Przewodnik po marżach z przedłużania włosów dla salonów UK: Realne liczby na 2026 | D.S Hair Beauty",
  seoDescription:
    "Ile zysku faktycznie generują przedłużania włosów dla salonów w UK? Realne zestawienia marż według metody (tape-in, K-tip, nano, weft), strategie cenowe i jak zakupy w cenach trade zwielokrotniają Twoje zyski. Zawiera formuły gotowe do kalkulatora.",
  heroBadge: "Rentowność salonu",
  heroTitle: "Marże z przedłużania włosów",
  heroSubtitle:
    "Realne liczby dla właścicieli salonów w UK. Ile faktycznie zarabia każda metoda przedłużania, dlaczego zakupy w cenach trade zmieniają wszystko i jak ustalać ceny dla maksymalnej rentowności bez odstraszania klientek.",
  heroPrimaryLabel: "Uzyskaj ceny trade",
  heroPrimaryHref: "/trade-wholesale",
  heroSecondaryLabel: "Skorzystaj z kalkulatora marży",
  heroSecondaryHref: "/trade-price-calculator",
  navHome: "Strona główna",
  navBlog: "Blog",
  navCurrent: "Marże z przedłużania włosów",
  authorAvatar: "CC",
  authorBy: "Autorka:",
  authorName: "Caro Chen",
  authorNameHref: "/about/caro-chen",
  authorTitle: "Założycielka i Dyrektor Handlowa (Trade) w D.S Hair & Beauty · 19 lat w produkcji przedłużeń włosów",
  whyHeading: "Dlaczego przedłużanie włosów to Twoja usługa o najwyższej marży",
  whyP1Lead: "Ze wszystkich usług, jakie oferuje typowy salon UK — strzyżenia, koloryzacje, przedmuchiwanie, zabiegi — ",
  whyP1Strong: "przedłużanie włosów konsekwentnie przynosi najwyższy bezwzględny zysk na godzinę wizyty",
  whyP1Tail:
    ". Korekta koloru może zająć 4 godziny i zużyć produkty za £40. Instalacja tape-in na całą głowę zajmuje 90 minut, zużywa produkty za £80–150 (w cenach trade) i generuje £300–550 przychodu.",
  whyP2:
    "Matematyka jest prosta: przedłużenia łączą wysoką postrzeganą wartość (klientki chętnie płacą ceny premium) z kontrolowanymi kosztami produktów (zwłaszcza przy zakupach w cenach trade). Różnica między tymi dwiema liczbami to Twoja marża — i jest ona szersza niż w przypadku niemal wszystkiego innego w menu usług.",
  whyP3Lead: "Ale oto, w czym błądzi większość właścicieli salonów: kupują przedłużenia w ",
  whyP3Strong: "cenach detalicznych lub zbliżonych do detalicznych",
  whyP3Tail:
    " i zastanawiają się, czemu marże są tak napięte. Różnica między zakupem w cenach konsumenckich a cenach trade to często różnica między marżą 60% a marżą 85% na tej samej usłudze. Pozwól, że pokażę Ci realne liczby.",
  heroImageSrc: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=1200&q=80",
  heroImageAlt: "Właścicielka salonu przegląda ceny i marże przedłużania włosów",
  marginHeading: "Zestawienie marż według metody przedłużania",
  marginIntroLead: "Liczby te odzwierciedlają ",
  marginIntroStrong: "typowe ceny salonów UK w 2026 roku",
  marginIntroTail:
    " przy produktach kupowanych w cenach trade. Rzeczywiste liczby różnią się w zależności od lokalizacji, klienteli i pozycjonowania — ale proporcje utrzymują się na większości rynków.",
  marginTableHead: ["Metoda", "Koszt trade", "Typowa cena usługi", "Marża brutto", "Marża %"],
  marginRows: [
    { method: "Tape-In (cała głowa, 40 szt.)", cost: "£80–130", price: "£320–450", margin: "£190–320", pct: "60–75%" },
    { method: "K-Tip / Fusion (cała głowa)", cost: "£120–180", price: "£400–600", margin: "£280–420", pct: "67–73%" },
    { method: "Nano Ring (cała głowa)", cost: "£140–200", price: "£450–650", margin: "£310–450", pct: "66–72%" },
    { method: "Hand-Tied Weft (cała głowa)", cost: "£100–160", price: "£380–520", margin: "£280–360", pct: "71–72%" },
    { method: "Clip-In (zestaw 120g)", cost: "£25–45", price: "£80–150", margin: "£55–105", pct: "68–72%" },
    { method: "Kucyk / Koki", cost: "£18–35", price: "£60–120", margin: "£42–85", pct: "69–73%" },
  ],
  marginNote:
    "Uwaga: koszty trade oparte na cenach bezpośrednich z fabryki za 100% ludzkie włosy Remy. Ceny usług odzwierciedlają typowe stawki salonów w Londynie/południowo-wschodniej Anglii/Midlands. Zróżnicowanie regionalne ±15–20%.",
  retailHeading: "Detal a zakupy trade: ukryty koszt złych zakupów",
  retailIntro:
    "Oto konkretny przykład z tape-in — obecnie najpopularniejszej metody w salonach UK:",
  retailCard: {
    title: "Zakup w cenach detalicznych",
    items: [
      "Koszt produktu: £180–260/zestaw (ceny konsumenckie)",
      "Cena usługi: £350 (ograniczona rynkiem)",
      "Marża brutto: £90–170",
    ],
    marginLine: "Marża %: 26–49%",
    footer: "Zatrzymujesz około £1 za każde £2–4 wydane przez klientkę.",
  },
  tradeCard: {
    title: "Zakup w cenach trade",
    items: [
      "Koszt produktu: £80–130/zestaw (bezpośrednio z fabryki, trade)",
      "Cena usługi: £350–450 (Ty ustalasz sufit)",
      "Marża brutto: £220–370",
    ],
    marginLine: "Marża %: 63–82%",
    footer: "Zatrzymujesz około £2–3 za każde £1 kosztu produktu.",
  },
  sameClientLead: "Ta sama klientka. Ta sama 90-minutowa wizyta. Ten sam efekt.",
  sameClientBody:
    "Jedyną zmienną jest miejsce zakupu produktu. To nie jest mała różnica — przy 4–6 wizytach przedłużania tygodniowo przez cały rok, zakupy w cenach trade mogą oznaczać ",
  sameClientStrong: "£15.000–£35.000 dodatkowego zysku brutto",
  sameClientTail: " w porównaniu z zakupami w cenach detalicznych.",
  pricingHeading: "Strategie cenowe, które maksymalizują marżę bez tracenia klientek",
  tieredHeading: "Cennik warstwowy według złożoności",
  tieredIntro: "Nie każda instalacja na całą głowę powinna być wyceniona identycznie. Rozważ cennik warstwowy oparty na:",
  tieredItems: [
    { lead: "Warstwy długości:", text: '16", 18", 20", 22"+ w różnych punktach cenowych (dłuższe = więcej produktu + więcej pracy)' },
    { lead: "Złożoność koloru:", text: "Kolory jednolite (cena bazowa) → Balayage/Ombre (+15–25%) → Indywidualne dopasowanie koloru (+25–35%)" },
    { lead: "Gęstość włosów:", text: "Lekkie wzmocnienie (pół głowy) vs pełna objętość vs extra grube — trzy odrębne przedziały cenowe" },
    { lead: "Mix metod:", text: "tape-in w cenie bazowej, nano ring premium (+20–30% za precyzyjną pracę), fusion premium (+30–40%)" },
  ],
  bundleHeading: "Ceny pakietowe dla wyższej wartości zamówienia",
  bundleLead: "Zamiast sprzedawać przedłużenia jako samodzielną usługę, pakietuj je: ",
  bundleStrong: "„Przedłużenia + Odświeżenie koloru + Pakiet Blow-Dry”",
  bundleTail:
    " w cenie pakietowej, która wydaje się klientce okazją, ale podnosi Twój średni koszyk o 30–50%. Pakiety zwiększają też częstotliwość wizyt — klientka umawia się na konserwację, poprawki koloru oraz usunięcie/zamianę jako przewidywalny cykl.",
  maintenanceHeading: "Strumień przychodów z konserwacji",
  maintenanceLead:
    "Prawdziwy zysk z przedłużeń to nie pierwsza instalacja — to przychody powtarzalne. Tape-ins wymagają przemieszczenia co 6–8 tygodni. Nano rings wymagają regulacji co 4–6 tygodni. Każda wizyta konserwacyjna to wizyta 30–45 minutowa generująca £50–90 przy minimalnym koszcie produktów. Jedna klientka z całym zestawem generuje sama ",
  maintenanceStrong: "£400–900/rok przychodów z kontynuacji",
  maintenanceTail:
    ". Zbuduj model cenowy wokół wartości życiowej klientki, a nie wyciągania zysku z pojedynczej wizyty.",
  mistakesHeading: "5 błędów cenowych, które zabijają Twoje marże na przedłużaniu",
  fixLabel: "Rozwiązanie:",
  mistakes: [
    {
      mistake: "Zaniżanie cen, by konkurować z budżetowymi salonami",
      fix: "Klientki szukające wyłącznie najniższej ceny nie są Twoimi idealnymi klientkami przedłużeń. Pozycjonuj się na jakości, efektach i marce — nie na byciu najtańszym.",
    },
    {
      mistake: "Wycenianie wyłącznie na kosztach produktu + stałej opłacie za pracę",
      fix: "Wyceniaj wartość dostarczaną. Transformacja przedłużeniami, która zmienia wygląd i pewność siebie klientki, jest warta znacznie więcej niż materiały + godziny.",
    },
    {
      mistake: "Bezpłatna konserwacja bezterminowo",
      fix: "Włącz jedną sesję konserwacji do ceny pierwszego pakietu. Kolejne wizyty to usługi płatne — to od pierwszego dnia właściwie szkoli klientki.",
    },
    {
      mistake: "Niepodnoszenie cen wraz z poprawą umiejętności",
      fix: "Twoje pierwsze 50 instalacji to była praktyka. Kolejne 50 to jakość profesjonalna. Przeglądaj ceny kwartalnie i podnoś je, gdy Twoje portfolio się umacnia.",
    },
    {
      mistake: "Kupowanie produktów z wielu źródeł bez konta trade",
      fix: "Skonsoliduj zakupy u jednego dostawcy trade. Spójność wolumenu buduje korzyści relacyjne (lepsze ceny, priorytetowy stan magazynowy, próbki), których nigdy nie dają rozdrobnione zakupy.",
    },
  ],
  formulaHeading: "Szybka formuła marży (użyj jej dziś)",
  formulaTitle: "Kalkulator marży brutto",
  formulaSteps: [
    { label: "Krok 1:", text: "Koszt produktu (cena trade) ÷ Cena usługi = Wskaźnik kosztów" },
    { label: "Krok 2:", text: "1 − Wskaźnik kosztów = Marża brutto %" },
    { label: "Krok 3:", text: "Cena usługi × Marża % = £ Zysk na klientkę" },
  ],
  formulaExampleLabel: "Przykład:",
  formulaExamplePrefix: "(£100 koszt trade ÷ £400 cena usługi) = 0,25 → 1 − 0,25 = ",
  formulaExampleStrong1: "marża 75%",
  formulaExampleMid: " → £400 × 0,75 = ",
  formulaExampleStrong2: "£300 zysku",
  formulaFooter: "Aby uzyskać pełny interaktywny kalkulator ze wszystkimi metodami, wypróbuj nasz ",
  formulaFooterLinkLabel: "Kalkulator cen trade →",
  formulaFooterHref: "/trade-price-calculator",
  ctaHeading: "Gotowy poprawić swoje marże na przedłużaniu?",
  ctaText:
    "Otwórz darmowe konto trade w D.S Hair Beauty i uzyskaj ceny bezpośrednio z fabryki na przedłużenia z 100% ludzkich włosów Remy. Bez minimalnego zamówienia. Ekspresowa dostawa 3–5 dni do Wielkiej Brytanii. Zobacz poprawę marży od pierwszego dnia.",
  ctaPrimaryLabel: "Otwórz konto trade →",
  ctaPrimaryHref: "/trade-wholesale",
  ctaSecondaryLabel: "Wypróbuj kalkulator marży",
  ctaSecondaryHref: "/trade-price-calculator",
  faqHeading: "Najczęściej zadawane pytania",
  faqs: [
    {
      q: "Jaka jest typowa marża na przedłużaniu włosów dla salonu?",
      a: "W salonie kupującym w cenach trade i pobierającym opłatę za włosy i aplikację, marże produktowe wynoszą zwykle 50–80%, a całkowite marże usługowe 60–82%. Ta sama klientka przy marce detalicznej zostawia tylko 26–49%.",
    },
    {
      q: "Jak obliczyć marżę na przedłużaniu?",
      a: "Marża % = (cena klientki − Twój koszt trade) ÷ cena klientki. Rozliczaj włosy i aplikację osobno. Przykład: włosy tape-in kosztują Cię £60 w trade, aplikacja £180, klientka płaci £420 łącznie. Marża = (420 − 240) ÷ 420 = 43% łącznie, a same włosy 75%.",
    },
    {
      q: "Która metoda ma najlepszą marżę?",
      a: "hand-tied weft i tape-in niosą najsilniejsze łączne marże dzięki częstym cyklom zamówień i niskiemu kosztowi trade. K-tip i nano ring są droższe w pojedynczej aplikacji. „Najlepsza” metoda to ta, którą Twoje klientki faktycznie zamawiają ponownie.",
    },
    {
      q: "Czy zakupy hurtowe naprawdę zmieniają moją marżę?",
      a: "Tak — ceny hurtowe (trade) są o 30–60% niższe od detalicznych. Przy tej samej klientce i usłudze przejście z marki detalicznej do dostawcy trade bez minimum może podnieść marżę z górnych 20% do górnych 70%.",
    },
  ],
  relatedCard1: {
    eyebrow: "Powiązany artykuł",
    title: "Przedłużenia private label: zbuduj własną markę",
    href: "/blog/private-label-hair-extensions-uk",
  },
  relatedCard2: {
    eyebrow: "Powiązany przewodnik",
    title: "Przedłużenia włosów hurtowo UK: przewodnik zakupów trade",
    href: "/blog/wholesale-hair-extensions-uk",
  },
  backLabel: "Wróć do bloga",
}

export const hairExtensionProfitMarginGuideContent: Record<Locale, HairExtensionProfitMarginGuideContent> = {
  en,
  de,
  fr,
  ar,
  sv,
  pl,
}
