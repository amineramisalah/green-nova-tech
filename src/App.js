import React from 'react';
import './App.css';

function App() {
  return (
    <div className="container">
      <header className="header">
        <h1>🌿 Green Nova Tech</h1>
        <p>نحو مستقبل ذكي ومستدام</p>
        <a href="#contact" className="btn">ابدأ الآن</a>
      </header>

      <section className="services">
        <h2>خدماتنا</h2>
        <ul>
          <li>☀️ حلول الطاقة الشمسية الذكية</li>
          <li>🤖 تطبيقات الذكاء الاصطناعي في الزراعة</li>
          <li>💡 منصات التحكم والمراقبة عن بعد</li>
        </ul>
      </section>

      <footer id="contact" className="footer">
        <p>📞 اتصل بنا: greennovatech0@gmail.com</p>
      </footer>
    </div>
  );
}

export default App;

