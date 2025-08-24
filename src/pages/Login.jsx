import { Icon } from "@iconify/react/dist/iconify.js";
import Button from "../components/Button";
import Col from "../components/Col";
import Input from "../components/Input";
import Row from "../components/Row";
import { useState } from "react";
import { loginUserApi } from "../userResource";
import Loader from "../components/Loader";
import Alert from "../components/Alert";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [loginStatus, setLoginStatus] = useState({
    data: null,
    error: null,
    loading: false,
  });
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const login = async () => {
    setLoginStatus({ loading: true, data: null, error: null });
    try {
      const data = await loginUserApi(name, password);
      setLoginStatus({ loading: false, data, error: null });
      navigate("/");
    } catch (error) {
      setLoginStatus({ loading: false, data: null, error });
    }
  };

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
            <Col className={"max-w-xl gap-15 p-3"} center>
              {loginStatus.error && (
                <Alert type="error" closable>
                  Something Went Wrong!
                </Alert>
              )}
              <Input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="USERNAME"
              ></Input>
              <Input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="PASSWORD"
                icon={<Icon icon="mdi-light:eye" />}
                iconPosition="right"
                type="password"
              ></Input>
              <Col center>
                <Button
                  disabled={
                    loginStatus.loading ||
                    password.trim().length === 0 ||
                    name.trim().length === 0
                  }
                  className="w-30 flex justify-center gap-2 "
                  onClick={() => login()}
                >
                  {loginStatus.loading && <Loader size={2} />} Login
                </Button>
                <p>
                  Don't have an Account?{" "}
                  <span className="cursor-pointer underline">
                    <Link to="/auth/signup">SignUp </Link>{" "}
                  </span>{" "}
                </p>
              </Col>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
}

export default Login;
