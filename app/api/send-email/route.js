import nodemailer from 'nodemailer';

export async function POST(request) {
  const { firstname, lastname, email, phone, service, message } = await request.json();

  // Validate required fields
  if (!firstname || !lastname || !email || !service || !message) {
    console.log('Validation failed: missing fields');
    return new Response(JSON.stringify({ error: 'Missing required fields' }), { status: 400 });
  }

  try {
    let transporter = nodemailer.createTransport({
      host: process.env.NEXT_PUBLIC_EMAIL_HOST,
      port: parseInt(process.env.NEXT_PUBLIC_EMAIL_PORT, 10), // Ensure this is a number
      secure: true, // true for 465, false for other ports
      auth: {
        user: process.env.NEXT_PUBLIC_ADMIN_EMAIL,
        pass: process.env.NEXT_PUBLIC_EMAIL_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: process.env.NEXT_PUBLIC_ADMIN_EMAIL_FULL,
      to: process.env.NEXT_PUBLIC_ADMIN_EMAIL,
      subject: `New Contact Form Submission from ${firstname} ${lastname}`,
      text: `
        You have a new contact form submission:
        Name: ${firstname} ${lastname}
        Email: ${email}
        Phone: ${phone}
        Service: ${service}
        Message: ${message}
      `,
    });

    console.log('Email sent successfully!');
    return new Response(JSON.stringify({ message: 'Email sent successfully!' }), { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(JSON.stringify({ error: 'Error sending email' }), { status: 500 });
  }
}
