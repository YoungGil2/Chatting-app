import { BrowserRouter, Switch, Route } from "react-router-dom";
import Join  from "./pages/Join";
import Room  from "./pages/Room";
import Header from "./layout/Header"

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
