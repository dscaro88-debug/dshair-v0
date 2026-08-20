import type { Locale } from "../config"
import type { Span } from "./salon-client-retention-rebooking-guide"

// Content module for the "Client Story: Private Label Brand" blog post.
// All visible English copy is externalised here so the page can be rendered
// in any of the 6 locales with an identical layout. The English page
// (locale="en") renders exactly the same JSX it always did.

export interface ClientStoryPrivateLabelBrandContent {
  seoTitle: string
  seoDescription: string
  jsonLdHeadline: string
  jsonLdDescription: string
  heroBadge: string
  heroTitle: string
  heroSubtitle: string
  ctaPrimaryLabel: string
  ctaPrimaryHref: string
  ctaSecondaryLabel: string
  ctaSecondaryHref: string
  navHome: string
  navBlog: string
  navCurrent: string
  intro: Span[][]
  startHeading: string
  startImageSrc: string
  startImageAlt: string
  startP: Span[][]
  decisionHeading: string
  decisionP: Span[]
  decisionCards: { icon: "tag" | "sparkles" | "package"; q: string; a: string }[]
  resultHeading: string
  resultCards: { label: string; icon: "tag" | "sparkles" | "package"; items: string[] }[]
  resultP: Span[]
  borrowHeading: string
  borrowCards: { icon: "tag" | "sparkles" | "package"; q: string; a: string }[]
  ctaBoxTitle: string
  ctaBoxBody: string
  ctaBoxPrimaryLabel: string
  ctaBoxPrimaryHref: string
  ctaBoxSecondaryLabel: string
  ctaBoxSecondaryHref: string
  faqHeading: string
  faqs: { q: string; a: string }[]
  link1Kicker: string
  link1Title: string
  link1Href: string
  link2Kicker: string
  link2Title: string
  link2Href: string
  backLabel: string
}

const en: ClientStoryPrivateLabelBrandContent = {
  seoTitle: "From No Brand to a Named Line: Building a Private Label | D.S Hair Beauty",
  seoDescription:
    "An anonymised client story: how a salon with no product brand launched its own private label extension and aftercare line — and kept the margin and the relationship with its clients.",
  jsonLdHeadline: "From No Brand to a Named Line: Building a Private Label",
  jsonLdDescription:
    "An anonymised client story of launching a private label hair extension brand with our OEM/ODM support — from 19 years helping salons build brands.",
  heroBadge: "Client Story",
  heroTitle: "From No Brand to a Named Line",
  heroSubtitle:
    "This salon sold other people's products for years. Then it launched its own. Here is how a private label line turned take-home retail into a brand its clients re-order by name.",
  ctaPrimaryLabel: "Open a Trade Account",
  ctaPrimaryHref: "/salon-partners",
  ctaSecondaryLabel: "Private Label Guide →",
  ctaSecondaryHref: "/blog/private-label-hair-extensions-uk",
  navHome: "Home",
  navBlog: "Blog",
  navCurrent: "Private Label Story",
  intro: [
    [
      { t: "Over " },
      { t: "19 years", b: true },
      { t: " in this industry, we have helped more than 50 businesses build their own hair extension brands. Most started exactly where this client did: a successful service business that sold other companies' products and kept none of the upside. This is one such story, anonymised with the owner's blessing." },
    ],
    [
      { t: "The lesson is simple but easy to miss: a salon can be busy for a decade and still own nothing. A private label line is how a salon starts owning a brand." },
    ],
  ],
  startHeading: "Where It Started: Great Service, No Brand",
  startImageSrc: "https://images.unsplash.com/photo-1595959183082-7b570b7e08e2?w=1200&q=80",
  startImageAlt: "Salon retail shelf with extension aftercare",
  startP: [
    [
      { t: "This salon had a loyal client base and a strong extension service. But every take-home product and every re-order went through someone else's brand. Clients loved the salon — and then bought the hair from a name the salon did not own. The margin left with the product. The relationship, such as it was, belonged to the supplier." },
    ],
  ],
  decisionHeading: "The Decision: Own the Line",
  decisionP: [
    { t: "The owner did not want to manufacture hair — that is our job. What she wanted was a line that carried her salon's name, with her colour story and her aftercare, supplied consistently and invisibly behind the brand. That is private label: we make it, she owns it." },
  ],
  decisionCards: [
    { icon: "tag", q: "Start small, not risky", a: "We began with a small sample order — a curated set of her best-selling shades and one aftercare product — not a warehouse of stock. She tested the line on her own clients first, which meant almost no risk and immediate real feedback." },
    { icon: "tag", q: "Keep the colour story consistent", a: "Because the hair is 100% Remy and cuticle-aligned, every batch blends the same. Clients who loved shade 4 Chocolate Brown kept getting shade 4 — the brand promise held, order after order." },
    { icon: "tag", q: "Put the salon's name on it", a: "Labelling, packaging and the re-order flow all carried the salon's name. Clients stopped asking 'which brand is this?' and started asking 'can I get the salon's own hair again?'" },
  ],
  resultHeading: "What Changed: From Reseller to Brand Owner",
  resultCards: [
    { label: "Margin stayed in-house", icon: "package", items: ["Set the retail price", "Re-order by the salon's name", "No reseller taking the cut"] },
    { label: "Clients came back for the brand", icon: "sparkles", items: ["Re-orders became brand loyalty", "Referrals named the line", "Less discounting needed"] },
    { label: "A new revenue line appeared", icon: "tag", items: ["Retail ran out every 4–8 weeks", "Online re-order without a visit", "Revenue beyond chair hours"] },
  ],
  resultP: [
    { t: "The salon did not become a manufacturer. It became a brand. And because the supply behind it is consistent 100% Remy human hair, the brand has kept its promise every single order. Our " },
    { link: "private label guide", href: "/blog/private-label-hair-extensions-uk" },
    { t: " walks through exactly how a salon launches a line like this — including the small-MOQ starting point that keeps it low-risk." },
  ],
  borrowHeading: "What Any Salon Can Borrow",
  borrowCards: [
    { icon: "package", q: "You do not need to be big to start", a: "A private label line begins with a small, well-chosen sample order — not a warehouse. If you already sell take-home products, you have the demand; you are simply putting your name on it." },
    { icon: "package", q: "Consistency is the brand", a: "A brand is a promise kept every order. That only works on hair that is identical batch to batch — which is why the Remy, cuticle-aligned source matters more than the logo." },
    { icon: "package", q: "Retail attach rate is the on-ramp", a: "Start by bundling your own branded aftercare into every install. Once clients re-order the brand, expanding the line is natural." },
  ],
  ctaBoxTitle: "Launch Your Own Line — Small, Then Grow",
  ctaBoxBody:
    "Open a trade account and talk to us about a private label sample order. Keep your margin, keep the relationship, and put your salon's name on the hair your clients already love.",
  ctaBoxPrimaryLabel: "Start a Private Label →",
  ctaBoxPrimaryHref: "/salon-partners",
  ctaBoxSecondaryLabel: "Lift Retail Attach Rate",
  ctaBoxSecondaryHref: "/blog/salon-retail-attachment-guide",
  faqHeading: "Frequently Asked Questions",
  faqs: [
    { q: "Can a small salon launch its own hair extension brand?", a: "Yes. Private label means a manufacturer supplies the hair and aftercare under your salon's name, packaging and colour story. You own the brand and set the retail price; you do not need to manufacture anything yourself. Most salons we work with start with a small, curated sample order rather than a large stock commitment." },
    { q: "What is the difference between private label and white label?", a: "White label is a generic product you resell under your name with minimal changes. Private label goes further: the shades, packaging, aftercare and re-order flow are built around your salon's identity. For a salon wanting a real brand clients recognise, private label is the stronger route." },
    { q: "How much stock does a private label line require to start?", a: "Far less than most owners expect. A sensible start is a small sample order — your best-selling shades plus one aftercare product — tested on your existing clients first. Because you are not buying a warehouse, the risk is low and you learn exactly what your clients re-order before expanding the line." },
    { q: "Do I need a large client base before launching a private label?", a: "No. If you already sell take-home products and have a loyal base, you have the demand — you are simply putting your name on it. Many salons launch the line to their existing clients first, prove the re-order behaviour, then grow. A large base helps, but it is not a prerequisite." },
    { q: "How long does it take to get a private label line ready?", a: "Typically a few weeks to a couple of months depending on the range and labelling. The fastest path is to start with a small curated set, agree shades and packaging, and run a first sample order. Consistency of the hair batch to batch is what lets the brand keep its promise — which is why the Remy, cuticle-aligned source matters more than the logo." },
  ],
  link1Kicker: "Cluster Guide",
  link1Title: "Private Label Hair Extensions (UK)",
  link1Href: "/blog/private-label-hair-extensions-uk",
  link2Kicker: "Related Article",
  link2Title: "Salon Retail Attach Rate",
  link2Href: "/blog/salon-retail-attachment-guide",
  backLabel: "Back to Blog",
}

const de: ClientStoryPrivateLabelBrandContent = {
  seoTitle: "Vom Markenlosen zum Eigennamen: Aufbau eines Private Label | D.S Hair Beauty",
  seoDescription:
    "Eine anonymisierte Kundengeschichte: wie ein Salon ohne Produktmarke seine eigene Private-Label-Extension- und Aftercare-Linie startete — und Marge sowie Kundenbeziehung behielt.",
  jsonLdHeadline: "Vom Markenlosen zum Eigennamen: Aufbau eines Private Label",
  jsonLdDescription:
    "Eine anonymisierte Kundengeschichte zum Start einer Private-Label-Haarverlängerungsmarke mit unserer OEM/ODM-Unterstützung — aus 19 Jahren Hilfe beim Markenaufbau für Salons.",
  heroBadge: "Kundengeschichte",
  heroTitle: "Vom Markenlosen zum Eigennamen",
  heroSubtitle:
    "Dieser Salon verkaufte jahrelang die Produkte anderer. Dann startete er seine eigene. So verwandelte eine Private-Label-Linie den Take-Home-Retail in eine Marke, die Kundinnen beim Namen bestellen.",
  ctaPrimaryLabel: "Händlerkonto eröffnen",
  ctaPrimaryHref: "/salon-partners",
  ctaSecondaryLabel: "Private-Label-Guide →",
  ctaSecondaryHref: "/blog/private-label-hair-extensions-uk",
  navHome: "Start",
  navBlog: "Blog",
  navCurrent: "Private-Label-Geschichte",
  intro: [
    [
      { t: "Über " },
      { t: "19 Jahre", b: true },
      { t: " in dieser Branche haben wir mehr als 50 Unternehmen geholfen, ihre eigene Haarverlängerungsmarke aufzubauen. Die meisten begannen genau dort wie diese Kundin: ein erfolgreiches Dienstleistungsunternehmen, das die Produkte anderer verkaufte und keinen der Gewinne behielt. Dies ist eine solche Geschichte, anonymisiert mit dem Segen der Inhaberin." },
    ],
    [
      { t: "Die Lektion ist einfach, aber leicht zu übersehen: Ein Salon kann ein Jahrzehnt lang ausgebucht sein und trotzdem nichts besitzen. Eine Private-Label-Linie ist der Weg, wie ein Salon eine Marke zu besitzen beginnt." },
    ],
  ],
  startHeading: "Wo es begann: Toller Service, keine Marke",
  startImageSrc: "https://images.unsplash.com/photo-1595959183082-7b570b7e08e2?w=1200&q=80",
  startImageAlt: "Salon-Regal mit Extension-Aftercare",
  startP: [
    [
      { t: "Dieser Salon hatte eine treue Kundschaft und einen starken Extension-Service. Aber jedes Take-Home-Produkt und jede Wiederbestellung lief über die Marke eines anderen. Kundinnen liebten den Salon — und kauften dann die Haare von einem Namen, dem der Salon nicht gehörte. Die Marge ging mit dem Produkt. Die Beziehung, soweit es eine gab, gehörte dem Lieferanten." },
    ],
  ],
  decisionHeading: "Die Entscheidung: Die Linie besitzen",
  decisionP: [
    { t: "Die Inhaberin wollte keine Haare herstellen — das ist unser Job. Was sie wollte, war eine Linie mit dem Namen ihres Salons, ihrer Colour Story und ihrem Aftercare, konsistent und unsichtbar hinter der Marke geliefert. Genau das ist Private Label: wir machen es, sie besitzt es." },
  ],
  decisionCards: [
    { icon: "tag", q: "Klein anfangen, nicht riskant", a: "Wir begannen mit einer kleinen Mustersendung — eine kuratierte Auswahl ihrer meistverkauften Töne plus ein Aftercare-Produkt — kein Lager voller Bestand. Sie testete die Linie zuerst an ihren eigenen Kundinnen, was fast kein Risiko und sofort echtes Feedback bedeutete." },
    { icon: "tag", q: "Die Colour Story konsistent halten", a: "Da das Haar 100% Remy und cuticula-aligned ist, mischt jede Charge gleich. Kundinnen, die Ton 4 Chocolate Brown liebten, bekamen weiter Ton 4 — das Markenversprechen hielt, Bestellung für Bestellung." },
    { icon: "tag", q: "Den Namen des Salons draufsetzen", a: "Beschriftung, Verpackung und der Wiederbestell-Ablauf trugen alle den Namen des Salons. Kundinnen hörten auf zu fragen 'welche Marke ist das?' und fragten stattdessen 'kann ich wieder das eigene Haar des Salons bekommen?'" },
  ],
  resultHeading: "Was sich änderte: Vom Wiederverkäufer zum Markenbesitzer",
  resultCards: [
    { label: "Marge blieb im Haus", icon: "package", items: ["Einzelhandelspreis festlegen", "Wiederbestellung unter dem Namen des Salons", "Kein Wiederverkäufer streicht ab"] },
    { label: "Kundinnen kamen für die Marke zurück", icon: "sparkles", items: ["Wiederbestellungen wurden zu Markenbindung", "Empfehlungen nannten die Linie", "Weniger Rabattierung nötig"] },
    { label: "Eine neue Einnahmelinie entstand", icon: "tag", items: ["Retail alle 4–8 Wochen leer", "Online-Wiederbestellung ohne Besuch", "Einnahmen über die Stunden am Stuhl hinaus"] },
  ],
  resultP: [
    { t: "Der Salon wurde kein Hersteller. Er wurde eine Marke. Und weil die Lieferung dahinter konsistentes 100% Remy Echthaar ist, hat die Marke bei jeder einzelnen Bestellung ihr Versprechen gehalten. Unser " },
    { link: "Private-Label-Guide", href: "/blog/private-label-hair-extensions-uk" },
    { t: " erklärt genau, wie ein Salon eine solche Linie startet — inklusive des kleinen MOQ-Startpunkts, der das Risiko gering hält." },
  ],
  borrowHeading: "Was jeder Salon übernehmen kann",
  borrowCards: [
    { icon: "package", q: "Man muss nicht groß sein, um zu starten", a: "Eine Private-Label-Linie beginnt mit einer kleinen, gut gewählten Mustersendung — kein Lager. Wenn Sie bereits Take-Home-Produkte verkaufen, haben Sie die Nachfrage; Sie setzen einfach Ihren Namen darauf." },
    { icon: "package", q: "Konsistenz ist die Marke", a: "Eine Marke ist ein Versprechen, das bei jeder Bestellung gehalten wird. Das funktioniert nur bei Haar, das Charge für Charge identisch ist — weshalb die Remy-, cuticula-aligned-Quelle mehr zählt als das Logo." },
    { icon: "package", q: "Retail-Attach-Rate ist der Einstieg", a: "Beginnen Sie damit, Ihren eigenen Marken-Aftercare in jede Installation zu binden. Sobald Kundinnen die Marke wiederbestellen, ist die Erweiterung der Linie natürlich." },
  ],
  ctaBoxTitle: "Starten Sie Ihre eigene Linie — klein, dann wachsen",
  ctaBoxBody:
    "Eröffnen Sie ein Händlerkonto und sprechen Sie mit uns über eine Private-Label-Mustersendung. Behalten Sie Ihre Marge, behalten Sie die Beziehung, und setzen Sie den Namen Ihres Salons auf die Haare, die Ihre Kundinnen bereits lieben.",
  ctaBoxPrimaryLabel: "Private Label starten →",
  ctaBoxPrimaryHref: "/salon-partners",
  ctaBoxSecondaryLabel: "Retail-Attach-Rate heben",
  ctaBoxSecondaryHref: "/blog/salon-retail-attachment-guide",
  faqHeading: "Häufig gestellte Fragen",
  faqs: [
    { q: "Kann ein kleiner Salon seine eigene Haarverlängerungsmarke starten?", a: "Ja. Private Label bedeutet, dass ein Hersteller die Haare und den Aftercare unter dem Namen, der Verpackung und der Colour Story Ihres Salons liefert. Sie besitzen die Marke und legen den Einzelhandelspreis fest; Sie müssen nichts selbst herstellen. Die meisten Salons, mit denen wir arbeiten, starten mit einer kleinen kuratierten Mustersendung statt mit großem Lagerbestand." },
    { q: "Was ist der Unterschied zwischen Private Label und White Label?", a: "White Label ist ein generisches Produkt, das Sie mit minimalen Änderungen unter Ihrem Namen weiterverkaufen. Private Label geht weiter: die Töne, Verpackung, Aftercare und der Wiederbestell-Ablauf werden um die Identität Ihres Salons herum aufgebaut. Für einen Salon, der eine echte, erkennbare Marke will, ist Private Label der stärkere Weg." },
    { q: "Wie viel Bestand braucht eine Private-Label-Linie zum Start?", a: "Weit weniger als die meisten Inhaber erwarten. Ein sinnvoller Start ist eine kleine Mustersendung — Ihre meistverkauften Töne plus ein Aftercare-Produkt — zuerst an Ihren bestehenden Kundinnen getestet. Da Sie kein Lager kaufen, ist das Risiko gering und Sie lernen genau, was Ihre Kundinnen wiederbestellen, bevor Sie die Linie erweitern." },
    { q: "Brauche ich eine große Kundenbasis, bevor ich ein Private Label starte?", a: "Nein. Wenn Sie bereits Take-Home-Produkte verkaufen und eine treue Basis haben, haben Sie die Nachfrage — Sie setzen einfach Ihren Namen darauf. Viele Salons starten die Linie zuerst bei ihren bestehenden Kundinnen, beweisen das Wiederbestell-Verhalten und wachsen dann. Eine große Basis hilft, ist aber keine Voraussetzung." },
    { q: "Wie lange dauert es, eine Private-Label-Linie bereitzustellen?", a: "Typischerweise ein paar Wochen bis ein paar Monate je nach Sortiment und Beschriftung. Der schnellste Weg ist, mit einem kleinen kuratierten Set zu beginnen, Töne und Verpackung zu vereinbaren und eine erste Mustersendung zu machen. Die Chargenkonsistenz des Haars ist es, die der Marke ihr Versprechen hält — weshalb die Remy-, cuticula-aligned-Quelle mehr zählt als das Logo." },
  ],
  link1Kicker: "Cluster-Guide",
  link1Title: "Private Label Haarverlängerungen (UK)",
  link1Href: "/blog/private-label-hair-extensions-uk",
  link2Kicker: "Verwandter Artikel",
  link2Title: "Salon Retail Attach Rate",
  link2Href: "/blog/salon-retail-attachment-guide",
  backLabel: "Zurück zum Blog",
}

const fr: ClientStoryPrivateLabelBrandContent = {
  seoTitle: "De l'absence de marque à une ligne nommée : créer un Private Label | D.S Hair Beauty",
  seoDescription:
    "Une histoire client anonymisée : comment un salon sans marque produit a lancé sa propre ligne d'extensions et d'aftercare en private label — et gardé la marge et la relation avec ses clientes.",
  jsonLdHeadline: "De l'absence de marque à une ligne nommée : créer un Private Label",
  jsonLdDescription:
    "Une histoire client anonymisée de lancement d'une marque d'extensions en private label avec notre support OEM/ODM — issu de 19 ans d'aide aux salons à bâtir des marques.",
  heroBadge: "Histoire client",
  heroTitle: "De l'absence de marque à une ligne nommée",
  heroSubtitle:
    "Ce salon a vendu les produits des autres pendant des années. Puis il a lancé le sien. Voici comment une ligne en private label a transformé le retail à emporter en une marque que les clientes recommandent par son nom.",
  ctaPrimaryLabel: "Ouvrir un compte pro",
  ctaPrimaryHref: "/salon-partners",
  ctaSecondaryLabel: "Guide Private Label →",
  ctaSecondaryHref: "/blog/private-label-hair-extensions-uk",
  navHome: "Accueil",
  navBlog: "Blog",
  navCurrent: "Histoire Private Label",
  intro: [
    [
      { t: "Depuis " },
      { t: "19 ans", b: true },
      { t: " dans cette industrie, nous avons aidé plus de 50 entreprises à construire leur propre marque d'extensions. La plupart ont commencé exactement là où cette cliente était : une entreprise de services prospère qui vendait les produits d'autres sociétés sans en garder l'upside. Voici l'une de ces histoires, anonymisée avec la bénédiction de la propriétaire." },
    ],
    [
      { t: "La leçon est simple mais facile à manquer : un salon peut être plein pendant une décennie et ne rien posséder. Une ligne en private label est le moyen pour un salon de commencer à posséder une marque." },
    ],
  ],
  startHeading: "D'où cela a commencé : un bon service, aucune marque",
  startImageSrc: "https://images.unsplash.com/photo-1595959183082-7b570b7e08e2?w=1200&q=80",
  startImageAlt: "Rayon retail de salon avec aftercare pour extensions",
  startP: [
    [
      { t: "Ce salon avait une clientèle fidèle et un service d'extensions solide. Mais chaque produit à emporter et chaque re-commande passait par la marque de quelqu'un d'autre. Les clientes aimaient le salon — puis achetaient les cheveux d'un nom que le salon ne possédait pas. La marge partait avec le produit. La relation, telle qu'elle était, appartenait au fournisseur." },
    ],
  ],
  decisionHeading: "La décision : posséder la ligne",
  decisionP: [
    { t: "La propriétaire ne voulait pas fabriquer les cheveux — c'est notre travail. Ce qu'elle voulait, c'était une ligne portant le nom de son salon, avec son histoire de couleur et son aftercare, fournis de façon cohérente et invisible derrière la marque. C'est le private label : nous le fabriquons, elle le possède." },
  ],
  decisionCards: [
    { icon: "tag", q: "Commencer petit, pas risqué", a: "Nous avons commencé par un petit échantillon — un ensemble choisi de ses teintes les plus vendues et un produit d'aftercare — pas un entrepôt de stock. Elle a testé la ligne sur ses propres clientes d'abord, ce qui signifiait presque aucun risque et un retour réel immédiat." },
    { icon: "tag", q: "Garder l'histoire de couleur cohérente", a: "Comme les cheveux sont 100% Remy et à cuticule alignée, chaque lot se mélange de la même façon. Les clientes qui aimaient la teinte 4 Chocolate Brown continuaient d'avoir la teinte 4 — la promesse de marque tenait, commande après commande." },
    { icon: "tag", q: "Mettre le nom du salon dessus", a: "L'étiquetage, l'emballage et le flux de re-commande portaient tous le nom du salon. Les clientes ont arrêté de demander 'quelle est cette marque ?' et ont commencé à demander 'puis-je reprendre les cheveux du salon ?'" },
  ],
  resultHeading: "Ce qui a changé : du revendeur au propriétaire de marque",
  resultCards: [
    { label: "La marge est restée en interne", icon: "package", items: ["Fixer le prix de vente", "Re-commander au nom du salon", "Aucun revendeur ne prend sa part"] },
    { label: "Les clientes sont revenues pour la marque", icon: "sparkles", items: ["Les re-commandes sont devenues fidélité", "Les parrainages nommaient la ligne", "Moins de remises nécessaires"] },
    { label: "Une nouvelle ligne de revenus est apparue", icon: "tag", items: ["Le retail s'épuise toutes les 4–8 semaines", "Re-commande en ligne sans visite", "Revenus au-delà des heures de fauteuil"] },
  ],
  resultP: [
    { t: "Le salon n'est pas devenu fabricant. Il est devenu une marque. Et comme l'approvisionnement derrière est un 100% Remy cheveux naturels cohérent, la marque a tenu sa promesse à chaque commande. Notre " },
    { link: "guide private label", href: "/blog/private-label-hair-extensions-uk" },
    { t: " explique exactement comment un salon lance une telle ligne — y compris le point de départ à petit MOQ qui garde le risque faible." },
  ],
  borrowHeading: "Ce que tout salon peut reprendre",
  borrowCards: [
    { icon: "package", q: "Vous n'avez pas besoin d'être grand pour commencer", a: "Une ligne en private label commence par un petit échantillon bien choisi — pas un entrepôt. Si vous vendez déjà des produits à emporter, vous avez la demande ; vous mettez simplement votre nom dessus." },
    { icon: "package", q: "La cohérence est la marque", a: "Une marque est une promesse tenue à chaque commande. Cela ne fonctionne que sur des cheveux identiques lot après lot — c'est pourquoi la source Remy à cuticule alignée compte plus que le logo." },
    { icon: "package", q: "Le taux d'attach retail est le point d'entrée", a: "Commencez par intégrer votre propre aftercare de marque dans chaque pose. Dès que les clientes recommandent la marque, étendre la ligne devient naturel." },
  ],
  ctaBoxTitle: "Lancez votre propre ligne — petite, puis grandissez",
  ctaBoxBody:
    "Ouvrez un compte pro et parlez-nous d'un échantillon en private label. Gardez votre marge, gardez la relation, et mettez le nom de votre salon sur les cheveux que vos clientes aiment déjà.",
  ctaBoxPrimaryLabel: "Lancer un Private Label →",
  ctaBoxPrimaryHref: "/salon-partners",
  ctaBoxSecondaryLabel: "Booster le taux d'attach retail",
  ctaBoxSecondaryHref: "/blog/salon-retail-attachment-guide",
  faqHeading: "Questions Fréquemment Posées",
  faqs: [
    { q: "Un petit salon peut-il lancer sa propre marque d'extensions ?", a: "Oui. Le private label signifie qu'un fabricant fournit les cheveux et l'aftercare sous le nom, l'emballage et l'histoire de couleur de votre salon. Vous possédez la marque et fixez le prix de vente ; vous n'avez rien à fabriquer vous-même. La plupart des salons avec lesquels nous travaillons commencent par un petit échantillon choisi plutôt qu'un gros stock." },
    { q: "Quelle est la différence entre private label et white label ?", a: "Le white label est un produit générique que vous revendez sous votre nom avec des changements minimes. Le private label va plus loin : les teintes, l'emballage, l'aftercare et le flux de re-commande sont construits autour de l'identité de votre salon. Pour un salon voulant une vraie marque reconnue, le private label est la voie la plus solide." },
    { q: "Combien de stock une ligne en private label nécessite-t-elle au départ ?", a: "Bien moins que ne l'attendent la plupart des propriétaires. Un début sensé est un petit échantillon — vos teintes les plus vendues plus un produit d'aftercare — testé d'abord sur vos clientes existantes. Comme vous n'achetez pas un entrepôt, le risque est faible et vous apprenez exactement ce que vos clientes recommandent avant d'étendre la ligne." },
    { q: "Faut-il une grande clientèle avant de lancer un private label ?", a: "Non. Si vous vendez déjà des produits à emporter et avez une base fidèle, vous avez la demande ; vous mettez simplement votre nom dessus. Beaucoup de salons lancent la ligne d'abord à leurs clientes existantes, prouvent le comportement de re-commande, puis grandissent. Une grande base aide, mais n'est pas un prérequis." },
    { q: "Combien de temps faut-il pour préparer une ligne en private label ?", a: "Généralement quelques semaines à un ou deux mois selon la gamme et l'étiquetage. Le chemin le plus rapide est de commencer par un petit ensemble choisi, de convenir des teintes et de l'emballage, et de lancer un premier échantillon. La cohérence des lots de cheveux est ce qui permet à la marque de tenir sa promesse — c'est pourquoi la source Remy à cuticule alignée compte plus que le logo." },
  ],
  link1Kicker: "Guide de cluster",
  link1Title: "Extensions Private Label (UK)",
  link1Href: "/blog/private-label-hair-extensions-uk",
  link2Kicker: "Article lié",
  link2Title: "Taux d'attach retail du salon",
  link2Href: "/blog/salon-retail-attachment-guide",
  backLabel: "Retour au Blog",
}

const ar: ClientStoryPrivateLabelBrandContent = {
  seoTitle: "من بلا علامة إلى خط باسم: بناء علامة خاصة | D.S Hair Beauty",
  seoDescription:
    "قصة عميل مجهولة: كيف أطلق صالون بلا علامة منتج خاصاً به من إكسسوارات وخط عناية — واحتفظ بالهامش وبالعلاقة مع عميلاته.",
  jsonLdHeadline: "من بلا علامة إلى خط باسم: بناء علامة خاصة",
  jsonLdDescription:
    "قصة عميل مجهولة لإطلاق علامة إكسسوارات خاصة بدعم OEM/ODM — من 19 عاماً من مساعدة الصالونات على بناء علامات.",
  heroBadge: "قصة عميل",
  heroTitle: "من بلا علامة إلى خط باسم",
  heroSubtitle:
    "هذا الصالون باع منتجات الآخرين لسنوات. ثم أطلق منتجه الخاص. إليك كيف حوّل خط العلامة الخاصة تجارة التجزئة المنزلية إلى علامة تعيد عميلاته طلبها باسمها.",
  ctaPrimaryLabel: "افتح حساب جملة",
  ctaPrimaryHref: "/salon-partners",
  ctaSecondaryLabel: "دليل العلامة الخاصة →",
  ctaSecondaryHref: "/blog/private-label-hair-extensions-uk",
  navHome: "الرئيسية",
  navBlog: "المدونة",
  navCurrent: "قصة العلامة الخاصة",
  intro: [
    [
      { t: "عبر " },
      { t: "19 عاماً", b: true },
      { t: " في هذه الصناعة، ساعدنا أكثر من 50 شركة على بناء علاماتها الخاصة لإكسسوارات الشعر. معظمها بدأ تماماً حيث بدأت هذه العميلة: عمل ناجح يبيع منتجات شركات أخرى ولا يحتفظ بأي عائد. هذه إحدى تلك القصص، مجهولة ببركة المالكة." },
    ],
    [
      { t: "الدرس بسيط لكن يسهل تفويته: يمكن للصالون أن يكون مزدحماً لعقد كامل وما يملك شيئاً. خط العلامة الخاصة هو كيف يبدأ الصالون بامتلاك علامة." },
    ],
  ],
  startHeading: "من أين بدأ: خدمة رائعة، بلا علامة",
  startImageSrc: "https://images.unsplash.com/photo-1595959183082-7b570b7e08e2?w=1200&q=80",
  startImageAlt: "رف تجزئة في الصالون بإكسسوارات عناية",
  startP: [
    [
      { t: "كان لهذا الصالون قاعدة عميلات مخلصة وخدمة إكسسوارات قوية. لكن كل منتج منزلي وكل إعادة طلب مرّ عبر علامة شخص آخر. أحبت العميلات الصالون — ثم اشترين الشعر باسم لا يملكه الصالون. ذهب الهامش مع المنتج. والعلاقة، كما كانت، كانت ملكاً للمورّد." },
    ],
  ],
  decisionHeading: "القرار: امتلك الخط",
  decisionP: [
    { t: "لم ترد المالكة أن تصنع الشعر — تلك مهمتنا. ما أرادته هو خط يحمل اسم صالونها، بقصة لونها وعنايتها، يُورَّد بثبات وبشكل غير مرئي خلف العلامة. هذا هو العلامة الخاصة: نحن نصنع، وهي تملك." },
  ],
  decisionCards: [
    { icon: "tag", q: "ابدأ صغيراً، لا خطر", a: "بدأنا بطلبية عينة صغيرة — مجموعة منتقاة من أكثر درجاتها مبيعاً ومنتج عناية واحد — لا مستودع بضاعة. جرّبت الخط على عميلاتها أولاً، ما يعني شبه انعدام خطر وردود فعل حقيقية فورية." },
    { icon: "tag", q: "حافظ على اتساق قصة اللون", a: "بما أن الشعر 100% Remy ومتّجه القشرة، كل دفعة تمتزج بالمثل. العميلات اللواتي أحببن الدرجة 4 Chocolate Brown ظللن يحصلن الدرجة 4 — وعد العلامة صمد، طلباً بعد طلب." },
    { icon: "tag", q: "ضع اسم الصالون عليه", a: "حملت كل من التسمية والتغليف وتدفق إعادة الطلب اسم الصالون. توقفت العميلات عن سؤال 'ما هذه العلامة؟' وبدأن يسألن 'هل أحصل على شعر الصالون نفسه مجدداً؟'" },
  ],
  resultHeading: "ما تغيّر: من موزّع إلى مالك علامة",
  resultCards: [
    { label: "بقي الهامش داخلياً", icon: "package", items: ["حدّد سعر التجزئة", "أعد الطلب باسم الصالون", "لا موزّع يأخذ النصيب"] },
    { label: "عادت العميلات من أجل العلامة", icon: "sparkles", items: ["صارت إعادة الطلب ولاءً للعلامة", "سمّت الإحالات الخط", "حاجة أقل للخصم"] },
    { label: "ظهر خط إيراد جديد", icon: "tag", items: ["ينفد التجزئة كل 4–8 أسابيع", "إعادة طلب أونلاين بلا زيارة", "إيراد يتجاوز ساعات الكرسي"] },
  ],
  resultP: [
    { t: "لم يصبح الصالون مصنعاً. أصبح علامة. وبما أن التوريد وراءه 100% Remy شعر بشري متّسق، حافظت العلامة على وعدها في كل طلب. " },
    { link: "دليل العلامة الخاصة", href: "/blog/private-label-hair-extensions-uk" },
    { t: " يشرح بالضبط كيف يطلق الصالون خطاً كهذا — بما في ذلك نقطة البداية بحد أدنى صغير تبقي المخاطر منخفضة." },
  ],
  borrowHeading: "ما يمكن لأي صالون اقتباسه",
  borrowCards: [
    { icon: "package", q: "لا تحتاج أن تكون كبيراً للبدء", a: "تبدأ علامة خاصة بطلبية عينة صغيرة منتقاة — لا مستودع. إن كنت تبيع منتجات منزلية، فلديك الطلب؛ أنت ببساطة تضع اسمك عليها." },
    { icon: "package", q: "الاتساق هو العلامة", a: "العلامة وعد يُحفظ في كل طلب. هذا يعمل فقط على شعر متطابق دفعة بدفعة — ولذلك تهمّ مصادر Remy المتّجهة القشرة أكثر من الشعار." },
    { icon: "package", q: "معدل ربط التجزئة هو نقطة الانطلاق", a: "ابدأ بدمج عنايتك المسمّاة في كل تركيب. حالما تعيد العميلات طلب العلامة، يصبح توسيع الخط طبيعياً." },
  ],
  ctaBoxTitle: "أطلق خطك الخاص — صغيراً، ثم ينمو",
  ctaBoxBody:
    "افتح حساب جملة وتحدث معنا عن طلبية عينة للعلامة الخاصة. احتفظ بهامشك، احتفظ بالعلاقة، وضع اسم صالونك على الشعر الذي تحبه عميلاتك بالفعل.",
  ctaBoxPrimaryLabel: "ابدأ علامة خاصة →",
  ctaBoxPrimaryHref: "/salon-partners",
  ctaBoxSecondaryLabel: "ارفع معدل ربط التجزئة",
  ctaBoxSecondaryHref: "/blog/salon-retail-attachment-guide",
  faqHeading: "الأسئلة الشائعة",
  faqs: [
    { q: "هل يمكن لصالون صغير إطلاق علامته الخاصة لإكسسوارات الشعر؟", a: "نعم. العلامة الخاصة تعني أن مصنعاً يورّد الشعر والعناية باسم صالونك وتغليفه وقصة لونه. أنت تملك العلامة وتحدّد سعر التجزئة؛ لا تحتاج لتصنيع أي شيء بنفسك. معظم الصالونات التي نتعامل معها تبدأ بطلبية عينة صغيرة منتقاة بدل التزام بضاعة كبيرة." },
    { q: "ما الفرق بين العلامة الخاصة والعلامة البيضاء؟", a: "العلامة البيضاء منتج عام تبيعه باسمك بتغييرات طفيفة. العلامة الخاصة أبعد: الدرجات والتغليف والعناية وتدفق إعادة الطلب تُبنى حول هوية صالونك. لصالون يريد علامة حقيقية يتعرف إليها العملاء، العلامة الخاصة هي الطريق الأقوى." },
    { q: "كم بضاعة يحتاج خط العلامة الخاصة للبدء؟", a: "أقل بكثير مما يتوقعه أصحاب الصالونات. بداية حكيمة هي طلبية عينة صغيرة — أكثر درجاتك مبيعاً plus منتج عناية واحد — تُختبر أولاً على عميلاتك الحاليات. بما أنك لا تشتري مستودعاً، المخاطر منخفضة وتعرف بالضبط ما تعيد عميلاتك طلبه قبل توسيع الخط." },
    { q: "هل أحتاج قاعدة عملاء كبيرة قبل إطلاق علامة خاصة؟", a: "لا. إن كنت تبيع منتجات منزلية ولديك قاعدة مخلصة، فلديك الطلب؛ أنت ببساطة تضع اسمك عليها. صالونات كثيرة تطلق الخط لعميلاتها الحاليات أولاً، تُثبت سلوك إعادة الطلب، ثم تنمو. القاعدة الكبيرة مفيدة لكنها ليست شرطاً مسبقاً." },
    { q: "كم يستغرق تجهيز خط علامة خاصة؟", a: "عادة بضعة أسابيع إلى شهرين حسب المجموعة والتسمية. أسرع طريق هو البدء بمجموعة منتقاة صغيرة، الاتفاق على الدرجات والتغليف، وتنفيذ طلبية عينة أولى. اتساق الشعر دفعة بدفعة هو ما يحفظ للعلامة وعدها — ولذلك تهمّ مصادر Remy المتّجهة القشرة أكثر من الشعار." },
  ],
  link1Kicker: "دليل المجموعة",
  link1Title: "إكسسوارات العلامة الخاصة (UK)",
  link1Href: "/blog/private-label-hair-extensions-uk",
  link2Kicker: "مقال ذو صلة",
  link2Title: "معدل ربط تجزئة الصالون",
  link2Href: "/blog/salon-retail-attachment-guide",
  backLabel: "العودة إلى المدونة",
}

const sv: ClientStoryPrivateLabelBrandContent = {
  seoTitle: "Från märkeslös till ett namn: att bygga en Private Label | D.S Hair Beauty",
  seoDescription:
    "En anonymiserad kundhistoria: hur en salong utan produktmärke lanserade sin egen private label-linje för extensions och aftercare — och behöll marginalen och relationen med sina kunder.",
  jsonLdHeadline: "Från märkeslös till ett namn: att bygga en Private Label",
  jsonLdDescription:
    "En anonymiserad kundhistoria om lansering av ett private label-märke för hårförlängning med vår OEM/ODM-support — från 19 år av att hjälpa salonger bygga märken.",
  heroBadge: "Kundhistoria",
  heroTitle: "Från märkeslös till ett namn",
  heroSubtitle:
    "Den här salongen sålde andras produkter i åratal. Sedan lanserade den sin egen. Så här förvandlade en private label-linje take-home-handeln till ett märke som kunderna beställer på namnet.",
  ctaPrimaryLabel: "Öppna återförsäljarkonto",
  ctaPrimaryHref: "/salon-partners",
  ctaSecondaryLabel: "Private Label-guide →",
  ctaSecondaryHref: "/blog/private-label-hair-extensions-uk",
  navHome: "Hem",
  navBlog: "Blogg",
  navCurrent: "Private Label-historia",
  intro: [
    [
      { t: "Under " },
      { t: "19 år", b: true },
      { t: " i den här branschen har vi hjälpt fler än 50 företag bygga sina egna märken för hårförlängning. De flesta började exakt där den här kunden gjorde: en framgångsrik tjänsteverksamhet som sålde andras produkter och behöll ingen av vinsterna. Det här är en sådan historia, anonymiserad med ägarens välsignelse." },
    ],
    [
      { t: "Lärdomarna är enkel men lätt att missa: en salong kan vara fullbokad i ett årtionde och ändå äga ingenting. En private label-linje är hur en salong börjar äga ett märke." },
    ],
  ],
  startHeading: "Var det började: Bra service, inget märke",
  startImageSrc: "https://images.unsplash.com/photo-1595959183082-7b570b7e08e2?w=1200&q=80",
  startImageAlt: "Salongshylla med extension-aftercare",
  startP: [
    [
      { t: "Den här salongen hade en lojal kundbas och en stark extension-tjänst. Men varje take-home-produkt och varje återbeställning gick genom någon annans märke. Kunderna älskade salongen — och köpte sedan håret från ett namn salongen inte ägde. Marginalen försvann med produkten. Relationen, så som den var, tillhörde leverantören." },
    ],
  ],
  decisionHeading: "Beslutet: Äg linjen",
  decisionP: [
    { t: "Ägaren ville inte tillverka hår — det är vårt jobb. Det hon ville ha var en linje som bar hennes salongs namn, med hennes färghistoria och hennes aftercare, levererad konsekvent och osynligt bakom märket. Det är private label: vi gör det, hon äger det." },
  ],
  decisionCards: [
    { icon: "tag", q: "Börja litet, inte riskabelt", a: "Vi började med en liten provorder — ett kuraterat set av hennes bäst säljande nyanser och en aftercare-produkt — inget lager. Hon testade linjen på sina egna kunder först, vilket innebar nästan ingen risk och omedelbar äkta feedback." },
    { icon: "tag", q: "Håll färghistorien konsekvent", a: "Eftersom håret är 100% Remy och cuticula-alignat blandas varje batch likadant. Kunder som älskade nyans 4 Chocolate Brown fortsatte få nyans 4 — varumärkeslöftet höll, order efter order." },
    { icon: "tag", q: "Sätt salongens namn på det", a: "Märkning, förpackning och återbeställningsflödet bar alla salongens namn. Kunder slutade fråga 'vilket märke är detta?' och började fråga 'kan jag få salongens egna hår igen?'" },
  ],
  resultHeading: "Vad som förändrades: Från återförsäljare till varumärkesägare",
  resultCards: [
    { label: "Marginalen stannade in-house", icon: "package", items: ["Sätt detaljpriset", "Återbeställ på salongens namn", "Ingen återförsäljare tar cutten"] },
    { label: "Kunderna kom tillbaka för märket", icon: "sparkles", items: ["Återbeställningar blev varumärkeslojalitet", "Referenser namngav linjen", "Mindre rabattbehov"] },
    { label: "En ny intäktslinje dök upp", icon: "tag", items: ["Retail tog slut var 4–8 vecka", "Online-återbeställning utan besök", "Intäkt bortom stoltimmar"] },
  ],
  resultP: [
    { t: "Salongen blev ingen tillverkare. Den blev ett märke. Och eftersom leveransen bakom är konsekvent 100% Remy människohår har märket hållit sitt löfte vid varje order. Vår " },
    { link: "private label-guide", href: "/blog/private-label-hair-extensions-uk" },
    { t: " går igenom exakt hur en salong lanserar en sådan linje — inklusive den lilla MOQ-startpunkten som håller risken låg." },
  ],
  borrowHeading: "Vad vilken salong som helst kan låna",
  borrowCards: [
    { icon: "package", q: "Du behöver inte vara stor för att börja", a: "En private label-linje börjar med en liten, väl vald provorder — inget lager. Om du redan säljer take-home-produkter har du efterfrågan; du sätter helt enkelt ditt namn på den." },
    { icon: "package", q: "Konsekvens är märket", a: "Ett märke är ett löfte som hålls varje order. Det fungerar bara på hår som är identiskt batch för batch — därför spelar den Remy, cuticula-alignade källan mer roll än logotypen." },
    { icon: "package", q: "Retail-attach-rate är rampnen", a: "Börja med att bunta in din egen märkta aftercare i varje install. När kunderna återbeställer märket är det naturligt att expandera linjen." },
  ],
  ctaBoxTitle: "Lansera din egen linje — liten, sedan väx",
  ctaBoxBody:
    "Öppna ett återförsäljarkonto och prata med oss om en private label-provorder. Behåll din marginal, behåll relationen, och sätt din salongs namn på håret dina kunder redan älskar.",
  ctaBoxPrimaryLabel: "Starta Private Label →",
  ctaBoxPrimaryHref: "/salon-partners",
  ctaBoxSecondaryLabel: "Höj Retail Attach Rate",
  ctaBoxSecondaryHref: "/blog/salon-retail-attachment-guide",
  faqHeading: "Vanliga frågor",
  faqs: [
    { q: "Kan en liten salong lansera sitt eget märke för hårförlängning?", a: "Ja. Private label betyder att en tillverkare levererar håret och aftercare under din salongs namn, förpackning och färghistoria. Du äger märket och sätter detaljpriset; du behöver inte tillverka något själv. De flesta salonger vi arbetar med börjar med en liten kuraterad provorder i stället för ett stort lager." },
    { q: "Vad är skillnaden mellan private label och white label?", a: "White label är en generisk produkt du återförsäljer under ditt namn med minimala ändringar. Private label går längre: nyanserna, förpackningen, aftercare och återbeställningsflödet byggs kring din salongs identitet. För en salong som vill ha ett riktigt igenkännbart märke är private label den starkare vägen." },
    { q: "Hur mycket lager kräver en private label-linje för att starta?", a: "Mycket mindre än de flesta ägare tror. Ett vettigt start är en liten provorder — dina bäst säljande nyanser plus en aftercare-produkt — testad på dina befintliga kunder först. Eftersom du inte köper ett lager är risken låg och du lär dig exakt vad dina kunder återbeställer innan du expanderar linjen." },
    { q: "Behöver jag en stor kundbas innan jag lanserar private label?", a: "Nej. Om du redan säljer take-home-produkter och har en lojal bas har du efterfrågan; du sätter helt enkelt ditt namn på den. Många salonger lanserar linjen till sina befintliga kunder först, bevisar återbeställningsbeteendet, sedan växer de. En stor bas hjälper, men är inget krav." },
    { q: "Hur lång tid tar det att få en private label-linje klar?", a: "Vanligtvis några veckor till ett par månader beroende på sortiment och märkning. Den snabbaste vägen är att börja med ett litet kuraterat set, komma överens om nyanser och förpackning, och göra en första provorder. Konsekvensen i håret batch för batch är det som låter märket hålla sitt löfte — därför spelar den Remy, cuticula-alignade källan mer roll än logotypen." },
  ],
  link1Kicker: "Klusterguide",
  link1Title: "Private Label Hårförlängningar (UK)",
  link1Href: "/blog/private-label-hair-extensions-uk",
  link2Kicker: "Relaterad artikel",
  link2Title: "Salongs Retail Attach Rate",
  link2Href: "/blog/salon-retail-attachment-guide",
  backLabel: "Tillbaka till Bloggen",
}

const pl: ClientStoryPrivateLabelBrandContent = {
  seoTitle: "Od braku marki do nazwanej linii: budowa Private Label | D.S Hair Beauty",
  seoDescription:
    "Anonimowa historia klienta: jak salon bez marki produktu uruchomił własną linię private label extensions i aftercare — i zachował marżę oraz relację z klientkami.",
  jsonLdHeadline: "Od braku marki do nazwanej linii: budowa Private Label",
  jsonLdDescription:
    "Anonimowa historia klienta o uruchomieniu marki extensions w private label z naszym wsparciem OEM/ODM — z 19 lat pomagania salonom w budowie marek.",
  heroBadge: "Historia klienta",
  heroTitle: "Od braku marki do nazwanej linii",
  heroSubtitle:
    "Ten salon sprzedawał przez lata produkty innych. Potem uruchomił własny. Oto jak linia private label zamieniła sprzedaż do domu w markę, którą klientki zamawiają po nazwisku.",
  ctaPrimaryLabel: "Otwórz konto hurtowe",
  ctaPrimaryHref: "/salon-partners",
  ctaSecondaryLabel: "Przewodnik Private Label →",
  ctaSecondaryHref: "/blog/private-label-hair-extensions-uk",
  navHome: "Strona główna",
  navBlog: "Blog",
  navCurrent: "Historia Private Label",
  intro: [
    [
      { t: "Przez " },
      { t: "19 lat", b: true },
      { t: " w tej branży pomogliśmy ponad 50 firmom zbudować własne marki przedłużen do włosów. Większość zaczynała dokładnie tam, gdzie ta klientka: udany biznes usługowy, który sprzedawał produkty innych firm i nie zatrzymywał żadnej nadwyżki. To jedna z takich historii, zanonimizowana za zgodą właścicielki." },
    ],
    [
      { t: "Lekcja jest prosta, ale łatwo ją przeoczyć: salon może być zajęty przez dekadę i wciąż nic nie posiadać. Linia private label to sposób, w jaki salon zaczyna posiadać markę." },
    ],
  ],
  startHeading: "Skąd to się zaczęło: świetna obsługa, brak marki",
  startImageSrc: "https://images.unsplash.com/photo-1595959183082-7b570b7e08e2?w=1200&q=80",
  startImageAlt: "Półka retail w salonie z aftercare do przedłużeń",
  startP: [
    [
      { t: "Ten salon miał lojalną bazę klientek i silną usługę przedłużania. Ale każdy produkt do domu i każde ponowne zamówienie szło przez markę kogoś innego. Klientki kochały salon — a potem kupowały włosy od nazwy, która salonowi nie należała. Marża odeszła z produktem. Relacja, o ile była, należała do dostawcy." },
    ],
  ],
  decisionHeading: "Decyzja: posiadaj linię",
  decisionP: [
    { t: "Właścicielka nie chciała produkować włosów — to nasza robota. Chciała linii z nazwą jej salonu, jej historią kolorów i jej aftercare, dostarczaną konsekwentnie i niewidocznie za marką. Oto private label: my to robimy, ona to posiada." },
  ],
  decisionCards: [
    { icon: "tag", q: "Zacznij mało, nie ryzykuj", a: "Zaczęliśmy od małego zamówienia próbnego — wyselekcjonowany zestaw jej najlepiej sprzedających się odcieni i jeden produkt aftercare — nie magazyn towaru. Przetestowała linię najpierw na własnych klientkach, co oznaczało niemal zerowe ryzyko i natychmiastową prawdziwą informację zwrotną." },
    { icon: "tag", q: "Zachowaj spójność historii kolorów", a: "Ponieważ włosy są 100% Remy i zrównanymi łuskami, każda partia miesza się tak samo. Klientki, które kochały odcień 4 Chocolate Brown, dostawały dalej odcień 4 — obietnica marki trzymała, zamówienie po zamówieniu." },
    { icon: "tag", q: "Połóż nazwę salonu na to", a: "Etykietowanie, opakowanie i przepływ ponownego zamawiania nosiły nazwę salonu. Klientki przestały pytać 'jaka to marka?' i zaczęły pytać 'czy mogę dostać znowu włosy własne salonu?'" },
  ],
  resultHeading: "Co się zmieniło: od odsprzedawcy do właściciela marki",
  resultCards: [
    { label: "Marża została w firmie", icon: "package", items: ["Ustal cenę detaliczną", "Zamawiaj ponownie nazwą salonu", "Żaden odsprzedawca nie bierze cięcia"] },
    { label: "Klientki wróciły po markę", icon: "sparkles", items: ["Ponowne zamówienia stały się lojalnością", "Polecenia nazwały linię", "Mniej potrzebnych rabatów"] },
    { label: "Pojawiła się nowa linia przychodu", icon: "tag", items: ["Retail kończył się co 4–8 tygodni", "Ponowne zamówienie online bez wizyty", "Przychód poza godzinami fotela"] },
  ],
  resultP: [
    { t: "Salon nie stał się producentem. Stał się marką. A ponieważ dostawca za nim to konsekwentne 100% Remy włosy naturalne, marka dotrzymała obietnicy przy każdym zamówieniu. Nasz " },
    { link: "przewodnik private label", href: "/blog/private-label-hair-extensions-uk" },
    { t: " wyjaśnia dokładnie, jak salon uruchamia taką linię — w tym punkt startu z małym MOQ, który trzyma ryzyko nisko." },
  ],
  borrowHeading: "Co każdy salon może przejąć",
  borrowCards: [
    { icon: "package", q: "Nie musisz być duży, by zacząć", a: "Linia private label zaczyna się od małego, dobrze dobranego zamówienia próbnego — nie magazynu. Jeśli już sprzedajesz produkty do domu, masz popyt; po prostu kładziesz na nich swoją nazwę." },
    { icon: "package", q: "Spójność to marka", a: "Marka to obietnica dotrzymana przy każdym zamówieniu. Działa to tylko na włosach identycznych partią po partii — dlatego źródło Remy zrównanych łusek liczy się bardziej niż logo." },
    { icon: "package", q: "Wskaźnik attach retail to wjazd", a: "Zacznij od pakowania własnego markowego aftercare do każdego założenia. Gdy klientki zaczynają zamawiać markę ponownie, rozszerzanie linii jest naturalne." },
  ],
  ctaBoxTitle: "Uruchom własną linię — małą, potem rośnij",
  ctaBoxBody:
    "Otwórz konto hurtowe i porozmawiaj z nami o zamówieniu próbnym private label. Zachowaj swoją marżę, zachowaj relację i połóż nazwę swojego salonu na włosach, które twoje klientki już kochają.",
  ctaBoxPrimaryLabel: "Uruchom Private Label →",
  ctaBoxPrimaryHref: "/salon-partners",
  ctaBoxSecondaryLabel: "Podnieś Retail Attach Rate",
  ctaBoxSecondaryHref: "/blog/salon-retail-attachment-guide",
  faqHeading: "Najczęściej Zadawane Pytania",
  faqs: [
    { q: "Czy mały salon może uruchomić własną markę przedłużeń?", a: "Tak. Private label oznacza, że producent dostarcza włosy i aftercare pod nazwą, opakowaniem i historią kolorów twojego salonu. Ty posiadasz markę i ustalasz cenę detaliczną; nie musisz niczego produkować sam. Większość salonów, z którymi pracujemy, zaczyna od małego wyselekcjonowanego zamówienia próbnego zamiast dużego zapasu." },
    { q: "Jaka jest różnica między private label a white label?", a: "White label to generyczny produkt odsprzedawany pod twoją nazwą z minimalnymi zmianami. Private label idzie dalej: odcienie, opakowanie, aftercare i przepływ ponownego zamawiania budowane są wokół tożsamości twojego salonu. Dla salonu chcącego prawdziwej, rozpoznawalnej marki private label jest silniejszą drogą." },
    { q: "Ile zapasu wymaga linia private label na start?", a: "Znacznie mniej, niż spodziewa się większość właścicieli. Rozsądny start to małe zamówienie próbne — twoje najlepiej sprzedające się odcienie plus jeden produkt aftercare — przetestowane najpierw na obecnych klientkach. Ponieważ nie kupujesz magazynu, ryzyko jest niskie i dowiadujesz się dokładnie, co klientki zamawiają ponownie, zanim rozszerzysz linię." },
    { q: "Czy potrzebuję dużej bazy klientek przed uruchomieniem private label?", a: "Nie. Jeśli już sprzedajesz produkty do domu i masz lojalną bazę, masz popyt; po prostu kładziesz na nich swoją nazwę. Wiele salonów uruchamia linię najpierw u obecnych klientek, udowadnia zachowanie ponownego zamawiania, potem rośnie. Duża baza pomaga, ale nie jest wymogiem." },
    { q: "Jak długo trwa przygotowanie linii private label?", a: "Zwykle od kilku tygodni do paru miesięcy zależnie od asortymentu i etykietowania. Najszybsza droga to start od małego wyselekcjonowanego zestawu, uzgodnienie odcieni i opakowania oraz pierwsze zamówienie próbne. Spójność włosów partią po partii to, co pozwala marce dotrzymać obietnicy — dlatego źródło Remy zrównanych łusek liczy się bardziej niż logo." },
  ],
  link1Kicker: "Przewodnik klastra",
  link1Title: "Przedłużenia Private Label (UK)",
  link1Href: "/blog/private-label-hair-extensions-uk",
  link2Kicker: "Powiązany artykuł",
  link2Title: "Wskaźnik Retail Attach Salonu",
  link2Href: "/blog/salon-retail-attachment-guide",
  backLabel: "Powrót do Bloga",
}

export const clientStoryPrivateLabelBrandContent: Record<Locale, ClientStoryPrivateLabelBrandContent> = {
  en,
  de,
  fr,
  ar,
  sv,
  pl,
}
