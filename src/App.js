import React from 'react';
import './App.css';
import NavigationBar from './Containers/NavigationBar/NavigationBar'
import RoomManagement from './Containers/RoomManagement/RoomManagement'
import AddRoom from './Containers/AddRoom/AddRoom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavigationBar />
          <Switch>
            <Route path="/addroom" component={AddRoom}/>
            <Route path="/" component={RoomManagement}/>
          </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
