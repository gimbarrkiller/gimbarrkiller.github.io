import React from 'react';

const Brands = () => {
  const brands = [
    { name: 'Лада', logo: '🏃‍♂️', description: 'ВАЗ / Lada' },
    { name: 'УАЗ', logo: '🚙', description: 'UAZ' },
    { name: 'ГАЗ', logo: '🚐', description: 'GAZ' },
    { name: 'Hyundai', logo: '🏢', description: 'Hyundai' },
    { name: 'Kia', logo: '🎯', description: 'KIA' },
    { name: 'Daewoo', logo: '⭐', description: 'Daewoo' },
    { name: 'Volkswagen', logo: '🅥', description: 'VW' },
    { name: 'Audi', logo: '🅰️', description: 'Audi' },
    { name: 'Skoda', logo: '🏹', description: 'Škoda' },
    { name: 'Toyota', logo: '🔴', description: 'Toyota' },
    { name: 'Honda', logo: '🟢', description: 'Honda' },
    { name: 'Nissan', logo: '⚫', description: 'Nissan' },
    { name: 'BMW', logo: '🔵', description: 'BMW' },
    { name: 'Mercedes', logo: '⭐', description: 'Mercedes-Benz' },
    { name: 'Ford', logo: '🔷', description: 'Ford' }
  ];

  return (
    <section id="brands" className="brands">
      <div className="container">
        <h2>Марки автомобилей</h2>
        <p className="brands-subtitle">Мы работаем с широким спектром автомобильных марок</p>

        <div className="brands-grid">
          {brands.map((brand, index) => (
            <div key={index} className="brand-item">
              <div className="brand-logo">{brand.logo}</div>
              <div className="brand-name">{brand.description}</div>
            </div>
          ))}
        </div>

        <div className="brands-note">
          <p>* Также работаем с другими европейскими и азиатскими марками</p>
        </div>
      </div>
    </section>
  );
};

export default Brands;