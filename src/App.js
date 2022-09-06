import { useState } from 'react';
import './App.css';
import Footer from './Footer';
import Home from './Home';
import Navbar from './Navbar';
import {Switch,Route} from "react-router-dom"
import NftDetails from './NftDetails';
import Contact from './Contact';
import Market from './Market';
import Modal from './Modal';


function App() {

  const [showmodal,setshowmodal] =useState(false)

  const modal = () =>{
    setshowmodal(!showmodal)
  }
  return (
    <div className="App">
      <Navbar/><br/><br/><br/><br/><br/>

      <Switch>
        <Route path="/" exact>
        <Home modal={modal}/>
        </Route>
        <Route path="/home" exact>
        <Home/>
        </Route>
        <Route path="/details/:id" exact>
        <NftDetails/>
        </Route>
        <Route path="/contact">
          <Contact/>
        </Route>
        <Route path="/market">
          <Market/>
        </Route>
      </Switch>
      {
        showmodal && <Modal modal={modal}/>
      }
    
    
<br/><br/><br/>
     <footer>
      <Footer/>
     </footer>
    </div>
  );
}

export default App;
