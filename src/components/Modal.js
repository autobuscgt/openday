import '../styles/style.css'
function Modal({isOpen, onClose, title, children}) {
    if (!isOpen) return null;
    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <div className="modal-header">
                    <h1>{title}</h1>
                </div>
                {children} 
                <div className="modal-footer">
                    <button onClick={onClose} className="close-btn">Закрыть</button>
                </div>
            </div>
        </div>
    );
}

export default Modal;