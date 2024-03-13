import { useState } from "react";
import FAQ from "./FAQ";
import { FiPlus, FiMinus } from "react-icons/fi";
import { useGlobalContext } from "./Context";

const FAQs = ({ faqs }) => {
  const { setToggleContactFormModal } = useGlobalContext();
  const [expandedQuestion, setExpandedQuestion] = useState(null);
  const handleSetExpandedQuestion = (id) => {
    setExpandedQuestion(id);
  };
  return (
    <section className="section section__about section__faqs" id="faqs">
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
                  faqs.length + 1 !== expandedQuestion && "not-expanded"
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
                  Once you have{" "}
                  {/* <button
                    className="question-btn"
                    onClick={() => setToggleContactFormModal(true)}
                  >
                    made initial contact
                  </button>{" "} */}
                  <a href="#contact"> made initial contact </a>
                  with us, we will phone you for a chat and, if you wish to
                  proceed, we will ask you to fill out a simple online form
                  outlining your requirements. We will then arrange our visit to
                  your home at a time of your choosing.
                </p>
              )}
            </div>
            <div className="question">
              <header
                className={
                  faqs.length + 2 !== expandedQuestion && "not-expanded"
                }
              >
                <h5>What if I'm not happy with my nanny?</h5>
                <button
                  className="question-btn"
                  onClick={
                    faqs.length + 2 === expandedQuestion
                      ? () => handleSetExpandedQuestion(null)
                      : () => handleSetExpandedQuestion(faqs.length + 2)
                  }
                >
                  {faqs.length + 2 === expandedQuestion ? (
                    <FiMinus />
                  ) : (
                    <FiPlus />
                  )}
                </button>
              </header>
              {faqs.length + 2 === expandedQuestion && (
                <p>
                  We value the importance of finding the most suitable person to
                  become part of your family, and wish to maintain a
                  long-lasting relationship with those we work with. We will
                  remain available to you and your nanny for the duration of
                  their employment, should you need any advice or to discuss any
                  concerns you might have. For more information on replacement
                  nannies and refunds please see our{" "}
                  <a
                    href="https://loosenthedark.tech/perfect-match-nanny-agency/terms-and-conditions"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Terms and Conditions
                  </a>
                  .
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
