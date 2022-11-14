import { React, useState } from "react";
import {
  FormControl,
  Button,
  Col,
  Row,
  FormGroup,
  Form,
  Stack,
} from "react-bootstrap";
import { useRecoilState } from "recoil";
import { openCouponFieldState } from "../atoms";

import "./Coupon.css";

const Coupon = () => {
  const [visibleInputField, setVisibleInputField] = useState(true);
  const [couponSuccessMessage, setCouponSuccessMessage] = useState();
  const [couponErrorMessage, setCouponErrorMessage] = useState();
  const [couponInputValue, setCouponInputValue] = useState("");
  const [couponOpen, setCouponOpen] = useRecoilState(openCouponFieldState);

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
    console.log(couponInputValue);
  };

  return (
    <>
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
              <p className="coupon-calculation-message">OSNOVICA:</p>
              <p className="coupon-calculation-message">Popust (30%):</p>
            </div>
          )}

          {couponErrorMessage && (
            <div className="message">
              <p className="coupon-error-message">{couponErrorMessage}</p>
            </div>
          )}
        </Form>
      )}
    </>
  );
};

export default Coupon;
