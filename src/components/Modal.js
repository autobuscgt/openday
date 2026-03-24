import '../styles/style.css'
function Modal({isOpen, onClose, title, children}) {
    if (!isOpen) return null;
    const modalContentStyle = {
        zIndex: isOpen ? 10000 : -1,
        position:'fixed'
    };
    const modalOverlayContentStyle = {
        zIndex: isOpen ? 9999 : -1,
        position:'fixed'
    };

    return (
        <div className="modal-overlay" style={modalOverlayContentStyle}>
            <div className="modal-content" style={modalContentStyle}>
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