import { FiPlus, FiMinus } from 'react-icons/fi';

const FAQ = ({ id, q, a, expandedQ, handleSetExpandedQ }) => {
  return (
    <div className="question" style={{ order: id }}>
      <header className={id !== expandedQ && 'not-expanded'}>
        <h5>{q}</h5>
        <button
          className="question-btn"
          onClick={
            id === expandedQ
              ? () => handleSetExpandedQ(null)
              : () => handleSetExpandedQ(id)
          }
        >
          {id === expandedQ ? <FiMinus /> : <FiPlus />}
        </button>
      </header>
      {id === expandedQ && <p>{a}</p>}
    </div>
  );
};
export default FAQ;
