// Envoie le formulaire de contact à la fonction serveur (api/contact.js).
// Lève une erreur si le message n'a pas pu être envoyé.
export const sendContactMessage = async (formData) => {
  const response = await fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
  });

  if (!response.ok) {
    throw new Error(`Échec de l'envoi (${response.status})`);
  }
};
