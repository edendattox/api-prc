import styled from "styled-components"

export const Container = styled.div`
  position: fixed;
  height: 60px;
  box-shadow: 0 -0.5px #6a6a6a inset;
  padding: 5px 0;
  left: 0;
  right: 0;
  top: 0;
  background-color: #ffffff;
  z-index: 2;
`

export const Wrapper = styled.div`
  padding: 5 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  margin-left: 2rem;
`;

export const Center = styled.div`
  padding: 0.5rem;
  background-color: transparent;
  border-radius: 5rem;
  width: 7rem;
  border: 1px solid blue;
  cursor: pointer;
`;

export const Logo = styled.h1`
  font-weight: bold;
`;

export const CreateEvent = styled.h1`
  font-weight: bold;
  font-size: 1rem;
  text-align: center;
  color: blue;
`;

export const LogoImg = styled.img`
  height: 3rem;
`;

export const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-right: 2rem;
`;

export const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  color: black;
`;

