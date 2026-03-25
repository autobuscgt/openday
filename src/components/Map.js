import '../styles/map.css'
import '../styles/Animation.css'

import FlagTask from './MapComponents/FlagTask';
import RoadContainer from './MapComponents/RoadContainer';

import { useQuest } from '../context/questContext';
import { useState } from 'react';


import Alchemy from './Alchemy';
import TicTacToe from './TicTacToe';
import CenterDivModal from './CenterDivModal';
import FindSecret from './FindSecret';
import Modal from './Modal';


const divStyle = {
  width: '100%',
  justifyContent: 'center',
  flexDirection: 'column',
  display: 'flex',
  alignItems: 'center'
}

function Map() {
  const { completedQuests } = useQuest();

  const [isTicTacToe, setIsTicTacToe] = useState(false);
  const [isAlchemyOpen, setAlchemyIsOpen] = useState(false);
  const [isFindSecretOpen, setFindSecretIsOpen] = useState(false);
  const [isCenterDivOpen, setIsCenterDivOpen] = useState(false);

  const handleClose = () => {

      setAlchemyIsOpen(false)
      setFindSecretIsOpen(false)
      setIsCenterDivOpen(false)
      setIsTicTacToe(false)

      console.log('нажата2');

  }


  const questMapping = {
    '1': 'tictactoe',      // Крестики-нолики
    '2': 'centerDiv',      // Центрирование div
    '3': 'alchemy',        // Алхимия
    '4': 'findSecret'      // Поиск секрета
  };

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

  return (
    <div className="map-container" style={divStyle}>
      <div className='map-header'>
        <h1>{'._={ ROAD MAP }=_.'}</h1>
      </div>
      <div className='road-container'>

        <div onClick={() => setIsTicTacToe(true)}>
          <FlagTask 
          id={"4"} 
          isCompleted={getQuestStatus('4')} 
          isActive={activeQuestId === '4'} 
          />
          <Modal isOpen={isTicTacToe} onClose={handleClose} title={'Крестики нолики'}> 
            <TicTacToe/>
          </Modal>
        </div>

 {/* onClick={() => handleClose(true)} */}
        <div >
          <RoadContainer
          id={"3"}
          isCompleted={getQuestStatus('2')}
          isActive={activeQuestId === '2'}
          />
        </div>

        <div onClick={() => setFindSecretIsOpen(true)}>
          <FlagTask 
          id={"3"} 
          isCompleted={getQuestStatus('3')} 
          isActive={activeQuestId === '3'} 
          />
          <Modal isOpen={isFindSecretOpen} onClose={handleClose} title={'Найди секретный ключ'}> 
            <FindSecret/>
          </Modal>
        </div>

        <div >
          <RoadContainer
          id={"2"}
          isCompleted={getQuestStatus('2')}
          isActive={activeQuestId === '2'}
          />
        </div>

        <div onClick={() => setIsCenterDivOpen(true)}>
          <FlagTask 
          id={"2"} 
          isCompleted={getQuestStatus('2')} 
          isActive={activeQuestId === '2'} 
          />
          <Modal isOpen={isCenterDivOpen} onClose={handleClose} title={'Центрирование дива'}> 
            <CenterDivModal/>
          </Modal>
        </div>

        <div>
          <RoadContainer
          id={"1"}
          isCompleted={getQuestStatus('2')}
          isActive={activeQuestId === '2'}
          />
        </div>

        <div onClick={() => setAlchemyIsOpen(true)}>
          <FlagTask 
          id={"1"} 
          isCompleted={getQuestStatus('1')} 
          isActive={activeQuestId === '1'} 
          />
          <Modal isOpen={isAlchemyOpen} onClose={() => handleClose()} title={'IT-Алхимия'}> 
            <Alchemy/>
          </Modal>
        </div>
      </div>
    </div>
  );
}

export default Map;