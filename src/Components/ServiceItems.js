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

  const changeHandler = () => {
    setSelectedServices((prevState) => {
      return [...prevState, props.name];
    });
    selectedServices.filter((service) => {
      return service.checked;
    });
  };

  return (
    <div>
      <li style={{ listStyle: "none" }}>
        <FormCheck>
          <FormCheckInput
            type="checkbox"
            value={props.name}
            onChange={changeHandler}
            // checked={}
            price={props.price}
          />
          <FormCheckLabel htmlFor={props.id}>
            {props.name} {`(${props.price} kn)`}
          </FormCheckLabel>
        </FormCheck>
      </li>
    </div>
  );
};

export default ServiceItems;
