import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Join, Room }  from "./pages/index";
import { Header } from "./layout/index"

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Switch>
    
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
