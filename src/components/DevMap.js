
import FlagTask from './MapComponents/FlagTask';
import RoadContainer from './MapComponents/RoadContainer';
import Modal from './Modal';
import FIFO from './DevPathComponents/firstBattle'
import { useState } from 'react';
import { useQuest } from '../context/questContext';

const divStyle = {
  width: '100%',
  overflow:'hidden',
  justifyContent: 'center',
  flexDirection: 'column',
  display: 'flex',
  alignItems: 'center'
}

const questMapping = {
  '1':'junior',
  '2':'middle',
  '3':'senior',
  '4':'lead',
}

function DevMap(){
  const {completedQuests} = useQuest();

  const [lead, setLead] = useState(false);
  const [senior, setSenior] = useState(false);
  const [middle, setMiddle] = useState(false);
  const [junior, setJunior] = useState(false);

  const getQuestStatus = (questId) => {
    const questName = questMapping[questId];
    return completedQuests[questName] || false;
  };

    const getActiveQuest = () => {
    for (let i = 5; i <= 9; ++i) {
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
        setJunior(true);
        break;
      case '2':
        setMiddle(true);
        break;
      case '3':
        setSenior(true);
        break;
      case '4':
        setLead(true);
      break;
      default:
        break;
    }
  };
    return (
      <div className="map-container" style={divStyle}>
      <div className='map-header' data-id="dev">
        <h1>{'{__Путь р@зработчик@_}'}</h1>
      </div>
      <div className='road-container'>
        <div id='rd1'>
          <FlagTask
            item={'JUNIOR'}
            id={'5'}
            isActive={activeQuestId === '5'}
            isCompleted={getQuestStatus('5')}
            onClick={() => setJunior(true)}
          />        
          <Modal title={'JUNIOR'} isOpen={junior} onClose={() => setJunior(false)}>
            <FIFO/>
          </Modal>
        </div>
        
        <div id='rd2'>
          <RoadContainer 
          isActive={true}
          isCompleted={true}
          id={"4"}
          />
        </div>
        
        <div id='rd3'>
        <FlagTask
            id={'6'}
            item={'MIDDLE'}
            isActive={activeQuestId === '6'}
            isCompleted={getQuestStatus('6')}
            onClick={()=> setMiddle(true)}
          />
        <Modal title={'MIDDLE'} isOpen={middle} onClose={() => setMiddle(false)}>
          <FIFO/>
        </Modal>
        </div>
        
        <div id='rd4'>
          <RoadContainer
          id={"5"}
          isActive={true}
          isCompleted={true}
          />
        </div>
        
        <div id='rd5'>
          <RoadContainer
          id={"6"}
          isActive={true}
          isCompleted={true}
          />
        </div>

        <div id='rd6'>
        <FlagTask
            id={'7'}
            item={'SENIOR'}
            isActive={activeQuestId === '7'}
            isCompleted={getQuestStatus('7')}
            onClick={()=> setSenior(true)}
          />
        <Modal title={'SENIOR'} isOpen={senior} onClose={() => setSenior(false)}>
          <FIFO/>
        </Modal>
        </div>

        <div id='rd7'>
        <FlagTask
            id={'8'}
            item={'LEAD'}
            isActive={activeQuestId === '8'}
            isCompleted={getQuestStatus('8')}
            onClick={()=> handleFlagClick('4')}
        />
        <Modal title={'LEAD'} isOpen={lead} onClose={() => setLead(false)}>
          <FIFO/>
        </Modal>
        </div>
      </div>
      
      </div>
    )
}
export default DevMap;