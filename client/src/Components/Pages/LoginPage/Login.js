import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { login } from "../../../Services/userService";
import {
  Container,
  FormSection,
  FormCard,
  Form,
  Title,
  Input,
  Button,
  Hr,
  Link,
} from "./Styled";

const Login = () => {
  let history = useHistory();
  const dispatch = useDispatch();
  const [userInformations, setUserInformations] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    document.title = "Log in to PMS";
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    login(userInformations, dispatch);
  };
  return (
    <>
      <Container>
        <FormSection>
          <div
            style={{
              textAlign: "center",
              marginTop: "10px",
              marginBottom: "50px",
              color: "#330e62",
              fontSize: "40px",
              fontWeight: "bold",
            }}
          >
            Project Management System
          </div>
          <FormCard>
            <Form onSubmit={(e) => handleSubmit(e)}>
              <Title>Log in to Project Management System</Title>
              <Input
                type="email"
                placeholder="Enter email"
                required
                value={userInformations.email}
                onChange={(e) =>
                  setUserInformations({
                    ...userInformations,
                    email: e.target.value,
                  })
                }
              />
              <Input
                type="password"
                placeholder="Enter password"
                required
                value={userInformations.password}
                onChange={(e) =>
                  setUserInformations({
                    ...userInformations,
                    password: e.target.value,
                  })
                }
              />
              <Button>Log in</Button>
              <Hr />
              <Link
                fontSize="0.85rem"
                onClick={() => history.push("/register")}
              >
                Sign up for an account
              </Link>
            </Form>
          </FormCard>
        </FormSection>
      </Container>
    </>
  );
};

export default Login;
