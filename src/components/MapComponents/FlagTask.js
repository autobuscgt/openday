import './FlagTask.css';

const FlagTask = ({ id, isCompleted, isActive, onClick, item}) => {
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
    <div className='inner-flag-container-item'>{item}</div>  
    </div>
  );
};

export default FlagTask;