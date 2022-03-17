import styled from "styled-components";
import { conTitleStyle, mainTitleStyle } from "../styles/GlobalStyle";

const Wrap = styled.div`
  width: 400px;
  margin: 50px auto;
`;
const Bg = styled.div`
  height: 400px;
  background-color: gray;
  background: url(${(props) => props.img}) no-repeat center / cover;
`;
const Title = styled.h3`
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  color: ${(props) => props.fontColor};
  margin: 25px 0;
`;
const Con = styled.p`
  font-weight: ${(props) => props.fontWeight};
  font-size: ${(props) => props.fontSize};
  color: ${(props) => props.color};
  opacity: 0.7;
  line-height: 1.5rem;
  .anotherWeight {
    font-weight: 700;
  }
  a {
    color: crimson;
  }
  span {
    color: crimson;
  }
  &:hover {
    text-decoration: underline;
  }
`;

export const BasicStyle = () => {
  const {
    fontSize: mainSize,
    color: mainColor,
    fontWeight: mainWeight,
  } = mainTitleStyle;
  const {
    fontSize: conSize,
    color: conColor,
    fontWeight: conWeight,
  } = conTitleStyle;

  return (
    <>
      <Wrap>
        {/* <Bg
          style={{
            background:
              "url(https://wonism.github.io/static/js-401cd01e8522c5d16b93f7a237b81943.jpg) no-repeat center / cover",
          }}
        /> */}
        <Bg
          img={
            "https://wonism.github.io/static/js-401cd01e8522c5d16b93f7a237b81943.jpg"
          }
        />
        <Title
          fontSize={mainSize}
          fontColor={mainColor}
          fontWeight={mainWeight}
        >
          This is title
        </Title>
        <Con fontSize={conSize} fontColor={conColor} fontWeight={conWeight}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud{" "}
          <span className="anotherWeight">exercitation</span> ullamco laboris
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat{" "}
          <span>
            <a href="#">cupidatat</a>
          </span>{" "}
          non proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.
        </Con>
      </Wrap>
    </>
  );
};
