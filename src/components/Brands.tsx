import { bmwImg, geelyImg, hyundaiImg, kiaImg, ladaImg, opelImg, skodaImg, vwImg } from '../assets/images';

const Brands = () => {
  const brands = [
    { name: 'Лада', logo: ladaImg, description: 'ВАЗ / Lada' },
    { name: 'Kia', logo: kiaImg, description: 'KIA' },
    { name: 'Hyundai', logo: hyundaiImg, description: 'Hyundai' },
    { name: 'Volkswagen', logo: vwImg, description: 'VW' },
    { name: 'Skoda', logo: skodaImg, description: 'Škoda' },
    { name: 'BMW', logo: bmwImg, description: 'BMW' },
    { name: 'Opel', logo: opelImg, description: 'Opel' },
    { name: 'Geely', logo: geelyImg, description: 'Geely' },
  ];


  return (
    <section id="brands" className="brands">
      <div className="container">
        <h2>Марки автомобилей</h2>
        <p className="brands-subtitle">Мы работаем с широким спектром автомобильных марок</p>

        <div className="brands-grid">
          {brands.map((brand) => (
            <div key={brand.name} className="brand-item">
              <div className="brand-logo-container">
                <img src={brand.logo} alt={brand.name} className="brand-logo-img" />
              </div>
              <div className="brand-name">{brand.description}</div>
            </div>
          ))}
        </div>

        <div className="brands-note">
          <p>* Также работаем с другими европейскими и азиатскими марками</p>
        </div>

        <div className="btn-container">
          <a href="tel:+79274614916">
            <button
              // onClick={scrollToApplication}
              className="cta-button"
            >
              Узнать подробнее
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Brands;