import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const mainTitleStyle = {
  fontSize: "25px",
  color: "#333",
  fontWeight: "600",
};

export const conTitleStyle = {
  fontSize: "15px",
  color: "#666",
  fontWeight: "300",
};

export const GlobalStyle = createGlobalStyle`
    ${reset}
    *{ box-sizing: border-box;}
    body { 
        font-family: 'Noto Sans KR', sans-serif;    
    }
    a{ text-decoration: none; color: #1d1d1d;}
`;
