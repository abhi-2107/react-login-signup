import { useId, useState } from "react";
import Col from "./Col";
import Row from "./Row";
import Input from "./Input";
import { Icon } from "@iconify/react/dist/iconify.js";
import Button from "./Button";
import { Link, useNavigate } from "react-router-dom";
import { createUserApi } from "./userResource";

function Signup() {
  const [signupStatus, setsignupStatus] = useState({
    data: null,
    error: null,
    loading: false,
  });
  const [userInfo, setUserInfo] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const handleSignup = async () => {
    setsignupStatus({ loading: true, data: null, error: null });
    try {
      createUserApi(userInfo);
      setsignupStatus({ loading: false, data: userInfo, error: null });
      navigate("/auth/login");
    } catch (error) {
      setsignupStatus({ loading: false, data: null, error });
    }
  };

  return (
    <>
      <Row>
        <Col>
          <Row className="bg-green-theme text-white p-5">
            <Col>
              <h1 className="text-center text-3xl">SignUp</h1>
              <p className="text-center font-light">Create new Account</p>
            </Col>
          </Row>
          <Row center className="justify-center  mt-20">
            <Col className={"max-w-xl gap-10 p-3"} center>
              {signupStatus.error && (
                <Alert type="error" closable>
                  Something Went Wrong!
                </Alert>
              )}

              <Row className="gap-10   w-full">
                <Input
                  value={userInfo.name}
                  onChange={(e) =>
                    setUserInfo({ ...userInfo, name: e.target.value })
                  }
                  placeholder="NAME"
                ></Input>
                <Input
                  value={userInfo.email}
                  onChange={(e) =>
                    setUserInfo({ ...userInfo, email: e.target.value })
                  }
                  placeholder="EMAIL"
                  type="email"
                ></Input>
              </Row>
              <Row className="gap-10  w-full">
                <Input
                  value={userInfo.username}
                  onChange={(e) =>
                    setUserInfo({ ...userInfo, username: e.target.value })
                  }
                  placeholder="USERNAME"
                ></Input>
                <Input
                  value={userInfo.phone}
                  onChange={(e) =>
                    setUserInfo({ ...userInfo, phone: e.target.value })
                  }
                  placeholder="PHONE NO."
                ></Input>
              </Row>
              <Row className="gap-10  w-full">
                <Input
                  value={userInfo.password}
                  onChange={(e) =>
                    setUserInfo({ ...userInfo, password: e.target.value })
                  }
                  placeholder="NEW PASSWORD"
                  icon={
                    <Icon
                      onClick={() => setShowPassword((s) => !s)}
                      icon="mdi-light:eye"
                      className="hover:bg-green-200 hover:text-green-800 rounded-full cursor-pointer "
                    />
                  }
                  iconPosition="right"
                  type={showPassword ? "text" : "password"}
                ></Input>
                <Input
                  value={userInfo.confirmPassword}
                  onChange={(e) =>
                    setUserInfo({
                      ...userInfo,
                      confirmPassword: e.target.value,
                    })
                  }
                  placeholder="CONFIRM NEW PASSWORD"
                  icon={
                    <Icon
                      onClick={() => setShowConfirmPassword((s) => !s)}
                      icon="mdi-light:eye"
                      className="hover:bg-green-200 hover:text-green-800 rounded-full cursor-pointer "
                    />
                  }
                  iconPosition="right"
                  type={showConfirmPassword ? "text" : "password"}
                ></Input>
              </Row>

              <Col className="items-end">
                <Button
                  disabled={
                    signupStatus.loading ||
                    userInfo.name.trim().length === 0 ||
                    userInfo.username.trim().length === 0 ||
                    userInfo.email.trim().length === 0 ||
                    userInfo.phone.trim().length === 0 ||
                    userInfo.password.trim().length === 0 ||
                    userInfo.confirmPassword.trim().length === 0
                  }
                  className="w-50 flex justify-center  gap-2 p-2"
                  onClick={() => handleSignup(userInfo)}
                >
                  {signupStatus.loading && <Loader size={2} />} SIGN UP
                </Button>
                <p>
                  Already have an Account?{" "}
                  <span className="cursor-pointer underline">
                    <Link to="/auth/login">Login </Link>{" "}
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

export default Signup;
