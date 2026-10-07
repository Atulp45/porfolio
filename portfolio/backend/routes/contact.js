import { Router } from 'express'
import rateLimit from 'express-rate-limit'
import { sendContactEmail } from '../controllers/contact.js'

const router = Router()

// Stricter rate limit for contact endpoint
const contactLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 5,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: 'Too many messages sent. Please try again in an hour.' },
})

router.post('/', contactLimiter, sendContactEmail)

export default router
