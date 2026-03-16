import '../styles/modals/Alchemy.css'

function Alchemy({isOpen, onClose}) {
  if(!isOpen) return null;
  return (
    <div className="alchemyContainer"
    onClick={onClose}
    >
      Alchemy
    </div>
  );
}

export default Alchemy;
