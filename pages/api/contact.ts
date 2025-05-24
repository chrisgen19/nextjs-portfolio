// pages/api/contact.ts
import type { NextApiRequest, NextApiResponse } from 'next'

// Import the official Brevo SDK
const SibApiV3Sdk = require('sib-api-v3-sdk')

type ContactData = {
  name: string
  email: string
  message: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  const { name, email, message }: ContactData = req.body

  // Validation
  if (!name || !email || !message) {
    return res.status(400).json({ message: 'All fields are required' })
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return res.status(400).json({ message: 'Invalid email format' })
  }

  if (!process.env.BREVO_API_KEY) {
    console.error('❌ BREVO_API_KEY not found')
    return res.status(500).json({ message: 'Server configuration error' })
  }

  try {
    console.log('🔄 Initializing Brevo SDK...')

    // Configure the official Brevo SDK
    const defaultClient = SibApiV3Sdk.ApiClient.instance
    const apiKey = defaultClient.authentications['api-key']
    apiKey.apiKey = process.env.BREVO_API_KEY

    const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi()

    console.log('📧 Sending notification email...')

    // Send notification email to you
    const notificationEmail = new SibApiV3Sdk.SendSmtpEmail()
    notificationEmail.to = [
      {
        email: process.env.CONTACT_EMAIL || 'your-email@gmail.com',
        name: 'Christian D.'
      }
    ]
    notificationEmail.templateId = parseInt(process.env.BREVO_NOTIFICATION_TEMPLATE_ID || '1') // Replace with your template ID
    notificationEmail.params = {
      name: name,
      email: email,
      message: message
    }
    notificationEmail.replyTo = {
      email: email,
      name: name
    }

    // Send the notification
    const notificationResult = await apiInstance.sendTransacEmail(notificationEmail)
    console.log('✅ Notification sent:', notificationResult)

    console.log('📧 Sending auto-reply email...')

    // Send auto-reply to the contact form submitter
    const autoReplyEmail = new SibApiV3Sdk.SendSmtpEmail()
    autoReplyEmail.to = [
      {
        email: email,
        name: name
      }
    ]
    autoReplyEmail.templateId = parseInt(process.env.BREVO_AUTOREPLY_TEMPLATE_ID || '2') // Replace with your auto-reply template ID
    autoReplyEmail.params = {
      name: name,
      messagePreview: message.substring(0, 200) + (message.length > 200 ? '...' : '')
    }

    // Send the auto-reply
    const autoReplyResult = await apiInstance.sendTransacEmail(autoReplyEmail)
    console.log('✅ Auto-reply sent:', autoReplyResult)

    console.log('🎉 All emails sent successfully via Brevo SDK')
    res.status(200).json({ message: 'Email sent successfully!' })

  } catch (error) {
    console.error('❌ Brevo SDK error:', error)
    
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred'
    
    res.status(500).json({ 
      message: 'Failed to send email. Please try again later.',
      error: process.env.NODE_ENV === 'development' ? errorMessage : undefined
    })
  }
}