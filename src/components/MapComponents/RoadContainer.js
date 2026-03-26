
const RoadContainer = ({ id, isCompleted, isActive, onClick }) => {
  const handleRoadClick = () => {
    if (onClick) {
      onClick();
    } else {
      console.log(`Дорога ${id} `);
    }
  };
  return (
    <div 
      className={`path-container ${isCompleted ? 'completed' : ''} ${isActive ? 'active' : ''}`}
      data-road-id={id}
      onClick={handleRoadClick}
    >
    </div>
  );
};

export default RoadContainer;