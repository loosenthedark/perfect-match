import aboutImg1 from '../images/image-woman-in-videocall.jpg';
import aboutImg2 from '../images/image-women-videochatting.jpg';
import aboutImg3 from '../images/image-nanny-feeding-toddler.jpg';
import aboutImg4 from '../images/image-nanny-outdoors-with-boy-and-girl.jpg';

const About = () => {
  return (
    <section className="section section__about" id="about">
      <div className="section-center about-center">
        <div className="about-img-container">
          <div className="about-img">
            <img
              src={aboutImg1}
              className="about-photo"
              alt="a woman conducting a videocall"
            />
          </div>
          <div className="about-img">
            <img
              src={aboutImg2}
              className="about-photo"
              alt="three women videochatting"
            />
          </div>
          <div className="about-img">
            <img
              src={aboutImg3}
              className="about-photo"
              alt="men in a video meeting"
            />
          </div>
          <div className="about-img">
            <img
              src={aboutImg4}
              className="about-photo"
              alt="a smiling man texting"
            />
          </div>
        </div>
        <article className="about-info">
          <h3>explore the difference</h3>
          <h2>Let us help you find your Perfect Match</h2>
          <p>
            As a boutique nanny agency, we have a devoted, personal and unique
            approach. We will call to your home and meet with you in your own
            environment. We will listen carefully to your needs and expectations
            in order to ensure that your requirements are fully met. We will
            then send you a selection of our most suitable nannies for
            interview.
          </p>
          <p>
            We also offer an optional service, at no added cost, where one of us
            will spend a full day with you and your nanny, training her in your
            home to ensure your needs will be carried out to the very highest
            standard.
          </p>
          <p>
            We believe that this is the most important part of our mission, and
            the one closest to our hearts.
          </p>
          {/* <a href="#about" className="btn">
            read more
          </a> */}
        </article>
      </div>
    </section>
  );
};
export default About;
