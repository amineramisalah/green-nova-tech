import React from 'react';
import './Services.css'; // إذا لم يكن موجودًا، أنشئه أو أزل هذا السطر

function Services() {
  return (
    <div className="services-container">
      <h1>⚙️ خدماتنا</h1>
      <ul>
        <li>🌞 حلول الطاقات المتجددة</li>
        <li>🤖 تطبيقات الذكاء الاصطناعي في الطاقة</li>
        <li>📊 دراسات الجدوى والاستشارات الطاقوية</li>
        <li>🎓 دورات تدريبية في الطاقات المتجددة</li>
        <li>🛠️ توفير منتجات وتقنيات ذكية</li>
      </ul>
    </div>
  );
}

export default Services;
