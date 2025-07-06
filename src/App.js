import React from 'react';
import './App.css';

import Services from './Services';
import Training from './Training';
import Products from './Products';
import Request from './Request';
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
          <a href="#products">المنتجات</a>
          <a href="#request">طلب الخدمة</a>
          <a href="#contact">اتصل بنا</a>
        </nav>
      </header>

      <section id="about" className="section">
        <h2>من نحن</h2>
        <p>
          GreenNovaTech هي مؤسسة جزائرية ناشئة متخصصة في تقديم حلول ذكية ومبتكرة
          في مجالات الطاقات المتجددة والذكاء الاصطناعي. نعمل على تطوير تقنيات محلية
          لتحقيق الاستقلال الطاقوي وتعزيز الابتكار.
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
        <Request />
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




