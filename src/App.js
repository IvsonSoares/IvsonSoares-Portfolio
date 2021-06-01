import React from "react";
import './App.css';
import Home from "./pages";
import {BrowserRouter as Router, Route} from 'react-router-dom'
// import SigninPage from "./pages/signin";

function App() {
  return (
     <Router>
        {/*<Switch>*/}
            <Route to='/' component={Home}/>
            {/*<Route path="/signin" component={SigninPage} />*/}
        {/*</Switch>*/}
    </Router>
  );
}

export default App;
