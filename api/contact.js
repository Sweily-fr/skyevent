// Fonction serveur Vercel : reçoit le formulaire de contact et l'envoie par e-mail via Resend.
// Variables d'environnement à définir sur Vercel :
// - RESEND_API_KEY (obligatoire)
// - RESEND_FROM (expéditeur sur un domaine vérifié dans Resend, ex. "SkyEvent <contact@skyevent.fr>")

const TO_EMAIL = 'skyevent.fr@hotmail.com';
const DEFAULT_FROM = 'SkyEvent <onboarding@resend.dev>';
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const SHORT_FIELD_MAX = 200;
const MESSAGE_MAX = 5000;

const singleLine = (value) =>
  typeof value === 'string' ? value.replace(/\s+/g, ' ').trim() : '';

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Méthode non autorisée' });
  }

  const body = req.body && typeof req.body === 'object' ? req.body : {};
  const name = singleLine(body.name);
  const email = singleLine(body.email);
  const phone = singleLine(body.phone);
  const event = singleLine(body.event); // absent du formulaire mobile
  const message = typeof body.message === 'string' ? body.message.trim() : '';

  const isValid =
    name && phone && message &&
    EMAIL_PATTERN.test(email) &&
    [name, email, phone, event].every((field) => field.length <= SHORT_FIELD_MAX) &&
    message.length <= MESSAGE_MAX;

  if (!isValid) {
    return res.status(400).json({ error: 'Formulaire invalide' });
  }

  if (!process.env.RESEND_API_KEY) {
    console.error('RESEND_API_KEY manquante');
    return res.status(500).json({ error: "Envoi impossible" });
  }

  const text = [
    `Nom : ${name}`,
    `E-mail : ${email}`,
    `Téléphone : ${phone}`,
    ...(event ? [`Type d'événement : ${event}`] : []),
    '',
    'Message :',
    message,
  ].join('\n');

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: process.env.RESEND_FROM || DEFAULT_FROM,
        to: [TO_EMAIL],
        reply_to: email,
        subject: `Nouvelle demande de contact - ${name}`,
        text,
      }),
    });

    if (!response.ok) {
      console.error('Erreur Resend', response.status, await response.text());
      return res.status(502).json({ error: 'Envoi impossible' });
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Erreur lors de l\'appel à Resend', error);
    return res.status(502).json({ error: 'Envoi impossible' });
  }
};
