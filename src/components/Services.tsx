import React from 'react';

const Services = () => {
  const services = [
    {
      title: 'ТО и ремонт автомобилей',
      description: 'Полное техническое обслуживание и капитальный ремонт двигателя, трансмиссии, подвески',
      icon: '🔧',
      image: 'https://images.unsplash.com/photo-1487754180451-c456f719a1fc?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      title: 'Мелкосрочный ремонт',
      description: 'Замена масла, фильтров, тормозных колодок, диагностика и устранение мелких неисправностей',
      icon: '🛠️',
      image: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      title: 'Автозапчасти на заказ',
      description: 'Оригинальные и качественные аналоги запчастей для всех марок автомобилей с доставкой',
      icon: '📦',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      title: 'Покрасочные работы',
      description: 'Полная и локальная покраска автомобиля, устранение царапин, антикоррозийная обработка',
      icon: '🎨',
      image: 'https://images.unsplash.com/photo-1621905252472-e8592929c26c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    }
  ];

  return (
    <section id="services" className="services">
      <div className="container">
        <h2>Наши услуги</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-image">
                <img src={service.image} alt={service.title} />
                <div className="service-icon">{service.icon}</div>
              </div>
              <div className="service-content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;