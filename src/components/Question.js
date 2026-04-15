import { useState } from 'react';
import { useQuest } from '../context/questContext';

const correctAnswerStyle = {
  backgroundColor:'#dddddd',
  userSelect:'none',
  cursor:'no-drop',
  pointerEvents:'none'
  
}

const QuestionModal = ({question, options, correctAnswer, index }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [style, setStyle] = useState()
  const [showError, setShowError] = useState(false);
  const { updateQuestStatus } = useQuest();

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setShowError(false);
  };

  const handleSubmit = () => {
    if (!selectedOption) {
      setShowError(true);
      return;
    }

    if (selectedOption === correctAnswer) {
      updateQuestStatus(`question${index}`, true);
      // setSelectedOption(null);
      setStyle(correctAnswerStyle)
      setShowError(false);
    } else {
      setShowError(true);
    }
  };

  return (
    <div>
        <h2>Пакет на развилке. Помогите ему выбрать верный маршрут, ответив на вопрос.</h2>
        <div className="modal-question">
          <p>{question}</p>
        </div>

        <div className="modal-options">
          {options.map((option, index) => (
            <label key={index} className="option-label" style={style}>
              <input
                type="radio"
                name="quiz-option"
                value={option}
                checked={selectedOption === option}
                onChange={() => handleOptionClick(option)}

              />
              <span className="option-text">{option}</span>
            </label>
          ))}
        </div>

        {showError && (
          <div className="error-message">
            Неверный ответ. Попробуйте снова!
          </div>
        )}

        {selectedOption !== null && <button
          className="question-button"
          
          onClick={handleSubmit}
        >
          Ответить
        </button>}
    </div>
  );
};

export default QuestionModal;