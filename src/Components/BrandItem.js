import React from "react";
import { useRecoilState } from "recoil";

import { FormCheck } from "react-bootstrap";
import FormCheckInput from "react-bootstrap/esm/FormCheckInput";
import FormCheckLabel from "react-bootstrap/esm/FormCheckLabel";
import { brandItemState } from "../atoms";

const BrandItem = (props) => {
  const [selectedBrand, setSelectedBrand] = useRecoilState(brandItemState);

  const selectedBrandHandler = () => {
    setSelectedBrand(props.value);
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
