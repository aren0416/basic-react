import { Link } from "react-router-dom";
import styled from "styled-components";
import { routes } from "../routes";

const SHeader = styled.header`
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  background-color: white;
  padding: 0 100px;
`;

const Logo = styled.div`
  width: 200px;
  font-size: 24px;
  font-weight: 700;
`;

const MenuWrap = styled.ul`
  width: 300px;
  display: flex;
  justify-content: space-between;
`;

const Menu = styled.li`
  width: auto;
`;

export const Header = () => {
  return (
    <SHeader>
      <Logo>
        <Link to={routes.home}>로고</Link>
      </Logo>
      <MenuWrap>
        <Menu>
          <Link to={routes.sub01}>메뉴1</Link>
        </Menu>
        <Menu>
          <Link to={routes.sub02}>메뉴2</Link>
        </Menu>
      </MenuWrap>
    </SHeader>
  );
};
