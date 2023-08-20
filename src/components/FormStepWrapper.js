const FormStepWrapper = ({ title, children }) => {
  return (
    <>
      {title && (
        <h2 style={{ textAlign: 'center', margin: 0, marginBottom: '2rem' }}>
          {title}
        </h2>
      )}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          position: 'relative'
        }} className={!title ? "fixed-height" : ""}
      >
        {children}
      </div>
    </>
  );
};
export default FormStepWrapper;
