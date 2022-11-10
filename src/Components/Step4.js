import React from "react";
import { Row, Col, Button, Container } from "react-bootstrap";

const Step4 = () => {
  let message = (
    <p>
      Molimo vas da još jednom pregledate i potvrdite unesene podatke. Ukoliko
      želite promijeniti neki od podataka, možete to učiniti odabirom gumba za
      uređivanje pored svake od kategorija.
    </p>
  );

  return (
    <>
      <div>{message}</div>
      <Container>
        <Row className="mt-4">
          <Col md={4}>MODEL VOZILA</Col>
          <Col md={2}>
            <Button variant="secondary">Uredi</Button>
          </Col>
          <Col md={4} className="p-0 md-auto">
            IZABRANE USLUGE
          </Col>
          <Col md={2}>
            <Button variant="secondary">Uredi</Button>
          </Col>
          <Row>
            <Col md={6}>Kia</Col>
            <Col md={6}>tralala</Col>
          </Row>
        </Row>
        <Row className="mt-4">
          <Col md={4}>KONTAKT PODACI</Col>
          <Col md={2}>
            <Button variant="secondary">Uredi</Button>
          </Col>
          <Row>
            <Col md={6}>Ime i prezime:</Col>
            <Col md={6}>Napomena:</Col>
          </Row>
          <Row>
            <Col md={3}>E-mail:</Col>
          </Row>
        </Row>
      </Container>
    </>
  );
};

export default Step4;
