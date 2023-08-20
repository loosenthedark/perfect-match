import { useGlobalContext } from "./Context";
import FormStepWrapper from "./FormStepWrapper";
import ScheduleSelector from "react-schedule-selector";

const AvailabilityForm = ({ availability, updateFields }) => {
  const renderCustomDateCell = (time, selected, innerRef) => (
    <div
      style={{
        height: "2.875vh",
        maxHeight: "1.625rem",
        width: "100%",
        background: selected ? "#ffc8dd" : "#d8d8d8",
        borderRadius: ".125rem",
      }}
      ref={innerRef}
    ></div>
  );

  const renderCustomTimeLabel = (time) => (
    <div
      style={{
        width: "100%",
        fontSize: ".7rem",
        paddingRight: ".5rem",
        color: "#87879d",
        display: "flex",
        alignItems: "center",
      }}
    >
      {time
        .toLocaleString("en-gb", {
          hour: "numeric",
          hour12: true,
        })
        .replace("0 pm", "12 pm")
        .toLowerCase()}
    </div>
  );

  const renderCustomDateLabel = (date) => (
    <div
      style={{
        fontSize: ".75rem",
        color: "#87879d",
      }}
    >
      {date.toLocaleString("en-gb", {
        weekday: "short",
      })}
    </div>
  );

  const handleChange = (newAvailability) => {
    updateFields({ availability: newAvailability });
  };

  const { toggleApplicationFormNannyModal } = useGlobalContext();

  return (
    <FormStepWrapper>
      <h3
        className="form-heading"
        style={{
          position: "absolute",
          width: "100%",
         
          lineHeight: "1.5",
        }}
      >
        {toggleApplicationFormNannyModal
          ? "Your Availability"
          : "Times Required"}
      </h3>
      <div className="form-row">
        <label
          htmlFor="available"
          className="label-q form-input label-q__availability"
          style={{
            borderRadius: "unset",
            border: "unset",
            display: "block",
            lineHeight: "1.4",
          }}
        >
          {toggleApplicationFormNannyModal
            ? "What days/hours are you available to work?"
            : "What days/hours will you want your nanny to work?"}
        </label>
        <ScheduleSelector
          id="available"
          selection={availability}
          startDate={new Date("01-05-2060")}
          dateFormat="ddd"
          numDays={5}
          minTime={8}
          maxTime={20}
          hourlyChunks={1}
          rowGap={"2px"}
          columnGap={"2px"}
          renderDateCell={renderCustomDateCell}
          renderTimeLabel={renderCustomTimeLabel}
          renderDateLabel={renderCustomDateLabel}
          onChange={handleChange}
        />
      </div>
    </FormStepWrapper>
  );
};
export default AvailabilityForm;
