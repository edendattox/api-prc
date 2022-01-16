import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
`;

export const Title = styled.h1`
  font-weight: 500px;
  font-size: 40px;
  text-align: center;
  margin-bottom: 30px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  margin-bottom: 30px;
  background-color: #f4f4f4;
  border: 1px solid #f4f4f4;
  outline: none;
  border-radius: 50px;
  padding: 12px 20px;
  color: #393c43;
  font-weight: 600;
  :focus {
    border: 1px solid #d6d6d6;
    transition: all 0.2s;
  }
`;

export const Button = styled.button`
  background-color: transparent;
  border: 3px solid #171a20;
  width: 100%;
  padding: 10px 40px;
  border-radius: 50px;
  text-transform: uppercase;
  color: #171a20;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  outline: none;
`;
