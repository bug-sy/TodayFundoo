import React from 'react';
import Reminder from './Reminder/ComponentOfReminder/ReminderDataFetching'
import './App.css';
import LabelMapping from '/Users/rakesh/Desktop/newsignup/src/components/LabelComponent/LabelMapping.js'
import EditLabelDialog from '/Users/rakesh/Desktop/newsignup/src/components/Label/EditLabelDialog.js'
import { Provider } from 'react-redux'
import store from './components/UsingRedux/store'
import { BrowserRouter, Route } from 'react-router-dom'
import PageNotFound from './components/Pages/PageNotFound'
import Dashboard from './components/Dashboard'
import Parsing from './components/Pages/Parsing'
import UserSignupmain from './components/UserSingnupmain'
import UserSigninmain from './components/UserSigninmain'
import Vert from '/Users/rakesh/Desktop/newsignup/src/components/MMainnote.js'
import Archive from './components/Archive'
import Trash from './components/Trash'
import AddLabel from './components/Label/NoteCardLabel'
import Stand from '/Users/rakesh/Desktop/newsignup/src/components/standalone/DialogueList.js'

class App extends React.Component{

  render(){
    return (
      <Provider store={store}>
    <div className="App">
      <BrowserRouter >
      
          <Route exact path="/Vert" component={Vert} />
          <Route exact path="/Dashboard/Parsing" component={Parsing} />
          <Route path="/EditLabelDialog" component={EditLabelDialog}/>
          <Route path="/Signin" component={UserSigninmain} />
          <Route path="/Signup" component={UserSignupmain} />
          <Route path="/Dashboard/Trash" component={Trash} />
          <Route path="/Dashboard/Archive" component={Archive} />
          <Route path="/Dashboard/Reminder" component={Reminder}/>
          <Route exact path="/Vert " component={Vert} />
          <Route  path="/Dashboard" component={Dashboard}/>
            <Route path="/Dashboard/LabelMapping" component={LabelMapping}/>
          <Route path="/Stand" component={Stand}/>
          <Route exact path="/" component={PageNotFound} />
      </BrowserRouter>
    </div>
      </Provider>
            );
  }
}

export default App;
