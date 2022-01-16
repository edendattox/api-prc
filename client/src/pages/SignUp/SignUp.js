import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import * as Styles from "./styles";
import { Error } from "../Login/styles";

const { Container, Wrapper, Title, Form, Input, Button } = Styles;

export const SignUp = () => {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState([]);

  const navigate = useNavigate();

  const onSignUp = async (event) => {
    event.preventDefault();

    try {
      await axios.post(`http://localhost:4000/api/user/signup`, {
        firstname,
        lastname,
        email,
        phone,
        address,
        password,
      });
      console.log("yes, you did it congratulations");
    } catch (error) {
      console.log(error);
      setError(error);
    }
    if (error.length === 0) {
      navigate("/login");
    }
  };

  return (
    <Container>
      <Wrapper>
        <Title>SIGN UP</Title>
        <Form>
          <Input
            type="text"
            placeholder="firstName"
            value={firstname}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <Input
            type="text"
            placeholder="lastName"
            value={lastname}
            onChange={(e) => setLastName(e.target.value)}
          />
          <Input
            type="text"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            type="phone"
            placeholder="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <Input
            type="address"
            placeholder="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <Input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {error.length > 0 && <Error>something went wrong</Error>}
          <Button
            disabled={!email || !password}
            type="submit"
            onClick={onSignUp}
          >
            Sign Up
          </Button>
        </Form>
      </Wrapper>
    </Container>
  );
};
