import { useState } from "react";
import Col from "../components/Col";
import Row from "../components/Row";
import Input from "../components/Input";
import { Icon } from "@iconify/react/dist/iconify.js";
import Button from "../components/Button";
import { Link, useNavigate } from "react-router-dom";
import { createUserApi } from "../userResource";
import Alert from "../components/Alert";
import Loader from "../components/Loader";

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
  const [formErrors, setFormErrors] = useState({});

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const handleSignup = async () => {
    const errors = validateForm();
    setFormErrors(errors);
    if (Object.keys(errors).length > 0) {
      return;
    }
    setsignupStatus({ loading: true, data: null, error: null });
    try {
      await createUserApi(userInfo);
      setsignupStatus({ loading: false, data: userInfo, error: null });
      navigate("/auth/login");
    } catch (error) {
      setsignupStatus({ loading: false, data: null, error });
    }
  };

  const validateForm = () => {
    const errors = {};

    if (!/^[A-Za-z\s]+$/.test(userInfo.name.trim())) {
      errors.name = "*Name must contain only alphabets";
    }

    if (!/^[A-Za-z0-9._@!#$%^&*()-]+$/.test(userInfo.username.trim())) {
      errors.username =
        "*Invalid username (only alphanumeric and special characters allowed)";
    }

    if (!/^[A-Za-z0-9._@!#$%^&*()-]+$/.test(userInfo.password)) {
      errors.password =
        "*Password can only contain alphanumeric and special characters";
    }
    if (userInfo.password === userInfo.username) {
      errors.password = "*Password should not be the same as Username";
    }

    if (userInfo.password !== userInfo.confirmPassword) {
      errors.confirmPassword = "*Passwords do not match";
    }

    if (!/^[\w.-]+@gmail\.com$/.test(userInfo.email.trim())) {
      errors.email = "*Email must be a valid Google email (@gmail.com)";
    }

    if (!/^(\+?\d{1,3})?\d{10}$/.test(userInfo.phone.trim())) {
      errors.phone =
        "*Invalid phone number (must include country code and number)";
    }

    return errors;
  };

  return (
    <>
      <Row className="mb-10">
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
                <Col>
                  <Input
                    value={userInfo.name}
                    onChange={(e) =>
                      setUserInfo({ ...userInfo, name: e.target.value })
                    }
                    placeholder="NAME"
                  ></Input>
                  <p className="text-red-500">{formErrors.name}</p>
                </Col>
                <Col>
                  <Input
                    value={userInfo.email}
                    onChange={(e) =>
                      setUserInfo({ ...userInfo, email: e.target.value })
                    }
                    placeholder="EMAIL"
                    type="email"
                  ></Input>
                  <p className="text-red-500">{formErrors.email}</p>
                </Col>
              </Row>
              <Row className="gap-10  w-full">
                <Col>
                  <Input
                    value={userInfo.username}
                    onChange={(e) =>
                      setUserInfo({ ...userInfo, username: e.target.value })
                    }
                    placeholder="USERNAME"
                  ></Input>
                  <p className="text-red-500">{formErrors.username}</p>
                </Col>
                <Col>
                  <Input
                    value={userInfo.phone}
                    onChange={(e) =>
                      setUserInfo({ ...userInfo, phone: e.target.value })
                    }
                    placeholder="PHONE NO."
                  ></Input>
                  <p className="text-red-500">{formErrors.phone}</p>
                </Col>
              </Row>
              <Row className="gap-10  w-full">
                <Col>
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
                  <p className="text-red-500">{formErrors.password}</p>
                </Col>
                <Col>
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
                  {formErrors && (
                    <p className="text-red-500">{formErrors.confirmPassword}</p>
                  )}
                </Col>
              </Row>

              <Col className="items-end">
                <Button
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
