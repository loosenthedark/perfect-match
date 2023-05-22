const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-banner">
        <h1>
          Nanny Recruitment <br />
          Done Differently
        </h1>
        <p>
          Perfect Match will help you to find a nanny who fulfils all of your
          childcare needs.
        </p>
        <div className="hero-btn-container">
          <a href="#tours" className="btn hero-btn">
            Apply today
          </a>
          <a href="#about" className="btn hero-btn hero-btn__secondary">
            Find out more
          </a>
        </div>
      </div>
    </section>
  );
};
export default Hero;
