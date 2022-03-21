import styled from "styled-components";

const Wrap = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  width: 1000px;
  display: flex;
  justify-content: space-between;
`;

const ImgCon = styled.div`
  width: 40%;
  height: 400px;
  img {
    width: 100%;
    height: 100%;
  }
`;

const Con = styled.div`
  width: 55%;
  padding: 40px 0;
`;

const Title = styled.h3`
  font-size: 40px;
  margin-bottom: 20px;
  font-weight: 500;
  color: #1d1d1d;
`;

const P = styled.p`
  font-size: 15px;
  line-height: 24px;
  color: #808080;
  font-weight: 300;
`;

export const Sub = ({ img, title, desc }) => {
  return (
    <Wrap>
      <Container>
        <ImgCon>
          <img src={img} />
        </ImgCon>
        <Con>
          <Title>{title}</Title>
          <P>{desc}</P>
        </Con>
      </Container>
    </Wrap>
  );
};
