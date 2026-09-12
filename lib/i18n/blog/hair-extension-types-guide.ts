import type { Locale } from "@/lib/i18n/config"

export interface ComparisonRow {
  method: string
  time: string
  duration: string
  best: string
}

export interface ExtensionTypeCard {
  heading: string
  imageSrc: string
  imageAlt: string
  descLead: string
  descBody: string
  pros: string[]
  cons: string[]
  bestFor: string[]
}

export interface ChooseQa {
  q: string
  a: string
}

export interface TypesGuideRelatedCard {
  eyebrow: string
  title: string
  href: string
}

export interface HairExtensionTypesGuideContent {
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
  comparisonTableHead: string[]
  comparisonRows: ComparisonRow[]
  prosConsLabels: { pros: string; cons: string; bestFor: string }
  tapeIn: ExtensionTypeCard
  kTip: ExtensionTypeCard
  weft: ExtensionTypeCard
  butterflyWeft: ExtensionTypeCard
  clipIn: ExtensionTypeCard
  chooseHeading: string
  chooseIntro: string
  chooseQas: ChooseQa[]
  ctaHeading: string
  ctaText: string
  ctaPrimaryLabel: string
  ctaPrimaryHref: string
  ctaSecondaryLabel: string
  ctaSecondaryHref: string
  relatedCard1: TypesGuideRelatedCard
  relatedCard2: TypesGuideRelatedCard
  backLabel: string
  faqHeading: string
  faqs: { q: string; a: string }[]
}

const en: HairExtensionTypesGuideContent = {
  seoTitle: "Hair Extension Types Explained: A Complete Guide for Salon Professionals | D.S Hair Beauty",
  seoDescription:
    "The complete guide to hair extension types for salon professionals. Compare tape-in, K-tip, weft, butterfly weft, and clip-in extensions — pros, cons, best uses, and client suitability.",
  heroBadge: "Product Education",
  heroTitle: "Hair Extension Types Explained",
  heroSubtitle:
    "A complete guide for salon professionals. Understand every method — tape-in, K-tip, weft, butterfly weft, and clip-in — and know exactly which one to recommend for each client.",
  heroPrimaryLabel: "Shop Wholesale",
  heroPrimaryHref: "/salon-partners",
  heroSecondaryLabel: "Browse All Ranges",
  heroSecondaryHref: "/collections/tape-in",
  navHome: "Home",
  navBlog: "Blog",
  navCurrent: "Hair Extension Types Explained",
  comparisonTableHead: ["Method", "Installation", "Duration", "Best For"],
  comparisonRows: [
    { method: "Tape-In", time: "45–90 min", duration: "6–8 wks", best: "Fine/medium hair, first-timers" },
    { method: "K-Tip / Keratin Bond", time: "3–5 hours", duration: "3–5 months", best: "Thick hair, long-term wearers" },
    { method: "Weft (Machine)", time: "2–4 hours", duration: "3–4 months", best: "Volume, thick hair" },
    { method: "Butterfly Weft", time: "2–3 hours", duration: "3–5 months", best: "Volume with zero visibility" },
    { method: "Clip-In", time: "Self-fit (10 min)", duration: "Per use", best: "Occasional wear, beginners" },
  ],
  prosConsLabels: { pros: "Pros", cons: "Cons", bestFor: "Best For" },
  tapeIn: {
    heading: "Tape-In Hair Extensions — Pros, Cons & Best For",
    imageSrc: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1200&q=80",
    imageAlt: "Tape-in hair extensions installed by a professional stylist",
    descLead: "Tape-in extensions",
    descBody:
      " use pre-taped flat wefts of Remy human hair that are sandwiched between sections of the client's natural hair. The adhesive is heat-activated or pressure-sensitive and lays completely flat against the scalp.",
    pros: [
      "Fastest installation (45–90 min)",
      "Completely invisible bonds",
      "Easy to maintain and remove",
      "Reusable if re-taped",
      "Most affordable per-service",
    ],
    cons: [
      "Adhesive affected by heat and oils",
      "Requires maintenance every 6–8 weeks",
      "Not ideal for very oily scalps",
      "Bonds visible if applied too close to hairline",
    ],
    bestFor: [
      "Fine to medium hair",
      "First-time extension clients",
      "Clients wanting versatility",
      "Colour experimentation",
      "Low-commitment appointments",
    ],
  },
  kTip: {
    heading: "K-Tip / Keratin Bond Extensions — Pros, Cons & Best For",
    imageSrc: "https://images.unsplash.com/photo-1595959183082-7b570b7e08e2?w=1200&q=80",
    imageAlt: "K-tip keratin bond hair extensions application",
    descLead: "K-tip extensions",
    descBody:
      " (also called keratin bond or fusion extensions) attach individual weft tips to small sections of natural hair using a keratin adhesive that is melted and fused with a heat tool. Each tip is hand-placed for a completely custom, natural finish.",
    pros: [
      "Most natural-looking result",
      "No tape, no beads — just keratin",
      "Long-lasting (3–5 months)",
      "Can be positioned anywhere on head",
      "Highest revenue per appointment",
    ],
    cons: [
      "Slowest installation (3–5 hours)",
      "Requires trained, skilled stylist",
      "Not recommended for fine hair",
      "Heat application requires practice",
      "Maintenance requires specialist removal",
    ],
    bestFor: [
      "Thick, coarse hair",
      "Long-term extension clients",
      "Clients wanting the most natural look",
      "High-value, high-revenue appointments",
      "Bespoke placement requests",
    ],
  },
  weft: {
    heading: "Weft Hair Extensions — Pros, Cons & Best For",
    imageSrc: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=1200&q=80",
    imageAlt: "Hand-tied weft hair extensions for salon professionals",
    descLead: "Weft extensions",
    descBody:
      " consist of continuous strips of hair stitched at the top into a seam. They are installed by sewing (braiding the weft into cornrows) or clipping onto a micro-bead braid. Machine-made wefts are the most affordable; hand-tied wefts are thinner and more luxurious.",
    pros: [
      "Maximum volume per installation",
      "Fewer attachment points needed",
      "Very cost-effective for clients",
      "Long-lasting results (3–4 months)",
      "Good for thick hair",
    ],
    cons: [
      "Braided installation can be uncomfortable",
      "Weft seam may be visible if not covered",
      "Not suitable for fine or thin hair",
      "More maintenance required at root",
      "Sewing technique requires experience",
    ],
    bestFor: [
      "Thick, coarse hair types",
      "Clients wanting dramatic volume",
      "Clients on a budget",
      "Braided or sewn-in styles",
      "Clients wanting long-term fullness",
    ],
  },
  butterflyWeft: {
    heading: "Butterfly Weft — Pros, Cons & Best For",
    imageSrc: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1200&q=80",
    imageAlt: "Butterfly weft hair extensions for undetectable volume",
    descLead: "Butterfly weft extensions",
    descBody:
      " are a newer innovation — a thin, flexible weft (approximately 0.5mm) with a unique layered cut that follows the natural flow of the hair. Unlike traditional wefts, butterfly wefts are designed to be sewn in without a braid in many cases, sitting flush against the head for a completely undetectable finish.",
    pros: [
      "Ultra-thin base (0.5mm) — virtually undetectable",
      "No braid required in many cases",
      "Lightweight and comfortable",
      "Maximum volume with minimal attachment",
      "Fastest weft installation method",
    ],
    cons: [
      "Premium pricing vs. machine wefts",
      "Requires skilled application technique",
      "Not suitable for very fine hair",
      "Fewer suppliers carry quality butterfly weft",
      "Newer method — less client awareness",
    ],
    bestFor: [
      "Medium to thick hair",
      "Clients wanting volume without beads",
      "Stylists who want faster weft installs",
      "Clients requesting a seamless, invisible result",
      "Boutique salon premium service offering",
    ],
  },
  clipIn: {
    heading: "Clip-In Extensions — Pros, Cons & Best For",
    imageSrc: "https://images.unsplash.com/photo-1470259078422-826894b933aa?w=1200&q=80",
    imageAlt: "Clip-in hair extensions for instant salon results",
    descLead: "Clip-in extensions",
    descBody:
      " are wefts of hair with sewn-in clips that the client can apply and remove themselves at home. While they are the most temporary option, they serve an important market — clients who want to trial extensions before committing, or who prefer not to have a permanent extension service.",
    pros: [
      "Instant results — no appointment needed",
      "Zero commitment",
      "No professional installation required",
      "Reusable indefinitely with care",
      "Ideal entry point for extension-curious clients",
    ],
    cons: [
      "Not a professional salon service",
      "Clips can pull or feel heavy",
      "Not suitable for clients with fine hair",
      "Less natural-looking than bonded methods",
      "No ongoing salon revenue",
    ],
    bestFor: [
      "Occasional or special-occasion wear",
      "Clients not ready for permanent extensions",
      "Retail sale in your salon",
      "Clients with thick, coarse hair",
      "Testing client interest in extensions",
    ],
  },
  chooseHeading: "How to Choose the Right Extension Type for Your Client",
  chooseIntro:
    "Matching the right extension type to the right client is what separates good stylists from great ones. Use this decision framework in your consultation:",
  chooseQas: [
    {
      q: "What is the client's hair type and density?",
      a: "Fine hair → Tape-in or Nano Ring. Medium density → K-tip, Tape-in, or Butterfly Weft. Thick hair → K-tip, Weft, or Butterfly Weft.",
    },
    {
      q: "How much commitment does the client want?",
      a: "No commitment → Clip-ins. Low commitment → Tape-ins (6–8 week cycles). Long-term → K-tip, Weft, or Butterfly Weft.",
    },
    {
      q: "What is the client's budget?",
      a: "Entry-level → Clip-ins or Tape-ins. Mid-range → Tape-in or Weft. Premium → K-tip or Butterfly Weft.",
    },
    {
      q: "How quickly does the client need results?",
      a: "Same day → Clip-ins (self-fit) or Tape-ins. Within a week → most methods. Willing to wait → K-tip (longest install time).",
    },
    {
      q: "What is the client's lifestyle?",
      a: "Active gym-goer → Tape-ins or K-tips (secure bonds). Frequent swimmer → K-tips. Occasional events only → Clip-ins or Tape-ins.",
    },
  ],
  ctaHeading: "Stock All Extension Types for Your Salon",
  ctaText:
    "D.S Hair Beauty supplies all five extension types at wholesale trade prices. Open a free trade account and source everything from one trusted UK supplier.",
  ctaPrimaryLabel: "Open a Trade Account →",
  ctaPrimaryHref: "/salon-partners",
  ctaSecondaryLabel: "Browse All Products",
  ctaSecondaryHref: "/collections/tape-in",
  relatedCard1: {
    eyebrow: "Related Article",
    title: "Wholesale Hair Extensions UK: A Salon Owner's Guide",
    href: "/blog/wholesale-hair-extensions-uk",
  },
  relatedCard2: {
    eyebrow: "Related Guide",
    title: "How to Choose a Hair Extension Supplier",
    href: "/blog/how-to-choose-hair-extension-supplier",
  },
  backLabel: "Back to Blog",
  faqHeading: "Frequently Asked Questions",
  faqs: [
    {
      q: "What are the main types of hair extensions?",
      a: "The main professional types are tape-in, K-tip (keratin bond), nano ring / I-tip, hand-tied and machine weft, butterfly weft, clip-in, hair toppers, and ponytails / fringes. Each suits different hair types, budgets, and client goals.",
    },
    {
      q: "Which extension type is best for beginners?",
      a: "For salons, tape-in and nano ring are the most approachable to learn and apply, and they suit most clients. For clients wanting to self-apply at home, clip-ins and toppers are the easiest entry point with zero professional training required.",
    },
    {
      q: "What is the difference between temporary and semi-permanent extensions?",
      a: "Temporary methods (clip-in, ponytail, fringe) are removed daily and need no salon visit. Semi-permanent methods (tape-in, nano, K-tip, weft) are applied by a stylist and worn for weeks with move-ups — they create recurring salon revenue.",
    },
    {
      q: "How do I choose an extension type for my client?",
      a: "Match to hair type, lifestyle, and budget: fine hair suits nano or hand-tied weft; clients wanting zero commitment suit clip-ins; those wanting long wear suit K-tip or weft. Our method comparison guide walks through the trade-offs.",
    },
  ],
}

const de: HairExtensionTypesGuideContent = {
  seoTitle: "Arten von Haarverlängerungen erklärt: Ein kompletter Leitfaden für Salonprofis | D.S Hair Beauty",
  seoDescription:
    "Der komplette Leitfaden zu Arten von Haarverlängerungen für Salonprofis. Vergleichen Sie tape-in, K-tip, weft, butterfly weft und clip-in Extensions — Vorteile, Nachteile, Einsatzmöglichkeiten und Kunden-Eignung.",
  heroBadge: "Produktwissen",
  heroTitle: "Arten von Haarverlängerungen erklärt",
  heroSubtitle:
    "Ein kompletter Leitfaden für Salonprofis. Verstehen Sie jede Methode — tape-in, K-tip, weft, butterfly weft und clip-in — und wissen Sie genau, welche Sie welcher Kundin empfehlen.",
  heroPrimaryLabel: "Großhandel shoppen",
  heroPrimaryHref: "/salon-partners",
  heroSecondaryLabel: "Alle Sortimente ansehen",
  heroSecondaryHref: "/collections/tape-in",
  navHome: "Startseite",
  navBlog: "Blog",
  navCurrent: "Arten von Haarverlängerungen erklärt",
  comparisonTableHead: ["Methode", "Installation", "Haltbarkeit", "Am besten geeignet für"],
  comparisonRows: [
    { method: "Tape-In", time: "45–90 Min.", duration: "6–8 Wochen", best: "Feines/mittleres Haar, Erstkundinnen" },
    { method: "K-Tip / Keratin Bond", time: "3–5 Stunden", duration: "3–5 Monate", best: "Dickes Haar, Langzeitträgerinnen" },
    { method: "Weft (Maschine)", time: "2–4 Stunden", duration: "3–4 Monate", best: "Volumen, dickes Haar" },
    { method: "Butterfly Weft", time: "2–3 Stunden", duration: "3–5 Monate", best: "Volumen mit null Sichtbarkeit" },
    { method: "Clip-In", time: "Selbstanwendung (10 Min.)", duration: "Pro Anwendung", best: "Gelegenheitstragen, Anfängerinnen" },
  ],
  prosConsLabels: { pros: "Vorteile", cons: "Nachteile", bestFor: "Am besten geeignet für" },
  tapeIn: {
    heading: "Tape-In Haarverlängerungen — Vorteile, Nachteile & Eignung",
    imageSrc: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1200&q=80",
    imageAlt: "Tape-in Haarverlängerungen, angebracht von einer professionellen Stylistin",
    descLead: "Tape-in Extensions",
    descBody:
      " verwenden vorgeklebte flache Wefts aus Remy-Echthaar, die zwischen Partien des Naturhaars der Kundin eingelegt werden. Der Kleber ist hitze- oder druckaktiviert und liegt vollkommen flach an der Kopfhaut an.",
    pros: [
      "Schnellste Installation (45–90 Min.)",
      "Vollständig unsichtbare Bonds",
      "Leicht zu pflegen und zu entfernen",
      "Bei Neubeklebung wiederverwendbar",
      "Am günstigsten pro Dienstleistung",
    ],
    cons: [
      "Kleber reagiert auf Hitze und Öle",
      "Erfordert Pflege alle 6–8 Wochen",
      "Nicht ideal für sehr fettige Kopfhaut",
      "Bonds sichtbar, wenn zu nah am Haaransatz angebracht",
    ],
    bestFor: [
      "Feines bis mittleres Haar",
      "Erstkundinnen bei Extensions",
      "Kundinnen, die Vielseitigkeit wünschen",
      "Farbexperimente",
      "Termine mit geringem Aufwand",
    ],
  },
  kTip: {
    heading: "K-Tip / Keratin-Bond-Extensions — Vorteile, Nachteile & Eignung",
    imageSrc: "https://images.unsplash.com/photo-1595959183082-7b570b7e08e2?w=1200&q=80",
    imageAlt: "K-tip Keratin-Bond Haarverlängerungen Anwendung",
    descLead: "K-tip Extensions",
    descBody:
      " (auch Keratin-Bond- oder Fusion-Extensions genannt) befestigen einzelne Weft-Spitzen an kleinen Partien des Naturhaars mit einem Keratinkleber, der geschmolzen und mit einem Wärmegerät verschmolzen wird. Jede Spitze wird von Hand platziert, für ein vollständig individuelles, natürliches Finish.",
    pros: [
      "Natürlichstes Ergebnis",
      "Kein Tape, keine Perlen — nur Keratin",
      "Langlebig (3–5 Monate)",
      "Überall am Kopf positionierbar",
      "Höchster Umsatz pro Termin",
    ],
    cons: [
      "Langsamste Installation (3–5 Stunden)",
      "Erfordert geschulte, erfahrene Stylisten",
      "Nicht für feines Haar empfohlen",
      "Hitzeeinwirkung erfordert Übung",
      "Entfernung nur durch Spezialisten",
    ],
    bestFor: [
      "Dickes, grobes Haar",
      "Langzeit-Extension-Kundinnen",
      "Kundinnen, die den natürlichsten Look wünschen",
      "Hochwertige, umsatzstarke Termine",
      "Individuelle Platzierungswünsche",
    ],
  },
  weft: {
    heading: "Weft-Haarverlängerungen — Vorteile, Nachteile & Eignung",
    imageSrc: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=1200&q=80",
    imageAlt: "Hand-Tied-Weft-Haarverlängerungen für Salonprofis",
    descLead: "Weft Extensions",
    descBody:
      " bestehen aus durchgehenden Haarstreifen, die oben zu einer Naht vernäht sind. Sie werden durch Nähen (Einweben des Wefts in Cornrows) oder Einklippen in ein Micro-Bead-Zopfwerk angebracht. Maschinengefertigte Wefts sind am günstigsten; handgefertigte Wefts sind dünner und luxuriöser.",
    pros: [
      "Maximales Volumen pro Installation",
      "Weniger Befestigungspunkte nötig",
      "Sehr kosteneffizient für Kundinnen",
      "Langanhaltende Ergebnisse (3–4 Monate)",
      "Gut für dickes Haar",
    ],
    cons: [
      "Geflochtene Installation kann unangenehm sein",
      "Weft-Naht kann sichtbar sein, wenn nicht abgedeckt",
      "Nicht für feines oder dünnes Haar geeignet",
      "Mehr Pflege am Ansatz erforderlich",
      "Nähtechnik erfordert Erfahrung",
    ],
    bestFor: [
      "Dickes, grobes Haar",
      "Kundinnen, die dramatisches Volumen wünschen",
      "Budgetbewusste Kundinnen",
      "Geflochtene oder eingenähte Styles",
      "Kundinnen, die langfristige Fülle wünschen",
    ],
  },
  butterflyWeft: {
    heading: "Butterfly Weft — Vorteile, Nachteile & Eignung",
    imageSrc: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1200&q=80",
    imageAlt: "Butterfly-Weft-Haarverlängerungen für unsichtbares Volumen",
    descLead: "Butterfly Weft Extensions",
    descBody:
      " sind eine neuere Innovation — ein dünnes, flexibles Weft (ca. 0,5 mm) mit einem einzigartigen gestuften Schnitt, der dem natürlichen Haarfluss folgt. Anders als herkömmliche Wefts sind Butterfly Wefts so konzipiert, dass sie in vielen Fällen ohne Zopf eingearbeitet werden, liegen flach am Kopf an und erzeugen ein vollständig unauffälliges Finish.",
    pros: [
      "Ultradünne Basis (0,5 mm) — praktisch unauffällig",
      "In vielen Fällen kein Zopf nötig",
      "Leicht und bequem",
      "Maximales Volumen mit minimaler Befestigung",
      "Schnellste Weft-Installationsmethode",
    ],
    cons: [
      "Premiumpreis gegenüber Maschinenwefts",
      "Erfordert geschickte Anwendungstechnik",
      "Nicht für sehr feines Haar geeignet",
      "Weniger Lieferanten führen Qualitäts-Butterfly-Weft",
      "Neuere Methode — weniger bekannt bei Kundinnen",
    ],
    bestFor: [
      "Mittleres bis dickes Haar",
      "Kundinnen, die Volumen ohne Perlen wünschen",
      "Stylisten, die schnellere Weft-Installationen wünschen",
      "Kundinnen mit Wunsch nach nahtlosem, unsichtbarem Ergebnis",
      "Premium-Angebot von Boutique-Salons",
    ],
  },
  clipIn: {
    heading: "Clip-In Extensions — Vorteile, Nachteile & Eignung",
    imageSrc: "https://images.unsplash.com/photo-1470259078422-826894b933aa?w=1200&q=80",
    imageAlt: "Clip-in Haarverlängerungen für sofortige Salonergebnisse",
    descLead: "Clip-in Extensions",
    descBody:
      " sind Haarwefts mit eingenähten Clips, die die Kundin zu Hause selbst anbringen und entfernen kann. Auch wenn sie die temporärste Option sind, bedienen sie einen wichtigen Markt — Kundinnen, die Extensions vor einer Entscheidung testen möchten oder keinen dauerhaften Extension-Service wünschen.",
    pros: [
      "Sofortige Ergebnisse — kein Termin nötig",
      "Keine Verpflichtung",
      "Keine professionelle Installation erforderlich",
      "Bei guter Pflege unbegrenzt wiederverwendbar",
      "Idealer Einstieg für extension-neugierige Kundinnen",
    ],
    cons: [
      "Keine professionelle Salondienstleistung",
      "Clips können ziehen oder schwer wirken",
      "Nicht für Kundinnen mit feinem Haar geeignet",
      "Weniger natürlich als Bond-Methoden",
      "Keine laufenden Saloneinnahmen",
    ],
    bestFor: [
      "Gelegenheits- oder Festtagstragen",
      "Kundinnen, die nicht bereit für permanente Extensions sind",
      "Einzelhandelsverkauf in Ihrem Salon",
      "Kundinnen mit dickem, grobem Haar",
      "Testen des Kundeninteresses an Extensions",
    ],
  },
  chooseHeading: "So wählen Sie die richtige Extension-Art für Ihre Kundin",
  chooseIntro:
    "Die richtige Extension-Art der richtigen Kundin zuzuordnen, unterscheidet gute von großartigen Stylisten. Nutzen Sie diesen Entscheidungsrahmen in Ihrem Beratungsgespräch:",
  chooseQas: [
    {
      q: "Welchen Haartyp und welche Dichte hat die Kundin?",
      a: "Feines Haar → Tape-in oder Nano Ring. Mittlere Dichte → K-tip, Tape-in oder Butterfly Weft. Dickes Haar → K-tip, Weft oder Butterfly Weft.",
    },
    {
      q: "Wie viel Verpflichtung wünscht die Kundin?",
      a: "Keine Verpflichtung → Clip-ins. Geringe Verpflichtung → Tape-ins (6–8-Wochen-Zyklen). Langfristig → K-tip, Weft oder Butterfly Weft.",
    },
    {
      q: "Wie hoch ist das Budget der Kundin?",
      a: "Einstieg → Clip-ins oder Tape-ins. Mittlere Preisklasse → Tape-in oder Weft. Premium → K-tip oder Butterfly Weft.",
    },
    {
      q: "Wie schnell braucht die Kundin Ergebnisse?",
      a: "Am selben Tag → Clip-ins (Selbstanwendung) oder Tape-ins. Innerhalb einer Woche → die meisten Methoden. Bereit zu warten → K-tip (längste Installationszeit).",
    },
    {
      q: "Wie ist der Lebensstil der Kundin?",
      a: "Aktive Fitnessstudio-Gängerin → Tape-ins oder K-tips (sichere Bonds). Häufige Schwimmerin → K-tips. Nur gelegentliche Anlässe → Clip-ins oder Tape-ins.",
    },
  ],
  ctaHeading: "Führen Sie alle Extension-Arten in Ihrem Salon",
  ctaText:
    "D.S Hair Beauty liefert alle fünf Extension-Arten zu Großhandelspreisen im Trade. Eröffnen Sie ein kostenloses Trade-Konto und beziehen Sie alles von einem vertrauenswürdigen UK-Lieferanten.",
  ctaPrimaryLabel: "Trade-Konto eröffnen →",
  ctaPrimaryHref: "/salon-partners",
  ctaSecondaryLabel: "Alle Produkte ansehen",
  ctaSecondaryHref: "/collections/tape-in",
  relatedCard1: {
    eyebrow: "Verwandter Artikel",
    title: "Haarverlängerungen im Großhandel UK: Ein Leitfaden für Saloninhaber",
    href: "/blog/wholesale-hair-extensions-uk",
  },
  relatedCard2: {
    eyebrow: "Verwandter Leitfaden",
    title: "So wählen Sie einen Haarverlängerungs-Lieferanten",
    href: "/blog/how-to-choose-hair-extension-supplier",
  },
  backLabel: "Zurück zum Blog",
  faqHeading: "Häufig gestellte Fragen",
  faqs: [
    {
      q: "Welche Hauptarten von Haarverlängerungen gibt es?",
      a: "Die wichtigsten professionellen Arten sind tape-in, K-tip (Keratin Bond), nano ring / I-tip, hand-tied und maschinelle Wefts, butterfly weft, clip-in, hair toppers sowie Pferdeschwänze / Fringes. Jede eignet sich für andere Haartypen, Budgets und Kundenziele.",
    },
    {
      q: "Welche Extension-Art ist am besten für Anfänger?",
      a: "Für Salons sind tape-in und nano ring am leichtesten zu erlernen und anzuwenden und passen zu den meisten Kundinnen. Für Kundinnen, die sich zu Hause selbst anbringen möchten, sind clip-ins und Toppers der einfachste Einstieg — ganz ohne professionelle Schulung.",
    },
    {
      q: "Was ist der Unterschied zwischen temporären und semi-permanenten Extensions?",
      a: "Temporäre Methoden (clip-in, Pferdeschwanz, Fringe) werden täglich entfernt und erfordern keinen Salonbesuch. Semi-permanente Methoden (tape-in, nano, K-tip, weft) werden vom Stylisten angebracht und über Wochen mit Move-ups getragen — sie schaffen wiederkehrende Saloneinnahmen.",
    },
    {
      q: "Wie wähle ich eine Extension-Art für meine Kundin?",
      a: "Passen Sie sie an Haartyp, Lebensstil und Budget an: Feines Haar eignet sich für nano oder hand-tied weft; Kundinnen ohne Verpflichtung passen zu clip-ins; wer lange Tragedauer wünscht, zu K-tip oder weft. Unser Methodenvergleichs-Leitfaden führt durch die Abwägungen.",
    },
  ],
}

const fr: HairExtensionTypesGuideContent = {
  seoTitle: "Types d'extensions de cheveux expliqués : guide complet pour les professionnels de salon | D.S Hair Beauty",
  seoDescription:
    "Le guide complet des types d'extensions de cheveux pour les professionnels de salon. Comparez les extensions tape-in, K-tip, weft, butterfly weft et clip-in — avantages, inconvénients, meilleures utilisations et adéquation client.",
  heroBadge: "Formation produit",
  heroTitle: "Types d'extensions de cheveux expliqués",
  heroSubtitle:
    "Un guide complet pour les professionnels de salon. Comprenez chaque méthode — tape-in, K-tip, weft, butterfly weft et clip-in — et sachez exactement laquelle recommander à chaque cliente.",
  heroPrimaryLabel: "Acheter en gros",
  heroPrimaryHref: "/salon-partners",
  heroSecondaryLabel: "Voir toutes les gammes",
  heroSecondaryHref: "/collections/tape-in",
  navHome: "Accueil",
  navBlog: "Blog",
  navCurrent: "Types d'extensions de cheveux expliqués",
  comparisonTableHead: ["Méthode", "Pose", "Durée", "Idéal pour"],
  comparisonRows: [
    { method: "Tape-In", time: "45–90 min", duration: "6–8 sem.", best: "Cheveux fins/moyens, débutantes" },
    { method: "K-Tip / Keratin Bond", time: "3–5 heures", duration: "3–5 mois", best: "Cheveux épais, porteuses longue durée" },
    { method: "Weft (Machine)", time: "2–4 heures", duration: "3–4 mois", best: "Volume, cheveux épais" },
    { method: "Butterfly Weft", time: "2–3 heures", duration: "3–5 mois", best: "Volume sans visibilité" },
    { method: "Clip-In", time: "Auto-pose (10 min)", duration: "Par utilisation", best: "Pose occasionnelle, débutantes" },
  ],
  prosConsLabels: { pros: "Avantages", cons: "Inconvénients", bestFor: "Idéal pour" },
  tapeIn: {
    heading: "Extensions Tape-In — Avantages, Inconvénients & Idéal pour",
    imageSrc: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1200&q=80",
    imageAlt: "Extensions tape-in posées par une styliste professionnelle",
    descLead: "Les extensions tape-in",
    descBody:
      " utilisent des mèches plates pré-adhésivées en cheveux humains Remy, insérées entre des sections des cheveux naturels de la cliente. L'adhésif est activé à la chaleur ou par pression et repose totalement à plat contre le cuir chevelu.",
    pros: [
      "Pose la plus rapide (45–90 min)",
      "Liaisons totalement invisibles",
      "Faciles à entretenir et à retirer",
      "Réutilisables après ré-adhésivation",
      "Le plus abordable par prestation",
    ],
    cons: [
      "Adhésif sensible à la chaleur et aux huiles",
      "Exige un entretien toutes les 6–8 semaines",
      "Pas idéal pour les cuirs chevelus très gras",
      "Liaisons visibles si posées trop près de la racine",
    ],
    bestFor: [
      "Cheveux fins à moyens",
      "Clientes débutantes en extensions",
      "Clientes qui veulent de la polyvalence",
      "Expérimentation de couleurs",
      "Rendez-vous à faible engagement",
    ],
  },
  kTip: {
    heading: "Extensions K-Tip / Keratin Bond — Avantages, Inconvénients & Idéal pour",
    imageSrc: "https://images.unsplash.com/photo-1595959183082-7b570b7e08e2?w=1200&q=80",
    imageAlt: "Pose d'extensions K-tip à liaison kératine",
    descLead: "Les extensions K-tip",
    descBody:
      " (aussi appelées extensions à liaison kératine ou fusion) fixent des pointes de mèches individuelles sur de petites sections de cheveux naturels à l'aide d'un adhésif de kératine fondu et fusionné à l'outil thermique. Chaque pointe est placée à la main pour un fini entièrement personnalisé et naturel.",
    pros: [
      "Résultat le plus naturel",
      "Pas de bande, pas de billes — juste de la kératine",
      "Longue durée (3–5 mois)",
      "Positionnable partout sur la tête",
      "Revenu le plus élevé par rendez-vous",
    ],
    cons: [
      "Pose la plus lente (3–5 heures)",
      "Exige un coiffeur formé et expérimenté",
      "Déconseillé pour les cheveux fins",
      "L'application de chaleur demande de la pratique",
      "Le retrait exige un spécialiste",
    ],
    bestFor: [
      "Cheveux épais et grossiers",
      "Clientes d'extensions de longue durée",
      "Clientes qui veulent le look le plus naturel",
      "Rendez-vous à forte valeur et revenus",
      "Demandes de placement sur mesure",
    ],
  },
  weft: {
    heading: "Extensions Weft — Avantages, Inconvénients & Idéal pour",
    imageSrc: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=1200&q=80",
    imageAlt: "Extensions hand-tied weft pour professionnels de salon",
    descLead: "Les extensions weft",
    descBody:
      " consistent en des bandes continues de cheveux cousues en une couture dans le haut. Elles sont posées par couture (tressage de la mèche en cornrows) ou par clips sur une natte de micro-billes. Les mèches faites à la machine sont les plus abordables ; les mèches hand-tied sont plus fines et plus luxueuses.",
    pros: [
      "Volume maximal par pose",
      "Moins de points de fixation nécessaires",
      "Très économique pour les clientes",
      "Résultats durables (3–4 mois)",
      "Bon pour les cheveux épais",
    ],
    cons: [
      "La pose tressée peut être inconfortable",
      "La couture peut être visible si non couverte",
      "Pas adapté aux cheveux fins ou clairsemés",
      "Plus d'entretien requis à la racine",
      "La technique de couture exige de l'expérience",
    ],
    bestFor: [
      "Cheveux épais et grossiers",
      "Clientes qui veulent du volume spectaculaire",
      "Clientes avec un budget limité",
      "Styles tressés ou cousus",
      "Clientes qui veulent de la plénitude à long terme",
    ],
  },
  butterflyWeft: {
    heading: "Butterfly Weft — Avantages, Inconvénients & Idéal pour",
    imageSrc: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1200&q=80",
    imageAlt: "Extensions butterfly weft pour un volume indétectable",
    descLead: "Les extensions butterfly weft",
    descBody:
      " sont une innovation plus récente — une mèche fine et flexible (environ 0,5 mm) avec une coupe en couches unique qui suit le flux naturel des cheveux. Contrairement aux mèches traditionnelles, les butterfly wefts sont conçues pour être cousues sans natte dans de nombreux cas, épousant la tête pour un fini totalement indétectable.",
    pros: [
      "Base ultra-fine (0,5 mm) — pratiquement indétectable",
      "Pas de natte requise dans de nombreux cas",
      "Léger et confortable",
      "Volume maximal avec fixation minimale",
      "Méthode de pose de mèche la plus rapide",
    ],
    cons: [
      "Prix premium vs mèches machine",
      "Exige une technique de pose experte",
      "Pas adapté aux cheveux très fins",
      "Peu de fournisseurs proposent du butterfly weft de qualité",
      "Méthode plus récente — moins connue des clientes",
    ],
    bestFor: [
      "Cheveux moyens à épais",
      "Clientes qui veulent du volume sans billes",
      "Coiffeurs qui veulent des poses de mèche plus rapides",
      "Clientes demandant un résultat invisible et sans couture",
      "Offre de service premium de salon boutique",
    ],
  },
  clipIn: {
    heading: "Extensions Clip-In — Avantages, Inconvénients & Idéal pour",
    imageSrc: "https://images.unsplash.com/photo-1470259078422-826894b933aa?w=1200&q=80",
    imageAlt: "Extensions clip-in pour des résultats salon instantanés",
    descLead: "Les extensions clip-in",
    descBody:
      " sont des mèches de cheveux avec des clips cousus que la cliente peut poser et retirer elle-même à la maison. Bien qu'elles soient l'option la plus temporaire, elles servent un marché important — les clientes qui veulent tester les extensions avant de s'engager, ou qui préfèrent éviter un service d'extension permanent.",
    pros: [
      "Résultats instantanés — aucun rendez-vous nécessaire",
      "Zéro engagement",
      "Aucune pose professionnelle requise",
      "Réutilisables indéfiniment avec soin",
      "Point d'entrée idéal pour les clientes curieuses",
    ],
    cons: [
      "Pas un service de salon professionnel",
      "Les clips peuvent tirer ou sembler lourds",
      "Pas adapté aux clientes aux cheveux fins",
      "Moins naturel que les méthodes à liaison",
      "Aucun revenu de salon récurrent",
    ],
    bestFor: [
      "Pose occasionnelle ou pour occasions spéciales",
      "Clientes pas prêtes pour des extensions permanentes",
      "Vente au détail dans votre salon",
      "Clientes aux cheveux épais et grossiers",
      "Tester l'intérêt des clientes pour les extensions",
    ],
  },
  chooseHeading: "Comment choisir le bon type d'extension pour votre cliente",
  chooseIntro:
    "Associer le bon type d'extension à la bonne cliente, c'est ce qui distingue les bons coiffeurs des grands. Utilisez ce cadre de décision lors de votre consultation :",
  chooseQas: [
    {
      q: "Quel est le type et la densité de cheveux de la cliente ?",
      a: "Cheveux fins → Tape-in ou Nano Ring. Densité moyenne → K-tip, Tape-in ou Butterfly Weft. Cheveux épais → K-tip, Weft ou Butterfly Weft.",
    },
    {
      q: "Quel niveau d'engagement la cliente souhaite-t-elle ?",
      a: "Aucun engagement → Clip-ins. Engagement faible → Tape-ins (cycles de 6–8 semaines). Long terme → K-tip, Weft ou Butterfly Weft.",
    },
    {
      q: "Quel est le budget de la cliente ?",
      a: "Entrée de gamme → Clip-ins ou Tape-ins. Milieu de gamme → Tape-in ou Weft. Premium → K-tip ou Butterfly Weft.",
    },
    {
      q: "À quelle vitesse la cliente a-t-elle besoin de résultats ?",
      a: "Le jour même → Clip-ins (auto-pose) ou Tape-ins. Sous une semaine → la plupart des méthodes. Prête à attendre → K-tip (pose la plus longue).",
    },
    {
      q: "Quel est le mode de vie de la cliente ?",
      a: "Salle de sport assidue → Tape-ins ou K-tips (liaisons sûres). Nageuse fréquente → K-tips. Occasions ponctuelles uniquement → Clip-ins ou Tape-ins.",
    },
  ],
  ctaHeading: "Stockez tous les types d'extensions pour votre salon",
  ctaText:
    "D.S Hair Beauty fournit les cinq types d'extensions aux prix de gros trade. Ouvrez un compte trade gratuit et approvisionnez-vous auprès d'un fournisseur UK de confiance.",
  ctaPrimaryLabel: "Ouvrir un compte trade →",
  ctaPrimaryHref: "/salon-partners",
  ctaSecondaryLabel: "Voir tous les produits",
  ctaSecondaryHref: "/collections/tape-in",
  relatedCard1: {
    eyebrow: "Article associé",
    title: "Extensions de cheveux en gros UK : guide du propriétaire de salon",
    href: "/blog/wholesale-hair-extensions-uk",
  },
  relatedCard2: {
    eyebrow: "Guide associé",
    title: "Comment choisir un fournisseur d'extensions de cheveux",
    href: "/blog/how-to-choose-hair-extension-supplier",
  },
  backLabel: "Retour au blog",
  faqHeading: "Questions fréquentes",
  faqs: [
    {
      q: "Quels sont les principaux types d'extensions de cheveux ?",
      a: "Les principaux types professionnels sont tape-in, K-tip (liaison kératine), nano ring / I-tip, hand-tied et weft machine, butterfly weft, clip-in, hair toppers, et queues de cheval / franges. Chacun convient à différents types de cheveux, budgets et objectifs de clientes.",
    },
    {
      q: "Quel type d'extension est le meilleur pour les débutantes ?",
      a: "Pour les salons, le tape-in et le nano ring sont les plus accessibles à apprendre et à poser, et ils conviennent à la plupart des clientes. Pour les clientes qui veulent se poser les extensions elles-mêmes à la maison, les clip-ins et les toppers sont le point d'entrée le plus simple, sans aucune formation professionnelle.",
    },
    {
      q: "Quelle est la différence entre les extensions temporaires et semi-permanentes ?",
      a: "Les méthodes temporaires (clip-in, queue de cheval, frange) sont retirées quotidiennement et ne nécessitent aucune visite en salon. Les méthodes semi-permanentes (tape-in, nano, K-tip, weft) sont posées par un coiffeur et portées pendant des semaines avec des remontées — elles créent des revenus récurrents pour le salon.",
    },
    {
      q: "Comment choisir un type d'extension pour ma cliente ?",
      a: "Faites correspondre au type de cheveux, au mode de vie et au budget : les cheveux fins conviennent au nano ou au hand-tied weft ; les clientes sans engagement conviennent aux clip-ins ; celles qui veulent une longue durée conviennent au K-tip ou au weft. Notre guide de comparaison des méthodes détaille les compromis.",
    },
  ],
}

const ar: HairExtensionTypesGuideContent = {
  seoTitle: "أنواع وصلات الشعر موضحة: دليل شامل لمحترفي الصالونات | D.S Hair Beauty",
  seoDescription:
    "الدليل الكامل لأنواع وصلات الشعر لمحترفي الصالونات. قارن بين tape-in وK-tip وweft وbutterfly weft وclip-in — المزايا والعيوب وأفضل الاستخدامات وملاءمة العميلات.",
  heroBadge: "تثقيف المنتج",
  heroTitle: "أنواع وصلات الشعر موضحة",
  heroSubtitle:
    "دليل شامل لمحترفي الصالونات. افهم كل طريقة — tape-in وK-tip وweft وbutterfly weft وclip-in — واعرف بالضبط أيها توصي به لكل عميلة.",
  heroPrimaryLabel: "تسوق بالجملة",
  heroPrimaryHref: "/salon-partners",
  heroSecondaryLabel: "تصفح جميع المجموعات",
  heroSecondaryHref: "/collections/tape-in",
  navHome: "الرئيسية",
  navBlog: "المدونة",
  navCurrent: "أنواع وصلات الشعر موضحة",
  comparisonTableHead: ["الطريقة", "التركيب", "المدة", "الأنسب لـ"],
  comparisonRows: [
    { method: "Tape-In", time: "45–90 دقيقة", duration: "6–8 أسابيع", best: "الشعر الناعم/المتوسط، المبتدئات" },
    { method: "K-Tip / Keratin Bond", time: "3–5 ساعات", duration: "3–5 أشهر", best: "الشعر الكثيف، طويلات الاستخدام" },
    { method: "Weft (آلة)", time: "2–4 ساعات", duration: "3–4 أشهر", best: "الحجم، الشعر الكثيف" },
    { method: "Butterfly Weft", time: "2–3 ساعات", duration: "3–5 أشهر", best: "حجم بظهور صفري" },
    { method: "Clip-In", time: "تركيب ذاتي (10 دقائق)", duration: "لكل استخدام", best: "المناسبات، المبتدئات" },
  ],
  prosConsLabels: { pros: "المزايا", cons: "العيوب", bestFor: "الأنسب لـ" },
  tapeIn: {
    heading: "وصلات Tape-In — المزايا والعيوب والأنسب",
    imageSrc: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1200&q=80",
    imageAlt: "وصلات tape-in مُركّبة على يد مصففة محترفة",
    descLead: "وصلات tape-in",
    descBody:
      " تستخدم وصلات مسطحة مُلصقة مسبقاً من شعر Remy الطبيعي تُوضع بين أقسام شعر العميلة الطبيعي. اللاصق يتفعل بالحرارة أو بالضغط ويستقر بشكل مسطح تماماً على فروة الرأس.",
    pros: [
      "أسرع تركيب (45–90 دقيقة)",
      "روابط غير مرئية تماماً",
      "سهلة الصيانة والإزالة",
      "قابلة لإعادة الاستخدام بعد إعادة اللصق",
      "الأكثر اقتصادية لكل خدمة",
    ],
    cons: [
      "اللاصق يتأثر بالحرارة والزيوت",
      "تتطلب صيانة كل 6–8 أسابيع",
      "غير مثالية لفروة الرأس الدهنية جداً",
      "الروابط تظهر إذا وُضعت قريبة جداً من خط الشعر",
    ],
    bestFor: [
      "الشعر الناعم إلى المتوسط",
      "العميلات الجدد على الوصلات",
      "العميلات الراغبات في التنوع",
      "تجربة الألوان",
      "مواعيد ذات التزام منخفض",
    ],
  },
  kTip: {
    heading: "وصلات K-Tip / Keratin Bond — المزايا والعيوب والأنسب",
    imageSrc: "https://images.unsplash.com/photo-1595959183082-7b570b7e08e2?w=1200&q=80",
    imageAlt: "تركيب وصلات K-tip برابط الكيراتين",
    descLead: "وصلات K-tip",
    descBody:
      " (وتسمى أيضاً وصلات رابط الكيراتين أو الدمج) تُثبت أطراف خصلات فردية على أقسام صغيرة من الشعر الطبيعي باستخدام لاصق كيراتين يُذاب ويُدمج بأداة حرارية. كل طرف يُوضع يدوياً للحصول على لمسة نهائية مخصصة وطبيعية تماماً.",
    pros: [
      "النتيجة الأكثر طبيعية",
      "لا شريط ولا خرز — فقط كيراتين",
      "طويلة الأمد (3–5 أشهر)",
      "يمكن وضعها في أي مكان على الرأس",
      "أعلى إيراد لكل موعد",
    ],
    cons: [
      "أبطأ تركيب (3–5 ساعات)",
      "تتطلب مصففاً مدرّباً وماهراً",
      "غير موصى بها للشعر الناعم",
      "تطبيق الحرارة يتطلب ممارسة",
      "الإزالة تتطلب متخصصاً",
    ],
    bestFor: [
      "الشعر الكثيف الخشن",
      "عميلات الوصلات طويلات الأمد",
      "العميلات الراغبات في المظهر الأكثر طبيعية",
      "مواعيد عالية القيمة والعائد",
      "طلبات توزيع مخصصة",
    ],
  },
  weft: {
    heading: "وصلات Weft — المزايا والعيوب والأنسب",
    imageSrc: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=1200&q=80",
    imageAlt: "وصلات hand-tied weft لمحترفي الصالونات",
    descLead: "وصلات weft",
    descBody:
      " تتكون من شرائح شعر متصلة مخيطة من الأعلى في درزة واحدة. تُركّب بالخياطة (تضفير الوصلة في ضفائر cornrows) أو بالتثبيت على ضفيرة micro-bead. الوصلات المصنوعة آلياً هي الأقل تكلفة؛ أما hand-tied فهي أدق وأفخم.",
    pros: [
      "أقصى حجم لكل تركيب",
      "نقاط تثبيت أقل مطلوبة",
      "اقتصادية جداً للعميلات",
      "نتائج طويلة الأمد (3–4 أشهر)",
      "جيدة للشعر الكثيف",
    ],
    cons: [
      "التركيب المضفر قد يكون غير مريح",
      "درزة الوصلة قد تظهر إذا لم تُغطَّ",
      "غير مناسبة للشعر الناعم أو الخفيف",
      "مزيد من الصيانة عند الجذور",
      "تقنية الخياطة تتطلب خبرة",
    ],
    bestFor: [
      "أنواع الشعر الكثيف الخشن",
      "العميلات الراغبات في حجم كبير",
      "العميلات ذوات الميزانية المحدودة",
      "التصفيفات المضفورة أو المخيطة",
      "العميلات الراغبات في الامتلاء طويل الأمد",
    ],
  },
  butterflyWeft: {
    heading: "Butterfly Weft — المزايا والعيوب والأنسب",
    imageSrc: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1200&q=80",
    imageAlt: "وصلات butterfly weft لحجم غير مرئي",
    descLead: "وصلات butterfly weft",
    descBody:
      " ابتكار أحدث — وصلة رفيعة مرنة (حوالي 0.5 ملم) بقصّة طبقية فريدة تتبع التدفق الطبيعي للشعر. بخلاف الوصلات التقليدية، صُممت butterfly wefts لتُخاط في كثير من الحالات دون ضفيرة، وتستقر ملاصقة للرأس للحصول على لمسة نهائية غير مرئية تماماً.",
    pros: [
      "قاعدة فائقة الرقة (0.5 ملم) — غير مرئية تقريباً",
      "لا حاجة لضفيرة في كثير من الحالات",
      "خفيفة ومريحة",
      "أقصى حجم بأقل تثبيت",
      "أسرع طريقة لتركيب الوصلات",
    ],
    cons: [
      "سعر متميز مقارنة بوصلات الآلة",
      "تتطلب تقنية تطبيق ماهرة",
      "غير مناسبة للشعر الناعم جداً",
      "عدد أقل من الموردين يوفر butterfly weft عالي الجودة",
      "طريقة أحدث — أقل شهرة لدى العميلات",
    ],
    bestFor: [
      "الشعر المتوسط إلى الكثيف",
      "العميلات الراغبات في حجم دون خرز",
      "المصممون الراغبون في تركيب وصل أسرع",
      "العميلات الطالبات نتيجة سلسة وغير مرئية",
      "عرض خدمة متميز لصالونات البوتيك",
    ],
  },
  clipIn: {
    heading: "وصلات Clip-In — المزايا والعيوب والأنسب",
    imageSrc: "https://images.unsplash.com/photo-1470259078422-826894b933aa?w=1200&q=80",
    imageAlt: "وصلات clip-in لنتائج صالون فورية",
    descLead: "وصلات clip-in",
    descBody:
      " وصلات شعر بمشابك مخيطة يمكن للعميلة تركيبها وإزالتها بنفسها في المنزل. ورغم أنها الخيار الأكثر مؤقتية، فإنها تخدم سوقاً مهماً — العميلات الراغبات في تجربة الوصلات قبل الالتزام، أو اللواتي يفضلن عدم وجود خدمة وصل دائمة.",
    pros: [
      "نتائج فورية — دون الحاجة لموعد",
      "صفر التزام",
      "لا تتطلب تركيباً احترافياً",
      "قابلة لإعادة الاستخدام إلى أجل غير مسمى مع العناية",
      "نقطة دخول مثالية للعميلات الفضوليات تجاه الوصلات",
    ],
    cons: [
      "ليست خدمة صالون احترافية",
      "المشابك قد تشد أو تبدو ثقيلة",
      "غير مناسبة للعميلات ذوات الشعر الناعم",
      "أقل طبيعية من الطرق المثبتة",
      "لا إيراد صالون متكرر",
    ],
    bestFor: [
      "المناسبات العرضية أو الخاصة",
      "العميلات غير المستعدات لوصلات دائمة",
      "البيع بالتجزئة في صالونك",
      "العميلات ذوات الشعر الكثيف الخشن",
      "اختبار اهتمام العميلات بالوصلات",
    ],
  },
  chooseHeading: "كيف تختار نوع الوصل المناسب لعميلتك",
  chooseIntro:
    "مطابقة نوع الوصل الصحيح للعميلة الصحيحة هو ما يميّز المصممين الجيدين عن العظماء. استخدم إطار القرار هذا في استشارتك:",
  chooseQas: [
    {
      q: "ما نوع شعر العميلة وكثافته؟",
      a: "شعر ناعم ← Tape-in أو Nano Ring. كثافة متوسطة ← K-tip أو Tape-in أو Butterfly Weft. شعر كثيف ← K-tip أو Weft أو Butterfly Weft.",
    },
    {
      q: "كم التزاماً تريده العميلة؟",
      a: "بدون التزام ← Clip-ins. التزام منخفض ← Tape-ins (دورات 6–8 أسابيع). طويل الأمد ← K-tip أو Weft أو Butterfly Weft.",
    },
    {
      q: "ما ميزانية العميلة؟",
      a: "مستوى الدخول ← Clip-ins أو Tape-ins. متوسط ← Tape-in أو Weft. متميز ← K-tip أو Butterfly Weft.",
    },
    {
      q: "ما مدى سرعة حاجة العميلة للنتائج؟",
      a: "نفس اليوم ← Clip-ins (تركيب ذاتي) أو Tape-ins. خلال أسبوع ← معظم الطرق. مستعدة للانتظار ← K-tip (أطول وقت تركيب).",
    },
    {
      q: "ما أسلوب حياة العميلة؟",
      a: "ممارسة نشطة للرياضة ← Tape-ins أو K-tips (روابط آمنة). سباحة متكررة ← K-tips. مناسبات فقط ← Clip-ins أو Tape-ins.",
    },
  ],
  ctaHeading: "خزّن جميع أنواع الوصلات لصالونك",
  ctaText:
    "توفر D.S Hair Beauty جميع أنواع الوصلات الخمسة بأسعار الجملة trade. افتح حساب trade مجانياً واحصل على كل شيء من مورد UK واحد موثوق.",
  ctaPrimaryLabel: "افتح حساب Trade ←",
  ctaPrimaryHref: "/salon-partners",
  ctaSecondaryLabel: "تصفح جميع المنتجات",
  ctaSecondaryHref: "/collections/tape-in",
  relatedCard1: {
    eyebrow: "مقال ذو صلة",
    title: "وصلات الشعر بالجملة UK: دليل أصحاب الصالونات",
    href: "/blog/wholesale-hair-extensions-uk",
  },
  relatedCard2: {
    eyebrow: "دليل ذو صلة",
    title: "كيف تختار مورد وصلات الشعر",
    href: "/blog/how-to-choose-hair-extension-supplier",
  },
  backLabel: "العودة إلى المدونة",
  faqHeading: "الأسئلة الشائعة",
  faqs: [
    {
      q: "ما الأنواع الرئيسية لوصلات الشعر؟",
      a: "الأنواع الاحترافية الرئيسية هي tape-in وK-tip (رابط الكيراتين) وnano ring / I-tip وhand-tied وweft الآلي وbutterfly weft وclip-in وhair toppers وذيول الحصان / الأطراف الأمامية. كل نوع يناسب أنواع شعر وميزانيات وأهداف عميلات مختلفة.",
    },
    {
      q: "أي نوع وصل هو الأفضل للمبتدئات؟",
      a: "بالنسبة للصالونات، فإن tape-in وnano ring هما الأسهل في التعلم والتطبيق ويناسبان معظم العميلات. أما العميلات الراغبات في التركيب الذاتي في المنزل، فـ clip-ins وtoppers هما أسهل نقطة دخول دون أي تدريب احترافي.",
    },
    {
      q: "ما الفرق بين الوصلات المؤقتة وشبه الدائمة؟",
      a: "الطرق المؤقتة (clip-in وذيل الحصان والطرف الأمامي) تُزال يومياً ولا تتطلب زيارة صالون. أما الطرق شبه الدائمة (tape-in وnano وK-tip وweft) فيركبها مصفف وتُلبس لأسابيع مع إعادة التركيب — وتخلق إيرادات صالون متكررة.",
    },
    {
      q: "كيف أختار نوع الوصل لعميلتي؟",
      a: "طابقه مع نوع الشعر وأسلوب الحياة والميزانية: الشعر الناعم يناسب nano أو hand-tied weft؛ العميلات الراغبات في صفر التزام يناسبهن clip-ins؛ الراغبات في لبس طويل يناسبهن K-tip أو weft. يشرح دليل مقارنة الطرق لدينا المفاضلات بالتفصيل.",
    },
  ],
}

const sv: HairExtensionTypesGuideContent = {
  seoTitle: "Typer av hårförlängningar förklarade: En komplett guide för salongsproffs | D.S Hair Beauty",
  seoDescription:
    "Den kompletta guiden till typer av hårförlängningar för salongsproffs. Jämför tape-in, K-tip, weft, butterfly weft och clip-in — fördelar, nackdelar, bästa användningsområden och kundlämplighet.",
  heroBadge: "Produktutbildning",
  heroTitle: "Typer av hårförlängningar förklarade",
  heroSubtitle:
    "En komplett guide för salongsproffs. Förstå varje metod — tape-in, K-tip, weft, butterfly weft och clip-in — och vet exakt vilken du ska rekommendera för varje kund.",
  heroPrimaryLabel: "Handla grossist",
  heroPrimaryHref: "/salon-partners",
  heroSecondaryLabel: "Bläddra bland alla serier",
  heroSecondaryHref: "/collections/tape-in",
  navHome: "Hem",
  navBlog: "Blogg",
  navCurrent: "Typer av hårförlängningar förklarade",
  comparisonTableHead: ["Metod", "Installation", "Varaktighet", "Bäst för"],
  comparisonRows: [
    { method: "Tape-In", time: "45–90 min", duration: "6–8 v.", best: "Fint/medel hår, nybörjare" },
    { method: "K-Tip / Keratin Bond", time: "3–5 timmar", duration: "3–5 månader", best: "Tjockt hår, långvariga bärare" },
    { method: "Weft (maskin)", time: "2–4 timmar", duration: "3–4 månader", best: "Volym, tjockt hår" },
    { method: "Butterfly Weft", time: "2–3 timmar", duration: "3–5 månader", best: "Volym med noll synlighet" },
    { method: "Clip-In", time: "Självapplicering (10 min)", duration: "Per användning", best: "Enstaka bruk, nybörjare" },
  ],
  prosConsLabels: { pros: "Fördelar", cons: "Nackdelar", bestFor: "Bäst för" },
  tapeIn: {
    heading: "Tape-In-förlängningar — Fördelar, nackdelar & bäst för",
    imageSrc: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1200&q=80",
    imageAlt: "Tape-in-förlängningar applicerade av en professionell stylist",
    descLead: "Tape-in-förlängningar",
    descBody:
      " använder förtejpade platta wefts av Remy-äkta hår som placeras mellan sektioner av kundens naturliga hår. Limmet är värme- eller tryckaktiverat och ligger helt platt mot hårbotten.",
    pros: [
      "Snabbaste installationen (45–90 min)",
      "Helt osynliga bindningar",
      "Lätt att underhålla och ta bort",
      "Återanvändbara vid omläggning",
      "Mest prisvärd per tjänst",
    ],
    cons: [
      "Limmet påverkas av värme och oljor",
      "Kräver underhåll var 6–8:e vecka",
      "Inte idealisk för mycket fet hårbotten",
      "Bindningarna syns om de sätts för nära hårfästet",
    ],
    bestFor: [
      "Fint till medel hår",
      "Förstagångskunder på förlängningar",
      "Kunder som vill ha mångsidighet",
      "Färgexperiment",
      "Bokningar med lågt åtagande",
    ],
  },
  kTip: {
    heading: "K-Tip / Keratin Bond-förlängningar — Fördelar, nackdelar & bäst för",
    imageSrc: "https://images.unsplash.com/photo-1595959183082-7b570b7e08e2?w=1200&q=80",
    imageAlt: "Applicering av K-tip keratin bond-förlängningar",
    descLead: "K-tip-förlängningar",
    descBody:
      " (även kallade keratin bond- eller fusion-förlängningar) fäster enskilda weft-spetsar på små sektioner av naturligt hår med ett keratinalim som smälts och förenas med ett värmeverktyg. Varje spets placeras för hand för en helt anpassad, naturlig finish.",
    pros: [
      "Mest naturliga resultat",
      "Ingen tejp, inga pärlor — bara keratin",
      "Lång hållbarhet (3–5 månader)",
      "Kan placeras var som helst på huvudet",
      "Högst intäkt per bokning",
    ],
    cons: [
      "Långsammaste installationen (3–5 timmar)",
      "Kräver utbildad, skicklig stylist",
      "Rekommenderas inte för fint hår",
      "Värmetillämpning kräver övning",
      "Borttagning kräver specialist",
    ],
    bestFor: [
      "Tjockt, grovt hår",
      "Långsiktiga förlängningskunder",
      "Kunder som vill ha det mest naturliga utseendet",
      "Högvärdiga bokningar med hög intäkt",
      "Skräddarsydda placeringsönskemål",
    ],
  },
  weft: {
    heading: "Weft-förlängningar — Fördelar, nackdelar & bäst för",
    imageSrc: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=1200&q=80",
    imageAlt: "Hand-tied weft-förlängningar för salongsproffs",
    descLead: "Weft-förlängningar",
    descBody:
      " består av kontinuerliga hårremsor som sys ihop upptill i en söm. De appliceras genom sömnad (flätning av weften i cornrows) eller genom att klämmas fast på en mikro-pärlfläta. Maskintillverkade wefts är mest prisvärda; hand-tied-wefts är tunnare och lyxigare.",
    pros: [
      "Maximal volym per installation",
      "Färre fästpunkter behövs",
      "Mycket kostnadseffektivt för kunder",
      "Långvariga resultat (3–4 månader)",
      "Bra för tjockt hår",
    ],
    cons: [
      "Flätad installation kan vara obekväm",
      "Weft-sömmen kan synas om den inte täcks",
      "Inte lämplig för fint eller tunt hår",
      "Mer underhåll krävs vid rötterna",
      "Sömnadsteknik kräver erfarenhet",
    ],
    bestFor: [
      "Tjocka, grova hårtyper",
      "Kunder som vill ha dramatisk volym",
      "Kunder med budget",
      "Flätade eller insydda stilar",
      "Kunder som vill ha långsiktig fyllighet",
    ],
  },
  butterflyWeft: {
    heading: "Butterfly Weft — Fördelar, nackdelar & bäst för",
    imageSrc: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1200&q=80",
    imageAlt: "Butterfly weft-förlängningar för omärkbar volym",
    descLead: "Butterfly weft-förlängningar",
    descBody:
      " är en nyare innovation — en tunn, flexibel weft (cirka 0,5 mm) med en unik lagerklippning som följer hårets naturliga flöde. Till skillnad från traditionella wefts är butterfly wefts utformade för att sys in utan fläta i många fall, liggande tätt mot huvudet för en helt omärkbar finish.",
    pros: [
      "Ultra-tunn bas (0,5 mm) — praktiskt taget omärkbar",
      "Ingen fläta krävs i många fall",
      "Lätt och bekväm",
      "Maximal volym med minimal infästning",
      "Snabbaste weft-installationsmetoden",
    ],
    cons: [
      "Premiumpris jämfört med maskinwefts",
      "Kräver skicklig appliceringsteknik",
      "Inte lämplig för mycket fint hår",
      "Färre leverantörer har kvalitets-butterfly weft",
      "Nyare metod — mindre kundkännedom",
    ],
    bestFor: [
      "Medel till tjockt hår",
      "Kunder som vill ha volym utan pärlor",
      "Stylister som vill ha snabbare weft-installationer",
      "Kunder som vill ha ett sömlöst, osynligt resultat",
      "Boutiquesalongers premiumerbjudande",
    ],
  },
  clipIn: {
    heading: "Clip-In-förlängningar — Fördelar, nackdelar & bäst för",
    imageSrc: "https://images.unsplash.com/photo-1470259078422-826894b933aa?w=1200&q=80",
    imageAlt: "Clip-in-förlängningar för snabba salongsresultat",
    descLead: "Clip-in-förlängningar",
    descBody:
      " är hårwefts med insydda clips som kunden kan applicera och ta bort själv hemma. Även om de är det mest tillfälliga alternativet, betjänar de en viktig marknad — kunder som vill prova förlängningar innan de förbinder sig, eller som föredrar att inte ha en permanent förlängningstjänst.",
    pros: [
      "Omedelbara resultat — ingen bokning krävs",
      "Noll åtagande",
      "Ingen professionell applicering krävs",
      "Återanvändbara på obestämd tid vid skötsel",
      "Idealisk ingång för nyfikna kunder",
    ],
    cons: [
      "Inte en professionell salongstjänst",
      "Clips kan dra eller kännas tunga",
      "Inte lämplig för kunder med fint hår",
      "Mindre naturlig än bundna metoder",
      "Inga löpande salongsintäkter",
    ],
    bestFor: [
      "Enstaka eller festligt bruk",
      "Kunder som inte är redo för permanenta förlängningar",
      "Detaljförsäljning i din salong",
      "Kunder med tjockt, grovt hår",
      "Testa kundintresse för förlängningar",
    ],
  },
  chooseHeading: "Hur du väljer rätt förlängningstyp för din kund",
  chooseIntro:
    "Att matcha rätt förlängningstyp till rätt kund är det som skiljer bra stylister från de bästa. Använd detta beslutsramverk i din konsultation:",
  chooseQas: [
    {
      q: "Vilken hårtyp och densitet har kunden?",
      a: "Fint hår → Tape-in eller Nano Ring. Medel densitet → K-tip, Tape-in eller Butterfly Weft. Tjockt hår → K-tip, Weft eller Butterfly Weft.",
    },
    {
      q: "Hur mycket åtagande vill kunden ha?",
      a: "Inget åtagande → Clip-ins. Lågt åtagande → Tape-ins (6–8 veckors cykler). Långsiktigt → K-tip, Weft eller Butterfly Weft.",
    },
    {
      q: "Vilken budget har kunden?",
      a: "Ingångsnivå → Clip-ins eller Tape-ins. Mellannivå → Tape-in eller Weft. Premium → K-tip eller Butterfly Weft.",
    },
    {
      q: "Hur snabbt behöver kunden resultat?",
      a: "Samma dag → Clip-ins (självapplicering) eller Tape-ins. Inom en vecka → de flesta metoder. Vill vänta → K-tip (längst installationstid).",
    },
    {
      q: "Hur ser kundens livsstil ut?",
      a: "Aktiv gymbesökare → Tape-ins eller K-tips (säkra bindningar). Frekvent simmare → K-tips. Endast enstaka tillfällen → Clip-ins eller Tape-ins.",
    },
  ],
  ctaHeading: "Ha alla förlängningstyper i lager för din salong",
  ctaText:
    "D.S Hair Beauty levererar alla fem förlängningstyper till grossistpriser i trade. Öppna ett gratis trade-konto och köp allt från en pålitlig brittisk leverantör.",
  ctaPrimaryLabel: "Öppna trade-konto →",
  ctaPrimaryHref: "/salon-partners",
  ctaSecondaryLabel: "Bläddra bland alla produkter",
  ctaSecondaryHref: "/collections/tape-in",
  relatedCard1: {
    eyebrow: "Relaterad artikel",
    title: "Grossist hårförlängningar UK: En guide för salongägare",
    href: "/blog/wholesale-hair-extensions-uk",
  },
  relatedCard2: {
    eyebrow: "Relaterad guide",
    title: "Hur du väljer en leverantör av hårförlängningar",
    href: "/blog/how-to-choose-hair-extension-supplier",
  },
  backLabel: "Tillbaka till bloggen",
  faqHeading: "Vanliga frågor",
  faqs: [
    {
      q: "Vilka är de viktigaste typerna av hårförlängningar?",
      a: "De viktigaste professionella typerna är tape-in, K-tip (keratin bond), nano ring / I-tip, hand-tied och maskin-weft, butterfly weft, clip-in, hair toppers samt hästsvansar / lugg. Varje typ passar olika hårtyper, budgetar och kundmål.",
    },
    {
      q: "Vilken förlängningstyp är bäst för nybörjare?",
      a: "För salonger är tape-in och nano ring de mest lättillgängliga att lära sig och applicera, och de passar de flesta kunder. För kunder som vill applicera själva hemma är clip-ins och toppers den enklaste ingången, utan någon professionell utbildning.",
    },
    {
      q: "Vad är skillnaden mellan tillfälliga och semipermanenta förlängningar?",
      a: "Tillfälliga metoder (clip-in, hästsvans, lugg) tas bort dagligen och kräver inget salongsbesök. Semipermanenta metoder (tape-in, nano, K-tip, weft) appliceras av en stylist och bärs i veckor med move-ups — de skapar återkommande salongsintäkter.",
    },
    {
      q: "Hur väljer jag en förlängningstyp för min kund?",
      a: "Matcha hårtyp, livsstil och budget: fint hår passar nano eller hand-tied weft; kunder som vill ha noll åtagande passar clip-ins; de som vill ha lång användning passar K-tip eller weft. Vår metodjämförelseguide går igenom avvägningarna.",
    },
  ],
}

const pl: HairExtensionTypesGuideContent = {
  seoTitle: "Rodzaje przedłużeń włosów wyjaśnione: Kompletny przewodnik dla profesjonalistów salonowych | D.S Hair Beauty",
  seoDescription:
    "Kompletny przewodnik po rodzajach przedłużeń włosów dla profesjonalistów salonowych. Porównaj tape-in, K-tip, weft, butterfly weft i clip-in — zalety, wady, najlepsze zastosowania i dopasowanie do klientek.",
  heroBadge: "Edukacja produktowa",
  heroTitle: "Rodzaje przedłużeń włosów wyjaśnione",
  heroSubtitle:
    "Kompletny przewodnik dla profesjonalistów salonowych. Zrozum każdą metodę — tape-in, K-tip, weft, butterfly weft i clip-in — i wiedz dokładnie, którą polecić każdej klientce.",
  heroPrimaryLabel: "Kupuj hurtowo",
  heroPrimaryHref: "/salon-partners",
  heroSecondaryLabel: "Przeglądaj wszystkie kolekcje",
  heroSecondaryHref: "/collections/tape-in",
  navHome: "Strona główna",
  navBlog: "Blog",
  navCurrent: "Rodzaje przedłużeń włosów wyjaśnione",
  comparisonTableHead: ["Metoda", "Montaż", "Trwałość", "Najlepsza dla"],
  comparisonRows: [
    { method: "Tape-In", time: "45–90 min", duration: "6–8 tyg.", best: "Cienkie/średnie włosy, początkujące" },
    { method: "K-Tip / Keratin Bond", time: "3–5 godzin", duration: "3–5 miesięcy", best: "Gęste włosy, długotrwałe noszenie" },
    { method: "Weft (maszynowe)", time: "2–4 godzin", duration: "3–4 miesięcy", best: "Objętość, gęste włosy" },
    { method: "Butterfly Weft", time: "2–3 godzin", duration: "3–5 miesięcy", best: "Objętość z zerową widocznością" },
    { method: "Clip-In", time: "Samodzielny montaż (10 min)", duration: "Na jedno użycie", best: "Okazjonalne noszenie, początkujące" },
  ],
  prosConsLabels: { pros: "Zalety", cons: "Wady", bestFor: "Najlepsza dla" },
  tapeIn: {
    heading: "Tape-In — Zalety, Wady i Najlepsza Dla",
    imageSrc: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1200&q=80",
    imageAlt: "Przedłużenia tape-in założone przez profesjonalną stylistkę",
    descLead: "Przedłużenia tape-in",
    descBody:
      " wykorzystują wstępnie taśmowane płaskie pasma z ludzkich włosów Remy, umieszczane między partiami naturalnych włosów klientki. Klej jest aktywowany ciepłem lub naciskiem i układa się całkowicie płasko przy skórze głowy.",
    pros: [
      "Najszybszy montaż (45–90 min)",
      "Całkowicie niewidoczne wiązania",
      "Łatwe w utrzymaniu i usuwaniu",
      "Wielokrotnego użytku po przetaśmowaniu",
      "Najbardziej przystępne cenowo na usługę",
    ],
    cons: [
      "Klej reaguje na ciepło i oleje",
      "Wymaga konserwacji co 6–8 tygodni",
      "Nieidealne przy bardzo tłustej skórze głowy",
      "Wiązania widoczne przy zbyt bliskim założeniu do linii włosów",
    ],
    bestFor: [
      "Cienkie do średnich włosy",
      "Klientki debiutujące w przedłużaniu",
      "Klientki chcące wszechstronności",
      "Eksperymenty z kolorem",
      "Wizyty o niskim zobowiązaniu",
    ],
  },
  kTip: {
    heading: "K-Tip / Keratin Bond — Zalety, Wady i Najlepsza Dla",
    imageSrc: "https://images.unsplash.com/photo-1595959183082-7b570b7e08e2?w=1200&q=80",
    imageAlt: "Aplikacja przedłużeń K-tip z wiązaniem keratynowym",
    descLead: "Przedłużenia K-tip",
    descBody:
      " (zwane również przedłużeniami z wiązaniem keratynowym lub fuzją) mocują pojedyncze końcówki pasm do niewielkich partii naturalnych włosów za pomocą kleju keratynowego, który jest topiony i łączony narzędziem cieplnym. Każda końcówka jest układana ręcznie, zapewniając w pełni indywidualne, naturalne wykończenie.",
    pros: [
      "Najbardziej naturalny efekt",
      "Bez taśm, bez koralików — tylko keratyna",
      "Długotrwałe (3–5 miesięcy)",
      "Można umieścić w dowolnym miejscu głowy",
      "Najwyższy przychód na wizytę",
    ],
    cons: [
      "Najwolniejszy montaż (3–5 godzin)",
      "Wymaga wyszkolonej, doświadczonej stylistki",
      "Niezalecane do cienkich włosów",
      "Aplikacja ciepła wymaga praktyki",
      "Usuwanie wymaga specjalisty",
    ],
    bestFor: [
      "Gęste, grube włosy",
      "Klientki długoterminowych przedłużeń",
      "Klientki chcące najbardziej naturalnego wyglądu",
      "Wizyty o wysokiej wartości i przychodzie",
      "Indywidualne prośby o rozmieszczenie",
    ],
  },
  weft: {
    heading: "Weft — Zalety, Wady i Najlepsza Dla",
    imageSrc: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=1200&q=80",
    imageAlt: "Przedłużenia hand-tied weft dla profesjonalistów salonowych",
    descLead: "Przedłużenia weft",
    descBody:
      " składają się z ciągłych pasm włosów zszytych u góry w jeden szew. Montuje się je przez wszycie (wplotenie pasma w cornrows) lub przypięcie do plecionki z mikro-koralików. Wefty maszynowe są najbardziej przystępne cenowo; wefty hand-tied są cieńsze i bardziej luksusowe.",
    pros: [
      "Maksymalna objętość na montaż",
      "Potrzeba mniej punktów mocowania",
      "Bardzo opłacalne dla klientek",
      "Długotrwałe efekty (3–4 miesięcy)",
      "Dobre do gęstych włosów",
    ],
    cons: [
      "Montaż z warkoczem może być niekomfortowy",
      "Szew pasma może być widoczny, jeśli nie jest zakryty",
      "Nieodpowiednie do cienkich lub rzadkich włosów",
      "Więcej konserwacji przy nasadzie",
      "Technika szycia wymaga doświadczenia",
    ],
    bestFor: [
      "Gęste, grube rodzaje włosów",
      "Klientki chcące spektakularnej objętości",
      "Klientki z ograniczonym budżetem",
      "Fryzury z warkoczami lub wszywane",
      "Klientki chcące długotrwałej pełności",
    ],
  },
  butterflyWeft: {
    heading: "Butterfly Weft — Zalety, Wady i Najlepsza Dla",
    imageSrc: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1200&q=80",
    imageAlt: "Przedłużenia butterfly weft dla niewidocznej objętości",
    descLead: "Przedłużenia butterfly weft",
    descBody:
      " to nowsza innowacja — cienkie, elastyczne pasmo (około 0,5 mm) z unikalnym warstwowym cięciem podążającym za naturalnym układem włosów. W przeciwieństwie do tradycyjnych weftów, butterfly weft są zaprojektowane tak, aby w wielu przypadkach wszywać je bez warkocza, przylegając do głowy dla całkowicie niewidocznego wykończenia.",
    pros: [
      "Ultra-cienka baza (0,5 mm) — praktycznie niewidoczna",
      "W wielu przypadkach nie wymaga warkocza",
      "Lekka i wygodna",
      "Maksymalna objętość przy minimalnym mocowaniu",
      "Najszybsza metoda montażu weft",
    ],
    cons: [
      "Cena premium w porównaniu z weftami maszynowymi",
      "Wymaga wprawnej techniki aplikacji",
      "Nieodpowiednie do bardzo cienkich włosów",
      "Mniej dostawców oferuje jakościowe butterfly weft",
      "Nowsza metoda — mniejsza świadomość klientek",
    ],
    bestFor: [
      "Średnie do gęstych włosy",
      "Klientki chcące objętości bez koralików",
      "Stylistki chcące szybszego montażu weft",
      "Klientki proszące o bezszwowy, niewidoczny efekt",
      "Oferta premium salonów butikowych",
    ],
  },
  clipIn: {
    heading: "Clip-In — Zalety, Wady i Najlepsza Dla",
    imageSrc: "https://images.unsplash.com/photo-1470259078422-826894b933aa?w=1200&q=80",
    imageAlt: "Przedłużenia clip-in do natychmiastowych efektów salonowych",
    descLead: "Przedłużenia clip-in",
    descBody:
      " to pasma włosów z wszytymi klipsami, które klientka może samodzielnie założyć i zdjąć w domu. Choć są najbardziej tymczasową opcją, obsługują ważny rynek — klientki, które chcą przetestować przedłużenia przed podjęciem decyzji lub nie chcą stałej usługi przedłużania.",
    pros: [
      "Natychmiastowe efekty — bez wizyty",
      "Zero zobowiązań",
      "Nie wymaga profesjonalnego montażu",
      "Wielokrotnego użytku przy odpowiedniej pielęgnacji",
      "Idealny punkt wejścia dla klientek ciekawych przedłużeń",
    ],
    cons: [
      "To nie profesjonalna usługa salonowa",
      "Klipsy mogą ciągnąć lub być ciężkie",
      "Nieodpowiednie dla klientek z cienkimi włosami",
      "Mniej naturalne niż metody z wiązaniem",
      "Brak bieżących przychodów salonu",
    ],
    bestFor: [
      "Noszenie okazjonalne lub na specjalne okazje",
      "Klientki niegotowe na stałe przedłużenia",
      "Sprzedaż detaliczna w Twoim salonie",
      "Klientki z gęstymi, grubymi włosami",
      "Testowanie zainteresowania klientek przedłużeniami",
    ],
  },
  chooseHeading: "Jak wybrać odpowiedni rodzaj przedłużenia dla swojej klientki",
  chooseIntro:
    "Dopasowanie właściwego rodzaju przedłużenia do właściwej klientki odróżnia dobrych stylistów od wielkich. Wykorzystaj ten schemat decyzyjny podczas konsultacji:",
  chooseQas: [
    {
      q: "Jaki jest typ i gęstość włosów klientki?",
      a: "Cienkie włosy → Tape-in lub Nano Ring. Średnia gęstość → K-tip, Tape-in lub Butterfly Weft. Gęste włosy → K-tip, Weft lub Butterfly Weft.",
    },
    {
      q: "Jak duże zobowiązanie chce podjąć klientka?",
      a: "Zero zobowiązań → Clip-ins. Niskie zobowiązanie → Tape-ins (cykle 6–8 tygodni). Długoterminowe → K-tip, Weft lub Butterfly Weft.",
    },
    {
      q: "Jaki jest budżet klientki?",
      a: "Poziom podstawowy → Clip-ins lub Tape-ins. Średni → Tape-in lub Weft. Premium → K-tip lub Butterfly Weft.",
    },
    {
      q: "Jak szybko klientka potrzebuje efektów?",
      a: "Tego samego dnia → Clip-ins (samodzielny montaż) lub Tape-ins. W ciągu tygodnia → większość metod. Gotowa czekać → K-tip (najdłuższy czas montażu).",
    },
    {
      q: "Jaki jest styl życia klientki?",
      a: "Aktywna bywalczyni siłowni → Tape-ins lub K-tips (bezpieczne wiązania). Częste pływanie → K-tips. Tylko okazjonalne wyjścia → Clip-ins lub Tape-ins.",
    },
  ],
  ctaHeading: "Zapewnij wszystkie rodzaje przedłużeń dla swojego salonu",
  ctaText:
    "D.S Hair Beauty dostarcza wszystkie pięć rodzajów przedłużeń w hurtowych cenach trade. Otwórz darmowe konto trade i zaopatruj się u jednego zaufanego dostawcy z UK.",
  ctaPrimaryLabel: "Otwórz konto trade →",
  ctaPrimaryHref: "/salon-partners",
  ctaSecondaryLabel: "Przeglądaj wszystkie produkty",
  ctaSecondaryHref: "/collections/tape-in",
  relatedCard1: {
    eyebrow: "Powiązany artykuł",
    title: "Przedłużenia włosów hurtowo UK: przewodnik właściciela salonu",
    href: "/blog/wholesale-hair-extensions-uk",
  },
  relatedCard2: {
    eyebrow: "Powiązany przewodnik",
    title: "Jak wybrać dostawcę przedłużeń włosów",
    href: "/blog/how-to-choose-hair-extension-supplier",
  },
  backLabel: "Wróć do bloga",
  faqHeading: "Najczęściej zadawane pytania",
  faqs: [
    {
      q: "Jakie są główne rodzaje przedłużeń włosów?",
      a: "Główne profesjonalne rodzaje to tape-in, K-tip (wiązanie keratynowe), nano ring / I-tip, hand-tied i weft maszynowy, butterfly weft, clip-in, hair toppers oraz kucyki / grzywki. Każdy pasuje do innych typów włosów, budżetów i celów klientek.",
    },
    {
      q: "Który rodzaj przedłużeń jest najlepszy dla początkujących?",
      a: "Dla salonów tape-in i nano ring są najłatwiejsze do nauczenia i aplikacji i pasują do większości klientek. Dla klientek chcących samodzielnego montażu w domu clip-ins i toppers to najprostszy punkt wejścia, bez żadnego profesjonalnego szkolenia.",
    },
    {
      q: "Jaka jest różnica między przedłużeniami tymczasowymi a półtrwałymi?",
      a: "Metody tymczasowe (clip-in, kucyk, grzywka) są usuwane codziennie i nie wymagają wizyty w salonie. Metody półtrwałe (tape-in, nano, K-tip, weft) są zakładane przez stylistę i noszone tygodniami z przesunięciami — tworzą powtarzalne przychody salonu.",
    },
    {
      q: "Jak wybrać rodzaj przedłużenia dla mojej klientki?",
      a: "Dopasuj do typu włosów, stylu życia i budżetu: cienkie włosy pasują do nano lub hand-tied weft; klientki chcące zero zobowiązań pasują do clip-ins; te, które chcą długiego noszenia, do K-tip lub weft. Nasz przewodnik porównujący metody omawia kompromisy.",
    },
  ],
}

export const hairExtensionTypesGuideContent: Record<Locale, HairExtensionTypesGuideContent> = {
  en,
  de,
  fr,
  ar,
  sv,
  pl,
}
