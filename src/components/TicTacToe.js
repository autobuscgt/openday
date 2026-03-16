import '../styles/modals/TicTacToe.css'

function TicTacToe({isOpen, onClose}) {
  if(!isOpen) return null;
  return (
    <div className="ticTacToeContainer"
    onClick={onClose}
    >
      ticTacToe
    </div>
  );
}

export default TicTacToe;
