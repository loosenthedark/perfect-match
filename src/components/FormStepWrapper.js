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
          height: !title ? '17rem' : null,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        {children}
      </div>
    </>
  );
};
export default FormStepWrapper;