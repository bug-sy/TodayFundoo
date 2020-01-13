import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom'
import PageNotFound from './components/Pages/PageNotFound'
import Dashboard from './components/Dashboard'
import Parsing from './components/Pages/Parsing'
import UserSignupmain from './components/UserSingnupmain'
import UserSigninmain from './components/UserSigninmain'
import Vert from '/Users/rakesh/Desktop/newsignup/src/components/MMainnote.js'
import Archive from './components/Archive'
import Trash from './components/Trash'

class App extends React.Component{

  render(){
    return (
    <div className="App">
      <BrowserRouter >
          <Route exact path="/Vert" component={Vert} />
        <Route exact path="/Dashboard/Parsing" component={Parsing} />
        <Route path="/Signin" component={UserSigninmain} />
        <Route path="/Signup" component={UserSignupmain} />
          <Route path="/Dashboard/Trash" component={Trash} />
          <Route path="/Dashboard/Archive" component={Archive} />
          <Route exact path="/Vert " component={Vert } />
        <Route  path="/Dashboard" 
        render={() => (<Dashboard/>)}  
        />
        <Route exact path="/" component={PageNotFound} />
      </BrowserRouter>
    </div>
            );
  }
}

export default App;
