import { useQuest } from "../../context/questContext";


import COMPUTER from './images/computer.svg'
import RAM from './images/RAM.svg';
import VIDEO_CARD from './images/VIDEOCARD.svg';
import HDD from './images/HDD.svg';
import POWER_UNIT from './images/PU.svg';
import CPU from './images/CPU.svg';
import MOTHERBOARD from './images/MotherBoard.svg';

function FIFO(){
    const {updateQuestStatus, completedQuests} = useQuest();
    const completeLvl = () => {
        updateQuestStatus('junior', true);
        console.log(completedQuests);
    }
    const cards = [
        {id: 1, name: 'RAM', img: RAM, position:''},
        {id: 2, name: 'БП', img: POWER_UNIT, position:''},
        {id: 3, name: 'CPU', img: CPU, position:''},
        {id: 4, name: 'Видеокарта', img: VIDEO_CARD, position:''},
        {id: 5, name: 'Мат. плата', img: MOTHERBOARD, position:''},
        {id: 6, name: 'Жесткий диск', img: HDD, position:''},
    ]

    return (
        <div className="computer-cards-container">
            <div className="junior-game-field">
            <h1>Собери компьютер</h1>
                <div className="computer-card-container">
                    {cards.map((card)=>(
                        <div className="computer-card" key={card.id}> 
                            <img src={card.img}/>
                        </div>
                    ))}
                </div>
            </div>
            <div className="computer-container">
                <h1>Перетаскивай комплектующие!</h1>
                <img src={COMPUTER}/>
                <button onClick={completeLvl}>
                Пройти уровень
                </button>
            </div>

        </div>
    )
}
export default FIFO;