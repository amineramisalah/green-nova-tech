import React from 'react';
import './App.css';
import About from './About';

function App() {
  return (
    <div className="container">
      <header className="header">
        <h1>🌿 Green Nova Tech</h1>
        <p>نحو مستقبل ذكي ومستدام</p>
        <a href="#about" className="btn">من نحن</a>
      </header>

      <section className="services">
        <h2>خدماتنا</h2>
        <ul>
          <li>☀️ حلول الطاقة الشمسية الذكية</li>
          <li>🤖 تطبيقات الذكاء الاصطناعي في الزراعة</li>
          <li>💡 منصات التحكم والمراقبة عن بعد</li>
        </ul>
      </section>

      <div id="about">
        <About />
      </div>

      <footer className="footer">
        <p>📞 اتصل بنا: greennovatech0@gmail.com</p>
      </footer>
    </div>
  );
}

export default App;


