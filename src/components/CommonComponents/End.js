import { useState, useEffect } from 'react';

const devStyle = {
  color:'var(--green-color)'
}
    
function End({ isOpen, onClose, message, doStyle, imgProp, isDev }) {

  const [image, setImage] = useState(false);
  const [text, setText] = useState('');
  
  useEffect(() => {

    if (!isOpen) return;
    const originText = message;
    
    const random = Math.floor(Math.random() * 100);
    
    if(isDev === true && random >= 30){
      setText( <> {originText} </>);
    }

    if (random <= 30) {
      setImage(true);
      
      if (isDev === true) {
        setText(
          <>
            Вы очень жесткий хакер, который <br /> прошел все уровни!
          </>
        );
      } else {
        setText(
          <>
            Тихонечко, не спеша, без суеты <br /> вы прошли все уровни!
          </>
        );
      }
    } else {
      setImage(false);
      if (!isDev) {
        setText(message);
      } else {
        setText(''); 
      }
    }
  }, [isOpen, isDev, message]);

  if (!isOpen) return null;

  return (
    <div className="end-animation-container">
      <div className="end-inner-items-container">
        <span style={{ color: 'var(--dark-grey)' }} onClick={onClose}>
          Поздравляем!
        </span>
        {image && imgProp && (
          <div>
            <img src={imgProp} alt='congrat-photo' />
          </div>
        )}
        <p style={doStyle ? devStyle : null}>
          {'{'} {text ? text : message}  {'}'}
        </p>
      </div>
      <div className="mkit_cube" cube-id="3"> <span>М</span> </div>
      <div className="mkit_cube" cube-id="4"> <span>К</span> </div>
      <div className="mkit_cube" cube-id="2"> <span>Т</span> </div>
      <div className="mkit_cube" cube-id="1"> <span>И</span> </div>
    </div>
  );
}

export default End;