import React from 'react';
import './Products.css';

function Products() {
  return (
    <div className="products-container">
      <h1>🛠️ منتجاتنا</h1>
      <p>نقدّم منتجات مبتكرة وفعّالة في مجال الطاقات المتجددة.</p>

      <div className="product-list">
        <div className="product-box">
          <h3>🌞 مجفف شمسي ذكي</h3>
          <p>
            نظام متكامل لتجفيف المنتجات الفلاحية، يعتمد على الطاقة الشمسية ومدعوم بتقنيات الذكاء الاصطناعي
            لضبط درجة الحرارة والرطوبة تلقائيًا. مثالي لتجفيف الفواكه، الأعشاب، والتوابل.
          </p>
        </div>

        <div className="product-box">
          <h3>♨️ مجمع شمسي حراري</h3>
          <p>
            مصمّم لتسخين الهواء أو الماء باستخدام الطاقة الشمسية، بكفاءة عالية ومواد مقاومة للعوامل المناخية.
            يُستخدم في التطبيقات السكنية أو الصناعية.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Products;
