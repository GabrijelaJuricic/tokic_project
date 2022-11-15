import React from "react";
import { Col, Form, Row } from "react-bootstrap";
import { totalAmountState, couponSuccessMessageState } from "../atoms";
import { useRecoilState, useRecoilValue } from "recoil";
import ServiceItems from "./ServiceItems";
import Coupon from "./Coupon";

const Step2 = () => {
  const [totalAmount, setTotalAmount] = useRecoilState(totalAmountState);
  const successMessage = useRecoilValue(couponSuccessMessageState);

  // === Dummy data ===
  var serviceItems = [
    { serviceItem: "Zamjena ulja i filtera", price: 500, id: 66 },
    { serviceItem: "Promjena pakni", price: 450, id: 87 },
    { serviceItem: "Promjena guma", price: 100, id: 73 },
    { serviceItem: "Servis klima uređaja", price: 299, id: 45 },
    { serviceItem: "Balansiranje guma", price: 50, id: 50 },
    { serviceItem: "Zamjena ulja u kočnicama", price: 229, id: 13 },
  ];

  const addTotalAmountHandler = (amount) => {
    setTotalAmount(totalAmount + amount);
  };

  return (
    <>
      <Form>
        <Row className="mt-4">
          {serviceItems.map((item) => {
            return (
              <Col key={item.id} lg={6}>
                <ul>
                  <ServiceItems
                    name={item.serviceItem}
                    price={item.price}
                    id={item.id}
                    onValue={addTotalAmountHandler}
                  ></ServiceItems>
                </ul>
              </Col>
            );
          })}
        </Row>
      </Form>
      <Coupon></Coupon>
      <Row className="m-3 justify-content-end">
        UKUPNO:{" "}
        {successMessage
          ? `${(totalAmount * 0.7).toFixed(2)} kn`
          : `${totalAmount.toFixed(2)} kn`}
      </Row>
    </>
  );
};

export default Step2;
