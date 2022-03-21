import styled from "styled-components";
import { PageTitle } from "../PageTitle";

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

export const Sub02 = () => {
  return (
    <div>
      <PageTitle title={"Sub02"} />
      <Wrap>
        <Container>
          <ImgCon>
            <img src="https://yt3.ggpht.com/LQFf-dk_iKNQpammhtOxRuS67QJhsWaEyg0OyFE5UD7PcatFaOzR6q23NnGkSbeMm0kYPeTD5w=s900-c-k-c0x00ffffff-no-rj" />
          </ImgCon>
          <Con>
            <Title>서브페이지2</Title>
            <P>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic
            </P>
          </Con>
        </Container>
      </Wrap>
    </div>
  );
};
