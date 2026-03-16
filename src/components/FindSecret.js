import '../styles/modals/FindSecret.css'

function FindSecret({isOpen, onClose}) {
  if(!isOpen) return null;
  return (
    <div className="findSecretContainer"
    onClick={onClose}
    >
      findSecret
    </div>
  );
}

export default FindSecret;
