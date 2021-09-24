import { Switch, Route } from "react-router-dom";
import { Join, Room, Test }  from "./pages/index.js";
import { Header, SideMenu } from "./layout/index.js"

function App() {
  return (
    <>
      <Header />
      {/* <SideMenu /> */}
        <Switch>
          <Route exact path="/" component={Join} />
          <Route path="/room" component={Room} />
          <Route path="/test" component={Test} />
        </Switch>
     
    </>
  );
}

export default App;
