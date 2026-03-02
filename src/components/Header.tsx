import { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollPosition = window.scrollY;

          // Используем гистерезис для предотвращения дрожания
          if (!isScrolled && scrollPosition > 150) {
            setIsScrolled(true);
          } else if (isScrolled && scrollPosition < 80) {
            setIsScrolled(false);
          }

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isScrolled]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
      <div className="container">
        {!isScrolled && (
          <div className="header-top">
            <div className="logo">
              <h1>AM Motors</h1>
              <span>Автосервис в Казани</span>
            </div>

            <div className="contacts">
              <div className="contact-item">
                <span>📞</span>
                <div>
                  <a href="tel:+78432567890">+7 (843) 256-78-90</a>
                  <a href="tel:+79273456789">+7 (927) 345-67-89</a>
                </div>
              </div>

              <div className="contact-item">
                <span>📍</span>
                <div>г. Казань, ТЦ Кольцо</div>
              </div>

              <div className="social-links">
                <a href="https://t.me/ammotors" target="_blank" rel="noopener noreferrer" className="social-link">
                  <span>📱</span> Telegram
                </a>
                <a href="https://wa.me/79273456789" target="_blank" rel="noopener noreferrer" className="social-link">
                  <span>💬</span> WhatsApp
                </a>
              </div>
            </div>
          </div>
        )}

        <div className="nav-wrapper">
          {isScrolled && (
            <div className="logo-mini">
              <h2>AM Motors</h2>
            </div>
          )}

          <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
            <span></span>
            <span></span>
            <span></span>
          </button>

          <nav className={`navigation ${isMobileMenuOpen ? 'navigation-open' : ''}`}>
            <button onClick={() => scrollToSection('services')} className="nav-link">
              Услуги
            </button>
            <button onClick={() => scrollToSection('brands')} className="nav-link">
              Марки авто
            </button>
            <button onClick={() => scrollToSection('application')} className="nav-link">
              Оставить заявку
            </button>
            <button onClick={() => scrollToSection('location')} className="nav-link">
              Контакты
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;