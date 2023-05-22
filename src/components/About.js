import aboutImg1 from '../images/image-woman-in-videocall.jpg';
import aboutImg2 from '../images/image-women-videochatting.jpg';
import aboutImg3 from '../images/image-men-in-meeting.jpg';
import aboutImg4 from '../images/image-man-texting.jpg';

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
            We pride ourselves on going the extra mile, taking the time to
            ensure our experienced and qualified nannies meet the exact
            requirements of your family.
          </p>
          <p>
            Through our bespoke recruitment process, we strive to ensure a
            harmonious match, where every piece of the puzzle is met.
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
