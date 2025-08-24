import Row from "../components/Row";
import Col from "../components/Col";

import Navbar from "../components/Navbar";

function Home() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4">
        <Row center className="mt-50">
          <Col center>
            <Row>
              <h1 className="text-2xl font-bold">Welcome Home!</h1>{" "}
            </Row>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Home;
