import type { Locale } from "@/lib/i18n/config"

// Content module for the "Hair Extensions Trade Account" blog post.
// All visible English copy is externalised here so the page can be rendered
// in any of the 6 locales with an identical layout. The English page
// (locale="en") renders exactly the same JSX it always did.

export interface HairExtensionsTradeAccountContent {
  seoTitle: string
  seoDescription: string
  heroBadge: string
  heroTitle: string
  heroSubtitle: string
  ctaPrimaryLabel: string
  ctaPrimaryHref: string
  ctaSecondaryLabel: string
  ctaSecondaryHref: string
  breadcrumbHome: string
  breadcrumbBlog: string
  breadcrumbCurrent: string
  authorKicker: string
  authorRole: string
  whatHeading: string
  whatParagraphs: string[]
  includesHeading: string
  includesCards: { icon: "badgePercent" | "package" | "truck" | "users"; title: string; text: string }[]
  qualifyHeading: string
  qualifyIntro: string
  qualifySteps: { step: string; detail: string }[]
  compareHeading: string
  compareIntro: string
  tradeCardTitle: string
  tradeCardItems: string[]
  privateLabelCardTitle: string
  privateLabelCardItems: string[]
  compareOutroBefore: string
  compareOutroLink: string
  compareOutroAfter: string
  factoryHeading: string
  factoryP1Before: string
  factoryP1Link: string
  factoryP1After: string
  factoryP2Before: string
  factoryP2Link: string
  factoryP2After: string
  ctaBoxTitle: string
  ctaBoxBody: string
  ctaBoxPrimaryLabel: string
  ctaBoxPrimaryHref: string
  ctaBoxSecondaryLabel: string
  ctaBoxSecondaryHref: string
  faqHeading: string
  faqs: { q: string; a: string }[]
  relatedKicker: string
  relatedCard1Title: string
  relatedCard1Href: string
  relatedCard2Title: string
  relatedCard2Href: string
  backLabel: string
}

const en: HairExtensionsTradeAccountContent = {
  seoTitle:
    "Hair Extensions Trade Account: What It Is & How to Open One (UK Salons) | D.S Hair Beauty",
  seoDescription:
    "A hair extensions trade account gives UK salons wholesale pricing, priority stock, and account support. Learn what trade accounts include, how to qualify, and why factory-direct beats traditional distributors.",
  heroBadge: "Trade & Wholesale",
  heroTitle: "Hair Extensions Trade Account",
  heroSubtitle:
    "What a trade account actually gives your salon, how to qualify in the UK, and why factory-direct supply is changing the maths for independent salons.",
  ctaPrimaryLabel: "Open Trade Account",
  ctaPrimaryHref: "/trade-wholesale",
  ctaSecondaryLabel: "More Guides",
  ctaSecondaryHref: "/blog",
  breadcrumbHome: "Home",
  breadcrumbBlog: "Blog",
  breadcrumbCurrent: "Trade Account",
  authorKicker: "Written by",
  authorRole:
    "Founder & Trade Director at D.S Hair & Beauty · 19 years in hair extension manufacturing",
  whatHeading: "What Is a Hair Extensions Trade Account?",
  whatParagraphs: [
    "A trade account is a professional buying relationship with a hair extension supplier. Instead of paying consumer retail prices, your salon buys at wholesale rates and gets access to things retail customers never see: priority stock, trade-only shades, reorder support, and someone who actually knows the product.",
    "In plain terms: a retail customer pays full price for one set. A salon with a trade account pays roughly 30–60% less per unit and treats extensions as a service line — buying by the weft, the pack, or the full head, and billing the client for the application on top.",
  ],
  includesHeading: "What a Good Trade Account Includes",
  includesCards: [
    { icon: "badgePercent", title: "Wholesale pricing", text: "Trade rates on every SKU — typically 30–60% below retail. The single biggest lever on your extension margin." },
    { icon: "package", title: "Priority stock", text: "Trade buyers get allocated popular shades and lengths before they sell out to retail." },
    { icon: "truck", title: "Reliable reorders", text: "Express 3–5 day factory-direct shipping, so you reorder as needed without holding excess inventory." },
    { icon: "users", title: "Account support", text: "Direct contact with people who know the hair — WhatsApp, email, or phone — not a ticket queue." },
  ],
  qualifyHeading: "How to Qualify for a Trade Account in the UK",
  qualifyIntro:
    "Most reputable UK suppliers ask for basic proof you are a legitimate trade buyer. This protects their pricing and their reputation — they need to know product will be applied professionally.",
  qualifySteps: [
    { step: "Proof of trading", detail: "Salon name, trading address, and a website or social profile. A business registration number is often accepted." },
    { step: "Professional profile", detail: "A stylist qualification, insurance certificate, or a portfolio of extension work." },
    { step: "Account application", detail: "Complete a short trade form. D.S Hair Beauty approves most applications the same day." },
    { step: "First order", detail: "Many suppliers recommend a sample order first so you can assess quality before committing to volume." },
  ],
  compareHeading: "Trade Account vs Private Label: Which Do You Need?",
  compareIntro:
    "A trade account is the entry point: you buy branded product at wholesale prices and use it in your salon. Private label is the next step — the same product ships under your own salon brand, with custom packaging and your name on it.",
  tradeCardTitle: "Trade Account",
  tradeCardItems: [
    "Starts immediately",
    "Branded D.S Hair & Beauty product",
    "Best for testing demand",
    "No minimum order",
  ],
  privateLabelCardTitle: "Private Label",
  privateLabelCardItems: [
    "Your salon brand on the box",
    "Custom packaging & shade sets",
    "Best once volume is steady",
    "Higher perceived value",
  ],
  compareOutroBefore:
    "Not sure yet? Open a trade account first, learn which shades and methods your clients actually buy, then move to private label once you have real reorder data. See our ",
  compareOutroLink: "private label guide",
  compareOutroAfter: " for the full path.",
  factoryHeading: "Why Factory-Direct Beats Traditional Distributors",
  factoryP1Before:
    "Traditional distributors sit between the factory and your salon — each layer adds cost. A factory-direct supplier (like our manufacturing arm ",
  factoryP1Link: "wigexporter.com",
  factoryP1After:
    ") removes that layer, so your trade price reflects the actual cost of making the hair, not three markups stacked on top.",
  factoryP2Before:
    "The practical upside: better margins for your salon, and a supplier who can customise (shade matching, private label, packaging) because they actually control production. If you are comparing suppliers, our ",
  factoryP2Link: "switch-your-supplier comparison",
  factoryP2After: " breaks down the real differences.",
  ctaBoxTitle: "Open Your Free Trade Account",
  ctaBoxBody:
    "No minimum order. Same-day approval. Wholesale pricing on 100% Remy human hair extensions, with express 3–5 day shipping to the UK & EU.",
  ctaBoxPrimaryLabel: "Open a Trade Account →",
  ctaBoxPrimaryHref: "/trade-wholesale",
  ctaBoxSecondaryLabel: "Salon Partner Programme",
  ctaBoxSecondaryHref: "/salon-partners",
  faqHeading: "Frequently Asked Questions",
  faqs: [
    {
      q: "What is a hair extensions trade account?",
      a: "A trade account is a professional buying relationship with a hair extension supplier. It gives salons and stylists access to wholesale pricing, priority stock allocation, trade-only products, and account support — instead of paying consumer retail prices.",
    },
    {
      q: "Do I need a business to open a trade account?",
      a: "Yes — trade accounts are for legitimate businesses. Most UK suppliers ask for a salon name, trading address, and some proof of professional activity (a website, social profile, or stylist qualification). At D.S Hair Beauty we verify trade status but have no minimum order, so new freelancers are welcome.",
    },
    {
      q: "How fast can I get approved?",
      a: "Many suppliers approve within one business day. D.S Hair Beauty approves most applications the same day, and you can place your first order immediately after approval.",
    },
    {
      q: "Is there a minimum order on a trade account?",
      a: "It depends on the supplier. Large distributors often require 10–50 units per product. D.S Hair Beauty has no minimum order quantity — you buy what you need, when you need it, at trade prices.",
    },
    {
      q: "What is the difference between a trade account and private label?",
      a: "A trade account lets you buy branded product at wholesale prices to use in your salon. Private label goes further: the product ships under your own salon brand with custom packaging. Trade is the starting point; private label is the next step once you have steady volume.",
    },
  ],
  relatedKicker: "Related Guide",
  relatedCard1Title: "Wholesale Hair Extensions UK",
  relatedCard1Href: "/blog/wholesale-hair-extensions-uk",
  relatedCard2Title: "Hair Extension Profit Margins",
  relatedCard2Href: "/blog/hair-extension-profit-margin-guide",
  backLabel: "Back to Blog",
}

const de: HairExtensionsTradeAccountContent = {
  seoTitle:
    "Hair Extensions Trade Account: Was es ist & wie man eines eröffnet (UK-Salons) | D.S Hair Beauty",
  seoDescription:
    "Ein Hair Extensions Trade Account bietet UK-Salons Großhandelspreise, bevorrechtigte Lagerbestände und Account-Support. Erfahren Sie, was Trade Accounts umfassen, wie Sie sich qualifizieren und warum Factory-Direct traditionelle Distributoren schlägt.",
  heroBadge: "Trade & Großhandel",
  heroTitle: "Hair Extensions Trade Account",
  heroSubtitle:
    "Was ein Trade Account Ihrem Salon tatsächlich bringt, wie Sie sich im UK qualifizieren und warum Factory-Direct-Versorgung die Rechnung für unabhängige Salons verändert.",
  ctaPrimaryLabel: "Trade Account eröffnen",
  ctaPrimaryHref: "/trade-wholesale",
  ctaSecondaryLabel: "Weitere Guides",
  ctaSecondaryHref: "/blog",
  breadcrumbHome: "Start",
  breadcrumbBlog: "Blog",
  breadcrumbCurrent: "Trade Account",
  authorKicker: "Geschrieben von",
  authorRole:
    "Gründerin & Trade Director bei D.S Hair & Beauty · 19 Jahre in der Haarverlängerungsproduktion",
  whatHeading: "Was ist ein Hair Extensions Trade Account?",
  whatParagraphs: [
    "Ein Trade Account ist eine professionelle Einkaufsbeziehung mit einem Haarverlängerungs-Lieferanten. Anstatt Verbraucher-Endpreise zu zahlen, kauft Ihr Salon zu Großhandelskonditionen ein und erhält Zugriff auf Dinge, die Endkunden nie sehen: bevorrechtigte Bestände, nur für Trade erhältliche Töne, Nachbestell-Support und jemanden, der das Produkt wirklich kennt.",
    "Einfach gesagt: Ein Endkunde zahlt den vollen Preis für ein Set. Ein Salon mit Trade Account zahlt pro Einheit etwa 30–60 % weniger und behandelt Verlängerungen als Serviceleistung — gekauft nach Weft, Packung oder komplettem Head, und dem Kunden die Applikation obendrauf berechnet.",
  ],
  includesHeading: "Was ein guter Trade Account umfasst",
  includesCards: [
    { icon: "badgePercent", title: "Großhandelspreise", text: "Trade-Konditionen auf jeder SKU — typischerweise 30–60 % unter Endpreis. Der größte Hebel auf Ihre Verlängerungsmarge." },
    { icon: "package", title: "Bevorrechtigter Bestand", text: "Trade-Käufer erhalten beliebte Töne und Längen zugewiesen, bevor sie an Endkunden ausverkauft sind." },
    { icon: "truck", title: "Zuverlässige Nachbestellungen", text: "Express-Versand 3–5 Tage Factory-Direct, sodass Sie bei Bedarf nachbestellen, ohne Überschusslager zu halten." },
    { icon: "users", title: "Account-Support", text: "Direkter Kontakt zu Leuten, die das Haar kennen — WhatsApp, E-Mail oder Telefon — keine Ticket-Warteschlange." },
  ],
  qualifyHeading: "Wie Sie sich im UK für einen Trade Account qualifizieren",
  qualifyIntro:
    "Die meisten seriösen UK-Lieferanten verlangen einen einfachen Nachweis, dass Sie ein legitimer Trade-Käufer sind. Das schützt ihre Preise und ihren Ruf — sie müssen wissen, dass das Produkt fachgerecht angewendet wird.",
  qualifySteps: [
    { step: "Nachweis des Handels", detail: "Salonname, Handelsadresse und eine Website oder ein Social-Profil. Oft wird eine Unternehmensregisternummer akzeptiert." },
    { step: "Profiles Profil", detail: "Eine Stylist-Qualifikation, Versicherungsbescheinigung oder ein Portfolio von Verlängerungsarbeiten." },
    { step: "Account-Antrag", detail: "Kurzes Trade-Formular ausfüllen. D.S Hair Beauty genehmigt die meisten Anträge noch am selben Tag." },
    { step: "Erste Bestellung", detail: "Viele Lieferanten empfehlen zuerst eine Musterbestellung, um die Qualität zu prüfen, bevor Sie Volumen bestellen." },
  ],
  compareHeading: "Trade Account vs. Private Label: Was brauchen Sie?",
  compareIntro:
    "Ein Trade Account ist der Einstiegspunkt: Sie kaufen markiertes Produkt zu Großhandelspreisen und verwenden es in Ihrem Salon. Private Label ist der nächste Schritt — dasselbe Produkt wird unter Ihrer eigenen Salonmarke mit individueller Verpackung und Ihrem Namen versendet.",
  tradeCardTitle: "Trade Account",
  tradeCardItems: [
    "Startet sofort",
    "Markiertes D.S Hair & Beauty Produkt",
    "Ideal zum Testen der Nachfrage",
    "Keine Mindestbestellmenge",
  ],
  privateLabelCardTitle: "Private Label",
  privateLabelCardItems: [
    "Ihre Salonmarke auf der Box",
    "Individuelle Verpackung & Tonsets",
    "Ideal sobald Volumen stabil ist",
    "Höherer wahrgenommener Wert",
  ],
  compareOutroBefore:
    "Noch unsicher? Eröffnen Sie zuerst einen Trade Account, finden Sie heraus, welche Töne und Methoden Ihre Kunden wirklich kaufen, und wechseln Sie zu Private Label, sobald Sie echte Nachbestelldaten haben. Sehen Sie unseren ",
  compareOutroLink: "Private-Label-Guide",
  compareOutroAfter: " für den vollständigen Pfad.",
  factoryHeading: "Warum Factory-Direct traditionelle Distributoren schlägt",
  factoryP1Before:
    "Traditionelle Distributoren stehen zwischen Fabrik und Salon — jede Ebene erhöht die Kosten. Ein Factory-Direct-Lieferant (wie unser Produktionsarm ",
  factoryP1Link: "wigexporter.com",
  factoryP1After:
    ") entfernt diese Ebene, sodass Ihr Trade-Preis die tatsächlichen Herstellungskosten des Haars widerspiegelt, nicht drei übereinander gestapelte Aufschläge.",
  factoryP2Before:
    "Der praktische Vorteil: bessere Margen für Ihren Salon und ein Lieferant, der individualisieren kann (Farbabstimmung, Private Label, Verpackung), weil er die Produktion tatsächlich kontrolliert. Wenn Sie Lieferanten vergleichen, zeigt unser ",
  factoryP2Link: "Lieferanten-Wechsel-Vergleich",
  factoryP2After: " die echten Unterschiede.",
  ctaBoxTitle: "Eröffnen Sie Ihren kostenlosen Trade Account",
  ctaBoxBody:
    "Keine Mindestbestellmenge. Genehmigung am selben Tag. Großhandelspreise für 100 % Remy Echthaar-Verlängerungen mit Express-Versand 3–5 Tage in das UK & EU.",
  ctaBoxPrimaryLabel: "Trade Account eröffnen →",
  ctaBoxPrimaryHref: "/trade-wholesale",
  ctaBoxSecondaryLabel: "Salon-Partner-Programm",
  ctaBoxSecondaryHref: "/salon-partners",
  faqHeading: "Häufig gestellte Fragen",
  faqs: [
    {
      q: "Was ist ein Hair Extensions Trade Account?",
      a: "Ein Trade Account ist eine professionelle Einkaufsbeziehung mit einem Haarverlängerungs-Lieferanten. Er gibt Salons und Stylisten Zugang zu Großhandelspreisen, bevorrechtigter Bestandszuweisung, nur für Trade erhältlichen Produkten und Account-Support — anstatt Verbraucher-Endpreise zu zahlen.",
    },
    {
      q: "Brauche ich ein Gewerbe, um einen Trade Account zu eröffnen?",
      a: "Ja — Trade Accounts sind für legale Unternehmen. Die meisten UK-Lieferanten verlangen einen Salonnamen, Handelsadresse und einen Nachweis professioneller Tätigkeit (Website, Social-Profil oder Stylist-Qualifikation). Bei D.S Hair Beauty prüfen wir den Trade-Status, haben aber keine Mindestbestellmenge, sodass neue Freelancer willkommen sind.",
    },
    {
      q: "Wie schnell wird mein Antrag genehmigt?",
      a: "Viele Lieferanten genehmigen innerhalb eines Werktags. D.S Hair Beauty genehmigt die meisten Anträge noch am selben Tag, und Sie können Ihre erste Bestellung gleich nach der Genehmigung aufgeben.",
    },
    {
      q: "Gibt es eine Mindestbestellmenge beim Trade Account?",
      a: "Das hängt vom Lieferanten ab. Große Distributoren verlangen oft 10–50 Einheiten pro Produkt. D.S Hair Beauty hat keine Mindestbestellmenge — Sie kaufen, was Sie brauchen, wann Sie es brauchen, zu Trade-Preisen.",
    },
    {
      q: "Was ist der Unterschied zwischen Trade Account und Private Label?",
      a: "Ein Trade Account lässt Sie markiertes Produkt zu Großhandelspreisen für Ihren Salon kaufen. Private Label geht weiter: Das Produkt wird unter Ihrer eigenen Salonmarke mit individueller Verpackung versendet. Trade ist der Einstiegspunkt; Private Label ist der nächste Schritt, sobald das Volumen stabil ist.",
    },
  ],
  relatedKicker: "Verwandter Guide",
  relatedCard1Title: "Wholesale Hair Extensions UK",
  relatedCard1Href: "/blog/wholesale-hair-extensions-uk",
  relatedCard2Title: "Hair Extension Profit Margins",
  relatedCard2Href: "/blog/hair-extension-profit-margin-guide",
  backLabel: "Zurück zum Blog",
}

const fr: HairExtensionsTradeAccountContent = {
  seoTitle:
    "Compte Pro Extensions Cheveux : Ce que c'est & comment en ouvrir un (Salons UK) | D.S Hair Beauty",
  seoDescription:
    "Un compte pro extensions cheveux offre aux salons UK des prix de gros, un stock prioritaire et un support de compte. Découvrez ce que incluent les comptes pro, comment vous qualifier et pourquoi le fabricant direct bat les distributeurs traditionnels.",
  heroBadge: "Professionnel & Grossiste",
  heroTitle: "Compte Pro Extensions Cheveux",
  heroSubtitle:
    "Ce qu'un compte pro apporte réellement à votre salon, comment vous qualifier au UK et pourquoi l'approvisionnement fabricant direct change la donne pour les salons indépendants.",
  ctaPrimaryLabel: "Ouvrir un compte pro",
  ctaPrimaryHref: "/trade-wholesale",
  ctaSecondaryLabel: "Plus de guides",
  ctaSecondaryHref: "/blog",
  breadcrumbHome: "Accueil",
  breadcrumbBlog: "Blog",
  breadcrumbCurrent: "Compte pro",
  authorKicker: "Rédigé par",
  authorRole:
    "Fondatrice & Trade Director chez D.S Hair & Beauty · 19 ans dans la fabrication d'extensions capillaires",
  whatHeading: "Qu'est-ce qu'un compte pro extensions cheveux ?",
  whatParagraphs: [
    "Un compte pro est une relation d'achat professionnelle avec un fournisseur d'extensions capillaires. Au lieu de payer les prix de détail aux consommateurs, votre salon achète aux tarifs de gros et obtient l'accès à ce que les clients finaux ne voient jamais : stock prioritaire, teintes réservées aux pros, support de réapprovisionnement et quelqu'un qui connaît vraiment le produit.",
    "En clair : un client final paie le plein prix pour un jeu. Un salon avec un compte pro paie environ 30–60 % moins par unité et traite les extensions comme une prestation — achetées à la weft, au pack ou à la tête complète, et facturant l'application en plus au client.",
  ],
  includesHeading: "Ce qu'un bon compte pro inclut",
  includesCards: [
    { icon: "badgePercent", title: "Prix de gros", text: "Tarifs pro sur chaque SKU — typiquement 30–60 % sous le détail. Le plus grand levier sur votre marge d'extension." },
    { icon: "package", title: "Stock prioritaire", text: "Les acheteurs pro reçoivent les teintes et longueurs populaires avant qu'elles ne soient épuisées au détail." },
    { icon: "truck", title: "Réassorts fiables", text: "Livraison express 3–5 jours fabricant direct, pour réassortir selon besoin sans stock excédentaire." },
    { icon: "users", title: "Support de compte", text: "Contact direct avec des personnes qui connaissent le cheveu — WhatsApp, e-mail ou téléphone — pas une file de tickets." },
  ],
  qualifyHeading: "Comment se qualifier pour un compte pro au UK",
  qualifyIntro:
    "La plupart des fournisseurs UK réputés demandent une preuve simple que vous êtes un acheteur pro légitime. Cela protège leurs prix et leur réputation — ils doivent savoir que le produit sera posé professionnellement.",
  qualifySteps: [
    { step: "Preuve d'activité", detail: "Nom du salon, adresse d'activité et un site web ou profil social. Un numéro d'enregistrement d'entreprise est souvent accepté." },
    { step: "Profil professionnel", detail: "Une qualification de styliste, une attestation d'assurance ou un portfolio de travaux d'extension." },
    { step: "Demande de compte", detail: "Remplir un court formulaire pro. D.S Hair Beauty approuve la plupart des demandes le jour même." },
    { step: "Première commande", detail: "Beaucoup de fournisseurs recommandent d'abord une commande échantillon pour évaluer la qualité avant de vous engager sur un volume." },
  ],
  compareHeading: "Compte pro vs Private Label : lequel vous faut-il ?",
  compareIntro:
    "Un compte pro est le point d'entrée : vous achetez un produit de marque aux prix de gros et l'utilisez dans votre salon. Le Private Label est l'étape suivante — le même produit est expédié sous votre propre marque de salon, avec emballage personnalisé et votre nom dessus.",
  tradeCardTitle: "Compte pro",
  tradeCardItems: [
    "Démarre immédiatement",
    "Produit de marque D.S Hair & Beauty",
    "Idéal pour tester la demande",
    "Sans commande minimum",
  ],
  privateLabelCardTitle: "Private Label",
  privateLabelCardItems: [
    "Votre marque de salon sur la box",
    "Emballage & jeux de teintes personnalisés",
    "Idéal dès que le volume est stable",
    "Valeur perçue plus élevée",
  ],
  compareOutroBefore:
    "Pas encore sûr ? Ouvrez d'abord un compte pro, découvrez quelles teintes et méthodes vos clientes achètent réellement, puis passez au Private Label une fois vos vraies données de réassort en main. Voyez notre ",
  compareOutroLink: "guide private label",
  compareOutroAfter: " pour le cheminement complet.",
  factoryHeading: "Pourquoi le fabricant direct bat les distributeurs traditionnels",
  factoryP1Before:
    "Les distributeurs traditionnels se placent entre l'usine et votre salon — chaque couche ajoute un coût. Un fournisseur fabricant direct (comme notre branche de fabrication ",
  factoryP1Link: "wigexporter.com",
  factoryP1After:
    ") supprime cette couche, donc votre prix pro reflète le coût réel de fabrication du cheveu, et non trois marges empilées.",
  factoryP2Before:
    "L'avantage pratique : de meilleures marges pour votre salon, et un fournisseur capable de personnaliser (mise en teinte, private label, emballage) car il contrôle réellement la production. Si vous comparez des fournisseurs, notre ",
  factoryP2Link: "comparaison changement de fournisseur",
  factoryP2After: " détaille les vraies différences.",
  ctaBoxTitle: "Ouvrez votre compte pro gratuit",
  ctaBoxBody:
    "Sans commande minimum. Approbation le jour même. Prix de gros sur des extensions 100 % Remy cheveux naturels, avec livraison express 3–5 jours au UK & EU.",
  ctaBoxPrimaryLabel: "Ouvrir un compte pro →",
  ctaBoxPrimaryHref: "/trade-wholesale",
  ctaBoxSecondaryLabel: "Programme Partenaire Salon",
  ctaBoxSecondaryHref: "/salon-partners",
  faqHeading: "Questions fréquemment posées",
  faqs: [
    {
      q: "Qu'est-ce qu'un compte pro extensions cheveux ?",
      a: "Un compte pro est une relation d'achat professionnelle avec un fournisseur d'extensions capillaires. Il donne aux salons et stylistes l'accès aux prix de gros, à l'allocation de stock prioritaire, aux produits réservés aux pros et au support de compte — au lieu de payer les prix de détail aux consommateurs.",
    },
    {
      q: "Ai-je besoin d'une entreprise pour ouvrir un compte pro ?",
      a: "Oui — les comptes pro sont pour les entreprises légitimes. La plupart des fournisseurs UK demandent un nom de salon, une adresse d'activité et une preuve d'activité professionnelle (site web, profil social ou qualification de styliste). Chez D.S Hair Beauty nous vérifions le statut pro mais n'avons pas de commande minimum, donc les nouveaux indépendants sont les bienvenus.",
    },
    {
      q: "À quelle vitesse puis-je être approuvé ?",
      a: "Beaucoup de fournisseurs approuvent en un jour ouvré. D.S Hair Beauty approuve la plupart des demandes le jour même, et vous pouvez passer votre première commande immédiatement après approbation.",
    },
    {
      q: "Y a-t-il une commande minimum sur un compte pro ?",
      a: "Cela dépend du fournisseur. Les grands distributeurs exigent souvent 10–50 unités par produit. D.S Hair Beauty n'a pas de quantité minimum — vous achetez ce dont vous avez besoin, quand vous en avez besoin, aux prix pro.",
    },
    {
      q: "Quelle est la différence entre un compte pro et un private label ?",
      a: "Un compte pro vous permet d'acheter un produit de marque aux prix de gros pour votre salon. Le Private Label va plus loin : le produit est expédié sous votre propre marque de salon avec un emballage personnalisé. Le pro est le point de départ ; le private label est l'étape suivante une fois le volume stable.",
    },
  ],
  relatedKicker: "Guide associé",
  relatedCard1Title: "Wholesale Hair Extensions UK",
  relatedCard1Href: "/blog/wholesale-hair-extensions-uk",
  relatedCard2Title: "Hair Extension Profit Margins",
  relatedCard2Href: "/blog/hair-extension-profit-margin-guide",
  backLabel: "Retour au Blog",
}

const ar: HairExtensionsTradeAccountContent = {
  seoTitle:
    "حساب الجملة لإكسسوارات الشعر: ما هو وكيف تفتح واحداً (صالونات UK) | D.S Hair Beauty",
  seoDescription:
    "يوفر حساب الجملة لإكسسوارات الشعر لصالونات UK أسعار الجملة والمخزون ذا الأولوية ودعم الحساب. تعرّف على ما يشمله حساب الجملة وكيفية التأهل ولماذا يتفوق التوريد مباشرة من المصنع على الموزعين التقليديين.",
  heroBadge: "تجاري & جملة",
  heroTitle: "حساب الجملة لإكسسوارات الشعر",
  heroSubtitle:
    "ما الذي يمنحه حساب الجملة لصالونك فعلياً، وكيفية التأهل في UK، ولماذا يغيّر التوريد مباشرة من المصنع المعادلة لصالونات مستقلة.",
  ctaPrimaryLabel: "افتح حساب الجملة",
  ctaPrimaryHref: "/trade-wholesale",
  ctaSecondaryLabel: "مزيد من الأدلة",
  ctaSecondaryHref: "/blog",
  breadcrumbHome: "الرئيسية",
  breadcrumbBlog: "المدونة",
  breadcrumbCurrent: "حساب الجملة",
  authorKicker: "كتبها",
  authorRole:
    "المؤسِسة والمديرة التجارية في D.S Hair & Beauty · 19 عاماً في صناعة إكسسوارات الشعر",
  whatHeading: "ما هو حساب الجملة لإكسسوارات الشعر؟",
  whatParagraphs: [
    "حساب الجملة هو علاقة شراء مهنية مع مورّد إكسسوارات الشعر. بدلاً من دفع أسعار التجزئة للمستهلكين، يشتري صالونك بأسعار الجملة ويحصل على وصول لأشياء لا يراها العملاء الأفراد: مخزون ذو أولوية، درجات حصرية للتجار، دعم إعادة الطلب، وشخص يعرف المنتج فعلاً.",
    "ببساطة: يدفع العميل الفردي السعر الكامل لطقم واحد. أما الصالون الذي لديه حساب جملة فيدفع أقل بنحو 30–60% للوحدة ويتعامل مع الإكسسوارات كخدمة — تشترى حسب الـweft أو الحزمة أو الرأس الكامل، وتُفوتر للعميلة تكلفة التركيب فوقها.",
  ],
  includesHeading: "ما الذي يشمله حساب الجملة الجيد",
  includesCards: [
    { icon: "badgePercent", title: "أسعار الجملة", text: "أسعار تجارية على كل SKU — عادة 30–60% أقل من التجزئة. أكبر رافعة على هامش الإكسسوارات لديك." },
    { icon: "package", title: "مخزون ذو أولوية", text: "يحصل مشترو الجملة على تخصيص الدرجات والأطوال الشائعة قبل نفادها للمفرق." },
    { icon: "truck", title: "إعادة طلب موثوقة", text: "شحن سريع 3–5 أيام مباشرة من المصنع، فتعيد الطلب حسب الحاجة دون تخزين فائض." },
    { icon: "users", title: "دعم الحساب", text: "تواصل مباشر مع أشخاص يعرفون الشعر — WhatsApp أو البريد أو الهاتف — لا طابور تذاكر." },
  ],
  qualifyHeading: "كيفية التأهل لحساب الجملة في UK",
  qualifyIntro:
    "يطلب معظم موردي UK المحترمين دليلاً بسيطاً على أنك مشترٍ تجاري شرعي. هذا يحمي تسعيرهم وسمعتهم — فهم بحاجة إلى معرفة أن المنتج سيُطبَّق مهنياً.",
  qualifySteps: [
    { step: "إثبات النشاط التجاري", detail: "اسم الصالون وعنوان النشاط وموقع ويب أو حساب اجتماعي. غالباً ما يُقبل رقم تسجيل الشركة." },
    { step: "الملف المهني", detail: "مؤهل ستايلست أو شهادة تأمين أو معرض أعمال الإكسسوارات." },
    { step: "طلب الحساب", detail: "إكمال نموذج تجاري قصير. يوافق D.S Hair Beauty على معظم الطلبات في نفس اليوم." },
    { step: "أول طلب", detail: "يوصي الكثير من الموردين بطلب عينة أولاً لتقييم الجودة قبل الالتزام بحجم كبير." },
  ],
  compareHeading: "حساب الجملة مقابل العلامة الخاصة: أيهما تحتاج؟",
  compareIntro:
    "حساب الجملة هو نقطة البداية: تشتري منتجاً ذا علامة تجارية بأسعار الجملة وتستخدمه في صالونك. العلامة الخاصة هي الخطوة التالية — يُشحَن نفس المنتج تحت علامتك التجارية الخاصة مع تغليف مخصص واسمك عليه.",
  tradeCardTitle: "حساب الجملة",
  tradeCardItems: [
    "يبدأ فوراً",
    "منتج العلامة D.S Hair & Beauty",
    "الأفضل لاختبار الطلب",
    "بلا حد أدنى للطلب",
  ],
  privateLabelCardTitle: "العلامة الخاصة",
  privateLabelCardItems: [
    "علامتك التجارية على العلبة",
    "تغليف وحزم درجات مخصصة",
    "الأفضل بمجرد استقرار الحجم",
    "قيمة مدركة أعلى",
  ],
  compareOutroBefore:
    "لست متأكداً بعد؟ افتح حساب جملة أولاً، تعرّف على الدرجات والطرق التي يشتريها عملاؤك فعلاً، ثم انتقل إلى العلامة الخاصة بمجرد حصولك على بيانات إعادة طلب حقيقية. اطلع على ",
  compareOutroLink: "دليل العلامة الخاصة",
  compareOutroAfter: " للمسار الكامل.",
  factoryHeading: "لماذا يتفوق التوريد مباشرة من المصنع على الموزعين التقليديين",
  factoryP1Before:
    "يجلس الموزعون التقليديون بين المصنع وصالونك — كل طبقة تضيف تكلفة. مورّد مباشر من المصنع (مثل ذراع التصنيع لدينا ",
  factoryP1Link: "wigexporter.com",
  factoryP1After:
    ") يزيل هذه الطبقة، فإن سعر الجملة لديك يعكس التكلفة الفعلية لتصنيع الشعر، لا ثلاثة هوامش متراكمة.",
  factoryP2Before:
    "الميزة العملية: هوامش أفضل لصالونك، ومورّد قادر على التخصيص (مطابقة الدرجة، العلامة الخاصة، التغليف) لأنه يسيطر فعلاً على الإنتاج. إذا كنت تقارن الموردين، فإن ",
  factoryP2Link: "مقارنة تغيير المورّد",
  factoryP2After: " توضّح الفروق الحقيقية.",
  ctaBoxTitle: "افتح حساب الجملة المجاني",
  ctaBoxBody:
    "بلا حد أدنى للطلب. موافقة في نفس اليوم. أسعار الجملة على إكسسوارات 100% Remy شعر بشري، مع شحن سريع 3–5 أيام إلى UK & EU.",
  ctaBoxPrimaryLabel: "افتح حساب جملة ←",
  ctaBoxPrimaryHref: "/trade-wholesale",
  ctaBoxSecondaryLabel: "برنامج شركاء الصالون",
  ctaBoxSecondaryHref: "/salon-partners",
  faqHeading: "الأسئلة الشائعة",
  faqs: [
    {
      q: "ما هو حساب الجملة لإكسسوارات الشعر؟",
      a: "حساب الجملة هو علاقة شراء مهنية مع مورّد إكسسوارات الشعر. يمنح الصالونات والستايلست وصولاً إلى أسعار الجملة وتخصيص المخزون ذي الأولوية ومنتجات حصرية للتجار ودعم الحساب — بدلاً من دفع أسعار التجزئة للمستهلكين.",
    },
    {
      q: "هل أحتاج إلى شركة لفتح حساب جملة؟",
      a: "نعم — حسابات الجملة مخصصة للأعمال الشرعية. يطلب معظم موردي UK اسم صالون وعنوان نشاط وبعض إثبات النشاط المهني (موقع ويب أو حساب اجتماعي أو مؤهل ستايلست). في D.S Hair Beauty نتحقق من الحالة التجارية لكن بلا حد أدنى للطلب، لذا نرحب بالعاملين المستقلين الجدد.",
    },
    {
      q: "بماذا يمكنني الحصول على الموافقة؟",
      a: "يوافق الكثير من الموردين خلال يوم عمل واحد. يوافق D.S Hair Beauty على معظم الطلبات في نفس اليوم، ويمكنك تقديم أول طلب فور الموافقة.",
    },
    {
      q: "هل هناك حد أدنى للطلب في حساب الجملة؟",
      a: "يعتمد ذلك على المورّد. غالباً ما يتطلب الموزعون الكبار 10–50 وحدة لكل منتج. لا يفرض D.S Hair Beauty حداً أدنى للكمية — تشتري ما تحتاجه عندما تحتاجه بأسعار الجملة.",
    },
    {
      q: "ما الفرق بين حساب الجملة والعلامة الخاصة؟",
      a: "يسمح لك حساب الجملة بشراء منتج ذي علامة تجارية بأسعار الجملة لاستخدامه في صالونك. العلامة الخاصة أبعد: يُشحَن المنتج تحت علامتك التجارية الخاصة بتغليف مخصص. الجملة هي نقطة البداية؛ والعلامة الخاصة هي الخطوة التالية بمجرد استقرار الحجم.",
    },
  ],
  relatedKicker: "دليل ذات صلة",
  relatedCard1Title: "Wholesale Hair Extensions UK",
  relatedCard1Href: "/blog/wholesale-hair-extensions-uk",
  relatedCard2Title: "Hair Extension Profit Margins",
  relatedCard2Href: "/blog/hair-extension-profit-margin-guide",
  backLabel: "العودة إلى المدونة",
}

const sv: HairExtensionsTradeAccountContent = {
  seoTitle:
    "Handelskonto för Hårförlängningar: Vad det är & hur du öppnar ett (UK-salonger) | D.S Hair Beauty",
  seoDescription:
    "Ett handelskonto för hårförlängningar ger UK-salonger partipriser, prioritetslager och kontosupport. Lär dig vad handelskonton inkluderar, hur du kvalificerar dig och varför fabriksdirekt slår traditionella distributörer.",
  heroBadge: "Trade & Parti",
  heroTitle: "Handelskonto för Hårförlängningar",
  heroSubtitle:
    "Vad ett handelskonto faktiskt ger din salong, hur du kvalificerar dig i UK och varför fabriksdirekt försörjning förändrar matten för fristående salonger.",
  ctaPrimaryLabel: "Öppna handelskonto",
  ctaPrimaryHref: "/trade-wholesale",
  ctaSecondaryLabel: "Fler guider",
  ctaSecondaryHref: "/blog",
  breadcrumbHome: "Hem",
  breadcrumbBlog: "Blogg",
  breadcrumbCurrent: "Handelskonto",
  authorKicker: "Skrivet av",
  authorRole:
    "Grundare & Trade Director på D.S Hair & Beauty · 19 år inom tillverkning av hårförlängningar",
  whatHeading: "Vad är ett handelskonto för hårförlängningar?",
  whatParagraphs: [
    "Ett handelskonto är en professionell köprelation med en leverantör av hårförlängningar. Istället för att betala konsumentpriser köper din salong till partipriser och får tillgång till saker som slutkunder aldrig ser: prioritetslager, endast-för-handeln nyanser, support för ombeställningar och någon som faktiskt känner produkten.",
    "Enkelt uttryckt: en slutkund betalar fullt pris för ett set. En salong med handelskonto betalar cirka 30–60 % mindre per enhet och behandlar förlängningar som en tjänst — köpt per weft, pack eller helt huvud, och fakturerar kunden för appliceringen ovanpå.",
  ],
  includesHeading: "Vad ett bra handelskonto inkluderar",
  includesCards: [
    { icon: "badgePercent", title: "Partipriser", text: "Trade-priser på varje SKU — typiskt 30–60 % under butikspris. Den enskilt största hävstången på din förlängningsmarginal." },
    { icon: "package", title: "Prioritetslager", text: "Trade-köpare får tilldelade populära nyanser och längder innan de tar slut för detaljhandeln." },
    { icon: "truck", title: "Pålitliga ombeställningar", text: "Express 3–5 dagar fabriksdirekt frakt, så du beställer efter behov utan att hålla överskottslager." },
    { icon: "users", title: "Kontosupport", text: "Direktkontakt med folk som känner håret — WhatsApp, e-post eller telefon — inte en ärendekö." },
  ],
  qualifyHeading: "Så kvalificerar du dig för ett handelskonto i UK",
  qualifyIntro:
    "De flesta seriösa UK-leverantörer begär grundläggande bevis på att du är en legitim handelsköpare. Det skyddar deras prissättning och rykte — de behöver veta att produkten kommer appliceras professionellt.",
  qualifySteps: [
    { step: "Handelsbevis", detail: "Salongnamn, handelsadress och en webbplats eller social profil. Ett företagsregistreringsnummer accepteras ofta." },
    { step: "Professionell profil", detail: "En stylistkvalifikation, försäkringsintyg eller ett portfölj av förlängningsarbeten." },
    { step: "Kontoansökan", detail: "Fyll i ett kort trade-formulär. D.S Hair Beauty godkänner de flesta ansökningar samma dag." },
    { step: "Första ordern", detail: "Många leverantörer rekommenderar en provorder först så att du kan bedöma kvaliteten innan du binder volym." },
  ],
  compareHeading: "Handelskonto vs Private Label: Vad behöver du?",
  compareIntro:
    "Ett handelskonto är ingångspunkten: du köper varumärkesprodukt till partipriser och använder den i din salong. Private Label är nästa steg — samma produkt skickas under din egen salongvarumärke, med anpassat emballage och ditt namn på.",
  tradeCardTitle: "Handelskonto",
  tradeCardItems: [
    "Startar direkt",
    "Varumärkesprodukt från D.S Hair & Beauty",
    "Bäst för att testa efterfrågan",
    "Ingen minimiorder",
  ],
  privateLabelCardTitle: "Private Label",
  privateLabelCardItems: [
    "Din salongvarumärke på boxen",
    "Anpassat emballage & nyansset",
    "Bäst när volymen är stabil",
    "Högre upplevt värde",
  ],
  compareOutroBefore:
    "Osäker än? Öppna först ett handelskonto, ta reda på vilka nyanser och metoder dina kunder faktiskt köper, och gå sedan över till private label när du har riktiga ombeställningsdata. Se vår ",
  compareOutroLink: "private label-guide",
  compareOutroAfter: " för hela vägen.",
  factoryHeading: "Varför fabriksdirekt slår traditionella distributörer",
  factoryP1Before:
    "Traditionella distributörer sitter mellan fabriken och din salong — varje lager lägger till kostnad. En fabriksdirekt leverantör (som vår tillverkningsgren ",
  factoryP1Link: "wigexporter.com",
  factoryP1After:
    ") tar bort det lagret, så ditt trade-pris återspeglar det faktiska tillverkningspriset för håret, inte tre påstaplade påslag.",
  factoryP2Before:
    "Den praktiska fördelen: bättre marginaler för din salong, och en leverantör som kan anpassa (nyansmatchning, private label, emballage) eftersom de faktiskt styr produktionen. Om du jämför leverantörer visar vår ",
  factoryP2Link: "jämförelse av leverantörsbyte",
  factoryP2After: " de verkliga skillnaderna.",
  ctaBoxTitle: "Öppna ditt kostnadsfria handelskonto",
  ctaBoxBody:
    "Ingen minimiorder. Godkännande samma dag. Partipriser på 100% Remy människohår förlängningar, med express 3–5 dagars frakt till UK & EU.",
  ctaBoxPrimaryLabel: "Öppna handelskonto →",
  ctaBoxPrimaryHref: "/trade-wholesale",
  ctaBoxSecondaryLabel: "Salongpartnerprogram",
  ctaBoxSecondaryHref: "/salon-partners",
  faqHeading: "Vanliga frågor",
  faqs: [
    {
      q: "Vad är ett handelskonto för hårförlängningar?",
      a: "Ett handelskonto är en professionell köprelation med en leverantör av hårförlängningar. Det ger salonger och stylister tillgång till partipriser, prioritetslagerallokering, endast-för-handeln produkter och kontosupport — istället för att betala konsumentpriser.",
    },
    {
      q: "Behöver jag ett företag för att öppna ett handelskonto?",
      a: "Ja — handelskonton är för legitima företag. De flesta UK-leverantörer begär ett salongnamn, handelsadress och något bevis på professionell aktivitet (en webbplats, social profil eller stylistkvalifikation). På D.S Hair Beauty verifierar vi handelsstatus men har ingen minimiorder, så nya frilansare är välkomna.",
    },
    {
      q: "Hur snabbt kan jag få godkännande?",
      a: "Många leverantörer godkänner inom en arbetsdag. D.S Hair Beauty godkänner de flesta ansökningar samma dag, och du kan lägga din första order direkt efter godkännande.",
    },
    {
      q: "Finns det en minimiorder på ett handelskonto?",
      a: "Det beror på leverantören. Stora distributörer kräver ofta 10–50 enheter per produkt. D.S Hair Beauty har ingen minimikvantitet — du köper vad du behöver, när du behöver det, till trade-priser.",
    },
    {
      q: "Vad är skillnaden mellan handelskonto och private label?",
      a: "Ett handelskonto låter dig köpa varumärkesprodukt till partipriser för din salong. Private label går längre: produkten skickas under din egen salongvarumärke med anpassat emballage. Handel är startpunkten; private label är nästa steg när volymen är stabil.",
    },
  ],
  relatedKicker: "Relaterad guide",
  relatedCard1Title: "Wholesale Hair Extensions UK",
  relatedCard1Href: "/blog/wholesale-hair-extensions-uk",
  relatedCard2Title: "Hair Extension Profit Margins",
  relatedCard2Href: "/blog/hair-extension-profit-margin-guide",
  backLabel: "Tillbaka till Bloggen",
}

const pl: HairExtensionsTradeAccountContent = {
  seoTitle:
    "Konto Hurtowe Przedłużeń Włosów: Czym jest i jak je otworzyć (Salony UK) | D.S Hair Beauty",
  seoDescription:
    "Konto hurtowe przedłużeń włosów daje salonom w UK ceny hurtowe, priorytetowy stock i wsparcie konta. Dowiedz się, co obejmują konta hurtowe, jak się zakwalifikować i dlaczego dostawca bezpośrednio od fabryki bije tradycyjnych dystrybutorów.",
  heroBadge: "Hurt & Partia",
  heroTitle: "Konto Hurtowe Przedłużeń Włosów",
  heroSubtitle:
    "Co konto hurtowe daje Twojemu salonowi, jak się zakwalifikować w UK i dlaczego zaopatrzenie bezpośrednio od fabryki zmienia rachunki dla niezależnych salonów.",
  ctaPrimaryLabel: "Otwórz konto hurtowe",
  ctaPrimaryHref: "/trade-wholesale",
  ctaSecondaryLabel: "Więcej przewodników",
  ctaSecondaryHref: "/blog",
  breadcrumbHome: "Strona główna",
  breadcrumbBlog: "Blog",
  breadcrumbCurrent: "Konto hurtowe",
  authorKicker: "Napisane przez",
  authorRole:
    "Założycielka i Trade Director w D.S Hair & Beauty · 19 lat w produkcji przedłużeń włosów",
  whatHeading: "Czym jest konto hurtowe przedłużeń włosów?",
  whatParagraphs: [
    "Konto hurtowe to relacja zakupowa z dostawcą przedłużeń włosów. Zamiast płacić detaliczne ceny konsumenckie, Twój salon kupuje w cenach hurtowych i zyskuje dostęp do rzeczy, których klienci detaliczni nigdy nie widzą: priorytetowy stock, odcienie tylko dla handlu, wsparcie przy zamawianiu i kogoś, kto faktycznie zna produkt.",
    "Mówiąc prosto: klient detaliczny płaci pełną cenę za jeden zestaw. Salon z kontem hurtowym płaci o ok. 30–60% mniej za sztukę i traktuje przedłużenia jako usługę — kupowane na weft, paczkę lub całą głowę, i obciąża klientkę kosztem aplikacji na wierzchu.",
  ],
  includesHeading: "Co obejmuje dobre konto hurtowe",
  includesCards: [
    { icon: "badgePercent", title: "Ceny hurtowe", text: "Stawki trade na każdy SKU — zwykle 30–60% poniżej detalu. Największa dźwignia na Twoją marżę przedłużeń." },
    { icon: "package", title: "Priorytetowy stock", text: "Kupujący hurtowo otrzymują przydzielone popularne odcienie i długości, zanim wyprzedadzą się detalicznie." },
    { icon: "truck", title: "Niezawoodne zamówienia", text: "Ekspresowa wysyłka 3–5 dni bezpośrednio od fabryki, więc zamawiasz wg potrzeb bez nadmiaru zapasów." },
    { icon: "users", title: "Wsparcie konta", text: "Bezpośredni kontakt z ludźmi, którzy znają włosy — WhatsApp, e-mail lub telefon — nie kolejka biletów." },
  ],
  qualifyHeading: "Jak zakwalifikować się do konta hurtowego w UK",
  qualifyIntro:
    "Większość renomowanych dostawców UK prosi o podstawowy dowód, że jesteś legalnym nabywcą handlowym. To chroni ich ceny i reputację — muszą wiedzieć, że produkt będzie nakładany profesjonalnie.",
  qualifySteps: [
    { step: "Dowód działalności", detail: "Nazwa salonu, adres działalności i strona www lub profil społecznościowy. Często akceptowany jest numer rejestracyjny firmy." },
    { step: "Profil zawodowy", detail: "Kwalifikacja stylistki, certyfikat ubezpieczenia lub portfolio prac przedłużeniowych." },
    { step: "Wniosek o konto", detail: "Wypełnij krótki formularz trade. D.S Hair Beauty zatwierdza większość wniosków tego samego dnia." },
    { step: "Pierwsze zamówienie", detail: "Wielu dostawców poleca najpierw zamówienie próbne, by ocenić jakość przed zaangażowaniem wolumenu." },
  ],
  compareHeading: "Konto hurtowe vs Private Label: Czego potrzebujesz?",
  compareIntro:
    "Konto hurtowe to punkt wejścia: kupujesz markowy produkt w cenach hurtowych i używasz go w salonie. Private label to kolejny krok — ten sam produkt wysyłany jest pod własną marką salonu, z niestandardowym opakowaniem i Twoim nazwiskiem na nim.",
  tradeCardTitle: "Konto hurtowe",
  tradeCardItems: [
    "Zaczyna się od razu",
    "Markowy produkt D.S Hair & Beauty",
    "Najlepsze do testowania popytu",
    "Bez minimalnego zamówienia",
  ],
  privateLabelCardTitle: "Private Label",
  privateLabelCardItems: [
    "Twoja marka salonu na pudełku",
    "Niestandardowe opakowanie i zestawy odcieni",
    "Najlepsze gdy wolumen jest stały",
    "Wyższa postrzegana wartość",
  ],
  compareOutroBefore:
    "Nie jesteś pewna? Najpierw otwórz konto hurtowe, sprawdź, jakich odcieni i metod Twoje klientki faktycznie kupują, a potem przejdź na private label, gdy masz rzeczywiste dane o zamówieniach. Zobacz nasz ",
  compareOutroLink: "przewodnik po private label",
  compareOutroAfter: " dla pełnej ścieżki.",
  factoryHeading: "Dlaczego bezpośrednio od fabryki bije tradycyjnych dystrybutorów",
  factoryP1Before:
    "Tradycyjni dystrybutorzy siedzą między fabryką a Twoim salonem — każda warstwa dodaje koszt. Dostawca bezpośrednio od fabryki (jak nasz dział produkcyjny ",
  factoryP1Link: "wigexporter.com",
  factoryP1After:
    ") usuwa tę warstwę, więc Twoja cena trade odzwierciedla rzeczywisty koszt wyprodukowania włosa, a nie trzy nałożone marże.",
  factoryP2Before:
    "Praktyczna zaleta: lepsze marże dla salonu i dostawca, który potrafi dostosować (dobór odcienia, private label, opakowanie), bo faktycznie kontroluje produkcję. Jeśli porównujesz dostawców, nasze ",
  factoryP2Link: "zestawienie zmiany dostawcy",
  factoryP2After: " rozkłada rzeczywiste różnice.",
  ctaBoxTitle: "Otwórz swoje bezpłatne konto hurtowe",
  ctaBoxBody:
    "Bez minimalnego zamówienia. Zatwierdzenie tego samego dnia. Ceny hurtowe za 100% Remy włosy naturalne, z ekspresową wysyłką 3–5 dni do UK & EU.",
  ctaBoxPrimaryLabel: "Otwórz konto hurtowe →",
  ctaBoxPrimaryHref: "/trade-wholesale",
  ctaBoxSecondaryLabel: "Program Partner Salonu",
  ctaBoxSecondaryHref: "/salon-partners",
  faqHeading: "Najczęściej zadawane pytania",
  faqs: [
    {
      q: "Czym jest konto hurtowe przedłużeń włosów?",
      a: "Konto hurtowe to profesjonalna relacja zakupowa z dostawcą przedłużeń włosów. Daje salonom i stylistkom dostęp do cen hurtowych, priorytetowej alokacji stocku, produktów tylko dla handlu i wsparcia konta — zamiast płacić detaliczne ceny konsumenckie.",
    },
    {
      q: "Czy potrzebuję firmy, by otworzyć konto hurtowe?",
      a: "Tak — konta hurtowe są dla legalnych przedsiębiorstw. Większość dostawców UK prosi o nazwę salonu, adres działalności i jakiś dowód aktywności zawodowej (stronę www, profil społecznościowy lub kwalifikację stylistki). W D.S Hair Beauty weryfikujemy status handlowy, ale nie mamy minimalnego zamówienia, więc nowi freelancerzy są mile widziani.",
    },
    {
      q: "Jak szybko mogę otrzymać zatwierdzenie?",
      a: "Wielu dostawców zatwierdza w ciągu jednego dnia roboczego. D.S Hair Beauty zatwierdza większość wniosków tego samego dnia, a pierwsze zamówienie możesz złożyć natychmiast po zatwierdzeniu.",
    },
    {
      q: "Czy na koncie hurtowym obowiązuje minimalne zamówienie?",
      a: "To zależy od dostawcy. Wielcy dystrybutorzy często wymagają 10–50 sztuk na produkt. D.S Hair Beauty nie ma minimalnej ilości — kupujesz to, czego potrzebujesz, kiedy potrzebujesz, po cenach trade.",
    },
    {
      q: "Jaka jest różnica między kontem hurtowym a private label?",
      a: "Konto hurtowe pozwala kupować markowy produkt po cenach hurtowych do użytku w salonie. Private label idzie dalej: produkt wysyłany jest pod własną marką salonu z niestandardowym opakowaniem. Handel to punkt wejścia; private label to kolejny krok, gdy wolumen jest stały.",
    },
  ],
  relatedKicker: "Powiązany przewodnik",
  relatedCard1Title: "Wholesale Hair Extensions UK",
  relatedCard1Href: "/blog/wholesale-hair-extensions-uk",
  relatedCard2Title: "Hair Extension Profit Margins",
  relatedCard2Href: "/blog/hair-extension-profit-margin-guide",
  backLabel: "Powrót do Bloga",
}

export const hairExtensionsTradeAccountContent: Record<Locale, HairExtensionsTradeAccountContent> = {
  en,
  de,
  fr,
  ar,
  sv,
  pl,
}
