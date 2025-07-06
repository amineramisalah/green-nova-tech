import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <div className="contact-container">
      <h1>📞 اتصل بنا</h1>
      <p>
        يسعدنا تواصلك معنا لأي استفسار أو تعاون في مجالات الطاقات المتجددة والذكاء الاصطناعي.
      </p>

      <div className="contact-details">
        <p><strong>📧 البريد الإلكتروني:</strong> <a href="mailto:greennovatech0@gmail.com">greennovatech0@gmail.com</a></p>
        <p><strong>📞 الهاتف:</strong> <a href="tel:0549979448">0549979448</a></p>
      </div>

      <form className="contact-form">
        <input type="text" name="name" placeholder="الاسم الكامل" required />
        <input type="email" name="email" placeholder="البريد الإلكتروني" required />
        <textarea name="message" placeholder="رسالتك" rows="5" required></textarea>
        <button type="submit" disabled>📨 إرسال (قريبًا)</button>
      </form>
    </div>
  );
}

export default Contact;


