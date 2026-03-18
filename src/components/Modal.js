function Modal({isOpen, onClose, title, content}) {
    if (!isOpen) return null;
    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h1>{title}</h1>
                {content} 
                <button onClick={onClose}>Закрыть</button>
            </div>
        </div>
    );
}

export default Modal;