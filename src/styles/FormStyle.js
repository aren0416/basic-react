import styled from "styled-components";

export const Wrap = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #dbdbdb;
  box-sizing: border-box;
  padding: 30px;
`;

export const Title = styled.h3`
  font-size: 40px;
  font-weight: 900;
  margin-bottom: 50px;
`;

export const Input = styled.input`
  all: unset;
  padding: 5px;
  width: 100%;
  padding: 5px;
  border: 1px solid #dbdbdb;
  box-sizing: border-box;
  margin-top: 10px;
`;

export const Button = styled.button`
  all: unset;
  width: 100%;
  height: 40px;
  background-color: salmon;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  margin-top: 50px;
  opacity: ${(props) => props.active};
  cursor: ${(props) => props.cursor};
`;

export const Msg = styled.span`
  font-weight: 300;
  color: crimson;
  font-size: 15px;
  margin: 5px 0;
`;
