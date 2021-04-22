import React from 'react';
import './App.css';
import NavigationBar from './Containers/NavigationBar/NavigationBar'
import RoomManagement from './Containers/RoomManagement/RoomManagement'
function App() {
  return (
    <div className="App">
      <NavigationBar/>
      <RoomManagement />
    </div>
  );
}

export default App;
