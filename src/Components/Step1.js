import React from "react";
import { Row, Col, Form } from "react-bootstrap";
import BrandItem from "./BrandItem";

const Step1 = () => {
  // --- Dummy data --- //
  const carBrand = [
    { name: "Peugeot", id: 1, value: "peugeot" },
    { name: "Volkswagen", id: 2, value: "volkswagen" },
    { name: "Citroen", id: 3, value: "citroen" },
    { name: "Audi", id: 4, value: "audi" },
    { name: "BMW", id: 5, value: "bmw" },
    { name: "Seat", id: 6, value: "seat" },
    { name: "Alfa Romeo", id: 7, value: "alfa-romeo" },
    { name: "Kia", id: 8, value: "kia" },
    { name: "Hyundai", id: 9, value: "hyundai" },
    { name: "Honda", id: 10, value: "honda" },
    { name: "Toyota", id: 11, value: "toyota" },
  ];

  return (
    <Form>
      <Row className="mt-4">
        {carBrand.map((brand) => {
          return (
            <Col key={brand.id} md={4}>
              <ul>
                <BrandItem value={brand.name} />
              </ul>
            </Col>
          );
        })}
      </Row>
    </Form>
  );
};

export default Step1;
