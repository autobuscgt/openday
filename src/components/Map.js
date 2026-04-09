import '../styles/map.css'

import FlagTask from './MapComponents/FlagTask';
import RoadContainer from './MapComponents/RoadContainer';

import { useQuest } from '../context/questContext';
import { useState } from 'react';

import Alchemy from './Games/Alchemy';
import TicTacToe from './Games/TicTacToe';
import CenterDivModal from './Games/CenterDivModal';
import FindSecret from './Games/FindSecret';
import Modal from './Modal';

const divStyle = {
  width: '100%',
  overflow:'hidden',
  justifyContent: 'center',
  flexDirection: 'column',
  display: 'flex',
  alignItems: 'center'
}

const questMapping = {
  '1': 'centerDiv',      // Центрирование div
  '2': 'findSecret',     // Поиск секрета
  '3': 'tictactoe',      // Крестики-нолики
  '4': 'alchemy',        // Алхимия
};

function Map() {
  const { completedQuests} = useQuest();

  const [isTicTacToe, setIsTicTacToe] = useState(false);
  const [isAlchemyOpen, setAlchemyIsOpen] = useState(false);
  const [isFindSecretOpen, setFindSecretIsOpen] = useState(false);
  const [isCenterDivOpen, setIsCenterDivOpen] = useState(false);

  const getQuestStatus = (questId) => {
    const questName = questMapping[questId];
    return completedQuests[questName] || false;
  };

  const getActiveQuest = () => {
    for (let i = 1; i <= 5; ++i) {
      const questName = questMapping[i];
      if (!completedQuests[questName]) {
        return i.toString();
      }
    }
    return null;
  };

  const activeQuestId = getActiveQuest();

  const handleFlagClick = (questId) => {
    if (getQuestStatus(questId)) {
      return;
   }
    switch(questId) {
      case '1':
        setIsCenterDivOpen(true);
      break;
      case '2':
        setFindSecretIsOpen(true);
        break;
      case '3':
        setIsTicTacToe(true);
        break;
      case '4':
        setAlchemyIsOpen(true);
      break;
      default:
        break;
    }
  };


  return (
    <div className="map-container" style={divStyle}>
      <div className='map-header'>
        <h1>{'-._={ Основной путь }=_.-'}</h1>
      </div>
      <div className='road-container'>

        <div id="rd6">
          <FlagTask 
            id={"3"} 
            isCompleted={getQuestStatus('3')} 
            isActive={activeQuestId === '3'} 
            onClick={!getQuestStatus('3') ? () => handleFlagClick('3') : undefined}
          />
          <Modal isOpen={isTicTacToe} onClose={()=> setIsTicTacToe(false)} title={'Крестики нолики'} questName={"tictactoe"}> 
            <TicTacToe/>
          </Modal>
        </div>

        <div id="rd7">
          <FlagTask 
            id={"4"} 
            isCompleted={getQuestStatus('4')} 
            isActive={activeQuestId === '4'} 
            onClick={!getQuestStatus('4') ? () => handleFlagClick('4') : undefined}
          />
          <Modal isOpen={isAlchemyOpen} onClose={()=>setAlchemyIsOpen(false)} title={'IT-Алхимия'} questName={"alchemy"}> 
            <Alchemy onComplete={()=>setAlchemyIsOpen(false)} />
          </Modal>
        </div>

        <div id="rd5">
          <RoadContainer
            id={"3"}
            isCompleted={getQuestStatus('3')}
            isActive={activeQuestId ==='3'}
          />
        </div>

        <div id="rd4">
          <RoadContainer
            id={"2"}
            isCompleted={getQuestStatus('2')}
            isActive={activeQuestId === '2'}
          />
        </div>

        <div id="rd3">
          <FlagTask 
            id={"2"} 
            isCompleted={getQuestStatus('2')} 
            isActive={activeQuestId === '2'} 
            onClick={!getQuestStatus('2') ? () => handleFlagClick('2') : undefined}
          />
          <Modal isOpen={isCenterDivOpen} onClose={()=> setIsCenterDivOpen(false)} title={'Центрирование дива'} questName={"centerDiv"}> 
            <CenterDivModal onComplete={()=> setIsCenterDivOpen(false)} />
          </Modal>
        </div>

        <div id="rd2">
          <RoadContainer
            id={"1"}
            isCompleted={getQuestStatus('1')}
            isActive={activeQuestId === '1'}
          />
        </div>

        <div id="rd1">
          <FlagTask 
            id={"1"} 
            isCompleted={getQuestStatus('1')} 
            isActive={activeQuestId === '1'} 
            onClick={!getQuestStatus('1') ? () => handleFlagClick('1') : undefined}
          />
          <Modal isOpen={isFindSecretOpen} onClose={() => setFindSecretIsOpen(false)} title={'Найди секретный ключ'} questName={"findSecret"}> 
            <FindSecret onComplete={() => setFindSecretIsOpen(false)} />
          </Modal>
        </div>
      </div>

    </div>
  );
}

export default Map;