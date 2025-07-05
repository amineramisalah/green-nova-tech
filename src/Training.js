import React, { useState } from 'react';
import './Training.css';

function Training() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    course: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('✅ تم إرسال التسجيل بنجاح!\n' + JSON.stringify(formData, null, 2));
    // هنا يمكنك ربط الاستمارة بخدمة خارجية مثل Google Forms أو Airtable
    setFormData({ name: '', email: '', course: '', message: '' });
  };

  return (
    <div className="training-container">
      <h1>📚 التكوينات المتاحة</h1>
      <div className="course-list">
        <div className="course-box">
          <h2>🔆 دورة الطاقة الشمسية</h2>
          <p>تعلم تصميم وتركيب أنظمة الطاقة الشمسية من الصفر إلى الاحتراف.</p>
        </div>
        <div className="course-box">
          <h2>🤖 دورة الذكاء الاصطناعي</h2>
          <p>دورة تطبيقية في الذكاء الاصطناعي باستخدام Python وESP32.</p>
        </div>
        <div className="course-box">
          <h2>🌱 دورة الأنظمة الذكية الزراعية</h2>
          <p>تحكم عن بعد، مراقبة بيئية، واستعمال AI لتحسين الإنتاجية.</p>
        </div>
      </div>

      <h3>📋 استمارة التسجيل</h3>
      <form onSubmit={handleSubmit} className="form-container">
        <input
          type="text"
          name="name"
          placeholder="الاسم الكامل"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="البريد الإلكتروني"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <select
          name="course"
          value={formData.course}
          onChange={handleChange}
          required
        >
          <option value="">اختر الدورة</option>
          <option value="الطاقة الشمسية">🔆 الطاقة الشمسية</option>
          <option value="الذكاء الاصطناعي">🤖 الذكاء الاصطناعي</option>
          <option value="الأنظمة الذكية الزراعية">🌱 الأنظمة الذكية الزراعية</option>
        </select>
        <textarea
          name="message"
          placeholder="ملاحظات إضافية (اختياري)"
          value={formData.message}
          onChange={handleChange}
        ></textarea>
        <button type="submit">إرسال التسجيل</button>
      </form>
    </div>
  );
}

export default Training;

