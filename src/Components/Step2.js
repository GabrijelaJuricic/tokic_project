import React from "react";
import { selectedServicesState } from "../atoms";
import { useRecoilState } from "recoil";
import { Col, Form, FormCheck, Row } from "react-bootstrap";
import FormCheckLabel from "react-bootstrap/esm/FormCheckLabel";
import FormCheckInput from "react-bootstrap/esm/FormCheckInput";

const Step2 = () => {
  const [selectedServices, setSelectedServices] = useRecoilState(
    selectedServicesState
  );
  const { selectedItems } = selectedServices;

  // === Dummy data ===
  var serviceItems = [
    { serviceItem: "Zamjena ulja i filtera", price: 500, id: 66 },
    { serviceItem: "Promjena pakni", price: 450, id: 87 },
    { serviceItem: "Promjena guma", price: 100, id: 73 },
    { serviceItem: "Servis klima uređaja", price: 299, id: 45 },
    { serviceItem: "Balansiranje guma", price: 50, id: 50 },
    { serviceItem: "Zamjena ulja u kočnicama", price: 229, id: 13 },
  ];

  const changeHandler = (e) => {
    const target = e.target;
    const name = target.name;

    setSelectedServices((prevState) => ({
      ...prevState,
      name,
    }));
    console.log(selectedServices);
  };

  return (
    <Form>
      <Row className="mt-4">
        {serviceItems.map((item) => {
          return (
            <Col key={item.id} lg={6}>
              <ul>
                <li style={{ listStyle: "none" }}>
                  <FormCheck
                    type="checkbox"
                    id={item.id}
                    name={item.serviceItem}
                    price={item.price}
                    onChange={changeHandler}
                    checked={selectedItems === item.serviceItem}
                  >
                    <FormCheckInput type="checkbox" />
                    <FormCheckLabel>
                      {item.serviceItem} {`(${item.price} kn)`}
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

export default Step2;
