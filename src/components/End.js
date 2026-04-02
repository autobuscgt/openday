
function End({isEnd, isOpen, onClose}) {
    if (!isOpen) return null;
    return (
    <div className="end-animation-container">
        <div className="end-inner-items-container">
            {/* 🎓 */}
          <span style={{color:'var(--dark-grey)'}} onClick={onClose}>Поздравляем!</span>
          <p>{'{'} 🎉🎉🎉 Вы прошли все задачи 🎉🎉🎉 {'}'}</p>
        </div>
          <div className="mkit_cube" cube-id="3"> <span>М</span> </div>
          <div className="mkit_cube" cube-id="4"> <span>К</span> </div>
          <div className="mkit_cube" cube-id="2"> <span>Т</span> </div>
          <div className="mkit_cube" cube-id="1"> <span>И</span> </div>
    </div>
    );
}

export default End;