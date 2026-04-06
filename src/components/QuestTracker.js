import { useEffect, useState } from "react";
import { useQuest } from "../context/questContext";
import End from "./End";

function QuestTracker(){
    const [showAnimation, setShowAnimation] = useState(false);
    const {completedQuests} = useQuest();
    
    const mainQuests = ["tictactoe","centerDiv","findSecret","alchemy"];
    const completedCount = mainQuests.filter(quest => completedQuests[quest]).length;
    const allMainCompleted = completedCount === mainQuests.length;
    
    console.log(allMainCompleted);
    useEffect(()=> {
        if(allMainCompleted){
            setTimeout(()=>{
                setShowAnimation(true)
            }, 3000)
        }
    },[allMainCompleted,showAnimation])
    return (
        <div>
            {allMainCompleted ? <End isOpen={showAnimation} onClose={()=> setShowAnimation(false)}/> : ""}
        </div>
    )
}
export default QuestTracker;