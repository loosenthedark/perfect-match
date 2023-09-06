const Title = (props) => {
  const { textOne, textTwo, color } = props;
  return (
    <div
      style={{ position: "relative", zIndex: "2" }}
      className={
        "section-title" +
        (props.textOne === "Schedule a call with us today"
          ? " section-title__services"
          : "")
      }
    >
      <h2 style={{ color: color }}>
        {textOne} <span>{textTwo}</span>
      </h2>
    </div>
  );
};
export default Title;
