import { cleaningImg, detailingImg, remontImg, toImg, zakazImg } from '../assets/images';

const Services = () => {
  const services = [
    {
      title: 'ТО и ремонт автомобилей',
      description: 'Полное техническое обслуживание и капитальный ремонт двигателя, трансмиссии, подвески',
      icon: '🔧',
      image: toImg,
    },
    {
      title: 'Мелкосрочный ремонт',
      description: 'Замена масла, фильтров, тормозных колодок, диагностика и устранение мелких неисправностей',
      icon: '🛠️',
      image: remontImg,
    },
    {
      title: 'Автозапчасти на заказ',
      description: 'Оригинальные и качественные аналоги запчастей для всех марок автомобилей с доставкой',
      icon: '📦',
      image: zakazImg
    },
    {
      title: 'Детейлинг',
      description: 'Профессиональная полировка кузова, нанесение защитных покрытий и восстановление блеска лакокрасочного слоя',
      icon: '✨',
      image: detailingImg,
    },
    {
      title: 'Химчистка',
      description: 'Глубокая очистка салона, выведение пятен и гипоаллергенная обработка всех типов поверхностей',
      icon: '🧼',
      image: cleaningImg,
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
        <div className="btn-container">
          <a href="tel:+79274614916">
            <button
              // onClick={scrollToApplication}
              className="cta-button"
            >
              Позвонить
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;