import '../styles/map.css'

import FlagTask from './MapComponents/FlagTask';
import RoadContainer from './MapComponents/RoadContainer';

import { useQuest } from '../context/questContext';
import { useMemo, useState } from 'react';

import Alchemy from './Games/Alchemy';
import CenterDivModal from './Games/CenterDivModal';
import FindBug2 from './Games/FindBug2'
import Modal from './CommonComponents/Modal';
import QuestionModal from './Question';

const divStyle = {
  width: '100%',
  overflow: 'hidden',
  justifyContent: 'center',
  flexDirection: 'column',
  display: 'flex',
  alignItems: 'center'
}

const questMapping = {
  //'1': 'question4',
  '1': 'centerDiv',
  '2': 'question5',
  '3': 'findBug',
  '4': 'question6',
  '5': 'alchemy',
  //'7': 'question7',
};

function Map() {
  const { completedQuests } = useQuest();

  //const [isTicTacToe, setIsTicTacToe] = useState(false);
  const [isAlchemyOpen, setAlchemyIsOpen] = useState(false);
  const [findBug, setIsFindBug] = useState(false);
  const [isCenterDivOpen, setIsCenterDivOpen] = useState(false);
  const [question4, setQuestion4] = useState(false);
  const [question5, setQuestion5] = useState(false);
  const [question6, setQuestion6] = useState(false);
  const [question7, setQuestion7] = useState(false);

  const questionData = useMemo(() => [{
    question: "Как называется специалист, который создает интерфейсы, с которыми приятно работать?",
    options: ["UX/UI-дизайнер", "Мастер интерфейсов", "Frontend-разработчик", "Пентестер"],
    correctAnswer: "UX/UI-дизайнер"
  }, {
    question: "Что из перечисленного является IP-адресом?",
    options: ["IP75912", "109345.1336.00.11", "https://yandex.ru/", "172.16.13.11"],
    correctAnswer: "172.16.13.11"
  }, {
    question: "Как называется сетевое устройство, принимающее интернет от провайдера и распределяющее его (по кабелю или Wi-Fi) между домашними/офисными устройствами?",
    options: ["Маршрутизатор", "Фаерволл", "Сетевщик", "Интернет"],
    correctAnswer: "Маршрутизатор"
  }, {
    question: "Он строит цифровые крепости и отражает кибератаки. Кто это?",
    options: ["Веб-разработчик", "Разработчик программного обеспечения в сфере кибербезопасности", "Специалист по работе с базами данных", "Системный администратор"],
    correctAnswer: "Разработчик программного обеспечения в сфере кибербезопасности"
  }], []);

  const getQuestStatus = (questId) => {
    const questName = questMapping[questId];
    return completedQuests[questName] || false;
  };

  const getActiveQuest = () => {
    for (let i = 1; i <= 7; ++i) {
      const questName = questMapping[i];
      console.log(questName, completedQuests[questName])
      if (!completedQuests[questName]) {
        return i.toString();
      }
    }
    return null;
  };

  const activeQuestId = getActiveQuest();

  const handleFlagClick = (questId) => {
    if (getQuestStatus(questId)) {
      return;
    }
    switch (questId) {
      // case '1':
      //   setQuestion4(true);
      //   break;
      case '1':
        setIsCenterDivOpen(true);
        break;
      case '2':
        setQuestion5(true);
        break;
      case '3':
        setIsFindBug(true);
        break;
      case '4':
        setQuestion6(true);
        break;
      case '5':
        setAlchemyIsOpen(true);
        break;
      // case '7':
      //   setQuestion7(true);
      //   break;
      default:
        break;
    }
  };


  return (
    <div className="map-container" style={divStyle}>
      <div className='map-header'>
        <h1>{'-._={ Основной путь }=_.-'}</h1>
      </div>
      <div className='road-container'>


        {/* <div id="rd7">
          <FlagTask 
            id={"4"} 
            isCompleted={getQuestStatus('4')} 
            isActive={activeQuestId === '4'} 
            onClick={!getQuestStatus('4') ? () => handleFlagClick('4') : undefined}
          />
          <Modal isOpen={isTicTacToe} onClose={()=> setIsTicTacToe(false)} title={'Крестики нолики'} questName={"tictactoe"}> 
            <TicTacToe/>
          </Modal>
        </div> */}


        <div id="rd6">
          <FlagTask
            id={"3"}
            isCompleted={getQuestStatus('5')}
            isActive={activeQuestId === '5'}
            onClick={!getQuestStatus('5') ? () => handleFlagClick('5') : undefined}
          />

          <Modal isOpen={isAlchemyOpen} onClose={() => setAlchemyIsOpen(false)} title={'IT-Алхимия'} questName={"alchemy"}>
            <Alchemy onComplete={() => setAlchemyIsOpen(false)} />
          </Modal>
        </div>



        {/* <div id="rd5">
          <RoadContainer
            id={"3"}
            isCompleted={getQuestStatus('3')}
            isActive={activeQuestId ==='3'}
          />
        </div> */}

        <div id="rd4">
          <RoadContainer
            isActive={activeQuestId === '4'}
            isCompleted={getQuestStatus('4')}
            onClick={() => handleFlagClick('4')}
            id={"2"}
          />
          <Modal title={'Вопрос!'} isOpen={question6} onClose={() => setQuestion6(false)} questName={'question6'}>
            <QuestionModal question={questionData[2].question} options={questionData[2].options} correctAnswer={questionData[2].correctAnswer} index={6}/>
          </Modal>
        </div>

        <div id="rd3">
          <FlagTask
            id={"2"}
            isCompleted={getQuestStatus('3')}
            isActive={activeQuestId === '3'}
            onClick={!getQuestStatus('3') ? () => handleFlagClick('3') : undefined}
          />
          <Modal isOpen={findBug} onClose={() => setIsFindBug(false)} title={'Найди баг'} questName={"findBug"}>
            <FindBug2 />
          </Modal>
        </div>

        <div id="rd2">
          <RoadContainer
            isActive={activeQuestId === '2'}
            isCompleted={getQuestStatus('2')}
            onClick={() => handleFlagClick('2')}
            id={"1"}
          />
          <Modal title={'Вопрос!'} isOpen={question5} onClose={() => setQuestion5(false)} questName={'question5'}>
            <QuestionModal question={questionData[1].question} options={questionData[1].options} correctAnswer={questionData[1].correctAnswer} index={5}/>
          </Modal>
        </div>

        <div id="rd1">
          <FlagTask
            id={"1"}
            isCompleted={getQuestStatus('1')}
            isActive={activeQuestId === '1'}
            onClick={!getQuestStatus('1') ? () => handleFlagClick('1') : undefined}
          />
          <Modal isOpen={isCenterDivOpen} onClose={() => setIsCenterDivOpen(false)} title={'Центрирование дива'} questName={"centerDiv"}>
            <CenterDivModal />
          </Modal>
        </div>

      </div>

    </div>
  );
}

export default Map;