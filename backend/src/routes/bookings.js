const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

// Email transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// POST /api/bookings
router.post('/', async (req, res) => {
  const { name, email, phone, date, time, guests, requests } = req.body;

  if (!name || !email || !date || !time) {
    return res.status(400).json({ message: 'Name, email, date and time are required.' });
  }

  try {
    // Email to customer
    await transporter.sendMail({
      from: `"Aurum Restaurant" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: 'Your Reservation at Aurum — Confirmation',
      html: `
        <div style="font-family: Georgia, serif; max-width: 560px; margin: 0 auto; color: #1a1008;">
          <div style="background: #1a1008; padding: 2rem; text-align: center;">
            <h1 style="color: #c9a96e; letter-spacing: 0.3em; font-size: 1.8rem;">AURUM</h1>
          </div>
          <div style="padding: 2.5rem; background: #f5efe6;">
            <p style="color: #c9a96e; font-size: 0.8rem; letter-spacing: 0.2em; text-transform: uppercase;">Reservation Confirmed</p>
            <h2 style="font-size: 1.8rem; font-weight: 300; margin: 0.5rem 0 1.5rem;">Dear ${name},</h2>
            <p style="line-height: 1.8; color: #4a2f1a;">We are delighted to confirm your reservation at Aurum. We look forward to welcoming you.</p>
            <div style="margin: 2rem 0; padding: 1.5rem; border-left: 3px solid #c9a96e; background: #fff;">
              <p><strong>Date:</strong> ${date}</p>
              <p><strong>Time:</strong> ${time}</p>
              <p><strong>Guests:</strong> ${guests}</p>
              ${requests ? `<p><strong>Special Requests:</strong> ${requests}</p>` : ''}
            </div>
            <p style="line-height: 1.8; color: #4a2f1a;">If you need to modify or cancel your reservation, please contact us at least 24 hours in advance.</p>
            <p style="margin-top: 2rem; color: #4a2f1a;">Warmly,<br/><strong>The Aurum Team</strong></p>
          </div>
          <div style="background: #2e1a0e; padding: 1rem; text-align: center;">
            <p style="color: #c9a96e; font-size: 0.75rem;">14 Riverside Drive, Westlands, Nairobi · +254 700 123 456</p>
          </div>
        </div>
      `,
    });

    // Email to restaurant
    await transporter.sendMail({
      from: `"Aurum Bookings" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: `New Reservation — ${name} · ${date} at ${time}`,
      html: `
        <h2>New Reservation</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Time:</strong> ${time}</p>
        <p><strong>Guests:</strong> ${guests}</p>
        <p><strong>Special Requests:</strong> ${requests || 'None'}</p>
      `,
    });

    res.status(201).json({ message: 'Booking confirmed! Check your email.' });

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Booking received but email failed.', error: err.message });
  }
});

module.exports = router;
