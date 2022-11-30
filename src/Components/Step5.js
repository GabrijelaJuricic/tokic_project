import React from "react";
import { Col, Row } from "react-bootstrap";
import "./Step5.css";

const Step5 = () => {
  return (
    <Col className="custom-text-styling">
      <Row>
        <h3>Vaša prijava je uspješno poslana!</h3>
      </Row>
      <Row>
        <p>
          Vaša prijava je uspješno poslana i zaprimljena. Kontaktirat ćemo vas u
          najkraćem mogućem roku. <br /> Hvala Vam!
        </p>
      </Row>
    </Col>
  );
};

export default Step5;
