import { useGlobalContext } from "./Context";

const Hero = () => {
  const { setToggleParentsOrNannyToggleModal } = useGlobalContext();

  return (
    <section className="hero" id="home">
      <div className="hero-banner">
        <h1>
          Let us help you find <br className="hero-line-break-mobile" />
          your <br className="hero-line-break-tablet" />
          Perfect Match
        </h1>
        <p>
          Perfect Match is Ireland’s newest professional nanny agency. We are
          committed to helping you find a warm, caring and responsible nanny,
          who will create a thriving and loving environment for your children.
        </p>
        <p>
          We pride ourselves on going the extra mile, taking the time to ensure
          our experienced and qualified nannies meet the exact requirements of
          your family.
        </p>
        <p>
          Through our bespoke recruitment process, we strive to ensure a
          harmonious match, where every piece of the puzzle is met.
        </p>
        <div className="hero-btn-container">
          <button
            type="button"
            className="btn hero-btn"
            onClick={() => setToggleParentsOrNannyToggleModal(true)}
          >
            Apply today
          </button>
          <a href="#about" className="btn hero-btn hero-btn__secondary">
            Find out more
          </a>
        </div>
      </div>
    </section>
  );
};
export default Hero;
