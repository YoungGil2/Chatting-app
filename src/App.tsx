import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { Join, Room }  from "./pages/index.js";
import { Header } from "./layout/index.js"

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
      <div>
          <Link to="/">홈</Link><br/>
          <Link to="/join">입장하기</Link><br/>
          {/* <Link to="/room">방</Link><br/> */}
      </div>
        <Switch>
          <Route excact path="/join" component={Join} />
          <Route path="/room" component={Room} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
