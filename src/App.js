import React,{useState} from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import LoginContent from './components/page/Login/Content'
import RegisterContent from './components/page/Register/content'
import Home from './components/page/Home/content'
import E401 from './components/page/Error/content'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import './App.css';

function App() {
  const [token, setToken] = useState();

  if(!token) {
    return (
      <div>
    <Router>
        <Switch>
            <Route path="/login">
            <Header></Header>
              <LoginContent setToken={setToken} />
            </Route>
            <Route path="/register">
            <Header></Header>
              <RegisterContent setToken={setToken} />
            </Route> 
            <Route path="*" component={E401} status={401}/>
        </Switch>
      <Footer></Footer>
    </Router>
    </div>
    )
  }
  return (
  <div>
    <Router>
    <Switch>
      <Route path="/home">
        <Home token={token}></Home>
      </Route>
     
    </Switch>
  </Router>
  </div>);
}

export default App;
