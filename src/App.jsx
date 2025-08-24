import { Icon } from "@iconify/react/dist/iconify.js";
import Button from "./Button";
import Col from "./Col";
import Input from "./Input";
import Row from "./Row";

function App() {
  return (
    <>
      <Row>
        <Col>
          <Row className="bg-green-theme text-white p-5">
            <Col>
              <h1 className="text-center text-3xl">Login</h1>
              <p className="text-center font-light">Sign in to continue</p>
            </Col>
          </Row>
          <Row center className="justify-center mt-20">
            <Col className={"max-w-xl gap-15 "} center>
              <Input placeholder="USERNAME"></Input>
              <Input
                placeholder="PASSWORD"
                icon={<Icon icon="mdi-light:eye" />}
                iconPosition="right"
                type="password"
              ></Input>
              <Col center>
                <Button className="w-30 ">Login</Button>
                <p>
                  Don't have an Account?{" "}
                  <span className="cursor-pointer underline">SignUp</span>{" "}
                </p>
              </Col>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
}

export default App;
