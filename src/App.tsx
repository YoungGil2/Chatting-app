import { Switch, Route } from "react-router-dom";
import { Join, Room, Home }  from "./pages/index.js";
import { Header } from "./layout/index.js"

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/join" component={Join} />
        <Route path="/room" component={Room} />
      </Switch>
    </>
  );
}

export default App;
