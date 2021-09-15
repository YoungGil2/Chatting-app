import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { Join, Room }  from "./pages/index.js";
import { Header, SideMenu } from "./layout/index.js"

function App() {
  return (
    <>
      <Header />
      {/* <SideMenu /> */}
        <Switch>
          <Route exact path="/" component={Join} />
          <Route path="/room" component={Room} />
        </Switch>
     
    </>
  );
}

export default App;
