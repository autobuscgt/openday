import { useState } from 'react';
import Alchemy from './components/Alchemy';
import './styles/style.css'
import CenterDivModal from './components/CenterDivModal';
import TicTacToe from './components/TicTacToe';
import FindSecret from './components/FindSecret';
import Map from './components/Map';

function App() {
  const [alchemy, setAlchemy] = useState(false)
  const [centerDiv, setCenterDiv] = useState(false)
  const [ticTacToe, setTicTacToe] = useState(false)
  const [findSecret, setFindSecret] = useState(false)
  const [mapIsOpen, setMapIsOpen] = useState(false)
  
  return (
    <div className='map'>

      {/* <button onClick={()=> setAlchemy(true)}> Alchemy</button>
      <Alchemy isOpen={alchemy} onClose={() => setAlchemy(false)}/>

      <button onClick={()=> setCenterDiv(true)}> centerDiv</button>
      <CenterDivModal isOpen={centerDiv} onClose={() => setCenterDiv(false)}/>

      <button onClick={()=> setTicTacToe(true)}> ticTacToe</button>
      <TicTacToe isOpen={ticTacToe} onClose={() => setTicTacToe(false)}/>

      <button onClick={()=> setFindSecret(true)}> findSecret</button>
      <FindSecret isOpen={findSecret} onClose={() => setFindSecret(false)}/> */}

      <button onClick={()=> setMapIsOpen(true)}> Map</button>
      <Map isOpen={mapIsOpen} onClose={() => setMapIsOpen(false)} />

    </div>
  );
}

export default App;
