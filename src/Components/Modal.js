import React from "react";
import Button from "react-bootstrap/Button";
import { Modal } from "react-bootstrap";
import { useRecoilState } from "recoil";
import { pageState } from "../atoms";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Step5 from "./Step5";
import "./Modal.css";

const MyModal = (props) => {
  const [page, setPage] = useRecoilState(pageState);

  // === Dummy data ===
  const stepInstructions = [
    "Korak 1. Odaberite proizvođača vašeg vozila",
    "Korak 2. Odaberite jednu ili više usluga",
    "Korak 3. Vaši kontakt podaci",
    "Korak 4. Pregled i potvrda vašeg odabira",
    "",
  ];

  const prevPageHandler = () => {
    setPage((currPage) => {
      return currPage - 1;
    });
  };
  const nextPageHandler = () => {
    setPage((currPage) => {
      return currPage + 1;
    });
    if (page === stepInstructions.length - 1) {
      props.onHide();
    }
  };

  const pageDisplay = () => {
    switch (page) {
      case 0:
        return <Step1 />;
      case 1:
        return <Step2 />;
      case 2:
        return <Step3 />;
      case 3:
        return <Step4 />;
      case 4:
        return <Step5 />;
    }
  };

  return (
    <Modal {...props} size="lg" centered>
      <Modal.Header className="custom-header" closeButton>
        <Modal.Title
          className="custom-title"
          id="contained-modal-title-vcenter"
        >
          Konfigurator servisa
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="custom-body">
        <p>{stepInstructions[page]}</p>
        {pageDisplay()}
      </Modal.Body>
      <Modal.Footer>
        <Button hidden={page < 1 || page >= 4} onClick={prevPageHandler}>
          Nazad
        </Button>
        <Button onClick={nextPageHandler}>
          {page === stepInstructions.length - 1 ? "Završi" : "Dalje"}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default MyModal;
