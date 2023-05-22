import { services } from '../data';
import Title from './Title';

const Services = () => {
  return (
    <section className="section section__services">
      <div className="overlay"></div>
      <Title textOne="Experience more together" />
      <div className="section-center services-center">
        {services.map((service) => {
          return (
            <article key={service.id} className="service">
              {/* <span className="service-icon">
                <i className={'fas fa-' + service.icon + ' fa-fw'}></i>
              </span> */}
              <div className="service-info">
                {/* <h4 className="service-title">{service.title}</h4> */}
                <p className="service-text">{service.blurb}</p>
                <a href="#tours" className="btn hero-btn hero-btn__secondary">
                  Download v1.3
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};
export default Services;
