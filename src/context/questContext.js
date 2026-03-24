import { useContext, createContext, useState, useMemo } from "react";


const QuestContext = createContext();

export const useQuest = () => {
    const context = useContext(QuestContext);
    if (!context) {
        throw new Error('useQuest must be used within QuestProvider');
    }
    return context;
};

export const QuestProvider = ({ children }) => {
    const [completedQuests, setCompletedQuests] = useState({
        tictactoe: false,
        alchemy: false,
        findSecret: false,
        centerDiv: false,
    });

    const updateQuestStatus = (questName, isCompleted) => {
        setCompletedQuests(prev => ({
            ...prev,
            [questName]: isCompleted
        }));
    };

    const resetProgress = () => {
        setCompletedQuests({
            tictactoe: false,
            alchemy: false,
            findSecret: false,
            centerDiv: false,
        });
    };

    const value = useMemo(() => ({
        completedQuests,
        updateQuestStatus,
        resetProgress
    }), [completedQuests]);

    return (
        <QuestContext.Provider value={value}>
            {children} 
        </QuestContext.Provider>
    );
};