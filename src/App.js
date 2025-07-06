import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

import Services from './Services';
import Training from './Training';
import Products from './Products';
import ServiceRequest from './ServiceRequest';
import Contact from './Contact';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="app-header">
          <h1>🌱 GreenNovaTech</h1>
          <nav className="nav-links">
            <Link to="/about">من نحن</Link>
            <Link to="/services">خدماتنا</Link>
            <Link to="/training">التكوين</Link>
            <Link to="/products">منتجاتنا</Link>
            <Link to="/request">طلب الخدمة</Link>
            <Link to="/contact">اتصل بنا</Link>
          </nav>
        </header>

        <Routes>
          <Route path="/about" element={
            <section className="section">
              <h2>من نحن</h2>
              <p>
                GreenNovaTech هي مؤسسة جزائرية ناشئة متخصصة في تقديم حلول ذكية في مجالات الطاقات المتجددة
                والذكاء الاصطناعي...
              </p>
            </section>
          } />
          <Route path="/services" element={<Services />} />
          <Route path="/training" element={<Training />} />
          <Route path="/products" element={<Products />} />
          <Route path="/request" element={<ServiceRequest />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <footer className="footer">
          <p>© 2025 GreenNovaTech - جميع الحقوق محفوظة</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;







