/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useGlobalContext } from "./Context";
import FormStepWrapper from "./FormStepWrapper";

const AddressForm = ({
  address1,
  address2,
  address3,
  address4,
  updateFields,
}) => {
  const [isAddress1Valid, setIsAddress1Valid] = useState(false);
  const [isAddress2Valid, setIsAddress2Valid] = useState(false);
  const [isAddress3Valid, setIsAddress3Valid] = useState(false);
  const [isAddress4Valid, setIsAddress4Valid] = useState(false);
  const { toggleApplicationFormParentsModal, setIsFormValid } =
    useGlobalContext();

  const handleAddress1Change = (event) => {
    setIsAddress1Valid(
      event.target.value.length > 0 &&
        event.target.value.length < 36 &&
        /^[#.0-9a-zA-Z\s',-]+$/.test(event.target.value)
    );
    setIsFormValid(
      event.target.value.length > 0 &&
        event.target.value.length < 36 &&
        /^[#.0-9a-zA-Z\s',-]+$/.test(event.target.value) &&
        address2.length > 0 &&
        address2.length < 36 &&
        /^[#.0-9a-zA-Z\s',-]+$/.test(address2) &&
        address3.length > 2 &&
        address3.length < 51 &&
        /^[#.0-9a-zA-Z\s',-]+$/.test(address3) &&
        address4.length > 1 &&
        address4.length < 51 &&
        /^[#.0-9a-zA-Z\s',-]+$/.test(address4)
    );
    updateFields({ address1: event.target.value });
  };

  const handleAddress2Change = (event) => {
    setIsAddress2Valid(
      event.target.value.length > 0 &&
        event.target.value.length < 36 &&
        /^[#.0-9a-zA-Z\s',-]+$/.test(event.target.value)
    );
    setIsFormValid(
      event.target.value.length > 0 &&
        event.target.value.length < 36 &&
        /^[#.0-9a-zA-Z\s',-]+$/.test(event.target.value) &&
        address1.length > 0 &&
        address1.length < 36 &&
        /^[#.0-9a-zA-Z\s',-]+$/.test(address1) &&
        address3.length > 2 &&
        address3.length < 51 &&
        /^[#.0-9a-zA-Z\s',-]+$/.test(address3) &&
        address4.length > 1 &&
        address4.length < 51 &&
        /^[#.0-9a-zA-Z\s',-]+$/.test(address4)
    );
    updateFields({ address2: event.target.value });
  };

  const handleAddress3Change = (event) => {
    setIsAddress3Valid(
      event.target.value.length > 2 &&
        event.target.value.length < 51 &&
        /^[#.0-9a-zA-Z\s',-]+$/.test(event.target.value)
    );
    setIsFormValid(
      event.target.value.length > 2 &&
        event.target.value.length < 51 &&
        /^[#.0-9a-zA-Z\s',-]+$/.test(event.target.value) &&
        address1.length > 0 &&
        address1.length < 36 &&
        /^[#.0-9a-zA-Z\s',-]+$/.test(address1) &&
        address2.length > 0 &&
        address2.length < 36 &&
        /^[#.0-9a-zA-Z\s',-]+$/.test(address2) &&
        address4.length > 1 &&
        address4.length < 51 &&
        /^[#.0-9a-zA-Z\s',-]+$/.test(address4)
    );
    updateFields({ address3: event.target.value });
  };

  const handleAddress4Change = (event) => {
    setIsAddress4Valid(
      event.target.value.length > 1 &&
        event.target.value.length < 51 &&
        /^[#.0-9a-zA-Z\s',-]+$/.test(event.target.value)
    );
    setIsFormValid(
      event.target.value.length > 1 &&
        event.target.value.length < 51 &&
        /^[#.0-9a-zA-Z\s',-]+$/.test(event.target.value) &&
        address1.length > 0 &&
        address1.length < 36 &&
        /^[#.0-9a-zA-Z\s',-]+$/.test(address1) &&
        address2.length > 0 &&
        address2.length < 36 &&
        /^[#.0-9a-zA-Z\s',-]+$/.test(address2) &&
        address3.length > 2 &&
        address3.length < 51 &&
        /^[#.0-9a-zA-Z\s',-]+$/.test(address3)
    );
    updateFields({ address4: event.target.value });
  };

  useEffect(() => {
    setIsFormValid(
      address1.length > 0 &&
        address1.length < 36 &&
        /^[#.0-9a-zA-Z\s',-]+$/.test(address1) &&
        address2.length > 0 &&
        address2.length < 36 &&
        /^[#.0-9a-zA-Z\s',-]+$/.test(address2) &&
        address3.length > 2 &&
        address3.length < 51 &&
        /^[#.0-9a-zA-Z\s',-]+$/.test(address3) &&
        address4.length > 1 &&
        address4.length < 51 &&
        /^[#.0-9a-zA-Z\s',-]+$/.test(address4)
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
        {toggleApplicationFormParentsModal ? "Home Address" : "Your Address"}
      </h3>
      <div className="form-row">
        <input
          required
          className="form-input"
          type="text"
          placeholder="Address line 1"
          minLength={1}
          maxLength={35}
          value={address1}
          onChange={handleAddress1Change}
        />
      </div>
      <div className="form-row">
        <input
          required
          className="form-input"
          type="text"
          placeholder="Address line 2"
          minLength={1}
          maxLength={35}
          value={address2}
          onChange={handleAddress2Change}
        />
      </div>
      <div className="form-row">
        <input
          required
          className="form-input"
          type="text"
          placeholder="Address line 3"
          minLength={3}
          maxLength={50}
          value={address3}
          onChange={handleAddress3Change}
        />
      </div>
      <div className="form-row">
        <input
          required
          className="form-input"
          type="text"
          placeholder="Address line 4"
          minLength={2}
          maxLength={50}
          value={address4}
          onChange={handleAddress4Change}
        />
      </div>
    </FormStepWrapper>
  );
};
export default AddressForm;
