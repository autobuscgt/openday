import { useRef, useState } from 'react';
import './styles/style.css';
import './styles/map.css';
import Map from './components/Map';
import Greet from './components/Greet';

//UI-Компоненты
import Alchemy from './components/Alchemy';
import TicTacToe from './components/TicTacToe';
import CenterDivModal from './components/CenterDivModal';
import FindSecret from './components/FindSecret';

//Универсальная модалка
import Modal from './components/Modal';

function App() {
  const [mapIsOpen, setMapIsOpen] = useState(false);
  const [greetIsOpen, setGreetIsOpen] = useState(false);
  const [alchemyIsOpen, setAlchemyIsOpen] = useState(false);
  const [findSecretIsOpen, setFindSecretIsOpen] = useState(false);
  const [centerDivIsOpen, setCenterDivIsOpen] = useState(false);
  const [ticTacToeIsOpen, setTicTacToeIsOpen] = useState(false);
  return (
    <div className="map">
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
      >
        <Greet/>
      </Modal>

      <Modal isOpen={alchemyIsOpen} onClose={()=> setAlchemyIsOpen(false)}>
         <Alchemy/>  
      </Modal>
      <Modal isOpen={findSecretIsOpen} onClose={()=> setFindSecretIsOpen(false)}>
         <FindSecret/> 
       </Modal>
      <Modal isOpen={centerDivIsOpen} onClose={()=> setCenterDivIsOpen(false)}>
         <CenterDivModal/>  
      </Modal>
      <Modal isOpen={ticTacToeIsOpen} onClose={()=> setTicTacToeIsOpen(false)}>
         <TicTacToe/>  
      </Modal>

    

      <Map isOpen={mapIsOpen} onClose={() => setMapIsOpen(false)} />
    </div>
  );
}

export default App;