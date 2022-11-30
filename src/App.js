import { Navbar, Card, Button } from "react-bootstrap";
import MyImage from "./assets/logo.svg";
import { useRecoilState } from "recoil";
import { pageState, showModalState } from "./atoms";
import MyModal from "./Components/Modal";
import "./App.css";

const App = () => {
  const [showModal, setShowModal] = useRecoilState(showModalState);
  const [, setPage] = useRecoilState(pageState);

  const openModalHandler = () => {
    setShowModal(true);
    setPage(0);
  };

  return (
    <>
      <Navbar className="navbar-custom">
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
      </Navbar>
      <Card className="card-custom">
        <Card.Body>
          <Card.Text>Pokreni konfigurator servisa i izračunaj cijenu</Card.Text>
          <Button className="w-50" variant="primary" onClick={openModalHandler}>
            Pokreni
          </Button>
        </Card.Body>
      </Card>
      <MyModal show={showModal} onHide={() => setShowModal(false)} />
    </>
  );
};

export default App;
