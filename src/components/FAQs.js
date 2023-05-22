import { useState } from 'react';
import FAQ from './FAQ';
import { FiPlus, FiMinus } from 'react-icons/fi';

const FAQs = ({ faqs }) => {
  const [expandedQuestion, setExpandedQuestion] = useState(null);
  const handleSetExpandedQuestion = (id) => {
    setExpandedQuestion(id);
  };
  return (
    <section className="section section__about" id="faqs">
      <div className="section-center about-center">
        <article className="about-info about-info__faqs">
          <h3>find out more</h3>
          <h2>Perfect Match explained...</h2>
          <div className="questions-wrapper">
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
            <div className="question">
              <header
                className={
                  faqs.length + 1 !== expandedQuestion && 'not-expanded'
                }
              >
                <h5>How can I apply?</h5>
                <button
                  className="question-btn"
                  onClick={
                    faqs.length + 1 === expandedQuestion
                      ? () => handleSetExpandedQuestion(null)
                      : () => handleSetExpandedQuestion(faqs.length + 1)
                  }
                >
                  {faqs.length + 1 === expandedQuestion ? (
                    <FiMinus />
                  ) : (
                    <FiPlus />
                  )}
                </button>
              </header>
              {faqs.length + 1 === expandedQuestion && (
                <p>
                  Once you have <a href="#home">made initial contact</a> with
                  us, we will phone you for a chat and, if you wish to proceed,
                  we will ask you to fill out a simple online form outlining
                  your requirements. We will then arrange our visit to your home
                  at a time of your choosing.
                </p>
              )}
            </div>
          </div>
          {/* <a href="#about" className="btn">
            read more
          </a> */}
        </article>
      </div>
    </section>
  );
};
export default FAQs;
