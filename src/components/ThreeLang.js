import styled from "styled-components";

const Wrap = styled.div`
  background-color: #333333;
  height: 100vh;
`;
const Ul = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 50px;
  padding: 200px;
  color: #f1f1f1;
`;
const Li = styled.li`
  width: 100%;
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.3);
`;
const Img = styled.div`
  width: 100%;
  height: 300px;
  img {
    width: 100%;
    height: 100%;
  }
`;
const TitleWrap = styled.div`
  padding: 30px;
`;
const Title = styled.h3`
  font-size: 30px;
  font-weight: 600;
  margin-bottom: 15px;
`;
const Con = styled.p`
  font-size: 15px;
  font-weight: 300;
  line-height: 1.3rem;
`;

export const ThreeLang = ({ threeLang }) => {
  return (
    <>
      <Wrap>
        <Ul>
          {threeLang.map((langList) => (
            <Li key={langList.id}>
              <Img>{langList.img}</Img>
              <TitleWrap>
                <Title>{langList.title}</Title>
                <Con>{langList.description}</Con>
              </TitleWrap>
            </Li>
          ))}
        </Ul>
      </Wrap>
    </>
  );
};
