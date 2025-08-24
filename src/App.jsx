import Col from "./Col";
import Row from "./Row";

function App() {
  return (
    <>
      <Row>
        <Col>
          <Row className="bg-green-theme text-white p-5">
            <Col>
              <h1 className="text-center">Login</h1>
              <p className="text-center">Sign in to continue</p>
            </Col>
          </Row>
          <Row>form</Row>
        </Col>
      </Row>
    </>
  );
}

export default App;
