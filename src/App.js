// import Header from "./components/Header";
// import { Kakao } from "./components/Kakao";
// import { Menu } from "./components/Menu";
// import { menus } from "./db";
// import { kakaoDb } from "./db";

import { GlobalStyle } from "./styles/GlobalStyle";
// import { BasicStyle } from "./components/BasicStyle";
// import { ThreeLang } from "./components/ThreeLang";
// import { language } from "./db";
// import { Event } from "./components/Event";
// import { WeRouter } from "./WeRouter";
import { Form } from "./components/forms/Form";
import { WeRouter } from "./WeRouter";

const App = () => {
  return (
    <div>
      {/* <Header /> */}
      {/* <Menu foods={menus} />
      <Kakao kakaos={kakaoDb} /> */}
      {/* 3일차 끝 */}
      <GlobalStyle />
      {/* <BasicStyle /> */}
      {/* <ThreeLang threeLang={language} /> */}
      {/* 4일차 끝 */}
      {/* <Event /> */}
      {/* 5일차 끝 */}
      {/* <WeRouter /> */}
      {/* 6일차 끝 */}
      <WeRouter />
      <Form />
    </div>
  );
};

export default App;
