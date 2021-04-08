
import './App.css';
import React, { createContext, useState } from "react";
import Login from "./Components/Login/Login";
import Header from "./Components/Header/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Addproduct from './Components/Addproduct/Addproduct';
import Home from './Components/Home/Home';
import Checkout from './Components/Checkout/Checkout';
import Manageproduct from './Components/Manageproduct/Manageproduct';
import Data from './Components/Data/Data';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Order from './Components/Order/Order';

export const UserContext = createContext();

function App() {
  const [loggedInUser , setLoggedInUser] = useState({})
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <p>Email: {loggedInUser.email}</p>
      <Router>

        <Switch>
          <Route path="/header">
            <Header />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute exact path="/addproduct">
            <Addproduct />
          </PrivateRoute>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/manageproduct">
            <Manageproduct />
          </Route>
          <Route path="/data">
            <Data />
          </Route>
          <PrivateRoute path="/checkout/:id">
            <Checkout />
          </PrivateRoute>
          <PrivateRoute path="/order">
            <Order />
          </PrivateRoute>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
