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

  const prevPageHandler = () => {
    setPage((currPage) => {
      return currPage - 1;
    });
  };
  const nextPageHandler = () => {
    if (page === 4) {
      props.onHide();
    } else if (page > 4) {
      return setPage(0);
    }
    setPage((currPage) => {
      return currPage + 1;
    });
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
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Konfigurator servisa
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>{pageDisplay()}</Modal.Body>
      <Modal.Footer>
        <Button hidden={page < 1 || page >= 4} onClick={prevPageHandler}>
          Nazad
        </Button>
        <Button onClick={nextPageHandler}>
          {page === 4 ? "Pošalji" : "Dalje"}
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default MyModal;
