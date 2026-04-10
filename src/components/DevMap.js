
import FlagTask from './MapComponents/FlagTask';
import RoadContainer from './MapComponents/RoadContainer';
import Modal from './CommonComponents/Modal';

import ComputerBuilder from './Games/ComputerBuilder'
import FindSecret from './Games/FindSecret'
import TypeText from './Games/TypeText'
import FindBug610 from './Games/FindBug610'

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
  '5':'junior',
  '6':'middle',
  '7':'senior',
  '8':'lead',
}

const mock_text = `Для того чтобы собрать компьютер, нужно перетаскивать комплектующие в соответствующие контейнеры`

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
      case '5':
        setJunior(true);
        break;
      case '6':
        setMiddle(true);
        break;
      case '7':
        setSenior(true);
        break;
      case '8':
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
            item={<h3 style={{color:'var(--red-color)'}}>Junior</h3>}
            id={'5'}
            isActive={activeQuestId === '5'}
            isCompleted={getQuestStatus('5')}
            onClick={() => handleFlagClick('5')}
          />        
          <Modal 
            title={'Собери компьютер!'} 
            isOpen={junior} 
            onClose={() => setJunior(false)}
            questName={'junior'}
            textUnder={mock_text}
          >
            <FindSecret/>
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
            item={<h3 style={{color:'var(--green-color)'}}>Middle</h3>}
            isActive={activeQuestId === '6'}
            isCompleted={getQuestStatus('6')}
            onClick={() => handleFlagClick('6')}
          />
        <Modal title={'MIDDLE'} isOpen={middle} onClose={() => setMiddle(false)}  questName={'middle'}>
          <ComputerBuilder/>
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
            item={<h3 style={{color:'var(--white-purple)'}}>Senior</h3>}
            isActive={activeQuestId === '7'}
            isCompleted={getQuestStatus('7')}
            onClick={() => handleFlagClick('7')}
          />
        <Modal title={'SENIOR'} isOpen={senior} onClose={() => setSenior(false)} questName={'senior'}>
          <FindBug610 isOpen={senior} onClose={()=> setSenior(false)}/>
        </Modal>
        </div>

        <div id='rd7'>
        <FlagTask
            id={'8'}
            item={<h3 style={{color:'var(--orange-color)'}}>Lead</h3>}
            isActive={activeQuestId === '8'}
            isCompleted={getQuestStatus('8')}
            onClick={()=> handleFlagClick('8')}
        />
        <Modal title={'LEAD'} isOpen={lead} onClose={() => setLead(false)} questName={'lead'}>
          <TypeText onClose={() => setLead(false)} />
        </Modal>
        </div>
      </div>
      
      </div>
    )
}
export default DevMap;