import '../styles/map.css'
import '../styles/Animation.css'

import FlagTask from './MapComponents/FlagTask';
import RoadContainer from './MapComponents/RoadContainer';

import { useQuest } from '../context/questContext';
import { useState } from 'react';

import Alchemy from './Games/Alchemy';
import TicTacToe from './Games/TicTacToe';
import CenterDivModal from './Games/CenterDivModal';
import FindSecret from './Games/FindSecret';
import Modal from './Modal';
import Boss from './Games/SeaBattle';

const divStyle = {
  width: '100%',
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
  '5': 'boss',        // Алхимия
};

function Map() {
  const { completedQuests } = useQuest();

  const [isTicTacToe, setIsTicTacToe] = useState(false);
  const [isAlchemyOpen, setAlchemyIsOpen] = useState(false);
  const [isFindSecretOpen, setFindSecretIsOpen] = useState(false);
  const [isCenterDivOpen, setIsCenterDivOpen] = useState(false);
  const [isBossOpen, setBossOpen] = useState(false);

  const handleClose = () => {
    setAlchemyIsOpen(false);
    setFindSecretIsOpen(false);
    setIsCenterDivOpen(false);
    setBossOpen(false);
  }

  const handleCloseTicTacToe = () => {
    setIsTicTacToe(false);
  }

  const getQuestStatus = (questId) => {
    const questName = questMapping[questId];
    return completedQuests[questName] || false;
  };

  const getActiveQuest = () => {
    for (let i = 1; i <= 4; i++) {
      const questName = questMapping[i];
      if (!completedQuests[questName]) {
        return i.toString();
      }
    }
    return null;
  };

  const activeQuestId = getActiveQuest();

  const handleFlagClick = (questId) => {
    switch(questId) {
      case '4':
        setAlchemyIsOpen(true);
        break;
      case '1':
        setIsCenterDivOpen(true);
        break;
      case '2':
        setFindSecretIsOpen(true);
        break;
      case '3':
        setIsTicTacToe(true);
        break;
      case '5':
        setBossOpen(true);
        break;
      default:
        break;
    }
  };

  return (
    <div className="map-container" style={divStyle}>
      <div className='map-header'>
        <h1>{'-._={ Дорожная карта }=_.-'}</h1>
      </div>
      <div className='road-container'>
  
        <div id="rd7">
          <FlagTask 
            id={"4"} 
            isCompleted={getQuestStatus('4')} 
            isActive={activeQuestId === '4'} 
            onClick={() => handleFlagClick('4')}
          />
          <Modal isOpen={isTicTacToe} onClose={handleCloseTicTacToe} title={'Крестики нолики'}> 
            <TicTacToe onComplete={handleCloseTicTacToe} />
          </Modal>
        </div>

        <div id="rd6">
          <FlagTask 
            id={"3"} 
            isCompleted={getQuestStatus('3')} 
            isActive={activeQuestId === '3'} 
            onClick={() => handleFlagClick('3')}
          />
          <Modal isOpen={isAlchemyOpen} onClose={handleClose} title={'IT-Алхимия'}> 
            <Alchemy onComplete={handleClose} />
          </Modal>

        </div>

        <div id="rd5">
          <RoadContainer
            id={"3"}
            isCompleted={getQuestStatus('5')}
            isActive={activeQuestId === '5'}
          />
          <Modal isOpen={isBossOpen} onClose={handleClose} title={'Босс'}>
            <Boss onComplete={handleClose}/>
          </Modal>
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
            onClick={() => handleFlagClick('2')}
          />
          <Modal isOpen={isCenterDivOpen} onClose={handleClose} title={'Центрирование дива'}> 
            <CenterDivModal onComplete={handleClose} />
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
            onClick={() => handleFlagClick('1')}
          />
          <Modal isOpen={isFindSecretOpen} onClose={handleClose} title={'Найди секретный ключ'}> 
            <FindSecret onComplete={handleClose} />
          </Modal>
        </div>
      </div>
    </div>
  );
}

export default Map;