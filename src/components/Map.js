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

const divStyle = {
  width: '100%',
  justifyContent: 'center',
  flexDirection: 'column',
  display: 'flex',
  alignItems: 'center'
}

const questMapping = {
  '1': 'alchemy',        // Алхимия
  '2': 'centerDiv',      // Центрирование div
  '3': 'findSecret',     // Поиск секрета
  '4': 'tictactoe',      // Крестики-нолики
};

function Map() {
  const { completedQuests } = useQuest();

  const [isTicTacToe, setIsTicTacToe] = useState(false);
  const [isAlchemyOpen, setAlchemyIsOpen] = useState(false);
  const [isFindSecretOpen, setFindSecretIsOpen] = useState(false);
  const [isCenterDivOpen, setIsCenterDivOpen] = useState(false);

  const handleClose = () => {
    setAlchemyIsOpen(false);
    setFindSecretIsOpen(false);
    setIsCenterDivOpen(false);
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
      case '1':
        setAlchemyIsOpen(true);
        break;
      case '2':
        setIsCenterDivOpen(true);
        break;
      case '3':
        setFindSecretIsOpen(true);
        break;
      case '4':
        setIsTicTacToe(true);
        break;
      default:
        break;
    }
  };

  return (
    <div className="map-container" style={divStyle}>
      <div className='map-header'>
        <h1>{'._={ ROAD MAP }=_.'}</h1>
      </div>
      <div className='road-container'>
  
        <div>
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

        <div>
          <RoadContainer
            id={"3"}
            isCompleted={getQuestStatus('3')}
            isActive={activeQuestId === '3'}
          />
        </div>

        <div>
          <FlagTask 
            id={"3"} 
            isCompleted={getQuestStatus('3')} 
            isActive={activeQuestId === '3'} 
            onClick={() => handleFlagClick('3')}
          />
          <Modal isOpen={isFindSecretOpen} onClose={handleClose} title={'Найди секретный ключ'}> 
            <FindSecret onComplete={handleClose} />
          </Modal>
        </div>

        <div>
          <RoadContainer
            id={"2"}
            isCompleted={getQuestStatus('2')}
            isActive={activeQuestId === '2'}
          />
        </div>

        <div>
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

        <div>
          <RoadContainer
            id={"1"}
            isCompleted={getQuestStatus('1')}
            isActive={activeQuestId === '1'}
          />
        </div>

        <div>
          <FlagTask 
            id={"1"} 
            isCompleted={getQuestStatus('1')} 
            isActive={activeQuestId === '1'} 
            onClick={() => handleFlagClick('1')}
          />
          <Modal isOpen={isAlchemyOpen} onClose={handleClose} title={'IT-Алхимия'}> 
            <Alchemy onComplete={handleClose} />
          </Modal>
        </div>
      </div>
    </div>
  );
}

export default Map;