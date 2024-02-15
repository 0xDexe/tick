import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { firstName, lastName, email, subject, message } = req.body;

    // Create a Nodemailer transporter
    const transporter = nodemailer.createTransport({
        host: 'your-smtp-host', // Your SMTP server host
        port: 587, // SMTP port (typically 587 for TLS, 465 for SSL)
        secure: false, // Set to true if your SMTP server requires SSL/TLS
        auth: {
          user: 'your-smtp-username', // Your SMTP username
          pass: 'your-smtp-password', // Your SMTP password
        },
      });

    try {
      // Send mail with defined transport object
      
      const info = await transporter.sendMail({
        from: `"${firstName} ${lastName}" <${email}>`,
        to: 'recipient@example.com', // Your email recipient
        subject: subject,
        text: message,
      });

      console.log('Message sent: %s', info.messageId);
      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ error: 'Failed to send email' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
