const Title = (props) => {
  const { textOne, textTwo } = props;
  return (
    <div style={{ position: 'relative', zIndex: '2' }} className="section-title">
      <h2>
        {textOne} <span>{textTwo}</span>
      </h2>
    </div>
  );
};
export default Title;
