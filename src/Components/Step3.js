import React from "react";
import { useRecoilState } from "recoil";
import { pageState } from "../atoms";
import {
  Form,
  FormGroup,
  FormLabel,
  FormControl,
  Button,
  ModalFooter,
} from "react-bootstrap";
import { Row, Col } from "react-bootstrap";

const Step3 = () => {
  // const [validated, setValidated] = useRecoilState(validatedStep3FormState);
  const [, setPage] = useRecoilState(pageState);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
    }
    // setValidated(true);
    // if (validated) {
    setPage((currPage) => {
      return currPage + 1;
    });
  };

  const backHandler = () => {
    setPage((currPage) => {
      return currPage - 1;
    });
  };

  return (
    <Form
      noValidate
      // validated={validated}
      onSubmit={handleSubmit}
    >
      <Row className="mb-3 mt-4">
        <FormGroup as={Col}>
          <FormLabel>Ime</FormLabel>
          <FormControl required type="text" placeholder="Ime" />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </FormGroup>

        <FormGroup as={Col}>
          <FormLabel>Prezime</FormLabel>
          <FormControl required type="text" placeholder="Prezime" />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </FormGroup>
      </Row>

      <FormGroup className="mb-3">
        <FormLabel>Email</FormLabel>
        <FormControl required type="email" placeholder="Email" />
      </FormGroup>

      <Form.Group className="mb-3">
        <Form.Label>Napomena</Form.Label>
        <Form.Control as="textarea" rows={3} placeholder="Napomena" />
      </Form.Group>

      <ModalFooter className="mt-5">
        <Button onClick={backHandler}>Nazad</Button>
        <Button type="submit">Dalje</Button>
      </ModalFooter>
    </Form>
  );
};

export default Step3;
