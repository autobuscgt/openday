import { useState } from 'react';
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
import { QuestProvider } from './context/questContext';

function App() {
  const [greetIsOpen, setGreetIsOpen] = useState(false);
  const [alchemyIsOpen, setAlchemyIsOpen] = useState(false);
  const [findSecretIsOpen, setFindSecretIsOpen] = useState(false);
  const [centerDivIsOpen, setCenterDivIsOpen] = useState(false);
  const [ticTacToeIsOpen, setTicTacToeIsOpen] = useState(false);

  return (
    <QuestProvider>
    <div className="map">
      <button
        onClick={()=> setGreetIsOpen(true)}
        style={{fontSize:'35px'}}
      >
        (i)
      </button>

      {/* Приветствуем */}
      <Modal 
      isOpen={greetIsOpen} 
      onClose={()=> setGreetIsOpen(false)} 
      title={'Инструкции'} 
      >
        <Greet/>
      </Modal>
      {/* Приветствуем */}
      <button onClick={() => setAlchemyIsOpen(true)}>Алхимия</button>
      <Modal isOpen={alchemyIsOpen} onClose={()=> setAlchemyIsOpen(false)} title={'Алхимия'}>
         <Alchemy/>  
      </Modal>
      {/* Приветствуем */}
      <button onClick={() => setFindSecretIsOpen(true)}>Найди секретный ключ </button>
      <Modal isOpen={findSecretIsOpen} onClose={()=> setFindSecretIsOpen(false)} title={'Найди секретный ключ'}>
         <FindSecret/> 
       </Modal>
       {/* Приветствуем */}
      <button onClick={() => setCenterDivIsOpen(true)}>Центрирование дива</button>
      <Modal isOpen={centerDivIsOpen} onClose={()=> setCenterDivIsOpen(false)} title={'Центрирование дива'}>
         <CenterDivModal/>  
      </Modal>
      {/* Приветствуем */}
      <button onClick={() => setTicTacToeIsOpen(true)}>Крестики нолики</button>
      <Modal isOpen={ticTacToeIsOpen} onClose={()=> setTicTacToeIsOpen(false)} title={'Крестики нолики'}>
         <TicTacToe/>  
      </Modal>
      <Map/>
    </div>
    </QuestProvider>
  );
}

export default App;