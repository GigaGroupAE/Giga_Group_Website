import { EmailJSResponseStatus, send } from '@emailjs/nodejs';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { name, email, phone, city, project } = req.body;

  if (!name || !email || !phone || !city || !project) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  try {
    const result = await send(
      process.env.EMAILJS_SERVICE_ID,
      process.env.EMAILJS_TEMPLATE_ID,
      {
        from_name: name,
        from_email: email,
        phone,
        city,
        project,
      },
      {
        publicKey: process.env.EMAILJS_PUBLIC_KEY,
        privateKey: process.env.EMAILJS_PRIVATE_KEY,
      }
    );

    res.status(200).json({ success: true, result });
  } catch (error) {
    console.error('EmailJS Error:', error);
    res.status(500).json({ error: 'Failed to send email.' });
  }
}
