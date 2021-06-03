import { Switch, Route, Redirect } from "react-router-dom";
import Main from "./Main/Main";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Roster from "./Roster/Roster";
import Schedule from "./Schedule/Schedule";
import NotFound from "./NotFound/NotFound";
import Admin from "./Admin/Admin";
import Contact from "./Contact/Contact";

export default function App() {
  return (
    <>
      <Header />
      <div className="content">
        <Switch>
          <Route exact={true} path="/">
            <Redirect to={"/main"} />
          </Route>
          <Route exact={true} path="/main">
            <Main />
            <Footer />
          </Route>
          <Route exact={true} path="/roster">
            <Roster />
            <Footer />
          </Route>
          <Route exact={true} path="/schedule">
            <Schedule />
            <Footer />
          </Route>
          <Route exact={true} path="/contact">
            <Contact />
            <Footer />
          </Route>
          <Route exact={true} path="/admin">
            <Admin />
            <Footer />
          </Route>
          <Route>
            <NotFound />
            <Footer />
          </Route>
        </Switch>
      </div>
    </>
  );
}
