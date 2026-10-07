import nodemailer from 'nodemailer'

function sanitize(str) {
  return String(str || '')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .trim()
}

function validateContactInput({ name, email, message }) {
  const errors = []
  if (!name || name.trim().length === 0) errors.push('Name is required')
  if (!email || email.trim().length === 0) errors.push('Email is required')
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) errors.push('Invalid email address')
  if (!message || message.trim().length === 0) errors.push('Message is required')
  else if (message.trim().length < 10) errors.push('Message is too short')
  else if (message.trim().length > 2000) errors.push('Message is too long (max 2000 characters)')
  return errors
}

function createTransporter() {
  const { EMAIL_USER, EMAIL_PASSWORD, EMAIL_SERVICE } = process.env
  if (!EMAIL_USER || !EMAIL_PASSWORD) {
    return null
  }
  return nodemailer.createTransport({
    service: EMAIL_SERVICE || 'gmail',
    auth: {
      user: EMAIL_USER,
      pass: EMAIL_PASSWORD,
    },
  })
}

export default async function handler(req, res) {
  // CORS
  res.setHeader('Access-Control-Allow-Credentials', 'true')
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,POST')
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  )

  if (req.method === 'OPTIONS') {
    return res.status(200).end()
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const { name, email, subject, message } = req.body || {}
    const errors = validateContactInput({ name, email, message })
    if (errors.length) {
      return res.status(400).json({ error: errors.join('. ') })
    }

    const safeName = sanitize(name)
    const safeEmail = sanitize(email)
    const safeSubject = sanitize(subject || 'Portfolio Contact Form')
    const safeMessage = sanitize(message)

    const transporter = createTransporter()
    if (!transporter) {
      console.log('[Contact Form] Email credentials not configured in Vercel environment. Received message:')
      console.log(`  From: ${safeName} <${safeEmail}>`)
      console.log(`  Subject: ${safeSubject}`)
      console.log(`  Message: ${safeMessage}`)
      return res.status(200).json({
        success: true,
        message: 'Message received! (Configure EMAIL_USER and EMAIL_PASSWORD in Vercel environment variables for automated email dispatch)',
      })
    }

    const recipient = process.env.EMAIL_RECIPIENT || process.env.EMAIL_USER

    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: recipient,
      replyTo: safeEmail,
      subject: `[Portfolio] ${safeSubject}`,
      text: `Name: ${safeName}\nEmail: ${safeEmail}\nSubject: ${safeSubject}\n\nMessage:\n${safeMessage}`,
      html: `
        <div style="font-family: 'Geist', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f8f9ff; padding: 32px; border-radius: 12px;">
          <h2 style="color: #006194; font-size: 20px; margin: 0 0 16px;">New Portfolio Contact</h2>
          <table style="width: 100%; border-collapse: collapse; background: rgba(255,255,255,0.8); border-radius: 8px; overflow: hidden;">
            <tr style="border-bottom: 1px solid #e5eeff;">
              <td style="padding: 10px 16px; color: #707881; font-size: 12px; font-family: monospace; width: 30%;">NAME</td>
              <td style="padding: 10px 16px; color: #0b1c30; font-size: 14px;">${safeName}</td>
            </tr>
            <tr style="border-bottom: 1px solid #e5eeff;">
              <td style="padding: 10px 16px; color: #707881; font-size: 12px; font-family: monospace;">EMAIL</td>
              <td style="padding: 10px 16px; color: #006194; font-size: 14px;"><a href="mailto:${safeEmail}">${safeEmail}</a></td>
            </tr>
            <tr style="border-bottom: 1px solid #e5eeff;">
              <td style="padding: 10px 16px; color: #707881; font-size: 12px; font-family: monospace;">SUBJECT</td>
              <td style="padding: 10px 16px; color: #0b1c30; font-size: 14px;">${safeSubject}</td>
            </tr>
          </table>
          <div style="margin-top: 16px; background: rgba(255,255,255,0.8); border-radius: 8px; padding: 16px;">
            <p style="color: #707881; font-size: 12px; font-family: monospace; margin: 0 0 8px;">MESSAGE</p>
            <p style="color: #0b1c30; font-size: 14px; line-height: 1.6; margin: 0; white-space: pre-wrap;">${safeMessage}</p>
          </div>
          <p style="color: #bfc7d2; font-size: 11px; font-family: monospace; margin: 16px 0 0; text-align: center;">
            Sent from Atul Prajapati Portfolio
          </p>
        </div>
      `,
    })

    return res.status(200).json({ success: true, message: 'Message sent successfully' })
  } catch (err) {
    console.error('[Contact API] Error:', err.message)
    return res.status(500).json({ error: 'Failed to send message. Please try again or email directly.' })
  }
}
