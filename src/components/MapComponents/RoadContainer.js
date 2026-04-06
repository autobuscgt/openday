
const RoadContainer = ({ id, isCompleted, isActive, onClick }) => {
  const handleRoadClick = () => {
    if (isCompleted || !isActive) {
      return;
    }
    if (onClick) {
      onClick();
    }
    console.log(`Ничего не произошло`);
    };
  return (
    <div 
      className={`path-container ${isCompleted ? 'completed' : ''} ${isActive ? 'active' : ''}`}
      data-road-id={id}
       style={{
        cursor: isCompleted || !isActive ? 'not-allowed' : 'pointer',
        opacity: isCompleted ? 0.6 : 1
      }}
      onClick={handleRoadClick}
    >
    </div>
  );
};

export default RoadContainer;