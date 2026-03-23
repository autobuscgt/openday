import { useQuest } from '../../context/questContext';
import './FlagTask.css';

const FlagTask = ({ id, isCompleted, isActive, onClick }) => {
  const { updateQuestStatus } = useQuest();
  const questMapping = {
    '1': 'tictactoe',
    '2': 'centerdiv',
    '3': 'alchemy',
    '4': 'findsecret'
  };

  const handleFlagClick = () => {
    if (onClick) {
      onClick();
    } else {

      console.log(`Флаг ${id} нажат`);
    }
  };

  return (
    <div 
      className={`flag-container ${isCompleted ? 'completed' : ''} ${isActive ? 'active' : ''}`}
      data-flag-id={id}
      onClick={handleFlagClick}
    >
      {/* <div className="flag-number">{id}</div> */}
    </div>
  );
};

export default FlagTask;