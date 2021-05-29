import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Route, Link, Switch} from "react-router-dom";
import React from 'react'

function Home(props){
    return <h1>Home Comp</h1>

}
function About(props){
    return <h1>About Comp</h1>

}
function Chat(props){
    return <h1>Chat Comp</h1>

}

function App() {
  const handleClick = (event)=>{
    event.preventDefault()
  }
  return (

      <div className="App">
        <header className="App-header">

          <BrowserRouter>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/chat">Chat</Link>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/chat">
              <Chat />
            </Route>
            {/*<Route exact path="/" render={()=> <h1>My Home</h1>}> </HomeRoute>*/}
            {/*<Route path="/about" component={About}> </Route>*/}
            {/*<Route path="/chat" component={Chat}> </Route>*/}
          </BrowserRouter>
        </header>
      </div>


  );
}

export default App;
