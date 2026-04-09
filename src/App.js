import { useContext, useEffect, useState } from 'react';

import './styles/animations.css'
import './styles/ticTacToe.css'
import './styles/modals/FindSecret.css'
import './styles/alchemy.css'
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
import DevMap from './components/DevMap';
import { PathProvider } from './context/pathContext';
import pathContext from './context/pathContext';
import QuestTracker from './components/QuestTracker';
import { useQuest } from './context/questContext';

function AppContent() {
  const [greetIsOpen, setGreetIsOpen] = useState(false);
  const [init, setInit] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const { isDev, setIsDev } = useContext(pathContext);
  const {resetProgress} = useQuest()

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
  const mock_text = (
            <p>Приветствуем тебя! <br/>
            Сегодня мы предлагаем сыграть в небольшую игру, которая поверхностно погружает в повседневные суету из задач и проблем разработчика.
            Вы знаете, что такое сетевой пакет? Это набор данных, передаваемый по сети, от одной точки в другую - от соседа к соседа и от компютера к смартфону.
            Для того, чтобы переача данных прошла успешно от отправителя к адресату, нужно правильно настроить для него маршрут. Перед вами карта. Сопроводите пакет от точки "А" к точке "Б", пройдя все заботы и проблемы.
            </p>
  )


  return (
    <div>
        <button onClick={resetProgress} style={{position:'fixed', right:'100px', bottom:'100px',zIndex:'29292992'}}>
            Сбросить игру
        </button>
      <div className={`map ${!isDev ? "" : "dev"}`}>
        <img src={grey_dots} alt='серые точки' className='background-dots' data-dots="1"/>
        <img src={grey_dots} alt='серые точки' className='background-dots' data-dots="2"/>
        <img src={!isDev ? blue_line : green_line} alt='синяя линия' className='background-line' data-dots="3" />
        <img src={mkit_logo} alt='mkit_logo' className='logo'/>
        
        <Switcher toggled={isDev} onClick={handleToggle}/>
        
        {/* <button 
          style={{zIndex:'2', position:'absolute', bottom:'20px', right:'20px'}} 
          onClick={() => setEndIsOpen(true)}
        >
          END
        </button>
        <End isOpen={endIsOpen} onClose={() => setEndIsOpen(false)}/>  */}
        
        {isLoaded ? (
          <div className='instructions'>
            <button
              onClick={() => setGreetIsOpen(true)}
              className={`inst_btn ${isDev ? "dev" : "def"}`}
            />
            <Modal 
              isOpen={greetIsOpen} 
              onClose={() => setGreetIsOpen(false)} 
              title={'Инструкции'} 
              textContent={"Приступить к выполнению задания"}
              textUnder={mock_text}
            >
              <Greet/>
            </Modal>
          </div>
        ) : ' '}

        <QuestTracker/>
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