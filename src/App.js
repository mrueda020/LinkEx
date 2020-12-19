import "./App.css";
import "./Navbar";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Navbar";
function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Switch>
        <Route path="/signin" component={SignIn} />
        <Route path="/signup" component={SignUp} />
      </Switch>
    </Router>
  );
}

export default App;
