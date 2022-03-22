import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Form } from "./components/forms/Form";
import { Header } from "./components/Header";
import { Home } from "./components/home/Home";
import { PageNotFound } from "./components/PageNotFound";
import { Sub01 } from "./components/subs/Sub01";
import { Sub02 } from "./components/subs/Sub02";
import { routes } from "./routes";

export const WeRouter = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path={routes.login} element={<Form />} />
        <Route path={routes.home} element={<Home />} />
        <Route path={routes.sub01} element={<Sub01 />} />
        <Route path={routes.sub02} element={<Sub02 />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
};
