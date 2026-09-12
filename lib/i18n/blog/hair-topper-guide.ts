import type { Locale } from "../config"

// Content module for the "Hair Topper Guide" blog post.
// All visible English copy is externalised here so the page can be rendered
// in any of the 6 locales with an identical layout. The English page
// (locale="en") renders exactly the same JSX it always did.

export interface HairTopperGuideContent {
  seoTitle: string
  seoDescription: string
  heroBadge: string
  heroTitleLines: string[]
  heroSubtitle: string
  ctaPrimaryLabel: string
  ctaPrimaryHref: string
  ctaSecondaryLabel: string
  ctaSecondaryHref: string
  stats: { num: string; label: string }[]
  breadcrumb: string
  metaCategory: string
  metaDate: string
  metaReadTime: string
  whatHeading: string
  whatParagraphs: string[]
  heroImageSrc: string
  heroImageAlt: string
  whoHeading: string
  whoCards: { iconKey: "users" | "trendingDown" | "sparkles" | "clock"; title: string; desc: string }[]
  typesHeading: string
  typesIntro: string
  compareTable: {
    headers: string[]
    rows: { base: string; bestFor: string; natural: string; comfort: string; highlight: boolean }[]
  }
  baseCards: { title: string; color: string; points: string[] }[]
  applyHeading: string
  applyIntro: string
  applySteps: { step: string; title: string; desc: string }[]
  tipsHeading: string
  tips: string[]
  vsHeading: string
  vsTable: {
    headers: string[]
    rows: { feature: string; topper: string; wig: string; ext: string; highlight: boolean }[]
  }
  casesHeading: string
  cases: { name: string; issue: string; solution: string; result: string; value: string }[]
  whyHeading: string
  whyCards: { icon: string; title: string; desc: string }[]
  ctaBoxTitle: string
  ctaBoxBody: string
  ctaBoxPrimaryLabel: string
  ctaBoxPrimaryHref: string
  ctaBoxSecondaryLabel: string
  ctaBoxSecondaryHref: string
  ctaBoxSecondaryWhatsapp: boolean
  faqHeading: string
  faqs: { q: string; a: string }[]
  backLabel: string
}

const en: HairTopperGuideContent = {
  seoTitle:
    "Hair Topper Guide: What Is It, Who Needs It & How to Apply | D.S HAIR & BEAUTY",
  seoDescription:
    "Complete guide to hair toppers for UK salons. Silk base vs mono top vs mesh base explained. Learn which clients need toppers, how to apply them, and how to source wholesale. From D.S Hair & Beauty — 19 years supplying UK salons.",
  heroBadge: "Product Guide 2025",
  heroTitleLines: ["Hair Toppers: The UK Salon's", "Most Underrated Revenue Stream"],
  heroSubtitle:
    "Everything salons need to know about hair toppers — from product types and client matching to application techniques and sourcing wholesale in the UK.",
  ctaPrimaryLabel: "Shop Hair Toppers",
  ctaPrimaryHref: "/collections/hair-toppers",
  ctaSecondaryLabel: "Trade Account",
  ctaSecondaryHref: "/salon-partners",
  stats: [
    { num: "40%", label: "of women notice hair thinning by age 40" },
    { num: "£250", label: "average client spend per topper" },
    { num: "2 min", label: "average application time" },
    { num: "6 mo", label: "average replacement cycle" },
  ],
  breadcrumb: "Back to Blog",
  metaCategory: "Product Guide",
  metaDate: "Updated March 2025",
  metaReadTime: "10 min read",
  whatHeading: "What Is a Hair Topper?",
  whatParagraphs: [
    "A hair topper (also called a hair piece, top piece, or partial wig) is a <strong>targeted hair extension product</strong> designed to cover thinning or balding areas at the crown, top, or sides of the head. Unlike a full wig that covers the entire scalp, a topper covers only the area that needs it — blending seamlessly with the client's natural hair.",
    "Think of it as a <em>“crown patch”</em> — a contoured piece of hair with a base material that clips onto existing hair. The result is instant volume, full coverage, and a completely natural look in under two minutes.",
  ],
  heroImageSrc: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1200&q=80",
  heroImageAlt: "Hair topper application by professional stylist",
  whoHeading: "Who Needs a Hair Topper?",
  whoCards: [
    { iconKey: "users", title: "Postpartum Hair Loss", desc: "Many new mothers experience significant hair shedding 3-6 months after childbirth. A topper offers an immediate, non-invasive solution." },
    { iconKey: "trendingDown", title: "Hormonal Thinning", desc: "Menopause, thyroid conditions, and hormonal changes cause gradual thinning — particularly at the crown and parting line." },
    { iconKey: "sparkles", title: "Genetic Hair Loss", desc: "Female pattern hair loss (androgenetic alopecia) affects millions of UK women. Toppers provide targeted coverage where it's needed most." },
    { iconKey: "clock", title: "Age-Related Volume Loss", desc: "Hair naturally becomes thinner with age. Toppers restore the appearance of thickness without surgery or medication." },
  ],
  typesHeading: "Types of Hair Topper Bases: Silk vs Mono vs Mesh",
  typesIntro:
    "The base material is the most important factor in choosing a topper. Each base type offers different benefits for different client needs.",
  compareTable: {
    headers: ["Base Type", "Best For", "Natural Look", "Comfort"],
    rows: [
      { base: "Silk Base (Lace) ⭐", bestFor: "Centre/side parting, highest-end clients", natural: "⭐⭐⭐⭐⭐ Most natural", comfort: "⭐⭐⭐⭐ Excellent", highlight: true },
      { base: "Mono Top", bestFor: "Breathable comfort, daily wear", natural: "⭐⭐⭐⭐ Very natural", comfort: "⭐⭐⭐⭐⭐ Most breathable", highlight: false },
      { base: "Mesh Base (Lace)", bestFor: "Full coverage, fastest blending", natural: "⭐⭐⭐ Natural", comfort: "⭐⭐⭐⭐ Very breathable", highlight: false },
    ],
  },
  baseCards: [
    { title: "Silk Base (Lace) ⭐ Most Popular", color: "bg-[#4A1942]", points: ["100% hand-tied strands on lace", "Scalp-like texture — undetectable parting", "Premium quality, highest price point", "Requires more care & maintenance"] },
    { title: "Mono Top — Breathable", color: "bg-[#7B3A6E]", points: ["Monofilament (mono) open-weave base", "Excellent ventilation — great for daily wear", "Natural-looking parting area", "Mid-range price point"] },
    { title: "Mesh Base — Lightweight", color: "bg-[#5B3A6E]", points: ["Open lace mesh construction", "Lightest weight of all bases", "Fastest blending with natural hair", "Best value option"] },
  ],
  applyHeading: "How to Apply a Hair Topper in 4 Steps",
  applyIntro:
    "Unlike extensions, toppers require <strong>no professional training</strong>. Any stylist can apply one in under 5 minutes.",
  applySteps: [
    { step: "1", title: "Section the Hair", desc: "Create a horizontal part at the crown, roughly where the client's hair begins to thin. Use butterfly clips to isolate the section." },
    { step: "2", title: "Open All Clips", desc: "Unfasten all pressure clips on the topper. Most toppers have 3-5 built-in clips for a secure, non-slip hold." },
    { step: "3", title: "Position & Snap", desc: "Place the topper directly over the thinning zone. Align the front edge just behind the hairline. Snap clips onto natural hair as close to the scalp as possible." },
    { step: "4", title: "Blend & Style", desc: "Use a tail comb to gently comb natural hair over the topper edges. Style as desired — curls, straight, or waves all work beautifully." },
  ],
  tipsHeading: "💡 Pro Tips for Salon Stylists",
  tips: [
    "Always match the topper colour to the client's mid-lengths and ends — not the roots (roots are often darker)",
    "Offer a free colour consultation before ordering — mixing 2 shades creates natural depth",
    "Silk base is best for clients who wear their hair in a centre part — the lace is virtually invisible",
    "Measure the coverage area before ordering — standard sizes are 6\" x 7\" or 7\" x 9\"",
    "Keep 2-3 popular shades in stock for same-day consultations",
    "Suggest a replacement schedule: Remy human hair toppers last 4-6 months with daily wear",
  ],
  vsHeading: "Hair Topper vs Wig vs Extensions: Which to Choose?",
  vsTable: {
    headers: ["Feature", "Hair Topper ⭐", "Full Wig", "Extensions"],
    rows: [
      { feature: "Coverage area", topper: "Crown & top only", wig: "Full head", ext: "Full head length", highlight: true },
      { feature: "Application", topper: "2 minutes — no training", wig: "15-30 min", ext: "2-4 hours pro" },
      { feature: "Damage risk", topper: "Very low", wig: "Very low", ext: "Medium-High" },
      { feature: "Comfort", topper: "Breathable", wig: "Can feel hot", ext: "Varies by method" },
      { feature: "Natural look", topper: "Very natural", wig: "Good", ext: "Very natural" },
      { feature: "Client skill needed", topper: "None — salon applies", wig: "Some practice", ext: "Professional only" },
      { feature: "Best for", topper: "Thinning crown", wig: "Complete hair loss", ext: "Length + volume" },
      { feature: "Salon margin", topper: "High (£150-300)", wig: "Standard", ext: "Varies" },
    ],
  },
  casesHeading: "Client Case Studies",
  cases: [
    { name: "Sarah, 38 — Manchester", issue: "Postpartum hair loss after second child", solution: "Silk Base Hair Topper #4 Medium Brown", result: "Applied at the salon in under 5 minutes. Sarah was in tears — she said she hadn't felt confident enough to tie her hair back in 8 months. She returned 3 times over the following year for reorders.", value: "Total revenue from one client: £900+" },
    { name: "Emma, 54 — Cheshire", issue: "Menopausal hair thinning at crown and parting", solution: "Mono Top Hair Topper, ash brown blend", result: "Emma had tried minoxidil with limited success. The topper gave her immediate confidence. She wears it daily and removes it at night — no commitment required.", value: "Returning client every 5 months: £200/order" },
    { name: "Chloe, 29 — Birmingham", issue: "Genetic hair thinning (her mother had the same)", solution: "Mesh Base Hair Topper + colour matching service", result: "First salon experience — had never had extensions. Was amazed at how natural it looked. Referred 3 friends in the following month.", value: "Direct referral value: 4 new clients" },
  ],
  whyHeading: "Why Every UK Salon Should Stock Hair Toppers",
  whyCards: [
    { icon: "🧲", title: "Massive Underserved Market", desc: "4 in 10 women experience noticeable hair thinning by age 40 — yet most salons don't offer solutions. Toppers fill that gap." },
    { icon: "💰", title: "High-Ticket Sales", desc: "One topper service (£150-300) often exceeds a full-day colour appointment in revenue — with only 5 minutes of application time." },
    { icon: "🔄", title: "Recurring Revenue", desc: "Clients return every 4-6 months for a replacement topper. Unlike extensions, topper clients don't need move-up appointments." },
    { icon: "⭐", title: "Differentiation", desc: "Most UK salons don't offer hair toppers. Being known as 'the topper salon' in your area = sustainable competitive advantage." },
    { icon: "😊", title: "Life-Changing Impact", desc: "Restoring a client's confidence in 5 minutes is one of the most emotionally rewarding things a stylist can do. Strong word-of-mouth follows." },
    { icon: "📦", title: "Zero Inventory Risk", desc: "Order only when a client commits. No stock holding, no waste. Supplier sends direct to client or salon." },
  ],
  ctaBoxTitle: "Ready to Add Hair Toppers to Your Salon?",
  ctaBoxBody:
    "D.S Hair & Beauty supplies silk base, mono top, and mesh base toppers to professional salons across the UK. Trade pricing available. Free colour swatch kit with your first order.",
  ctaBoxPrimaryLabel: "Browse Topper Collection",
  ctaBoxPrimaryHref: "/collections/hair-toppers",
  ctaBoxSecondaryLabel: "WhatsApp Us",
  ctaBoxSecondaryHref:
    "https://wa.me/8613516946001?text=Hi!%20I'm%20interested%20in%20hair%20topper%20trade%20pricing.",
  ctaBoxSecondaryWhatsapp: true,
  faqHeading: "Frequently Asked Questions",
  faqs: [
    { q: "How long does a hair topper last?", a: "With proper care, a Remy human hair topper lasts 4-6 months with daily wear, and up to 12 months with occasional use. The clips may need replacing over time — they are inexpensive and easy to swap." },
    { q: "Can clients wash and heat-style a hair topper?", a: "Yes — 100% Remy human hair toppers can be washed, conditioned, and heat-styled just like natural hair. We recommend sulfate-free products and heat protection spray. Avoid oil-based products near the base." },
    { q: "Do I need special training to apply a hair topper?", a: "No. Unlike tape-in or K-tip extensions, hair toppers require no professional qualification. Any stylist can apply one in 2-5 minutes after a brief demonstration. Clients can also apply them independently at home." },
    { q: "How do I colour match a hair topper?", a: "Match to the client's mid-lengths and ends (not the roots). For balayage clients, we recommend mixing two shades — a base colour and a highlight shade. We offer free colour swatch kits for trade customers." },
    { q: "Can hair toppers be cut and customised?", a: "Absolutely. The base can be trimmed to fit smaller coverage areas, and the hair can be cut, layered, or styled to match the client's existing hair perfectly. This is one of the biggest advantages over wigs." },
  ],
  backLabel: "More Articles",
}

export const hairTopperGuideContent: Record<Locale, HairTopperGuideContent> = {
  en,
  de: {
    seoTitle:
      "Hair Topper Ratgeber: Was ist es, wer braucht es & wie wendet man es an | D.S HAIR & BEAUTY",
    seoDescription:
      "Kompletter Ratgeber zu hair toppers für UK-Salons. Silk Base vs Mono Top vs Mesh Base erklärt. Erfahren Sie, welche Kunden Topper brauchen, wie man sie anwendet und wie man Großhandel bezieht. Von D.S Hair & Beauty — 19 Jahre Belieferung von UK-Salons.",
    heroBadge: "Produktratgeber 2025",
    heroTitleLines: ["Hair Toppers: Der am meisten", "unterschätzte Umsatzbringer im UK-Salon"],
    heroSubtitle:
      "Alles, was Salons über hair toppers wissen müssen — von Produkttypen und Kundenanpassung bis zu Anwendungstechniken und Großbezug im UK.",
    ctaPrimaryLabel: "Hair Toppers shoppen",
    ctaPrimaryHref: "/collections/hair-toppers",
    ctaSecondaryLabel: "Händlerkonto",
    ctaSecondaryHref: "/salon-partners",
    stats: [
      { num: "40%", label: "der Frauen bemerken Haarausdünnung mit 40" },
      { num: "£250", label: "durchschnittliche Kundinausgabe pro Topper" },
      { num: "2 min", label: "durchschnittliche Anwendungszeit" },
      { num: "6 Mo", label: "durchschnittlicher Austauschzyklus" },
    ],
    breadcrumb: "Zurück zum Blog",
    metaCategory: "Produktratgeber",
    metaDate: "Aktualisiert März 2025",
    metaReadTime: "10 Min. Lesezeit",
    whatHeading: "Was ist ein Hair Topper?",
    whatParagraphs: [
      "Ein hair topper (auch Haarstück, Oberkopfstück oder Teilperücke genannt) ist ein <strong>gezieltes Haarverlängerungsprodukt</strong>, das ausdünnende oder kahle Stellen am Oberkopf, Scheitel oder den Seiten abdeckt. Im Gegensatz zur Vollperücke, die die gesamte Kopfhaut bedeckt, verdeckt der Topper nur den betroffenen Bereich — und verschmilzt nahtlos mit dem natürlichen Haar der Kundin.",
      "Stellen Sie es sich wie einen <em>„Crown Patch“</em> vor — ein konturiertes Haarstück mit einem Basismaterial, das an das vorhandene Haar geklippt wird. Das Ergebnis: sofortiges Volumen, volle Abdeckung und ein völlig natürlicher Look in unter zwei Minuten.",
    ],
    heroImageSrc: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1200&q=80",
    heroImageAlt: "Hair Topper Anwendung durch professionellen Stylisten",
    whoHeading: "Wer braucht einen Hair Topper?",
    whoCards: [
      { iconKey: "users", title: "Postpartaler Haarausfall", desc: "Viele frischgebackene Mütter verlieren 3-6 Monate nach der Geburt merklich Haar. Ein Topper bietet eine sofortige, nicht-invasive Lösung." },
      { iconKey: "trendingDown", title: "Hormonell bedingtes Ausdünnen", desc: "Menopause, Schilddrüsenbeschwerden und hormonelle Veränderungen führen zu allmählichem Ausdünnen — vor allem am Oberkopf und Scheitel." },
      { iconKey: "sparkles", title: "Genetischer Haarausfall", desc: "Weiblicher Haarausfall (androgenetische Alopezie) betrifft Millionen von UK-Frauen. Topper bieten gezielte Abdeckung genau dort, wo sie am nötigsten ist." },
      { iconKey: "clock", title: "Altersbedingter Volumenverlust", desc: "Haare werden mit dem Alter natürlich dünner. Topper stellen das Erscheinungsbild von Fülle ohne Operation oder Medikamente wieder her." },
    ],
    typesHeading: "Arten von Hair Topper Basen: Silk vs Mono vs Mesh",
    typesIntro:
      "Das Basismaterial ist der wichtigste Faktor bei der Wahl eines Toppers. Jeder Basistyp bietet verschiedene Vorteile für unterschiedliche Kundenbedürfnisse.",
    compareTable: {
      headers: ["Basistyp", "Am besten für", "Natürlicher Look", "Komfort"],
      rows: [
        { base: "Silk Base (Lace) ⭐", bestFor: "Mittel-/Seitenscheitel, anspruchsvollste Kundinnen", natural: "⭐⭐⭐⭐⭐ Am natürlichsten", comfort: "⭐⭐⭐⭐ Hervorragend", highlight: true },
        { base: "Mono Top", bestFor: "Atmungsaktiver Komfort, tägliches Tragen", natural: "⭐⭐⭐⭐ Sehr natürlich", comfort: "⭐⭐⭐⭐⭐ Am atmungsaktivsten", highlight: false },
        { base: "Mesh Base (Lace)", bestFor: "Volle Abdeckung, schnellstes Mischen", natural: "⭐⭐⭐ Natürlich", comfort: "⭐⭐⭐⭐ Sehr atmungsaktiv", highlight: false },
      ],
    },
    baseCards: [
      { title: "Silk Base (Lace) ⭐ Am beliebtesten", color: "bg-[#4A1942]", points: ["100% von Hand geknüpfte Strähnen auf Spitze", "Haaransatz-ähnliche Textur — unsichtbarer Scheitel", "Premiumqualität, höchster Preispunkt", "Benötigt mehr Pflege & Wartung"] },
      { title: "Mono Top — Atmungsaktiv", color: "bg-[#7B3A6E]", points: ["Monofilament (Mono) offenes Gewebe", "Hervorragende Belüftung — ideal fürs tägliche Tragen", "Natürlich wirkender Scheitelbereich", "Preis in der Mittelklasse"] },
      { title: "Mesh Base — Leichtgewichtig", color: "bg-[#5B3A6E]", points: ["Offene Spitzen-Mesh-Konstruktion", "Leichtestes Gewicht aller Basen", "Schnellstes Mischen mit Naturhaar", "Beste Preis-Leistung"] },
    ],
    applyHeading: "So wenden Sie einen Hair Topper in 4 Schritten an",
    applyIntro:
      "Anders als Verlängerungen benötigen Topper <strong>keine professionelle Schulung</strong>. Jede Stylistin kann einen in unter 5 Minuten anwenden.",
    applySteps: [
      { step: "1", title: "Haar abteilen", desc: "Erstellen Sie einen waagerechten Scheitel am Oberkopf, etwa dort, wo das Haar der Kundin auszudünnen beginnt. Isolieren Sie den Bereich mit Schmetterlingsklammern." },
      { step: "2", title: "Alle Clips öffnen", desc: "Öffnen Sie alle Druckclips am Topper. Die meisten Topper haben 3-5 integrierte Clips für sicheren, rutschfesten Halt." },
      { step: "3", title: "Positionieren & einrasten", desc: "Platzieren Sie den Topper direkt über der ausdünnenden Zone. Richten Sie die Vorderkante knapp hinter dem Haaransatz aus. Rasten Sie die Clips so nah wie möglich an der Kopfhaut in das Naturhaar ein." },
      { step: "4", title: "Mischen & stylen", desc: "Kämmen Sie das Naturhaar mit einem Spitzkamm sanft über die Topper-Ränder. Stylen Sie nach Wunsch — Locken, glatt oder Wellen sehen allesamt wunderschön aus." },
    ],
    tipsHeading: "💡 Pro-Tipps für Salon-Stylisten",
    tips: [
      "Gleichen Sie die Topper-Farbe immer an die mittleren Längen und Spitzen der Kundin an — nicht an die Ansätze (Ansätze sind oft dunkler)",
      "Bieten Sie vor der Bestellung eine kostenlose Farbberatung an — das Mischen von 2 Tönen erzeugt natürliche Tiefe",
      "Silk Base eignet sich am besten für Kundinnen, die ihre Haare mittig scheiteln — die Spitze ist praktisch unsichtbar",
      "Messen Sie die Abdeckungsfläche vor der Bestellung — Standardgrößen sind 6\" x 7\" oder 7\" x 9\"",
      "Halten Sie 2-3 beliebte Töne für Beratungen am selben Tag auf Lager",
      "Empfehlen Sie einen Austauschplan: Remy Echthaar-Topper halten bei täglichem Tragen 4-6 Monate",
    ],
    vsHeading: "Hair Topper vs Perücke vs Verlängerungen: Was wählen?",
    vsTable: {
      headers: ["Merkmal", "Hair Topper ⭐", "Vollperücke", "Verlängerungen"],
      rows: [
        { feature: "Abdeckungsbereich", topper: "Nur Oberkopf & Scheitel", wig: "Kompletter Kopf", ext: "Komplette Haarlänge", highlight: true },
        { feature: "Anwendung", topper: "2 Minuten — keine Schulung", wig: "15-30 Min", ext: "2-4 Std. Profi" },
        { feature: "Schadensrisiko", topper: "Sehr gering", wig: "Sehr gering", ext: "Mittel-Hoch" },
        { feature: "Komfort", topper: "Atmungsaktiv", wig: "Kann heiß wirken", ext: "Variiert je Methode" },
        { feature: "Natürlicher Look", topper: "Sehr natürlich", wig: "Gut", ext: "Sehr natürlich" },
        { feature: "Kundin-Können nötig", topper: "Keins — Salon wendet an", wig: "Etwas Übung", ext: "Nur Profis" },
        { feature: "Am besten für", topper: "Ausdünnender Oberkopf", wig: "Vollständiger Haarverlust", ext: "Länge + Volumen" },
        { feature: "Salon-Marge", topper: "Hoch (£150-300)", wig: "Standard", ext: "Variiert" },
      ],
    },
    casesHeading: "Kundenfallstudien",
    cases: [
      { name: "Sarah, 38 — Manchester", issue: "Postpartaler Haarausfall nach dem zweiten Kind", solution: "Silk Base Hair Topper #4 Medium Brown", result: "Im Salon in unter 5 Minuten angewendet. Sarah weinte — sie sagte, sie habe sich seit 8 Monaten nicht mehr getraut, ihre Haare zu einem Zopf zu binden. Sie kam im folgenden Jahr 3 Mal für Nachbestellungen zurück.", value: "Gesamtumsatz einer Kundin: £900+" },
      { name: "Emma, 54 — Cheshire", issue: "Menopausales Haarausdünnen am Oberkopf und Scheitel", solution: "Mono Top Hair Topper, aschbraune Mischung", result: "Emma hatte Minoxidil mit begrenztem Erfolg ausprobiert. Der Topper gab ihr sofortiges Selbstvertrauen. Sie trägt ihn täglich und entfernt ihn nachts — keine Bindung nötig.", value: "Stammkundin alle 5 Monate: £200/Bestellung" },
      { name: "Chloe, 29 — Birmingham", issue: "Genetisches Haarausdünnen (ihre Mutter hatte es ebenfalls)", solution: "Mesh Base Hair Topper + Farbanpassungsservice", result: "Erste Salon-Erfahrung — hatte noch nie Verlängerungen getragen. War erstaunt, wie natürlich es aussah. Empfahl uns im folgenden Monat 3 Freundinnen.", value: "Direkter Empfehlungswert: 4 neue Kundinnen" },
    ],
    whyHeading: "Warum jeder UK-Salon Hair Topper führen sollte",
    whyCards: [
      { icon: "🧲", title: "Riesiger, unversorgter Markt", desc: "4 von 10 Frauen bemerken mit 40 sichtbares Haarausdünnen — doch die meisten Salons bieten keine Lösung. Topper schließen diese Lücke." },
      { icon: "💰", title: "Hochpreisiger Verkauf", desc: "Ein Topper-Service (£150-300) übertrifft oft den Umsatz eines ganztägigen Farbtermins — bei nur 5 Minuten Anwendungszeit." },
      { icon: "🔄", title: "Wiederkehrende Einnahmen", desc: "Kundinnen kommen alle 4-6 Monate für einen Ersatz-Topper zurück. Im Gegensatz zu Verlängerungen brauchen Topper-Kundinnen keine Nachsetz-Termine." },
      { icon: "⭐", title: "Differenzierung", desc: "Die meisten UK-Salons bieten hair toppers nicht an. Als „Topper-Salon“ in Ihrer Gegend bekannt zu sein = nachhaltiger Wettbewerbsvorteil." },
      { icon: "😊", title: "Lebensverändernde Wirkung", desc: "Das Selbstvertrauen einer Kundin in 5 Minuten wiederherzustellen, gehört zum Emotionalsten, was eine Stylistin tun kann. Starke Mund-zu-Mund-Empfehlungen folgen." },
      { icon: "📦", title: "Null Lagerbestandsrisiko", desc: "Bestellen Sie erst, wenn sich eine Kundin festlegt. Kein Lager, kein Abfall. Lieferant sendet direkt an Kundin oder Salon." },
    ],
    ctaBoxTitle: "Bereit, Ihrem Salon Hair Topper hinzuzufügen?",
    ctaBoxBody:
      "D.S Hair & Beauty beliefert professionelle Salons im gesamten UK mit Silk Base-, Mono Top- und Mesh Base-Toppern. Händlerpreise verfügbar. Kostenloses Farbmuster-Set bei Ihrer ersten Bestellung.",
    ctaBoxPrimaryLabel: "Topper-Kollektion ansehen",
    ctaBoxPrimaryHref: "/collections/hair-toppers",
    ctaBoxSecondaryLabel: "WhatsApp Us",
    ctaBoxSecondaryHref:
      "https://wa.me/8613516946001?text=Hi!%20I'm%20interested%20in%20hair%20topper%20trade%20pricing.",
    ctaBoxSecondaryWhatsapp: true,
    faqHeading: "Häufig gestellte Fragen",
    faqs: [
      { q: "Wie lange hält ein hair topper?", a: "Bei richtiger Pflege hält ein Remy Echthaar-Topper 4-6 Monate bei täglichem Tragen und bis zu 12 Monate bei gelegentlicher Nutzung. Die Clips müssen mit der Zeit möglicherweise ausgetauscht werden — sie sind günstig und leicht zu wechseln." },
      { q: "Können Kundinnen einen hair topper waschen und hitzestylen?", a: "Ja — 100% Remy Echthaar-Topper können wie Naturhaar gewaschen, konditioniert und hitzestylt werden. Wir empfehlen sulfatfreie Produkte und Hitzeschutzspray. Meiden Sie ölhaltige Produkte in Basisnähe." },
      { q: "Brauche ich eine Spezialschulung, um einen hair topper anzuwenden?", a: "Nein. Im Gegensatz zu tape-in oder K-tip Verlängerungen benötigen hair toppers keinen professionellen Qualifikationsnachweis. Jede Stylistin kann einen nach kurzer Demonstration in 2-5 Minuten anwenden. Kundinnen können sie auch selbstständig zu Hause anwenden." },
      { q: "Wie gleiche ich die Farbe eines hair toppers an?", a: "Gleichen Sie an die mittleren Längen und Spitzen der Kundin an (nicht an die Ansätze). Für Balayage-Kundinnen empfehlen wir das Mischen von zwei Tönen — einer Basis- und einem Highlight-Ton. Wir bieten Handelskundinnen kostenlose Farbmuster-Sets." },
      { q: "Können hair toppers geschnitten und individualisiert werden?", a: "Absolut. Die Basis kann auf kleinere Abdeckungsflächen zugeschnitten werden, und das Haar kann geschnitten, geschichtet oder gestylt werden, um perfekt zum vorhandenen Haar der Kundin zu passen. Das ist einer der größten Vorteile gegenüber Perücken." },
    ],
    backLabel: "Weitere Artikel",
  },
  fr: {
    seoTitle:
      "Guide des Hair Toppers : Qu'est-ce que c'est, qui en a besoin & comment les poser | D.S HAIR & BEAUTY",
    seoDescription:
      "Guide complet des hair toppers pour les salons UK. Silk base vs mono top vs mesh base expliqués. Découvrez quelles clientes ont besoin de toppers, comment les poser et comment s'approvisionner en gros. De D.S Hair & Beauty — 19 ans de fourniture aux salons UK.",
    heroBadge: "Guide Produit 2025",
    heroTitleLines: ["Hair Toppers : le flux de", "revenus le plus sous-estimé du salon UK"],
    heroSubtitle:
      "Tout ce que les salons doivent savoir sur les hair toppers — des types de produits et de l'appariement client à la technique de pose et à l'approvisionnement en gros au UK.",
    ctaPrimaryLabel: "Boutique Hair Toppers",
    ctaPrimaryHref: "/collections/hair-toppers",
    ctaSecondaryLabel: "Compte Professionnel",
    ctaSecondaryHref: "/salon-partners",
    stats: [
      { num: "40%", label: "des femmes constatent un éclaircissement à 40 ans" },
      { num: "£250", label: "dépense moyenne par client pour un topper" },
      { num: "2 min", label: "temps de pose moyen" },
      { num: "6 mois", label: "cycle de remplacement moyen" },
    ],
    breadcrumb: "Retour au Blog",
    metaCategory: "Guide Produit",
    metaDate: "Mis à jour mars 2025",
    metaReadTime: "10 min de lecture",
    whatHeading: "Qu'est-ce qu'un Hair Topper ?",
    whatParagraphs: [
      "Un hair topper (aussi appelé pièce de cheveux, dessus de tête ou demi-perruque) est un <strong>produit de extension ciblé</strong> conçu pour couvrir les zones clairsemées ou chauves au sommet, au dessus de la tête ou sur les côtés. Contrairement à la perruque complète qui recouvre tout le cuir chevelu, le topper ne couvre que la zone concernée — en se fondant parfaitement dans les cheveux naturels de la cliente.",
      "Imaginez-le comme un <em>« patch de couronne »</em> — une pièce de cheveux galbée munie d'un matériau de base qui se clippe sur les cheveux existants. Le résultat : volume instantané, couverture totale et un look entièrement naturel en moins de deux minutes.",
    ],
    heroImageSrc: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1200&q=80",
    heroImageAlt: "Pose d'un hair topper par un styliste professionnel",
    whoHeading: "Qui a besoin d'un Hair Topper ?",
    whoCards: [
      { iconKey: "users", title: "Chute de cheveux post-partum", desc: "Beaucoup de jeunes mamans perdent significativement leurs cheveux 3-6 mois après l'accouchement. Un topper offre une solution immédiate et non invasive." },
      { iconKey: "trendingDown", title: "Éclaircissement hormonal", desc: "Ménopause, troubles thyroïdiens et changements hormonaux provoquent un éclaircissement progressif — particulièrement au sommet et à la raie." },
      { iconKey: "sparkles", title: "Chute génétique", desc: "La calvitie féminine (alopécie androgénétique) touche des millions de femmes au UK. Les toppers offrent une couverture ciblée là où elle est la plus nécessaire." },
      { iconKey: "clock", title: "Perte de volume liée à l'âge", desc: "Les cheveux s'affinant naturellement avec l'âge. Les toppers restaurent l'apparence de densité sans chirurgie ni médicament." },
    ],
    typesHeading: "Types de bases de Hair Topper : Silk vs Mono vs Mesh",
    typesIntro:
      "Le matériau de base est le facteur le plus important dans le choix d'un topper. Chaque type de base offre des avantages différents selon les besoins de la cliente.",
    compareTable: {
      headers: ["Type de base", "Idéal pour", "Look naturel", "Confort"],
      rows: [
        { base: "Silk Base (Lace) ⭐", bestFor: "Raie au centre/à côté, clientes haut de gamme", natural: "⭐⭐⭐⭐⭐ Très naturel", comfort: "⭐⭐⭐⭐ Excellent", highlight: true },
        { base: "Mono Top", bestFor: "Confort respirant, port quotidien", natural: "⭐⭐⭐⭐ Très naturel", comfort: "⭐⭐⭐⭐⭐ Très respirant", highlight: false },
        { base: "Mesh Base (Lace)", bestFor: "Couverture totale, mélange le plus rapide", natural: "⭐⭐⭐ Naturel", comfort: "⭐⭐⭐⭐ Très respirant", highlight: false },
      ],
    },
    baseCards: [
      { title: "Silk Base (Lace) ⭐ La plus populaire", color: "bg-[#4A1942]", points: ["100% de mèches nouées à la main sur dentelle", "Texture semblable au cuir chevelu — raie invisible", "Qualité premium, prix le plus élevé", "Nécessite plus de soin & d'entretien"] },
      { title: "Mono Top — Respirant", color: "bg-[#7B3A6E]", points: ["Base en monofilament (mono) à tissage ouvert", "Excellente ventilation — idéal pour le port quotidien", "Zone de raie au look naturel", "Prix de gamme moyenne"] },
      { title: "Mesh Base — Léger", color: "bg-[#5B3A6E]", points: ["Construction en mesh de dentelle ouvert", "Poids le plus léger de toutes les bases", "Mélange le plus rapide avec les cheveux naturels", "Meilleur rapport qualité-prix"] },
    ],
    applyHeading: "Comment poser un Hair Topper en 4 étapes",
    applyIntro:
      "Contrairement aux extensions, les toppers ne nécessitent <strong>aucune formation professionnelle</strong>. Toute styliste peut en poser un en moins de 5 minutes.",
    applySteps: [
      { step: "1", title: "Sectionner les cheveux", desc: "Créez une raie horizontale au sommet, à peu près là où les cheveux de la cliente commencent à s'éclaircir. Isolez la section avec des pinces papillon." },
      { step: "2", title: "Ouvrir tous les clips", desc: "Détachez tous les clips à pression du topper. La plupart des toppers ont 3-5 clips intégrés pour une tenue sûre et anti-dérapante." },
      { step: "3", title: "Positionner & clipser", desc: "Placez le topper directement sur la zone clairsemée. Alignez le bord avant juste derrière la ligne de cheveux. Clipser sur les cheveux naturels le plus près possible du cuir chevelu." },
      { step: "4", title: "Fondre & coiffer", desc: "Utilisez un peigne fin pour peigner doucement les cheveux naturels sur les bords du topper. Coiffez comme désiré — boucles, lissage ou ondulations sont magnifiques." },
    ],
    tipsHeading: "💡 Conseils Pro pour les stylistes de salon",
    tips: [
      "Assortissez toujours la couleur du topper aux longueurs moyennes et pointes de la cliente — pas aux racines (les racines sont souvent plus foncées)",
      "Proposez une consultation couleur gratuite avant la commande — mélanger 2 teintes crée une profondeur naturelle",
      "La silk base convient mieux aux clientes qui portent une raie au centre — la dentelle est virtuellement invisible",
      "Mesurez la zone de couverture avant de commander — les tailles standard sont 6\" x 7\" ou 7\" x 9\"",
      "Gardez 2-3 teintes populaires en stock pour des consultations le jour même",
      "Suggérez un calendrier de remplacement : les toppers en Remy cheveux naturels tiennent 4-6 mois avec un port quotidien",
    ],
    vsHeading: "Hair Topper vs Perruque vs Extensions : que choisir ?",
    vsTable: {
      headers: ["Critère", "Hair Topper ⭐", "Perruque complète", "Extensions"],
      rows: [
        { feature: "Zone de couverture", topper: "Sommet & dessus seulement", wig: "Tête entière", ext: "Longueur complète", highlight: true },
        { feature: "Pose", topper: "2 minutes — aucune formation", wig: "15-30 min", ext: "2-4 h pro" },
        { feature: "Risque de dommage", topper: "Très faible", wig: "Très faible", ext: "Moyen-Élevé" },
        { feature: "Confort", topper: "Respirant", wig: "Peut être chaud", ext: "Varie selon méthode" },
        { feature: "Look naturel", topper: "Très naturel", wig: "Bon", ext: "Très naturel" },
        { feature: "Compétence cliente requise", topper: "Aucune — posé par le salon", wig: "Un peu d'entraînement", ext: "Professionnel uniquement" },
        { feature: "Idéal pour", topper: "Sommet clairsemé", wig: "Calvitie totale", ext: "Longueur + volume" },
        { feature: "Marge salon", topper: "Élevée (£150-300)", wig: "Standard", ext: "Varie" },
      ],
    },
    casesHeading: "Études de cas clientes",
    cases: [
      { name: "Sarah, 38 — Manchester", issue: "Chute de cheveux post-partum après le second enfant", solution: "Silk Base Hair Topper #4 Medium Brown", result: "Posé au salon en moins de 5 minutes. Sarah avait les larmes aux yeux — elle a dit qu'elle n'avait pas osé attacher ses cheveux depuis 8 mois. Elle est revenue 3 fois dans l'année pour des réapprovisionnements.", value: "Revenu total d'une cliente : £900+" },
      { name: "Emma, 54 — Cheshire", issue: "Éclaircissement hormonal au sommet et à la raie", solution: "Mono Top Hair Topper, mélange châtain cendré", result: "Emma avait essayé le minoxidil avec un succès limité. Le topper lui a redonné une confiance immédiate. Elle le porte tous les jours et l'enlève le soir — aucun engagement requis.", value: "Cliente fidèle tous les 5 mois : £200/commande" },
      { name: "Chloe, 29 — Birmingham", issue: "Éclaircissement génétique (sa mère aussi)", solution: "Mesh Base Hair Topper + service d'appariement couleur", result: "Première expérience en salon — n'avait jamais porté d'extensions. Était étonnée de la naturalité du rendu. A recommandé 3 amies le mois suivant.", value: "Valeur de parrainage direct : 4 nouvelles clientes" },
    ],
    whyHeading: "Pourquoi chaque salon au UK devrait stocker des Hair Toppers",
    whyCards: [
      { icon: "🧲", title: "Marché immense et sous-desservi", desc: "4 femmes sur 10 constatent un éclaircissement visible à 40 ans — pourtant la plupart des salons n'offrent aucune solution. Les toppers comblent cette lacune." },
      { icon: "💰", title: "Ventes à panier élevé", desc: "Un service topper (£150-300) dépasse souvent le revenu d'une journée de coloration — avec seulement 5 minutes de pose." },
      { icon: "🔄", title: "Revenus récurrents", desc: "Les clientes reviennent tous les 4-6 mois pour un topper de remplacement. Contrairement aux extensions, les clientes topper n'ont pas besoin de rendez-vous de retouche." },
      { icon: "⭐", title: "Différenciation", desc: "La plupart des salons UK n'offrent pas de hair toppers. Être connu comme « le salon topper » de votre zone = avantage concurrentiel durable." },
      { icon: "😊", title: "Impact transformateur", desc: "Redonner confiance à une cliente en 5 minutes est l'une des choses les plus gratifiantes pour une styliste. Un bouche-à-oreille puissant s'ensuit." },
      { icon: "📦", title: "Zéro risque de stock", desc: "Commandez seulement quand une cliente s'engage. Pas de stock, pas de gaspillage. Le fournisseur expédie directement à la cliente ou au salon." },
    ],
    ctaBoxTitle: "Prêt à ajouter des Hair Toppers à votre salon ?",
    ctaBoxBody:
      "D.S Hair & Beauty fournit des toppers à base silk, mono top et mesh aux salons professionnels de tout le UK. Tarifs de gros disponibles. Kit gratuit d'échantillons couleur dès votre première commande.",
    ctaBoxPrimaryLabel: "Parcourir la collection Topper",
    ctaBoxPrimaryHref: "/collections/hair-toppers",
    ctaBoxSecondaryLabel: "WhatsApp Us",
    ctaBoxSecondaryHref:
      "https://wa.me/8613516946001?text=Hi!%20I'm%20interested%20in%20hair%20topper%20trade%20pricing.",
    ctaBoxSecondaryWhatsapp: true,
    faqHeading: "Questions Fréquemment Posées",
    faqs: [
      { q: "Combien de temps dure un hair topper ?", a: "Avec les bons soins, un topper en Remy cheveux naturels tient 4-6 mois avec un port quotidien, et jusqu'à 12 mois avec un usage occasionnel. Les clips peuvent devoir être remplacés avec le temps — ils sont peu coûteux et faciles à changer." },
      { q: "Les clientes peuvent-elles laver et coiffer au fer un hair topper ?", a: "Oui — les toppers 100% Remy cheveux naturels peuvent être lavés, conditionnés et coiffés à la chaleur comme des cheveux naturels. Nous recommandons des produits sans sulfate et un spray protecteur. Évitez les produits à base d'huile près de la base." },
      { q: "Faut-il une formation spéciale pour poser un hair topper ?", a: "Non. Contrairement aux extensions tape-in ou K-tip, les hair toppers ne nécessitent aucune qualification professionnelle. Toute styliste peut en poser un en 2-5 minutes après une brève démonstration. Les clientes peuvent aussi les poser elles-mêmes à la maison." },
      { q: "Comment assortir la couleur d'un hair topper ?", a: "Assortez aux longueurs moyennes et pointes de la cliente (pas aux racines). Pour les clientes balayage, nous recommandons de mélanger deux teintes — une base et une teinte highlight. Nous offrons des kits d'échantillons couleur gratuits aux clients professionnels." },
      { q: "Les hair toppers peuvent-ils être coupés et personnalisés ?", a: "Absolut. La base peut être taillée pour des zones de couverture plus petites, et les cheveux peuvent être coupés, dégradés ou coiffés pour s'adapter parfaitement aux cheveux existants de la cliente. C'est l'un des plus grands avantages sur les perruques." },
    ],
    backLabel: "Plus d'articles",
  },
  ar: {
    seoTitle:
      "دليل الـ Hair Toppers: ما هو، من يحتاجه وطريقة تطبيقه | D.S HAIR & BEAUTY",
    seoDescription:
      "دليل شامل للـ hair toppers لصالونات UK. شرح أساس السلك الحريري مقابل المونو مقابل الشبكي. تعرّف على العملاء الذين يحتاجون التوبِر، طريقة تطبيقه، وكيفية الشراء بالجملة. من D.S Hair & Beauty — 19 عاماً في توريد صالونات UK.",
    heroBadge: "دليل المنتج 2025",
    heroTitleLines: ["Hair Toppers: أهم", "مصدر إيراد مهمَل في صالون UK"],
    heroSubtitle:
      "كل ما يحتاجه الصالونات لمعرفته عن الـ hair toppers — من أنواع المنتج ومطابقة العميلة إلى تقنيات التطبيق والشراء بالجملة في UK.",
    ctaPrimaryLabel: "تسوق الـ Hair Toppers",
    ctaPrimaryHref: "/collections/hair-toppers",
    ctaSecondaryLabel: "حساب الجملة",
    ctaSecondaryHref: "/salon-partners",
    stats: [
      { num: "40%", label: "من النساء يلاحظن ترقق الشعر في سن الأربعين" },
      { num: "£250", label: "متوسط إنفاق العميلة على التوبِر" },
      { num: "2 min", label: "متوسط وقت التطبيق" },
      { num: "6 mo", label: "متوسط دورة الاستبدال" },
    ],
    breadcrumb: "العودة إلى المدونة",
    metaCategory: "دليل المنتج",
    metaDate: "تم التحديث مارس 2025",
    metaReadTime: "10 دقائق قراءة",
    whatHeading: "ما هو الـ Hair Topper؟",
    whatParagraphs: [
      "الـ hair topper (يُسمى أيضاً قطعة شعر، أو قطعة علوية، أو باروكة جزئية) هو <strong>منتج إكسسوار شعر موجّه</strong> مصمم لتغطية مناطق الشعر المتناثر أو الصلع عند قمة الرأس أو أعلى الرأس أو الجانبين. على عكس الباروكة الكاملة التي تغطي فروة الرأس بالكامل، يغطي التوبِر المنطقة التي تحتاجها فقط — ويمتزج بسلاسة مع شعر العميلة الطبيعي.",
      "تخيّليه كلوح تاج (crown patch) — قطعة شعر مُصمّمة ذات مادة أساسية تُشبك على الشعر الموجود. النتيجة: حجم فوري، تغطية كاملة، ومظهر طبيعي تماماً في أقل من دقيقتين.",
    ],
    heroImageSrc: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1200&q=80",
    heroImageAlt: "تطبيق الـ hair topper بواسطة مصفف محترف",
    whoHeading: "من يحتاج إلى Hair Topper؟",
    whoCards: [
      { iconKey: "users", title: "تساقط الشعر بعد الولادة", desc: "تفقد العديد من الأمهات الجدد قدراً كبيراً من الشعر بعد 3-6 أشهر من الولادة. يوفر التوبِر حلاً فورياً وغير جراحي." },
      { iconKey: "trendingDown", title: "الترقق الهرموني", desc: "تؤدي سن اليأس والأمراض الدرقية والتغيرات الهرمونية إلى ترقق تدريجي — خاصة عند قمة الرأس وخط الفرقة." },
      { iconKey: "sparkles", title: "الصلع الوراثي", desc: "يصيب تساقط الشعر الأنثوي (الثعلبة الأندروجينية) ملايين النساء في UK. توفر التوبِرات تغطية موجّهة حيث تكون الأكثر حاجة." },
      { iconKey: "clock", title: "فقدان الحجم مع التقدم بالعمر", desc: "يصبح الشعر أرق طبيعياً مع التقدم بالسن. تعيد التوبِرات مظهر الكثافة دون جراحة أو أدوية." },
    ],
    typesHeading: "أنواع قواعد الـ Hair Topper: السلك الحريري مقابل المونو مقابل الشبكي",
    typesIntro:
      "مادة القاعدة هي العامل الأهم في اختيار التوبِر. يوفر كل نوع قاعدة مزايا مختلفة لاحتياجات العميلة المختلفة.",
    compareTable: {
      headers: ["نوع القاعدة", "الأفضل لـ", "المظهر الطبيعي", "الراحة"],
      rows: [
        { base: "Silk Base (Lace) ⭐", bestFor: "الفرقة الوسطى/الجانبية، العملاء الأرفع", natural: "⭐⭐⭐⭐⭐ الأكثر طبيعية", comfort: "⭐⭐⭐⭐ ممتاز", highlight: true },
        { base: "Mono Top", bestFor: "راحة تهوية، ارتداء يومي", natural: "⭐⭐⭐⭐ طبيعي جداً", comfort: "⭐⭐⭐⭐⭐ الأكثر تهوية", highlight: false },
        { base: "Mesh Base (Lace)", bestFor: "تغطية كاملة، أسرع مزج", natural: "⭐⭐⭐ طبيعي", comfort: "⭐⭐⭐⭐ تهوية جيدة", highlight: false },
      ],
    },
    baseCards: [
      { title: "Silk Base (Lace) ⭐ الأكثر رواجاً", color: "bg-[#4A1942]", points: ["100% خصلات مربوطة يدوياً على الدانتيل", "ملمس يشبه فروة الرأس — فرقة غير مرئية", "جودة بريميوم، أعلى سعر", "تحتاج عناية وصيانة أكثر"] },
      { title: "Mono Top — تهوية", color: "bg-[#7B3A6E]", points: ["قاعدة مونوفيلament (مونو) مفتوحة النسيج", "تهوية ممتازة — مثالية للارتداء اليومي", "منطقة فرقة بمظهر طبيعي", "سعر متوسط المدى"] },
      { title: "Mesh Base — خفيفة", color: "bg-[#5B3A6E]", points: ["بنية شبكية دانتيل مفتوحة", "أخف وزن بين كل القواعد", "أسرع مزج مع الشعر الطبيعي", "أفضل قيمة"] },
    ],
    applyHeading: "كيفية تطبيق الـ Hair Topper في 4 خطوات",
    applyIntro:
      "على عكس الإكسسوارات، لا تتطلب التوبِرات <strong>تدريباً مهنياً</strong>. يمكن لأي مصففة تطبيق واحدة في أقل من 5 دقائق.",
    applySteps: [
      { step: "1", title: "قسّمي الشعر", desc: "أنشئي فرقة أفقية عند قمة الرأس، تقريباً حيث يبدأ شعر العميلة بالترقق. استخدمي مشابك الفراشة لعزل القسم." },
      { step: "2", title: "افتحي كل المشابك", desc: "افتحي كل المشابك الضاغطة على التوبِر. لمعظم التوبِرات 3-5 مشابك مدمجة لثبات آمن غير منزلق." },
      { step: "3", title: "ضعي وثبّتي", desc: "ضعي التوبِر مباشرة فوق المنطقة المتناثرة. حاذي الحافة الأمامية خلف خط الشعر مباشرة. ثبتي المشابك على الشعر الطبيعي بأقرب ما يمكن من فروة الرأس." },
      { step: "4", title: "امزجي وصفّفي", desc: "استخدمي مشط الذيل لتمشيط شعر العميلة الطبيعي برفق فوق حواف التوبِر. صفّفي كما تشائين — التجعيد أو التمليس أو الأمواج تبدو جميعها رائعة." },
    ],
    tipsHeading: "💡 نصائح احترافية لمصففات الصالون",
    tips: [
      "طابقي لون التوبِر دائماً مع الأطوال الوسطى والأطراف — وليس الجذور (الجذور غالباً أغمق)",
      "قدّمي استشارة لون مجانية قبل الطلب — خلط درجتين يخلق عمقاً طبيعياً",
      "السلك الحريري (Silk Base) هو الأفضل لمن ترتدي شعرها بفرقة وسطى — الدانتيل شبه غير مرئي",
      "قياس منطقة التغطية قبل الطلب — المقاسات القياسية 6\" x 7\" أو 7\" x 9\"",
      "احتفظي بـ 2-3 درجات رائجة في المخزون لاستشارة في نفس اليوم",
      "اقترحي جدول استبدال: توبِرات Remy شعر بشري تدوم 4-6 أشهر مع الارتداء اليومي",
    ],
    vsHeading: "الـ Hair Topper مقابل الباروكة مقابل الإكسسوارات: ماذا تختار؟",
    vsTable: {
      headers: ["الميزة", "Hair Topper ⭐", "باروكة كاملة", "إكسسوارات"],
      rows: [
        { feature: "منطقة التغطية", topper: "قمة الرأس فقط", wig: "الرأس كاملاً", ext: "طول الشعر كاملاً", highlight: true },
        { feature: "التطبيق", topper: "دقيقتان — بلا تدريب", wig: "15-30 دقيقة", ext: "2-4 ساعات احترافي" },
        { feature: "خطر الضرر", topper: "منخفض جداً", wig: "منخفض جداً", ext: "متوسط-مرتفع" },
        { feature: "الراحة", topper: "تهوية", wig: "قد يكون ساخناً", ext: "يختلف حسب الطريقة" },
        { feature: "المظهر الطبيعي", topper: "طبيعي جداً", wig: "جيد", ext: "طبيعي جداً" },
        { feature: "مهارة العميلة المطلوبة", topper: "لا شيء — يطبقه الصالون", wig: "بعض التدريب", ext: "احترافي فقط" },
        { feature: "الأفضل لـ", topper: "قمة الرأس المتناثرة", wig: "فقدان الشعر الكامل", ext: "الطول + الحجم" },
        { feature: "هامش الصالون", topper: "مرتفع (£150-300)", wig: "قياسي", ext: "يختلف" },
      ],
    },
    casesHeading: "دراسات حالة للعميلات",
    cases: [
      { name: "Sarah, 38 — Manchester", issue: "تساقط شعر بعد الولادة إثر الطفل الثاني", solution: "Silk Base Hair Topper #4 Medium Brown", result: "طُبّق في الصالون في أقل من 5 دقائق. بكت سارة — قالت إنها لم تشعر بثقة كافية لربط شعرها منذ 8 أشهر. عادت 3 مرات خلال السنة التالية لإعادة الطلب.", value: "إجمالي الإيراد من عميلة واحدة: £900+" },
      { name: "Emma, 54 — Cheshire", issue: "ترقق شعر سن اليأس عند القمة والفرقة", solution: "Mono Top Hair Topper، مزيج بني رمادي", result: "جرّبت إيما المينوكسيديل بنجاح محدود. منحها التوبِر ثقة فورية. ترتديه يومياً وتزيله ليلاً — بلا التزام.", value: "عميلة عائدة كل 5 أشهر: £200/طلب" },
      { name: "Chloe, 29 — Birmingham", issue: "ترقق شعر وراثي (والدتها نفس الشيء)", solution: "Mesh Base Hair Topper + خدمة مطابقة اللون", result: "أول تجربة في الصالون — لم تضع إكسسوارات من قبل. أُذهلت من طبيعية المظهر. أوصت 3 صديقات في الشهر التالي.", value: "قيمة الإحالة المباشرة: 4 عميلات جديدات" },
    ],
    whyHeading: "لماذا يجب كل صالون في UK أن يخزّن الـ Hair Toppers",
    whyCards: [
      { icon: "🧲", title: "سوق ضخم غير مخدوم", desc: "4 من كل 10 نساء يلاحظن ترققاً مرئياً للشعر في سن الأربعين — لكن معظم الصالونات لا توفر حلولاً. تملأ التوبِرات هذه الفجوة." },
      { icon: "💰", title: "مبيعات عالية القيمة", desc: "خدمة توبِر واحدة (£150-300) تتجاوز غالباً إيراد يوم تلوين كامل — مع 5 دقائق فقط من التطبيق." },
      { icon: "🔄", title: "إيراد متكرر", desc: "تعود العميلات كل 4-6 أشهر لتوبِر بديل. على عكس الإكسسوارات، لا تحتجن عميلات التوبِر مواعيد صيانة." },
      { icon: "⭐", title: "تميّز", desc: "معظم صالونات UK لا توفر الـ hair toppers. أن تُعرف بـ 'صالون التوبِر' في منطقتك = ميزة تنافسية مستدامة." },
      { icon: "😊", title: "أثر يغيّر الحياة", desc: "استعادة ثقة العميلة في 5 دقائق من أكثر الأشياء المجزية عاطفياً لمصففة. يتبع ذلك توصية قوية شفهية." },
      { icon: "📦", title: "بلا مخاطر مخزون", desc: "اطلبي فقط عندما تلتزم العميلة. بلا تخزين، بلا هدر. يرسل المورّد مباشرة للعميلة أو الصالون." },
    ],
    ctaBoxTitle: "جاهز لإضافة الـ Hair Toppers إلى صالونك؟",
    ctaBoxBody:
      "تزوّد D.S Hair & Beauty صالونات احترافية في كافة أنحاء UK بـ التوبِرات ذات قاعدة الحرير والمونو والشبكي. أسعار الجملة متوفرة. مجموعة عينات ألوان مجانية مع طلبك الأول.",
    ctaBoxPrimaryLabel: "تصفح مجموعة التوبِر",
    ctaBoxPrimaryHref: "/collections/hair-toppers",
    ctaBoxSecondaryLabel: "WhatsApp Us",
    ctaBoxSecondaryHref:
      "https://wa.me/8613516946001?text=Hi!%20I'm%20interested%20in%20hair%20topper%20trade%20pricing.",
    ctaBoxSecondaryWhatsapp: true,
    faqHeading: "الأسئلة الشائعة",
    faqs: [
      { q: "كم يدوم الـ hair topper؟", a: "مع العناية الصحيحة، يدوم توبِر Remy شعر بشري 4-6 أشهر مع الارتداء اليومي، وحتى 12 شهراً مع الاستخدام العرضي. قد تحتاج المشابك للاستبدال مع الوقت — وهي رخيصة وسهلة التغيير." },
      { q: "هل يمكن للعميلات غسل وتصفيف الـ hair topper بالحرارة؟", a: "نعم — توبِرات 100% Remy شعر بشري يمكن غسلها وتهيئتها وتصفيفها بالحرارة مثل الشعر الطبيعي. نوصي بمنتجات خالية من الكبريتات وبخاخ حماية. تجنبي المنتجات الزيتية قرب القاعدة." },
      { q: "هل أحتاج تدريباً خاصاً لتطبيق الـ hair topper؟", a: "لا. على عكس إكسسوارات tape-in أو K-tip، لا تتطلب الـ hair toppers أي مؤهل مهني. يمكن لأي مصففة تطبيق واحدة في 2-5 دقائق بعد عرض سريع. ويمكن للعميلات تطبيقها بأنفسهن في المنزل." },
      { q: "كيف أطابق لون الـ hair topper؟", a: "طابقي مع الأطوال الوسطى والأطراف (وليس الجذور). لعميلات البالاياج نوصي بخلط درجتين — لون أساس ولون هايلايت. نوفّر مجموعات عينات ألوان مجانية لعملاء الجملة." },
      { q: "هل يمكن قص وتخصيص الـ hair toppers؟", a: "بالتأكيد. يمكن تقليم القاعدة لتناسب مناطق تغطية أصغر، ويمكن قص الشعر وتطبيعه وتصفيفه ليتطابق تماماً مع شعر العميلة الموجود. هذه إحدى أكبر المزايا مقارنة بالباروكات." },
    ],
    backLabel: "مقالات أكثر",
  },
  sv: {
    seoTitle:
      "Guide för Hair Toppers: Vad är det, vem behöver det & hur applicerar man det | D.S HAIR & BEAUTY",
    seoDescription:
      "Komplett guide för hair toppers för UK-salonger. Silk base vs mono top vs mesh base förklarat. Lär dig vilka kunder som behöver toppar, hur man applicerar dem och hur man köper grossist. Från D.S Hair & Beauty — 19 år av leverans till UK-salonger.",
    heroBadge: "Produktguide 2025",
    heroTitleLines: ["Hair Toppers: salongens i UK", "mest underskattade intäktskälla"],
    heroSubtitle:
      "Allt salonger behöver veta om hair toppers — från produkttyper och kundmatchning till appliceringsteknik och grossistinköp i UK.",
    ctaPrimaryLabel: "Handla Hair Toppers",
    ctaPrimaryHref: "/collections/hair-toppers",
    ctaSecondaryLabel: "Återförsäljarkonto",
    ctaSecondaryHref: "/salon-partners",
    stats: [
      { num: "40%", label: "av kvinnor märker hårförtunning vid 40 års ålder" },
      { num: "£250", label: "genomsnittlig kundkostnad per topp" },
      { num: "2 min", label: "genomsnittlig appliceringstid" },
      { num: "6 mån", label: "genomsnittlig utbytescykel" },
    ],
    breadcrumb: "Tillbaka till Bloggen",
    metaCategory: "Produktguide",
    metaDate: "Uppdaterad mars 2025",
    metaReadTime: "10 min läsning",
    whatHeading: "Vad är en Hair Topper?",
    whatParagraphs: [
      "En hair topper (även kallad hårbit, toppbit eller partiell peruk) är en <strong>riktad hårförlängningsprodukt</strong> designad för att täcka tunnande eller flintskalliga områden vid hjässan, toppen eller sidorna av huvudet. Till skillnad från en hel peruk som täcker hela hårbotten täcker toppen bara det område som behövs — och smälter sömlöst med kundens naturliga hår.",
      "Tänk på det som en <em>“crown patch”</em> — ett konturerat hårstycke med ett basmaterial som klipps fast på befintligt hår. Resultatet: omedelbart volym, full täckning och ett helt naturligt utseende på under två minuter.",
    ],
    heroImageSrc: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1200&q=80",
    heroImageAlt: "Hair topper appliceras av professionell stylist",
    whoHeading: "Vem behöver en Hair Topper?",
    whoCards: [
      { iconKey: "users", title: "Håravfall efter förlossning", desc: "Många nya mödrar tappar mycket hår 3-6 månader efter förlossningen. En topp erbjuder en omedelbar, icke-invasiv lösning." },
      { iconKey: "trendingDown", title: "Hormonellt tunnande", desc: "Menopaus, sköldkörtelbesvär och hormonförändringar orsakar gradvis tunnande — särskilt vid hjässan och lugglinjen." },
      { iconKey: "sparkles", title: "Genetiskt håravfall", desc: "Kvinnligt håravfall (androgenetisk alopeci) drabbar miljontals UK-kvinnor. Toppar ger riktad täckning där den behövs som mest." },
      { iconKey: "clock", title: "Åldersrelaterad volymförlust", desc: "Håret blir naturligt tunnare med åldern. Toppar återställer intrycket av tjocklek utan kirurgi eller medicin." },
    ],
    typesHeading: "Typer av Hair Topper-baser: Silk vs Mono vs Mesh",
    typesIntro:
      "Basmatarialet är den viktigaste faktorn vid val av topp. Varje bastyp erbjuder olika fördelar för olika kundbehov.",
    compareTable: {
      headers: ["Bastyp", "Bäst för", "Naturligt utseende", "Komfort"],
      rows: [
        { base: "Silk Base (Lace) ⭐", bestFor: "Mitt-/sidbena, mest krävande kunder", natural: "⭐⭐⭐⭐⭐ Mest naturlig", comfort: "⭐⭐⭐⭐ Utmärkt", highlight: true },
        { base: "Mono Top", bestFor: "Andningsbar komfort, dagligt bruk", natural: "⭐⭐⭐⭐ Väldigt naturlig", comfort: "⭐⭐⭐⭐⭐ Mest andningsbar", highlight: false },
        { base: "Mesh Base (Lace)", bestFor: "Full täckning, snabbaste blandning", natural: "⭐⭐⭐ Naturlig", comfort: "⭐⭐⭐⭐ Väldigt andningsbar", highlight: false },
      ],
    },
    baseCards: [
      { title: "Silk Base (Lace) ⭐ Populärast", color: "bg-[#4A1942]", points: ["100% för hand knutna strån på spets", "Hårbottslik textur — osynlig lugg", "Premiumkvalitet, högsta prisnivån", "Kräver mer vård & underhåll"] },
      { title: "Mono Top — Andningsbar", color: "bg-[#7B3A6E]", points: ["Monofilament (mono) öppet väv", "Utmärkt ventilation — bra för dagligt bruk", "Naturligt utseende på luggområdet", "Medelprisnivå"] },
      { title: "Mesh Base — Lättvikt", color: "bg-[#5B3A6E]", points: ["Öppen spetsmesh-konstruktion", "Lägsta vikten av alla baser", "Snabbaste blandning med naturligt hår", "Bästa prisvärdet"] },
    ],
    applyHeading: "Så applicerar du en Hair Topper på 4 steg",
    applyIntro:
      "Till skillnad från förlängningar kräver toppar <strong>ingen professionell utbildning</strong>. Vilken stylist som helst kan applicera en på under 5 minuter.",
    applySteps: [
      { step: "1", title: "Dela håret", desc: "Skapa en horisontell lugg vid hjässan, ungefär där kundens hår börjar tunnas ut. Isolera sektionen med fjärilsklämmor." },
      { step: "2", title: "Öppna alla klipp", desc: "Lös upp alla tryckklipp på toppen. De flesta toppar har 3-5 inbyggda klipp för ett säkert, halksäkert grepp." },
      { step: "3", title: "Positionera & snäpp", desc: "Placera toppen direkt över det tunnande området. Justera framkanten strax bakom hårfästet. Snäpp fast klippen på det naturliga håret så nära hårbotten som möjligt." },
      { step: "4", title: "Blanda & styla", desc: "Använd en spetskam för att försiktigt kamma det naturliga håret över toppens kanter. Styla som önskat — lockar, rakt eller vågor ser alla vackra ut." },
    ],
    tipsHeading: "💡 Proffstips för salongstylister",
    tips: [
      "Matcha alltid toppens färg med kundens mellanlängder och toppar — inte rötterna (rötter är ofta mörkare)",
      "Erbjud en gratis färgrådgivning före beställning — att blanda 2 nyanser skapar naturligt djup",
      "Silk base passar bäst för kunder som bär håret med mittbena — spetsen är praktiskt taget osynlig",
      "Mät täckningsområdet före beställning — standardstorlekar är 6\" x 7\" eller 7\" x 9\"",
      "Håll 2-3 populära nyanser i lager för rådgivning samma dag",
      "Föreslå ett utbyteschema: Remy människohår toppar håller 4-6 månader vid dagligt bruk",
    ],
    vsHeading: "Hair Topper vs Peruk vs Förlängningar: Vad ska man välja?",
    vsTable: {
      headers: ["Egenskap", "Hair Topper ⭐", "Hel peruk", "Förlängningar"],
      rows: [
        { feature: "Täckningsområde", topper: "Endast hjässa & topp", wig: "Hela huvudet", ext: "Hel hårlängd", highlight: true },
        { feature: "Applicering", toppers: "2 minuter — ingen utbildning", wig: "15-30 min", ext: "2-4 tim pro" },
        { feature: "Skaderisk", toppers: "Mycket låg", wig: "Mycket låg", ext: "Medel-Hög" },
        { feature: "Komfort", toppers: "Andningsbar", wig: "Kan kännas varm", ext: "Varierar per metod" },
        { feature: "Naturligt utseende", toppers: "Väldigt naturlig", wig: "Bra", ext: "Väldigt naturlig" },
        { feature: "Kundkunskap krävs", toppers: "Ingen — salong applicerar", wig: "Viss träning", ext: "Endast proffs" },
        { feature: "Bäst för", toppers: "Tunnande hjässa", wig: "Komplett håravfall", ext: "Längd + volym" },
        { feature: "Salongmarginal", toppers: "Hög (£150-300)", wig: "Standard", ext: "Varierar" },
      ],
    },
    casesHeading: "Kundcase",
    cases: [
      { name: "Sarah, 38 — Manchester", issue: "Håravfall efter förlossning av andra barnet", solution: "Silk Base Hair Topper #4 Medium Brown", result: "Applicerad i salongen på under 5 minuter. Sarah grät — hon sa att hon inte vågat sätta upp håret på 8 månader. Hon återvände 3 gånger det följande året för ombeställningar.", value: "Total intäkt från en kund: £900+" },
      { name: "Emma, 54 — Cheshire", issue: "Menopausalt hårtunnande vid hjässa och lugg", solution: "Mono Top Hair Topper, askbrun blandning", result: "Emma hade provat minoxidil med begränsad framgång. Toppen gav henne omedelbart självförtroende. Hon bär den dagligen och tar av den på natten — inget åtagande krävs.", value: "Återkommande kund var 5:e månad: £200/order" },
      { name: "Chloe, 29 — Birmingham", issue: "Genetiskt hårtunnande (hennes mamma hade samma)", solution: "Mesh Base Hair Topper + färgmatchningstjänst", result: "Första salongsupplevelsen — hade aldrig haft förlängningar. Var förvånad över hur naturligt det såg ut. Rekommenderade 3 väninnor följande månad.", value: "Direkt rekommationsvärde: 4 nya kunder" },
    ],
    whyHeading: "Varför varje UK-salong bör ha Hair Toppers",
    whyCards: [
      { icon: "🧲", title: "Enorm oservad marknad", desc: "4 av 10 kvinnor märker synligt hårtunnande vid 40 års ålder — ändå erbjuder de flesta salonger inga lösningar. Toppar fyller det gapet." },
      { icon: "💰", title: "Högt biljettvärde", desc: "En topp-service (£150-300) överstiger ofta intäkten från en heldags färgning — med bara 5 minuters appliceringstid." },
      { icon: "🔄", title: "Återkommande intäkter", desc: "Kunder återvänder varje 4-6 månader för en ersättningstopp. Till skillnad från förlängningar behöver toppkunder inga återbesök för påsättning." },
      { icon: "⭐", title: "Differentiering", desc: "De flesta UK-salonger erbjuder inte hair toppers. Att vara känd som 'toppsalongen' i ditt område = hållbar konkurrensfördel." },
      { icon: "😊", title: "Livsförändrande effekt", desc: "Att återställa en kunds självförtroende på 5 minuter är en av de mest emotionellt givande saker en stylist kan göra. Starkt mun-till-mun följer." },
      { icon: "📦", title: "Noll lagerRisk", desc: "Beställ endast när en kund förbinder sig. Inget lager, inget svinn. Leverantören skickar direkt till kund eller salong." },
    ],
    ctaBoxTitle: "Redo att lägga till Hair Toppers i din salong?",
    ctaBoxBody:
      "D.S Hair & Beauty levererar silk base-, mono top- och mesh base-toppar till professionella salonger i hela UK. Partipriser tillgängliga. Gratis färgprovkit med din första order.",
    ctaBoxPrimaryLabel: "Bläddra i toppkollektionen",
    ctaBoxPrimaryHref: "/collections/hair-toppers",
    ctaBoxSecondaryLabel: "WhatsApp Us",
    ctaBoxSecondaryHref:
      "https://wa.me/8613516946001?text=Hi!%20I'm%20interested%20in%20hair%20topper%20trade%20pricing.",
    ctaBoxSecondaryWhatsapp: true,
    faqHeading: "Vanliga frågor",
    faqs: [
      { q: "Hur länge håller en hair topper?", a: "Med rätt vård håller en Remy människohår-topp 4-6 månader vid dagligt bruk, och upp till 12 månader vid sporadiskt bruk. Klippen kan behöva bytas över tid — de är billiga och lätta att byta." },
      { q: "Kan kunder tvätta och värmestyla en hair topper?", a: "Ja — 100% Remy människohår-toppar kan tvättas, balsameras och värmestylas precis som naturligt hår. Vi rekommenderar sulfatfria produkter och värmeskyddsspray. Undvik oljebaserade produkter nära basen." },
      { q: "Behöver jag särskild utbildning för att applicera en hair topper?", a: "Nej. Till skillnad från tape-in eller K-tip förlängningar kräver hair toppers ingen yrkeskvalifikation. Vilken stylist som helst kan applicera en på 2-5 minuter efter en kort demonstration. Kunder kan också applicera dem själva hemma." },
      { q: "Hur matchar jag färgen på en hair topper?", a: "Matcha med kundens mellanlängder och toppar (inte rötterna). För balayage-kunder rekommenderar vi att blanda två nyanser — en basfärg och en highlight-nyans. Vi erbjuder gratis färgprovkit till partikunder." },
      { q: "Kan hair toppers klippas och anpassas?", a: "Absolut. Basen kan trimmas för att passa mindre täckningsområden, och håret kan klippas, lagerskäras eller stylas för att perfekt matcha kundens befintliga hår. Det är en av de största fördelarna framför peruker." },
    ],
    backLabel: "Fler artiklar",
  },
  pl: {
    seoTitle:
      "Przewodnik po Hair Toppers: Czym jest, kto go potrzebuje i jak aplikować | D.S HAIR & BEAUTY",
    seoDescription:
      "Kompletny przewodnik po hair toppers dla salonów w UK. Silk base vs mono top vs mesh base wyjaśnione. Dowiedz się, którzy klienci potrzebują topperów, jak je aplikować i jak kupować hurtowo. Od D.S Hair & Beauty — 19 lat zaopatrywania salonów w UK.",
    heroBadge: "Przewodnik Produktu 2025",
    heroTitleLines: ["Hair Toppers: najbardziej", "niedoceniane źródło przychodów salonu UK"],
    heroSubtitle:
      "Wszystko, co salony muszą wiedzieć o hair toppers — od typów produktów i doboru klienta po techniki aplikacji i zakupy hurtowe w UK.",
    ctaPrimaryLabel: "Kup Hair Toppers",
    ctaPrimaryHref: "/collections/hair-toppers",
    ctaSecondaryLabel: "Konto Hurtowe",
    ctaSecondaryHref: "/salon-partners",
    stats: [
      { num: "40%", label: "kobiet zauważa przerzedzanie włosów w wieku 40 lat" },
      { num: "£250", label: "średni wydatek klientki na topper" },
      { num: "2 min", label: "średni czas aplikacji" },
      { num: "6 mies", label: "średni cykl wymiany" },
    ],
    breadcrumb: "Powrót do Bloga",
    metaCategory: "Przewodnik Produktu",
    metaDate: "Zaktualizowano marzec 2025",
    metaReadTime: "10 min czytania",
    whatHeading: "Czym jest Hair Topper?",
    whatParagraphs: [
      "Hair topper (nazywany też pasmem, nakładką górną lub peruką częściową) to <strong>celowy produkt przedłużania włosów</strong> zaprojektowany, by pokryć przerzedzone lub łyse partie na szczycie głowy, na czubku lub po bokach. W przeciwieństwie do pełnej peruki, która zakrywa całą skórę głowy, topper pokrywa tylko potrzebny obszar — zlewając się z naturalnymi włosami klientki.",
      "Wyobraź sobie to jako <em>„crown patch”</em> — wyprofilowany pukiel z materiałem bazowym, który przypina się do istniejących włosów. Efekt: natychmiastowa objętość, pełne pokrycie i całkowicie naturalny wygląd w mniej niż dwie minuty.",
    ],
    heroImageSrc: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1200&q=80",
    heroImageAlt: "Aplikacja hair topper przez profesjonalnego stylistę",
    whoHeading: "Kto potrzebuje Hair Topper?",
    whoCards: [
      { iconKey: "users", title: "Wypadanie włosów po porodzie", desc: "Wiele nowym mam traci znacznie włosy 3-6 miesięcy po porodzie. Topper to natychmiastowe, nieinwazyjne rozwiązanie." },
      { iconKey: "trendingDown", title: "Przerzedzanie hormonalne", desc: "Menopauza, problemy z tarczycą i zmiany hormonalne powodują stopniowe przerzedzanie — szczególnie na szczycie i linii przedziałka." },
      { iconKey: "sparkles", title: "Łysienie genetyczne", desc: "Kobiece łysienie (alopecja androgenowa) dotyka milionów kobiet w UK. Toppery zapewniają celowe pokrycie tam, gdzie jest najbardziej potrzebne." },
      { iconKey: "clock", title: "Utrata objętości z wiekiem", desc: "Włosy naturalnie stają się cieńsze z wiekiem. Toppery przywracają wrażenie gęstości bez operacji czy leków." },
    ],
    typesHeading: "Typy baz Hair Topper: Silk vs Mono vs Mesh",
    typesIntro:
      "Materiał bazy to najważniejszy czynnik przy wyborze toppera. Każdy typ bazy oferuje inne korzyści dla różnych potrzeb klientek.",
    compareTable: {
      headers: ["Typ bazy", "Najlepsze dla", "Naturalny wygląd", "Komfort"],
      rows: [
        { base: "Silk Base (Lace) ⭐", bestFor: "Przedziałek środkowy/boczny, najbardziej wymagające klientki", natural: "⭐⭐⭐⭐⭐ Najbardziej naturalny", comfort: "⭐⭐⭐⭐ Doskonały", highlight: true },
        { base: "Mono Top", bestFor: "Przewiewny komfort, codzienne noszenie", natural: "⭐⭐⭐⭐ Bardzo naturalny", comfort: "⭐⭐⭐⭐⭐ Najbardziej przewiewny", highlight: false },
        { base: "Mesh Base (Lace)", bestFor: "Pełne pokrycie, najszybsze zlewanie", natural: "⭐⭐⭐ Naturalny", comfort: "⭐⭐⭐⭐ Bardzo przewiewny", highlight: false },
      ],
    },
    baseCards: [
      { title: "Silk Base (Lace) ⭐ Najpopularniejsza", color: "bg-[#4A1942]", points: ["100% ręcznie wiązanych pasm na koronkowych", "Faktura przypominająca skórę głowy — niewidzialny przedziałek", "Jakość premium, najwyższa cena", "Wymaga więcej pielęgnacji i konserwacji"] },
      { title: "Mono Top — Przewiewna", color: "bg-[#7B3A6E]", points: ["Monofilament (mono) otwarta struktura", "Doskonała wentylacja — świetna do codziennego noszenia", "Naturalnie wyglądający obszar przedziałka", "Cena średnia"] },
      { title: "Mesh Base — Lekka", color: "bg-[#5B3A6E]", points: ["Otwarta konstrukcja siatki koronkowej", "Najlżejsza ze wszystkich baz", "Najszybsze zlewanie z naturalnymi włosami", "Najlepszy stosunek jakości do ceny"] },
    ],
    applyHeading: "Jak aplikować Hair Topper w 4 krokach",
    applyIntro:
      "W przeciwieństwie do przedłużeń, toppery nie wymagają <strong>szkolenia zawodowego</strong>. Każda stylistka może nałożyć go w mniej niż 5 minut.",
    applySteps: [
      { step: "1", title: "Wydziel włosy", desc: "Stwórz poziomy przedziałek na szczycie głowy, mniej więcej tam, gdzie włosy klientki zaczynają się przerzedzać. Odizoluj sekcję spinkami motylkowymi." },
      { step: "2", title: "Otwórz wszystkie klipsy", desc: "Rozepnij wszystkie klipsy dociskowe na topperze. Większość topperów ma 3-5 wbudowanych klipsów dla bezpiecznego, niezaciskającego trzymania." },
      { step: "3", title: "Pozycjonuj i zatrzaskuj", desc: "Połóż topper bezpośrednio nad przerzedzoną strefą. Wyrównaj przednią krawędź tuż za linią włosów. Zatrzasknij klipsy na naturalnych włosach jak najbliżej skóry głowy." },
      { step: "4", title: "Zlej i wystylizuj", desc: "Użyj grzebienia z ostrą końcówką, by delikatnie przeczesać naturalne włosy nad krawędzie toppera. Stylizuj według uznania — loki, prostowanie lub fale wyglądają pięknie." },
    ],
    tipsHeading: "💡 Porady Pro dla stylistek salonu",
    tips: [
      "Zawsze dopasuj kolor toppera do środkowych długości i końcówek klientki — nie do nasady (nasada jest często ciemniejsza)",
      "Zaoferuj bezpłatną konsultację kolorystyczną przed zamówieniem — mieszanie 2 odcieni tworzy naturalną głębię",
      "Silk base najlepiej sprawdza się u klientek noszących przedziałek na środku — koronka jest praktycznie niewidoczna",
      "Zmierz obszar pokrycia przed zamówieniem — standardowe rozmiary to 6\" x 7\" lub 7\" x 9\"",
      "Trzymaj 2-3 popularne odcienie w magazynie na konsultacje tego samego dnia",
      "Zasugeruj harmonogram wymiany: toppery Remy włosy naturalne trzymają 4-6 miesięcy przy codziennym noszeniu",
    ],
    vsHeading: "Hair Topper vs Peruka vs Przedłużenia: co wybrać?",
    vsTable: {
      headers: ["Cecha", "Hair Topper ⭐", "Pełna peruka", "Przedłużenia"],
      rows: [
        { feature: "Obszar pokrycia", topper: "Tylko szczyt i czubek", wig: "Cała głowa", ext: "Pełna długość włosów", highlight: true },
        { feature: "Aplikacja", topper: "2 minuty — bez szkolenia", wig: "15-30 min", ext: "2-4 h u proffesjonalisty" },
        { feature: "Ryzyko uszkodzeń", topper: "Bardzo niskie", wig: "Bardzo niskie", ext: "Średnie-Wysokie" },
        { feature: "Komfort", topper: "Przewiewny", wig: "Może być gorąco", ext: "Zależy od metody" },
        { feature: "Naturalny wygląd", topper: "Bardzo naturalny", wig: "Dobry", ext: "Bardzo naturalny" },
        { feature: "Wymagana wprawa klientki", topper: "Żadna — aplikuje salon", wig: "Czasem prób", ext: "Tylko profesjonaliści" },
        { feature: "Najlepsze dla", topper: "Przerzedzony szczyt", wig: "Całkowite łysienie", ext: "Długość + objętość" },
        { feature: "Marża salonu", topper: "Wysoka (£150-300)", wig: "Standardowa", ext: "Zróżnicowana" },
      ],
    },
    casesHeading: "Case study klientek",
    cases: [
      { name: "Sarah, 38 — Manchester", issue: "Wypadanie włosów po porodzie, po drugim dziecku", solution: "Silk Base Hair Topper #4 Medium Brown", result: "Aplikowany w salonie w mniej niż 5 minut. Sarah płakała — powiedziała, że od 8 miesięcy nie miała odwagi związać włosów. Wróciła 3 razy w ciągu roku po dokładki.", value: "Całkowity przychód od jednej klientki: £900+" },
      { name: "Emma, 54 — Cheshire", issue: "Przerzedzanie włosów menopauzalne na szczycie i przedziałku", solution: "Mono Top Hair Topper, mieszanka popielatego brązu", result: "Emma próbowała minoksydylu z ograniczonym sukcesem. Topper dał jej natychmiastową pewność siebie. Nosi go codziennie i zdejmuje na noc — bez zobowiązań.", value: "Powracająca klientka co 5 miesięcy: £200/zamówienie" },
      { name: "Chloe, 29 — Birmingham", issue: "Genetyczne przerzedzanie (jej matka miała to samo)", solution: "Mesh Base Hair Topper + usługa doboru koloru", result: "Pierwsze doświadczenie w salonie — nigdy wcześniej nie miała przedłużeń. Była zachwycona naturalnością. Poleciła 3 koleżanki w następnym miesiącu.", value: "Wartość bezpośredniej rekomendacji: 4 nowe klientki" },
    ],
    whyHeading: "Dlaczego każdy salon w UK powinien mieć Hair Toppers",
    whyCards: [
      { icon: "🧲", title: "Ogromny, nieobsłużony rynek", desc: "4 na 10 kobiet zauważa widoczne przerzedzanie włosów w wieku 40 lat — a jednak większość salonów nie oferuje rozwiązań. Toppery wypełniają tę lukę." },
      { icon: "💰", title: "Sprzedaż wysokomarżowa", desc: "Jedna usługa toppera (£150-300) często przewyższa przychód całodniowego farbowania — przy zaledwie 5 minutach aplikacji." },
      { icon: "🔄", title: "Powracający przychód", desc: "Klientki wracają co 4-6 miesięcy po topper zastępczy. W przeciwieństwie do przedłużeń, klientki topperów nie potrzebują wizyt uzupełniających." },
      { icon: "⭐", title: "Wyróżnienie", desc: "Większość salonów w UK nie oferuje hair toppers. Bycie znanym jako 'salon topperów' w swojej okolicy = trwała przewaga konkurencyjna." },
      { icon: "😊", title: "Zmieniający życie wpływ", desc: "Przywrócenie pewności siebie klientki w 5 minut to jedna z najbardziej satysfakcjonujących rzeczy dla stylistki. Silne polecenia ustne idą za tym." },
      { icon: "📦", title: "Zero ryzyka magazynowego", desc: "Zamawiaj tylko, gdy klientka się zobowiąże. Brak stanów, brak strat. Dostawca wysyła bezpośrednio do klientki lub salonu." },
    ],
    ctaBoxTitle: "Gotów dodać Hair Toppers do swojego salonu?",
    ctaBoxBody:
      "D.S Hair & Beauty zaopatruje profesjonalne salony w całym UK w toppery o bazie silk, mono top i mesh. Ceny hurtowe dostępne. Darmowy zestaw próbek kolorów przy pierwszym zamówieniu.",
    ctaBoxPrimaryLabel: "Przeglądaj kolekcję topperów",
    ctaBoxPrimaryHref: "/collections/hair-toppers",
    ctaBoxSecondaryLabel: "WhatsApp Us",
    ctaBoxSecondaryHref:
      "https://wa.me/8613516946001?text=Hi!%20I'm%20interested%20in%20hair%20topper%20trade%20pricing.",
    ctaBoxSecondaryWhatsapp: true,
    faqHeading: "Najczęściej Zadawane Pytania",
    faqs: [
      { q: "Jak długo trzyma się hair topper?", a: "Przy odpowiedniej pielęgnacji topper z Remy włosów naturalnych trzyma 4-6 miesięcy przy codziennym noszeniu i do 12 miesięcy przy okazjonalnym użytkowaniu. Klipsy mogą z czasem wymagać wymiany — są tanie i łatwe do wymiany." },
      { q: "Czy klientki mogą prać i stylizować na ciepło hair topper?", a: "Tak — toppery 100% Remy włosy naturalne można prać, odżywiać i stylizować na ciepło jak naturalne włosy. Zalecamy produkty bez siarczanów i spray ochronny. Unikaj produktów olejowych w okolicy bazy." },
      { q: "Czy potrzebuję specjalnego szkolenia, by aplikować hair topper?", a: "Nie. W przeciwieństwie do przedłużeń tape-in czy K-tip, hair toppers nie wymagają zawodowego uprawnienia. Każda stylistka może nałożyć go w 2-5 minut po krótkim pokazie. Klientki mogą też aplikować je samodzielnie w domu." },
      { q: "Jak dobrać kolor hair toppera?", a: "Dopasuj do środkowych długości i końcówek klientki (nie do nasady). Dla klientek z balayage zalecamy wymieszanie dwóch odcieni — koloru bazowego i highlightu. Oferujemy darmowe zestawy próbek kolorów dla klientów hurtowych." },
      { q: "Czy hair toppery można przyciąć i dostosować?", a: "Absolutnie. Bazę można przyciąć do mniejszych obszarów pokrycia, a włosy można ciąć, warstwować lub stylizować, by idealnie pasowały do istniejących włosów klientki. To jedna z największych zalet wobec peruk." },
    ],
    backLabel: "Więcej artykułów",
  },
}
