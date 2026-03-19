import './FlagTask.css';

const FlagTask = ({ id, isCompleted, isActive, onClick }) => {
  return (
    <div 
    className={`flag-container ${isCompleted ? 'completed' : ''} ${isActive ? 'active' : ''}`}
    data-flag-id = {id}
    onClick={onClick}
    >
    </div>
  );
};

export default FlagTask;