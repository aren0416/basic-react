import Header from "./components/Header";
import { Kakao } from "./components/Kakao";
import { Menu } from "./components/Menu";
import { menus } from "./db";
import { kakaoDb } from "./db";

const App = () => {
  return (
    <div>
      <Header />
      <Menu foods={menus} />
      <Kakao kakaos={kakaoDb} />
    </div>
  );
};

export default App;
