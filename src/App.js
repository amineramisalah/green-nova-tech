import React from 'react';
import './App.css';
import Training from './Training';
import Products from './Products';

function App() {
  return (
    <div className="App">
      {/* رأس الصفحة */}
      <header className="header">
        <h1>🌿 Green Nova Tech</h1>
        <p>نحو مستقبل ذكي ومستدام</p>
        <div className="nav-buttons">
          <a href="#about" className="btn">من نحن</a>
          <a href="#services" className="btn">خدماتنا</a>
          <a href="#training" className="btn">التكوين</a>
          <a href="#products" className="btn">منتجاتنا</a>
        </div>
      </header>

      {/* قسم من نحن */}
      <div id="about">
        <section className="about">
          <h2>من نحن</h2>
          <p>
            نحن مؤسسة جزائرية ناشئة تُعنى بابتكار حلول ذكية في مجالات الطاقات المتجددة
            والذكاء الاصطناعي، ونسعى لخلق بيئة تكنولوجية مستدامة تعزز الاقتصاد المحلي.
          </p>
        </section>
      </div>

      {/* قسم خدماتنا */}
      <div id="services">
        <section className="services">
          <h2>خدماتنا</h2>
          <ul>
            <li>🔋 حلول الطاقات المتجددة (شمسية، ريحية، هجينة...)</li>
            <li>🤖 تطبيقات الذكاء الاصطناعي في الطاقات المتجددة</li>
            <li>📊 الاستشارات الطاقوية ودراسات الجدوى</li>
            <li>📚 تقديم دورات تدريبية في مجالات متعددة</li>
            <li>🛠️ توفير منتجات وأجهزة متخصصة</li>
          </ul>
        </section>
      </div>

      {/* قسم التكوين */}
      <div id="training">
        <Training />
      </div>

      {/* قسم المنتجات */}
      <div id="products">
        <Products />
      </div>

      {/* التذييل */}
      <footer className="footer">
        <p>© 2025 Green Nova Tech - جميع الحقوق محفوظة</p>
      </footer>
    </div>
  );
}

export default App;




