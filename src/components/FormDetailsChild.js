import { useState } from 'react';
import FormStepWrapper from './FormStepWrapper';
import { useGlobalContext } from './Context';
import { useEffect } from 'react';

const ChildDetailsForm = ({
  nameChild1,
  dobChild1,
  schoolLocationChild1,
  updateFields,
  numberOfKids,
}) => {
  const inputFieldsChildrenConfig = [
    {
      nameChild: '',
      dobChild: '',
      schoolLocationChild: '',
    },
    {
      nameChild: '',
      dobChild: '',
      schoolLocationChild: '',
    },
    {
      nameChild: '',
      dobChild: '',
      schoolLocationChild: '',
    },
    {
      nameChild: '',
      dobChild: '',
      schoolLocationChild: '',
    },
    {
      nameChild: '',
      dobChild: '',
      schoolLocationChild: '',
    },
    {
      nameChild: '',
      dobChild: '',
      schoolLocationChild: '',
    },
    {
      nameChild: '',
      dobChild: '',
      schoolLocationChild: '',
    },
    {
      nameChild: '',
      dobChild: '',
      schoolLocationChild: '',
    },
  ];

  const [currentChild, setCurrentChild] = useState(1);
  // const numberOfKidsArray = Array.from(
  //   { length: numberOfKids },
  //   (_, i) => i + 1
  // );
  const { setInputFieldsChildren, inputFieldsChildren } = useGlobalContext();
  useEffect(() => {
    setInputFieldsChildren(inputFieldsChildrenConfig.slice(0, numberOfKids));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleFormChange = (i, e) => {
    let data = [...inputFieldsChildren];
    data[i][e.target.name] = e.target.value;
    setInputFieldsChildren(data);
  };

  return (
    <FormStepWrapper>
      <h3
        className="form-heading"
        style={{
          position: 'absolute',
          width: '100%',
          top: '-5vh',
          fontSize: '1.125rem',
        }}
      >
        {'Child #' + currentChild + ' Details'}
      </h3>

      {inputFieldsChildren.map((inputGroup, index) => {
        return (
          <div
            key={index}
            className="current-child-wrapper"
            style={{ display: index + 1 === currentChild ? 'block' : 'none' }}
          >
            <div className="form-row">
              <input
                required
                className="form-input"
                type="text"
                name="nameChild"
                placeholder="Name"
                value={inputGroup.nameChild}
                onChange={(event) => handleFormChange(index, event)}
              />
            </div>
            <div className="form-row">
              <input
                required
                className="form-input"
                name="dobChild"
                placeholder="Date of birth"
                value={inputGroup.dobChild}
                onFocus={(e) => (e.target.type = 'date')}
                onChange={(event) => handleFormChange(index, event)}
              />
            </div>
            <div className="form-row">
              <input
                required
                className="form-input"
                name="schoolLocationChild"
                placeholder="Location of school/Montessori"
                value={inputGroup.schoolLocationChild}
                onChange={(event) => handleFormChange(index, event)}
              />
            </div>
            <div
              style={{
                marginTop: '1vh',
                display: 'flex',
                gap: '.5rem',
                justifyContent: 'flex-end',
              }}
            >
              <button
                type="button"
                className="btn hero-btn back-btn btn-secondary"
              >
                Previous child
              </button>
              <button
                className="btn hero-btn next-btn btn-secondary"
                onClick={() => setCurrentChild(currentChild + 1)}
              >
                Next child
              </button>
            </div>
          </div>
        );
      })}
    </FormStepWrapper>
  );
};
export default ChildDetailsForm;
