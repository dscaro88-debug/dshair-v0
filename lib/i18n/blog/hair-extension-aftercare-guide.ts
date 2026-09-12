import type { Locale } from "@/lib/i18n/config"

// Content module for the "Hair Extension Aftercare" blog post.
// All visible English copy is externalised here so the page can be rendered
// in any of the 6 locales with an identical layout. The English page
// (locale="en") renders exactly the same JSX it always did.

export interface HairExtensionAftercareGuideContent {
  seoTitle: string
  seoDescription: string
  jsonLdHeadline: string
  jsonLdDescription: string
  heroBadge: string
  heroTitleLine1: string
  heroTitleLine2: string
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
  firstHeading: string
  firstP: string
  firstChecklistHeading: string
  firstChecklist: string[]
  washHeading: string
  washP: string
  doHeading: string
  doItems: string[]
  dontHeading: string
  dontItems: string[]
  sleepHeading: string
  sleepP: string
  sleepItems: { title: string; desc: string }[]
  brushHeading: string
  brushP: string
  brushTechniqueHeading: string
  brushSteps: string[]
  productsHeading: string
  productsP: string
  products: { name: string; desc: string; price: string }[]
  productsCtaLabel: string
  productsCtaHref: string
  maintenanceHeading: string
  maintenanceP: string
  maintenanceTable: {
    headers: string[]
    rows: { type: string; tighten: string; replace: string }[]
  }
  ctaBoxTitle: string
  ctaBoxBody: string
  ctaBoxPrimaryLabel: string
  ctaBoxPrimaryHref: string
  ctaBoxSecondaryLabel: string
  ctaBoxSecondaryHref: string
  faqHeading: string
  faqs: { q: string; a: string }[]
}

const en: HairExtensionAftercareGuideContent = {
  seoTitle: "Hair Extension Aftercare: Complete Guide for UK Clients & Salons | D.S HAIR & BEAUTY",
  seoDescription:
    "Expert hair extension aftercare guide. Learn how to wash, brush, sleep, and maintain your extensions so they last up to 24 months. Includes product recommendations for UK clients.",
  jsonLdHeadline: "Hair Extension Aftercare: Complete Guide for UK Clients & Salons",
  jsonLdDescription:
    "Expert hair extension aftercare guide. Learn how to wash, brush, sleep, and maintain your extensions so they last up to 24 months.",
  heroBadge: "Care Guide 2026",
  heroTitleLine1: "Hair Extension Aftercare:",
  heroTitleLine2: "Make Them Last Up to 24 Months",
  heroSubtitle:
    "The way you care for extensions in the first 48 hours — and every day after — determines how long they last. This guide covers everything UK clients and stylists need to know.",
  ctaPrimaryLabel: "Shop Aftercare Products",
  ctaPrimaryHref: "/collections/extension-care",
  ctaSecondaryLabel: "Shop Clip-Ins",
  ctaSecondaryHref: "/collections/clip-in",
  stats: [
    { num: "24 mo", label: "max clip-in lifespan" },
    { num: "48 hrs", label: "before first wash" },
    { num: "3x/wk", label: "max washing frequency" },
    { num: "Silk", label: "pillowcase recommended" },
  ],
  breadcrumb: "Back to Blog",
  metaCategory: "Care Guide",
  metaDate: "Updated May 2026",
  metaReadTime: "9 min read",
  firstHeading: "The First 48 Hours: Setting the Foundation",
  firstP:
    "What you do immediately after getting extensions makes a huge difference to how long they last. The bonds (tape, keratin, nano rings) need time to fully set and cure.",
  firstChecklistHeading: "First 48 Hours Checklist",
  firstChecklist: [
    "⛔ Don't wash hair — let bonds fully cure",
    "⛔ Avoid swimming, saunas, and steam rooms",
    "⛔ Don't tie hair up in a tight ponytail or bun",
    "✅ Sleep on a silk or satin pillowcase",
    "✅ Gently brush with an extension-safe brush twice daily",
    "✅ Keep hands away from bonds (don't touch tape or keratin tips)",
  ],
  washHeading: "How to Wash Extensions Correctly",
  washP:
    "Washing extensions is where most clients go wrong. Too often, the wrong products or techniques cause matting at the roots — the #1 cause of early extension removal.",
  doHeading: "Do",
  doItems: [
    "Use sulfate-free, extension-safe shampoo",
    "Wash in a downward motion — never scrub up",
    "Apply conditioner from mid-length to ends only",
    "Pat dry with a microfibre towel",
    "Detangle gently with a wide-tooth comb while damp",
    "Apply heat protection before any styling",
  ],
  dontHeading: "Don't",
  dontItems: [
    "Don't use regular supermarket shampoo (too harsh)",
    "Don't massage the scalp near bonds vigorously",
    "Don't apply conditioner near tape or keratin bonds",
    "Don't wring or twist extensions when drying",
    "Don't use a regular hairbrush on wet extensions",
    "Don't sleep with wet hair — always dry first",
  ],
  sleepHeading: "Sleeping with Hair Extensions",
  sleepP:
    "Extensions rub against your pillow all night, causing friction that leads to tangling and matting. A few simple changes can prevent this entirely.",
  sleepItems: [
    { title: "Silk or satin pillowcase", desc: "Reduces friction by up to 75% compared to cotton. The single most impactful change." },
    { title: "Tie hair in a loose, low braid or ponytail", desc: "Keeps extensions contained and prevents them from shifting under your head." },
    { title: "Loose top knot (if comfortable)", desc: "Works well for longer clip-in wearers. Use a silk scrunchie, never elastic bands." },
    { title: "Brush before bed", desc: "Use an extension brush to gently detangle any knots before sleeping." },
  ],
  brushHeading: "The Right Way to Brush Extensions",
  brushP:
    "Always use a brush specifically designed for extensions — usually a loop brush or a detangling comb with ball-tipped bristles. Standard brushes can pull out hair and damage bonds.",
  brushTechniqueHeading: "Brushing Technique",
  brushSteps: [
    "Start from the ends — never the roots",
    "Work in small sections, holding the bond firmly with one hand",
    "Gently work out tangles from ends upward",
    "Brush at least twice daily: morning and before bed",
    "Never brush when hair is soaking wet — pat dry first",
  ],
  productsHeading: "Recommended Aftercare Products",
  productsP:
    "Using the right products can double the lifespan of your extensions. We stock a curated range of salon-grade aftercare products, all extension-safe and tested.",
  products: [
    { name: "Extension-Safe Shampoo", desc: "Sulfate-free, pH-balanced formula designed for bonded and taped extensions", price: "From £12" },
    { name: "Deep Conditioner", desc: "Intensive moisture treatment for dry or colour-treated extension hair", price: "From £14" },
    { name: "Detangling Spray", desc: "Lightweight detangling formula that prevents matting without weighing hair down", price: "From £10" },
    { name: "Extension-Safe Brush", desc: "Ball-tipped loop bristles, designed for gentle daily detangling", price: "From £8" },
    { name: "Heat Protection Spray", desc: "Thermal protection up to 230°C — essential for any heat styling", price: "From £12" },
    { name: "Silk Scrunchies (x3)", desc: "Gentle on extensions, prevents creasing and pulling", price: "From £9" },
  ],
  productsCtaLabel: "Shop All Aftercare Products",
  productsCtaHref: "/collections/extension-care",
  maintenanceHeading: "Salon Maintenance Schedule",
  maintenanceP:
    "For professional extensions (tape-in, keratin, nano ring), clients should return to the salon at regular intervals for maintenance.",
  maintenanceTable: {
    headers: ["Extension Type", "Re-tightening", "Full Removal/Replace"],
    rows: [
      { type: "Tape-In", tighten: "Every 4–6 weeks", replace: "Every 3–4 months" },
      { type: "K-Tip / Keratin Bond", tighten: "Every 6–8 weeks", replace: "Every 4–6 months" },
      { type: "Nano Ring", tighten: "Every 6–8 weeks", replace: "Every 4–6 months" },
      { type: "Weft (Sewn-in)", tighten: "Every 6–8 weeks", replace: "Every 3–4 months" },
      { type: "Clip-In", tighten: "N/A — self-service", replace: "Replace every 12–24 months" },
    ],
  },
  ctaBoxTitle: "Stock the Right Aftercare Products",
  ctaBoxBody:
    "Offer your clients salon-grade aftercare products. Wholesale pricing available for trade accounts — order today.",
  ctaBoxPrimaryLabel: "Open Trade Account",
  ctaBoxPrimaryHref: "/trade-wholesale",
  ctaBoxSecondaryLabel: "Shop Aftercare Range",
  ctaBoxSecondaryHref: "/collections/extension-care",
  faqHeading: "Frequently Asked Questions",
  faqs: [
    { q: "How do I care for hair extensions?", a: "Use sulphate-free shampoo and conditioner, a specialist loop brush, and avoid oily products near bonds or tapes. Sleep with hair loosely tied or on a silk pillowcase, and follow the method's maintenance schedule (move-ups every 6–12 weeks)." },
    { q: "What products should extension clients use?", a: "Sulphate-free shampoo and conditioner, a loop/extension brush, a silk pillowcase, and a leave-in or heat-protectant as needed. Selling the right aftercare kit at the appointment protects the result and drives a high-margin retail re-order." },
    { q: "How often should extensions be maintained?", a: "Tape-in and nano typically need a move-up every 6–8 weeks; K-tip and weft every 8–12 weeks as natural hair grows. Booking these in advance keeps columns full and builds predictable recurring revenue." },
    { q: "Can clients wash and heat-style extensions?", a: "Yes — 100% Remy human hair extensions can be washed, conditioned, and heat-styled like natural hair. Recommend sulphate-free products and heat protection, and avoid oil-based products near bonds or adhesive." },
  ],
}

const de: HairExtensionAftercareGuideContent = {
  seoTitle: "Haarverlängerung Pflege: Kompletter Leitfaden für UK-Kunden & Salons | D.S HAIR & BEAUTY",
  seoDescription:
    "Experten-Leitfaden zur Pflege von Haarverlängerungen. Lernen Sie, wie Sie Ihre Extensions waschen, kämmen, schlafen und pflegen, damit sie bis zu 24 Monate halten. Inklusive Produktempfehlungen für UK-Kunden.",
  jsonLdHeadline: "Haarverlängerung Pflege: Kompletter Leitfaden für UK-Kunden & Salons",
  jsonLdDescription:
    "Experten-Leitfaden zur Pflege von Haarverlängerungen. Lernen Sie, wie Sie Ihre Extensions waschen, kämmen, schlafen und pflegen, damit sie bis zu 24 Monate halten.",
  heroBadge: "Pflege-Ratgeber 2026",
  heroTitleLine1: "Pflege für Haarverlängerungen:",
  heroTitleLine2: "Bis zu 24 Monate Halt",
  heroSubtitle:
    "Wie Sie Extensions in den ersten 48 Stunden — und jeden Tag danach — pflegen, bestimmt, wie lange sie halten. Dieser Leitfaden deckt alles ab, was UK-Kunden und Stylisten wissen müssen.",
  ctaPrimaryLabel: "Pflegeprodukte shoppen",
  ctaPrimaryHref: "/collections/extension-care",
  ctaSecondaryLabel: "Clip-Ins shoppen",
  ctaSecondaryHref: "/collections/clip-in",
  stats: [
    { num: "24 Mo", label: "max. Clip-In-Lebensdauer" },
    { num: "48 Std.", label: "bis zur ersten Wäsche" },
    { num: "3x/Wo", label: "max. Waschhäufigkeit" },
    { num: "Seide", label: "Kissenbezug empfohlen" },
  ],
  breadcrumb: "Zurück zum Blog",
  metaCategory: "Pflege-Ratgeber",
  metaDate: "Aktualisiert Mai 2026",
  metaReadTime: "9 Min. Lesezeit",
  firstHeading: "Die ersten 48 Stunden: Das Fundament legen",
  firstP:
    "Was Sie direkt nach dem Einsetzen der Extensions tun, macht einen großen Unterschied für ihre Haltbarkeit. Die Bonds (tape, Keratin, nano rings) brauchen Zeit, um vollständig auszuhärten.",
  firstChecklistHeading: "Checkliste für die ersten 48 Stunden",
  firstChecklist: [
    "⛔ Haar nicht waschen — Bonds vollständig aushärten lassen",
    "⛔ Schwimmen, Sauna und Dampfbäder vermeiden",
    "⛔ Haar nicht zum engen Pferdeschwanz oder Dutt binden",
    "✅ Auf Seiden- oder Satinkissenbezug schlafen",
    "✅ Zweimal täglich sanft mit extensionsicherer Bürste kämmen",
    "✅ Hände von den Bonds lassen (tape oder Keratin-Spitzen nicht berühren)",
  ],
  washHeading: "So waschen Sie Extensions richtig",
  washP:
    "Beim Waschen der Extensions machen die meisten Kunden Fehler. Zu oft verursachen falsche Produkte oder Techniken Verfilzungen an den Ansätzen — die Ursache Nr. 1 für vorzeitiges Entfernen.",
  doHeading: "Richtig",
  doItems: [
    "Sulfatfreies, extensionsicheres Shampoo verwenden",
    "In Abwärtsbewegung waschen — niemals hochschrubben",
    "Conditioner nur von der Mitte bis zu den Spitzen auftragen",
    "Mit einem Mikrofaserhandtuch trocken tupfen",
    "Im feuchten Zustand sanft mit grobzinkigem Kamm entwirren",
    "Vor jedem Styling Hitzeschutz auftragen",
  ],
  dontHeading: "Nicht",
  dontItems: [
    "Kein normales Supermarktshampoo verwenden (zu aggressiv)",
    "Kopfhaut nahe der Bonds nicht kräftig massieren",
    "Keinen Conditioner an tape- oder Keratin-Bonds auftragen",
    "Extensions beim Trocknen nicht auswringen oder verdrehen",
    "Keine normale Haarbürste an nassen Extensions verwenden",
    "Nicht mit nassem Haar schlafen — immer erst trocknen",
  ],
  sleepHeading: "Mit Haarverlängerungen schlafen",
  sleepP:
    "Extensions reiben die ganze Nacht am Kissen und erzeugen Reibung, die zu Verfilzungen und Verknotungen führt. Ein paar einfache Änderungen können das vollständig verhindern.",
  sleepItems: [
    { title: "Seiden- oder Satinkissenbezug", desc: "Reduziert die Reibung um bis zu 75% im Vergleich zu Baumwolle. Die wirkungsvollste Änderung überhaupt." },
    { title: "Haar zu einem lockeren, tiefen Zopf binden", desc: "Hält die Extensions beisammen und verhindert, dass sie sich unter dem Kopf verschieben." },
    { title: "Lockerer hoher Dutt (falls bequem)", desc: "Funktioniert gut bei längeren Clip-Ins. Ein Seiden-Scrunchie verwenden, niemals Haargummis." },
    { title: "Vor dem Schlafen kämmen", desc: "Mit einer Extensions-Bürste sanft alle Knoten lösen, bevor Sie schlafen gehen." },
  ],
  brushHeading: "Extensions richtig kämmen",
  brushP:
    "Verwenden Sie immer eine speziell für Extensions entwickelte Bürste — meist eine Loop-Bürste oder einen Entwirrungskamm mit Kugelspitzen. Normale Bürsten können Haare ausreißen und Bonds beschädigen.",
  brushTechniqueHeading: "Kämmtechnik",
  brushSteps: [
    "Von den Spitzen beginnen — niemals an den Ansätzen",
    "In kleinen Abschnitten arbeiten, den Bond fest mit einer Hand halten",
    "Verknotungen sanft von den Spitzen nach oben lösen",
    "Mindestens zweimal täglich kämmen: morgens und vor dem Schlafen",
    "Niemals bei klatschnassem Haar kämmen — erst trocken tupfen",
  ],
  productsHeading: "Empfohlene Pflegeprodukte",
  productsP:
    "Die richtigen Produkte können die Lebensdauer Ihrer Extensions verdoppeln. Wir führen eine kuratierte Auswahl salonqualitativer Pflegeprodukte — alle extensionsicher und getestet.",
  products: [
    { name: "Extensionsicheres Shampoo", desc: "Sulfatfreie, pH-ausgeglichene Formel für geklebte und getapte Extensions", price: "Ab £12" },
    { name: "Intensiv-Kur", desc: "Intensive Feuchtigkeitsbehandlung für trockenes oder coloriertes Extension-Haar", price: "Ab £14" },
    { name: "Entwirrungsspray", desc: "Leichte Entwirrungsformel, die Verfilzungen verhindert, ohne das Haar zu beschweren", price: "Ab £10" },
    { name: "Extensionsichere Bürste", desc: "Loop-Borsten mit Kugelspitzen für sanftes tägliches Entwirren", price: "Ab £8" },
    { name: "Hitzeschutzspray", desc: "Thermoschutz bis 230°C — unverzichtbar für jedes Hitzestyling", price: "Ab £12" },
    { name: "Seiden-Scrunchies (x3)", desc: "Sanft zu Extensions, verhindert Knicke und Ziehen", price: "Ab £9" },
  ],
  productsCtaLabel: "Alle Pflegeprodukte shoppen",
  productsCtaHref: "/collections/extension-care",
  maintenanceHeading: "Pflegeintervall für den Salon",
  maintenanceP:
    "Bei professionellen Extensions (tape-in, Keratin, nano ring) sollten Kunden in regelmäßigen Abständen zur Wartung in den Salon zurückkehren.",
  maintenanceTable: {
    headers: ["Extension-Typ", "Nachsetzen", "Komplett entfernen/ersetzen"],
    rows: [
      { type: "Tape-In", tighten: "Alle 4–6 Wochen", replace: "Alle 3–4 Monate" },
      { type: "K-Tip / Keratin-Bond", tighten: "Alle 6–8 Wochen", replace: "Alle 4–6 Monate" },
      { type: "Nano Ring", tighten: "Alle 6–8 Wochen", replace: "Alle 4–6 Monate" },
      { type: "Weft (eingenäht)", tighten: "Alle 6–8 Wochen", replace: "Alle 3–4 Monate" },
      { type: "Clip-In", tighten: "N/A — selbst anzuwenden", replace: "Alle 12–24 Monate ersetzen" },
    ],
  },
  ctaBoxTitle: "Führen Sie die richtigen Pflegeprodukte",
  ctaBoxBody:
    "Bieten Sie Ihren Kunden salonqualitative Pflegeprodukte an. Großhandelspreise für Handelskonten verfügbar — bestellen Sie noch heute.",
  ctaBoxPrimaryLabel: "Handelskonto eröffnen",
  ctaBoxPrimaryHref: "/trade-wholesale",
  ctaBoxSecondaryLabel: "Pflegesortiment shoppen",
  ctaBoxSecondaryHref: "/collections/extension-care",
  faqHeading: "Häufig gestellte Fragen",
  faqs: [
    { q: "Wie pflege ich Haarverlängerungen?", a: "Verwenden Sie sulfatfreies Shampoo und Conditioner, eine spezielle Loop-Bürste und vermeiden Sie ölige Produkte an Bonds oder Tapes. Schlafen Sie mit locker gebundenem Haar oder auf einem Seidenkissenbezug und folgen Sie dem Wartungsplan der Methode (Nachsetzen alle 6–12 Wochen)." },
    { q: "Welche Produkte sollten Extensions-Kunden verwenden?", a: "Sulfatfreies Shampoo und Conditioner, eine Loop-/Extensions-Bürste, ein Seidenkissenbezug sowie bei Bedarf Leave-in oder Hitzeschutz. Der Verkauf des passenden Pflegesets beim Termin schützt das Ergebnis und schafft einen margenstarken Retail-Wiederbestellumsatz." },
    { q: "Wie oft müssen Extensions gewartet werden?", a: "tape-in und nano benötigen typischerweise alle 6–8 Wochen ein Nachsetzen; K-tip und weft alle 8–12 Wochen, je nach Haarwachstum. Diese Termine im Voraus zu buchen hält die Terminspalten voll und schafft planbare, wiederkehrende Einnahmen." },
    { q: "Können Kunden Extensions waschen und hitzestylen?", a: "Ja — Extensions aus 100% Remy Echthaar können wie Naturhaar gewaschen, konditioniert und hitzestylt werden. Empfehlen Sie sulfatfreie Produkte und Hitzeschutz und vermeiden Sie ölhaltige Produkte an Bonds oder Kleber." },
  ],
}

const fr: HairExtensionAftercareGuideContent = {
  seoTitle: "Entretien des Extensions de Cheveux : Guide complet pour les clientes et salons UK | D.S HAIR & BEAUTY",
  seoDescription:
    "Guide expert d'entretien des extensions capillaires. Apprenez à laver, brosser, dormir et entretenir vos extensions pour qu'elles durent jusqu'à 24 mois. Avec des recommandations produits pour les clientes UK.",
  jsonLdHeadline: "Entretien des Extensions de Cheveux : Guide complet pour les clientes et salons UK",
  jsonLdDescription:
    "Guide expert d'entretien des extensions capillaires. Apprenez à laver, brosser, dormir et entretenir vos extensions pour qu'elles durent jusqu'à 24 mois.",
  heroBadge: "Guide d'entretien 2026",
  heroTitleLine1: "Entretien des extensions :",
  heroTitleLine2: "Faites-les durer jusqu'à 24 mois",
  heroSubtitle:
    "La façon dont vous entretenez vos extensions les premières 48 heures — et chaque jour ensuite — détermine leur durée de vie. Ce guide couvre tout ce que les clientes et coiffeurs UK doivent savoir.",
  ctaPrimaryLabel: "Boutique Produits d'entretien",
  ctaPrimaryHref: "/collections/extension-care",
  ctaSecondaryLabel: "Boutique Clip-Ins",
  ctaSecondaryHref: "/collections/clip-in",
  stats: [
    { num: "24 mois", label: "durée de vie max. des clip-ins" },
    { num: "48 h", label: "avant le premier lavage" },
    { num: "3x/sem", label: "fréquence de lavage max." },
    { num: "Soie", label: "taie d'oreiller recommandée" },
  ],
  breadcrumb: "Retour au Blog",
  metaCategory: "Guide d'entretien",
  metaDate: "Mis à jour mai 2026",
  metaReadTime: "9 min de lecture",
  firstHeading: "Les premières 48 heures : poser les fondations",
  firstP:
    "Ce que vous faites immédiatement après la pose des extensions change énormément leur durée de vie. Les bonds (tape, kératine, nano rings) ont besoin de temps pour bien se fixer et durcir.",
  firstChecklistHeading: "Check-list des 48 premières heures",
  firstChecklist: [
    "⛔ Ne pas laver les cheveux — laissez les bonds durcir complètement",
    "⛔ Éviter la piscine, les saunas et les hammams",
    "⛔ Ne pas attacher les cheveux en queue de cheval ou chignon serré",
    "✅ Dormir sur une taie d'oreiller en soie ou satin",
    "✅ Brosser doucement deux fois par jour avec une brosse adaptée aux extensions",
    "✅ Garder les mains loin des bonds (ne pas toucher les tape ni les pointes kératine)",
  ],
  washHeading: "Comment laver correctement les extensions",
  washP:
    "Le lavage est l'étape où la plupart des clientes se trompent. Trop souvent, de mauvais produits ou de mauvaises techniques provoquent des nœuds aux racines — la cause n°1 du retrait prématuré.",
  doHeading: "À faire",
  doItems: [
    "Utiliser un shampoing sans sulfate, adapté aux extensions",
    "Laver dans un mouvement descendant — ne jamais frotter vers le haut",
    "Appliquer le soin uniquement des mi-longueurs aux pointes",
    "Sécher en tamponnant avec une serviette microfibre",
    "Démêler doucement au peigne à dents larges quand c'est humide",
    "Appliquer une protection thermique avant tout coiffage",
  ],
  dontHeading: "À éviter",
  dontItems: [
    "Ne pas utiliser de shampoing de supermarché standard (trop agressif)",
    "Ne pas masser vigoureusement le cuir chevelu près des bonds",
    "Ne pas appliquer de soin près des bonds tape ou kératine",
    "Ne pas tordre ni essorer les extensions au séchage",
    "Ne pas utiliser une brosse classique sur extensions mouillées",
    "Ne pas dormir les cheveux mouillés — toujours sécher d'abord",
  ],
  sleepHeading: "Dormir avec des extensions de cheveux",
  sleepP:
    "Les extensions frottent contre votre oreiller toute la nuit, créant une friction qui mène aux nœuds et aux enchevêtrements. Quelques changements simples suffisent à l'éviter.",
  sleepItems: [
    { title: "Taie d'oreiller en soie ou satin", desc: "Réduit la friction jusqu'à 75% par rapport au coton. Le changement le plus impactant." },
    { title: "Attacher les cheveux en tresse basse lâche", desc: "Maintient les extensions regroupées et les empêche de bouger sous votre tête." },
    { title: "Chignon haut lâche (si confortable)", desc: "Convient bien aux porteuses de clip-ins longs. Utiliser un scrunchie en soie, jamais d'élastiques." },
    { title: "Brosser avant de dormir", desc: "Utiliser une brosse à extensions pour démêler doucement les nœuds avant le coucher." },
  ],
  brushHeading: "La bonne façon de brosser les extensions",
  brushP:
    "Utilisez toujours une brosse spécialement conçue pour les extensions — généralement une brosse boucle ou un peigne démêlant à pointes boules. Les brosses classiques peuvent arracher les cheveux et endommager les bonds.",
  brushTechniqueHeading: "Technique de brossage",
  brushSteps: [
    "Commencer par les pointes — jamais par les racines",
    "Travailler en petites sections, en tenant le bond fermement d'une main",
    "Démêler doucement les nœuds des pointes vers le haut",
    "Brosser au moins deux fois par jour : matin et avant le coucher",
    "Ne jamais brosser des cheveux trempés — tamponner d'abord",
  ],
  productsHeading: "Produits d'entretien recommandés",
  productsP:
    "Utiliser les bons produits peut doubler la durée de vie de vos extensions. Nous proposons une gamme sélectionnée de produits d'entretien qualité salon, tous adaptés et testés.",
  products: [
    { name: "Shampoing adapté aux extensions", desc: "Formule sans sulfate, pH équilibré, conçue pour les extensions collées et scotchées", price: "À partir de £12" },
    { name: "Soin profond", desc: "Traitement hydratant intensif pour cheveux secs ou colorés", price: "À partir de £14" },
    { name: "Spray démêlant", desc: "Formule légère qui évite les nœuds sans alourdir les cheveux", price: "À partir de £10" },
    { name: "Brosse adaptée aux extensions", desc: "Boucles à pointes boules, conçues pour un démêlage quotidien doux", price: "À partir de £8" },
    { name: "Spray protection thermique", desc: "Protection thermique jusqu'à 230°C — essentielle pour tout coiffage à la chaleur", price: "À partir de £12" },
    { name: "Scrunchies en soie (x3)", desc: "Doux pour les extensions, évite plis et tirage", price: "À partir de £9" },
  ],
  productsCtaLabel: "Voir tous les produits d'entretien",
  productsCtaHref: "/collections/extension-care",
  maintenanceHeading: "Calendrier d'entretien en salon",
  maintenanceP:
    "Pour les extensions professionnelles (tape-in, kératine, nano ring), les clientes doivent revenir au salon à intervalles réguliers pour l'entretien.",
  maintenanceTable: {
    headers: ["Type d'extension", "Resserrage", "Retrait/remplacement complet"],
    rows: [
      { type: "Tape-In", tighten: "Toutes les 4–6 semaines", replace: "Tous les 3–4 mois" },
      { type: "K-Tip / Bond kératine", tighten: "Toutes les 6–8 semaines", replace: "Tous les 4–6 mois" },
      { type: "Nano Ring", tighten: "Toutes les 6–8 semaines", replace: "Tous les 4–6 mois" },
      { type: "Weft (cousu)", tighten: "Toutes les 6–8 semaines", replace: "Tous les 3–4 mois" },
      { type: "Clip-In", tighten: "N/A — libre-service", replace: "Remplacer tous les 12–24 mois" },
    ],
  },
  ctaBoxTitle: "Proposez les bons produits d'entretien",
  ctaBoxBody:
    "Offrez à vos clientes des produits d'entretien qualité salon. Tarifs de gros disponibles pour les comptes pro — commandez aujourd'hui.",
  ctaBoxPrimaryLabel: "Ouvrir un compte professionnel",
  ctaBoxPrimaryHref: "/trade-wholesale",
  ctaBoxSecondaryLabel: "Voir la gamme d'entretien",
  ctaBoxSecondaryHref: "/collections/extension-care",
  faqHeading: "Questions Fréquemment Posées",
  faqs: [
    { q: "Comment entretenir mes extensions de cheveux ?", a: "Utilisez un shampoing et un soin sans sulfate, une brosse boucle spécialisée, et évitez les produits gras près des bonds ou des tape. Dormez avec les cheveux lâchement attachés ou sur une taie en soie, et suivez le calendrier d'entretien de la méthode (repositionnements toutes les 6–12 semaines)." },
    { q: "Quels produits les clientes d'extensions doivent-elles utiliser ?", a: "Shampoing et soin sans sulfate, une brosse boucle/extensions, une taie d'oreiller en soie et, selon les besoins, un soin sans rinçage ou une protection thermique. Vendre le bon kit d'entretien au rendez-vous protège le résultat et génère une commande retail à forte marge." },
    { q: "À quelle fréquence faut-il entretenir les extensions ?", a: "Le tape-in et le nano nécessitent généralement un repositionnement toutes les 6–8 semaines ; le K-tip et le weft toutes les 8–12 semaines selon la pousse. Réserver ces rendez-vous à l'avance remplit les créneaux et crée un revenu récurrent prévisible." },
    { q: "Les clientes peuvent-elles laver et coiffer au fer leurs extensions ?", a: "Oui — les extensions 100% cheveux Remy peuvent être lavées, conditionnées et coiffées à la chaleur comme des cheveux naturels. Recommandez des produits sans sulfate et une protection thermique, et évitez les produits à base d'huile près des bonds ou de l'adhésif." },
  ],
}

const ar: HairExtensionAftercareGuideContent = {
  seoTitle: "العناية بوصلات الشعر: دليل شامل للعميلات والصالونات في UK | D.S HAIR & BEAUTY",
  seoDescription:
    "دليل خبير للعناية بوصلات الشعر. تعلّم كيف تغسل وتسرّح وتنام وتحافظ على وصلاتك لتدوم حتى 24 شهراً. يتضمن توصيات منتجات للعميلات في UK.",
  jsonLdHeadline: "العناية بوصلات الشعر: دليل شامل للعميلات والصالونات في UK",
  jsonLdDescription:
    "دليل خبير للعناية بوصلات الشعر. تعلّم كيف تغسل وتسرّح وتنام وتحافظ على وصلاتك لتدوم حتى 24 شهراً.",
  heroBadge: "دليل العناية 2026",
  heroTitleLine1: "العناية بوصلات الشعر:",
  heroTitleLine2: "اجعلها تدوم حتى 24 شهراً",
  heroSubtitle:
    "الطريقة التي تعتني بها بوصلاتك في أول 48 ساعة — وكل يوم بعد ذلك — تحدد مدة بقائها. يغطي هذا الدليل كل ما تحتاج العميلات والمصففون في UK إلى معرفته.",
  ctaPrimaryLabel: "تسوق منتجات العناية",
  ctaPrimaryHref: "/collections/extension-care",
  ctaSecondaryLabel: "تسوق Clip-Ins",
  ctaSecondaryHref: "/collections/clip-in",
  stats: [
    { num: "24 شهراً", label: "أقصى عمر للـ Clip-In" },
    { num: "48 ساعة", label: "قبل أول غسلة" },
    { num: "3x/أسبوع", label: "أقصى تكرار للغسيل" },
    { num: "حرير", label: "كيس وسادة موصى به" },
  ],
  breadcrumb: "العودة إلى المدونة",
  metaCategory: "دليل العناية",
  metaDate: "تم التحديث مايو 2026",
  metaReadTime: "9 دقائق قراءة",
  firstHeading: "أول 48 ساعة: وضع الأساس",
  firstP:
    "ما تفعلينه مباشرة بعد تركيب الوصلات يحدث فرقاً كبيراً في مدة بقائها. تحتاج الوصلات (tape والكيراتين وnano rings) إلى وقت لتثبت وتجف تماماً.",
  firstChecklistHeading: "قائمة فحص أول 48 ساعة",
  firstChecklist: [
    "⛔ لا تغسلي الشعر — اتركي الوصلات تجف تماماً",
    "⛔ تجنبي السباحة والساونا وغرف البخار",
    "⛔ لا تربطي الشعر بذيل حصان مشدود أو كعكة",
    "✅ نامي على كيس وسادة من الحرير أو الساتان",
    "✅ سرّحي بلطف مرتين يومياً بفرشاة آمنة للوصلات",
    "✅ أبقِ يديك بعيداً عن الوصلات (لا تلمسي الـ tape أو أطراف الكيراتين)",
  ],
  washHeading: "كيف تغسلين الوصلات بشكل صحيح",
  washP:
    "غسل الوصلات هو المكان الذي تخطئ فيه معظم العميلات. في كثير من الأحيان، تسبب المنتجات أو التقنيات الخاطئة تشابكاً عند الجذور — السبب الأول للإزالة المبكرة.",
  doHeading: "افعلي",
  doItems: [
    "استخدمي شامبو خالياً من الكبريتات وآمناً للوصلات",
    "اغسلي بحركة نزولية — لا تفركي نحو الأعلى أبداً",
    "ضعي البلسم من منتصف الطول إلى الأطراف فقط",
    "جففي بالتربيت بمنشفة من الألياف الدقيقة",
    "فكي التشابك بلطف بمشط واسع الأسنان بينما الشعر رطب",
    "ضعي حماية حرارية قبل أي تصفيف بالحرارة",
  ],
  dontHeading: "لا تفعلي",
  dontItems: [
    "لا تستخدمي شامبو السوبر ماركت العادي (قاسٍ جداً)",
    "لا تدلكي فروة الرأس بقوة قرب الوصلات",
    "لا تضعي بلسماً قرب وصلات الـ tape أو الكيراتين",
    "لا تعصري أو تلفي الوصلات أثناء التجفيف",
    "لا تستخدمي فرشاة عادية على الوصلات المبللة",
    "لا تنامي بشعر مبلل — جففيه أولاً دائماً",
  ],
  sleepHeading: "النوم مع وصلات الشعر",
  sleepP:
    "تحتك الوصلات بوسادتك طوال الليل، ما يسبب احتكاكاً يؤدي إلى التشابك والتكتل. بضعة تغييرات بسيطة يمكنها منع ذلك تماماً.",
  sleepItems: [
    { title: "كيس وسادة من الحرير أو الساتان", desc: "يقلل الاحتكاك بنسبة تصل إلى 75% مقارنة بالقطن. التغيير الأكثر تأثيراً على الإطلاق." },
    { title: "اربطي الشعر بضفيرة أو ذيل حصان منخفض فضفاض", desc: "يحفظ الوصلات في مكانها ويمنع انزلاقها تحت رأسك." },
    { title: "كعكة علوية فضفاضة (إن كانت مريحة)", desc: "تعمل جيداً لمن يرتدين Clip-Ins أطول. استخدمي ربطة حرير، وليس أشرطة مطاطية أبداً." },
    { title: "سرّحي قبل النوم", desc: "استخدمي فرشاة وصلات لفك أي تشابك بلطف قبل النوم." },
  ],
  brushHeading: "الطريقة الصحيحة لتمشيط الوصلات",
  brushP:
    "استخدمي دائماً فرشاة مصممة خصيصاً للوصلات — عادة فرشاة حلقية أو مشطاً لفك التشابك بأطراف كروية. الفرش العادية يمكنها انتزاع الشعر وإتلاف الوصلات.",
  brushTechniqueHeading: "تقنية التمشيط",
  brushSteps: [
    "ابدئي من الأطراف — لا من الجذور أبداً",
    "اعملي في أقسام صغيرة، ممسكة الوصلة بإحكام بيد واحدة",
    "فكي التشابك بلطف من الأطراف نحو الأعلى",
    "سرّحي مرتين على الأقل يومياً: صباحاً وقبل النوم",
    "لا تمشطي أبداً والشعر مبتل تماماً — جففيه بالتربيت أولاً",
  ],
  productsHeading: "منتجات العناية الموصى بها",
  productsP:
    "استخدام المنتجات الصحيحة يمكن أن يضاعف عمر وصلاتك. نوفر تشكيلة منتقاة من منتجات العناية بجودة الصالون، جميعها آمنة للوصلات ومختبرة.",
  products: [
    { name: "شامبو آمن للوصلات", desc: "تركيبة خالية من الكبريتات ومتوازنة الحموضة مصممة للوصلات الملصقة والمشبكة", price: "من £12" },
    { name: "بلسم عميق", desc: "علاج ترطيب مكثف للشعر الجاف أو المصبوغ", price: "من £14" },
    { name: "رذاذ فك التشابك", desc: "تركيبة خفيفة تمنع التكتل دون إثقال الشعر", price: "من £10" },
    { name: "فرشاة آمنة للوصلات", desc: "شعيرات حلقية بأطراف كروية مصممة لفك تشابك يومي لطيف", price: "من £8" },
    { name: "رذاذ الحماية الحرارية", desc: "حماية حرارية حتى 230°م — أساسية لأي تصفيف بالحرارة", price: "من £12" },
    { name: "ربطات حرير (×3)", desc: "لطيفة على الوصلات، تمنع الانثناء والشد", price: "من £9" },
  ],
  productsCtaLabel: "تسوق جميع منتجات العناية",
  productsCtaHref: "/collections/extension-care",
  maintenanceHeading: "جدول الصيانة في الصالون",
  maintenanceP:
    "بالنسبة للوصلات الاحترافية (tape-in والكيراتين وnano ring)، يجب على العميلات العودة إلى الصالون على فترات منتظمة للصيانة.",
  maintenanceTable: {
    headers: ["نوع الوصلات", "إعادة الشد", "إزالة/استبدال كامل"],
    rows: [
      { type: "Tape-In", tighten: "كل 4–6 أسابيع", replace: "كل 3–4 أشهر" },
      { type: "K-Tip / وصلة كيراتين", tighten: "كل 6–8 أسابيع", replace: "كل 4–6 أشهر" },
      { type: "Nano Ring", tighten: "كل 6–8 أسابيع", replace: "كل 4–6 أشهر" },
      { type: "Weft (مخيطة)", tighten: "كل 6–8 أسابيع", replace: "كل 3–4 أشهر" },
      { type: "Clip-In", tighten: "غير متاح — ذاتي الخدمة", replace: "استبدال كل 12–24 شهراً" },
    ],
  },
  ctaBoxTitle: "وفّري منتجات العناية الصحيحة",
  ctaBoxBody:
    "قدّمي لعميلاتك منتجات عناية بجودة الصالون. أسعار الجملة متوفرة للحسابات التجارية — اطلبي اليوم.",
  ctaBoxPrimaryLabel: "افتحي حساباً تجارياً",
  ctaBoxPrimaryHref: "/trade-wholesale",
  ctaBoxSecondaryLabel: "تسوق تشكيلة العناية",
  ctaBoxSecondaryHref: "/collections/extension-care",
  faqHeading: "الأسئلة الشائعة",
  faqs: [
    { q: "كيف أعتني بوصلات الشعر؟", a: "استخدمي شامبو وبلسماً خاليين من الكبريتات، وفرشاة حلقية متخصصة، وتجنبي المنتجات الزيتية قرب الوصلات أو الشرائط. نامي بشعر مربوط بشكل فضفاض أو على كيس وسادة حريري، واتبعي جدول صيانة الطريقة (إعادة التركيب كل 6–12 أسبوعاً)." },
    { q: "ما المنتجات التي يجب أن تستخدمها عميلات الوصلات؟", a: "شامبو وبلسم خاليان من الكبريتات، وفرشاة حلقية/وصلات، وكيس وسادة حريري، ومرطب يُترك أو حماية حرارية حسب الحاجة. بيع مجموعة العناية الصحيحة عند الموعد يحمي النتيجة ويدرّ إيراد إعادة طلب تجزئة عالياً." },
    { q: "كم مرة يجب صيانة الوصلات؟", a: "تحتاج الـ tape-in والـ nano عادة إلى إعادة تركيب كل 6–8 أسابيع؛ والـ K-tip والـ weft كل 8–12 أسبوعاً مع نمو الشعر الطبيعي. حجز هذه المواعيد مسبقاً يملأ الجدول ويبني إيراداً متكرراً يمكن التنبؤ به." },
    { q: "هل يمكن للعميلات غسل وتصفيف الوصلات بالحرارة؟", a: "نعم — وصلات 100% Remy شعر بشري يمكن غسلها وتهيئتها وتصفيفها بالحرارة مثل الشعر الطبيعي. أوصي بمنتجات خالية من الكبريتات وحماية حرارية، وتجنب المنتجات الزيتية قرب الوصلات أو المادة اللاصقة." },
  ],
}

const sv: HairExtensionAftercareGuideContent = {
  seoTitle: "Eftervård för hårförlängningar: Komplett guide för brittiska kunder & salonger | D.S HAIR & BEAUTY",
  seoDescription:
    "Expertguide för eftervård av hårförlängningar. Lär dig tvätta, borsta, sova med och underhålla dina förlängningar så de håller upp till 24 månader. Inkluderar produktrekommendationer för brittiska kunder.",
  jsonLdHeadline: "Eftervård för hårförlängningar: Komplett guide för brittiska kunder & salonger",
  jsonLdDescription:
    "Expertguide för eftervård av hårförlängningar. Lär dig tvätta, borsta, sova med och underhålla dina förlängningar så de håller upp till 24 månader.",
  heroBadge: "Vårdguide 2026",
  heroTitleLine1: "Eftervård för hårförlängningar:",
  heroTitleLine2: "Få dem att hålla upp till 24 månader",
  heroSubtitle:
    "Hur du sköter dina förlängningar de första 48 timmarna — och varje dag därefter — avgör hur länge de håller. Den här guiden täcker allt brittiska kunder och stylister behöver veta.",
  ctaPrimaryLabel: "Handla eftervårdsprodukter",
  ctaPrimaryHref: "/collections/extension-care",
  ctaSecondaryLabel: "Handla Clip-Ins",
  ctaSecondaryHref: "/collections/clip-in",
  stats: [
    { num: "24 mån", label: "max livslängd för clip-ins" },
    { num: "48 tim", label: "innan första tvätten" },
    { num: "3x/v", label: "max tvättfrekvens" },
    { num: "Silke", label: "örngott rekommenderas" },
  ],
  breadcrumb: "Tillbaka till Bloggen",
  metaCategory: "Vårdguide",
  metaDate: "Uppdaterad maj 2026",
  metaReadTime: "9 min läsning",
  firstHeading: "De första 48 timmarna: grunden läggs",
  firstP:
    "Vad du gör direkt efter att du fått förlängningar gör stor skillnad för hur länge de håller. Bondsen (tape, keratin, nano rings) behöver tid att sätta sig och härda ordentligt.",
  firstChecklistHeading: "Checklista för de första 48 timmarna",
  firstChecklist: [
    "⛔ Tvätta inte håret — låt bondsen härda helt",
    "⛔ Undvik simning, bastu och ångbad",
    "⛔ Sätt inte upp håret i en tight hästsvans eller knut",
    "✅ Sov på ett örngott i silke eller satin",
    "✅ Borsta försiktigt två gånger dagligen med en förlängningssäker borste",
    "✅ Håll händerna borta från bondsen (rör inte tape eller keratintoppar)",
  ],
  washHeading: "Så tvättar du förlängningar rätt",
  washP:
    "Tvätt är där de flesta kunder gör fel. Alltför ofta orsakar fel produkter eller tekniker tovor vid rötterna — den vanligaste orsaken till tidig borttagning.",
  doHeading: "Gör",
  doItems: [
    "Använd sulfatfritt, förlängningssäkert schampo",
    "Tvätta i en nedåtgående rörelse — skrubba aldrig uppåt",
    "Applicera balsam bara från mitten till topparna",
    "Klappa torrt med en mikrofiberhandduk",
    "Red ut försiktigt med en bredtandad kam medan det är fuktigt",
    "Applicera värmeskydd före all styling",
  ],
  dontHeading: "Gör inte",
  dontItems: [
    "Använd inte vanligt stormarknadsschampo (för hårt)",
    "Massera inte hårbotten kraftigt nära bondsen",
    "Applicera inte balsam nära tape- eller keratinbondsen",
    "Vrid eller krama inte förlängningarna vid torkning",
    "Använd inte en vanlig hårborste på våta förlängningar",
    "Sov inte med blött hår — torka alltid först",
  ],
  sleepHeading: "Att sova med hårförlängningar",
  sleepP:
    "Förlängningar gnider mot kudden hela natten och skapar friktion som leder till trassel och tovor. Några enkla förändringar kan förhindra det helt.",
  sleepItems: [
    { title: "Örngott i silke eller satin", desc: "Minskar friktionen med upp till 75% jämfört med bomull. Den enskilt mest effektiva förändringen." },
    { title: "Sätt håret i en lös, låg fläta eller hästsvans", desc: "Håller förlängningarna samlade och förhindrar att de flyttar sig under huvudet." },
    { title: "Lös toppknut (om det är bekvämt)", desc: "Funkar bra för längre clip-ins. Använd ett sidenhårsnodd, aldrig gummiband." },
    { title: "Borsta före sänggåendet", desc: "Använd en förlängningsborste för att försiktigt reda ut knutor innan du sover." },
  ],
  brushHeading: "Rätt sätt att borsta förlängningar",
  brushP:
    "Använd alltid en borste särskilt utformad för förlängningar — vanligtvis en loopborste eller en uppredningskam med kulspetspenselborst. Vanliga borstar kan dra ut hår och skada bondsen.",
  brushTechniqueHeading: "Borstteknik",
  brushSteps: [
    "Börja från topparna — aldrig från rötterna",
    "Arbeta i små sektioner och håll bondet stadigt med ena handen",
    "Red försiktigt ut tovor från topparna och uppåt",
    "Borsta minst två gånger dagligen: på morgonen och före sänggåendet",
    "Borsta aldrig när håret är genomblött — klappa torrt först",
  ],
  productsHeading: "Rekommenderade eftervårdsprodukter",
  productsP:
    "Rätt produkter kan fördubbla livslängden på dina förlängningar. Vi för en omsorgsfullt utvald serie eftervårdsprodukter i salongskvalitet, alla förlängningssäkra och testade.",
  products: [
    { name: "Förlängningssäkert schampo", desc: "Sulfatfri, pH-balanserad formula för limmade och tejpade förlängningar", price: "Från £12" },
    { name: "Djupbalsam", desc: "Intensiv fuktbehandling för torrt eller färgbehandlat förlängningshår", price: "Från £14" },
    { name: "Uppredningsspray", desc: "Lätt formula som förhindrar tovor utan att tynga ner håret", price: "Från £10" },
    { name: "Förlängningssäker borste", desc: "Loopborst med kulspetsar, designad för skonsam daglig uppredning", price: "Från £8" },
    { name: "Värmeskyddsspray", desc: "Termiskt skydd upp till 230°C — viktigt för all värmestyling", price: "Från £12" },
    { name: "Sidenhårsnoddar (x3)", desc: "Skonsamma mot förlängningar, förhindrar veck och drag", price: "Från £9" },
  ],
  productsCtaLabel: "Handla alla eftervårdsprodukter",
  productsCtaHref: "/collections/extension-care",
  maintenanceHeading: "Underhållsschema i salongen",
  maintenanceP:
    "För professionella förlängningar (tape-in, keratin, nano ring) bör kunder återvända till salongen med jämna mellanrum för underhåll.",
  maintenanceTable: {
    headers: ["Förlängningstyp", "Omplacering", "Full borttagning/byte"],
    rows: [
      { type: "Tape-In", tighten: "Var 4–6:e vecka", replace: "Var 3–4:e månad" },
      { type: "K-Tip / Keratinbond", tighten: "Var 6–8:e vecka", replace: "Var 4–6:e månad" },
      { type: "Nano Ring", tighten: "Var 6–8:e vecka", replace: "Var 4–6:e månad" },
      { type: "Weft (isytt)", tighten: "Var 6–8:e vecka", replace: "Var 3–4:e månad" },
      { type: "Clip-In", tighten: "N/A — görs själv", replace: "Byt var 12–24:e månad" },
    ],
  },
  ctaBoxTitle: "Ta in rätt eftervårdsprodukter",
  ctaBoxBody:
    "Erbjud dina kunder eftervårdsprodukter i salongskvalitet. Partipriser finns för handelskonton — beställ idag.",
  ctaBoxPrimaryLabel: "Öppna handelskonto",
  ctaBoxPrimaryHref: "/trade-wholesale",
  ctaBoxSecondaryLabel: "Handla eftervårdssortimentet",
  ctaBoxSecondaryHref: "/collections/extension-care",
  faqHeading: "Vanliga frågor",
  faqs: [
    { q: "Hur sköter jag hårförlängningar?", a: "Använd sulfatfritt schampo och balsam, en specialiserad loopborste, och undvik oljiga produkter nära bondsen eller tejpen. Sov med håret löst uppsatt eller på ett sidenörngott, och följ metodens underhållsschema (omplacering var 6–12:e vecka)." },
    { q: "Vilka produkter ska förlängningskunder använda?", a: "Sulfatfritt schampo och balsam, en loop-/förlängningsborste, ett sidenörngott och vid behov leave-in eller värmeskydd. Att sälja rätt eftervårdskit vid besöket skyddar resultatet och driver en högmarginal återköpsförsäljning." },
    { q: "Hur ofta ska förlängningar underhållas?", a: "Tape-in och nano behöver vanligtvis omplacering var 6–8:e vecka; K-tip och weft var 8–12:e vecka i takt med att håret växer. Att boka dessa i förväg håller kalendern full och bygger förutsägbara återkommande intäkter." },
    { q: "Kan kunder tvätta och värmestyla förlängningar?", a: "Ja — förlängningar i 100% Remy människohår kan tvättas, balsameras och värmestylas som naturligt hår. Rekommendera sulfatfria produkter och värmeskydd, och undvik oljebaserade produkter nära bondsen eller limmet." },
  ],
}

const pl: HairExtensionAftercareGuideContent = {
  seoTitle: "Pielęgnacja przedłużanych włosów: Kompletny przewodnik dla klientek i salonów w UK | D.S HAIR & BEAUTY",
  seoDescription:
    "Ekspercki przewodnik po pielęgnacji przedłużanych włosów. Dowiedz się, jak myć, czesać, spać i dbać o przedłużenia, by służyły do 24 miesięcy. Z rekomendacjami produktów dla klientek w UK.",
  jsonLdHeadline: "Pielęgnacja przedłużanych włosów: Kompletny przewodnik dla klientek i salonów w UK",
  jsonLdDescription:
    "Ekspercki przewodnik po pielęgnacji przedłużanych włosów. Dowiedz się, jak myć, czesać, spać i dbać o przedłużenia, by służyły do 24 miesięcy.",
  heroBadge: "Przewodnik pielęgnacji 2026",
  heroTitleLine1: "Pielęgnacja przedłużeń:",
  heroTitleLine2: "Spraw, by służyły do 24 miesięcy",
  heroSubtitle:
    "Sposób, w jaki dbasz o przedłużenia w pierwszych 48 godzinach — i każdego kolejnego dnia — decyduje o tym, jak długo wytrzymają. Ten przewodnik obejmuje wszystko, co klientki i styliści w UK muszą wiedzieć.",
  ctaPrimaryLabel: "Kup produkty do pielęgnacji",
  ctaPrimaryHref: "/collections/extension-care",
  ctaSecondaryLabel: "Kup Clip-Ins",
  ctaSecondaryHref: "/collections/clip-in",
  stats: [
    { num: "24 mies", label: "maks. żywotność clip-ins" },
    { num: "48 godz", label: "przed pierwszym myciem" },
    { num: "3x/tydz", label: "maks. częstotliwość mycia" },
    { num: "Jedwab", label: "poszewka zalecana" },
  ],
  breadcrumb: "Powrót do Bloga",
  metaCategory: "Przewodnik pielęgnacji",
  metaDate: "Zaktualizowano maj 2026",
  metaReadTime: "9 min czytania",
  firstHeading: "Pierwsze 48 godzin: fundamenty",
  firstP:
    "To, co zrobisz bezpośrednio po założeniu przedłużeń, ma ogromne znaczenie dla ich trwałości. Łączenia (tape, keratyna, nano rings) potrzebują czasu, by w pełni się utrwalić.",
  firstChecklistHeading: "Lista kontrolna pierwszych 48 godzin",
  firstChecklist: [
    "⛔ Nie myj włosów — pozwól łączeniom w pełni się utrwalić",
    "⛔ Unikaj pływania, sauny i łaźni parowych",
    "⛔ Nie wiąż włosów w ciasny kucyk ani kok",
    "✅ Śpij na poszewce z jedwabiu lub satyny",
    "✅ Delikatnie czesz dwa razy dziennie szczotką bezpieczną dla przedłużeń",
    "✅ Trzymaj ręce z dala od łączeń (nie dotykaj tape ani końcówek keratynowych)",
  ],
  washHeading: "Jak prawidłowo myć przedłużenia",
  washP:
    "Mycie to etap, na którym większość klientek popełnia błędy. Zbyt często niewłaściwe produkty lub techniki powodują filcowanie u nasady — główną przyczynę przedwczesnego usuwania.",
  doHeading: "Rób",
  doItems: [
    "Używaj szamponu bez siarczanów, bezpiecznego dla przedłużeń",
    "Myj ruchem w dół — nigdy nie szoruj do góry",
    "Nakładaj odżywkę tylko od połowy długości do końcówek",
    "Osuszaj delikatnie ręcznikiem z mikrofibry",
    "Rozczesuj delikatnie grzebieniem o szerokich zębach na wilgotno",
    "Nakładaj ochronę termiczną przed każdą stylizacją",
  ],
  dontHeading: "Nie rób",
  dontItems: [
    "Nie używaj zwykłego szamponu z supermarketu (zbyt agresywny)",
    "Nie masuj energicznie skóry głowy przy łączeniach",
    "Nie nakładaj odżywki przy łączeniach tape lub keratynowych",
    "Nie wyciskaj ani nie skręcaj przedłużeń podczas suszenia",
    "Nie używaj zwykłej szczotki na mokrych przedłużeniach",
    "Nie śpij z mokrymi włosami — zawsze najpierw osusz",
  ],
  sleepHeading: "Spanie z przedłużanymi włosami",
  sleepP:
    "Przedłużenia ocierają się o poduszkę całą noc, powodując tarcie, które prowadzi do plątania i filcowania. Kilka prostych zmian może temu całkowicie zapobiec.",
  sleepItems: [
    { title: "Poszewka z jedwabiu lub satyny", desc: "Zmniejsza tarcie nawet o 75% w porównaniu z bawełną. Pojedyncza, najbardziej wpływowa zmiana." },
    { title: "Zwiąż włosy w luźny, niski warkocz lub kucyk", desc: "Utrzymuje przedłużenia w ryzach i zapobiega ich przesuwaniu się pod głową." },
    { title: "Luźny kok na czubku (jeśli wygodnie)", desc: "Dobrze sprawdza się przy dłuższych clip-ins. Używaj jedwabnej gumki, nigdy gumek elastycznych." },
    { title: "Rozczesz przed snem", desc: "Użyj szczotki do przedłużeń, by delikatnie rozplątać supełki przed zaśnięciem." },
  ],
  brushHeading: "Prawidłowe czesanie przedłużeń",
  brushP:
    "Zawsze używaj szczotki zaprojektowanej specjalnie do przedłużeń — zwykle szczotki pętelkowej lub grzebienia z kuleczkami na końcach. Zwykłe szczotki mogą wyrywać włosy i uszkadzać łączenia.",
  brushTechniqueHeading: "Technika czesania",
  brushSteps: [
    "Zaczynaj od końcówek — nigdy od nasady",
    "Pracuj w małych sekcjach, trzymając łączenie stabilnie jedną ręką",
    "Delikatnie rozplątuj supły od końcówek w górę",
    "Czesz co najmniej dwa razy dziennie: rano i przed snem",
    "Nigdy nie czesz mocno mokrych włosów — najpierw osusz",
  ],
  productsHeading: "Zalecane produkty do pielęgnacji",
  productsP:
    "Używanie odpowiednich produktów może podwoić żywotność przedłużeń. Oferujemy starannie wyselekcjonowaną gamę produktów pielęgnacyjnych w jakości salonowej, wszystkie bezpieczne i przetestowane.",
  products: [
    { name: "Szampon bezpieczny dla przedłużeń", desc: "Formuła bez siarczanów o zrównoważonym pH, zaprojektowana dla przedłużeń klejonych i taśmowych", price: "Od £12" },
    { name: "Odżywka głęboka", desc: "Intensywne nawilżenie dla suchych lub farbowanych włosów przedłużanych", price: "Od £14" },
    { name: "Spray do rozczesywania", desc: "Lekka formuła zapobiegająca filcowaniu bez obciążania włosów", price: "Od £10" },
    { name: "Szczotka bezpieczna dla przedłużeń", desc: "Pętelkowe włosie z kuleczkami, do delikatnego codziennego rozczesywania", price: "Od £8" },
    { name: "Spray ochrony termicznej", desc: "Ochrona do 230°C — niezbędna przy każdej stylizacji na ciepło", price: "Od £12" },
    { name: "Jedwabne gumki (x3)", desc: "Delikatne dla przedłużeń, zapobiegają odgnieceniom i ciągnięciu", price: "Od £9" },
  ],
  productsCtaLabel: "Kup wszystkie produkty do pielęgnacji",
  productsCtaHref: "/collections/extension-care",
  maintenanceHeading: "Harmonogram pielęgnacji w salonie",
  maintenanceP:
    "W przypadku profesjonalnych przedłużeń (tape-in, keratyna, nano ring) klientki powinny wracać do salonu w regularnych odstępach czasu na pielęgnację.",
  maintenanceTable: {
    headers: ["Rodzaj przedłużeń", "Dociskanie", "Całkowite usunięcie/wymiana"],
    rows: [
      { type: "Tape-In", tighten: "Co 4–6 tygodni", replace: "Co 3–4 miesiące" },
      { type: "K-Tip / łączenie keratynowe", tighten: "Co 6–8 tygodni", replace: "Co 4–6 miesięcy" },
      { type: "Nano Ring", tighten: "Co 6–8 tygodni", replace: "Co 4–6 miesięcy" },
      { type: "Weft (wszywane)", tighten: "Co 6–8 tygodni", replace: "Co 3–4 miesiące" },
      { type: "Clip-In", tighten: "N/D — samoobsługa", replace: "Wymiana co 12–24 miesięcy" },
    ],
  },
  ctaBoxTitle: "Wprowadź właściwe produkty pielęgnacyjne",
  ctaBoxBody:
    "Oferuj swoim klientkom produkty pielęgnacyjne w jakości salonowej. Ceny hurtowe dostępne dla kont handlowych — zamów dziś.",
  ctaBoxPrimaryLabel: "Otwórz konto hurtowe",
  ctaBoxPrimaryHref: "/trade-wholesale",
  ctaBoxSecondaryLabel: "Kup gamę pielęgnacyjną",
  ctaBoxSecondaryHref: "/collections/extension-care",
  faqHeading: "Najczęściej Zadawane Pytania",
  faqs: [
    { q: "Jak dbać o przedłużane włosy?", a: "Używaj szamponu i odżywki bez siarczanów, specjalistycznej szczotki pętelkowej i unikaj tłustych produktów przy łączeniach lub taśmach. Śpij z luźno związanymi włosami lub na jedwabnej poszewce i przestrzegaj harmonogramu pielęgnacji metody (dociskanie co 6–12 tygodni)." },
    { q: "Jakich produktów powinny używać klientki przedłużeń?", a: "Szamponu i odżywki bez siarczanów, szczotki pętelkowej/do przedłużeń, jedwabnej poszewki oraz w razie potrzeby leave-in lub ochrony termicznej. Sprzedaż odpowiedniego zestawu pielęgnacyjnego podczas wizyty chroni efekt i generuje wysoko marżowy powtórny zakup detaliczny." },
    { q: "Jak często należy pielęgnować przedłużenia?", a: "Tape-in i nano zwykle wymagają dociskania co 6–8 tygodni; K-tip i weft co 8–12 tygodni w miarę wzrostu naturalnych włosów. Rezerwowanie tych wizyt z wyprzedzeniem utrzymuje pełny grafik i buduje przewidywalne, powtarzalne przychody." },
    { q: "Czy klientki mogą myć i stylizować przedłużenia na ciepło?", a: "Tak — przedłużenia z 100% naturalnych włosów Remy można myć, odżywiać i stylizować na ciepło jak naturalne włosy. Polecaj produkty bez siarczanów i ochronę termiczną, a także unikaj produktów olejowych przy łączeniach lub kleju." },
  ],
}

export const hairExtensionAftercareGuideContent: Record<Locale, HairExtensionAftercareGuideContent> = {
  en,
  de,
  fr,
  ar,
  sv,
  pl,
}
