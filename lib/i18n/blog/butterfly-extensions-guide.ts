import type { Locale } from "../config"

// Content module for the "Butterfly Weft Extensions Guide" blog post.
// All visible English copy is externalised here so the page can be rendered
// in any of the 6 locales with an identical layout. The English page
// (locale="en") renders exactly the same JSX it always did.

export interface ButterflyExtensionsGuideContent {
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
  whatP1: string
  whatP2: string
  heroImageSrc: string
  heroImageAlt: string
  whoHeading: string
  whoCards: { iconKey: "users" | "trendingDown" | "sparkles" | "clock"; title: string; desc: string }[]
  benefitsHeading: string
  benefits: { icon: string; title: string; desc: string }[]
  tipsHeading: string
  tips: string[]
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

const en: ButterflyExtensionsGuideContent = {
  seoTitle:
    "Butterfly Weft Extensions Guide: Ultra-Thin Seamless Volume | D.S HAIR & BEAUTY",
  seoDescription:
    "Complete guide to butterfly weft hair extensions for UK salons. The ultra-thin 0.5mm base revolutionised the extension industry. Seamless, lightweight, professional.",
  heroBadge: "Product Guide 2025",
  heroTitleLines: ["Butterfly Weft Extensions:", "The Industry Game-Changer"],
  heroSubtitle:
    "Butterfly wefts have transformed how UK salons approach volume and length — an ultra-thin 0.5mm base that is completely undetectable. Here's what every professional needs to know.",
  ctaPrimaryLabel: "Shop Now",
  ctaPrimaryHref: "/collections/butterfly-extensions",
  ctaSecondaryLabel: "Trade Account",
  ctaSecondaryHref: "/salon-partners",
  stats: [
    { num: "0.5mm", label: "ultra-thin base" },
    { num: "2 hr", label: "full head installation" },
    { num: "£300-600", label: "service price range" },
    { num: "100%", label: "seamless finish" },
  ],
  breadcrumb: "Back to Blog",
  metaCategory: "Product Guide",
  metaDate: "Updated March 2025",
  metaReadTime: "8 min read",
  whatHeading: "What Are Butterfly Weft Extensions?",
  whatP1:
    "Butterfly weft extensions feature an ultra-thin (0.5mm) patented weft base — thinner than any traditional weft on the market. The base is designed to fold over a client's hair and be secured with micro-beads or micro-links, creating an incredibly seamless and lightweight result.",
  whatP2:
    "The butterfly name comes from the shape of the weft base — wider and more spread out than traditional wefts, allowing for maximum coverage with minimal weight. The result is a weft extension that is virtually undetectable even under thin hair — a revolution in the extension industry.",
  heroImageSrc: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=1200&q=80",
  heroImageAlt: "Butterfly weft hair extensions ultra-thin seamless",
  whoHeading: "Who Are Butterfly Weft Extensions Best For?",
  whoCards: [
    {
      iconKey: "users",
      title: "Fine to Medium Hair",
      desc: "Butterfly wefts are specifically designed for clients with fine to medium hair — where traditional wefts would be too bulky or visible.",
    },
    {
      iconKey: "trendingDown",
      title: "Volume-Maximisers",
      desc: "A single butterfly weft covers a large area with minimal bulk. Perfect for clients who want dramatic volume without the weight.",
    },
    {
      iconKey: "sparkles",
      title: "Seamless Finish Seekers",
      desc: "If a client has been disappointed by visible weft tracks from other methods, butterfly wefts are the answer.",
    },
    {
      iconKey: "clock",
      title: "Time-Pressed Clients",
      desc: "Butterfly weft installation takes approximately 2 hours — significantly faster than hand-tied weft or individual strand methods.",
    },
  ],
  benefitsHeading: "Why Butterfly Wefts Are the UK's Fastest Growing Extension",
  benefits: [
    { icon: "👁️", title: "Completely Invisible", desc: "The 0.5mm base is thinner than a credit card. Even professional stylists struggle to find a well-applied butterfly weft." },
    { icon: "🪶", title: "Ultra-Lightweight", desc: "Butterfly wefts distribute weight across a wide area — meaning no pressure points, no discomfort, no scalp strain." },
    { icon: "⏱️", title: "Fast Installation", desc: "2-hour installation vs 3-4 hours for hand-tied wefts. More clients can afford the service at this price point." },
    { icon: "💰", title: "Premium Revenue", desc: "Butterfly weft services command £300-600 per installation — premium pricing for a premium result." },
    { icon: "🔄", title: "Recurring Maintenance", desc: "Butterfly wefts require maintenance every 8-12 weeks — regular recurring revenue throughout the year." },
    { icon: "🧲", title: "Versatile Installation", desc: "Can be installed via micro-bead, micro-link, or sewn-in. Maximum flexibility for salon professionals." },
  ],
  tipsHeading: "Pro Tips for Salon Stylists",
  tips: [
    "Butterfly wefts must NEVER be cut without sealing the cut edge. Use a flame lighter or weft sealer immediately after cutting — otherwise the weft will unravel.",
    "The fold-over technique is critical. The weft must fold cleanly over the hair section — not around it. Practice on mannequin heads before working on clients.",
    "Butterfly wefts work best with 2-4 wefts per full head. More than 4 creates unnecessary bulk for most clients.",
    "For balayage clients, stock pre-coloured butterfly wefts in a variety of balayage shades. Over 60% of clients want some colour depth.",
    "Recommend a weekly detangling spray and wide-tooth comb for aftercare. Butterfly wefts tangle less than individual extensions but still need daily maintenance.",
  ],
  ctaBoxTitle: "Add Butterfly Weft Extensions to Your Salon",
  ctaBoxBody:
    "D.S Hair & Beauty supplies butterfly weft extensions to professional UK salons. Ultra-thin 0.5mm base, 100% Remy human hair, 50+ shades, wholesale pricing available.",
  ctaBoxPrimaryLabel: "Browse Collection",
  ctaBoxPrimaryHref: "/collections/butterfly-extensions",
  ctaBoxSecondaryLabel: "WhatsApp Us",
  ctaBoxSecondaryHref:
    "https://wa.me/8613516946001?text=Hi!%20I'm%20interested%20in%20wholesale%20pricing.",
  ctaBoxSecondaryWhatsapp: true,
  faqHeading: "Frequently Asked Questions",
  faqs: [
    { q: "Why is the 0.5mm ultra-thin base a game-changer for clients with fine hair?", a: "Standard weft bases are 2–3mm thick, which creates bulk and discomfort when sewn or glued in. The 0.5mm butterfly base is so thin it lies completely flat against the scalp — undetectable even under short layers or updos. This makes it safe for clients with fine hair who were previously told they couldn't wear weft extensions. It also reduces heat retention and itching that clients associate with traditional wefts." },
    { q: "How is butterfly weft installation different from standard hand-tied wefts?", a: "Butterfly weft installation uses a unique fold-over technique where the weft is folded and micro-beaded directly onto the hair in a single pass — no braiding, no sewing, no heat. This makes it faster (2–3 hours for a full head vs. 4–5 hours for traditional hand-tied), more comfortable, and more affordable for clients while maintaining premium results." },
    { q: "Can butterfly wefts be used for clients who want volume without length?", a: "Absolutely. Many clients with shorter hair (above shoulder length) want VOLUME as their primary goal, not length. Butterfly wefts are ideal for this: they add body, thickness, and bounce without drastically changing hair length. Style the weft to blend with the natural cut for a natural thickness boost. This opens butterfly wefts to a much wider client base beyond just length-seekers." },
    { q: "How do I price butterfly weft installations competitively and profitably?", a: "Butterfly wefts command premium pricing because the results rival hand-tied wefts at a more accessible price point. Price by time (2–3 hours) plus the cost of hair. For a full head, total cost to client typically ranges from £350–£600+ depending on hair length and gram weight. Offer fill packages (6–8 week returns) as a separate revenue stream — this builds a loyal client base with predictable appointments." },
  ],
  backLabel: "More Articles",
}

const de: ButterflyExtensionsGuideContent = {
  seoTitle:
    "Butterfly Weft Verlängerungen Ratgeber: Ultradünnes, nahtloses Volumen | D.S HAIR & BEAUTY",
  seoDescription:
    "Komplettter Ratgeber zu butterfly weft Haarverlängerungen für UK-Salons. Die ultradünne 0,5mm Basis revolutionierte die Branche. Nahtlos, leicht, professionell.",
  heroBadge: "Produktratgeber 2025",
  heroTitleLines: ["Butterfly Weft Verlängerungen:", "Der Game-Changer der Branche"],
  heroSubtitle:
    "Butterfly wefts haben verändert, wie UK-Salons Volumen und Länge angehen — eine ultradünne 0,5mm Basis, die völlig unentdeckbar ist. Hier ist, was jeder Profi wissen muss.",
  ctaPrimaryLabel: "Jetzt shoppen",
  ctaPrimaryHref: "/collections/butterfly-extensions",
  ctaSecondaryLabel: "Händlerkonto",
  ctaSecondaryHref: "/salon-partners",
  stats: [
    { num: "0.5mm", label: "ultradünne Basis" },
    { num: "2 Std", label: "volle Kopf-Installation" },
    { num: "£300-600", label: "Service-Preisspanne" },
    { num: "100%", label: "nahtlose Finish" },
  ],
  breadcrumb: "Zurück zum Blog",
  metaCategory: "Produktratgeber",
  metaDate: "Aktualisiert März 2025",
  metaReadTime: "8 Min. Lesezeit",
  whatHeading: "Was sind Butterfly Weft Verlängerungen?",
  whatP1:
    "Butterfly weft Verlängerungen haben eine ultradünne (0,5mm) patentierte weft-Basis — dünner als jedes traditionelle weft am Markt. Die Basis ist darauf ausgelegt, über das Haar der Kundin gefaltet und mit Mikro-Perlen oder Mikro-Links befestigt zu werden, was ein unglaublich nahtloses und leichtes Ergebnis schafft.",
  whatP2:
    "Der Name Butterfly kommt von der Form der weft-Basis — breiter und weiter ausladend als traditionelle wefts, was maximale Abdeckung bei minimalem Gewicht ermöglicht. Das Ergebnis ist eine weft-Verlängerung, die selbst unter dünnem Haar praktisch unsichtbar ist — eine Revolution in der Verlängerungsbranche.",
  heroImageSrc: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=1200&q=80",
  heroImageAlt: "Butterfly weft Haarverlängerungen ultradünn nahtlos",
  whoHeading: "Für wen sind Butterfly Weft Verlängerungen am besten geeignet?",
  whoCards: [
    {
      iconKey: "users",
      title: "Feines bis mittleres Haar",
      desc: "Butterfly wefts sind speziell für Kundinnen mit feinem bis mittlerem Haar entwickelt — wo traditionelle wefts zu voluminös oder sichtbar wären.",
    },
    {
      iconKey: "trendingDown",
      title: "Volumen-Maximierer",
      desc: "Ein einzelnes butterfly weft deckt eine große Fläche mit minimalem Volumen ab. Perfekt für Kundinnen, die dramatisches Volumen ohne Gewicht wollen.",
    },
    {
      iconKey: "sparkles",
      title: "Nahtlos-Sucher",
      desc: "Wenn eine Kundin von sichtbaren weft-Spuren anderer Methoden enttäuscht war, sind butterfly wefts die Antwort.",
    },
    {
      iconKey: "clock",
      title: "Zeitgepresste Kundinnen",
      desc: "Die Installation von butterfly wefts dauert etwa 2 Stunden — deutlich schneller als hand-tied weft oder Einzelstrang-Methoden.",
    },
  ],
  benefitsHeading: "Warum Butterfly Wefts die am schnellsten wachsende Verlängerung im UK sind",
  benefits: [
    { icon: "👁️", title: "Völlig unsichtbar", desc: "Die 0,5mm Basis ist dünner als eine Kreditkarte. Selbst professionelle Stylisten finden ein gut angebrachtes butterfly weft kaum." },
    { icon: "🪶", title: "Ultra-leicht", desc: "Butterfly wefts verteilen das Gewicht über eine große Fläche — keine Druckpunkte, kein Unbehagen, keine Kopfhautbelastung." },
    { icon: "⏱️", title: "Schnelle Installation", desc: "2-Stunden-Installation statt 3-4 Stunden bei hand-tied wefts. Mehr Kundinnen können sich den Service zu diesem Preis leisten." },
    { icon: "💰", title: "Premium-Umsatz", desc: "Butterfly weft Services kosten £300-600 pro Installation — Premium-Preise für ein Premium-Ergebnis." },
    { icon: "🔄", title: "Wiederkehrende Wartung", desc: "Butterfly wefts brauchen alle 8-12 Wochen Wartung — regelmäßige wiederkehrende Einnahmen das ganze Jahr." },
    { icon: "🧲", title: "Vielseitige Installation", desc: "Kann per Mikro-Perle, Mikro-Link oder eingenäht installiert werden. Maximale Flexibilität für Salonprofis." },
  ],
  tipsHeading: "Profi-Tipps für Salon-Stylisten",
  tips: [
    "Butterfly wefts dürfen NIE geschnitten werden, ohne die Schnittkante zu versiegeln. Verwenden Sie sofort nach dem Schneiden ein Feuerzeug oder einen weft-Sealer — sonst läuft das weft auf.",
    "Die Fold-over-Technik ist entscheidend. Das weft muss sauber über den Haarsections gefaltet werden — nicht darum herum. Üben Sie an Puppenköpfen, bevor Sie an Kundinnen arbeiten.",
    "Butterfly wefts funktionieren am besten mit 2-4 wefts pro komplettem Kopf. Mehr als 4 erzeugt unnötiges Volumen für die meisten Kundinnen.",
    "Für Balayage-Kundinnen führen Sie vorgefärbte butterfly wefts in verschiedenen Balayage-Tönen. Über 60% der Kundinnen wollen etwas Farbtiefe.",
    "Empfehlen Sie ein wöchentliches Entwirr-Spray und einen breitzinkigen Kamm zur Aftercare. Butterfly wefts verfilzen weniger als Einzelstrang-Verlängerungen, brauchen aber tägliche Pflege.",
  ],
  ctaBoxTitle: "Fügen Sie Butterfly Weft Verlängerungen Ihrem Salon hinzu",
  ctaBoxBody:
    "D.S Hair & Beauty liefert butterfly weft Verlängerungen an professionelle UK-Salons. Ultradünne 0,5mm Basis, 100% Remy Echthaar, 50+ Töne, Großhandelspreise verfügbar.",
  ctaBoxPrimaryLabel: "Kollektion durchsuchen",
  ctaBoxPrimaryHref: "/collections/butterfly-extensions",
  ctaBoxSecondaryLabel: "WhatsApp Us",
  ctaBoxSecondaryHref:
    "https://wa.me/8613516946001?text=Hi!%20I'm%20interested%20in%20wholesale%20pricing.",
  ctaBoxSecondaryWhatsapp: true,
  faqHeading: "Häufig gestellte Fragen",
  faqs: [
    { q: "Warum ist die 0,5mm ultradünne Basis ein Game-Changer für Kundinnen mit feinem Haar?", a: "Standard-weft-Basen sind 2–3mm dick, was beim Einnähen oder Kleben Volumen und Unbehagen erzeugt. Die 0,5mm butterfly-Basis ist so dünn, dass sie völlig flach an der Kopfhaut liegt — unentdeckbar selbst unter kurzen Lagen oder Hochsteckfrisuren. Das macht sie sicher für Kundinnen mit feinem Haar, denen zuvor gesagt wurde, sie könnten keine weft-Verlängerungen tragen. Es reduziert auch Hitzestau und Jucken, die Kundinnen mit traditionellen wefts verbinden." },
    { q: "Wie unterscheidet sich die Installation von butterfly weft von Standard hand-tied wefts?", a: "Die Installation von butterfly weft nutzt eine einzigartige Fold-over-Technik, bei der das weft gefaltet und in einem Durchgang mikro-geperlt direkt auf das Haar aufgebracht wird — kein Flechten, kein Nähen, keine Hitze. Das macht es schneller (2–3 Stunden für einen kompletten Kopf statt 4–5 Stunden bei traditionellen hand-tied), komfortabler und günstiger für Kundinnen bei Premium-Ergebnissen." },
    { q: "Können butterfly wefts für Kundinnen eingesetzt werden, die Volumen ohne Länge wollen?", a: "Absolut. Viele Kundinnen mit kürzerem Haar (schulterlang oder kürzer) wollen VOLUMEN als primäres Ziel, nicht Länge. Butterfly wefts sind ideal dafür: sie geben Körper, Fülle und Schwung, ohne die Haarlinge dramatisch zu ändern. Stylen Sie das weft, um mit dem natürlichen Schnitt zu verschmelzen, für einen natürlichen Volumenschub. Das öffnet butterfly wefts eine viel breitere Kundinnenbasis jenseits der reinen Längensucher." },
    { q: "Wie preise ich butterfly weft Installationen wettbewerbsfähig und profitabel?", a: "Butterfly wefts erzielen Premium-Preise, weil die Ergebnisse hand-tied wefts zu einem zugänglicheren Preispunkt ebenbürtig sind. Preisen Sie nach Zeit (2–3 Stunden) plus Haarpreis. Für einen kompletten Kopf liegt die Gesamtkosten für die Kundin typischerweise bei £350–£600+ je nach Haarlänge und Grammgewicht. Bieten Sie Fill-Pakete (6–8 Wochen Rückkehr) als separate Einnahmequelle — das baut eine loyale Kundinnenbasis mit planbaren Terminen auf." },
  ],
  backLabel: "Weitere Artikel",
}

const fr: ButterflyExtensionsGuideContent = {
  seoTitle:
    "Guide des Extensions Butterfly Weft : Volume Ultra-Fin et Sans Couture | D.S HAIR & BEAUTY",
  seoDescription:
    "Guide complet des extensions butterfly weft pour les salons UK. La base ultra-fine de 0,5mm a révolutionné l'industrie. Sans couture, légère, professionnelle.",
  heroBadge: "Guide Produit 2025",
  heroTitleLines: ["Extensions Butterfly Weft :", "Le Game-Changer de l'industrie"],
  heroSubtitle:
    "Les butterfly wefts ont transformé l'approche du volume et de la longueur des salons UK — une base ultra-fine de 0,5mm totalement indétectable. Voici ce que tout pro doit savoir.",
  ctaPrimaryLabel: "Acheter maintenant",
  ctaPrimaryHref: "/collections/butterfly-extensions",
  ctaSecondaryLabel: "Compte Professionnel",
  ctaSecondaryHref: "/salon-partners",
  stats: [
    { num: "0.5mm", label: "base ultra-fine" },
    { num: "2 h", label: "pose tête complète" },
    { num: "£300-600", label: "fourchette de prix du service" },
    { num: "100%", label: "finition sans couture" },
  ],
  breadcrumb: "Retour au Blog",
  metaCategory: "Guide Produit",
  metaDate: "Mis à jour mars 2025",
  metaReadTime: "8 min de lecture",
  whatHeading: "Que sont les extensions Butterfly Weft ?",
  whatP1:
    "Les extensions butterfly weft possèdent une base de weft ultra-fine (0,5mm) brevetée — plus fine que tout weft traditionnel sur le marché. La base est conçue pour se replier sur les cheveux de la cliente et être fixée par micro-perles ou micro-liens, créant un résultat incroyablement sans couture et léger.",
  whatP2:
    "Le nom butterfly vient de la forme de la base du weft — plus large et plus étalée que les wefts traditionnels, permettant une couverture maximale avec un poids minimal. Le résultat est une extension weft pratiquement indétectable même sous les cheveux fins — une révolution dans l'industrie des extensions.",
  heroImageSrc: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=1200&q=80",
  heroImageAlt: "Extensions butterfly weft ultra-fines et sans couture",
  whoHeading: "Pour qui les extensions Butterfly Weft sont-elles les meilleures ?",
  whoCards: [
    {
      iconKey: "users",
      title: "Cheveux fins à moyens",
      desc: "Les butterfly wefts sont spécialement conçus pour les clientes aux cheveux fins à moyens — là où les wefts traditionnels seraient trop volumineux ou visibles.",
    },
    {
      iconKey: "trendingDown",
      title: "Maximiseuses de volume",
      desc: "Un seul butterfly weft couvre une grande surface avec un volume minimal. Parfait pour les clientes qui veulent un volume dramatique sans le poids.",
    },
    {
      iconKey: "sparkles",
      title: "Chercheuses de finition sans couture",
      desc: "Si une cliente a été déçue par les traces de weft visibles d'autres méthodes, les butterfly wefts sont la réponse.",
    },
    {
      iconKey: "clock",
      title: "Clientes pressées",
      desc: "La pose de butterfly weft prend environ 2 heures — bien plus rapide que le hand-tied weft ou les méthodes à strins individuels.",
    },
  ],
  benefitsHeading: "Pourquoi les Butterfly Wefts sont l'extension qui croît le plus vite au UK",
  benefits: [
    { icon: "👁️", title: "Complètement invisibles", desc: "La base de 0,5mm est plus fine qu'une carte de crédit. Même les stylistes professionnels peinent à trouver un butterfly weft bien posé." },
    { icon: "🪶", title: "Ultra-léger", desc: "Les butterfly wefts répartissent le poids sur une large surface — pas de points de pression, pas d'inconfort, pas de tension du cuir chevelu." },
    { icon: "⏱️", title: "Pose rapide", desc: "Pose en 2 heures contre 3-4 heures pour les hand-tied wefts. Plus de clientes peuvent s'offrir le service à ce prix." },
    { icon: "💰", title: "Revenu Premium", desc: "Les services butterfly weft coûtent £300-600 par pose — tarif premium pour un résultat premium." },
    { icon: "🔄", title: "Entretien récurrent", desc: "Les butterfly wefts nécessitent un entretien toutes les 8-12 semaines — revenu récurrent régulier toute l'année." },
    { icon: "🧲", title: "Pose polyvalente", desc: "Peut être posé en micro-perle, micro-lien ou couture. Flexibilité maximale pour les pros du salon." },
  ],
  tipsHeading: "Conseils Pro pour les stylistes de salon",
  tips: [
    "Les butterfly wefts ne doivent JAMAIS être coupés sans sceller le bord coupé. Utilisez un briquet ou un scellant de weft immédiatement après la coupe — sinon le weft s'effiloche.",
    "La technique fold-over est critique. Le weft doit se replier proprement sur la section de cheveux — pas autour. Entraînez-vous sur des têtes de mannequin avant de travailler sur des clientes.",
    "Les butterfly wefts fonctionnent mieux avec 2-4 wefts par tête complète. Plus de 4 crée un volume inutile pour la plupart des clientes.",
    "Pour les clientes balayage, stockez des butterfly wefts pré-colorés dans plusieurs tons balayage. Plus de 60% des clientes veulent une certaine profondeur de couleur.",
    "Recommandez un spray démêlant hebdomadaire et un peigne à larges dents pour l'aftercare. Les butterfly wefts s'emmêlent moins que les extensions à strins, mais ont besoin d'entretien quotidien.",
  ],
  ctaBoxTitle: "Ajoutez des extensions Butterfly Weft à votre salon",
  ctaBoxBody:
    "D.S Hair & Beauty fournit des extensions butterfly weft aux salons UK professionnels. Base ultra-fine 0,5mm, 100% Remy cheveux naturels, 50+ teintes, tarifs de gros disponibles.",
  ctaBoxPrimaryLabel: "Parcourir la collection",
  ctaBoxPrimaryHref: "/collections/butterfly-extensions",
  ctaBoxSecondaryLabel: "WhatsApp Us",
  ctaBoxSecondaryHref:
    "https://wa.me/8613516946001?text=Hi!%20I'm%20interested%20in%20wholesale%20pricing.",
  ctaBoxSecondaryWhatsapp: true,
  faqHeading: "Questions Fréquemment Posées",
  faqs: [
    { q: "Pourquoi la base ultra-fine de 0,5mm est-elle un game-changer pour les clientes aux cheveux fins ?", a: "Les bases de weft standard font 2–3mm d'épaisseur, créant du volume et de l'inconfort quand elles sont cousues ou collées. La base butterfly de 0,5mm est si fine qu'elle repose totalement à plat sur le cuir chevelu — indétectable même sous des couches courtes ou des chignons. Cela la rend sûre pour les clientes aux cheveux fins à qui l'on avait dit qu'elles ne pouvaient pas porter de weft. Cela réduit aussi la rétention de chaleur et les démangeaisons associées aux wefts traditionnels." },
    { q: "En quoi la pose de butterfly weft diffère-t-elle des hand-tied wefts standard ?", a: "La pose de butterfly weft utilise une technique unique de fold-over où le weft est plié et micro-perlé directement sur le cheveu en un seul passage — pas de tressage, pas de couture, pas de chaleur. Cela la rend plus rapide (2–3 heures pour une tête complète contre 4–5 heures pour le hand-tied traditionnel), plus confortable et plus abordable pour les clientes tout en gardant des résultats premium." },
    { q: "Les butterfly wefts peuvent-ils servir aux clientes qui veulent du volume sans longueur ?", a: "Absolument. Beaucoup de clientes aux cheveux courts (épaule ou moins) veulent le VOLUME comme objectif principal, pas la longueur. Les butterfly wefts sont idéaux : ils ajoutent corps, épaisseur et rebond sans changer drastiquement la longueur. Stylisez le weft pour fondre avec la coupe naturelle pour un boost d'épaisseur naturel. Cela ouvre les butterfly wefts à une clientèle bien plus large au-delà des seules chercheuses de longueur." },
    { q: "Comment tarifer les poses de butterfly weft de façon compétitive et rentable ?", a: "Les butterfly wefts commandent un tarif premium car les résultats rivalisent avec les hand-tied wefts à un prix plus accessible. Tarifez au temps (2–3 heures) plus le coût du cheveu. Pour une tête complète, le coût total pour la cliente varie typiquement de £350–£600+ selon la longueur et le grammage. Proposez des forfaits de remplissage (retours 6–8 semaines) comme source de revenu séparée — cela construit une clientèle fidèle avec des rendez-vous prévisibles." },
  ],
  backLabel: "Plus d'articles",
}

const ar: ButterflyExtensionsGuideContent = {
  seoTitle:
    "دليل إكسسوارات Butterfly Weft: حجم فائق الرقة بلا شواقر | D.S HAIR & BEAUTY",
  seoDescription:
    "دليل كامل لإكسسوارات butterfly weft لصالونات UK. القاعدة فائقة الرقة 0.5mm غيرت الصناعة. بلا شواقر، خفيفة، احترافية.",
  heroBadge: "دليل المنتج 2025",
  heroTitleLines: ["إكسسوارات Butterfly Weft:", "المغيّر الكبير في الصناعة"],
  heroSubtitle:
    "غيّرت الـ butterfly wefts طريقة تعامل صالونات UK مع الحجم والطول — قاعدة فائقة الرقة 0.5mm غير مكشوفة تماماً. إليك ما يحتاج كل محترف لمعرفته.",
  ctaPrimaryLabel: "تسوق الآن",
  ctaPrimaryHref: "/collections/butterfly-extensions",
  ctaSecondaryLabel: "حساب الجملة",
  ctaSecondaryHref: "/salon-partners",
  stats: [
    { num: "0.5mm", label: "قاعدة فائقة الرقة" },
    { num: "2 س", label: "تركيب رأس كامل" },
    { num: "£300-600", label: "نطاق سعر الخدمة" },
    { num: "100%", label: "تشطيب بلا شواقر" },
  ],
  breadcrumb: "العودة إلى المدونة",
  metaCategory: "دليل المنتج",
  metaDate: "حُدّث مارس 2025",
  metaReadTime: "8 دقائق قراءة",
  whatHeading: "ما هي إكسسوارات Butterfly Weft؟",
  whatP1:
    "تتميز إكسسوارات butterfly weft بقاعدة weft فائقة الرقة (0.5mm) مسجلة كبراءة اختراع — أرق من أي weft تقليدي في السوق. صُممت القاعدة لتطوى فوق شعر العميلة وتُثبت بحبات أو روابط مصغّرة، مما يخلق نتيجة بلا شواقر وخفيفة جداً.",
  whatP2:
    "أخذ اسم butterfly من شكل قاعدة الـ weft — أعرض وأكثر انتشاراً من الـ wefts التقليدية، ما يسمح بتغطية قصوى بوزن شبه معدوم. النتيجة إكسسوار weft يكاد يكون غير مكشوف حتى تحت الشعر الرقيق — ثورة في صناعة الإكسسوارات.",
  heroImageSrc: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=1200&q=80",
  heroImageAlt: "إكسسوارات butterfly weft فائقة الرقة بلا شواقر",
  whoHeading: "لمن تصلح إكسسوارات Butterfly Weft بشكل أفضل؟",
  whoCards: [
    {
      iconKey: "users",
      title: "شعر ناعم إلى متوسط",
      desc: "صُممت الـ butterfly wefts خصيصاً لعميلات الشعر الناعم إلى المتوسط — حيث تكون الـ wefts التقليدية ضخمة أو ظاهرة.",
    },
    {
      iconKey: "trendingDown",
      title: "معظّمات الحجم",
      desc: "يغطي weft واحد من butterfly مساحة كبيرة بحجم شبه معدوم. مثالي لعميلات يردن حجماً درامياً بلا ثقل.",
    },
    {
      iconKey: "sparkles",
      title: "باحثات عن التشطيب بلا شواقر",
      desc: "إذا خيبت طرق أخرى آمال عميلة بسبب آثار weft ظاهرة، فالـ butterfly wefts هي الحل.",
    },
    {
      iconKey: "clock",
      title: "عميلات بوقت ضيق",
      desc: "تركيب الـ butterfly weft يستغرق نحو ساعتين — أسرع بكثير من hand-tied weft أو طرق الخصلات الفردية.",
    },
  ],
  benefitsHeading: "لماذا تعد Butterfly Wefts الإكسسوار الأسرع نمواً في UK",
  benefits: [
    { icon: "👁️", title: "غير مرئية تماماً", desc: "قاعدة 0.5mm أرق من بطاقة ائتمان. حتى الأسلطات المحترفات يجدن صعوبة في العثور على butterfly weft مركّب جيداً." },
    { icon: "🪶", title: "خفيفة فائقة", desc: "توزع الـ butterfly wefts الوزن على مساحة واسعة — لا نقاط ضغط، لا إزعاج، لا إجهاد فروة الرأس." },
    { icon: "⏱️", title: "تركيب سريع", desc: "تركيب ساعتين مقابل 3-4 ساعات لـ hand-tied wefts. عميلات أكثر يستطعن تحمّل الخدمة بهذا السعر." },
    { icon: "💰", title: "إيراد بريميوم", desc: "خدمات الـ butterfly weft تكلّف £300-600 لكل تركيب — تسعير بريميوم لنتيجة بريميوم." },
    { icon: "🔄", title: "صيانة متكررة", desc: "تحتاج الـ butterfly wefts صيانة كل 8-12 أسبوعاً — إيراد متكرر منتظم طوال السنة." },
    { icon: "🧲", title: "تركيب متعدد", desc: "يمكن تركيبها عبر حبة مصغّرة أو رابط مصغّر أو خياطة. أقصى مرونة لمحترفي الصالون." },
  ],
  tipsHeading: "نصائح الخبراء لأسلاط الصالون",
  tips: [
    "لا تُقطع الـ butterfly wefts أبداً دون سدّ الحافة المقطوعة. استخدمي ولاعة أو مثبت weft فوراً بعد القص — وإلا تفكك الـ weft.",
    "تقنية الطيّ (fold-over) حاسمة. يجب أن يتطوى الـ weft بنظافة فوق قسم الشعر — لا حوله. تدرّبي على رؤوس الدمى قبل العمل على العميلات.",
    "تعمل الـ butterfly wefts بشكل أفضل مع 2-4 wefts لكل رأس كامل. أكثر من 4 يخلق حجماً غير ضروري لمعظم العميلات.",
    "لعميلات البالاياج، خزّني butterfly wefts ملوّنة مسبقاً بعدة درجات بالاياج. أكثر من 60% من العميلات يردن بعض عمق اللون.",
    "أوصي برذاذ فك تشابك أسبوعي ومشط ذي أسنان واسعة للعناية. تتشابك الـ butterfly wefts أقل من الإكسسوارات الفردية لكنها تحتاج عناية يومية.",
  ],
  ctaBoxTitle: "أضف إكسسوارات Butterfly Weft إلى صالونك",
  ctaBoxBody:
    "تزوّد D.S Hair & Beauty صالونات UK المحترفة بإكسسوارات butterfly weft. قاعدة فائقة الرقة 0.5mm، 100% Remy شعر بشري، 50+ درجة، أسعار جملة متوفرة.",
  ctaBoxPrimaryLabel: "تصفح المجموعة",
  ctaBoxPrimaryHref: "/collections/butterfly-extensions",
  ctaBoxSecondaryLabel: "WhatsApp Us",
  ctaBoxSecondaryHref:
    "https://wa.me/8613516946001?text=Hi!%20I'm%20interested%20in%20wholesale%20pricing.",
  ctaBoxSecondaryWhatsapp: true,
  faqHeading: "الأسئلة الشائعة",
  faqs: [
    { q: "لماذا تعتبر القاعدة فائقة الرقة 0.5mm نقطة تحوّل لعميلات الشعر الناعم؟", a: "قواعد الـ weft القياسية سمكها 2–3mm، ما يخلق حجماً وإزعاجاً عند الخياطة أو اللصق. قاعدة الـ butterfly سمكها 0.5mm رقيقة جداً فتستلقي مسطّحة تماماً على فروة الرأس — غير مكشوفة حتى تحت الطبقات القصيرة أو التسريحات المرفوعة. هذا يجعلها آمنة لعميلات الشعر الناعم اللواتي قيل لهن سابقاً إنهن لا يستطعن ارتداء weft. كما تقلل احتباس الحرارة والحكة المرتبطة بالـ wefts التقليدية." },
    { q: "كيف يختلف تركيب butterfly weft عن الـ hand-tied wefts القياسية؟", a: "يستخدم تركيب الـ butterfly weft تقنية فريدة (fold-over) حيث يُطوى الـ weft ويُثبّت بحبات مصغّرة مباشرة على الشعر في مرور واحد — لا تضفير، لا خياطة، لا حرارة. هذا يجعله أسرع (2–3 ساعات لرأس كامل مقابل 4–5 لـ hand-tied التقليدي)، وأكثر راحة، وأوفر للعميلة مع الحفاظ على نتائج بريميوم." },
    { q: "هل يمكن استخدام butterfly wefts لعميلات يردن حجماً بلا طول؟", a: "بالتأكيد. كثير من العميلات ذوات الشعر القصير (كتف أو أقل) يردن الحجم VOLUME كهدف رئيسي لا الطول. الـ butterfly wefts مثالية لذلك: تضيف جسماً وكثافة وانتعاشاً بلا تغيير جذري للطول. صمّمي الـ weft ليندمج مع القصة الطبيعية لدفعة كثافة طبيعية. هذا يفتح الـ butterfly wefts لشريحة أوسع بكثير من مجرد الباحثات عن الطول." },
    { q: "كيف أحدّد سعر تركيب butterfly weft بشكل تنافسي ومربح؟", a: "تأمر الـ butterfly wefts تسعيراً بريميوم لأن نتائجها تنافس الـ hand-tied wefts بسعر أكثر تيسيراً. حددي السعر بالوقت (2–3 ساعات) زائداً تكلفة الشعر. لرأس كامل، يتراوح التكلفة الكلية للعميلة عادة £350–£600+ حسب طول الشعر ووزنه بالغرام. قدّمي باقات تعبئة (عودة كل 6–8 أسابيع) كمصدر دخل منفصل — يبني قاعدة عميلات مخلصة بمواعيد يمكن التنبؤ بها." },
  ],
  backLabel: "مقالات أكثر",
}

const sv: ButterflyExtensionsGuideContent = {
  seoTitle:
    "Guide för Butterfly Weft Förlängningar: Ultratunt Volym utan Sömmar | D.S HAIR & BEAUTY",
  seoDescription:
    "Komplett guide för butterfly weft hårförlängningar för UK-salonger. Den ultratunna 0,5mm-basen revolutionerade branschen. Sömlös, lätt, professionell.",
  heroBadge: "Produktguide 2025",
  heroTitleLines: ["Butterfly Weft Förlängningar:", "Branschens Game-Changer"],
  heroSubtitle:
    "Butterfly wefts har förändrat hur UK-salonger angriper volym och längd — en ultratunn 0,5mm-bas som är helt omärklig. Här är vad varje proffs behöver veta.",
  ctaPrimaryLabel: "Handla nu",
  ctaPrimaryHref: "/collections/butterfly-extensions",
  ctaSecondaryLabel: "Återförsäljarkonto",
  ctaSecondaryHref: "/salon-partners",
  stats: [
    { num: "0.5mm", label: "ultratunn bas" },
    { num: "2 tim", label: "helhuvudsmontering" },
    { num: "£300-600", label: "prisintervall för tjänst" },
    { num: "100%", label: "sömlös finish" },
  ],
  breadcrumb: "Tillbaka till Bloggen",
  metaCategory: "Produktguide",
  metaDate: "Uppdaterad mars 2025",
  metaReadTime: "8 min läsning",
  whatHeading: "Vad är Butterfly Weft Förlängningar?",
  whatP1:
    "Butterfly weft förlängningar har en ultratunn (0,5mm) patentera weft-bas — tunnare än något traditionellt weft på marknaden. Basen är designad att vikas över kundens hår och fästas med mikropärlor eller mikrolänkar, vilket skapar ett otroligt sömlöst och lätt resultat.",
  whatP2:
    "Namnet butterfly kommer från formen på weft-basen — bredare och mer utspridd än traditionella wefts, vilket ger maximal täckning med minimal vikt. Resultatet är en weft-förlängning som är praktiskt taget omärklig även under tunt hår — en revolution inom förlängningsbranschen.",
  heroImageSrc: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=1200&q=80",
  heroImageAlt: "Butterfly weft hårförlängningar ultratunna sömlösa",
  whoHeading: "För vem passar Butterfly Weft Förlängningar bäst?",
  whoCards: [
    {
      iconKey: "users",
      title: "Fint till medelhår",
      desc: "Butterfly wefts är specifikt utformade för kunder med fint till medelhår — där traditionella wefts skulle vara för bulkiga eller synliga.",
    },
    {
      iconKey: "trendingDown",
      title: "Volymmaximerare",
      desc: "Ett enda butterfly weft täcker ett stort område med minimal volym. Perfekt för kunder som vill ha dramatisk volym utan vikten.",
    },
    {
      iconKey: "sparkles",
      title: "Sömlös-finish-sökare",
      desc: "Om en kund blivit besviken av synliga weft-spår från andra metoder är butterfly wefts svaret.",
    },
    {
      iconKey: "clock",
      title: "Tidspressade kunder",
      desc: "Butterfly weft-montering tar cirka 2 timmar — betydligt snabbare än hand-tied weft eller individuella strängmetoder.",
    },
  ],
  benefitsHeading: "Varför Butterfly Wefts är UK:s snabbast växande förlängning",
  benefits: [
    { icon: "👁️", title: "Helt osynlig", desc: "0,5mm-basen är tunnare än ett kreditkort. Även professionella stylister har svårt att hitta en väl monterad butterfly weft." },
    { icon: "🪶", title: "Ultralätt", desc: "Butterfly wefts fördelar vikten över ett stort område — inga tryckpunkter, ingen obehag, ingen hårbottenbelastning." },
    { icon: "⏱️", title: "Snabb montering", desc: "2 timmars montering mot 3-4 timmar för hand-tied wefts. Fler kunder har råd med tjänsten till detta pris." },
    { icon: "💰", title: "Premiumintäkt", desc: "Butterfly weft-tjänster kostar £300-600 per montering — premiumpris för ett premiumresultat." },
    { icon: "🔄", title: "Återkommande underhåll", desc: "Butterfly wefts behöver underhåll var 8-12 vecka — regelbunden återkommande intäkt hela året." },
    { icon: "🧲", title: "Mångsidig montering", desc: "Kan monteras via mikropärla, mikrolänk eller isydd. Maximal flexibilitet för salongprofessionella." },
  ],
  tipsHeading: "Proffstips för salongstylister",
  tips: [
    "Butterfly wefts får ALDRIG klippas utan att kantt tätas. Använd ett tändstäd eller weft-sealer omedelbart efter klippning — annars fransar weft upp sig.",
    "Fold-over-tekniken är kritisk. Weft måste vikas rent över hårsektionen — inte runt den. Öva på dockhuvuden innan du arbetar på kunder.",
    "Butterfly wefts fungerar bäst med 2-4 wefts per helt huvud. Fler än 4 skapar onödig volym för de flesta kunder.",
    "För balayage-kunder, håll förtonade butterfly wefts i flera balayage-nyanser. Över 60% av kunderna vill ha visst färgdjup.",
    "Rekommendera ett veckovis redningsspray och bredtandad kam för aftercare. Butterfly wefts trasslar mindre än individuella förlängningar men behöver dagligt underhåll.",
  ],
  ctaBoxTitle: "Lägg till Butterfly Weft Förlängningar i din salong",
  ctaBoxBody:
    "D.S Hair & Beauty levererar butterfly weft förlängningar till professionella UK-salonger. Ultratunn 0,5mm-bas, 100% Remy människohår, 50+ nyanser, partipriser tillgängliga.",
  ctaBoxPrimaryLabel: "Bläddra i kollektionen",
  ctaBoxPrimaryHref: "/collections/butterfly-extensions",
  ctaBoxSecondaryLabel: "WhatsApp Us",
  ctaBoxSecondaryHref:
    "https://wa.me/8613516946001?text=Hi!%20I'm%20interested%20in%20wholesale%20pricing.",
  ctaBoxSecondaryWhatsapp: true,
  faqHeading: "Vanliga frågor",
  faqs: [
    { q: "Varför är den ultratunna 0,5mm-basen en game-changer för kunder med fint hår?", a: "Standard weft-baser är 2–3mm tjocka, vilket skapar volym och obehag när de sys eller limmas in. Den 0,5mm butterfly-basen är så tunn att den ligger helt platt mot hårbotten — omärklig även under korta lager eller uppsättningar. Detta gör den säker för kunder med fint hår som tidigare fått höra att de inte kunde bära weft-förlängningar. Den minskar också värmeansamling och klåda som kunder associerar med traditionella wefts." },
    { q: "Hur skiljer sig montering av butterfly weft från standard hand-tied wefts?", a: "Butterfly weft-montering använder en unik fold-over-teknik där weft viks och mikro-pärlor fästs direkt på håret i ett enda pass — ingen flätning, ingen sömnad, ingen värme. Detta gör det snabbare (2–3 timmar för ett helt huvud mot 4–5 timmar för traditionell hand-tied), bekvämare och mer prisvärt för kunder samtidigt som premiumresultat bibehålls." },
    { q: "Kan butterfly wefts användas för kunder som vill ha volym utan längd?", a: "Absolut. Många kunder med kortare hår (axellängd eller kortare) vill ha VOLUM som huvudmål, inte längd. Butterfly wefts är idealiska för detta: de ger kropp, tjocklek och studs utan att drastiskt ändra hårlängden. Styla weft för att smälta med den naturliga klippningen för en naturlig volymboost. Detta öppnar butterfly wefts för en mycket bredare kundkrets bortom enbart längdsökare." },
    { q: "Hur prissätter jag butterfly weft-montering konkurrenskraftigt och lönsamt?", a: "Butterfly wefts tar premiumpris eftersom resultaten mäter sig med hand-tied wefts till ett mer tillgängligt pris. Prissätt per tid (2–3 timmar) plus hårkostnad. För ett helt huvud ligger den totala kostnaden för kunden typiskt på £350–£600+ beroende på hårlängd och gramvikt. Erbjud påfyllnadspaket (6–8 veckors återkomst) som en separat intäktsström — det bygger en lojal kundkrets med förutsägbara tider." },
  ],
  backLabel: "Fler artiklar",
}

const pl: ButterflyExtensionsGuideContent = {
  seoTitle:
    "Przewodnik po Przedłużeniach Butterfly Weft: Ultra-Cienkie, Bez Szwów Objętość | D.S HAIR & BEAUTY",
  seoDescription:
    "Kompletny przewodnik po przedłużeniach butterfly weft dla salonów w UK. Ultracienka baza 0,5mm zrewolucjonizowała branżę. Bez szwów, lekkie, profesjonalne.",
  heroBadge: "Przewodnik Produktu 2025",
  heroTitleLines: ["Przedłużenia Butterfly Weft:", "Game-Changer Branży"],
  heroSubtitle:
    "Butterfly wefty zmieniły podejście salonów w UK do objętości i długości — ultracienka baza 0,5mm całkowicie nie wykrywalna. Oto co każdy profesjonalista musi wiedzieć.",
  ctaPrimaryLabel: "Kup teraz",
  ctaPrimaryHref: "/collections/butterfly-extensions",
  ctaSecondaryLabel: "Konto Hurtowe",
  ctaSecondaryHref: "/salon-partners",
  stats: [
    { num: "0.5mm", label: "ultracienka baza" },
    { num: "2 godz", label: "pełna głowa montażu" },
    { num: "£300-600", label: "przedział ceny usługi" },
    { num: "100%", label: "bezszwowa finish" },
  ],
  breadcrumb: "Powrót do Bloga",
  metaCategory: "Przewodnik Produktu",
  metaDate: "Zaktualizowano marzec 2025",
  metaReadTime: "8 min czytania",
  whatHeading: "Czym są Przedłużenia Butterfly Weft?",
  whatP1:
    "Przedłużenia butterfly weft mają ultracienką (0,5mm) opatentowaną bazę weft — cieńszą niż jakikolwiek tradycyjny weft na rynku. Baza jest zaprojektowana, by złożyć się nad włosami klientki i zostać przymocowaną mikrokoralikami lub mikrolinkami, tworząc niezwykle bezszwowy i lekki efekt.",
  whatP2:
    "Nazwa butterfly pochodzi od kształtu bazy weft — szerszej i bardziej rozłożonej niż tradycyjne wefty, co daje maksymalne pokrycie przy minimalnej wadze. Efektem jest przedłużenie weft praktycznie niewykrywalne nawet pod cienkimi włosami — rewolucja w branży przedłużani.",
  heroImageSrc: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=1200&q=80",
  heroImageAlt: "Przedłużenia butterfly weft ultracienkie bezszwowe",
  whoHeading: "Dla kogo Przedłużenia Butterfly Weft są najlepsze?",
  whoCards: [
    {
      iconKey: "users",
      title: "Włosy cienkie do średnich",
      desc: "Butterfly wefty są specjalnie zaprojektowane dla klientek z włosami cienkimi do średnich — gdzie tradycyjne wefty byłyby zbyt masywne lub widoczne.",
    },
    {
      iconKey: "trendingDown",
      title: "Maksymalizatorki objętości",
      desc: "Pojedynczy butterfly weft pokrywa duży obszar przy minimalnej objętości. Idealny dla klientek chcących dramatycznej objętości bez ciężaru.",
    },
    {
      iconKey: "sparkles",
      title: "Szukające bez szwów",
      desc: "Jeśli klientka rozczarowała się widocznymi śladami weft z innych metod, butterfly wefty są odpowiedzią.",
    },
    {
      iconKey: "clock",
      title: "Klientki w kratkę czasową",
      desc: "Montaż butterfly weft zajmuje około 2 godziny — znacznie szybciej niż hand-tied weft lub metody pojedynczych pasm.",
    },
  ],
  benefitsHeading: "Dlaczego Butterfly Wefty to najszybciej rosnące przedłużenie w UK",
  benefits: [
    { icon: "👁️", title: "Całkowicie niewidoczne", desc: "Baza 0,5mm jest cieńsza niż karta kredytowa. Nawet profesjonalne stylistki trudno znaleźć dobrze założony butterfly weft." },
    { icon: "🪶", title: "Ultrolekkie", desc: "Butterfly wefty rozkładają ciężar na szerokim obszarze — brak punktów nacisku, brak dyskomfortu, brak napięcia skóry." },
    { icon: "⏱️", title: "Szybki montaż", desc: "Montaż 2 godziny wobec 3-4 godzin przy hand-tied weft. Więcej klientek może pozwolić sobie na usługę w tej cenie." },
    { icon: "💰", title: "Premium przychód", desc: "Usługi butterfly weft kosztują £300-600 za montaż — ceny premium za efekt premium." },
    { icon: "🔄", title: "Powracająca pielęgnacja", desc: "Butterfly wefty wymagają pielęgnacji co 8-12 tygodni — regularny powracający przychód przez cały rok." },
    { icon: "🧲", title: "Wszechstronny montaż", desc: "Można montować przez mikrokoralik, mikrolink lub wszycie. Maksymalna elastyczność dla pro salonowych." },
  ],
  tipsHeading: "Porady Pro dla stylistek salonu",
  tips: [
    "Butterfly wefty NIGDY nie wolno ciąć bez uszczelnienia krawędzi cięcia. Użyj zapalniczki lub uszczelniacza weft natychmiast po cięciu — w przeciwnym razie weft się rozwiąże.",
    "Technika fold-over jest kluczowa. Weft musi czysto złożyć się nad sekcją włosów — nie wokół niej. Ćwicz na głowach manekinów przed pracą z klientkami.",
    "Butterfly wefty najlepiej działają z 2-4 weftami na pełną głowę. Więcej niż 4 tworzy niepotrzebną objętość dla większości klientek.",
    "Dla klientek balayage trzymaj predfarbione butterfly wefty w różnych odcieniach balayage. Ponad 60% klientek chce pewną głębię koloru.",
    "Polecaj tygodniowy spray do rozczesywania i grzebień szerokozębny do pielęgnacji. Butterfly wefty plączą się mniej niż pojedyncze przedłużenia, ale wciąż potrzebują codziennej pielęgnacji.",
  ],
  ctaBoxTitle: "Dodaj Przedłużenia Butterfly Weft do swojego salonu",
  ctaBoxBody:
    "D.S Hair & Beauty dostarcza przedłużenia butterfly weft do profesjonalnych salonów w UK. Ultracienka baza 0,5mm, 100% Remy włosy naturalne, 50+ odcieni, ceny hurtowe dostępne.",
  ctaBoxPrimaryLabel: "Przeglądaj kolekcję",
  ctaBoxPrimaryHref: "/collections/butterfly-extensions",
  ctaBoxSecondaryLabel: "WhatsApp Us",
  ctaBoxSecondaryHref:
    "https://wa.me/8613516946001?text=Hi!%20I'm%20interested%20in%20wholesale%20pricing.",
  ctaBoxSecondaryWhatsapp: true,
  faqHeading: "Najczęściej Zadawane Pytania",
  faqs: [
    { q: "Dlaczego ultracienka baza 0,5mm to game-changer dla klientek z cienkimi włosami?", a: "Standardowe bazy weft mają 2–3mm grubości, co przy wszywaniu lub klejeniu tworzy objętość i dyskomfort. Baza butterfly 0,5mm jest tak cienka, że leży całkowicie płasko na skórze głowy — niewykrywalna nawet pod krótkimi warstwami czy upięciami. Czyni to ją bezpieczną dla klientek z cienkimi włosami, którym wcześniej mówiono, że nie mogą nosić weft. Zmniejsza też gromadzenie ciepła i swędzenie kojarzone z tradycyjnymi weftami." },
    { q: "Czym montaż butterfly weft różni się od standardowych hand-tied weft?", a: "Montaż butterfly weft używa unikalnej techniki fold-over, gdzie weft jest składany i mikro-zaczepiany bezpośrednio na włosach w jednym przejściu — bez wplatania, szycia, ciepła. Czyni to go szybszym (2–3 godziny za pełną głowę wobec 4–5 przy tradycyjnym hand-tied), wygodniejszym i tańszym dla klientek przy zachowaniu efektów premium." },
    { q: "Czy butterfly wefty można stosować u klientek chcących objętości bez długości?", a: "Absolutnie. Wiele klientek z krótszymi włosami (do ramion lub krótsze) chce VOLUMU jako głównego celu, nie długości. Butterfly wefty są do tego idealne: dodają ciało, gęstość i skok bez drastycznej zmiany długości. Wystylizuj weft, by stopił się z naturalnym cięciem dla naturalnego podbicia objętości. Otwiera to butterfly wefty na znacznie szersze grono klientek poza same szukające długości." },
    { q: "Jak wyceniać montaż butterfly weft konkurencyjnie i z zyskiem?", a: "Butterfly wefty biorą ceny premium, bo efekty dorównują hand-tied weft w bardziej dostępnej cenie. Wyceniaj wg czasu (2–3 godziny) plus koszt włosa. Za pełną głowę całkowity koszt dla klientki wynosi zwykle £350–£600+ zależnie od długości i gramatury. Oferuj pakiety uzupełnień (powroty co 6–8 tygodni) jako osobne źródło przychodu — buduje to lojalną bazę klientek z przewidywalnymi wizytami." },
  ],
  backLabel: "Więcej artykułów",
}

export const butterflyExtensionsGuideContent: Record<Locale, ButterflyExtensionsGuideContent> = {
  en,
  de,
  fr,
  ar,
  sv,
  pl,
}
