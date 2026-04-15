
import FlagTask from './MapComponents/FlagTask';
import RoadContainer from './MapComponents/RoadContainer';
import Modal from './CommonComponents/Modal';

import ComputerBuilder from './Games/ComputerBuilder'
import FindSecret from './Games/FindSecret'
import TypeText from './Games/TypeText'
import FindBug610 from './Games/FindBug610'

import { useMemo, useState } from 'react';
import { useQuest } from '../context/questContext';
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
  '5': 'junior',
  '6': 'question1',
  '7': 'middle',
  '8': 'question2',
  '9': 'senior',
  '10': 'question3',
  '11': 'lead',
}

const mock_text = `Для того чтобы собрать компьютер, нужно перетаскивать комплектующие в соответствующие контейнеры`

function DevMap() {
  const { completedQuests } = useQuest();

  const [lead, setLead] = useState(false);
  const [senior, setSenior] = useState(false);
  const [middle, setMiddle] = useState(false);
  const [junior, setJunior] = useState(false);
  const [question1, setQuestion1] = useState(false);
  const [question2, setQuestion2] = useState(false);
  const [question3, setQuestion3] = useState(false);

  const questionData = useMemo(() => [{
    question: "Что такое переменная в коде?",
    options: ["Неизвестное, которое необходимо найти",
      "Ячейка для хранения и управления данными, которые могут в процессе выполнения программы изменяться",
      "Тип данных",
      "Оператор, который служит для повторения набора операций, пока заданное условие не будет выполнено"],
    correctAnswer: "Ячейка для хранения и управления данными, которые могут в процессе выполнения программы изменяться"
  }, {
    question: "Какой язык используется для вёрстки веб-страниц в браузере?",
    options: ["CSS", "HTML", "JavaScript", "Python"],
    correctAnswer: "HTML"
  }, {
    question: "Что из перечисленного не является операционной системой?",
    options: ["Linux", "Windows", "MacOs", "Kerny"],
    correctAnswer: "Kerny"
  }], []);

  const getQuestStatus = (questId) => {
    const questName = questMapping[questId];
    return completedQuests[questName] || false;
  };

  const getActiveQuest = () => {
    for (let i = 5; i <= 11; ++i) {
      const questName = questMapping[i];
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
      case '5':
        setJunior(true);
        break;
      case '6':
        setQuestion1(true);
        break;
      case '7':
        setMiddle(true);
        break;
      case '8':
        setQuestion2(true);
        break;
      case '9':
        setSenior(true);
        break;
      case '10':
        setQuestion3(true);
        break;
      case '11':
        setLead(true);
        break;
      default:
        break;
    }
  };
  return (
    <div className="map-container" style={divStyle}>
      <div className='map-header' data-id="dev">
        <h1>{'{__Путь р@зработчик@_}'}</h1>
      </div>
      <div className='road-container'>
        <div id='rd1'>
          <FlagTask
            item={<h3 style={{ color: 'var(--red-color)' }}>Junior</h3>}
            id={'5'}
            isActive={activeQuestId === '5'}
            isCompleted={getQuestStatus('5')}
            onClick={() => handleFlagClick('5')}
          />
          <Modal
            title={'JUNIOR'}
            isOpen={junior}
            onClose={() => setJunior(false)}
            questName={'junior'}
          >
            <FindSecret />
          </Modal>
        </div>

        <div id='rd2'>
          <RoadContainer
            isActive={activeQuestId === '6'}
            isCompleted={getQuestStatus('6')}
            onClick={() => handleFlagClick('6')}
            id={"4"}
          />
          <Modal title={'Вопрос!'} isOpen={question3} onClose={() => setQuestion3(false)} questName={'question3'}>
            <QuestionModal question={questionData[2].question} options={questionData[2].options} correctAnswer={questionData[2].correctAnswer} index={3}/>
          </Modal>
        </div>

        <div id='rd3'>
          <FlagTask
            id={'7'}
            item={<h3 style={{ color: 'var(--green-color)' }}>Middle</h3>}
            isActive={activeQuestId === '7'}
            isCompleted={getQuestStatus('7')}
            onClick={() => handleFlagClick('7')}
          />
          <Modal title={'MIDDLE'} isOpen={middle} onClose={() => setMiddle(false)} questName={'middle'}>
            <ComputerBuilder />
          </Modal>
        </div>

        <div id='rd4'>
          <RoadContainer
            id={"5"}
            isActive={activeQuestId === '8'}
            isCompleted={getQuestStatus('8')}
            onClick={() => handleFlagClick('8')}
          />
          <Modal title={'Вопрос!'} isOpen={question2} onClose={() => setQuestion2(false)} questName={'question2'}>
            <QuestionModal question={questionData[1].question} options={questionData[1].options} correctAnswer={questionData[1].correctAnswer} index={2} />
          </Modal>
        </div>

        <div id='rd5'>
          <RoadContainer
            id={"6"}
             isActive={activeQuestId === '10'}
            isCompleted={getQuestStatus('10')}
            onClick={() => handleFlagClick('10')}
          />
          <Modal title={'Вопрос!'} isOpen={question1} onClose={() => setQuestion1(false)} questName={'question1'}>
            <QuestionModal question={questionData[0].question} options={questionData[0].options} correctAnswer={questionData[0].correctAnswer} index={1} />
          </Modal>
        </div>

        <div id='rd6'>
          <FlagTask
            id={'9'}
            item={<h3 style={{ color: 'var(--white-purple)' }}>Senior</h3>}
            isActive={activeQuestId === '9'}
            isCompleted={getQuestStatus('9')}
            onClick={() => handleFlagClick('9')}
          />
          <Modal title={'SENIOR'} isOpen={senior} onClose={() => setSenior(false)} questName={'senior'}>
            <FindBug610 isOpen={senior} onClose={() => setSenior(false)} />
          </Modal>
        </div>

        <div id='rd7'>
          <FlagTask
            id={'11'}
            item={<h3 style={{ color: 'var(--orange-color)' }}>Lead</h3>}
            isActive={activeQuestId === '11'}
            isCompleted={getQuestStatus('11')}
            onClick={() => handleFlagClick('11')}
          />
          <Modal title={'LEAD'} isOpen={lead} onClose={() => setLead(false)} questName={'lead'}>
            <TypeText onClose={() => setLead(false)} />
          </Modal>
        </div>
      </div>

    </div>
  )
}
export default DevMap;