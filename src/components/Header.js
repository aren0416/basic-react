import { Link } from "react-router-dom";
import styled from "styled-components";
import { routes } from "../routes";

const SHeader = styled.header`
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MenuWrap = styled.ul`
  display: flex;
`;

const Menu = styled.li`
  margin-left: 50px;
`;

export const Header = () => {
  return (
    <SHeader>
      <MenuWrap>
        <Menu>
          <Link to={routes.home}>Home</Link>
        </Menu>
        <Menu>
          <Link to={routes.sub01}>menu1</Link>
        </Menu>
        <Menu>
          <Link to={routes.sub02}>menu2</Link>
        </Menu>
      </MenuWrap>
    </SHeader>
  );
};
