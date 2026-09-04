import type { Locale } from "@/lib/i18n/config"

export interface ContactFormLabels {
  heading: string
  firstName: string
  firstNamePh: string
  lastName: string
  lastNamePh: string
  email: string
  emailPh: string
  phone: string
  phonePh: string
  subject: string
  subjectPh: string
  leadType: string
  leadTypePh: string
  leadTypes: { value: string; label: string }[]
  orderNumber: string
  orderNumberPh: string
  message: string
  messagePh: string
  submit: string
  sending: string
  error: string
  successTitle: string
  successBody: string
  another: string
  subjects: { value: string; label: string }[]
}

const subjectValues = [
  "general",
  "order",
  "returns",
  "colour-match",
  "professional",
  "press",
]

export const contactFormLabels: Record<Locale, ContactFormLabels> = {
  en: {
    heading: "Send Us a Message",
    firstName: "First Name",
    firstNamePh: "Your first name",
    lastName: "Last Name",
    lastNamePh: "Your last name",
    email: "Email Address",
    emailPh: "you@example.com",
    phone: "Phone Number (Optional)",
    phonePh: "+44 123 456 7890",
    subject: "Subject",
    subjectPh: "Select a subject",
    leadType: "I am a",
    leadTypePh: "Select your type",
    leadTypes: [
      { value: "salon", label: "Salon / Hair Professional" },
      { value: "wholesaler", label: "Wholesaler / Reseller" },
      { value: "individual", label: "Individual / Personal use" },
    ],
    orderNumber: "Order Number (Optional)",
    orderNumberPh: "e.g. DS-12345",
    message: "Message",
    messagePh: "Tell us how we can help...",
    submit: "Send Message",
    sending: "Sending...",
    error: "Failed to send message. Please try again.",
    successTitle: "Message Sent!",
    successBody: "Thank you for getting in touch. We will respond to your enquiry within 24 hours.",
    another: "Send Another Message",
    subjects: [
      { value: "general", label: "General Enquiry" },
      { value: "order", label: "Order Support" },
      { value: "returns", label: "Returns & Exchanges" },
      { value: "colour-match", label: "Colour Matching Help" },
      { value: "professional", label: "Professional Partnership" },
      { value: "press", label: "Press & Media" },
    ],
  },
  de: {
    heading: "Schreiben Sie uns",
    firstName: "Vorname",
    firstNamePh: "Ihr Vorname",
    lastName: "Nachname",
    lastNamePh: "Ihr Nachname",
    email: "E-Mail-Adresse",
    emailPh: "sie@beispiel.de",
    phone: "Telefonnummer (optional)",
    phonePh: "+49 123 456 7890",
    subject: "Betreff",
    subjectPh: "Betreff auswählen",
    leadType: "Ich bin",
    leadTypePh: "Typ auswählen",
    leadTypes: [
      { value: "salon", label: "Salon / Friseurprofi" },
      { value: "wholesaler", label: "Großhändler / Wiederverkäufer" },
      { value: "individual", label: "Privat / Private Nutzung" },
    ],
    orderNumber: "Bestellnummer (optional)",
    orderNumberPh: "z. B. DS-12345",
    message: "Nachricht",
    messagePh: "Wie können wir helfen?",
    submit: "Nachricht senden",
    sending: "Wird gesendet...",
    error: "Nachricht konnte nicht gesendet werden. Bitte erneut versuchen.",
    successTitle: "Nachricht gesendet!",
    successBody: "Vielen Dank für Ihre Nachricht. Wir antworten innerhalb von 24 Stunden.",
    another: "Weitere Nachricht senden",
    subjects: [
      { value: "general", label: "Allgemeine Anfrage" },
      { value: "order", label: "Bestellungen" },
      { value: "returns", label: "Rücksendungen & Umtausch" },
      { value: "colour-match", label: "Farbberatung" },
      { value: "professional", label: "Profi-Partnerschaft" },
      { value: "press", label: "Presse & Medien" },
    ],
  },
  fr: {
    heading: "Envoyez-nous un message",
    firstName: "Prénom",
    firstNamePh: "Votre prénom",
    lastName: "Nom",
    lastNamePh: "Votre nom",
    email: "Adresse e-mail",
    emailPh: "vous@exemple.fr",
    phone: "Numéro de téléphone (facultatif)",
    phonePh: "+33 1 23 45 67 89",
    subject: "Sujet",
    subjectPh: "Choisir un sujet",
    leadType: "Je suis",
    leadTypePh: "Sélectionnez votre type",
    leadTypes: [
      { value: "salon", label: "Salon / Professionnel capillaire" },
      { value: "wholesaler", label: "Grossiste / Revendeur" },
      { value: "individual", label: "Particulier / Usage personnel" },
    ],
    orderNumber: "Numéro de commande (facultatif)",
    orderNumberPh: "ex. DS-12345",
    message: "Message",
    messagePh: "Dites-nous comment nous pouvons aider...",
    submit: "Envoyer le message",
    sending: "Envoi en cours...",
    error: "Échec de l'envoi. Veuillez réessayer.",
    successTitle: "Message envoyé !",
    successBody: "Merci de nous avoir contactés. Nous répondrons sous 24 heures.",
    another: "Envoyer un autre message",
    subjects: [
      { value: "general", label: "Demande générale" },
      { value: "order", label: "Support commande" },
      { value: "returns", label: "Retours & échanges" },
      { value: "colour-match", label: "Aide au couleur" },
      { value: "professional", label: "Partenariat professionnel" },
      { value: "press", label: "Presse & médias" },
    ],
  },
  ar: {
    heading: "أرسل لنا رسالة",
    firstName: "الاسم الأول",
    firstNamePh: "اسمك الأول",
    lastName: "اسم العائلة",
    lastNamePh: "اسم عائلتك",
    email: "البريد الإلكتروني",
    emailPh: "you@example.com",
    phone: "رقم الهاتف (اختياري)",
    phonePh: "+44 123 456 7890",
    subject: "الموضوع",
    subjectPh: "اختر موضوعاً",
    leadType: "أنا",
    leadTypePh: "اختر نوعك",
    leadTypes: [
      { value: "salon", label: "صالون / محترف شعر" },
      { value: "wholesaler", label: "موزع / إعادة بيع" },
      { value: "individual", label: "فرد / استخدام شخصي" },
    ],
    orderNumber: "رقم الطلب (اختياري)",
    orderNumberPh: "مثال DS-12345",
    message: "الرسالة",
    messagePh: "أخبرنا كيف يمكننا المساعدة...",
    submit: "إرسال الرسالة",
    sending: "جارٍ الإرسال...",
    error: "تعذر إرسال الرسالة. يرجى المحاولة مرة أخرى.",
    successTitle: "تم إرسال الرسالة!",
    successBody: "شكراً لتواصلك معنا. سنرد على استفسارك خلال 24 ساعة.",
    another: "إرسال رسالة أخرى",
    subjects: [
      { value: "general", label: "استفسار عام" },
      { value: "order", label: "دعم الطلبات" },
      { value: "returns", label: "الإرجاع والاستبدال" },
      { value: "colour-match", label: "مساعدة في مطابقة اللون" },
      { value: "professional", label: "شراكة احترافية" },
      { value: "press", label: "الصحافة والإعلام" },
    ],
  },
  sv: {
    heading: "Skicka ett meddelande",
    firstName: "Förnamn",
    firstNamePh: "Ditt förnamn",
    lastName: "Efternamn",
    lastNamePh: "Ditt efternamn",
    email: "E-postadress",
    emailPh: "du@exempel.se",
    phone: "Telefonnummer (valfritt)",
    phonePh: "+46 123 456 789",
    subject: "Ämne",
    subjectPh: "Välj ett ämne",
    leadType: "Jag är",
    leadTypePh: "Välj typ",
    leadTypes: [
      { value: "salon", label: "Salong / Hårfrisör" },
      { value: "wholesaler", label: "Grossist / Återförsäljare" },
      { value: "individual", label: "Privat / Personligt bruk" },
    ],
    orderNumber: "Ordernummer (valfritt)",
    orderNumberPh: "t.ex. DS-12345",
    message: "Meddelande",
    messagePh: "Berätta hur vi kan hjälpa till...",
    submit: "Skicka meddelande",
    sending: "Skickar...",
    error: "Kunde inte skicka meddelandet. Försök igen.",
    successTitle: "Meddelande skickat!",
    successBody: "Tack för att du hörde av dig. Vi svarar inom 24 timmar.",
    another: "Skicka ett till meddelande",
    subjects: [
      { value: "general", label: "Allmän förfrågan" },
      { value: "order", label: "Orderhjälp" },
      { value: "returns", label: "Returer & byten" },
      { value: "colour-match", label: "Färghjälp" },
      { value: "professional", label: "Professionellt partnerskap" },
      { value: "press", label: "Press & media" },
    ],
  },
  pl: {
    heading: "Wyślij nam wiadomość",
    firstName: "Imię",
    firstNamePh: "Twoje imię",
    lastName: "Nazwisko",
    lastNamePh: "Twoje nazwisko",
    email: "Adres e-mail",
    emailPh: "ty@przyklad.pl",
    phone: "Numer telefonu (opcjonalnie)",
    phonePh: "+48 123 456 789",
    subject: "Temat",
    subjectPh: "Wybierz temat",
    leadType: "Jestem",
    leadTypePh: "Wybierz typ",
    leadTypes: [
      { value: "salon", label: "Salon / Profesjonalista" },
      { value: "wholesaler", label: "Hurtownik / Odsprzedawca" },
      { value: "individual", label: "Osoba prywatna / Użytek osobisty" },
    ],
    orderNumber: "Numer zamówienia (opcjonalnie)",
    orderNumberPh: "np. DS-12345",
    message: "Wiadomość",
    messagePh: "Napisz, jak możemy pomóc...",
    submit: "Wyślij wiadomość",
    sending: "Wysyłanie...",
    error: "Nie udało się wysłać wiadomości. Spróbuj ponownie.",
    successTitle: "Wiadomość wysłana!",
    successBody: "Dziękujemy za kontakt. Odpowiemy w ciągu 24 godzin.",
    another: "Wyślij kolejną wiadomość",
    subjects: [
      { value: "general", label: "Ogólne zapytanie" },
      { value: "order", label: "Obsługa zamówień" },
      { value: "returns", label: "Zwroty i wymiany" },
      { value: "colour-match", label: "Dobór koloru" },
      { value: "professional", label: "Współpraca branżowa" },
      { value: "press", label: "Prasa i media" },
    ],
  },
}

// Keep subject values stable for the API; only labels change by locale.
export function localizedSubjects(locale: Locale) {
  const labels = contactFormLabels[locale]
  return subjectValues.map((v) => ({ value: v, label: labels.subjects.find((s) => s.value === v)?.label ?? v }))
}
