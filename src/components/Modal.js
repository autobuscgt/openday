import { useQuest } from '../context/questContext';
import '../styles/style.css'

function Modal({isOpen, onClose, title, children, questName}) {
    const {completedQuests} = useQuest();
    if (!isOpen) return null;
    
     const isQuestCompleted = questName ? completedQuests[questName] : false;
    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <div className="modal-header">
                    <h1>{title}</h1>
                </div>
                {children} 
                <div className="modal-footer">
                    <button onClick={onClose} className={`close-btn ${isQuestCompleted ? "yes" : ""}`}>
                        {isQuestCompleted ? "Завершить задание" : "Закрыть"}    
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Modal;