import express from 'express';
import validator from 'validator';
const router = express.Router();

router.post('/', async (req, res) => {
  const { name, email, subject, message } = req.body || {};
  if (!name || !email || !message) return res.status(400).json({ error: 'Missing required fields' });
  if (!validator.isEmail(email)) return res.status(400).json({ error: 'Invalid email' });
  const cleanName = validator.escape(String(name).trim()).slice(0, 100);
  const cleanMsg = validator.escape(String(message).trim()).slice(0, 5000);

  const apiKey = process.env.BREVO_API_KEY;
  const sender = process.env.BREVO_SENDER_EMAIL;
  const to = process.env.CONTACT_EMAIL;
  if (!apiKey || !sender || !to) return res.status(500).json({ error: 'Email not configured' });

  try {
    const notify = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: { 'api-key': apiKey, 'content-type': 'application/json' },
      body: JSON.stringify({
        sender: { email: sender, name: 'Portfolio Contact' },
        to: [{ email: to }],
        subject: subject ? `Portfolio: ${subject}` : `Portfolio enquiry from ${cleanName}`,
        htmlContent: `<p>From: ${cleanName} (${email})</p><p>${cleanMsg}</p>`,
      }),
    });
    if (!notify.ok) throw new Error(await notify.text());

    await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: { 'api-key': apiKey, 'content-type': 'application/json' },
      body: JSON.stringify({
        sender: { email: sender, name: 'Soft Tech' },
        to: [{ email }],
        subject: 'Thanks for reaching out',
        htmlContent: `<p>Hi ${cleanName},</p><p>Thanks for your message. I'll get back to you soon.</p>`,
      }),
    });

    res.json({ success: true, message: 'Message sent' });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: 'Failed to send message' });
  }
});

export default router;
