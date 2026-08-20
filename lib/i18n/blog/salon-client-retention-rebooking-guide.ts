import type { Locale } from "../config"

// Content module for the "Salon Client Retention & Rebooking" blog post.
// All visible English copy is externalised here so the page can be rendered
// in any of the 6 locales with an identical layout. The English page
// (locale="en") renders exactly the same JSX it always did.

export type Span =
  | { t: string; b?: boolean; i?: boolean }
  | { link: string; href: string }

export interface SalonClientRetentionRebookingGuideContent {
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
  s1Heading: string
  heroImageSrc: string
  heroImageAlt: string
  s1P1: Span[]
  s1P2: Span[]
  s2Heading: string
  s2P: Span[]
  s2Quote: string
  s2P2: Span[]
  s3Heading: string
  recallFlows: { q: string; a: string }[]
  s4Heading: string
  cycleCards: { label: string; icon: "calendarCheck" | "users" | "checkCircle"; items: string[] }[]
  s4P: Span[]
  s5Heading: string
  kpiHeaders: string[]
  kpiRows: { b: string; p: string; l: string }[]
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

const en: SalonClientRetentionRebookingGuideContent = {
  seoTitle:
    "Salon Client Retention & Rebooking: Fill Your Columns | D.S Hair Beauty",
  seoDescription:
    "A practical UK guide to salon client retention and rebooking: the cost of lost clients, the front-desk rebooking script, recall flows, and why the 6–8 week extension cycle is your retention engine.",
  jsonLdHeadline: "Salon Client Retention & Rebooking: Fill Your Columns",
  jsonLdDescription:
    "A practical UK guide to salon client retention and rebooking: the cost of lost clients, the front-desk rebooking script, recall flows, and why the 6–8 week extension cycle is your retention engine.",
  heroBadge: "Salon Business",
  heroTitle: "Salon Client Retention & Rebooking",
  heroSubtitle:
    "Empty columns are rarely a marketing problem — they are a retention problem. Here is how UK salons we partner with keep clients coming back, and why extensions make it easier.",
  ctaPrimaryLabel: "Open a Trade Account",
  ctaPrimaryHref: "/salon-partners",
  ctaSecondaryLabel: "Grow a Profitable Salon →",
  ctaSecondaryHref: "/blog/grow-profitable-hair-salon-uk",
  navHome: "Home",
  navBlog: "Blog",
  navCurrent: "Retention & Rebooking",
  intro: [
    [
      { t: "Across " },
      { t: "19 years", b: true },
      {
        t: " supplying UK salons, the owners who sleep easiest are not the ones with the biggest ad budget — they are the ones whose clients come back without being chased. Retention is cheaper than acquisition, and it compounds. A column that stays full needs far less marketing spend than one you refill every month.",
      },
    ],
    [
      {
        t: "This guide covers the rebooking habit, recall flows, and the single biggest retention advantage a modern salon has: the extension maintenance cycle.",
      },
    ],
  ],
  s1Heading: "1. The Real Cost of a Lost Client",
  heroImageSrc: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=1200&q=80",
  heroImageAlt: "Salon client consultation",
  s1P1: [
    {
      t: "Acquiring a new client can cost 5–7× more than keeping an existing one. A client who visits every 6–8 weeks for a year is worth far more than the single visit you spent marketing to win. Every silent departure is recurring revenue that walked out the door.",
    },
  ],
  s1P2: [
    {
      t: "The fix is not more ads. It is a system — and the system starts at the basin.",
    },
  ],
  s2Heading: "2. Rebook Before They Leave the Chair",
  s2P: [
    {
      t: "The highest-converting rebooking moment is while the result is fresh and the client is happy. Train the front desk (or stylist) to book the next visit before the client reaches the door:",
    },
  ],
  s2Quote:
    "\"Your colour will be ready for a refresh in about 6 weeks — shall I put the same slot in the diary now so it's protected?\"",
  s2P2: [
    { t: "Make rebooking the " },
    { t: "default", i: true },
    {
      t: ", not the exception. Salons that do this consistently run fuller columns with less marketing. Pair it with the pricing ladder in our ",
    },
    { link: "extension pricing guide", href: "/blog/salon-extension-pricing-guide" },
    { t: " so every rebooking also protects margin." },
  ],
  s3Heading: "3. Recall Flows That Bring Clients Back",
  recallFlows: [
    { q: "SMS / email reminder", a: "A friendly 'your move-up is due' nudge at 5 weeks catches clients before they forget or drift." },
    { q: "WhatsApp for VIPs", a: "A personal message to your top clients feels premium and gets a fast reply — no spam, just relationship." },
    { q: "Win-back at 10 weeks", a: "If a regular hasn't returned, a single 'we missed you' offer recovers far more than a new-client ad." },
  ],
  s4Heading: "4. Why Extensions Are a Retention Engine",
  cycleCards: [
    { label: "Built-in 6–8 week cycle", icon: "calendarCheck", items: ["Move-ups are scheduled", "Clients return on a rhythm", "Predictable columns"] },
    { label: "Recurring re-order", icon: "users", items: ["Take-home top-ups", "Aftercare repeats", "Margin stays with you"] },
    { label: "Higher switching cost", icon: "checkCircle", items: ["Clients invest in YOUR method", "Harder to price-shop", "A relationship, not a transaction"] },
  ],
  s4P: [
    { t: "A client in extensions is effectively on a subscription you didn't have to build software for. The " },
    { link: "method comparison guide", href: "/blog/hair-extension-methods-comparison" },
    { t: " helps you pick the cycle that suits each client — tape-in and nano return every 6–8 weeks; K-tip and weft every 8–12." },
  ],
  s5Heading: "5. The Three Retention KPIs to Track",
  kpiHeaders: ["KPI", "Target", "Why it matters"],
  kpiRows: [
    { b: "Rebooking rate", p: "60%+ before leaving", l: "Fuller future columns" },
    { b: "Return rate (6–8 wk)", p: "50%+ of extension clients", l: "Recurring revenue health" },
    { b: "Win-back rate", p: "Track monthly", l: "Stops silent churn" },
  ],
  ctaBoxTitle: "Keep Clients Coming Back",
  ctaBoxBody:
    "Add extension services on a 6–8 week cycle and watch your columns fill themselves. Open a free UK trade account for professional hair and training support.",
  ctaBoxPrimaryLabel: "Open a Trade Account →",
  ctaBoxPrimaryHref: "/salon-partners",
  ctaBoxSecondaryLabel: "Start an Extension Service",
  ctaBoxSecondaryHref: "/blog/how-to-start-selling-hair-extensions-salon",
  faqHeading: "Frequently Asked Questions",
  faqs: [
    {
      q: "Why is client retention important for a salon?",
      a: "Acquiring a new client can cost 5–7× more than keeping an existing one, and a client who returns every 6–8 weeks is worth far more over a year than a single visit won through marketing. Retention compounds: full columns need less ad spend, and recurring clients stabilise cash flow.",
    },
    {
      q: "When should a salon rebook a client?",
      a: "Before they leave the chair, while the result is fresh and they are happy. A simple 'shall I put the same slot in the diary so it's protected?' books the next visit at the highest-converting moment. Make rebooking the default, not the exception, and target a 60%+ rebooking rate.",
    },
    {
      q: "How do extensions improve client retention?",
      a: "Extensions create a built-in 6–8 week maintenance cycle (move-ups and re-orders), so clients return on a rhythm without being chased. Because they invest in your specific method and aftercare, switching cost is higher — they are in a relationship, not a one-off transaction. Tape-in and nano return every 6–8 weeks; K-tip and weft every 8–12.",
    },
    {
      q: "What is a good salon rebooking rate?",
      a: "Aim to rebook 60%+ of clients before they leave, and retain 50%+ of extension clients on their 6–8 week cycle. Track these monthly alongside a win-back flow for anyone who lapses past 10 weeks — a single 'we missed you' nudge recovers far more than a new-client ad.",
    },
    {
      q: "How do I win back lapsed salon clients?",
      a: "Run a win-back flow at around 10 weeks: a friendly SMS, email, or personal WhatsApp to your top clients offering to rebook. Keep it relationship-led, not discount-led. Most lapsed clients simply forgot or drifted — a timely, low-pressure nudge brings a high proportion back.",
    },
  ],
  link1Kicker: "Cluster Guide",
  link1Title: "How to Run a Profitable Salon (UK)",
  link1Href: "/blog/grow-profitable-hair-salon-uk",
  link2Kicker: "Related Article",
  link2Title: "Start an In-Salon Extension Service",
  link2Href: "/blog/how-to-start-selling-hair-extensions-salon",
  backLabel: "Back to Blog",
}

const de: SalonClientRetentionRebookingGuideContent = {
  seoTitle:
    "Kundenbindung & Wiederterminierung im Salon: Füllen Sie Ihre Spalten | D.S Hair Beauty",
  seoDescription:
    "Ein praktischer UK-Leitfaden zur Kundenbindung und Wiederterminierung im Salon: die Kosten verlorener Kunden, das Rezept der Rezeption für Wiedertermine, Recall-Abläufe und warum der 6–8 Wochen Zyklus Ihr Motor für Kundenbindung ist.",
  jsonLdHeadline: "Kundenbindung & Wiederterminierung im Salon: Füllen Sie Ihre Spalten",
  jsonLdDescription:
    "Ein praktischer UK-Leitfaden zur Kundenbindung und Wiederterminierung im Salon: die Kosten verlorener Kunden, das Rezept der Rezeption für Wiedertermine, Recall-Abläufe und warum der 6–8 Wochen Zyklus Ihr Motor für Kundenbindung ist.",
  heroBadge: "Salon Business",
  heroTitle: "Kundenbindung & Wiederterminierung im Salon",
  heroSubtitle:
    "Leere Spalten sind selten ein Marketingproblem — sie sind ein Bindungsproblem. Hier erfahren Sie, wie UK-Salons, mit denen wir zusammenarbeiten, Kunden zurückgewinnen und warum Extensions es einfacher machen.",
  ctaPrimaryLabel: "Handelskonto eröffnen",
  ctaPrimaryHref: "/salon-partners",
  ctaSecondaryLabel: "Profitablen Salon ausbauen →",
  ctaSecondaryHref: "/blog/grow-profitable-hair-salon-uk",
  navHome: "Start",
  navBlog: "Blog",
  navCurrent: "Bindung & Wiederterminierung",
  intro: [
    [
      { t: "Über " },
      { t: "19 Jahre", b: true },
      {
        t: " beliefern wir UK-Salons. Die Inhaber, die am ruhigsten schlafen, sind nicht die mit dem größten Werbebudget — es sind die, deren Kunden von selbst wiederkommen. Bindung ist günstiger als Neukundengewinnung und zahlt sich fort. Eine volle Spalte braucht viel weniger Werbeaufwand als eine, die Sie jeden Monat neu füllen.",
      },
    ],
    [
      {
        t: "Dieser Leitfaden behandelt die Wiederterminierungs-Gewohnheit, Recall-Abläufe und den größten Bindungsvorteil eines modernen Salons: der Extensions-Wartungszyklus.",
      },
    ],
  ],
  s1Heading: "1. Die wahren Kosten eines verlorenen Kunden",
  heroImageSrc: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=1200&q=80",
  heroImageAlt: "Salon-Kundenberatung",
  s1P1: [
    {
      t: "Einen neuen Kunden zu gewinnen, kann 5–7× mehr kosten als einen bestehenden zu halten. Ein Kunde, der jeden 6–8 Wochen kommt, ist über ein Jahr wertvoller als der eine Besuch, den Sie mit Marketing gewonnen haben. Jeder stille Abgang ist wiederkehrender Umsatz, der zur Tür hinausging.",
    },
  ],
  s1P2: [
    {
      t: "Die Lösung sind nicht mehr Anzeigen. Es ist ein System — und das System beginnt am Waschplatz.",
    },
  ],
  s2Heading: "2. Terminieren Sie, bevor der Kunde den Stuhl verlässt",
  s2P: [
    {
      t: "Der punktverkaufsstärkste Moment ist, wenn das Ergebnis frisch ist und der Kunde zufrieden ist. Schulen Sie die Rezeption (oder den Stylisten), den nächsten Termin zu buchen, bevor der Kunde die Tür erreicht:",
    },
  ],
  s2Quote:
    "\"Ihre Farbe ist in etwa 6 Wochen für eine Auffrischung bereit — soll ich denselben Slot im Kalender blocken, damit er geschützt ist?\"",
  s2P2: [
    { t: "Machen Sie die Wiederterminierung zur " },
    { t: "Regel", i: true },
    {
      t: ", nicht zur Ausnahme. Salons, die das konsequent tun, haben vollere Spalten bei weniger Marketing. Kombinieren Sie es mit der Preisleiter in unserem ",
    },
    { link: "Extensions-Preisleitfaden", href: "/blog/salon-extension-pricing-guide" },
    { t: ", damit jede Wiederterminierung auch die Marge schützt." },
  ],
  s3Heading: "3. Recall-Abläufe, die Kunden zurückbringen",
  recallFlows: [
    { q: "SMS / E-Mail-Erinnerung", a: "Ein freundlicher Hinweis 'Ihr Nachtermin steht an' nach 5 Wochen erreicht Kunden, bevor sie vergessen oder abwandern." },
    { q: "WhatsApp für VIPs", a: "Eine persönliche Nachricht an Ihre Top-Kunden wirkt premium und bekommt schnell Antwort — kein Spam, nur Beziehung." },
    { q: "Win-back nach 10 Wochen", a: "Ist ein Stammkunde nicht zurückgekehrt, holt ein einzelnes 'Wir haben Sie vermisst'-Angebot viel mehr zurück als eine Neukunden-Anzeige." },
  ],
  s4Heading: "4. Warum Extensions ein Bindungsmotor sind",
  cycleCards: [
    { label: "Integrierter 6–8 Wochen Zyklus", icon: "calendarCheck", items: ["Move-ups werden geplant", "Kunden kehren im Rhythmus zurück", "Planbare Spalten"] },
    { label: "Wiederkehrende Nachbestellung", icon: "users", items: ["Mitnahme-Auffüllungen", "Aftercare wiederholt sich", "Marge bleibt bei Ihnen"] },
    { label: "Höhere Wechselkosten", icon: "checkCircle", items: ["Kunden investieren in IHRE Methode", "Schwerer preisvergleichbar", "Eine Beziehung, keine Transaktion"] },
  ],
  s4P: [
    { t: "Ein Kunde mit Extensions ist faktisch in einem Abo, für das Sie keine Software bauen mussten. Der " },
    { link: "Methoden-Vergleichsleitfaden", href: "/blog/hair-extension-methods-comparison" },
    { t: " hilft Ihnen, den passenden Zyklus je Kunde zu wählen — tape-in und nano alle 6–8 Wochen; K-tip und weft alle 8–12." },
  ],
  s5Heading: "5. Die drei Bindungs-KPIs zur Steuerung",
  kpiHeaders: ["KPI", "Ziel", "Warum es wichtig ist"],
  kpiRows: [
    { b: "Wiederterminierungsrate", p: "60%+ vor dem Gehen", l: "Vollere künftige Spalten" },
    { b: "Rückkehrrate (6–8 Wo.)", p: "50%+ der Extensions-Kunden", l: "Gesundheit wiederkehrender Umsatz" },
    { b: "Win-back-Rate", p: "Monatlich tracken", l: "Stoppt stillen Abgang" },
  ],
  ctaBoxTitle: "Binden Sie Kunden langfristig",
  ctaBoxBody:
    "Bieten Sie Extensions-Services in einem 6–8 Wochen Zyklus an und sehen Sie Ihre Spalten von selbst füllen. Eröffnen Sie ein kostenloses UK-Handelskonto für professionelles Haar und Schulungsunterstützung.",
  ctaBoxPrimaryLabel: "Handelskonto eröffnen →",
  ctaBoxPrimaryHref: "/salon-partners",
  ctaBoxSecondaryLabel: "Extensions-Service starten",
  ctaBoxSecondaryHref: "/blog/how-to-start-selling-hair-extensions-salon",
  faqHeading: "Häufig gestellte Fragen",
  faqs: [
    {
      q: "Warum ist Kundenbindung für einen Salon wichtig?",
      a: "Einen neuen Kunden zu gewinnen, kann 5–7× mehr kosten als einen bestehenden zu halten, und ein Kunde, der alle 6–8 Wochen kommt, ist über ein Jahr wertvoller als ein einzelner, mit Marketing gewonnener Besuch. Bindung zahlt sich fort: volle Spalten brauchen weniger Werbebudget, und wiederkehrende Kunden stabilisieren den Cashflow.",
    },
    {
      q: "Wann sollte ein Salon einen Kunden neu terminieren?",
      a: "Bevor er den Stuhl verlässt, solange das Ergebnis frisch und der Kunde zufrieden ist. Ein simples 'Soll ich denselben Slot im Kalender blocken, damit er geschützt ist?' bucht den nächsten Termin zum punktverkaufsstärksten Moment. Machen Sie Wiederterminierung zur Regel, nicht zur Ausnahme, und zielen Sie auf eine Wiederterminierungsrate von 60%+.",
    },
    {
      q: "Wie verbessern Extensions die Kundenbindung?",
      a: "Extensions schaffen einen eingebauten 6–8 Wochen Wartungszyklus (Move-ups und Nachbestellungen), sodass Kunden im Rhythmus wiederkommen, ohne gedrängt zu werden. Da sie in Ihre spezifische Methode und Aftercare investieren, sind die Wechselkosten höher — sie sind in einer Beziehung, kein einmaliger Kauf. tape-in und nano alle 6–8 Wochen; K-tip und weft alle 8–12.",
    },
    {
      q: "Was ist eine gute Salon-Wiederterminierungsrate?",
      a: "Zielen Sie darauf ab, 60%+ der Kunden zu terminieren, bevor sie gehen, und 50%+ der Extensions-Kunden in ihrem 6–8 Wochen Zyklus zu halten. Tracken Sie das monatlich zusammen mit einem Win-back-Ablauf für alle, die länger als 10 Wochen aussetzen — ein einzelnes 'Wir haben Sie vermisst' holt viel mehr zurück als eine Neukunden-Anzeige.",
    },
    {
      q: "Wie gewinne ich abgewanderte Salonkunden zurück?",
      a: "Starten Sie einen Win-back-Ablauf nach etwa 10 Wochen: eine freundliche SMS, E-Mail oder persönliche WhatsApp an Ihre Top-Kunden mit dem Angebot, neu zu terminieren. Halten Sie es beziehungsorientiert, nicht rabattorientiert. Die meisten abgewanderten Kunden haben schlicht vergessen oder sind abgedriftet — ein rechtzeitiger, sanfter Hinweis holt einen hohen Anteil zurück.",
    },
  ],
  link1Kicker: "Cluster-Leitfaden",
  link1Title: "Wie man einen profitablen Salon führt (UK)",
  link1Href: "/blog/grow-profitable-hair-salon-uk",
  link2Kicker: "Verwandter Artikel",
  link2Title: "Einen Salon-Extensions-Service starten",
  link2Href: "/blog/how-to-start-selling-hair-extensions-salon",
  backLabel: "Zurück zum Blog",
}

const fr: SalonClientRetentionRebookingGuideContent = {
  seoTitle:
    "Fidélisation & Rebooking en Salon : Remplissez Vos Colonnes | D.S Hair Beauty",
  seoDescription:
    "Un guide pratique UK sur la fidélisation et le rebooking en salon : le coût des clients perdus, le script de rebooking de l'accueil, les flux de rappel, et pourquoi le cycle de 6–8 semaines est votre moteur de fidélisation.",
  jsonLdHeadline: "Fidélisation & Rebooking en Salon : Remplissez Vos Colonnes",
  jsonLdDescription:
    "Un guide pratique UK sur la fidélisation et le rebooking en salon : le coût des clients perdus, le script de rebooking de l'accueil, les flux de rappel, et pourquoi le cycle de 6–8 semaines est votre moteur de fidélisation.",
  heroBadge: "Salon Business",
  heroTitle: "Fidélisation & Rebooking en Salon",
  heroSubtitle:
    "Les colonnes vides sont rarement un problème de marketing — c'est un problème de fidélisation. Voici comment les salons UK que nous accompagnons fidélisent leurs clientes, et pourquoi les extensions facilitent les choses.",
  ctaPrimaryLabel: "Ouvrir un Compte Pro",
  ctaPrimaryHref: "/salon-partners",
  ctaSecondaryLabel: "Développer un Salon Rentable →",
  ctaSecondaryHref: "/blog/grow-profitable-hair-salon-uk",
  navHome: "Accueil",
  navBlog: "Blog",
  navCurrent: "Fidélisation & Rebooking",
  intro: [
    [
      { t: "Depuis " },
      { t: "19 ans", b: true },
      {
        t: " que nous fournissons les salons UK, les dirigeants qui dorment le mieux ne sont pas ceux au plus gros budget pub, mais ceux dont les clientes reviennent sans être relancées. La fidélisation coûte moins cher que l'acquisition et s'enchaîne. Une colonne pleine exige beaucoup moins de dépenses marketing qu'une que l'on remplit chaque mois.",
      },
    ],
    [
      {
        t: "Ce guide couvre l'habitude du rebooking, les flux de rappel, et le plus grand avantage de fidélisation d'un salon moderne : le cycle d'entretien des extensions.",
      },
    ],
  ],
  s1Heading: "1. Le Vrai Coût d'un Client Perdu",
  heroImageSrc: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=1200&q=80",
  heroImageAlt: "Consultation client en salon",
  s1P1: [
    {
      t: "Acquérir une nouvelle cliente peut coûter 5–7× plus cher que de garder une existante. Une cliente qui vient toutes les 6–8 semaines sur un an vaut bien plus que la visite isolée gagnée par le marketing. Chaque départ silencieux est un revenu récurrent passé par la porte.",
    },
  ],
  s1P2: [
    {
      t: "La solution n'est pas plus de pub. C'est un système — et le système commence au bac de lavage.",
    },
  ],
  s2Heading: "2. Rebooking Avant qu'Elle Ne Quitte le Fauteuil",
  s2P: [
    {
      t: "Le moment de rebooking au plus fort de conversion, c'est quand le résultat est frais et que la cliente est heureuse. Formez l'accueil (ou la styliste) à booker la prochaine visite avant qu'elle n'atteigne la porte :",
    },
  ],
  s2Quote:
    "\"Votre couleur sera prête pour un rafraîchissement dans environ 6 semaines — je bloque le même créneau dans l'agenda pour le protéger ?\"",
  s2P2: [
    { t: "Faites du rebooking la " },
    { t: "règle", i: true },
    {
      t: ", pas l'exception. Les salons qui le font systématiquement ont des colonnes plus pleines avec moins de marketing. Associez-le à l'échelle de prix de notre ",
    },
    { link: "guide de prix des extensions", href: "/blog/salon-extension-pricing-guide" },
    { t: " pour que chaque rebooking protège aussi la marge." },
  ],
  s3Heading: "3. Flux de Rappel qui Ramènent les Clientes",
  recallFlows: [
    { q: "Rappel SMS / e-mail", a: "Une petite tape 'votre move-up est dû' à 5 semaines rattrape les clientes avant qu'elles n'oublient ou dérivent." },
    { q: "WhatsApp pour les VIP", a: "Un message personnel à vos meilleures clientes fait premium et obtient une réponse rapide — pas de spam, juste la relation." },
    { q: "Win-back à 10 semaines", a: "Si une régulière n'est pas revenue, une seule offre 'on vous a manqué' récupère bien plus qu'une pub nouvelle cliente." },
  ],
  s4Heading: "4. Pourquoi les Extensions sont un Moteur de Fidélisation",
  cycleCards: [
    { label: "Cycle intégré de 6–8 semaines", icon: "calendarCheck", items: ["Les move-ups sont planifiés", "Les clientes reviennent en rythme", "Colonnes prévisibles"] },
    { label: "Réappro. récurrente", icon: "users", items: ["Top-ups à emporter", "L'aftercare se répète", "La marge reste chez vous"] },
    { label: "Coût de switching plus élevé", icon: "checkCircle", items: ["Les clientes investissent dans VOTRE méthode", "Plus dur de comparer les prix", "Une relation, pas une transaction"] },
  ],
  s4P: [
    { t: "Une cliente en extensions est effectivement dans un abonnement que vous n'aviez pas à développer. Le " },
    { link: "guide de comparaison des méthodes", href: "/blog/hair-extension-methods-comparison" },
    { t: " vous aide à choisir le cycle adapté à chaque cliente — tape-in et nano toutes les 6–8 semaines ; K-tip et weft toutes les 8–12." },
  ],
  s5Heading: "5. Les Trois KPI de Fidélisation à Suivre",
  kpiHeaders: ["KPI", "Cible", "Pourquoi ça compte"],
  kpiRows: [
    { b: "Taux de rebooking", p: "60%+ avant le départ", l: "Colonnes futures plus pleines" },
    { b: "Taux de retour (6–8 sem.)", p: "50%+ des clientes extensions", l: "Santé du revenu récurrent" },
    { b: "Taux de win-back", p: "Suivi mensuel", l: "Stoppe l'attrition silencieuse" },
  ],
  ctaBoxTitle: "Fidélisez Vos Clientes",
  ctaBoxBody:
    "Ajoutez des services extensions sur un cycle de 6–8 semaines et voyez vos colonnes se remplir toutes seules. Ouvrez un compte pro UK gratuit pour des cheveux professionnels et un support de formation.",
  ctaBoxPrimaryLabel: "Ouvrir un Compte Pro →",
  ctaBoxPrimaryHref: "/salon-partners",
  ctaBoxSecondaryLabel: "Lancer un Service Extensions",
  ctaBoxSecondaryHref: "/blog/how-to-start-selling-hair-extensions-salon",
  faqHeading: "Questions Fréquemment Posées",
  faqs: [
    {
      q: "Pourquoi la fidélisation est-elle importante pour un salon ?",
      a: "Acquérir une nouvelle cliente peut coûter 5–7× plus cher que d'en garder une, et une cliente qui revient toutes les 6–8 semaines vaut sur un an bien plus qu'une visite isolée gagnée par le marketing. La fidélisation s'enchaîne : les colonnes pleines exigent moins de pub, et les clientes récurrentes stabilisent le cash-flow.",
    },
    {
      q: "Quand un salon doit-il rebooker une cliente ?",
      a: "Avant qu'elle ne quitte le fauteuil, tant que le résultat est frais et qu'elle est heureuse. Un simple 'je bloque le même créneau pour le protéger ?' book le prochain rendez-vous au moment le plus convertissant. Faites du rebooking la règle, pas l'exception, et visez un taux de 60%+.",
    },
    {
      q: "Comment les extensions améliorent-elles la fidélisation ?",
      a: "Les extensions créent un cycle d'entretien intégré de 6–8 semaines (move-ups et réappro.), donc les clientes reviennent en rythme sans être relancées. Comme elles investissent dans votre méthode et votre aftercare, le coût de switching est plus élevé — elles sont dans une relation, pas un achat ponctuel. tape-in et nano toutes les 6–8 semaines ; K-tip et weft toutes les 8–12.",
    },
    {
      q: "Quel est un bon taux de rebooking en salon ?",
      a: "Visez à rebooker 60%+ des clientes avant leur départ, et à retenir 50%+ des clientes extensions sur leur cycle de 6–8 semaines. Suivez-le mensuellement avec un flux de win-back pour toute celle qui dépasse 10 semaines — une seule tape 'on vous a manqué' récupère bien plus qu'une pub nouvelle cliente.",
    },
    {
      q: "Comment reconquérir les clientes perdues ?",
      a: "Lancez un flux de win-back vers 10 semaines : un SMS, e-mail ou WhatsApp personnel à vos meilleures clientes proposant de rebooker. Restez dans la relation, pas dans la remise. La plupart des clientes perdues ont simplement oublié ou dérivé — une petite tape rapide et sans pression en ramène une forte proportion.",
    },
  ],
  link1Kicker: "Guide de Cluster",
  link1Title: "Comment Diriger un Salon Rentable (UK)",
  link1Href: "/blog/grow-profitable-hair-salon-uk",
  link2Kicker: "Article Lié",
  link2Title: "Lancer un Service Extensions en Salon",
  link2Href: "/blog/how-to-start-selling-hair-extensions-salon",
  backLabel: "Retour au Blog",
}

const ar: SalonClientRetentionRebookingGuideContent = {
  seoTitle:
    "الاحتفاظ بالعملاء وحجز المواعيد في الصالون: املأ أعمدة المواعيد | D.S Hair Beauty",
  seoDescription:
    "دليل عملي في UK للاحتفاظ بعملاء الصالون وحجز المواعيد: تكلفة فقدان العملاء، سكريبت الحجز في الاستقبال، مسارات الاسترجاع، ولماذا يمثل دورة 6–8 أسابيع محركاً للاحتفاظ بالعملاء.",
  jsonLdHeadline: "الاحتفاظ بالعملاء وحجز المواعيد في الصالون: املأ أعمدة المواعيد",
  jsonLdDescription:
    "دليل عملي في UK للاحتفاظ بعملاء الصالون وحجز المواعيد: تكلفة فقدان العملاء، سكريبت الحجز في الاستقبال، مسارات الاسترجاع، ولماذا يمثل دورة 6–8 أسابيع محركاً للاحتفاظ بالعملاء.",
  heroBadge: "أعمال الصالون",
  heroTitle: "الاحتفاظ بالعملاء وحجز المواعيد في الصالون",
  heroSubtitle:
    "نادراً ما تكون الأعمدة الفارغة مشكلة تسويق — بل مشكلة احتفاظ. إليك كيف تحافظ صالونات UK التي نتعاون معها على عودة العملاء، ولماذا تجعل الإكسسوارات الأمر أسهل.",
  ctaPrimaryLabel: "افتح حساب جملة",
  ctaPrimaryHref: "/salon-partners",
  ctaSecondaryLabel: "نمِّ صالوناً مربحاً →",
  ctaSecondaryHref: "/blog/grow-profitable-hair-salon-uk",
  navHome: "الرئيسية",
  navBlog: "المدونة",
  navCurrent: "الاحتفاظ وحجز المواعيد",
  intro: [
    [
      { t: "على مدار " },
      { t: "19 سنة", b: true },
      {
        t: " من توريدنا لصالونات UK، لا يكون أصحاب الصالونات الأكثر اطمئناناً هم أصحاب أكبر ميزانية إعلانية — بل أولئك الذين يعود عملاؤهم دون ملاحقة. الاحتفاظ أرخص من الاستقطاب ويتضاعف. العمود الممتلئ يحتاج إنفاقاً تسويقياً أقل بكثير من عمود تملؤه كل شهر.",
      },
    ],
    [
      {
        t: "يتناول هذا الدليل عادة الحجز، ومسارات الاسترجاع، وأكبر ميزة احتفاظ لصالون حديث: دورة صيانة الإكسسوارات.",
      },
    ],
  ],
  s1Heading: "1. التكلفة الحقيقية لفقدان عميل",
  heroImageSrc: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=1200&q=80",
  heroImageAlt: "استشارة عميل في الصالون",
  s1P1: [
    {
      t: "قد يكلف استقطاب عميل جديد 5–7× أكثر من الاحتفاظ بعميل قائم. العميل الذي يزور الصالون كل 6–8 أسابيع على مدار سنة يستحق أكثر بكثير من الزيارة الوحيدة التي ربحتها بالتسويق. كل رحيل صامت هو إيراد متكرر خرج من الباب.",
    },
  ],
  s1P2: [
    {
      t: "الحل ليس مزيداً من الإعلانات. إنه نظام — والنظام يبدأ عند حوض الغسيل.",
    },
  ],
  s2Heading: "2. احجز الموعد قبل أن تغادر العميل الكرسي",
  s2P: [
    {
      t: "أعلى لحظة تحويل للحجز هي حين يكون النتيجة طازجة والعميل سعيداً. دربي الاستقبال (أو المصففة) على حجز الزيارة التالية قبل أن يصل العميل إلى الباب:",
    },
  ],
  s2Quote:
    "\"سيكون لونك جاهزاً للتجديد بعد نحو 6 أسابيع — هل أضع نفس الموعد في الأجندة الآن لحمايته؟\"",
  s2P2: [
    { t: "اجعلي الحجز " },
    { t: "الافتراض", i: true },
    {
      t: "، لا الاستثناء. الصالونات التي تفعل ذلك بانتظام تمتلئ أعمدة مواعيدها بإعلان أقل. اقترنيه مع سلم الأسعار في ",
    },
    { link: "دليل تسعير الإكسسوارات", href: "/blog/salon-extension-pricing-guide" },
    { t: " ليحمي كل حجز أيضاً الهامش." },
  ],
  s3Heading: "3. مسارات الاسترجاع التي تعيد العملاء",
  recallFlows: [
    { q: "تذكير عبر SMS / البريد", a: "رسالة لطيفة 'موعد صيانتك حان' بعد 5 أسابيع تلحق بالعملاء قبل أن ينسوا أو يبتعدوا." },
    { q: "WhatsApp لكبار العملاء", a: "رسالة شخصية لأفضل عملائك تبدو فاخرة وتحصل على رد سريع — لا سبام، فقط علاقة." },
    { q: "استرجاع عند 10 أسابيع", a: "إذا لم يعد عميل دائم، عرض واحد 'لقد افتقدناك' يسترد أكثر بكثير من إعلان عميل جديد." },
  ],
  s4Heading: "4. لماذا تمثل الإكسسوارات محرك احتفاظ",
  cycleCards: [
    { label: "دورة مدمجة كل 6–8 أسابيع", icon: "calendarCheck", items: ["تُجدول المواعيد", "يعود العملاء على إيقاع", "أعمدة مواعيد متوقعة"] },
    { label: "إعادة طلب متكررة", icon: "users", items: ["أعباء منزلية", "يتكرر العناية اللاحقة", "تبقى الهامش معك"] },
    { label: "تكلفة تحول أعلى", icon: "checkCircle", items: ["يستثمر العملاء في طريقتك", "أصعب للمقارنة السعرية", "علاقة لا صفقة لمرة"] },
  ],
  s4P: [
    { t: "العميل بلإكسسوارات فعلياً في اشتراك لم تبنِ له برمجيات. " },
    { link: "دليل مقارنة الطرق", href: "/blog/hair-extension-methods-comparison" },
    { t: " يساعدك على اختيار الدورة المناسبة لكل عميل — tape-in وnano كل 6–8 أسابيع؛ K-tip وweft كل 8–12." },
  ],
  s5Heading: "5. مؤشرات الاحتفاظ الثلاثة للتتبع",
  kpiHeaders: ["المؤشر", "الهدف", "لماذا يهم"],
  kpiRows: [
    { b: "معدل إعادة الحجز", p: "60%+ قبل المغادرة", l: "أعمدة مواعيد أمتلأ مستقبلاً" },
    { b: "معدل العودة (6–8 أسابيع)", p: "50%+ من عملاء الإكسسوارات", l: "صحة الإيراد المتكرر" },
    { b: "معدل الاسترجاع", p: "تتبع شهري", l: "يوقف التسرّب الصامت" },
  ],
  ctaBoxTitle: "حافظ على عودة العملاء",
  ctaBoxBody:
    "أضيفي خدمات الإكسسوارات على دورة 6–8 أسابيع وشاهدي أعمدة مواعيدك تمتلئ وحدها. افتح حساب جملة UK مجانياً لشعر احترافي ودعم تدريبي.",
  ctaBoxPrimaryLabel: "افتح حساب جملة →",
  ctaBoxPrimaryHref: "/salon-partners",
  ctaBoxSecondaryLabel: "ابدئي خدمة إكسسوارات",
  ctaBoxSecondaryHref: "/blog/how-to-start-selling-hair-extensions-salon",
  faqHeading: "الأسئلة الشائعة",
  faqs: [
    {
      q: "لماذا يعد الاحتفاظ بالعملاء مهماً للصالون؟",
      a: "قد يكلف استقطاب عميل جديد 5–7× أكثر من الاحتفاظ بعميل قائم، والعميل الذي يعود كل 6–8 أسابيع يستحق على مدار سنة أكثر بكثير من زيارة واحدة ربحتها بالتسويق. الاحتفاظ يتضاعف: الأعمدة الممتلئة تحتاج إعلاناً أقل، والعملاء المتكررون يثبتون التدفق النقدي.",
    },
    {
      q: "متى يجب للصالون إعادة حجز العميل؟",
      a: "قبل أن يغادر الكرسي، حين يكون النتيجة طازجة والعميل سعيداً. عبارة بسيطة 'هل أضع نفس الموعد في الأجندة لحمايته؟' تحجز الزيارة التالية في أعلى لحظة تحويل. اجعلي الحجز الافتراض لا الاستثناء، واستهدفي معدل حجز 60%+.",
    },
    {
      q: "كيف تحسّن الإكسسوارات الاحتفاظ بالعملاء؟",
      a: "تcreating الإكسسوارات دورة صيانة مدمجة كل 6–8 أسابيع (المواعيد وإعادة الطلب)، فيعود العملاء على إيقاع دون ملاحقة. بما أنهم يستثمرون في طريقتك وعنايتك اللاحقة، تكون تكلفة التحول أعلى — هم في علاقة لا صفقة لمرة. tape-in وnano كل 6–8 أسابيع؛ K-tip وweft كل 8–12.",
    },
    {
      q: "ما معدل إعادة الحجز الجيد للصالون؟",
      a: "استهدفي حجز 60%+ من العملاء قبل مغادرتهم، والاحتفاظ بـ 50%+ من عملاء الإكسسوارات على دورتهم 6–8 أسابيع. تتبّعي ذلك شهرياً مع مسار استرجاع لأي عميل تجاوز 10 أسابيع — رسالة 'لقد افتقدناك' الوحيدة تسترد أكثر بكثير من إعلان عميل جديد.",
    },
    {
      q: "كيف أستعيد عملاء الصالون الذين تسرّبوا؟",
      a: "شغّلي مسار استرجاع عند نحو 10 أسابيع: رسالة SMS أو بريد أو WhatsApp شخصية لأفضل عملائك لإعادة الحجز. اجعليها مبنية على العلاقة لا الخصم. معظم العملاء المتسرّبين ببساطة نسوا أو ابتعدوا — تلميح لطيف وفي الوقت المناسب يعيد نسبة عالية.",
    },
  ],
  link1Kicker: "دليل المجموعة",
  link1Title: "كيف تديري صالوناً مربحاً (UK)",
  link1Href: "/blog/grow-profitable-hair-salon-uk",
  link2Kicker: "مقال ذو صلة",
  link2Title: "ابدئي خدمة إكسسوارات في الصالون",
  link2Href: "/blog/how-to-start-selling-hair-extensions-salon",
  backLabel: "العودة إلى المدونة",
}

const sv: SalonClientRetentionRebookingGuideContent = {
  seoTitle:
    "Salongens Kundlojalitet & Återbokning: Fyll Dina Kolumner | D.S Hair Beauty",
  seoDescription:
    "En praktisk UK-guide till salongens kundlojalitet och återbokning: kostnaden för förlorade kunder, receptionens återbokningsscript, påminnelseflöden, och varför 6–8 veckors cykeln är din lojalitetsmotor.",
  jsonLdHeadline: "Salongens Kundlojalitet & Återbokning: Fyll Dina Kolumner",
  jsonLdDescription:
    "En praktisk UK-guide till salongens kundlojalitet och återbokning: kostnaden för förlorade kunder, receptionens återbokningsscript, påminnelseflöden, och varför 6–8 veckors cykeln är din lojalitetsmotor.",
  heroBadge: "Salong Business",
  heroTitle: "Salongens Kundlojalitet & Återbokning",
  heroSubtitle:
    "Tomma kolumner är sällan ett marknadsföringsproblem — det är ett lojalitetsproblem. Så här håller UK-salonger vi samarbetar med sina kunder återkommande, och varför extensions gör det enklare.",
  ctaPrimaryLabel: "Öppna Ett Kontor Konto",
  ctaPrimaryHref: "/salon-partners",
  ctaSecondaryLabel: "Bygg En Lönsam Salong →",
  ctaSecondaryHref: "/blog/grow-profitable-hair-salon-uk",
  navHome: "Hem",
  navBlog: "Blogg",
  navCurrent: "Lojalitet & Återbokning",
  intro: [
    [
      { t: "Under " },
      { t: "19 år", b: true },
      {
        t: " av att leverera till UK-salonger är de ägare som sover bäst inte de med största annonsbudget — utan de vars kunder kommer tillbaka utan påminnelse. Lojalitet är billigare än nyförvärv och förstärks. En full kolumn behöver mycket mindre marknadsföring än en du fyller varje månad.",
      },
    ],
    [
      {
        t: "Den här guiden täcker återbokningsvanan, påminnelseflöden och den största lojalitetsfördelen en modern salong har: extensions-underhållscykeln.",
      },
    ],
  ],
  s1Heading: "1. Den Verkliga Kostnaden för en Förlorad Kund",
  heroImageSrc: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=1200&q=80",
  heroImageAlt: "Salongskundkonsultation",
  s1P1: [
    {
      t: "Att vinna en ny kund kan kosta 5–7× mer än att behålla en befintlig. En kund som kommer var 6–8 vecka under ett år är värd mycket mer än det enda besök du vann genom marknadsföring. Varje tyst avhopp är återkommande intäkt som gick ut genom dörren.",
    },
  ],
  s1P2: [
    {
      t: "Lösningen är inte mer annonser. Det är ett system — och systemet börjar vid tvättstolen.",
    },
  ],
  s2Heading: "2. Boka Om Innan Kunden Lämnar Stolen",
  s2P: [
    {
      t: "Den mest konverterande återbokningsstunden är när resultatet är färskt och kunden nöjd. Träna receptionen (eller stylisten) att boka nästa besök innan kunden når dörren:",
    },
  ],
  s2Quote:
    "\"Din färg är redo för en uppfräschning om cirka 6 veckor — ska jag lägga in samma tid i kalendern nu så den är skyddad?\"",
  s2P2: [
    { t: "Gör återbokning till " },
    { t: "standard", i: true },
    {
      t: ", inte undantaget. Salonger som gör det konsekvent har fullare kolumner med mindre marknadsföring. Para ihop det med prisstegen i vår ",
    },
    { link: "guide för extensionsprissättning", href: "/blog/salon-extension-pricing-guide" },
    { t: " så att varje återbokning också skyddar marginalen." },
  ],
  s3Heading: "3. Påminnelseflöden som Får Tillbaka Kunder",
  recallFlows: [
    { q: "SMS / e-postpåminnelse", a: "En vänlig 'din påfyllning är due' nudge vid 5 veckor fångar kunder innan de glömmer eller glider iväg." },
    { q: "WhatsApp för VIPs", a: "Ett personligt meddelande till dina toppkunder känns premium och får snabbt svar — ingen spam, bara relation." },
    { q: "Win-back vid 10 veckor", a: "Om en stamkund inte kommit tillbaka räddar ett enda 'vi saknade dig' erbjudande mycket mer än en nykundsannons." },
  ],
  s4Heading: "4. Varför Extensions är en Lojalitetsmotor",
  cycleCards: [
    { label: "Inbyggd 6–8 veckors cykel", icon: "calendarCheck", items: ["Move-ups schemaläggs", "Kunder återkommer i rytm", "Förutsägbara kolumner"] },
    { label: "Återkommande ombeställning", icon: "users", items: ["Hemta-påfyllningar", "Aftercare upprepas", "Marginalen stannar hos dig"] },
    { label: "Högre bytesträskel", icon: "checkCircle", items: ["Kunder investerar i DIN metod", "Svårare att jämföra pris", "En relation, inte ett köp"] },
  ],
  s4P: [
    { t: "En kund med extensions är i praktiken i en prenumeration du inte behövde bygga mjukvara för. " },
    { link: "guiden för metodjämförelse", href: "/blog/hair-extension-methods-comparison" },
    { t: " hjälper dig välja cykeln som passar varje kund — tape-in och nano var 6–8 vecka; K-tip och weft var 8–12." },
  ],
  s5Heading: "5. De Tre Lojalitets-KPI:na att Följa",
  kpiHeaders: ["KPI", "Mål", "Varför det spelar roll"],
  kpiRows: [
    { b: "Återbokningsfrekvens", p: "60%+ innan avfärd", l: "Fullare framtida kolumner" },
    { b: "Återvändandefrekvens (6–8 v.)", p: "50%+ av extensionkunder", l: "Hälsa för återkommande intäkt" },
    { b: "Win-back-frekvens", p: "Följ månadsvis", l: "Stoppar tyst bortfall" },
  ],
  ctaBoxTitle: "Behåll Kunderna Återkommande",
  ctaBoxBody:
    "Lägg till extensionstjänster på en 6–8 veckors cykel och se dina kolumner fylla sig själva. Öppna ett gratis UK-handelskonto för professionellt hår och utbildningsstöd.",
  ctaBoxPrimaryLabel: "Öppna Ett Kontor Konto →",
  ctaBoxPrimaryHref: "/salon-partners",
  ctaBoxSecondaryLabel: "Starta En Extensionstjänst",
  ctaBoxSecondaryHref: "/blog/how-to-start-selling-hair-extensions-salon",
  faqHeading: "Vanliga Frågor",
  faqs: [
    {
      q: "Varför är kundlojalitet viktigt för en salong?",
      a: "Att vinna en ny kund kan kosta 5–7× mer än att behålla en befintlig, och en kund som kommer var 6–8 vecka är värd mycket mer över ett år än ett enda besök vunnet genom marknadsföring. Lojalitet förstärks: fulla kolumner behöver mindre annonsering, och återkommande kunder stabiliserar kassaflödet.",
    },
    {
      q: "När ska en salong boka om en kund?",
      a: "Innan de lämnar stolen, medan resultatet är färskt och de är nöjda. Ett enkelt 'ska jag lägga in samma tid i kalendern så den är skyddad?' bokar nästa besök vid den mest konverterande stunden. Gör återbokning till standard, inte undantag, och sikta på en återbokningsfrekvens på 60%+.",
    },
    {
      q: "Hur förbättrar extensions kundlojalitet?",
      a: "Extensions skapar en inbyggd 6–8 veckors underhållscykel (move-ups och ombeställningar), så kunder återkommer i rytm utan påminnelse. Eftersom de investerar i just din metod och aftercare är bytesträskeln högre — de är i en relation, inte ett engångsköp. tape-in och nano var 6–8 vecka; K-tip och weft var 8–12.",
    },
    {
      q: "Vad är en bra återbokningsfrekvens för en salong?",
      a: "Sikta på att boka om 60%+ av kunderna innan de går, och behåll 50%+ av extensionkunderna på deras 6–8 veckors cykel. Följ det månadsvis tillsammans med ett win-back-flöde för den som glider förbi 10 veckor — en enda 'vi saknade dig' räddar mycket mer än en nykundsannons.",
    },
    {
      q: "Hur vinner jag tillbaka bortfallna salongkunder?",
      a: "Kör ett win-back-flöde vid cirka 10 veckor: en vänlig SMS, e-post eller personlig WhatsApp till dina toppkunder med erbjudande att boka om. Håll det relationslett, inte rabattlett. De flesta bortfallna kunder glömde bara eller glid iväg — en snabb, lågtrycks-nudge får en hög andel tillbaka.",
    },
  ],
  link1Kicker: "Klusterguide",
  link1Title: "Så Driver Du En Lönsam Salong (UK)",
  link1Href: "/blog/grow-profitable-hair-salon-uk",
  link2Kicker: "Relaterad Artikel",
  link2Title: "Starta En Salong-Extensionstjänst",
  link2Href: "/blog/how-to-start-selling-hair-extensions-salon",
  backLabel: "Tillbaka till Bloggen",
}

const pl: SalonClientRetentionRebookingGuideContent = {
  seoTitle:
    "Lojalność & Ponowne Rezerwacje w Salonie: Wypełnij Swoje Kolumny | D.S Hair Beauty",
  seoDescription:
    "Praktyczny przewodnik UK po lojalności i ponownych rezerwacjach w salonie: koszt utraconych klientów, skrypt recepcji do rezerwacji, przepływy przypominające i dlaczego cykl 6–8 tygodni to Twój silnik lojalności.",
  jsonLdHeadline: "Lojalność & Ponowne Rezerwacje w Salonie: Wypełnij Swoje Kolumny",
  jsonLdDescription:
    "Praktyczny przewodnik UK po lojalności i ponownych rezerwacjach w salonie: koszt utraconych klientów, skrypt recepcji do rezerwacji, przepływy przypominające i dlaczego cykl 6–8 tygodni to Twój silnik lojalności.",
  heroBadge: "Salon Business",
  heroTitle: "Lojalność & Ponowne Rezerwacje w Salonie",
  heroSubtitle:
    "Puste kolumny rzadko są problemem marketingowym — to problem lojalności. Oto jak salony w UK, z którymi współpracujemy, zatrzymują klientki i dlaczego extensions to ułatwiają.",
  ctaPrimaryLabel: "Otwórz Konto Hurtowe",
  ctaPrimaryHref: "/salon-partners",
  ctaSecondaryLabel: "Zbuduj LUK Salon →",
  ctaSecondaryHref: "/blog/grow-profitable-hair-salon-uk",
  navHome: "Start",
  navBlog: "Blog",
  navCurrent: "Lojalność & Rezerwacje",
  intro: [
    [
      { t: "Przez " },
      { t: "19 lat", b: true },
      {
        t: " zaopatrywania salonów w UK, właściciele, którzy śpią najspokojniej, to nie ci z największym budżetem reklamowym — lecz ci, do których klientki wracają bez ponagleń. Lojalność jest tańsza niż pozyskiwanie i procentuje. Pełna kolumna wymaga znacznie mniej wydatków na marketing niż ta, którą uzupełniasz co miesiąc.",
      },
    ],
    [
      {
        t: "Ten przewodnik omawia nawyk rezerwacji, przepływy przypominające i największą przewagę lojalności nowoczesnego salonu: cykl konserwacji extensions.",
      },
    ],
  ],
  s1Heading: "1. Prawdziwy Koszt Utraconego Klienta",
  heroImageSrc: "https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=1200&q=80",
  heroImageAlt: "Konsultacja klientki w salonie",
  s1P1: [
    {
      t: "Pozyskanie nowej klientki może kosztować 5–7× więcej niż utrzymanie obecnej. Klientka, która przychodzi co 6–8 tygodni przez rok, jest warta znacznie więcej niż pojedyncza wizyta wywalczona marketingiem. Każde ciche odejście to powtarzalny przychód, który wyszedł drzwiami.",
    },
  ],
  s1P2: [
    {
      t: "Rozwiązaniem nie są większe reklamy. To system — a system zaczyna się przy myjce.",
    },
  ],
  s2Heading: "2. Zarezerwuj Ponownie, Zanim Odejdzie od Fotela",
  s2P: [
    {
      t: "Najskuteczniejszy moment rezerwacji to chwila, gdy efekt jest świeży, a klientka zadowolona. Przeszkol recepcję (lub stylistkę), by umówiła kolejną wizytę, zanim klientka dojdzie do drzwi:",
    },
  ],
  s2Quote:
    "\"Twój kolor będzie gotowy do odświeżenia za około 6 tygodni — mam zablokować ten sam termin w kalendarzu, by był zabezpieczony?\"",
  s2P2: [
    { t: "Uczyń ponowną rezerwację " },
    { t: "standardem", i: true },
    {
      t: ", nie wyjątkiem. Salony, które robią to konsekwentnie, mają pełniejsze kolumny przy mniejszym marketingu. Połącz to z drabinką cen w naszym ",
    },
    { link: "przewodniku po cenach extensions", href: "/blog/salon-extension-pricing-guide" },
    { t: ", by każda rezerwacja chroniła też marżę." },
  ],
  s3Heading: "3. Przepływy Przypominające, które Przyprowadzają Klientki",
  recallFlows: [
    { q: "Przypomnienie SMS / e-mail", a: "Miły sygnał 'twoja dopłata się zbliża' po 5 tygodniach łapie klientki, zanim zapomną lub odejdą." },
    { q: "WhatsApp dla VIP", a: "Osobista wiadomość do Twoich najlepszych klientek brzmi premium i szybko dostaje odpowiedź — bez spamu, czysta relacja." },
    { q: "Win-back po 10 tygodniach", a: "Jeśli stała klientka nie wróciła, pojedyncze 'brakowało nam Cię' odzyskuje znacznie więcej niż reklama nowej klientki." },
  ],
  s4Heading: "4. Dlaczego Extensions to Silnik Lojalności",
  cycleCards: [
    { label: "Wbudowany cykl 6–8 tygodni", icon: "calendarCheck", items: ["Move-upy zaplanowane", "Klientki wracają rytmicznie", "Przewidywalne kolumny"] },
    { label: "Powtarzalne zamówienie", icon: "users", items: ["Zestawy na wynos", "Aftercare się powtarza", "Marża zostaje u Ciebie"] },
    { label: "Wyższy koszt zmiany", icon: "checkCircle", items: ["Klientki inwestują w TWOJĄ metodę", "Trudniej porównać ceny", "Relacja, nie transakcja"] },
  ],
  s4P: [
    { t: "Klientka z extensions to de facto subskrypcja, której nie musiałeś programować. " },
    { link: "przewodnik porównania metod", href: "/blog/hair-extension-methods-comparison" },
    { t: " pomoże dobrać cykl do każdej klientki — tape-in i nano co 6–8 tygodni; K-tip i weft co 8–12." },
  ],
  s5Heading: "5. Trzy Wskaźniki Lojalności do Śledzenia",
  kpiHeaders: ["Wskaźnik", "Cel", "Dlaczego to ważne"],
  kpiRows: [
    { b: "Wskaźnik rezerwacji", p: "60%+ przed wyjściem", l: "Pełniejsze przyszłe kolumny" },
    { b: "Wskaźnik powrotu (6–8 tyg.)", p: "50%+ klientek extensions", l: "Zdrowie powtarzalnego przychodu" },
    { b: "Wskaźnik win-back", p: "Śledź miesięcznie", l: "Zatrzymuje ciche odejścia" },
  ],
  ctaBoxTitle: "Zatrzymaj Klientki na Stałe",
  ctaBoxBody:
    "Dodaj usługi extensions w cyklu 6–8 tygodni i zobacz, jak kolumny wypełniają się same. Otwórz darmowe brytyjskie konto hurtowe dla profesjonalnego włosa i wsparcia szkoleniowego.",
  ctaBoxPrimaryLabel: "Otwórz Konto Hurtowe →",
  ctaBoxPrimaryHref: "/salon-partners",
  ctaBoxSecondaryLabel: "Uruchom Usługę Extensions",
  ctaBoxSecondaryHref: "/blog/how-to-start-selling-hair-extensions-salon",
  faqHeading: "Najczęściej Zadawane Pytania",
  faqs: [
    {
      q: "Dlaczego lojalność klientek jest ważna dla salonu?",
      a: "Pozyskanie nowej klientki może kosztować 5–7× więcej niż utrzymanie obecnej, a klientka wracająca co 6–8 tygodni jest warta przez rok znacznie więcej niż pojedyncza wizyta wywalczona marketingiem. Lojalność procentuje: pełne kolumny wymagają mniej reklam, a powracające klientki stabilizują przepływ gotówki.",
    },
    {
      q: "Kiedy salon powinien rezerwować klientkę ponownie?",
      a: "Zanim odejdzie od fotela, gdy efekt jest świeży, a ona zadowolona. Proste 'mam zablokować ten sam termin w kalendarzu, by był zabezpieczony?' umawia kolejną wizytę w najskuteczniejszym momencie. Uczyń rezerwację standardem, nie wyjątkiem, i celuj w wskaźnik 60%+.",
    },
    {
      q: "Jak extensions poprawiają lojalność klientek?",
      a: "Extensions tworzą wbudowany cykl konserwacji 6–8 tygodni (move-upy i zamówienia), więc klientki wracają rytmicznie bez ponagleń. Ponieważ inwestują w Twoją konkretną metodę i aftercare, koszt zmiany jest wyższy — są w relacji, nie w jednorazowym zakupie. tape-in i nano co 6–8 tygodni; K-tip i weft co 8–12.",
    },
    {
      q: "Jaki jest dobry wskaźnik ponownych rezerwacji w salonie?",
      a: "Celuj w umawianie 60%+ klientek przed wyjściem i utrzymanie 50%+ klientek extensions w ich cyklu 6–8 tygodni. Śledź to miesięcznie wraz z przepływem win-back dla każdej, która przekroczy 10 tygodni — pojedyncze 'brakowało nam Cię' odzyskuje znacznie więcej niż reklama nowej klientki.",
    },
    {
      q: "Jak odzyskać utracone klientki salonu?",
      a: "Uruchom przepływ win-back w okolicach 10 tygodni: miły SMS, e-mail lub osobiste WhatsApp do Twoich najlepszych klientek z propozycją rezerwacji. Trzymaj się relacji, nie rabatów. Większość utraconych klientek po prostu zapomniała lub odpłynęła — terminowy, nienachalny sygnał sprowadza wysoki odsetek z powrotem.",
    },
  ],
  link1Kicker: "Przewodnik Klastra",
  link1Title: "Jak Prowadzić LUK Salon (UK)",
  link1Href: "/blog/grow-profitable-hair-salon-uk",
  link2Kicker: "Powiązany Artykuł",
  link2Title: "Uruchom Usługę Extensions w Salonie",
  link2Href: "/blog/how-to-start-selling-hair-extensions-salon",
  backLabel: "Powrót do Bloga",
}

export const salonClientRetentionRebookingGuideContent: Record<
  Locale,
  SalonClientRetentionRebookingGuideContent
> = { en, de, fr, ar, sv, pl }
