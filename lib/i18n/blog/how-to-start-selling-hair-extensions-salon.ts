import type { Locale } from "@/lib/i18n/config"

// Content module for the "How to Start Selling Hair Extensions in Your Salon"
// blog post. All visible copy is externalised here so the page can be rendered
// in any of the 6 locales with an identical layout. English is the source of truth.

export interface HowToStartSellingHairExtensionsSalonContent {
  seoTitle: string
  seoDescription: string
  navHome: string
  navBlog: string
  navCurrent: string
  heroBadge: string
  heroTitle: string
  heroSubtitle: string
  heroPrimaryLabel: string
  heroPrimaryHref: string
  heroSecondaryLabel: string
  heroSecondaryHref: string
  authorBadge: string
  authorLead: string
  authorName: string
  authorOutro: string
  authorHref: string
  introP: string
  step1Heading: string
  step1PLead: string
  step1PStrong: string
  step1POutro: string
  step2Heading: string
  step2PLead: string
  step2PStrong1: string
  step2PMid: string
  step2PStrong2: string
  step2POutro: string
  step2Cards: { iconKey: "graduationCap" | "users" | "badgePercent"; title: string; text: string }[]
  step3Heading: string
  step3P: string
  consultationSteps: { step: string; detail: string }[]
  step4Heading: string
  step4PLead: string
  step4PStrong1: string
  step4PMid: string
  step4PStrong2: string
  step4POutro: string
  profitMarginLinkLabel: string
  profitMarginLinkHref: string
  step4PFinal: string
  step5Heading: string
  step5P1: string
  step5P2Lead: string
  privateLabelLinkLabel: string
  privateLabelLinkHref: string
  step5P2Outro: string
  ctaBoxTitle: string
  ctaBoxBody: string
  ctaPrimaryLabel: string
  ctaPrimaryHref: string
  ctaSecondaryLabel: string
  ctaSecondaryHref: string
  faqHeading: string
  faqs: { q: string; a: string }[]
  related1Label: string
  related1Title: string
  related1Href: string
  related2Label: string
  related2Title: string
  related2Href: string
  backLabel: string
}

const en: HowToStartSellingHairExtensionsSalonContent = {
  seoTitle: "How to Start Selling Hair Extensions in Your Salon (Step-by-Step) | D.S Hair Beauty",
  seoDescription:
    "A practical step-by-step plan for salon owners to launch hair extension services: training, supplier setup, consultation process, pricing, and marketing to existing clients — without overstocking.",
  navHome: "Home",
  navBlog: "Blog",
  navCurrent: "Start Selling Extensions",
  heroBadge: "Launch Plan",
  heroTitle: "How to Start Selling Hair Extensions in Your Salon",
  heroSubtitle:
    "A practical, low-risk launch plan — from stylist training to your first booked client, without tying up cash in stock you can't sell.",
  heroPrimaryLabel: "Set Up Your Supplier",
  heroPrimaryHref: "/trade-wholesale",
  heroSecondaryLabel: "More Guides",
  heroSecondaryHref: "/blog",
  authorBadge: "CC",
  authorLead: "Written by ",
  authorName: "Caro Chen",
  authorOutro: ", Founder & Trade Director at D.S Hair & Beauty · 19 years in hair extension manufacturing",
  authorHref: "/about/caro-chen",
  introP:
    "Extensions are one of the highest-margin services a salon can run — but most owners overthink the start. You do not need a warehouse, a big upfront order, or years of experience. You need one trained stylist, a reliable trade supplier, and a simple consultation process. Here is the launch plan we give new partner salons.",
  step1Heading: "Step 1 — Train One Stylist First",
  step1PLead:
    "Do not train the whole team on day one. Send your most interested stylist on a certified course for one method — usually ",
  step1PStrong: "tape-in or hand-tied weft",
  step1POutro:
    " — then let them train others in-house once they are confident. Competence protects clients and your reputation; a bad first application kills word of mouth.",
  step2Heading: "Step 2 — Set Up a No-Minimum Trade Supplier",
  step2PLead: "Open a trade account with a supplier that has ",
  step2PStrong1: "no minimum order",
  step2PMid:
    " and express 3–5 day shipping. This lets you buy only what a booked client needs — zero dead stock. Ask for a ",
  step2PStrong2: "digital colour catalogue",
  step2POutro:
    " so you can show clients the full 40+ shade range on a tablet in the chair, without holding every colour physically.",
  step2Cards: [
    { iconKey: "graduationCap", title: "Train", text: "One stylist certified in tape-in or weft to start." },
    { iconKey: "users", title: "Consult", text: "Free in-chair consultation using a digital shade catalogue." },
    { iconKey: "badgePercent", title: "Supply", text: "No-minimum trade account, reorder in 3–5 days." },
  ],
  step3Heading: "Step 3 — Build a Simple Consultation",
  step3P: "A good consultation is where the sale happens. Keep it repeatable:",
  consultationSteps: [
    {
      step: "Assess",
      detail:
        "Hair type, length goal, and budget. Match method to lifestyle — tape-in for flexibility, weft for volume, nano/K-tip for permanence.",
    },
    {
      step: "Colour match",
      detail: "Use the digital catalogue and a daylight photo. Offer a free colour match so clients commit with confidence.",
    },
    {
      step: "Quote",
      detail:
        "Give a single price: hair + application. No surprises. Show the re-order cycle so they know what upkeep costs.",
    },
  ],
  step4Heading: "Step 4 — Price for Margin",
  step4PLead: "Charge the ",
  step4PStrong1: "hair",
  step4PMid: " and the ",
  step4PStrong2: "application",
  step4POutro:
    " separately. A full-head application might be £150–400 in service fees plus the cost of hair (which you bought at trade). Because trade pricing runs 30–60% below retail, your product margin alone is healthy before you even count the service. Our ",
  profitMarginLinkLabel: "profit margin guide",
  profitMarginLinkHref: "/blog/hair-extension-profit-margin-guide",
  step4PFinal: " breaks this down per method with real numbers.",
  step5Heading: "Step 5 — Market to Warm Clients First",
  step5P1:
    "Your existing clients are your cheapest, highest-converting audience. Many already want length or volume — they just have not been asked. Offer a free consultation to regulars, post before/afters (with permission), and keep a shade ring or digital catalogue on the reception desk. Warm clients convert far better than cold ads while you build a portfolio.",
  step5P2Lead: "Once you have 10–15 happy extension clients and steady re-orders, consider ",
  privateLabelLinkLabel: "private label",
  privateLabelLinkHref: "/blog/private-label-hair-extensions-uk",
  step5P2Outro: " so the product carries your salon's name — the step that turns a service into a brand.",
  ctaBoxTitle: "Ready to Set Up Your Supplier?",
  ctaBoxBody:
    "Open a free trade account — no minimum order, same-day approval, express 3–5 day shipping, and a free digital colour catalogue. Start selling extensions this month.",
  ctaPrimaryLabel: "Open a Trade Account →",
  ctaPrimaryHref: "/trade-wholesale",
  ctaSecondaryLabel: "Salon Partner Programme",
  ctaSecondaryHref: "/salon-partners",
  faqHeading: "Frequently Asked Questions",
  faqs: [
    {
      q: "Do I need a qualification to offer hair extensions in my salon?",
      a: "You need to be competent in the method you offer — tape-in, weft, nano ring, or K-tip each require specific training. Many salons send one or two stylists on a certified extension course first, then train the rest in-house. Competence protects your clients and your reputation.",
    },
    {
      q: "How much does it cost to start offering extensions?",
      a: "With a no-minimum-order trade supplier you can start with almost no inventory — just a digital colour catalogue and a sample of your best-selling shades. Your main cost is stylist training. You only buy product once a client has booked, so cash risk is very low.",
    },
    {
      q: "Which method should I start with?",
      a: "Tape-in and hand-tied weft are the most popular starting points for salons: they suit the widest range of clients, are relatively quick to apply, and have strong re-order cycles. Add nano ring and K-tip once you see demand for more permanent options.",
    },
    {
      q: "How do I price extension services?",
      a: "Charge separately for the hair (at your trade cost marked up) and the application (your service fee). A full-head application typically runs £150–400 in service fees plus the cost of hair. See our profit margin guide for the exact maths per method.",
    },
    {
      q: "How do I get my first extension clients?",
      a: "Start with your existing client base — many already want length or volume. Offer a free consultation, show before/afters on social, and use a digital colour catalogue so clients can pick shades in-chair. Warm clients convert far better than cold ads.",
    },
  ],
  related1Label: "Related Guide",
  related1Title: "Profit Margin Guide",
  related1Href: "/blog/hair-extension-profit-margin-guide",
  related2Label: "Related Guide",
  related2Title: "Trade Account Explained",
  related2Href: "/blog/hair-extensions-trade-account",
  backLabel: "Back to Blog",
}

const de: HowToStartSellingHairExtensionsSalonContent = {
  seoTitle: "So verkaufen Sie Haarverlängerungen in Ihrem Salon (Schritt für Schritt) | D.S Hair Beauty",
  seoDescription:
    "Ein praktischer Schritt-für-Schritt-Plan für Salonbesitzer, um Haarverlängerungs-Services zu starten: Training, Lieferantenaufbau, Beratungsprozess, Preisgestaltung und Marketing an bestehende Kunden — ohne Überbestände.",
  navHome: "Startseite",
  navBlog: "Blog",
  navCurrent: "Verlängerungen verkaufen",
  heroBadge: "Startplan",
  heroTitle: "So verkaufen Sie Haarverlängerungen in Ihrem Salon",
  heroSubtitle:
    "Ein praktischer, risikoarmer Startplan — von der Stylistenschulung bis zur ersten Buchung, ohne Kapital in unverkäuflichem Lagerbestand zu binden.",
  heroPrimaryLabel: "Lieferanten einrichten",
  heroPrimaryHref: "/trade-wholesale",
  heroSecondaryLabel: "Weitere Guides",
  heroSecondaryHref: "/blog",
  authorBadge: "CC",
  authorLead: "Geschrieben von ",
  authorName: "Caro Chen",
  authorOutro: ", Gründerin & Trade-Direktorin bei D.S Hair & Beauty · 19 Jahre Erfahrung in der Haarverlängerungs-Herstellung",
  authorHref: "/about/caro-chen",
  introP:
    "Haarverlängerungen gehören zu den margenstärksten Services, die ein Salon anbieten kann — aber die meisten Inhaber überdenken den Start. Sie brauchen kein Lager, keine große Vorbestellung und keine jahrelange Erfahrung. Sie brauchen eine geschulte Stylistin, einen zuverlässigen Trade-Lieferanten und einen einfachen Beratungsprozess. Hier ist der Startplan, den wir neuen Partner-Salons geben.",
  step1Heading: "Schritt 1 — Zuerst eine Stylistin schulen",
  step1PLead:
    "Schulen Sie nicht das ganze Team am ersten Tag. Senden Sie Ihre interessierteste Stylistin auf einen zertifizierten Kurs für eine Methode — in der Regel ",
  step1PStrong: "tape-in oder hand-tied weft",
  step1POutro:
    " — und lassen Sie sie dann andere intern schulen, sobald sie sicher ist. Kompetenz schützt Kundinnen und Ihren Ruf; eine schlechte erste Anwendung zerstört die Mundpropaganda.",
  step2Heading: "Schritt 2 — Einen Trade-Lieferanten ohne Mindestbestellmenge einrichten",
  step2PLead: "Eröffnen Sie ein Trade-Konto bei einem Lieferanten, der ",
  step2PStrong1: "keine Mindestbestellmenge",
  step2PMid:
    " und Expressversand in 3–5 Tagen anbietet. So kaufen Sie nur, was eine gebuchte Kundin braucht — kein totes Kapital. Bitten Sie um einen ",
  step2PStrong2: "digitalen Farbkatalog",
  step2POutro:
    ", damit Sie Kundinnen die volle Palette mit 40+ Farbtönen am Tablet im Stuhl zeigen können, ohne jeden Farbton physisch vorrätig zu haben.",
  step2Cards: [
    { iconKey: "graduationCap", title: "Trainieren", text: "Eine Stylistin zu Beginn in tape-in oder weft zertifiziert." },
    { iconKey: "users", title: "Beraten", text: "Kostenlose Beratung am Stuhl mit digitalem Farbkatalog." },
    { iconKey: "badgePercent", title: "Liefern", text: "Trade-Konto ohne Mindestmenge, Nachbestellung in 3–5 Tagen." },
  ],
  step3Heading: "Schritt 3 — Eine einfache Beratung aufbauen",
  step3P: "Eine gute Beratung ist der Ort, an dem der Verkauf passiert. Halten Sie sie wiederholbar:",
  consultationSteps: [
    {
      step: "Einschätzen",
      detail:
        "Haartyp, Längenziel und Budget. Methode an den Lebensstil anpassen — tape-in für Flexibilität, weft für Volumen, nano/K-tip für Dauerhaftigkeit.",
    },
    {
      step: "Farbabstimmung",
      detail: "Digitalen Katalog und Tageslichtfoto nutzen. Kostenlose Farbabstimmung anbieten, damit Kundinnen selbstbewusst buchen.",
    },
    {
      step: "Angebot",
      detail: "Einen Gesamtpreis nennen: Haar + Anwendung. Keine Überraschungen. Den Nachbestellzyklus zeigen, damit sie die Pflegekosten kennen.",
    },
  ],
  step4Heading: "Schritt 4 — Preise mit Marge kalkulieren",
  step4PLead: "Berechnen Sie ",
  step4PStrong1: "Haar",
  step4PMid: " und ",
  step4PStrong2: "Anwendung",
  step4POutro:
    " getrennt. Eine Full-Head-Anwendung kostet vielleicht £150–400 Servicegebühr plus den Haarpreis (den Sie zum Trade-Preis gekauft haben). Da Trade-Preise 30–60% unter dem Einzelhandel liegen, ist allein Ihre Produktmarge gesund, bevor Sie den Service zählen. Unser ",
  profitMarginLinkLabel: "Margen-Guide",
  profitMarginLinkHref: "/blog/hair-extension-profit-margin-guide",
  step4PFinal: " schlüsselt das pro Methode mit echten Zahlen auf.",
  step5Heading: "Schritt 5 — Zuerst an warme Kunden vermarkten",
  step5P1:
    "Ihre bestehenden Kundinnen sind Ihr günstigstes Publikum mit der höchsten Konversionsrate. Viele wollen bereits Länge oder Volumen — es wurde sie nur nie gefragt. Bieten Sie Stammkundinnen eine kostenlose Beratung an, posten Sie Vorher/Nachher-Bilder (mit Erlaubnis) und legen Sie einen Farbring oder digitalen Katalog an die Rezeption. Warme Kundinnen konvertieren weit besser als kalte Anzeigen, während Sie ein Portfolio aufbauen.",
  step5P2Lead: "Sobald Sie 10–15 zufriedene Verlängerungskundinnen und stabile Nachbestellungen haben, denken Sie über ",
  privateLabelLinkLabel: "Private Label",
  privateLabelLinkHref: "/blog/private-label-hair-extensions-uk",
  step5P2Outro: " nach, damit das Produkt den Namen Ihres Salons trägt — der Schritt, der aus einem Service eine Marke macht.",
  ctaBoxTitle: "Bereit, Ihren Lieferanten einzurichten?",
  ctaBoxBody:
    "Eröffnen Sie ein kostenloses Trade-Konto — ohne Mindestbestellmenge, Freigabe am selben Tag, Expressversand in 3–5 Tagen und kostenloser digitaler Farbkatalog. Starten Sie noch diesen Monat mit Verlängerungen.",
  ctaPrimaryLabel: "Trade-Konto eröffnen →",
  ctaPrimaryHref: "/trade-wholesale",
  ctaSecondaryLabel: "Salon-Partnerprogramm",
  ctaSecondaryHref: "/salon-partners",
  faqHeading: "Häufig gestellte Fragen",
  faqs: [
    {
      q: "Brauche ich eine Qualifikation, um in meinem Salon Haarverlängerungen anzubieten?",
      a: "Sie müssen in der Methode, die Sie anbieten, kompetent sein — tape-in, weft, nano ring und K-tip erfordern jeweils spezifische Schulungen. Viele Salons schicken zuerst ein oder zwei Stylistinnen auf einen zertifizierten Verlängerungskurs und schulen dann den Rest intern. Kompetenz schützt Ihre Kundinnen und Ihren Ruf.",
    },
    {
      q: "Wie viel kostet es, mit Verlängerungen zu starten?",
      a: "Mit einem Trade-Lieferanten ohne Mindestbestellmenge können Sie mit fast keinem Lagerbestand starten — nur mit einem digitalen Farbkatalog und einer Probe Ihrer meistverkauften Farbtöne. Ihre Hauptkosten sind die Stylistenschulung. Sie kaufen Produkte erst, wenn eine Kundin gebucht hat, also ist das Cash-Risiko sehr gering.",
    },
    {
      q: "Mit welcher Methode sollte ich beginnen?",
      a: "Tape-in und hand-tied weft sind die beliebtesten Einstiegspunkte für Salons: Sie passen zur breitesten Kundengruppe, sind relativ schnell anzuwenden und haben starke Nachbestellzyklen. Fügen Sie nano ring und K-tip hinzu, sobald Sie Nachfrage nach dauerhafteren Optionen sehen.",
    },
    {
      q: "Wie kalkuliere ich Verlängerungspreise?",
      a: "Berechnen Sie das Haar (zum Trade-Einkaufspreis mit Aufschlag) und die Anwendung (Ihre Servicegebühr) getrennt. Eine Full-Head-Anwendung kostet typischerweise £150–400 Servicegebühr plus den Haarpreis. In unserem Margen-Guide finden Sie die genaue Rechnung pro Methode.",
    },
    {
      q: "Wie bekomme ich meine ersten Verlängerungskundinnen?",
      a: "Beginnen Sie mit Ihrem bestehenden Kundenstamm — viele wollen bereits Länge oder Volumen. Bieten Sie eine kostenlose Beratung an, zeigen Sie Vorher/Nachher-Bilder in den sozialen Medien und nutzen Sie einen digitalen Farbkatalog, damit Kundinnen Farbtöne direkt am Stuhl auswählen. Warme Kundinnen konvertieren weit besser als kalte Anzeigen.",
    },
  ],
  related1Label: "Verwandter Leitfaden",
  related1Title: "Margen-Leitfaden",
  related1Href: "/blog/hair-extension-profit-margin-guide",
  related2Label: "Verwandter Leitfaden",
  related2Title: "Trade-Konto erklärt",
  related2Href: "/blog/hair-extensions-trade-account",
  backLabel: "Zurück zum Blog",
}

const fr: HowToStartSellingHairExtensionsSalonContent = {
  seoTitle: "Comment vendre des extensions capillaires dans votre salon (étape par étape) | D.S Hair Beauty",
  seoDescription:
    "Un plan pratique étape par étape pour lancer les services d'extensions capillaires : formation, mise en place fournisseur, processus de consultation, tarification et marketing auprès des clientes existantes — sans surstockage.",
  navHome: "Accueil",
  navBlog: "Blog",
  navCurrent: "Vendre des extensions",
  heroBadge: "Plan de lancement",
  heroTitle: "Comment vendre des extensions capillaires dans votre salon",
  heroSubtitle:
    "Un plan de lancement pratique et à faible risque — de la formation du styliste à votre première cliente réservée, sans immobiliser d'argent dans du stock invendable.",
  heroPrimaryLabel: "Configurer votre fournisseur",
  heroPrimaryHref: "/trade-wholesale",
  heroSecondaryLabel: "Plus de guides",
  heroSecondaryHref: "/blog",
  authorBadge: "CC",
  authorLead: "Écrit par ",
  authorName: "Caro Chen",
  authorOutro: ", fondatrice et directrice trade chez D.S Hair & Beauty · 19 ans dans la fabrication d'extensions capillaires",
  authorHref: "/about/caro-chen",
  introP:
    "Les extensions sont l'un des services les plus rentables qu'un salon puisse proposer — mais la plupart des propriétaires surcompliquent le démarrage. Pas besoin d'entrepôt, de grosse commande initiale ni d'années d'expérience. Il vous faut un styliste formé, un fournisseur trade fiable et un processus de consultation simple. Voici le plan de lancement que nous donnons aux nouveaux salons partenaires.",
  step1Heading: "Étape 1 — Formez d'abord un styliste",
  step1PLead:
    "Ne formez pas toute l'équipe le premier jour. Envoyez votre styliste le plus motivé suivre un cours certifié pour une méthode — généralement ",
  step1PStrong: "le tape-in ou le hand-tied weft",
  step1POutro:
    " — puis laissez-le former les autres en interne une fois qu'il est à l'aise. La compétence protège les clientes et votre réputation ; une première mauvaise pose tue le bouche-à-oreille.",
  step2Heading: "Étape 2 — Mettez en place un fournisseur trade sans minimum",
  step2PLead: "Ouvrez un compte trade auprès d'un fournisseur qui offre ",
  step2PStrong1: "aucune commande minimum",
  step2PMid:
    " et une expédition express sous 3 à 5 jours. Vous n'achetez ainsi que ce dont une cliente réservée a besoin — zéro stock dormant. Demandez un ",
  step2PStrong2: "catalogue de couleurs numérique",
  step2POutro:
    " pour montrer aux clientes toute la gamme de 40+ nuances sur une tablette en chaise, sans détenir chaque couleur physiquement.",
  step2Cards: [
    { iconKey: "graduationCap", title: "Former", text: "Un styliste certifié en tape-in ou weft pour commencer." },
    { iconKey: "users", title: "Consulter", text: "Consultation gratuite en chaise avec un catalogue de nuances numérique." },
    { iconKey: "badgePercent", title: "Fournir", text: "Compte trade sans minimum, réappro en 3 à 5 jours." },
  ],
  step3Heading: "Étape 3 — Bâtissez une consultation simple",
  step3P: "C'est dans la consultation que la vente se fait. Gardez-la reproductible :",
  consultationSteps: [
    {
      step: "Évaluer",
      detail:
        "Type de cheveux, objectif de longueur et budget. Adaptez la méthode au mode de vie — tape-in pour la flexibilité, weft pour le volume, nano/K-tip pour la permanence.",
    },
    {
      step: "Assortir la couleur",
      detail: "Utilisez le catalogue numérique et une photo en lumière du jour. Proposez un assortiment de couleur gratuit pour que les clientes s'engagent en confiance.",
    },
    {
      step: "Devis",
      detail: "Donnez un prix unique : cheveux + pose. Pas de surprises. Montrez le cycle de réappro pour qu'elles sachent ce que coûte l'entretien.",
    },
  ],
  step4Heading: "Étape 4 — Fixez des prix avec marge",
  step4PLead: "Facturez les ",
  step4PStrong1: "cheveux",
  step4PMid: " et la ",
  step4PStrong2: "pose",
  step4POutro:
    " séparément. Une pose complète peut coûter £150–400 de frais de service plus le prix des cheveux (achetés au prix trade). Comme les prix trade sont 30 à 60 % sous le détail, votre marge produit seule est saine avant même de compter le service. Notre ",
  profitMarginLinkLabel: "guide des marges",
  profitMarginLinkHref: "/blog/hair-extension-profit-margin-guide",
  step4PFinal: " détaille cela par méthode avec des chiffres réels.",
  step5Heading: "Étape 5 — Commercialisez d'abord auprès des clientes chaudes",
  step5P1:
    "Vos clientes existantes sont votre audience la moins chère et la plus convertible. Beaucoup veulent déjà de la longueur ou du volume — on ne leur a simplement jamais demandé. Proposez une consultation gratuite aux habituées, publiez des avant/après (avec permission) et gardez un anneau de nuances ou un catalogue numérique à la réception. Les clientes chaudes convertissent bien mieux que les publicités froides pendant que vous construisez votre portfolio.",
  step5P2Lead: "Une fois que vous avez 10 à 15 clientes d'extensions satisfaites et des réappro réguliers, envisagez le ",
  privateLabelLinkLabel: "private label",
  privateLabelLinkHref: "/blog/private-label-hair-extensions-uk",
  step5P2Outro: " pour que le produit porte le nom de votre salon — l'étape qui transforme un service en marque.",
  ctaBoxTitle: "Prêt à configurer votre fournisseur ?",
  ctaBoxBody:
    "Ouvrez un compte trade gratuit — sans commande minimum, approbation le jour même, expédition express sous 3 à 5 jours et catalogue de couleurs numérique gratuit. Commencez à vendre des extensions dès ce mois-ci.",
  ctaPrimaryLabel: "Ouvrir un compte trade →",
  ctaPrimaryHref: "/trade-wholesale",
  ctaSecondaryLabel: "Programme partenaire salon",
  ctaSecondaryHref: "/salon-partners",
  faqHeading: "Questions fréquentes",
  faqs: [
    {
      q: "Ai-je besoin d'une qualification pour proposer des extensions capillaires dans mon salon ?",
      a: "Vous devez être compétent dans la méthode que vous proposez — tape-in, weft, nano ring ou K-tip exigent chacun une formation spécifique. Beaucoup de salons envoient d'abord un ou deux stylistes suivre un cours d'extensions certifié, puis forment le reste en interne. La compétence protège vos clientes et votre réputation.",
    },
    {
      q: "Combien coûte le lancement des extensions ?",
      a: "Avec un fournisseur trade sans commande minimum, vous pouvez démarrer avec presque aucun stock — juste un catalogue de couleurs numérique et un échantillon de vos nuances les plus vendues. Votre principal coût est la formation du styliste. Vous n'achetez le produit qu'une fois qu'une cliente a réservé, donc le risque financier est très faible.",
    },
    {
      q: "Par quelle méthode devrais-je commencer ?",
      a: "Le tape-in et le hand-tied weft sont les points de départ les plus populaires pour les salons : ils conviennent à la plus large gamme de clientes, sont relativement rapides à poser et offrent de forts cycles de réappro. Ajoutez le nano ring et le K-tip dès que vous voyez une demande pour des options plus permanentes.",
    },
    {
      q: "Comment fixer le prix des services d'extensions ?",
      a: "Facturez séparément les cheveux (à votre coût trade avec marge) et la pose (vos frais de service). Une pose complète représente généralement £150–400 de frais de service plus le coût des cheveux. Consultez notre guide des marges pour le calcul exact par méthode.",
    },
    {
      q: "Comment obtenir mes premières clientes d'extensions ?",
      a: "Commencez avec votre base de clientes existante — beaucoup veulent déjà de la longueur ou du volume. Proposez une consultation gratuite, montrez des avant/après sur les réseaux et utilisez un catalogue de couleurs numérique pour que les clientes choisissent leurs nuances en chaise. Les clientes chaudes convertissent bien mieux que les publicités froides.",
    },
  ],
  related1Label: "Guide associé",
  related1Title: "Guide des marges",
  related1Href: "/blog/hair-extension-profit-margin-guide",
  related2Label: "Guide associé",
  related2Title: "Compte trade expliqué",
  related2Href: "/blog/hair-extensions-trade-account",
  backLabel: "Retour au blog",
}

const ar: HowToStartSellingHairExtensionsSalonContent = {
  seoTitle: "كيف تبدأ ببيع وصلات الشعر في صالونك (خطوة بخطوة) | D.S Hair Beauty",
  seoDescription:
    "خطة عملية خطوة بخطوة لأصحاب الصالونات لإطلاق خدمات وصلات الشعر: التدريب، وتجهيز المورّد، وعملية الاستشارة، والتسعير، والتسويق للعميلات الحاليات — دون تخزين زائد.",
  navHome: "الرئيسية",
  navBlog: "المدونة",
  navCurrent: "ابدأ ببيع الوصلات",
  heroBadge: "خطة الإطلاق",
  heroTitle: "كيف تبدأ ببيع وصلات الشعر في صالونك",
  heroSubtitle:
    "خطة إطلاق عملية منخفضة المخاطر — من تدريب مصفف الشعر إلى أول عميلة محجوزة، دون تقييد أموالك في مخزون لا يمكنك بيعه.",
  heroPrimaryLabel: "جهّز مورّدك",
  heroPrimaryHref: "/trade-wholesale",
  heroSecondaryLabel: "المزيد من الأدلة",
  heroSecondaryHref: "/blog",
  authorBadge: "CC",
  authorLead: "بقلم ",
  authorName: "Caro Chen",
  authorOutro: "، المؤسِّسة والمديرة التجارية في D.S Hair & Beauty · 19 عاماً في تصنيع وصلات الشعر",
  authorHref: "/about/caro-chen",
  introP:
    "الوصلات من أكثر خدمات الصالون ربحية — لكن معظم أصحاب الصالونات يبالغون في تعقيد البداية. لا تحتاج إلى مستودع، أو طلب مسبق ضخم، أو سنوات من الخبرة. تحتاج إلى مصفف شعر واحد مدرَّب، ومورّداً تجارياً موثوقاً، وعملية استشارة بسيطة. هذه هي خطة الإطلاق التي نقدمها للصالونات الشريكة الجديدة.",
  step1Heading: "الخطوة 1 — درّب مصفف شعر واحداً أولاً",
  step1PLead:
    "لا تدرب الفريق كله في اليوم الأول. أرسل مصفف الشعر الأكثر اهتماماً في دورة معتمدة لطريقة واحدة — عادةً ",
  step1PStrong: "tape-in أو hand-tied weft",
  step1POutro:
    " — ثم دعه يدرب الآخرين داخلياً بعد أن يكتسب الثقة. الكفاءة تحمي العميلات وسمعتك؛ فالتطبيق الأول السيئ يقتل التوصية الشفهية.",
  step2Heading: "الخطوة 2 — جهّز مورّداً تجارياً بدون حد أدنى للطلب",
  step2PLead: "افتح حساباً تجارياً لدى مورّد يقدم ",
  step2PStrong1: "لا حد أدنى للطلب",
  step2PMid:
    " وشحناً سريعاً خلال 3–5 أيام. هذا يتيح لك شراء ما تحتاجه العميلة المحجوزة فقط — بلا مخزون راكد. اطلب ",
  step2PStrong2: "كتالوج ألوان رقمياً",
  step2POutro:
    " لتتمكن من عرض مجموعة 40+ درجة كاملة للعميلات على جهاز لوحي أثناء الجلسة، دون الاحتفاظ بكل درجة مادياً.",
  step2Cards: [
    { iconKey: "graduationCap", title: "درّب", text: "مصفف شعر واحد معتمد في tape-in أو weft في البداية." },
    { iconKey: "users", title: "استشر", text: "استشارة مجانية أثناء الجلسة باستخدام كتالوج درجات رقمي." },
    { iconKey: "badgePercent", title: "زوّد", text: "حساب تجاري بدون حد أدنى، إعادة طلب خلال 3–5 أيام." },
  ],
  step3Heading: "الخطوة 3 — ابنِ استشارة بسيطة",
  step3P: "الاستشارة الجيدة هي المكان الذي يحدث فيه البيع. اجعلها قابلة للتكرار:",
  consultationSteps: [
    {
      step: "قيّم",
      detail:
        "نوع الشعر، وهدف الطول، والميزانية. طابق الطريقة مع نمط الحياة — tape-in للمرونة، وweft للحجم، وnano/K-tip للديمومة.",
    },
    {
      step: "طابق اللون",
      detail: "استخدم الكتالوج الرقمي وصورة في ضوء النهار. اعرض مطابقة لون مجانية حتى تلتزم العميلات بثقة.",
    },
    {
      step: "قدّم عرض السعر",
      detail: "أعطِ سعراً واحداً: الشعر + التركيب. دون مفاجآت. أظهر دورة إعادة الطلب ليعرفن تكلفة الصيانة.",
    },
  ],
  step4Heading: "الخطوة 4 — حدد الأسعار لتحقيق هامش ربح",
  step4PLead: "افصل بين سعر ",
  step4PStrong1: "الشعر",
  step4PMid: " و",
  step4PStrong2: "التركيب",
  step4POutro:
    ". قد يبلغ التركيب الكامل للرأس £150–400 كرسوم خدمة إضافة إلى تكلفة الشعر (الذي اشتريته بالسعر التجاري). ولأن الأسعار التجارية أقل بنسبة 30–60% من التجزئة، فإن هامش منتجك وحده سليم قبل أن تحتسب الخدمة أصلاً. ",
  profitMarginLinkLabel: "دليل هوامش الربح",
  profitMarginLinkHref: "/blog/hair-extension-profit-margin-guide",
  step4PFinal: " يفصّل ذلك لكل طريقة بأرقام حقيقية.",
  step5Heading: "الخطوة 5 — سوق للعميلات الدافعات أولاً",
  step5P1:
    "عميلاتك الحاليات جمهورك الأرخص والأعلى تحويلاً. كثيرات منهن يرغبن فعلاً بالطول أو الحجم — لكن لم يُسألن ببساطة. اعرض استشارة مجانية على العميلات الدائمات، وانشر صوراً قبل/بعد (بإذن منهن)، واحتفظ بحلقة درجات أو كتالوج رقمي على مكتب الاستقبال. العميلات الدافعات تتحولن بشكل أفضل بكثير من الإعلانات الباردة بينما تبني محفظة أعمالك.",
  step5P2Lead: "بمجرد حصولك على 10–15 عميلة وصلات سعيدة وطلبات إعادة ثابتة، فكر في ",
  privateLabelLinkLabel: "العلامة الخاصة",
  privateLabelLinkHref: "/blog/private-label-hair-extensions-uk",
  step5P2Outro: " لتحمل المنتجات اسم صالونك — وهي الخطوة التي تحوّل الخدمة إلى علامة تجارية.",
  ctaBoxTitle: "هل أنت مستعد لتجهيز مورّدك؟",
  ctaBoxBody:
    "افتح حساباً تجارياً مجانياً — بدون حد أدنى للطلب، وموافقة في اليوم نفسه، وشحن سريع خلال 3–5 أيام، وكتالوج ألوان رقمي مجاني. ابدأ ببيع الوصلات هذا الشهر.",
  ctaPrimaryLabel: "افتح حساباً تجارياً ←",
  ctaPrimaryHref: "/trade-wholesale",
  ctaSecondaryLabel: "برنامج شراكة الصالونات",
  ctaSecondaryHref: "/salon-partners",
  faqHeading: "الأسئلة الشائعة",
  faqs: [
    {
      q: "هل أحتاج إلى مؤهل لتقديم وصلات الشعر في صالوني؟",
      a: "تحتاج إلى إتقان الطريقة التي تقدمها — فكل من tape-in و weft و nano ring و K-tip يتطلب تدريباً محدداً. ترسل العديد من الصالونات مصفف شعر أو اثنين إلى دورة وصلات معتمدة أولاً، ثم تدرب البقية داخلياً. الكفاءة تحمي عميلاتك وسمعتك.",
    },
    {
      q: "كم يكلف البدء بتقديم الوصلات؟",
      a: "مع مورّد تجاري بدون حد أدنى للطلب، يمكنك البدء دون مخزون تقريباً — فقط كتالوج ألوان رقمي وعينة من درجاتك الأكثر مبيعاً. تكلفتك الرئيسية هي تدريب مصفف الشعر. لا تشتري المنتج إلا بعد حجز العميلة، لذا فإن مخاطر النقد منخفضة جداً.",
    },
    {
      q: "بأي طريقة يجب أن أبدأ؟",
      a: "يعد tape-in و hand-tied weft نقطتي البداية الأكثر شيوعاً للصالونات: فهما يناسبان أوسع نطاق من العميلات، وسريعان نسبياً في التركيب، ولهما دورات إعادة طلب قوية. أضف nano ring و K-tip بمجرد رؤيتك طلباً على خيارات أكثر ديمومة.",
    },
    {
      q: "كيف أحدد أسعار خدمات الوصلات؟",
      a: "افصل بين سعر الشعر (بتكلفتك التجارية مع هامش ربح) والتركيب (رسوم خدمتك). يتراوح التركيب الكامل للرأس عادةً بين £150–400 كرسوم خدمة إضافة إلى تكلفة الشعر. راجع دليل هوامش الربح لدينا للحسابات الدقيقة لكل طريقة.",
    },
    {
      q: "كيف أحصل على أول عميلات الوصلات؟",
      a: "ابدأ بقاعدة عميلاتك الحالية — فكثيرات منهن يرغبن فعلاً بالطول أو الحجم. اعرض استشارة مجانية، وانشر صوراً قبل/بعد على وسائل التواصل، واستخدم كتالوج ألوان رقمياً لتختار العميلات درجاتهن أثناء الجلسة. العميلات الدافعات تتحولن أفضل بكثير من الإعلانات الباردة.",
    },
  ],
  related1Label: "دليل ذو صلة",
  related1Title: "دليل هوامش الربح",
  related1Href: "/blog/hair-extension-profit-margin-guide",
  related2Label: "دليل ذو صلة",
  related2Title: "الحساب التجاري موضح",
  related2Href: "/blog/hair-extensions-trade-account",
  backLabel: "العودة إلى المدونة",
}

const sv: HowToStartSellingHairExtensionsSalonContent = {
  seoTitle: "Så börjar du sälja hårförlängningar i din salong (steg för steg) | D.S Hair Beauty",
  seoDescription:
    "En praktisk steg-för-steg-plan för salongsägare som vill lansera hårförlängningstjänster: utbildning, leverantörsupplägg, konsultationsprocess, prissättning och marknadsföring till befintliga kunder — utan överlager.",
  navHome: "Hem",
  navBlog: "Blogg",
  navCurrent: "Sälj förlängningar",
  heroBadge: "Lanseringsplan",
  heroTitle: "Så börjar du sälja hårförlängningar i din salong",
  heroSubtitle:
    "En praktisk lanseringsplan med låg risk — från stylistutbildning till din första bokade kund, utan att binda upp kapital i lager du inte kan sälja.",
  heroPrimaryLabel: "Sätt upp din leverantör",
  heroPrimaryHref: "/trade-wholesale",
  heroSecondaryLabel: "Fler guider",
  heroSecondaryHref: "/blog",
  authorBadge: "CC",
  authorLead: "Skriven av ",
  authorName: "Caro Chen",
  authorOutro: ", grundare och trade-chef på D.S Hair & Beauty · 19 år inom tillverkning av hårförlängningar",
  authorHref: "/about/caro-chen",
  introP:
    "Förlängningar är en av de tjänster med högst marginal som en salong kan erbjuda — men de flesta ägare överkomplicerar starten. Du behöver inget lager, ingen stor förhandsorder eller år av erfarenhet. Du behöver en utbildad stylist, en pålitlig grossistleverantör och en enkel konsultationsprocess. Här är lanseringsplanen vi ger nya partnersalonger.",
  step1Heading: "Steg 1 — Utbilda först en stylist",
  step1PLead:
    "Utbilda inte hela teamet på dag ett. Skicka din mest intresserade stylist på en certifierad kurs för en metod — vanligtvis ",
  step1PStrong: "tape-in eller hand-tied weft",
  step1POutro:
    " — och låt sedan hen utbilda andra internt när hen känner sig säker. Kompetens skyddar kunder och ditt rykte; en dålig första applikation dödar mun-mot-mun-metoden.",
  step2Heading: "Steg 2 — Sätt upp en grossistleverantör utan minimibelopp",
  step2PLead: "Öppna ett grossistkonto hos en leverantör som har ",
  step2PStrong1: "ingen minimiorder",
  step2PMid:
    " och expresstransport på 3–5 dagar. Det gör att du bara köper det en bokad kund behöver — noll dött lager. Be om en ",
  step2PStrong2: "digital färgkatalog",
  step2POutro:
    " så att du kan visa kunder hela sortimentet med 40+ nyanser på en surfplatta i stolen, utan att hålla varje färg fysiskt.",
  step2Cards: [
    { iconKey: "graduationCap", title: "Utbilda", text: "En stylist certifierad i tape-in eller weft till att börja med." },
    { iconKey: "users", title: "Konsultera", text: "Gratis konsultation i stolen med en digital nyans-katalog." },
    { iconKey: "badgePercent", title: "Leverera", text: "Grossistkonto utan minimum, återbeställ på 3–5 dagar." },
  ],
  step3Heading: "Steg 3 — Bygg en enkel konsultation",
  step3P: "Det är i konsultationen försäljningen sker. Håll den repeterbar:",
  consultationSteps: [
    {
      step: "Bedöm",
      detail:
        "Hårtyp, längdmål och budget. Matcha metod mot livsstil — tape-in för flexibilitet, weft för volym, nano/K-tip för permanens.",
    },
    {
      step: "Färgmatcha",
      detail: "Använd den digitala katalogen och ett dagsljusfoto. Erbjud gratis färgmatchning så att kunder bokar med tillförsikt.",
    },
    {
      step: "Offert",
      detail: "Ge ett enda pris: hår + applikation. Inga överraskningar. Visa återbeställningscykeln så att de vet vad underhållet kostar.",
    },
  ],
  step4Heading: "Steg 4 — Prissätt för marginal",
  step4PLead: "Debitera ",
  step4PStrong1: "håret",
  step4PMid: " och ",
  step4PStrong2: "applikationen",
  step4POutro:
    " separat. En helhuvudsapplikation kan kosta £150–400 i serviceavgift plus kostnaden för håret (som du köpte till grossistpris). Eftersom grossistpriserna ligger 30–60 % under detaljhandeln är din produktmarginal ensam sund innan du ens räknar tjänsten. Vår ",
  profitMarginLinkLabel: "marginalguide",
  profitMarginLinkHref: "/blog/hair-extension-profit-margin-guide",
  step4PFinal: " bryter ner detta per metod med verkliga siffror.",
  step5Heading: "Steg 5 — Marknadsför först till varma kunder",
  step5P1:
    "Dina befintliga kunder är din billigaste och mest konverterande publik. Många vill redan ha längd eller volym — de har bara inte blivit tillfrågade. Erbjud gratis konsultation till stamkunder, publicera före/efter-bilder (med tillstånd) och håll en nyansring eller digital katalog i receptionen. Varma kunder konverterar mycket bättre än kalla annonser medan du bygger upp en portfölj.",
  step5P2Lead: "När du har 10–15 nöjda förlängningskunder och stadiga återbeställningar, överväg ",
  privateLabelLinkLabel: "private label",
  privateLabelLinkHref: "/blog/private-label-hair-extensions-uk",
  step5P2Outro: " så att produkten bär din salongs namn — steget som förvandlar en tjänst till ett varumärke.",
  ctaBoxTitle: "Redo att sätta upp din leverantör?",
  ctaBoxBody:
    "Öppna ett kostnadsfritt grossistkonto — ingen minimiorder, godkännande samma dag, expresstransport på 3–5 dagar och en gratis digital färgkatalog. Börja sälja förlängningar redan denna månad.",
  ctaPrimaryLabel: "Öppna ett grossistkonto →",
  ctaPrimaryHref: "/trade-wholesale",
  ctaSecondaryLabel: "Salongspartnerprogram",
  ctaSecondaryHref: "/salon-partners",
  faqHeading: "Vanliga frågor",
  faqs: [
    {
      q: "Behöver jag en utbildning för att erbjuda hårförlängningar i min salong?",
      a: "Du behöver vara kompetent i den metod du erbjuder — tape-in, weft, nano ring och K-tip kräver var och en specifik utbildning. Många salonger skickar först en eller två stylister på en certifierad förlängningskurs och utbildar sedan resten internt. Kompetens skyddar dina kunder och ditt rykte.",
    },
    {
      q: "Vad kostar det att börja erbjuda förlängningar?",
      a: "Med en grossistleverantör utan minimiorder kan du börja med nästan inget lager — bara en digital färgkatalog och ett prov på dina mest sålda nyanser. Din huvudkostnad är stylistutbildningen. Du köper produkt först när en kund bokat, så kassarisken är mycket låg.",
    },
    {
      q: "Vilken metod ska jag börja med?",
      a: "Tape-in och hand-tied weft är de vanligaste startpunkterna för salonger: de passar den bredaste kundgruppen, är relativt snabba att applicera och har starka återbeställningscykler. Lägg till nano ring och K-tip när du ser efterfrågan på mer permanenta alternativ.",
    },
    {
      q: "Hur prissätter jag förlängningstjänster?",
      a: "Debitera separat för håret (till ditt grossistpris med påslag) och applikationen (din serviceavgift). En helhuvudsapplikation kostar vanligtvis £150–400 i serviceavgift plus kostnaden för håret. Se vår marginalguide för exakt beräkning per metod.",
    },
    {
      q: "Hur får jag mina första förlängningskunder?",
      a: "Börja med din befintliga kundbas — många vill redan ha längd eller volym. Erbjud gratis konsultation, visa före/efter-bilder på sociala medier och använd en digital färgkatalog så att kunder kan välja nyanser i stolen. Varma kunder konverterar mycket bättre än kalla annonser.",
    },
  ],
  related1Label: "Relaterad guide",
  related1Title: "Marginalguiden",
  related1Href: "/blog/hair-extension-profit-margin-guide",
  related2Label: "Relaterad guide",
  related2Title: "Grossistkonto förklarat",
  related2Href: "/blog/hair-extensions-trade-account",
  backLabel: "Tillbaka till bloggen",
}

const pl: HowToStartSellingHairExtensionsSalonContent = {
  seoTitle: "Jak zacząć sprzedawać przedłużanie włosów w swoim salonie (krok po kroku) | D.S Hair Beauty",
  seoDescription:
    "Praktyczny plan krok po kroku dla właścicieli salonów, jak uruchomić usługi przedłużania włosów: szkolenie, konfiguracja dostawcy, proces konsultacji, wycena i marketing do obecnych klientek — bez nadmiernego magazynowania.",
  navHome: "Strona główna",
  navBlog: "Blog",
  navCurrent: "Sprzedaż przedłużania",
  heroBadge: "Plan startu",
  heroTitle: "Jak zacząć sprzedawać przedłużanie włosów w swoim salonie",
  heroSubtitle:
    "Praktyczny, niskoryzykowny plan startu — od szkolenia stylisty do pierwszej zarezerwowanej klientki, bez wiązania gotówki w magazynie, którego nie sprzedasz.",
  heroPrimaryLabel: "Skonfiguruj dostawcę",
  heroPrimaryHref: "/trade-wholesale",
  heroSecondaryLabel: "Więcej przewodników",
  heroSecondaryHref: "/blog",
  authorBadge: "CC",
  authorLead: "Napisane przez ",
  authorName: "Caro Chen",
  authorOutro: ", założycielka i dyrektorka trade w D.S Hair & Beauty · 19 lat w produkcji przedłużania włosów",
  authorHref: "/about/caro-chen",
  introP:
    "Przedłużanie włosów to jedna z usług o najwyższej marży, jakie salon może prowadzić — ale większość właścicieli komplikuje początek. Nie potrzebujesz magazynu, dużego zamówienia początkowego ani lat doświadczenia. Potrzebujesz jednego przeszkolonego stylisty, niezawodnego dostawcy trade i prostego procesu konsultacji. Oto plan startu, który dajemy nowym salonom partnerskim.",
  step1Heading: "Krok 1 — Najpierw przeszkol jednego stylistę",
  step1PLead:
    "Nie szkol całego zespołu pierwszego dnia. Wyślij najbardziej zainteresowanego stylistę na certyfikowany kurs jednej metody — zwykle ",
  step1PStrong: "tape-in lub hand-tied weft",
  step1POutro:
    " — a następnie pozwól mu szkolić innych wewnętrznie, gdy nabierze pewności. Kompetencja chroni klientki i Twoją reputację; zła pierwsza aplikacja zabija pocztę pantoflową.",
  step2Heading: "Krok 2 — Skonfiguruj dostawcę trade bez minimalnego zamówienia",
  step2PLead: "Otwórz konto trade u dostawcy, który ma ",
  step2PStrong1: "brak minimalnego zamówienia",
  step2PMid:
    " i ekspresową wysyłkę w 3–5 dni. Dzięki temu kupujesz tylko to, czego potrzebuje zarezerwowana klientka — zero martwego magazynu. Poproś o ",
  step2PStrong2: "cyfrowy katalog kolorów",
  step2POutro:
    ", aby pokazywać klientkom pełną gamę 40+ odcieni na tablecie przy fotelu, bez trzymania każdego koloru fizycznie.",
  step2Cards: [
    { iconKey: "graduationCap", title: "Szkol", text: "Jeden stylista certyfikowany w tape-in lub weft na start." },
    { iconKey: "users", title: "Konsultuj", text: "Darmowa konsultacja przy fotelu z cyfrowym katalogiem odcieni." },
    { iconKey: "badgePercent", title: "Dostarczaj", text: "Konto trade bez minimum, zamówienia w 3–5 dni." },
  ],
  step3Heading: "Krok 3 — Zbuduj prostą konsultację",
  step3P: "To podczas konsultacji dokonuje się sprzedaż. Utrzymuj ją powtarzalną:",
  consultationSteps: [
    {
      step: "Oceń",
      detail:
        "Rodzaj włosów, cel długości i budżet. Dopasuj metodę do stylu życia — tape-in dla elastyczności, weft dla objętości, nano/K-tip dla trwałości.",
    },
    {
      step: "Dopasuj kolor",
      detail: "Użyj cyfrowego katalogu i zdjęcia w świetle dziennym. Zaoferuj darmowe dopasowanie koloru, aby klientki decydowały się z pewnością.",
    },
    {
      step: "Wycena",
      detail: "Podaj jedną cenę: włosy + aplikacja. Bez niespodzianek. Pokaż cykl zamawiania, aby wiedziały, ile kosztuje utrzymanie.",
    },
  ],
  step4Heading: "Krok 4 — Ustal ceny z marżą",
  step4PLead: "Pobieraj opłatę za ",
  step4PStrong1: "włosy",
  step4PMid: " i ",
  step4PStrong2: "aplikację",
  step4POutro:
    " osobno. Pełna aplikacja może kosztować £150–400 opłat serwisowych plus koszt włosów (które kupiłeś po cenie trade). Ponieważ ceny trade są o 30–60% niższe od detalicznych, sama marża produktowa jest zdrowa, zanim jeszcze doliczysz usługę. Nasz ",
  profitMarginLinkLabel: "przewodnik po marżach",
  profitMarginLinkHref: "/blog/hair-extension-profit-margin-guide",
  step4PFinal: " rozbija to na metody z prawdziwymi liczbami.",
  step5Heading: "Krok 5 — Najpierw marketingu do ciepłych klientek",
  step5P1:
    "Twoje obecne klientki to najtańsza i najbardziej konwertująca grupa odbiorców. Wiele z nich już chce długości lub objętości — po prostu nikt ich nie zapytał. Zaoferuj darmową konsultację stałym klientkom, publikuj zdjęcia przed/po (za zgodą) i trzymaj pierścień odcieni lub cyfrowy katalog na recepcji. Ciepłe klientki konwertują znacznie lepiej niż zimne reklamy, gdy budujesz portfolio.",
  step5P2Lead: "Gdy masz 10–15 zadowolonych klientek przedłużania i stałe zamówienia, rozważ ",
  privateLabelLinkLabel: "private label",
  privateLabelLinkHref: "/blog/private-label-hair-extensions-uk",
  step5P2Outro: ", aby produkt nosił nazwę Twojego salonu — to krok, który zamienia usługę w markę.",
  ctaBoxTitle: "Gotowy skonfigurować swojego dostawcę?",
  ctaBoxBody:
    "Otwórz darmowe konto trade — bez minimalnego zamówienia, akceptacja tego samego dnia, ekspresowa wysyłka w 3–5 dni i darmowy cyfrowy katalog kolorów. Zacznij sprzedawać przedłużanie już w tym miesiącu.",
  ctaPrimaryLabel: "Otwórz konto trade →",
  ctaPrimaryHref: "/trade-wholesale",
  ctaSecondaryLabel: "Program partnerski dla salonów",
  ctaSecondaryHref: "/salon-partners",
  faqHeading: "Najczęściej zadawane pytania",
  faqs: [
    {
      q: "Czy potrzebuję kwalifikacji, aby oferować przedłużanie włosów w salonie?",
      a: "Musisz być kompetentny w metodzie, którą oferujesz — tape-in, weft, nano ring i K-tip wymagają odpowiedniego szkolenia. Wiele salonów najpierw wysyła jednego lub dwóch stylistów na certyfikowany kurs przedłużania, a potem szkoli resztę wewnętrznie. Kompetencja chroni Twoje klientki i reputację.",
    },
    {
      q: "Ile kosztuje rozpoczęcie oferowania przedłużania?",
      a: "Z dostawcą trade bez minimalnego zamówienia możesz zacząć niemal bez magazynu — tylko z cyfrowym katalogiem kolorów i próbką najlepiej sprzedających się odcieni. Twoim głównym kosztem jest szkolenie stylisty. Produkt kupujesz dopiero po rezerwacji klientki, więc ryzyko gotówkowe jest bardzo niskie.",
    },
    {
      q: "Od której metody powinienem zacząć?",
      a: "Tape-in i hand-tied weft to najpopularniejsze punkty startowe dla salonów: pasują do najszerszej grupy klientek, są stosunkowo szybkie w aplikacji i mają silne cykle zamówień. Dodaj nano ring i K-tip, gdy zobaczysz popyt na trwalsze opcje.",
    },
    {
      q: "Jak wyceniać usługi przedłużania?",
      a: "Pobieraj opłatę osobno za włosy (po Twojej cenie trade z marżą) i aplikację (opłata serwisowa). Pełna aplikacja zwykle kosztuje £150–400 opłat serwisowych plus koszt włosów. Zobacz nasz przewodnik po marżach, aby poznać dokładne wyliczenia dla każdej metody.",
    },
    {
      q: "Jak zdobyć pierwsze klientki przedłużania?",
      a: "Zacznij od obecnej bazy klientek — wiele z nich już chce długości lub objętości. Zaoferuj darmową konsultację, pokazuj zdjęcia przed/po w social mediach i używaj cyfrowego katalogu kolorów, aby klientki wybierały odcienie przy fotelu. Ciepłe klientki konwertują znacznie lepiej niż zimne reklamy.",
    },
  ],
  related1Label: "Powiązany przewodnik",
  related1Title: "Przewodnik po marżach",
  related1Href: "/blog/hair-extension-profit-margin-guide",
  related2Label: "Powiązany przewodnik",
  related2Title: "Konto trade wyjaśnione",
  related2Href: "/blog/hair-extensions-trade-account",
  backLabel: "Wróć do bloga",
}

export const howToStartSellingHairExtensionsSalonContent: Record<Locale, HowToStartSellingHairExtensionsSalonContent> = {
  en,
  de,
  fr,
  ar,
  sv,
  pl,
}
