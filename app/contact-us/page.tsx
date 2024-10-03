// src/app/contact-us/page.tsx

import React from 'react';

const ContactUsPage = () => {
  return (
    <div className="contact-container">
      <h1 className="contact-title">GET IN TOUCH WITH US</h1>
      <p className="contact-description">
        We’d love to hear from you! Whether you have a question or just want to say hello, fill out the form below, and we’ll get back to you soon.
      </p>

      <form className="contact-form">
        <input type="text" placeholder="Your Name" className="contact-input" />
        <input type="email" placeholder="Your Email" className="contact-input" />
        <textarea placeholder="Your Message" className="contact-textarea" rows={5}></textarea>
        <button type="submit" className="contact-button">Send Message</button>
      </form>
    </div>
  );
};

export default ContactUsPage;
