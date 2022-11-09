import { Container, Navbar, Card, Button } from "react-bootstrap";
import MyImage from "./assets/logo.svg";
import { Fragment } from "react";
import "./App.css";
import MyModal from "./Components/Modal";
import { pageState, showModalState } from "./atoms";
import { useRecoilState } from "recoil";

const App = () => {
  const [showModal, setShowModal] = useRecoilState(showModalState);
  const [, setPage] = useRecoilState(pageState);

  const openModalHandler = () => {
    setShowModal(true);
    setPage(0);
  };

  return (
    <Fragment>
      <Navbar className="navbar-custom">
        <Container className="justify-content-start">
          <Navbar.Brand href="https://www.tokic.hr/">
            <img
              src={MyImage}
              width="auto"
              height="70"
              className="d-inline-block align-center"
              alt="Konfigurator servisa"
            />
          </Navbar.Brand>
          <Navbar.Text>
            <h4>Konfigurator servisa</h4>
            <p>Izračunajte cijenu servisa</p>
          </Navbar.Text>
        </Container>
      </Navbar>
      <Card className="card-custom">
        <Card.Body>
          <Card.Text>Pokreni konfigurator servisa i izračunaj cijenu</Card.Text>
          <Button variant="primary" onClick={openModalHandler}>
            Pokreni
          </Button>
        </Card.Body>
      </Card>
      <MyModal show={showModal} onHide={() => setShowModal(false)} />
    </Fragment>
  );
};

export default App;
