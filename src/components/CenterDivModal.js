import '../styles/modals/CenterDivModal.css'

function CenterDivModal({isOpen, onClose}) {
  if(!isOpen) return null;
  return (
    <div className="centerDivContainer"
    onClick={onClose}
    >
      centerDivModal
    </div>
  );
}

export default CenterDivModal;
