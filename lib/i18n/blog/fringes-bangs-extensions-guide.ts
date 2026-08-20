import type { Locale } from "@/lib/i18n/config"

// Content module for the "Fringes & Bangs Extensions Guide" blog post.
// All visible English copy is externalised here so the page can be rendered
// in any of the 6 locales with an identical layout. The English page
// (locale="en") renders exactly the same JSX it always did.

export interface FringesBangsExtensionsGuideContent {
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
  whyHeading: string
  whyCards: { icon: string; title: string; desc: string }[]
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

const en: FringesBangsExtensionsGuideContent = {
  seoTitle:
    "Hair Fringe & Bangs Extensions Guide | D.S HAIR & BEAUTY",
  seoDescription:
    "Complete guide to fringe and bangs hair extensions for UK salons. Add face-framing colour, volume, and style without commitment. 100% Remy human hair.",
  heroBadge: "Product Guide 2025",
  heroTitleLines: ["Fringes & Bangs Extensions:", "The Finishing Touch"],
  heroSubtitle:
    "Fringe extensions are the most underrated salon product — instant face-framing colour, volume, and style without a long-term commitment. Here's how to add them to your salon offering.",
  ctaPrimaryLabel: "Shop Now",
  ctaPrimaryHref: "/collections/fringes-bangs",
  ctaSecondaryLabel: "Trade Account",
  ctaSecondaryHref: "/salon-partners",
  stats: [
    { num: "1 min", label: "application time" },
    { num: "30+", label: "shades available" },
    { num: "6 mo", label: "average lifespan" },
    { num: "£60-120", label: "average client spend" },
  ],
  breadcrumb: "Back to Blog",
  metaCategory: "Product Guide",
  metaDate: "Updated March 2025",
  metaReadTime: "6 min read",
  whatHeading: "What Are Fringe & Bangs Extensions?",
  whatParagraphs: [
    "Fringe and bangs extensions are small wefts or single strands of hair designed to clip onto or blend with a client's existing fringe — adding instant length, volume, colour, or texture to the face-framing area.",
    "They're perfect for clients who love the idea of a fringe but don't want to commit to cutting their own hair. Fringe extensions allow stylists to offer face-framing colour (balayage fringe, anyone?) or volume without a permanent change.",
  ],
  heroImageSrc: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1200&q=80",
  heroImageAlt: "Hair fringe extensions face framing style",
  whoHeading: "Who Are Fringe Extensions Best For?",
  whoCards: [
    {
      iconKey: "users",
      title: "The Fringe Curious",
      desc: "Clients who always wanted a fringe but are afraid of the commitment. Try before you cut — literally.",
    },
    {
      iconKey: "trendingDown",
      title: "Colour Enhancement",
      desc: "Perfect for adding balayage, highlights, or bold colour to the face-frame without colouring the whole head.",
    },
    {
      iconKey: "sparkles",
      title: "Post-Cut Recovery",
      desc: "Clients who just grew out a fringe and miss it. Fill in the awkward grow-out phase without cutting again.",
    },
    {
      iconKey: "clock",
      title: "Volume Seekers",
      desc: "Fine-haired clients who want a fuller, thicker fringe without the commitment of cutting more hair.",
    },
  ],
  whyHeading: "Why Every Salon Should Offer Fringe Extensions",
  whyCards: [
    { icon: "🧲", title: "Untapped Niche", desc: "Very few UK salons offer fringe extensions. Being first in your area gives you a unique selling point." },
    { icon: "💰", title: "Low Cost, High Impact", desc: "Fringe extensions cost less to produce than full sets, but clients pay £60-120 — excellent margin." },
    { icon: "⚡", title: "Instant Retail", desc: "No appointment needed. Walk-in clip-in fringe sale takes under 2 minutes." },
    { icon: "🔄", title: "Cross-Sell Opportunity", desc: "Fringe extensions naturally lead to conversations about full extensions, colouring, and other services." },
    { icon: "⭐", title: "Social Media Gold", desc: "Before/after fringe transformations are incredibly shareable. Great for Instagram and TikTok content." },
    { icon: "😊", title: "Maximum Impact", desc: "A great fringe change is one of the most impactful hairstyle moves. Clients absolutely love it." },
  ],
  tipsHeading: "Pro Tips for Salon Stylists",
  tips: [
    "Fringe extensions work best with curtain bangs or side fringes — not straight blunt cuts. Match the style to the client's face shape.",
    "Balayage fringe extensions are extremely popular. Stock a range of rooted and balayage-fringe shades for this growing trend.",
    "Colour match to the client's desired fringe colour — usually the mid-lengths at the front.",
    "Offer a fringe styling lesson with every purchase. Show clients how to style and blend their fringe extension.",
    "Cross-sell a wide-tooth comb and lightweight styling serum. These extend the life of the fringe extension significantly.",
  ],
  ctaBoxTitle: "Add Fringe Extensions to Your Salon Today",
  ctaBoxBody:
    "D.S Hair & Beauty supplies fringe and bangs extensions to UK professional salons. Wholesale pricing available. Mix-and-match colours supported.",
  ctaBoxPrimaryLabel: "Browse Collection",
  ctaBoxPrimaryHref: "/collections/fringes-bangs",
  ctaBoxSecondaryLabel: "WhatsApp Us",
  ctaBoxSecondaryHref:
    "https://wa.me/8613516946001?text=Hi!%20I'm%20interested%20in%20wholesale%20pricing.",
  ctaBoxSecondaryWhatsapp: true,
  faqHeading: "Frequently Asked Questions",
  faqs: [
    {
      q: "What's the most common mistake when fitting fringe extensions?",
      a: "Choosing the wrong length. Fringe extensions that are too long tangle with the rest of the hair and look unnatural. The ideal length extends just past the brow or sits at cheekbone level for styling versatility. Always ask clients how they prefer to wear their fringe before ordering, and recommend cutting them in salon after fitting for a bespoke finish.",
    },
    {
      q: "Can fringe extensions work on very short or very long hair?",
      a: "For short hair (above shoulder length), fringe extensions create an instant 'lob' or bob illusion — very popular. For very long hair, fringe extensions add face-framing volume without bulk. The key is matching the texture and wave pattern: straight fringe extensions on curly hair will look disconnected. Always recommend texture-matching.",
    },
    {
      q: "How do I colour-match fringe extensions for ombré or balayage clients?",
      a: "Match to the ROOT colour for a natural blend at the part line. For clients with ombré or balayage, you can order two pieces in different colours and have them colour-crafted together, or advise the client that the fringe will be a solid colour contrasting with their dimensional mid-lengths. Many stylists now sell fringe pieces as a separate customisation add-on.",
    },
    {
      q: "What's the best way to upsell fringe extensions in salon?",
      a: "Fringe extensions are an underused upsell. Position them as a low-commitment way to try a new look. Offer fringe cuts as a combo service — fitting plus styling. For clients considering a full set of extensions, fringe pieces are an affordable entry point that often leads to full installs. They also reduce the need for frequent fringe trims between appointments.",
    },
  ],
  backLabel: "More Articles",
}

const de: FringesBangsExtensionsGuideContent = {
  seoTitle:
    "Ratgeber Pony- & Fringe-Extensions | D.S HAIR & BEAUTY",
  seoDescription:
    "Komplettter Ratgeber zu Pony- und Fringe-Extensions für UK-Salons. Gesicht umrahmende Farbe, Volumen und Stil ohne Bindung. 100% Remy Echthaar.",
  heroBadge: "Produktführer 2025",
  heroTitleLines: ["Pony- & Fringe-Extensions:", "Der letzte Schliff"],
  heroSubtitle:
    "Fringe-Extensions sind das am meisten unterschätzte Salonprodukt — sofortige gesichtumrahmende Farbe, Volumen und Stil ohne langfristige Bindung. So fügen Sie sie Ihrem Salonangebot hinzu.",
  ctaPrimaryLabel: "Jetzt shoppen",
  ctaPrimaryHref: "/collections/fringes-bangs",
  ctaSecondaryLabel: "Händlerkonto",
  ctaSecondaryHref: "/salon-partners",
  stats: [
    { num: "1 min", label: "Anwendungszeit" },
    { num: "30+", label: "Farbtöne verfügbar" },
    { num: "6 mo", label: "durchschnittliche Lebensdauer" },
    { num: "£60-120", label: "durchschn. Kundenausgabe" },
  ],
  breadcrumb: "Zurück zum Blog",
  metaCategory: "Produktführer",
  metaDate: "Aktualisiert März 2025",
  metaReadTime: "6 Min. Lesezeit",
  whatHeading: "Was sind Pony- & Fringe-Extensions?",
  whatParagraphs: [
    "Pony- und Fringe-Extensions sind kleine Haarsträhnen oder einzelne Haarsträhnen, die an den vorhandenen Pony der Kundin geklippt oder damit verblendet werden — für sofortige Länge, Volumen, Farbe oder Textur im gesichtumrahmenden Bereich.",
    "Sie sind perfekt für Kundinnen, die von einem Pony träumen, sich aber nicht an die eigenen Haare herantrauen wollen. Fringe-Extensions erlauben Stylisten, gesichtumrahmende Farbe (Balayage-Pony, jemand?) oder Volumen ohne dauerhafte Veränderung anzubieten.",
  ],
  heroImageSrc: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1200&q=80",
  heroImageAlt: "Pony-Extensions in der Gesichtumrahmung",
  whoHeading: "Für wen sind Fringe-Extensions am besten geeignet?",
  whoCards: [
    {
      iconKey: "users",
      title: "Pony-Interessierte",
      desc: "Kundinnen, die schon immer einen Pony wollten, sich aber vor der Bindung fürchten. Ausprobieren, bevor Sie schneiden — wörtlich.",
    },
    {
      iconKey: "trendingDown",
      title: "Farbverbesserung",
      desc: "Perfekt, um Balayage, Strähnchen oder kräftige Farbe ins Gesicht einzubringen, ohne das ganze Haar zu färben.",
    },
    {
      iconKey: "sparkles",
      title: "Nachwuchs-Regeneration",
      desc: "Kundinnen, die ihren Pony nachwachsen ließen und ihn vermissen. Überbrücken Sie die unangenehme Phase ohne erneuten Schnitt.",
    },
    {
      iconKey: "clock",
      title: "Volumen-Sucher",
      desc: "Kundinnen mit feinem Haar, die einen volleren, dickeren Pony wollen, ohne mehr Haare schneiden zu müssen.",
    },
  ],
  whyHeading: "Warum jeder Salon Fringe-Extensions anbieten sollte",
  whyCards: [
    { icon: "🧲", title: "Unerschlossene Nische", desc: "Sehr wenige UK-Salons bieten Fringe-Extensions an. Der erste in Ihrer Gegend erhält einen einzigartigen Verkaufsvorteil." },
    { icon: "💰", title: "Günstig, hohe Wirkung", desc: "Fringe-Extensions kosten weniger als volle Sets, aber Kundinnen zahlen £60-120 — hervorragende Marge." },
    { icon: "⚡", title: "Sofortiger Einzelhandel", desc: "Kein Termin nötig. Der Walk-in-ClIP-Verkauf dauert unter 2 Minuten." },
    { icon: "🔄", title: "Cross-Selling-Chance", desc: "Fringe-Extensions führen natürlich zu Gesprächen über volle Extensions, Färbung und andere Dienstleistungen." },
    { icon: "⭐", title: "Social-Media-Gold", desc: "Vorher/Nachher-Pony-Verwandlungen sind extrem teilbar. Toll für Instagram- und TikTok-Inhalte." },
    { icon: "😊", title: "Maximale Wirkung", desc: "Ein toller Pony ist einer der wirkungsvollsten Frisurenwechsel. Kundinnen lieben es absolut." },
  ],
  tipsHeading: "Profi-Tipps für Salon-Stylisten",
  tips: [
    "Fringe-Extensions wirken am besten mit Vorhang-Ponys oder Seiten-Fringes — nicht mit geraden stumpfen Schnitten. Passen Sie den Stil an die Gesichtsform der Kundin an.",
    "Balayage-Fringe-Extensions sind extrem beliebt. Führen Sie eine Auswahl an natur- und balayage-pony Tönen für diesen wachsenden Trend.",
    "Farbgleich mit der gewünschten Ponyfarbe der Kundin — meist die mittleren Längen vorne.",
    "Bieten Sie bei jedem Kauf eine Pony-Styling-Lektion an. Zeigen Sie Kundinnen, wie sie ihre Fringe-Extension stylen und verblenden.",
    "Verkaufen Sie eine grobzinkige Kamm und leichtes Styling-Serum im Quervertrieb. Das verlängert die Lebensdauer der Fringe-Extension deutlich.",
  ],
  ctaBoxTitle: "Fügen Sie Fringe-Extensions noch heute Ihrem Salon hinzu",
  ctaBoxBody:
    "D.S Hair & Beauty liefert Pony- und Fringe-Extensions an professionelle UK-Salons. Großhandelspreise verfügbar. Mix-and-match-Farben unterstützt.",
  ctaBoxPrimaryLabel: "Kollektion durchsuchen",
  ctaBoxPrimaryHref: "/collections/fringes-bangs",
  ctaBoxSecondaryLabel: "WhatsApp Us",
  ctaBoxSecondaryHref:
    "https://wa.me/8613516946001?text=Hi!%20I'm%20interested%20in%20wholesale%20pricing.",
  ctaBoxSecondaryWhatsapp: true,
  faqHeading: "Häufig gestellte Fragen",
  faqs: [
    {
      q: "Was ist der häufigste Fehler beim Anbringen von Fringe-Extensions?",
      a: "Die falsche Länge zu wählen. Zu lange Fringe-Extensions verheddern sich mit dem restlichen Haar und sehen unnatürlich aus. Die ideale Länge reicht knapp über die Braue oder liegt auf Wangenknochenhöhe für Styling-Vielseitigkeit. Fragen Sie Kundinnen immer, wie sie ihren Pony tragen möchten, bevor Sie bestellen, und empfehlen Sie den Schnitt im Salon nach dem Anbringen für ein maßgeschneidertes Ergebnis.",
    },
    {
      q: "Funktionieren Fringe-Extensions bei sehr kurzem oder sehr langem Haar?",
      a: "Bei kurzem Haar (schulterlang oder kürzer) erzeugen Fringe-Extensions eine sofortige 'Lob'- oder Bob-Illusion — sehr beliebt. Bei sehr langem Haar fügen Fringe-Extensions gesichtumrahmendes Volumen ohne Masse hinzu. Entscheidend ist das Matchen von Textur und Wellenmuster: gerade Fringe-Extensions auf lockigem Haar wirken losgelöst. Empfehlen Sie immer Textur-Anpassung.",
    },
    {
      q: "Wie gleiche ich Fringe-Extensions für Ombré- oder Balayage-Kundinnen farblich an?",
      a: "Gleichen Sie mit der WURZELfarbe für eine natürliche Mischung an der Scheitellinie ab. Bei Ombré- oder Balayage-Kundinnen können Sie zwei Teile in verschiedenen Farben bestellen und zusammen einfärben lassen, oder der Kundin raten, dass der Pony eine durchgehende Farbe ist, die mit ihren dimensionierten mittleren Längen kontrastiert. Viele Stylisten verkaufen Pony-Teile nun als separates Customizing-Add-on.",
    },
    {
      q: "Was ist der beste Weg, Fringe-Extensions im Salon nachzuverkaufen?",
      a: "Fringe-Extensions sind ein ungenutztes Up-Selling. Positionieren Sie sie als risikoarme Möglichkeit, einen neuen Look zu probieren. Bieten Sie Pony-Schnitte als Kombi-Service an — Anbringen plus Styling. Für Kundinnen, die ein volles Set Extensions erwägen, sind Pony-Teile ein günstiger Einstiegspunkt, der oft zu vollen Anbringungen führt. Sie reduzieren zudem den Bedarf an häufigen Pony-Trims zwischen den Terminen.",
    },
  ],
  backLabel: "Weitere Artikel",
}

const fr: FringesBangsExtensionsGuideContent = {
  seoTitle:
    "Guide des Extensions Frange & Bangs | D.S HAIR & BEAUTY",
  seoDescription:
    "Guide complet des extensions frange et bangs pour les salons UK. Ajoutez couleur, volume et style encadrant le visage sans engagement. 100% Remy cheveux naturels.",
  heroBadge: "Guide Produit 2025",
  heroTitleLines: ["Extensions Frange & Bangs:", "La Touche Finale"],
  heroSubtitle:
    "Les extensions frange sont le produit de salon le plus sous-estimé — couleur, volume et style encadrant le visage instantanés, sans engagement à long terme. Voici comment les ajouter à votre offre de salon.",
  ctaPrimaryLabel: "Acheter maintenant",
  ctaPrimaryHref: "/collections/fringes-bangs",
  ctaSecondaryLabel: "Compte Professionnel",
  ctaSecondaryHref: "/salon-partners",
  stats: [
    { num: "1 min", label: "temps de pose" },
    { num: "30+", label: "teintes disponibles" },
    { num: "6 mo", label: "durée de vie moyenne" },
    { num: "£60-120", label: "dépense client moyenne" },
  ],
  breadcrumb: "Retour au Blog",
  metaCategory: "Guide Produit",
  metaDate: "Mis à jour mars 2025",
  metaReadTime: "6 min de lecture",
  whatHeading: "Que sont les Extensions Frange & Bangs ?",
  whatParagraphs: [
    "Les extensions frange et bangs sont de petites mèches ou des mèches individuelles conçues pour se clipser ou se fondre avec la frange existante de la cliente — ajoutant longueur, volume, couleur ou texture instantanés à la zone encadrant le visage.",
    "Elles sont parfaites pour les clientes qui adorent l'idée d'une frange mais ne veulent pas s'engager à couper leurs propres cheveux. Les extensions frange permettent aux stylistes d'offrir une couleur encadrant le visage (frange balayage, quelqu'un ?) ou du volume sans changement permanent.",
  ],
  heroImageSrc: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1200&q=80",
  heroImageAlt: "Extensions frange encadrant le visage",
  whoHeading: "Pour qui les extensions frange sont-elles les meilleures ?",
  whoCards: [
    {
      iconKey: "users",
      title: "Les curieuses de la frange",
      desc: "Clientes qui ont toujours voulu une frange mais craignent l'engagement. Essayez avant de couper — littéralement.",
    },
    {
      iconKey: "trendingDown",
      title: "Amélioration couleur",
      desc: "Parfait pour ajouter balayage, mèches ou couleur bold au visage sans colorer toute la tête.",
    },
    {
      iconKey: "sparkles",
      title: "Repousse après coupe",
      desc: "Clientes qui viennent de laisser pousser leur frange et la regrettent. Comblez la phase gênante sans recouper.",
    },
    {
      iconKey: "clock",
      title: "Chercheuses de volume",
      desc: "Clientes aux cheveux fins qui veulent une frange plus pleine sans s'engager à couper plus de cheveux.",
    },
  ],
  whyHeading: "Pourquoi chaque salon devrait proposer des extensions frange",
  whyCards: [
    { icon: "🧲", title: "Niche inexploitée", desc: "Très peu de salons UK proposent des extensions frange. Être le premier de votre zone vous donne un avantage concurrentiel unique." },
    { icon: "💰", title: "Faible coût, fort impact", desc: "Les extensions frange coûtent moins cher à produire que les sets complets, mais les clientes paient £60-120 — excellente marge." },
    { icon: "⚡", title: "Vente immédiate", desc: "Aucun rendez-vous nécessaire. La vente clip-in en entrée prend moins de 2 minutes." },
    { icon: "🔄", title: "Occasion de cross-sell", desc: "Les extensions frange mènent naturellement à des discussions sur les extensions complètes, la coloration et d'autres services." },
    { icon: "⭐", title: "Or social media", desc: "Les transformations frange avant/après sont ultra partageables. Idéal pour Instagram et TikTok." },
    { icon: "😊", title: "Impact maximal", desc: "Un beau changement de frange est l'un des changements de coiffure les plus percutants. Les clientes adorent absolument." },
  ],
  tipsHeading: "Conseils Pro pour les stylistes de salon",
  tips: [
    "Les extensions frange fonctionnent mieux avec des franges rideau ou latérales — pas des coupes droites et franches. Adaptez le style à la forme du visage de la cliente.",
    "Les extensions frange balayage sont extrêmement populaires. Stockez une gamme de teintes racine et balayage pour cette tendance croissante.",
    "Assortissez à la couleur de frange souhaitée par la cliente — généralement les longueurs moyennes devant.",
    "Proposez une leçon de styling frange à chaque achat. Montrez aux clientes comment styliser et fondre leur extension frange.",
    "Vendez en cross-sell un peigne à larges dents et un sérum de styling léger. Ils prolongent considérablement la durée de l'extension frange.",
  ],
  ctaBoxTitle: "Ajoutez des extensions frange à votre salon dès aujourd'hui",
  ctaBoxBody:
    "D.S Hair & Beauty fournit des extensions frange et bangs aux salons professionnels UK. Tarifs de gros disponibles. Couleurs mix-and-match prises en charge.",
  ctaBoxPrimaryLabel: "Parcourir la collection",
  ctaBoxPrimaryHref: "/collections/fringes-bangs",
  ctaBoxSecondaryLabel: "WhatsApp Us",
  ctaBoxSecondaryHref:
    "https://wa.me/8613516946001?text=Hi!%20I'm%20interested%20in%20wholesale%20pricing.",
  ctaBoxSecondaryWhatsapp: true,
  faqHeading: "Questions Fréquemment Posées",
  faqs: [
    {
      q: "Quelle est l'erreur la plus courante lors de la pose d'extensions frange ?",
      a: "Choisir la mauvaise longueur. Les extensions frange trop longues s'emmêlent avec le reste des cheveux et paraissent peu naturelles. La longueur idéale dépasse à peine le sourcil ou se situe au niveau des pommettes pour plus de polyvalence. Demandez toujours aux clientes comment elles portent leur frange avant de commander, et recommandez de les couper au salon après la pose pour une finition sur mesure.",
    },
    {
      q: "Les extensions frange fonctionnent-elles sur des cheveux très courts ou très longs ?",
      a: "Pour les cheveux courts (épaule ou moins), les extensions frange créent une illusion de 'lob' ou de carré instantanée — très appréciée. Pour les cheveux très longs, elles ajoutent du volume encadrant le visage sans masse. La clé est d'appareiller la texture et le motif ondulé : des extensions frange droites sur cheveux bouclés paraîtront déconnectées. Recommandez toujours l'appariement de texture.",
    },
    {
      q: "Comment j'assortis les extensions frange pour les clientes ombré ou balayage ?",
      a: "Assortez à la couleur des RACINES pour un fondu naturel au niveau de la raie. Pour les clientes ombré ou balayage, vous pouvez commander deux pièces de couleurs différentes et les faire teinter ensemble, ou conseiller à la cliente que la frange sera une couleur unie contrastant avec ses longueurs médianes dimensionnelles. Beaucoup de stylistes vendent désormais les pièces frange comme option de personnalisation séparée.",
    },
    {
      q: "Quelle est la meilleure façon de vendre des extensions frange en salon ?",
      a: "Les extensions frange sont un up-sell sous-exploité. Positionnez-les comme un moyen peu engageant d'essayer un nouveau look. Proposez des coupes frange en service combo — pose plus styling. Pour les clientes envisageant un set complet, les pièces frange sont un point d'entrée abordable qui mène souvent à des poses complètes. Elles réduisent aussi le besoin de tailles frange fréquentes entre les rendez-vous.",
    },
  ],
  backLabel: "Plus d'articles",
}

const ar: FringesBangsExtensionsGuideContent = {
  seoTitle:
    "دليل إكسسوارات الغرة والقصات الأمامية للشعر | D.S HAIR & BEAUTY",
  seoDescription:
    "دليل شامل لإكسسوارات الغرة والقصات الأمامية للصالونات في UK. أضف لوناً وإطاراً وحجماً للوجه بلا التزام. 100% Remy شعر بشري.",
  heroBadge: "دليل المنتج 2025",
  heroTitleLines: ["إكسسوارات الغرة والقصات:", "اللمسة الأخيرة"],
  heroSubtitle:
    "تعتبر إكسسوارات الغرة أكثر منتجات الصالون تقليلاً لقيمتها — لون وإطار وحجم للوجه فوري بلا التزام طويل الأمد. إليك كيفية إضافتها إلى عروض صالونك.",
  ctaPrimaryLabel: "تسوق الآن",
  ctaPrimaryHref: "/collections/fringes-bangs",
  ctaSecondaryLabel: "حساب الجملة",
  ctaSecondaryHref: "/salon-partners",
  stats: [
    { num: "1 min", label: "وقت التطبيق" },
    { num: "30+", label: "درجات متاحة" },
    { num: "6 mo", label: "متوسط العمر الافتراضي" },
    { num: "£60-120", label: "متوسط إنفاق العميلة" },
  ],
  breadcrumb: "العودة إلى المدونة",
  metaCategory: "دليل المنتج",
  metaDate: "تم التحديث مارس 2025",
  metaReadTime: "6 دقائق قراءة",
  whatHeading: "ما هي إكسسوارات الغرة والقصات الأمامية؟",
  whatParagraphs: [
    "إكسسوارات الغرة والقصات الأمامية هي خصلات صغيرة أو شعر مفرد مصمّم ليُثبّت بطقطقة أو يندمج مع غرة العميلة الحالية — مضيفاً طولاً وحجماً ولوناً أو ملمساً فورياً لمنطقة إطار الوجه.",
    "هي مثالية للعميلات اللواتي يعشن فكرة الغرة لكن لا يرغبن بالتزام قص شعرهن. تتيح إكسسوارات الغرة لخبيرات الشعر تقديم لون ي framing الوجه (غرة بالاياج، أليس كذلك؟) أو حجم بلا تغيير دائم.",
  ],
  heroImageSrc: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1200&q=80",
  heroImageAlt: "إكسسوارات الغرة لتسريحة إطار الوجه",
  whoHeading: "لمن تعتبر إكسسوارات الغرة الأنسب؟",
  whoCards: [
    {
      iconKey: "users",
      title: "المهتمات بالغرة",
      desc: "عميلات أردن الغرة دائماً لكن يخشين الالتزام. جرّبن قبل القص — حرفياً.",
    },
    {
      iconKey: "trendingDown",
      title: "تعزيز اللون",
      desc: "مثالية لإضافة بالاياج أو لمسات أو لون جريء لإطار الوجه بلا صبغ الرأس بالكامل.",
    },
    {
      iconKey: "sparkles",
      title: "تعويض ما بعد القص",
      desc: "عميلات تركن غرتهن تطول ويفتقدنها. املئي مرحلة النمو المحرجة بلا قص مجدد.",
    },
    {
      iconKey: "clock",
      title: "الباحثات عن الحجم",
      desc: "عميلات بشعر خفيف يردن غرة أكثر امتلاءً بلا التزام قص المزيد من الشعر.",
    },
  ],
  whyHeading: "لماذا يجب كل صالون أن يوفّر إكسسوارات الغرة",
  whyCards: [
    { icon: "🧲", title: "مجال غير مستغل", desc: "قلة من صالونات UK توفّر إكسسوارات الغرة. كونك الأولى في منطقتك يمنحك نقطة بيع فريدة." },
    { icon: "💰", title: "تكلفة منخفضة، أثر كبير", desc: "تكلف إكسسوارات الغرة أقل من المجموعات الكاملة، لكن العميلات يدفعن £60-120 — هامش ممتاز." },
    { icon: "⚡", title: "بيع فوري", desc: "بلا موعد. بيع إكسسوار غرة بالدخول يستغرق أقل من دقيقتين." },
    { icon: "🔄", title: "فرصة بيع متقاطع", desc: "تقود إكسسوارات الغرة طبيعياً لنقاشات حول الإكسسوارات الكاملة والتلوين وخدمات أخرى." },
    { icon: "⭐", title: "ذهب التواصل الاجتماعي", desc: "تحولات الغرة قبل/بعد قابلة للمشاركة جداً. رائعة لمحتوى إنستغرام وتيك توك." },
    { icon: "😊", title: "أقصى أثر", desc: "تغيير الغرة الجميل من أكثر تغييرات التسريحة تأثيراً. العميلات يعشقنه حقاً." },
  ],
  tipsHeading: "نصائح احترافية لخبيرات الصالون",
  tips: [
    "تعمل إكسسوارات الغرة أفضل مع الغرات الستارة أو الجانبية — لا القصات المستقيمة الحادة. طابقي الستايل مع شكل وجه العميلة.",
    "إكسسوارات غرة البالاياج شديدة الرواج. خزّني مجموعة من درجات الجذور وغرة البالاياج لهذا الاتجاه النامي.",
    "طابقي مع لون الغرة المطلوب للعميلة — عادة الطول الأوسط في الأمام.",
    "قدّمي درس تصفيف الغرة مع كل عملية شراء. أري العميلات كيف يُصففن ويدمجن إكسسوار غرتهن.",
    "بيعي متقاطع مشطاً واسع الأسنان وسيروم تصفيف خفيف. ذلك يطيل عمر إكسسوار الغرة بشكل كبير.",
  ],
  ctaBoxTitle: "أضيفي إكسسوارات الغرة إلى صالونك اليوم",
  ctaBoxBody:
    "تزوّد D.S Hair & Beauty صالونات UK الاحترافية بإكسسوارات الغرة والقصات الأمامية. أسعار الجملة متوفرة. تطعيم الألوان مدعوم.",
  ctaBoxPrimaryLabel: "تصفح المجموعة",
  ctaBoxPrimaryHref: "/collections/fringes-bangs",
  ctaBoxSecondaryLabel: "WhatsApp Us",
  ctaBoxSecondaryHref:
    "https://wa.me/8613516946001?text=Hi!%20I'm%20interested%20in%20wholesale%20pricing.",
  ctaBoxSecondaryWhatsapp: true,
  faqHeading: "الأسئلة الشائعة",
  faqs: [
    {
      q: "ما هو الخطأ الأكثر شيوعاً عند تركيب إكسسوارات الغرة؟",
      a: "اختيار الطول الخاطئ. إكسسوارات الغرة الطويلة جداً تتشابك مع بقية الشعر وتبدو غير طبيعية. الطول المثالي يتجاوز الحاجب قليلاً أو يجلس عند مستوى عظمة الوجنة لمرونة التصفيف. اسألي العميلات دائماً كيف يفضلن ارتداء غرتهن قبل الطلب، واقترحي قصها في الصالون بعد التركيب ل finishes مخصصة.",
    },
    {
      q: "هل تعمل إكسسوارات الغرة على شعر قصير جداً أو طويل جداً؟",
      a: "للشعر القصير (كتف أو أقل)، تخلق إكسسوارات الغرة وهماً فورياً من نوع 'لوب' أو 'بوب' — رائج جداً. للشعر الطويل جداً، تضيف إكسسوارات الغرة حجماً ي framing الوجه بلا كتلة. المفتاح مواءمة الملمس ونمط التموج: إكسسوارات غرة مستقيمة على شعر مجعد تبدو منفصلة. أوصي دائماً بمواءمة الملمس.",
    },
    {
      q: "كيف أطابق لون إكسسوارات الغرة لعميلات الأومبري أو البالاياج؟",
      a: "طابقي مع لون الجذور لدمج طبيعي عند خط الفرق. لعميلات الأومبري أو البالاياج، يمكنك طلب قطعتين بلونين مختلفين وصبغهما معاً، أو إرشاد العميلة أن الغرة ستكون لوناً موحداً يتناقض مع طولها الأوسط البعدي. كثير من الخبيرات يبعن الآن قطع الغرة كإضافة تخصيص منفصلة.",
    },
    {
      q: "ما أفضل طريقة لبيع إكسسوارات الغرة داخل الصالون؟",
      a: "إكسسوارات الغرة بيع متقاطع غير مستغل. ضعيها كوسيلة بلا التزام لتجربة لوك جديد. قدّمي قص الغرة كخدمة مدمجة — تركيب مع تصفيف. للعميلات اللواتي يفكرن بمجموعة كاملة، قطع الغرة نقطة دخول اقتصادية تؤدي غالباً إلى تركيبات كاملة. كما تقلل الحاجة لتقليم الغرة المتكرر بين المواعيد.",
    },
  ],
  backLabel: "مقالات أكثر",
}

const sv: FringesBangsExtensionsGuideContent = {
  seoTitle:
    "Guide för Lugg- & Frans-Extensions | D.S HAIR & BEAUTY",
  seoDescription:
    "Komplett guide för lugg- och frans-extensions för UK-salonger. Ansiktsramande färg, volym och stil utan bindning. 100% Remy människohår.",
  heroBadge: "Produktguide 2025",
  heroTitleLines: ["Lugg- & Frans-Extensions:", "Den perfekta finishen"],
  heroSubtitle:
    "Lugg-extensions är salongens mest underskattade produkt — ansiktsramande färg, volym och stil direkt utan långsiktigt åtagande. Så här lägger du till dem i ditt salongsortiment.",
  ctaPrimaryLabel: "Handla nu",
  ctaPrimaryHref: "/collections/fringes-bangs",
  ctaSecondaryLabel: "Återförsäljarkonto",
  ctaSecondaryHref: "/salon-partners",
  stats: [
    { num: "1 min", label: "applikationstid" },
    { num: "30+", label: "nyanser tillgängliga" },
    { num: "6 mo", label: "genomsnittlig livslängd" },
    { num: "£60-120", label: "genomsn. kundutgift" },
  ],
  breadcrumb: "Tillbaka till Bloggen",
  metaCategory: "Produktguide",
  metaDate: "Uppdaterad mars 2025",
  metaReadTime: "6 min läsning",
  whatHeading: "Vad är Lugg- & Frans-Extensions?",
  whatParagraphs: [
    "Lugg- och frans-extensions är små hårband eller enstaka hårstrån utformade för att klippas fast eller smälta in med kundens befintliga lugg — vilket ger omedelbar längd, volym, färg eller textur i ansiktsramande området.",
    "De är perfekta för kunder som älskar idén om lugg men inte vill binda sig vid att klippa sitt eget hår. Lugg-extensions låter stylister erbjuda ansiktsramande färg (balayage-lugg, någon?) eller volym utan en permanent förändring.",
  ],
  heroImageSrc: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1200&q=80",
  heroImageAlt: "Lugg-extensions som ramar in ansiktet",
  whoHeading: "För vem passar lugg-extensions bäst?",
  whoCards: [
    {
      iconKey: "users",
      title: "Lugg-nyfikna",
      desc: "Kunder som alltid velat ha lugg men är rädda för åtagandet. Prova innan du klipper — bokstavligen.",
    },
    {
      iconKey: "trendingDown",
      title: "Förbättring av färg",
      desc: "Perfekt för att lägga till balayage, slingor eller stark färg i ansiktet utan att färga hela huvudet.",
    },
    {
      iconKey: "sparkles",
      title: "Återhämtning efter klipp",
      desc: "Kunder som nyss lät luggen växa ut och saknar den. Fyll i den awkwarda fasen utan att klippa igen.",
    },
    {
      iconKey: "clock",
      title: "Volymsökare",
      desc: "Kunder med fint hår som vill ha en fylligare, tjockare lugg utan att klippa mer hår.",
    },
  ],
  whyHeading: "Varför varje salong bör erbjuda lugg-extensions",
  whyCards: [
    { icon: "🧲", title: "Outnyttjad nisch", desc: "Mycket få UK-salonger erbjuder lugg-extensions. Att vara först i ditt område ger dig en unik säljfördel." },
    { icon: "💰", title: "Låg kostnad, hög effekt", desc: "Lugg-extensions kostar mindre att tillverka än hela set, men kunder betalar £60-120 — utmärkt marginal." },
    { icon: "⚡", title: "Direkt detaljhandel", desc: "Inget tidsbokning behövs. Clip-in-luggsförsäljning i butik tar under 2 minuter." },
    { icon: "🔄", title: "Cross-sell-möjlighet", desc: "Lugg-extensions leder naturligt till samtal om hela extensions, färgning och andra tjänster." },
    { icon: "⭐", title: "Sociala medier-guld", desc: "Före/efter-lugg-transformationer är otroligt delbara. Bra för Instagram- och TikTok-innehåll." },
    { icon: "😊", title: "Maximal effekt", desc: "Ett bra lugg-byte är ett av de mest effektfulla frisyrbyte. Kunderna älskar det absolut." },
  ],
  tipsHeading: "Proffstips för salongstylister",
  tips: [
    "Lugg-extensions fungerar bäst med gardinlugg eller sidolugg — inte raka styva klipp. Matcha stilen med kundens ansiktsform.",
    "Balayage-lugg-extensions är extremt populära. Håll ett sortiment av rot- och balayage-luggnyanser för denna växande trend.",
    "Färgmatcha med kundens önskade lugnfärg — vanligen mellanlängderna framtill.",
    "Erbjud en lugnstyling-lektion vid varje köp. Visa kunderna hur de stylar och smälter in sin lugg-extension.",
    "Sälj på tvärs en grovtandad kam och lätt stylingserum. De förlänger livslängden på lugg-extensionen avsevärt.",
  ],
  ctaBoxTitle: "Lägg till lugg-extensions i din salong idag",
  ctaBoxBody:
    "D.S Hair & Beauty levererar lugg- och frans-extensions till professionella UK-salonger. Partipriser tillgängliga. Mix-and-match-färger stöds.",
  ctaBoxPrimaryLabel: "Bläddra i kollektionen",
  ctaBoxPrimaryHref: "/collections/fringes-bangs",
  ctaBoxSecondaryLabel: "WhatsApp Us",
  ctaBoxSecondaryHref:
    "https://wa.me/8613516946001?text=Hi!%20I'm%20interested%20in%20wholesale%20pricing.",
  ctaBoxSecondaryWhatsapp: true,
  faqHeading: "Vanliga frågor",
  faqs: [
    {
      q: "Vad är det vanligaste misstaget när man sätter in lugg-extensions?",
      a: "Att välja fel längd. Lugg-extensions som är för långa trasslar in sig med resten av håret och ser onaturliga ut. Den idealiska längden sträcker sig precis förbi ögonbrynet eller sitter vid kindbenen för stylingmångsidighet. Fråga alltid kunderna hur de föredrar att bära sin lugg innan du beställer, och rekommendera att klippa dem i salongen efter insättning för en skräddarsydd finish.",
    },
    {
      q: "Fungerar lugg-extensions på mycket kort eller mycket långt hår?",
      a: "För kort hår (axellangt eller kortare) skapar lugg-extensions en omedelbar 'lob'- eller bob-illusion — mycket populärt. För mycket långt hår tillför lugg-extensions ansiktsramande volym utan massa. Nyckeln är att matcha textur och vågmönster: raka lugg-extensions på lockigt hår ser frånkopplade ut. Rekommendera alltid texturmatchning.",
    },
    {
      q: "Hur färgmatchar jag lugg-extensions för ombré- eller balayage-kunder?",
      a: "Matcha med ROT-färgen för en naturlig blend vid benan. För kunder med ombré eller balayage kan du beställa två bitar i olika färger och låta färga in dem tillsammans, eller råda kunden att luggen blir en enfärgad kontrast mot hennes dimensionella mellanlängder. Många stylister säljer nu lugg-bitar som ett separat anpassnings-tillägg.",
    },
    {
      q: "Vad är det bästa sättet att sälja in lugg-extensions i salongen?",
      a: "Lugg-extensions är ett outnyttjat merförsäljning. Positionera dem som ett lågengagerat sätt att prova en ny look. Erbjud lugg-klipp som en kombo-tjänst — insättning plus styling. För kunder som funderar på ett helt set extensions är lugg-bitar en prisvärd ingång som ofta leder till hela insättningar. De minskar också behovet av frekvent lugg-trimning mellan besök.",
    },
  ],
  backLabel: "Fler artiklar",
}

const pl: FringesBangsExtensionsGuideContent = {
  seoTitle:
    "Przewodnik po Przedłużeniach Grzywka & Bangs | D.S HAIR & BEAUTY",
  seoDescription:
    "Kompletny przewodnik po przedłużeniach grzywki i bangs dla salonów w UK. Dodaj ramujący twarz kolor, objętość i styl bez zobowiązań. 100% Remy włosy naturalne.",
  heroBadge: "Przewodnik Produktu 2025",
  heroTitleLines: ["Przedłużenia Grzywka & Bangs:", "Ostatni Szlif"],
  heroSubtitle:
    "Przedłużenia grzywki to najbardziej niedoceniany produkt salonu — natychmiastowy ramujący twarz kolor, objętość i styl bez długoterminowego zobowiązania. Oto jak dodać je do oferty swojego salonu.",
  ctaPrimaryLabel: "Kup teraz",
  ctaPrimaryHref: "/collections/fringes-bangs",
  ctaSecondaryLabel: "Konto Hurtowe",
  ctaSecondaryHref: "/salon-partners",
  stats: [
    { num: "1 min", label: "czas aplikacji" },
    { num: "30+", label: "odcieni dostępnych" },
    { num: "6 mo", label: "średnia żywotność" },
    { num: "£60-120", label: "śr. wydatki klientki" },
  ],
  breadcrumb: "Powrót do Bloga",
  metaCategory: "Przewodnik Produktu",
  metaDate: "Zaktualizowano marzec 2025",
  metaReadTime: "6 min czytania",
  whatHeading: "Czym są Przedłużenia Grzywka & Bangs?",
  whatParagraphs: [
    "Przedłużenia grzywki i bangs to małe pasma lub pojedyncze kosmyki włosów zaprojektowane, by przypiąć je lub zlać z istniejącą grzywką klientki — dodając natychmiastową długość, objętość, kolor lub teksturę w obramowaniu twarzy.",
    "Są idealne dla klientek, które kochają pomysł grzywki, ale nie chcą ciąć własnych włosów. Przedłużenia grzywki pozwalają stylistkom zaoferować ramujący twarz kolor (grzywka balayage, ktoś?) lub objętość bez trwałej zmiany.",
  ],
  heroImageSrc: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1200&q=80",
  heroImageAlt: "Przedłużenia grzywki ramujące twarz",
  whoHeading: "Dla kogo przedłużenia grzywki są najlepsze?",
  whoCards: [
    {
      iconKey: "users",
      title: "Ciekawe grzywki",
      desc: "Klientki, które zawsze chciały grzywkę, ale boją się zobowiązania. Wypróbuj, zanim przytniesz — dosłownie.",
    },
    {
      iconKey: "trendingDown",
      title: "Wzmocnienie koloru",
      desc: "Idealne do dodania balayage, refleksów lub wyrazistego koloru w obramowaniu twarzy bez farbowania całej głowy.",
    },
    {
      iconKey: "sparkles",
      title: "Regeneracja po strzyżeniu",
      desc: "Klientki, które właśnie zapuściły grzywkę i za nią tęsknią. Wypełnij niezręczną fazę wzrostu bez ponownego cięcia.",
    },
    {
      iconKey: "clock",
      title: "Szukające objętości",
      desc: "Klientki z cienkimi włosami, które chcą pełniejszej, grubszej grzywki bez obcinania większej ilości włosów.",
    },
  ],
  whyHeading: "Dlaczego każdy salon powinien oferować przedłużenia grzywki",
  whyCards: [
    { icon: "🧲", title: "Nisza niezagospodarowana", desc: "Bardzo niewiele salonów w UK oferuje przedłużenia grzywki. Bycie pierwszym w okolicy daje unikalną przewagę sprzedażową." },
    { icon: "💰", title: "Niski koszt, duży efekt", desc: "Przedłużenia grzywki kosztują mniej niż pełne zestawy, a klientki płacą £60-120 — doskonała marża." },
    { icon: "⚡", title: "Natychmiastowa sprzedaż", desc: "Bez umowy. Sprzedaż clip-in przy wejściu trwa poniżej 2 minut." },
    { icon: "🔄", title: "Okazja do cross-sell", desc: "Przedłużenia grzywki naturalnie prowadzą do rozmów o pełnych przedłużeniach, koloryzacji i innych usługach." },
    { icon: "⭐", title: "Złoto social mediów", desc: "Transformacje grzywki przed/po są niezwykle share'owalne. Świetne na Instagram i TikTok." },
    { icon: "😊", title: "Maksymalny efekt", desc: "Dobra zmiana grzywki to jeden z najbardziej spektakularnych zabiegów. Klientki uwielbiają to." },
  ],
  tipsHeading: "Porady Pro dla stylistek salonu",
  tips: [
    "Przedłużenia grzywki najlepiej działają z grzywką typu curtain lub boczną — nie z prostymi, tępymi cięciami. Dopasuj styl do kształtu twarzy klientki.",
    "Przedłużenia grzywki balayage są ekstremalnie popularne. Trzymaj gamę odcieni z korzeniem i balayage grzywki dla tego rosnącego trendu.",
    "Dobierz kolor do pożądanego koloru grzywki klientki — zwykle środkowych długości z przodu.",
    "Oferuj lekcję stylizacji grzywki przy każdym zakupie. Pokaż klientkom, jak stylizować i zlewać ich przedłużenie grzywki.",
    "Sprzedawaj krzyżowo grzebień o szerokich zębach i lekki serum do stylizacji. Wydłużają one znacznie żywotność przedłużenia grzywki.",
  ],
  ctaBoxTitle: "Dodaj przedłużenia grzywki do swojego salonu już dziś",
  ctaBoxBody:
    "D.S Hair & Beauty dostarcza przedłużenia grzywki i bangs do profesjonalnych salonów w UK. Ceny hurtowe dostępne. Obsługiwane są kolory mix-and-match.",
  ctaBoxPrimaryLabel: "Przeglądaj kolekcję",
  ctaBoxPrimaryHref: "/collections/fringes-bangs",
  ctaBoxSecondaryLabel: "WhatsApp Us",
  ctaBoxSecondaryHref:
    "https://wa.me/8613516946001?text=Hi!%20I'm%20interested%20in%20wholesale%20pricing.",
  ctaBoxSecondaryWhatsapp: true,
  faqHeading: "Najczęściej Zadawane Pytania",
  faqs: [
    {
      q: "Jaki jest najczęstszy błąd przy montażu przedłużeń grzywki?",
      a: "Wybranie złej długości. Przedłużenia grzywki, które są zbyt długie, plączą się z resztą włosów i wyglądają nienaturalnie. Idealna długość sięga tuż za brwi lub znajduje się na wysokości kości policzkowych dla wszechstronności stylizacji. Pytaj klientki zawsze, jak wolą nosić grzywkę przed zamówieniem i zalecaj przycięcie w salonie po montażu dla dopasowanego wykończenia.",
    },
    {
      q: "Czy przedłużenia grzywki działają na bardzo krótkich lub bardzo długich włosach?",
      a: "Na krótkich włosach (do ramion lub krótszych) przedłużenia grzywki tworzą natychmiastową iluzję 'lob' lub 'boba' — bardzo popularne. Na bardzo długich włosach przedłużenia grzywki dodają ramującą twarz objętość bez masy. Kluczem jest dopasowanie tekstury i wzoru fal: proste przedłużenia grzywki na kręconych włosach wyglądają odłączenie. Zawsze zalecaj dopasowanie tekstury.",
    },
    {
      q: "Jak dobrać kolor przedłużeń grzywki dla klientek z ombre lub balayage?",
      a: "Dopasuj do koloru KORZENI dla naturalnego zlewu przy przedziale. Dla klientek z ombre lub balayage możesz zamówić dwie sztuki w różnych kolorach i zlecić ich wspólne koloryzowanie, albo doradzić klientce, że grzywka będzie jednolitym kolorem kontrastującym z jej wymiarowymi środkowymi długościami. Wiele stylistek sprzedaje teraz sztuki grzywki jako osobny dodatek personalizacyjny.",
    },
    {
      q: "Jaki jest najlepszy sposób na up-selling przedłużeń grzywki w salonie?",
      a: "Przedłużenia grzywki to niedowykorzystany up-selling. Pozycjonuj je jako sposób o niskim zobowiązaniu na wypróbowanie nowego looku. Oferuj strzyżenie grzywki jako usługę combo — montaż plus stylizacja. Dla klientek rozważających pełny zestaw przedłużeń, sztuki grzywki są przystępnym punktem wejścia, który często prowadzi do pełnych montaży. Zmniejszają też potrzebę częstego przycinania grzywki między wizytami.",
    },
  ],
  backLabel: "Więcej artykułów",
}

export const fringesBangsExtensionsGuideContent: Record<Locale, FringesBangsExtensionsGuideContent> = {
  en,
  de,
  fr,
  ar,
  sv,
  pl,
}
