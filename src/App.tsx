import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Join, Room }  from "./pages/index";
import { Header } from "./layout/index"

const Server = "http://localhost:3005";

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Switch>
          <Route excact path="/join" component={Join} />
          <Route path="/room" component={Room} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
