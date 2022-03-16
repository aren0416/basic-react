import Header from "./components/Header";
import { Menu } from "./components/Menu";
import { menus } from "./db";

const App = () => {
  return (
    <div>
      <Header />
      <Menu foods={menus} />
    </div>
  );
};

export default App;
