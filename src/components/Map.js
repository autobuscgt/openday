import '../styles/map.css'
import FlagTask from './MapComponents/FlagTask';
import { useQuest } from '../context/questContext';
import '../styles/Animation.css'
const divStyle = {
  width: '100%',
  justifyContent: 'center',
  flexDirection: 'column',
  display: 'flex',
  alignItems: 'center'
}

function Map() {
  const { completedQuests } = useQuest();

  const questMapping = {
    '1': 'tictactoe',      // Крестики-нолики
    '2': 'centerdiv',      // Центрирование div
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
        <div className='white_purple_outline'/>
        <FlagTask 
          id={"4"} 
          isCompleted={getQuestStatus('4')} 
          isActive={activeQuestId === '4'} 
        />

        
        <FlagTask 
          id={"3"} 
          isCompleted={getQuestStatus('3')} 
          isActive={activeQuestId === '3'} 
        />

        
        <FlagTask 
          id={"2"} 
          isCompleted={getQuestStatus('2')} 
          isActive={activeQuestId === '2'} 
        />

        
        <FlagTask 
          id={"1"} 
          isCompleted={getQuestStatus('1')} 
          isActive={activeQuestId === '1'} 
        />
      </div>
    </div>
  );
}

export default Map;