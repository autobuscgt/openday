import './FlagTask.css';

const FlagTask = ({ id, isCompleted, isActive, onClick }) => {
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
    </div>
  );
};

export default FlagTask;