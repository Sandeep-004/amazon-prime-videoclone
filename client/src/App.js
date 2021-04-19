import React from 'react';
import HomeNav from './HomeNav';
import Create from './Create';
import AccountCreate from './AccountCreate';
import { Route, Switch  } from 'react-router-dom';  
import UserProfile from './UserProfile';
import Logout from './Logout';


function App() {
  return (
    <>
          
        <menu>
          <Switch>
            <Route exact path='/' component={HomeNav} />
            <Route exact path='/signin' component={Create} />
            <Route exact path='/AccountCreate' component={AccountCreate} />
            <Route exact path='/userprofile' component={UserProfile} />
            <Route exact path='/logout' component={Logout} />
          </Switch>
        </menu>

    </>
  );
}

export default App;
