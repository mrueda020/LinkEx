import "./App.css";
import "./Navbar";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Dashboard from "./Dashboard";
function App() {
  return (
    // <Router>
    //   <Navbar></Navbar>
    //   <Switch>
    //     <Route path="/signin" component={SignIn} />
    //     <Route path="/signup" component={SignUp} />
    //   </Switch>
    // </Router>
    <Dashboard></Dashboard>
  );
}

export default App;
