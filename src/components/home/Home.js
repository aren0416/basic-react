import { Link } from "react-router-dom";
import styled from "styled-components";
import { routes } from "../../routes";
import { PageTitle } from "../PageTitle";

const Wrap = styled.div``;

const Section01 = styled.section`
  width: 100%;
  height: 600px;
  background: url(https://www.4flix.co.kr/data/file/gallery/3024265115_rWVwURDd_27705a7d5fa7d22aea3cf26ea8812f111a84cbed.jpg)
    no-repeat center / cover;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Title = styled.h3`
  font-size: 40px;
  letter-spacing: 20px;
  font-weight: 700;
  margin-bottom: 20px;
`;

const P = styled.p`
  font-size: 18px;
  letter-spacing: 10px;
`;

const Section02 = styled.section`
  padding: 100px 0;
`;

const Container = styled.div`
  width: 1000px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;

const Con = styled.div`
  width: 47%;
  height: 500px;
  box-shadow: 20px 20px 35px rgba(0, 0, 0, 0.3);
  transition-duration: 0.2s;
  img {
    width: 100%;
    height: 100%;
  }
  &:hover {
    transform: translate(10px, 10px);
    box-shadow: none;
  }
`;

export const Home = () => {
  return (
    <div>
      <PageTitle title={"Home"} />
      <Wrap>
        <Section01>
          <Title>ABSTRACT</Title>
          <P>BACKGROUND</P>
        </Section01>
        <Section02>
          <Container>
            <Con>
              <Link to={routes.sub01}>
                <img src="https://img.insight.co.kr/static/2020/09/22/700/97so3hz72p4nq982if5l.jpg" />
              </Link>
            </Con>
            <Con>
              <Link to={routes.sub02}>
                <img src="https://yt3.ggpht.com/LQFf-dk_iKNQpammhtOxRuS67QJhsWaEyg0OyFE5UD7PcatFaOzR6q23NnGkSbeMm0kYPeTD5w=s900-c-k-c0x00ffffff-no-rj" />
              </Link>
            </Con>
          </Container>
        </Section02>
      </Wrap>
    </div>
  );
};
