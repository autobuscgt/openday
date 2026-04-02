import { useEffect, useState } from 'react';

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
//UI-Компоненты

//Универсальная модалка
import Modal from './components/Modal';
import Switcher from './components/Switcher';
import End from './components/End';
import DevMap from './components/DevMap';
import { PathProvider } from './context/pathContext';
import pathContext from './context/pathContext';

function App() {
  const [greetIsOpen, setGreetIsOpen] = useState(false);
  const [init, setInit] = useState(false)
  const [isLoaded, setIsLoaded] =  useState(false)
  const [endIsOpen, setEndIsOpen] = useState(false)
  const [isDev, setIsDev] = useState(false);

  useEffect(()=>{
    const already_loaded = localStorage.getItem('isLoaded') === 'true';
    if(!already_loaded){
      setGreetIsOpen(true);
      localStorage.setItem('isLoaded', 'true');
      setIsLoaded(true); 
    } else{
      setIsLoaded(true)
    }
    setInit(true);
  },[])


  const handleToggle = () => {
    setIsDev(prevState => !prevState); 
  };

  if (!init) {
    return null; 
  }

  return (
  <PathProvider>
  <div>
    <div className="map">
    <img src={grey_dots} alt='серые точки' className='background-dots' data-dots="1"/>
    <img src={grey_dots} alt='серые точки' className='background-dots' data-dots="2"/>
    <img src={blue_line} alt='синяя линия' className='background-line' />
    <img src={mkit_logo} alt='mkit_logo' className='logo'/>
    
    <Switcher toggled={isDev} onClick={handleToggle}/>
    
    <button 
    style={{zIndex:'2', position:'absolute', bottom:'20px', right:'20px'}} 
    onClick={()=> setEndIsOpen(true)}
    >
      END
    </button>
    <End isOpen={endIsOpen} onClose={() => setEndIsOpen(false)}/>
      {/*
      =====================
           Инструкции 
      =====================
      */}
      {isLoaded ? <div className='instructions'>
      <button
        onClick={()=> setGreetIsOpen(true)}
        className='inst_btn'
      />
      <Modal 
      isOpen={greetIsOpen} 
      onClose={()=> setGreetIsOpen(false)} 
      title={'Инструкции'} 
      >
        <Greet/>
      </Modal>
      </div>: ' ' }
      
      <pathContext.Consumer>
          {({ isDev }) => (isDev ? <DevMap /> : <Map />)}
      </pathContext.Consumer>

    </div>
  </div>
  </PathProvider>
  );
}

export default App;