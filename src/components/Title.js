const Title = (props) => {
  const { textOne, textTwo, color } = props;
  return (
    <div style={{ position: 'relative', zIndex: '2' }} className="section-title">
      <h2 style={{ color: color }}>
        {textOne} <span>{textTwo}</span>
      </h2>
    </div>
  );
};
export default Title;
