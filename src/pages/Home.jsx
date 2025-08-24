import Row from "../components/Row";
import Col from "../components/Col";
import Button from "../components/Button";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container mx-auto h-screen px-4">
      <Row center className="h-screen">
        <Col center>
          <Row>
            <h1 className="text-2xl font-bold">Welcome Home!</h1>{" "}
          </Row>
          <Link to="/auth/login">
            <Button>Login</Button>
          </Link>
          <Link to="/auth/signup">
            <Button>SignUp</Button>
          </Link>
        </Col>
      </Row>
    </div>
  );
}

export default Home;
