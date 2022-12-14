import { useState,useEffect } from 'react';
import './App.css';
import Footer from './Footer';
import Home from './Home';
import Navbar from './Navbar';
import {Switch,Route} from "react-router-dom"
import NftDetails from './NftDetails';
import Contact from './Contact';
import Market from './Market';
import Modal from './Modal';
import Login from './Login';
import Connect from './Connect';


function App() {

  const [showmodal,setshowmodal] =useState(false)

  const modalShow = () =>{
    setshowmodal(!showmodal)
  }

  return (
    <div className="App">
      <Navbar/>
     

      <Switch>
        <Route path="/" exact>
        <Home modalShow={modalShow}/>
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
          <Market modalShow={modalShow}/>
        </Route>
        <Route path="/wallet">
          <Connect/>
        </Route>
          
        <Route path="/login">
          <Login/>
        </Route>
      </Switch>
      {
        showmodal && <Modal modalShow={modalShow}/>
      }
    
    
<br/><br/><br/>
     <footer>
      <Footer/>
     </footer>
    </div>
  );
}

export default App;
