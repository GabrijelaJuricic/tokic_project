import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Step5.css";

const Step5 = () => {
  return (
    <Container>
      <Col className="custom-text-styling">
        <Row>
          <h3>Vaša prijava je uspješno poslana!</h3>
        </Row>
        <Row>
          <p>
            Vaša prijava je uspješno poslana i zaprimljena. Kontaktirat ćemo vas
            u najkraćem mogućem roku. <br /> Hvala Vam!
          </p>
        </Row>
      </Col>
    </Container>
  );
};

export default Step5;
