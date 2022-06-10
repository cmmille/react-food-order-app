import { useState } from "react";

import Button from "../../UI/Button/Button";
import Input from "../../UI/Input/Input";

import styles from "./Checkout.module.css";

const initialFormState = {
  name: "",
  street: "",
  zip: "",
  city: "",
};
const initialValidity = {
  name: false,
  street: false,
  zip: false,
  city: false,
};

const Checkout = (props) => {
  // State
  const [formValues, setFormValues] = useState(initialFormState);
  const [isValid, setIsValid] = useState(initialValidity);

  const formIsValid =
    isValid.name && isValid.street && isValid.zip && isValid.city;

  // Handlers
  function submitHandler(event) {
    event.preventDefault();
  }
  function changeHandler(event) {
    if (event.target.value.trim() !== "") {
      setIsValid((prev) => {
        return { ...prev, [event.target.name]: true };
      });
    } else {
      setIsValid((prev) => {
        return { ...prev, [event.target.name]: false };
      });
    }
    setFormValues((prev) => {
      return { ...prev, [event.target.name]: event.target.value };
    });
  }
  function buttonClickHandler(){
    props.onConfirm(formValues)
  }

  // Components
  return (
    <div>
      <form action="submit" onSubmit={submitHandler} className={styles.form}>
        <Input
          name="name"
          label="Your Name"
          value={formValues.name}
          isValid={isValid.name}
          onChange={changeHandler}
        />
        <Input
          name="street"
          label="Street Address"
          value={formValues.street}
          isValid={isValid.street}
          onChange={changeHandler}
        />
        <Input
          name="zip"
          label="Postal Code"
          value={formValues.zip}
          isValid={isValid.zip}
          onChange={changeHandler}
        />
        <Input
          name="city"
          label="City"
          value={formValues.city}
          isValid={isValid.city}
          onChange={changeHandler}
        />
        <div className={styles.row}>
          <Button styled="inverted" onClick={props.onClose}>
            Cancel
          </Button>
          <Button
            onClick={formIsValid ? buttonClickHandler : null}
            styled={!formIsValid ? "disabled" : ""}
          >
            Confirm
          </Button>
        </div>
      </form>
    </div>
  );
};
export default Checkout;
