import { Switch, Route } from "react-router-dom";
import Main from "./Main/Main";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

export default function App() {
  return (
    <>
    <Header />
    <div className="content">
    <Switch>
      <Route path="/">
        <Main />
      </Route>
    </Switch>
    </div>
    <Footer />
    </>
  );
}
