import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./pages/home";
import whyChooseUs from "./pages/whyChooseUs";
import industries from "./pages/industries";
function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/why-choose-us" component={whyChooseUs} />
        <Route path="/industries" component={industries} />
      </Switch>
    </Router>
  );
}
export default App;
