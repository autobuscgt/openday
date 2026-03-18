import { useRef, useState } from 'react';
import './styles/style.css';
import Map from './components/Map';
import Greet from './components/Greet';
import Modal from './components/Modal';

function App() {
  const [mapIsOpen, setMapIsOpen] = useState(false);
  const [greetIsOpen, setGreetIsOpen] = useState(false);
  const mapBtnRef = useRef(null);

  const toggleBtn = () => {
    const nextState = !mapIsOpen;
    if (mapBtnRef.current) {
      mapBtnRef.current.style.display = nextState ? 'none' : 'inline-block';
    }
    setMapIsOpen(nextState);
  };

  return (
    <div className="map">
      <button
        ref={mapBtnRef}
        className="map_icon"
        onClick={toggleBtn}
        aria-label="Open map"
      />
      
      <button
        onClick={()=> setGreetIsOpen(true)}
        style={{fontSize:'35px'}}
      >
        (i)
      </button>

      <Modal 
      isOpen={greetIsOpen} 
      onClose={()=> setGreetIsOpen(false)} 
      title={'Инструкции'} 
      content={<Greet/>}/>
    

      <Map isOpen={mapIsOpen} onClose={() => setMapIsOpen(false)} />
    </div>
  );
}

export default App;