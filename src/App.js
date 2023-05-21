import About from './components/About';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import FAQs from './components/FAQs';
import Services from './components/Services';
import Sidebar from './components/Sidebar';
// import Tours from './components/Tours';
import { faqs } from './data';

function App() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <Hero />
      <About />
      <Services />
      {/* <Tours /> */}
      <FAQs faqs={faqs} />
      <Footer />
    </>
  );
}

export default App;
