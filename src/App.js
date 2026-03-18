import { useRef, useState } from 'react';
import './styles/style.css'
import './assets/burger_menu.svg'
import Map from './components/Map';

function App() {
  const [mapIsOpen, setMapIsOpen] = useState(false)
  const mapBtnRef = useRef(null)
  
  const toggleBtn = () => {
    if (!mapIsOpen) {
    if (mapBtnRef.current) {
      mapBtnRef.current.style.display = 'none';
    }
    setMapIsOpen(true);
  } else {
    setMapIsOpen(false);
  }
  }

  return (
    <div className='map'>
      <button 
        ref={mapBtnRef}
        className='map_icon' 
        onClick={toggleBtn}
        >
      </button>
      <Map isOpen={mapIsOpen} onClose={() => setMapIsOpen(false)} />
    </div>
  );
}

export default App;
