import React from 'react'
import NavBar from './Components/NavBar/NavBar';
import './App.css'
import {originals,action,comedy,romance,horror} from './url'
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RowPost/RowPost';
function App() {
  return (
    <div>
      <NavBar />
      <Banner />
      <RowPost url={originals} title="Netflix Orginals" />
      <RowPost url={action} title="Action Movies" isSmall />
      <RowPost url={comedy} title="Comedy Movies" isSmall />
      <RowPost url={romance} title="Romance Movies" isSmall />
      <RowPost url={horror} title="Horror Movies" isSmall />
    </div>
  );
}

export default App;
