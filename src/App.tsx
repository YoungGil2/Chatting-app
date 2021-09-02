import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Join, Room }  from "./pages/index.js";
import { Header } from "./layout/index.js"

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
