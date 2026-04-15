import { useContext, useState } from "react";
import Modal from "./CommonComponents/Modal";
import Alchemy from "./Games/Alchemy";
import FindBug610 from "./Games/FindBug610";
import FindBug2 from "./Games/FindBug2";
import CenterDivModal from "./Games/CenterDivModal";
import ComputerBuilder from "./Games/ComputerBuilder";
import FindSecret from "./Games/FindSecret";
import TypeText from "./Games/TypeText";
import pathContext from "../context/pathContext";

function TestGames(){
    const contextValue = {
        isDev: process.env.NODE_ENV === 'development' // или любое другое значение
    };

    const [alchemy, setAlchemy] = useState(false);
    const [findBug1, setFindBug1] = useState(false);
    const [findBug2, setFindBug2] = useState(false);
    const [centerDiv, setCenterDiv] = useState(false);
    const [computerBuilder, setComputerBuilder] = useState(false);
    const [findSecret, setFindSecret] = useState(false);
    const [typeText, setTypeText] = useState(false);

    const handleOpen = (id) => {
        switch (id) {
            case 1:
                setAlchemy(true)
                break;
            case 2:
                setFindBug1(true)
                break;
            case 3:
                setFindBug2(true)
                break;
            case 4:
                setCenterDiv(true)
                break;
            case 5:
                setComputerBuilder(true)
                break;
            case 6:
                setFindSecret(true)
                break;
            case 7:
                setTypeText(true)
                break;
            default:
                break;
        }
    }

    const handleClose = () => {
        setAlchemy(false)
        setFindBug1(false)
        setFindBug2(false)
        setCenterDiv(false)
        setComputerBuilder(false)
        setFindSecret(false)
        setTypeText(false)
    }

    const level = [
        {levelId:1, component:Alchemy, state:alchemy, text:'Алхимия'},
        {levelId:2, component:FindBug610, state:findBug1, text:'Найти баг'},
        {levelId:3, component:FindBug2, state:findBug2, text:'Найти баг 2'},
        {levelId:4, component:CenterDivModal, state:centerDiv, text:'Центрирование дива'},
        {levelId:5, component:ComputerBuilder, state:computerBuilder, text:'Сборка компьютера'},
        {levelId:6, component:FindSecret, state:findSecret, text:'Найти секретный ключ'},
        {levelId:7, component:TypeText, state:typeText, text:'Ввод текста'},
    ]
    
    return ( 
        <pathContext.Provider value={contextValue}> {/* ← Добавить value */}
        <div>
            <h1 style={{fontFamily:'MB'}}> Протестировать все компоненты </h1>
            {level.map((lvl)=>(
                <div>
                <button onClick={() => handleOpen(lvl.levelId)}> {lvl.text} </button>
                    <Modal isOpen={lvl.state} key={lvl.id} onClose={handleClose}>
                        <lvl.component/>
                    </Modal>
                </div>
            ))}
        </div>
        </pathContext.Provider>    
        )
}
export default TestGames;