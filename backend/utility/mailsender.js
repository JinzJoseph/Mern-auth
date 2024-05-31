import nodemailer from "nodemailer";
import bcrypt from "bcrypt";
export const mailSender = async (email, title, body) => {
  try {
    console.log(`Sending email to: ${email}`);
    console.log(`Title: ${title}`);
    console.log(`Body: ${body}`);

    // Create a Transporter to send emails
    let transporter = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      port: 587,
      secure: true,
      auth: {
        user: "jinsjosephkunnummel000@gmail.com",
        pass: "iwxn frii vxbd xybm",
      },
    });

    console.log("Transporter created");

    // Send email to users
    const mailOptions = {
      from: process.env.MAIL_FROM,
      to: email,
      subject: "Account Verification - Action Required",
      html: `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 20px auto; padding: 20px; background-color: #f9f9f9; border-radius: 10px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
          <h1 style="color: #3498db; text-align: center;"></h1>
          <p style="text-align: center; font-size: 18px;">Dear User,</p>
          <p style="text-align: center; font-size: 16px;">Thank you for using our service. To complete your login, please enter the following OTP (One-Time Password):</p>
          <h2 style="color: #2ecc71; text-align: center; font-size: 36px; margin: 20px 0;">${body}</h2>
        
          <p style="text-align: center; font-size: 16px; margin-bottom: 20px;">For security reasons, do not share your OTP with anyone.</p>
          <p style="text-align: center; font-size: 16px;">If you have any questions or concerns, please contact our support team.</p>
          <p style="text-align: center; font-size: 16px; margin: 20px 0;">Best regards,<br>Shoetopia</p>
        </div>
      `,
    };

    // hash the otp

    await transporter.sendMail(mailOptions);
    console.log("Email sent: ", mailOptions);
    return info;
  } catch (error) {
    console.error("Error sending email: ", error.message);
  }
};
