import React from "react";
import { useFormik } from "formik";
import {
  Form,
  FormGroup,
  FormLabel,
  FormControl,
  Row,
  Col,
} from "react-bootstrap";
import { contactFormSchema } from "../schemas";
import "./Step3.css";

const Step3 = () => {
  const { values, errors, touched, handleBlur, handleChange } = useFormik({
    initialValues: {
      name: "",
      surname: "",
      email: "",
      remark: "",
    },
    validationSchema: contactFormSchema,
  });

  return (
    <Form>
      <Row className="mb-3 mt-4">
        <FormGroup as={Col}>
          <FormLabel>Ime</FormLabel>
          <FormControl
            id="name"
            type="text"
            placeholder="Ime"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.name && touched.name ? "input-error" : ""}
          />
          {errors.name && touched.name && (
            <p className="error">{errors.name}</p>
          )}
        </FormGroup>

        <FormGroup as={Col}>
          <FormLabel>Prezime</FormLabel>
          <FormControl
            id="surname"
            type="text"
            placeholder="Prezime"
            value={values.surname}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.surname && touched.surname ? "input-error" : ""}
          />
          {errors.surname && touched.surname && (
            <p className="error">{errors.surname}</p>
          )}
        </FormGroup>
      </Row>

      <FormGroup className="mb-3">
        <FormLabel>Email</FormLabel>
        <FormControl
          id="email"
          type="email"
          placeholder="Email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          className={errors.email && touched.email ? "input-error" : ""}
        />
        {errors.email && touched.email && (
          <p className="error">{errors.email}</p>
        )}
      </FormGroup>

      <Form.Group className="mb-3">
        <Form.Label>Napomena</Form.Label>
        <Form.Control
          rows={3}
          id="remark"
          as="textarea"
          placeholder="Napomena"
          value={values.remark}
          onChange={handleChange}
        />
      </Form.Group>
    </Form>
  );
};

export default Step3;
