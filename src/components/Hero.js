import { useGlobalContext } from './Context';

const Hero = () => {
  const { setToggleApplicationFormNannyModal } = useGlobalContext();

  return (
    <section className="hero" id="home">
      <div className="hero-banner">
        <h1>
          Nanny Recruitment <br />
          Done Better
        </h1>
        <p>
          Perfect Match will help you to find a nanny who fulfils all of your
          childcare needs.
        </p>
        <div className="hero-btn-container">
          <button
            type="button"
            className="btn hero-btn"
            onClick={() => setToggleApplicationFormNannyModal(true)}
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
