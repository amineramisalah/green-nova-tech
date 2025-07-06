import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <h1>مرحبًا بك في 🌱 GreenNovaTech</h1>
      <p>
        نوفّر حلولًا مبتكرة في مجالات الطاقات المتجددة والذكاء الاصطناعي.
        اكتشف خدماتنا، منتجاتنا، والدورات التدريبية المصممة خصيصًا لدعم التحوّل الطاقوي الذكي في الجزائر.
      </p>
      <a href="/services" className="btn-home">اكتشف خدماتنا</a>
    </div>
  );
}

export default Home;
