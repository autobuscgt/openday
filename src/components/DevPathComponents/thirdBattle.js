import { useQuest } from "../../context/questContext";

function Senior(){
    const {updateQuestStatus} = useQuest();
    const completeLvl = () => {
        updateQuestStatus("senior", true);
    }
    return (
        <div>
            Senior
            <button onClick={completeLvl}>
                Пройти уровень
            </button>

        </div>
    )
}
export default Senior;