import React from "react";
import { useRecoilState } from "recoil";

import { FormCheck } from "react-bootstrap";
import FormCheckInput from "react-bootstrap/esm/FormCheckInput";
import FormCheckLabel from "react-bootstrap/esm/FormCheckLabel";
import { brandItemState, buttonDisabledState } from "../atoms";

const BrandItem = (props) => {
  const [selectedBrand, setSelectedBrand] = useRecoilState(brandItemState);
  const [, setButtonDisabled] = useRecoilState(buttonDisabledState);

  const selectedBrandHandler = (e) => {
    setSelectedBrand(props.value);

    if (e.target.checked) {
      setButtonDisabled(false);
    }
  };

  return (
    <li style={{ listStyle: "none" }}>
      <FormCheck type="radio">
        <FormCheckInput
          type="radio"
          value={props.value}
          onChange={selectedBrandHandler}
          checked={props.value === selectedBrand ? true : false}
        />
        <FormCheckLabel>{props.value}</FormCheckLabel>
      </FormCheck>
    </li>
  );
};

export default BrandItem;
