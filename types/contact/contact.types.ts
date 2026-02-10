import { z } from 'zod'

export const contactSchema = z.object({
  firstName: z.string().trim().min(1, { message: 'First name required' }),
  email: z.string().email({ message: 'Valid email required' }),
  message: z.string().trim().min(1, { message: 'Message required' }),
  honeypot: z.string().optional(),
})

export type ContactForm = z.infer<typeof contactSchema>
