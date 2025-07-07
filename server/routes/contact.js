// routes/contact.js
import express from "express";
import { Resend } from "resend";
import dotenv from "dotenv";

dotenv.config();
const router = express.Router();
const resend = new Resend(process.env.RESEND_API_KEY);

router.post("/send-email", async (req, res) => {
  const { name, email, message, subject } = req.body;

  if (!name || !email || !message || !subject) {
    console.error("Validation Error: All fields are required");
    return res
      .status(400)
      .json({ success: false, error: "All fields are required" });
  }

  try {
    await resend.emails.send({
      from: "Bishr Contact <onboarding@resend.dev>",
      to: "ajua46244@gmail.com",
      subject: `New message from ${name}`,
      html: `
        <div style="font-family: sans-serif;">
          <h2>New Contact Message</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong><br/>${subject}</p>
          <p><strong>Message:</strong><br/>${message}</p>
        </div>
      `,
    });

    res.status(200).json({ success: true });
  } catch (err) {
    console.error("Resend Error:", err.message);
    res.status(500).json({ success: false, error: "Failed to send email" });
  }
});

export default router;
