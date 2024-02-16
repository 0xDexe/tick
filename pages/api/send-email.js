const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

// Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'SES', // Use Amazon SES as the transport service
  auth: {
    user: 'AKIA5M7WE3JGVIDQ5CXU',
    pass: 'BOOsM7M72YhrBWeoQ1/5nJb28tm41q+V77zS1TOhMs0c', 
  },
});

// API route to send emails
router.post('/send-email', async (req, res) => {
  try {
    const { firstName, lastName, email, subject, message } = req.body;

    // Create email message
    const mailOptions = {
      from: email,
      to: 'nilesh@tickboxes.in',
      subject: subject,
      text: `Name: ${firstName} ${lastName}\nEmail: ${email}\nMessage: ${message}`,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    res.status(200).json({ success: true, message: 'Email sent successfully.' });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ success: false, message: 'Failed to send email.' });
  }
});

module.exports = router;
