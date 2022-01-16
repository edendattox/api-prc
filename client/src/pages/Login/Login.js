import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import * as Styles from "./styles";
import { useToken } from "../../customHooks/use-token";

const { Container, Wrapper, Title, Form, Input, Button } = Styles;

export const Login = () => {
  const [, setToken] = useToken();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleClick = async (event) => {
    event.preventDefault();

    try {
      const res = await axios.post(`http://localhost:4000/api/user/signin`, {
        email,
        password,
      });
      const { token } = res.data;
      setToken(token);
      console.log("hurray, you successfully logged in");
    } catch (error) {
      setError(error);
    }
    if (!error) {
      navigate("/");
    }
  };

  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            placeholder="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button onClick={handleClick} type="submit">
            Log In
          </Button>
        </Form>
        {error && <Styles.Error>Something went wrong...</Styles.Error>}
        <Link to="/signup" style={{ textDecoration: "none" }}>
          <Button>CREATE A NEW ACCOUNT</Button>
        </Link>
      </Wrapper>
    </Container>
  );
};
