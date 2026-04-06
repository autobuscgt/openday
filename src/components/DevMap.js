
import FlagTask from './MapComponents/FlagTask';
import RoadContainer from './MapComponents/RoadContainer';
import Modal from './Modal';
import FIFO from './DevPathComponents/firstBattle'
import { useState } from 'react';

const divStyle = {
  width: '100%',
  overflow:'hidden',
  justifyContent: 'center',
  flexDirection: 'column',
  display: 'flex',
  alignItems: 'center'
}

function DevMap(){
  const [lead, setLead] = useState(false);
  const [senior, setSenior] = useState(false);
  const [middle, setMiddle] = useState(false);
  const [junior, setJunior] = useState(false);


  const handleFlagClick = (questId) => {
  //   if (getQuestStatus(questId)) {
  //     return;
  //  }
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
            id={'5'}
            item={'JUNIOR'}
            isActive={true}
            isCompleted={true}
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
            isActive={true}
            isCompleted={true}
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
            isActive={true}
            isCompleted={true}
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
            isActive={() => setLead(true)}
            isCompleted={true}
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