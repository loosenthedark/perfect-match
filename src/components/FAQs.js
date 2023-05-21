import { useState } from 'react';
import FAQ from './FAQ';

const FAQs = ({ faqs }) => {
  const [expandedQuestion, setExpandedQuestion] = useState(null);
  const handleSetExpandedQuestion = (id) => {
    setExpandedQuestion(id);
  };
  console.log(faqs);
  return (
    <section className="section section__about" id="about">
      <div className="section-center about-center">
        <article className="about-info about-info__faqs">
          <h3>find out more</h3>
          <h2>Perfect Match explained...</h2>
          {faqs.map((faq) => {
            const { id } = faq;
            return (
              <FAQ
                key={id}
                {...faq}
                expandedQ={expandedQuestion}
                handleSetExpandedQ={handleSetExpandedQuestion}
              />
            );
          })}
          {/* <a href="#about" className="btn">
            read more
          </a> */}
        </article>
      </div>
    </section>
  );
};
export default FAQs;
