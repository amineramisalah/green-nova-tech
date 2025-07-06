import React, { useState } from 'react';
import './ServiceRequest.css';

function ServiceRequest() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('📩 تم إرسال طلبك بنجاح! (محاكاة فقط)');
    setForm({ name: '', email: '', service: '', message: '' });
  };

  return (
    <div className="service-container">
      <h1>📋 طلب خدمة</h1>
      <p>يرجى ملء النموذج التالي لتقديم طلبك، وسنقوم بالتواصل معك في أقرب وقت.</p>
      <form onSubmit={handleSubmit} className="service-form">
        <input
          type="text"
          name="name"
          placeholder="الاسم الكامل"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="البريد الإلكتروني"
          value={form.email}
          onChange={handleChange}
          required
        />
        <select name="service" value={form.service} onChange={handleChange} required>
          <option value="">اختر نوع الخدمة</option>
          <option value="استشارة">استشارة طاقوية</option>
          <option value="دراسة">دراسة جدوى</option>
          <option value="منتج">طلب منتج</option>
          <option value="تركيب">تركيب نظام شمسي</option>
          <option value="أخرى">أخرى</option>
        </select>
        <textarea
          name="message"
          placeholder="رسالتك أو تفاصيل إضافية"
          value={form.message}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit" className="btn-submit">📨 إرسال الطلب</button>
      </form>
    </div>
  );
}

export default ServiceRequest;
