import React from 'react';
import './App.css';
import About from './About';
import Training from './Training';

function App() {
  return (
    <div className="container">
      <header className="header">
  <h1>🌿 Green Nova Tech</h1>
  <p>نحو مستقبل ذكي ومستدام</p>
  <div className="nav-buttons">
  <a href="#about" className="btn">من نحن</a>
  <a href="#services" className="btn">خدماتنا</a>
  <a href="#training" className="btn">التكوين</a>
</div>
<div id="about">
  <section className="about">
    <h2>من نحن</h2>
    <p>
      نحن مؤسسة جزائرية ناشئة تقدم حلولًا مبتكرة في مجالات الطاقات المتجددة والذكاء الاصطناعي،
      نسعى إلى تمكين الأفراد والمجتمع من التحوّل الطاقوي الذكي والمستدام.
    </p>
  </section>
</div>



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

<div id="training">
  <Training />
</div>



      <div id="about">
        <About />
      </div>

      <div id="training">
        <Training />
      </div>

      <footer className="footer">
        <p>📞 اتصل بنا: greennovatech0@gmail.com</p>
      </footer>
    </div>
  );
}

export default App;



