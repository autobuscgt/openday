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


      {/*
      =====================
           Инструкции 
      =====================
      */}
      <div className='instructions'>
      <button
        onClick={()=> setGreetIsOpen(true)}
        className='inst_btn'
      />
      <Modal 
      isOpen={greetIsOpen} 
      onClose={()=> setGreetIsOpen(false)} 
      title={'Инструкции'} 
      >
        <Greet/>
      </Modal>
      </div>

      {/* 
      =====================
            Алхимия 
      =====================
      */}
      <button onClick={() => setAlchemyIsOpen(true)} className='alch_pos'></button>
      <Modal isOpen={alchemyIsOpen} onClose={()=> setAlchemyIsOpen(false)} title={'Алхимия'}>
         <Alchemy/>  
      </Modal>

      {/* 
      =====================
          Секретный ключ 
      =====================
      */}
      <button onClick={() => setFindSecretIsOpen(true)} className='secret_pos'>   </button>
      <Modal isOpen={findSecretIsOpen} onClose={()=> setFindSecretIsOpen(false)} title={'Найди секретный ключ'}>
         <FindSecret/> 
       </Modal>

       {/* 
      =====================
       Центрирование дива 
      =====================
       */}
      <button onClick={() => setCenterDivIsOpen(true)} className='ctdiv_pos'> </button>
      <Modal isOpen={centerDivIsOpen} onClose={()=> setCenterDivIsOpen(false)} title={'Центрирование дива'}>
         <CenterDivModal/>  
      </Modal>

      {/*
      =====================
         Крестики нолики 
      =====================
      */}
      <button onClick={() => setTicTacToeIsOpen(true)} className='tictactoe_pos'></button>
      <Modal isOpen={ticTacToeIsOpen} onClose={()=> setTicTacToeIsOpen(false)} title={'Крестики нолики'}>
         <TicTacToe/>  
      </Modal>
      <Map/>
    </div>
    </QuestProvider>
  );
}

export default App;