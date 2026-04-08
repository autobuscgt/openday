import { useEffect, useState } from "react";
import { useQuest } from "../context/questContext";
import End from "./End";

function QuestTracker(){
    const [showAnimation, setShowAnimation] = useState(false);
    const {completedQuests} = useQuest();
    
    const mainQuests = ["tictactoe","centerDiv","findSecret","alchemy"];
    const devQuests = ["junior","middle","senior","lead"];

    const completedCount = mainQuests.filter(quest => completedQuests[quest]).length;
    const completedDevCount = devQuests.filter(quest => completedQuests[quest]).length;

    const allMainCompleted = completedCount === mainQuests.length;
    const allDevCompleted = completedDevCount === devQuests.length;
    
    console.log(allMainCompleted);
    useEffect(()=> {
        if(allMainCompleted || allDevCompleted){
            setTimeout(()=>{
                setShowAnimation(true)
            }, 3000)
        }
    },[allMainCompleted,showAnimation, allDevCompleted])
    return (
        <div>
            {allMainCompleted || allDevCompleted ? <End isOpen={showAnimation} onClose={()=> setShowAnimation(false)}/> : ""}
        </div>
    )
}
export default QuestTracker;