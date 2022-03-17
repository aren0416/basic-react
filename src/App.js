// import Header from "./components/Header";
// import { Kakao } from "./components/Kakao";
// import { Menu } from "./components/Menu";
// import { menus } from "./db";
// import { kakaoDb } from "./db";

import { BasicStyle } from "./components/BasicStyle";
import { GlobalStyle } from "./styles/GlobalStyle";

const App = () => {
  return (
    <div>
      {/* <Header /> */}
      {/* <Menu foods={menus} />
      <Kakao kakaos={kakaoDb} /> */}
      {/* 3일차 끝 */}
      <GlobalStyle />
      <BasicStyle />
    </div>
  );
};

export default App;
