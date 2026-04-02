import { useContext, useEffect, useState } from 'react';
import './styles/modals/Alchemy.css'
import './styles/modals/CenterDivModal.css'
import './styles/modals/FindSecret.css'
import './styles/modals/TicTacToe.css'
import './styles/alchemy.css'
import './styles/Animation.css'
import './styles/style.css';
import './styles/map.css';

import Map from './components/Map';
import Greet from './components/Greet';
import mkit_logo from './assets/mkit_logo.svg';
import grey_dots from './assets/grey_dots.svg';
import blue_line from './assets/blue_line.png'
import green_line from './assets/green_line.svg'
import Modal from './components/Modal';
import Switcher from './components/Switcher';
import End from './components/End';
import DevMap from './components/DevMap';
import { PathProvider } from './context/pathContext';
import pathContext from './context/pathContext';

function AppContent() {
  const [greetIsOpen, setGreetIsOpen] = useState(false);
  const [init, setInit] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [endIsOpen, setEndIsOpen] = useState(false);

  const { isDev, setIsDev } = useContext(pathContext);

  useEffect(() => {
    const already_loaded = localStorage.getItem('isLoaded') === 'true';
    if (!already_loaded) {
      setGreetIsOpen(true);
      localStorage.setItem('isLoaded', 'true');
      setIsLoaded(true);
    } else {
      setIsLoaded(true);
    }
    setInit(true);
  }, []);

  const handleToggle = () => {
    setIsDev(prevState => !prevState);
  };

  if (!init) {
    return null;
  }

  return (
    <div>
      <div className={`map ${!isDev ? "" : "dev"}`}>
        <img src={grey_dots} alt='серые точки' className='background-dots' data-dots="1"/>
        <img src={grey_dots} alt='серые точки' className='background-dots' data-dots="2"/>
        <img src={!isDev ? blue_line : green_line} alt='синяя линия' className='background-line' data-dots="3" />
        <img src={mkit_logo} alt='mkit_logo' className='logo'/>
        
        <Switcher toggled={isDev} onClick={handleToggle}/>
        
        <button 
          style={{zIndex:'2', position:'absolute', bottom:'20px', right:'20px'}} 
          onClick={() => setEndIsOpen(true)}
        >
          END
        </button>
        <End isOpen={endIsOpen} onClose={() => setEndIsOpen(false)}/>
        
        {isLoaded ? (
          <div className='instructions'>
            <button
              onClick={() => setGreetIsOpen(true)}
              className='inst_btn'
            />
            <Modal 
              isOpen={greetIsOpen} 
              onClose={() => setGreetIsOpen(false)} 
              title={'Инструкции'} 
            >
              <Greet/>
            </Modal>
          </div>
        ) : ' '}
        
        {isDev ? <DevMap /> : <Map />}
      </div>
    </div>
  );
}

function App() {
  return (
    <PathProvider>
      <AppContent />
    </PathProvider>
  );
}

export default App;