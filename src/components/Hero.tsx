import React from 'react';

const Hero = () => {
  const scrollToApplication = () => {
    const element = document.getElementById('application');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Профессиональный ремонт автомобилей в Казани</h1>
          <p>
            Качественное техническое обслуживание, ремонт и покраска автомобилей.
            Работаем с отечественными, корейскими и европейскими марками.
          </p>
          <button onClick={scrollToApplication} className="cta-button">
            Записаться на ремонт
          </button>
        </div>

        <div className="hero-image">
          <img
            src="https://via.placeholder.com/800x400?text=AM+Motors"
            alt="Автосервис AM Motors"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;