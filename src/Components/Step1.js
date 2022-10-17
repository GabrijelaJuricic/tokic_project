import React from "react";
import { Form, Row, Col, FormCheck } from "react-bootstrap";
import FormCheckInput from "react-bootstrap/esm/FormCheckInput";
import FormCheckLabel from "react-bootstrap/esm/FormCheckLabel";
import { useRecoilState } from "recoil";
import { brandItemState, buttonDisabledState } from "../atoms";

const Step1 = () => {
  const [brandItem, setBrandItem] = useRecoilState(brandItemState);
  const [, setIsDisabled] = useRecoilState(buttonDisabledState);

  const { checkedBrand } = brandItem;

  // --- Dummy data --- //
  const carBrand = [
    { name: "Peugeot", id: 1, value: "peugeot" },
    { name: "Volkswagen", id: 2, value: "volkswagen" },
    { name: "Citroen", id: 3, value: "citroen" },
    { name: "Audi", id: 4, value: "audi" },
    { name: "BMW", id: 5, value: "bmw" },
    { name: "Seat", id: 6, value: "seat" },
    { name: "Alfa Romeo", id: 7, value: "alfa-romeo" },
    { name: "Kia", id: 8, value: "kia" },
    { name: "Hyundai", id: 9, value: "hyundai" },
    { name: "Honda", id: 10, value: "honda" },
    { name: "Toyota", id: 11, value: "toyota" },
  ];

  const handleChange = (e) => {
    console.log(e.target.value);

    setBrandItem((prevState) => ({
      ...prevState,
      brand: e.target.value,
    }));
    if (brandItem) {
      setIsDisabled(false);
    }
  };

  return (
    <Form>
      <Row className="mt-4">
        {carBrand.map((brand) => {
          return (
            <Col key={brand.id} lg={6}>
              <ul>
                <li style={{ listStyle: "none" }}>
                  <FormCheck>
                    <FormCheckLabel>
                      <FormCheckInput
                        type="radio"
                        value={brand.value}
                        onChange={handleChange}
                        checked={checkedBrand === brand.value}
                      />
                      {brand.name}
                    </FormCheckLabel>
                  </FormCheck>
                </li>
              </ul>
            </Col>
          );
        })}
      </Row>
    </Form>
  );
};

export default Step1;
