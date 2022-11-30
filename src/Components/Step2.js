import React from "react";
import {
  Col,
  Form,
  Row,
  FormControl,
  Button,
  FormGroup,
  Stack,
} from "react-bootstrap";
import { useRecoilState } from "recoil";
import {
  totalAmountState,
  openCouponFieldState,
  couponSuccessMessageState,
  couponErrorMessageState,
  couponInputValueState,
  visibleInputFieldState,
} from "../atoms";
import ServiceItems from "./ServiceItems";
import "./Step2.css";

// === Dummy data ===
var serviceItems = [
  { serviceItem: "Zamjena ulja i filtera", price: 500, id: 66 },
  { serviceItem: "Promjena pakni", price: 450, id: 87 },
  { serviceItem: "Promjena guma", price: 100, id: 73 },
  { serviceItem: "Servis klima uređaja", price: 299, id: 45 },
  { serviceItem: "Balansiranje guma", price: 50, id: 50 },
  { serviceItem: "Zamjena ulja u kočnicama", price: 229, id: 13 },
];

const Step2 = () => {
  const [totalAmount, setTotalAmount] = useRecoilState(totalAmountState);
  const [visibleInputField, setVisibleInputField] = useRecoilState(
    visibleInputFieldState
  );
  const [couponSuccessMessage, setCouponSuccessMessage] = useRecoilState(
    couponSuccessMessageState
  );
  const [couponOpen, setCouponOpen] = useRecoilState(openCouponFieldState);
  const [couponErrorMessage, setCouponErrorMessage] = useRecoilState(
    couponErrorMessageState
  );
  const [couponInputValue, setCouponInputValue] = useRecoilState(
    couponInputValueState
  );

  // === Helper functions ===
  const addTotalAmountHandler = (amount) => {
    setTotalAmount(totalAmount + amount);
  };
  const openCouponFieldHandler = () => {
    setCouponOpen(true);
  };

  const handleCouponSubmit = (e) => {
    e.preventDefault();

    if (couponInputValue === "Tokić123") {
      setCouponSuccessMessage("Hvala vam, unijeli ste ispravan kod!");
      setCouponErrorMessage("");
      setVisibleInputField(false);
    } else {
      setCouponErrorMessage("Neispravan kod, pokušajte ponovno.");
      setCouponSuccessMessage("");
      setVisibleInputField(true);
    }
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
      {/* --- Coupon section --- */}
      {!couponOpen && (
        <div className="closed-coupon">
          <a href="#" onClick={openCouponFieldHandler}>
            Imam kupon
          </a>
        </div>
      )}
      {couponOpen && (
        <Form onSubmit={handleCouponSubmit}>
          {visibleInputField ? (
            <FormGroup>
              <Stack direction="horizontal" gap={3}>
                <Col md={{ offset: 7 }}>
                  <FormControl
                    type="text"
                    value={couponInputValue}
                    placeholder="Unesite kod kupona"
                    onChange={(e) => setCouponInputValue(e.target.value)}
                  />
                </Col>
                <Button type="submit">Primijeni</Button>
              </Stack>
            </FormGroup>
          ) : null}

          {couponSuccessMessage && (
            <div className="message">
              <p className="coupon-success-message">{couponSuccessMessage}</p>
              <p className="coupon-calculation-message">
                OSNOVICA: {`${totalAmount.toFixed(2)} kn`}
              </p>
              <p className="coupon-calculation-message">
                Popust (30%): {`${(totalAmount * -0.3).toFixed(2)} kn`}
              </p>
            </div>
          )}

          {couponErrorMessage && (
            <div className="message">
              <p className="coupon-error-message">{couponErrorMessage}</p>
            </div>
          )}
        </Form>
      )}
      {/* --- Coupon section end --- */}

      <Row className="m-3 justify-content-end">
        UKUPNO:{" "}
        {couponSuccessMessage
          ? `${(totalAmount * 0.7).toFixed(2)} kn`
          : `${totalAmount.toFixed(2)} kn`}
      </Row>
    </>
  );
};

export default Step2;
