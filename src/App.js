import './App.css';
import { Home } from './MyComponents/Home';
import { Header } from './MyComponents/Header';
import { Routes } from 'react-router-dom';
import { SearchPage } from './MyComponents/SearchPage';
import Footer from './MyComponents/Footer';


import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Switch>
          <Route path='/search'>
        < SearchPage/>
          </Route>
          <Route path='/'>
       < Home/>
          </Route>
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
