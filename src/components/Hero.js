const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-banner">
        <h1>
          Group Chat <br />
          for Everyone
        </h1>
        <p>
        Meet makes it easy to connect with others face-to-face virtually and collaborate across any device.
        </p>
        <div className="hero-btn-container">
        <a href="#tours" className="btn hero-btn">
          Download v1.3
        </a>
        <a href="#tours" className="btn hero-btn hero-btn__secondary">
          What is it?
        </a>
        </div>
      </div>
    </section>
  );
};
export default Hero;
