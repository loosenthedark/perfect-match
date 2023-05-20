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
          <h2>Smarter meetings, all in one place</h2>
          <p>
            Send messages, share files, show your screen, and record your
            meetings — all in one workspace. Control who can join with
            invite-only team access, data encryption, and data export.
          </p>
          <p>
            Send messages, share files, show your screen, and record your
            meetings — all in one workspace. Control who can join with
            invite-only team access, data encryption, and data export.
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
