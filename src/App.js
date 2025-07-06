import React from 'react';
import './App.css';

import Services from './Services'; // ✅ تأكد من وجود الملف بنفس الاسم
import Training from './Training';
import Products from './Products';
import ServiceRequest from './ServiceRequest'; // ✅ الاسم الصحيح
import Contact from './Contact';

function App() {
  return (
    <div className="App">
      <header className="app-header">
        <h1>🌱 GreenNovaTech</h1>
        <nav className="nav-links">
          <a href="#about">من نحن</a>
          <a href="#services">خدماتنا</a>
          <a href="#training">التكوين</a>
          <a href="#products">منتجاتنا</a>
          <a href="#request">طلب الخدمة</a>
          <a href="#contact">اتصل بنا</a>
        </nav>
      </header>

      <section id="about" className="section">
        <h2>من نحن</h2>
        <p>
          GreenNovaTech هي مؤسسة جزائرية ناشئة متخصصة في تقديم حلول ذكية في مجالات الطاقات المتجددة
          والذكاء الاصطناعي. نعمل على دعم الابتكار، وتطوير تقنيات محلية، وتوفير تكوينات ومنتجات مبتكرة
          لصالح الأفراد والمؤسسات.
        </p>
      </section>

      <section id="services" className="section">
        <Services />
      </section>

      <section id="training" className="section">
        <Training />
      </section>

      <section id="products" className="section">
        <Products />
      </section>

      <section id="request" className="section">
        <ServiceRequest />
      </section>

      <section id="contact" className="section">
        <Contact />
      </section>

      <footer className="footer">
        <p>© 2025 GreenNovaTech - جميع الحقوق محفوظة</p>
      </footer>
    </div>
  );
}

export default App;






