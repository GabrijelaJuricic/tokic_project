import React from "react";
import { useRecoilState } from "recoil";
import { selectedServicesState } from "../atoms";
import { FormCheck } from "react-bootstrap";
import FormCheckLabel from "react-bootstrap/esm/FormCheckLabel";
import FormCheckInput from "react-bootstrap/esm/FormCheckInput";

const ServiceItems = (props) => {
  const [selectedServices, setSelectedServices] = useRecoilState(
    selectedServicesState
  );

  const changeHandler = (e) => {
    const value = e.target.value;
    const checked = e.target.checked;

    if (checked) {
      setSelectedServices((prevState) => {
        return [...prevState, value];
      });
    } else {
      setSelectedServices(selectedServices.filter((e) => e !== value));
    }
    checked ? props.onValue(props.price) : props.onValue(props.price * -1.0);
  };

  return (
    <div>
      <li style={{ listStyle: "none" }}>
        <FormCheck>
          <FormCheckInput
            type="checkbox"
            value={props.name}
            price={props.price}
            id={props.id}
            onChange={changeHandler}
          />
          <FormCheckLabel htmlFor={props.id}>
            {props.name} {`(${props.price.toFixed(2)} kn)`}
          </FormCheckLabel>
        </FormCheck>
      </li>
    </div>
  );
};

export default ServiceItems;
