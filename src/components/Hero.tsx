import { mainImg } from '../assets/images';

const Hero = () => {
  // const scrollToApplication = () => {
  //   const element = document.getElementById('application');
  //   if (element) {
  //     element.scrollIntoView({ behavior: 'smooth' });
  //   }
  // };

  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Профессиональный ремонт автомобилей в Казани</h1>
            <p>
              Качественное техническое обслуживание, ремонт и покраска автомобилей.
              Работаем с отечественными, корейскими и европейскими марками.
            </p>
            <a href="tel:+79274614916">
              <button
                // onClick={scrollToApplication}
                className="cta-button"
              >
                Записаться на ремонт
              </button>
            </a>
          </div>

          <div className="hero-image">
            <img
              src={mainImg}
              alt="Автосервис AM Motors"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;