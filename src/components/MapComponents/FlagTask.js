import './FlagTask.css';

const FlagTask = ({ id, isCompleted, isActive, onClick, item}) => {
  const handleFlagClick = () => {
    if (isCompleted) {
      return;
    }
    if (onClick) {
      onClick();
    }
    console.log(`Ничего не произошло`);
  };
  
  return (
    <div 
      className={`flag-container ${isCompleted ? 'completed' : ''} ${isActive ? 'active' : ''}`}
      data-flag-id={id}
      onClick={handleFlagClick}
      style={{
        cursor: isCompleted ? 'not-allowed' : 'pointer',
        opacity: isCompleted ? 0.6 : 1
      }}
    >
      <div className='inner-flag-container-item'>{item}</div>  
    </div>
  );
};

export default FlagTask;