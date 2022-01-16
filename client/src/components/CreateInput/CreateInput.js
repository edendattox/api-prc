import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useToken } from "../../customHooks/use-token";

import { Container, Wrapper, Title, Form, Input, Button } from "./styles";

const baseURL = process.env.REACT_APP_BASE_URL;

const CreateInput = () => {
  const initialFormData = Object.freeze({
    title: "",
    detail: "",
    date: "",
    location: "",
  });

  const [formData, updateFormData] = useState(initialFormData);
  const [token] = useToken();
  const navigate = useNavigate();

  const handleChange = (e) => {
    updateFormData({
      ...formData,
      [e.target.name]: e.target.value.trim(),
    });
  };

  const { title, date, detail, location } = formData;

  const handleSubmit = (e) => {
    e.preventDefault();

    const getList = async () => {
      try {
        const res = await axios.post(`${baseURL}/api/event`, {
          title,
          detail,
          date,
          location,
        });
        navigate("/");
      } catch (e) {
        throw new Error("error creating data");
      }
    };
    getList();
  };

  return (
    <Container>
      <Container>
        <Wrapper>
          <Title>Create Event</Title>
          <Form>
            <Input
              type="text"
              placeholder="title"
              name="title"
              onChange={handleChange}
            />
            <Input
              type="text"
              placeholder="detail"
              name="detail"
              onChange={handleChange}
            />
            <Input
              type="text"
              placeholder="date"
              name="date"
              onChange={handleChange}
            />
            <Input
              type="text"
              placeholder="location"
              name="location"
              onChange={handleChange}
            />
            <Button onClick={handleSubmit} type="submit">
              Submit
            </Button>
          </Form>
        </Wrapper>
      </Container>
    </Container>
  );
};

export default CreateInput;
