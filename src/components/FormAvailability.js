import { useGlobalContext } from "./Context";
import FormStepWrapper from "./FormStepWrapper";
import ScheduleSelector from "react-schedule-selector";

const AvailabilityForm = ({ availability, updateFields }) => {
  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
  });

  const renderCustomDateCell = (time, selected, innerRef) => (
    <div
      style={{
        height: "2.875vh",
        maxHeight: "1.625rem",
        width: "100%",
        background: selected ? "#ffc8dd" : "#d8d8d8",
        borderRadius: ".125rem",
        cursor: "pointer",
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
      {today === "Tuesday"
        ? date
            .toLocaleString("en-gb", {
              weekday: "short",
            })
            .replace("Tue", "Mon")
            .replace("Wed", "Tue")
            .replace("Thu", "Wed")
            .replace("Fri", "Thu")
            .replace("Sat", "Fri")
        : today === "Wednesday"
        ? date
            .toLocaleString("en-gb", {
              weekday: "short",
            })
            .replace("Wed", "Mon")
            .replace("Thu", "Tue")
            .replace("Fri", "Wed")
            .replace("Sat", "Thu")
            .replace("Sun", "Fri")
        : today === "Thursday"
        ? date
            .toLocaleString("en-gb", {
              weekday: "short",
            })
            .replace("Thu", "Mon")
            .replace("Fri", "Tue")
            .replace("Sat", "Wed")
            .replace("Sun", "Thu")
            .replace("Mon", "Fri")
        : today === "Friday"
        ? date
            .toLocaleString("en-gb", {
              weekday: "short",
            })
            .replace("Fri", "Mon")
            .replace("Sat", "Tue")
            .replace("Sun", "Wed")
            .replace("Mon", "Thu")
            .replace("Tue", "Fri")
        : today === "Saturday"
        ? date
            .toLocaleString("en-gb", {
              weekday: "short",
            })
            .replace("Sat", "Mon")
            .replace("Sun", "Tue")
            .replace("Mon", "Wed")
            .replace("Tue", "Thu")
            .replace("Wed", "Fri")
        : today === "Sunday"
        ? date
            .toLocaleString("en-gb", {
              weekday: "short",
            })
            .replace("Sun", "Mon")
            .replace("Mon", "Tue")
            .replace("Tue", "Wed")
            .replace("Wed", "Thu")
            .replace("Thu", "Fri")
        : date.toLocaleString("en-gb", {
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
