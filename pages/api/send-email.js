// api/send-email.js

import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { firstName, lastName, email, subject, message } = req.body;

    // Construct sender and recipient email addresses
    const sender = `Nilesh@tickboxes.in`;
    const recipient = "Nilesh@tickboxes.in"; // Replace with your recipient email address

    // Create SES client
    const sesClient = new SESClient({ region: "ap-southeast-1" , credentials: {
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    }}); // Replace "your-region" with your AWS region
    const currentTime = new Date().toLocaleString();

    // Construct email parameters
    const params = {
      Destination: {
        ToAddresses: [recipient],
      },
      Message: {
        Body: {
          Text: {
            Data:'From\n Name: ${firstname} ${lastname}\nEmail: ${email}\nTime: ${currentTime}\nMessage: ${message}' 
          },
        },
        Subject: {
          Data: subject,
        },
      },
      Source: sender,
    };

    try {
      // Send email using SES
      const data = await sesClient.send(new SendEmailCommand(params));
      console.log("Email sent:", data.MessageId);

      // Return success response to the client
      res.status(200).json({ success: true });
    } catch (err) {
      console.error("Error sending email:", err);

      // Return error response to the client
      res.status(500).json({ success: false, error: "Failed to send email" });
    }
  } else {
    // Handle other HTTP methods
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
