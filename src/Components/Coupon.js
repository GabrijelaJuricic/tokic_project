import React from "react";
import Stack from "react-bootstrap/Stack";
import { FormControl, Button, Col, Row } from "react-bootstrap";
import { useRecoilState } from "recoil";
import { openCouponFieldState } from "../atoms";

import "./Coupon.css";

const Coupon = () => {
  const [couponOpen, setCouponOpen] = useRecoilState(openCouponFieldState);

  const openCouponFieldHandler = () => {
    setCouponOpen(true);
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
        <Row>
          <Stack direction="horizontal" gap={3} className="mx-3 my-3">
            <Col md={{ span: 3, offset: 7 }}>
              <FormControl
                className="me-auto"
                placeholder="Unesite kod kupona"
              />
            </Col>
            <Col>
              <Button variant="secondary">Primijeni</Button>
            </Col>
          </Stack>
        </Row>
      )}
      <Row>
        <Col md={{ offset: 10 }}>
          <span>
            <strong>UKUPNO:</strong>
          </span>
        </Col>
      </Row>
    </>
  );
};

export default Coupon;
