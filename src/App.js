import About from './components/About';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import FAQs from './components/FAQs';
import Services from './components/Services';
import Sidebar from './components/Sidebar';
import ContactFormModal from './components/ContactFormModal';
import ApplicationFormNannyModal from './components/ApplicationFormNannyModal';
import { faqs } from './data';
import ApplicationFormParentsModal from './components/ApplicationFormParentsModal';
import StripeCheckout from './components/StripeCheckout';

function App() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <ContactFormModal />
      <ApplicationFormNannyModal />
      <ApplicationFormParentsModal />
      <StripeCheckout />
      <Hero />
      <About />
      <Services />
      <FAQs faqs={faqs} />
      <Footer />
    </>
  );
}

export default App;
