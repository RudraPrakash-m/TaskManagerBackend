// emailConfig.js
const sgMail = require("@sendgrid/mail");
require("dotenv").config()


// Set your SendGrid API key
sgMail.setApiKey(process.env.EMAIL_API);

/**
 * Send an email using SendGrid
 * @param {string} to - Recipient email
 * @param {string} subject - Email subject
 * @param {string} html - HTML content
 */
const sendEmail = async (to, subject, html) => {
  try {
    await sgMail.send({
      to, // recipient
      from: "team.quantumgroup@gmail.com", // verified sender
      subject,
      html,
    });
    // console.log(`Email sent successfully to ${to}`);
  } catch (error) {
    // console.error("SendGrid error:", error);
    if (error.response) console.error("Response body:", error.response.body);
    throw error; // propagate the error so caller can handle it
  }
};

module.exports = sendEmail;
