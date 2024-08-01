import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <div style={{backgroundColor: '#333'}}>
        <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Контакты</h3>
          <p>Email: info@example.com</p>
          <p>Телефон: +7 (916) xxx xx xx</p>
          <p>Адрес: ул. Примерная, д. 123, офис 456</p>
        </div>
        <div className="footer-section">
          <h3>Социальные сети</h3>
          <ul className="social-links">
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">Instagram</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>О нас</h3>
          <p>Мы занимаемся сборкой и продажей компьютеров с 20XX года. Наша компания предлагает широкий ассортимент комплектующих и готовых систем.</p>
        </div>
      </div>
    </footer>
    <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Конфигуратор компьютеров</p>
      </div>
    </div>
    
  );
};

export default Footer;
