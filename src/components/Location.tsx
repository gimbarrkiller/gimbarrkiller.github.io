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
                <p>г. Казань<br/>ул. Волгоградская, 8, к1</p>
              </div>

              <div className="contact-item">
                <h3>📞 Телефон</h3>
                <p>
                  <a href="tel:+79274614916">+7 (927) 461-49-16</a>
                </p>
              </div>

              <div className="contact-item">
                <h3>🕒 Режим работы</h3>
                <p>
                  Пн-Пт: 8:00 - 19:00<br/>
                  Сб: 9:00 - 17:00
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
                src="https://yandex.ru/map-widget/v1/?um=constructor%3A8670f387bf9375f25df8f947f065882b54a4e13c32b94a7986e7fc5c13c2c739&amp;source=constructor"
                width="100%"
                height="400"
                frameBorder="0"
                title="AM Motors"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;