import { Link } from "react-router-dom";
import styled from "styled-components";
import { routes } from "../routes";

const Wrap = styled.div`
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Title = styled.h3`
  font-size: 30px;
  font-weight: 900;
`;

const P = styled.p`
  margin-top: 30px;
  font-size: 18px;
  a {
    color: blue;
    &:hover {
      text-decoration: underline;
      font-weight: 900;
    }
  }
`;

export const PageNotFound = () => {
  return (
    <Wrap>
      <Title>PageNotFound</Title>
      <P>
        <Link to={routes.home}>홈으로 돌아가기 &rarr;</Link>
      </P>
    </Wrap>
  );
};
