import { useEffect, useState } from "react";
import { useQuest } from "../../context/questContext";
import { game_cards } from "./assets";
import {DndProvider, useDrag, useDrop} from 'react-dnd'
import {HTML5Backend} from 'react-dnd-html5-backend'

import CPU from './images/CPU.svg';

import hardware from './images/hardware.png'
import mb from './images/mb.png'
import vd from './images/vd.png'
import power_unit from './images/power_unit.png'

import purple_box from './images/purple_box.svg'


const slotImages = {
    cpu: CPU,
    videocard: vd,
    ram: purple_box,
    hdd: hardware,
    power_unit: power_unit,
    motherboard: mb,
}

const ItemTypes = {
    COMPUTER_PART: 'computer_part',
}

const DraggableCard = ({card, onDrop}) => {
    const [{isDragging}, drag] = useDrag(()=> ({
        type:ItemTypes.COMPUTER_PART,
        item:{id:card.id, type:card.type},
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging()
        }),
        end: (item, monitor) => {
        if (!monitor.didDrop()) {
            console.log('Не попали элементом');
        }
        },

    }))
    
    return (
        <div ref={drag} className="computer-card"       
        style={{
        opacity: isDragging ? 0.4 : 1,
        cursor: 'grab',
        }}
        >
        <img src={card.img} draggable="false" alt={card.type} />
        <div>{card.name}</div>
        </div>
    )
}

const DropZone = ({ slotType, slotLabel, children, onDrop, isFilled, picture }) => {
  const [{ isOver, canDrop }, drop] = useDrop(() => ({
    accept: ItemTypes.COMPUTER_PART,
    canDrop: (item) => item.type === slotType,
    drop: (item) => {
      onDrop(slotType, item);
      return { dropped: true };
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
      canDrop: !!monitor.canDrop(),
    }),
  }));
  
    let componentClass = "computer-component";
    if (isFilled) { 
        componentClass += ` ${picture}`;
    }

  return (
    <div
        ref={drop}
        className={componentClass}
        component-data={slotType}
        style={{
            transition: "0.2s",
            backgroundColor: isOver && canDrop && !isFilled ? "var(--green-color)" : "",
            backgroundImage: isFilled ? `url(${slotImages[slotType]})` : 'none',
        }}
    >
      <div style={{textAlign:'center'}}>
        {!isFilled && ''}
      </div>
    </div>
  );
};


function ComputerBuilder(){
const {updateQuestStatus} = useQuest();

const [slots, setSlots] = useState({
        cpu:false,
        videocard:false,
        motherboard:false,
        power_unit:false,
        ram:false,
        hdd:false
})

const handleDrop = (slotType, item) => {
    setSlots(prev => ({
        ...prev,
        [slotType]: true,
    }));
    console.log(`Установлен ${item.type} в слот ${slotType}`);
};

const isComplete = Object.values(slots).every(slot => slot === true);


useEffect(()=> {
    if(isComplete){
        updateQuestStatus('junior', true);
        alert('Поздравляю, вы собрали компутер!')
    }
}, [slots, isComplete])

    return (
        <DndProvider backend={HTML5Backend}>
        <div className="computer-cards-container">
            <div className="junior-game" data-side="left">
            <h1>Комплектующие</h1>
                <div className="computer-card-container" id="drag-box">
                    {game_cards.map((card)=>(
                        <DraggableCard key={card.id} card={card}/>
                    ))}
                </div>

            </div>
            <div className="computer-container" data-side="right" id="drop-box">
                <div className="junior-game-field">
                        <DropZone 
                            slotLabel={"Процессор"} 
                            slotType={"cpu"} 
                            onDrop={handleDrop} 
                            picture={"cpu_completed"}
                            isFilled={slots.cpu}
                        /> 

                        <DropZone 
                            slotLabel={"Видеокарта"} 
                            slotType={"videocard"} 
                            onDrop={handleDrop} 
                            picture={"videocard_completed"}
                            isFilled={slots.videocard}
                        /> 

                        <DropZone 
                            slotLabel={"Материнская плата"} 
                            slotType={"motherboard"} 
                            onDrop={handleDrop} 
                            picture={"motherboard_completed"} 
                            isFilled={slots.motherboard}
                        />  
                        <DropZone 
                        slotLabel={"Оперативная память"} 
                        slotType={"ram"} 
                        onDrop={handleDrop} 
                        picture={"ram_completed"}
                        isFilled={slots.ram}
                        />
                        <DropZone 
                        slotLabel={"Жесткий диск"} 
                        slotType={"hdd"} 
                        onDrop={handleDrop} 
                        picture={"hdd_completed"}
                        isFilled={slots.hdd}/> 
                        
                        <DropZone 
                        slotLabel={"Блок питания"} 
                        slotType={"power_unit"} 
                        onDrop={handleDrop} 
                        picture={"powet_unit_completed"}
                        isFilled={slots.power_unit}/> 
                        
                </div>
            </div>
                {/* <button onClick={completeLvl} className="complete-lvl"> Пройти уровень </button> */}
        </div>

        </DndProvider>
    )
}
export default ComputerBuilder;