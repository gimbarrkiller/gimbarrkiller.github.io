import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import Brands from './components/Brands'
// import ApplicationForm from './components/ApplicationForm'
import Location from './components/Location'
import './App.css'

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Services />
      <Brands />

      {/* <section id="application" className="application-section"> */}
      {/*  <div className="container"> */}
      {/*    <h2>Оставить заявку</h2> */}
      {/*    <p>Заполните форму и мы свяжемся с вами в ближайшее время</p> */}
      {/*    <ApplicationForm /> */}
      {/*  </div> */}
      {/* </section> */}

      <Location />
    </div>
  )
}

export default App
