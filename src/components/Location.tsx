import React from 'react';

const Location = () => {
  return (
    <section id="location" className="location">
      <div className="container">
        <h2>Где нас найти</h2>

        <div className="location-content">
          <div className="location-info">
            <div className="contact-details">
              <div className="contact-item">
                <h3>📍 Адрес</h3>
                <p>г. Казань, ТЦ Кольцо<br/>ул. Примерная, д. 123</p>
              </div>

              <div className="contact-item">
                <h3>📞 Телефоны</h3>
                <p>
                  <a href="tel:+78432567890">+7 (843) 256-78-90</a><br/>
                  <a href="tel:+79273456789">+7 (927) 345-67-89</a>
                </p>
              </div>

              <div className="contact-item">
                <h3>🕒 Режим работы</h3>
                <p>
                  Пн-Пт: 8:00 - 19:00<br/>
                  Сб: 9:00 - 17:00<br/>
                  Вс: выходной
                </p>
              </div>

              <div className="contact-item">
                <h3>💬 Мессенджеры</h3>
                <div className="messengers">
                  <a href="https://t.me/ammotors" target="_blank" rel="noopener noreferrer" className="messenger-link">
                    <span>📱</span> Telegram
                  </a>
                  <a href="https://wa.me/79273456789" target="_blank" rel="noopener noreferrer" className="messenger-link">
                    <span>💬</span> WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="map-container">
            <div className="map-placeholder">
              <iframe
                src="https://yandex.ru/map-widget/v1/?um=constructor%3Afb73b8c4b8b5a72e2b8c4b4f4b7b8c4&amp;source=constructor"
                width="100%"
                height="400"
                frameBorder="0"
                title="AM Motors на карте"
              ></iframe>
              <div className="map-overlay">
                <p>🗺️ Карта с точным расположением</p>
                <small>ТЦ Кольцо, Казань</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;