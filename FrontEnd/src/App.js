import { useState } from "react";
import Home from "./components/Landing_page/Home";
import Navbar from "./components/Navbar/Navbar";
import './components/Style/App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SingleProduct from "./components/Details/SingleProduct";

import { Provider } from 'react-redux';
import Store from "./redux";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import AddProduct from "./components/AddProduct/AddProduct";




function App() {
  const [state, setState] = useState(false);
  return (
    <>
      <Provider store={Store}>
        <Router>
          <Navbar state={state} setState={setState} />
          <Switch>
            <Route exact path="/" component={Home}>
              <Home state={state} setState={setState} />
            </Route>
            <Route exact path="/details/:id" component={SingleProduct}></Route>
            <Route exact path="/login" component={Login}></Route>
            <Route exact path="/signup" component={Register}></Route>
            <Route exact path="/add-product" component={AddProduct}></Route>
          </Switch>
        </Router>
      </Provider>
    </>
  );
}

export default App;
