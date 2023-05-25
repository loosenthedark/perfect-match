import Title from './Title';

const Services = () => {
  return (
    <section className="section section__services">
      <div className="overlay"></div>
      <Title textOne="Schedule a call with us today" />
      <div className="section-center services-center">
        <article className="service">
          <div className="service-info">
            <p className="service-text">
              We pay great attention to detail when identifying your Perfect
              Match nanny.
            </p>
            <p className="service-text">
              Getting to know your family ensures that only the most suitable
              nannies will be offered to you for interview.
            </p>
            <p className="service-text">
              Get in touch today, and let us help you find your Perfect Match!
            </p>
            <a href="#home" className="btn hero-btn hero-btn__secondary">
              Contact us
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};
export default Services;
