import React from "react";
import { useRecoilState } from "recoil";
import { selectedServicesState } from "../atoms";
import { FormCheck } from "react-bootstrap";
import FormCheckLabel from "react-bootstrap/esm/FormCheckLabel";
import FormCheckInput from "react-bootstrap/esm/FormCheckInput";

const ServiceItem = (props) => {
  const [selectedServices, setSelectedServices] = useRecoilState(
    selectedServicesState
  );

  const changeHandler = (e) => {
    console.log(e.target.checked);

    setSelectedServices((prevState) => ({
      ...prevState,
      checkedService: e.target.checked,
    }));
    console.log(selectedServices);
  };

  return (
    <div>
      <li style={{ listStyle: "none" }}>
        <FormCheck type="checkbox">
          <FormCheckInput
            type="checkbox"
            value={props.value}
            onChange={changeHandler}
            price={props.price}
          />
          <FormCheckLabel htmlFor={props.id}>
            {props.value} {`(${props.price} kn)`}
          </FormCheckLabel>
        </FormCheck>
      </li>
    </div>
  );
};

export default ServiceItem;
