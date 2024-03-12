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
import CookieConsent from './components/CookieConsent';
import { useCookies } from 'react-cookie';
import ParentsOrNannyToggleModal from './components/ParentsOrNannyToggleModal';
import ScrollButton from './components/ScrollButton';
import "react-toastify/dist/ReactToastify.css";
import "react-datepicker/dist/react-datepicker.css";

function App() {
  const [cookies] = useCookies(["cookieConsent"]);

  return (
    <>
      <Navbar />
      <Sidebar />
      <ContactFormModal />
      <ParentsOrNannyToggleModal />
      <ApplicationFormNannyModal />
      <ApplicationFormParentsModal />
      {!cookies.cookieConsent && <CookieConsent />}
      <Hero />
      <About />
      <Services />
      <FAQs faqs={faqs} />
      <ScrollButton />
      <Footer />
    </>
  );
}

export default App;
