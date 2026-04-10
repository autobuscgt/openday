import { useContext, createContext, useState, useMemo, useEffect } from "react";

const QuestContext = createContext();

export const useQuest = () => {
    const context = useContext(QuestContext);
    if (!context) {
        throw new Error('useQuest must be used within QuestProvider');
    }
    return context;
};

const loadProgressFromStorage = () => {
    const savedProgress = localStorage.getItem('questProgress');
    if (savedProgress) {
        return JSON.parse(savedProgress);
    }
    return {
        tictactoe: false,
        alchemy: false,
        findSecret: false,
        centerDiv: false,
        junior: false,
        middle: false,
        senior: false,
        lead: false,
    };
};

const saveProgressToStorage = (progress) => {
    localStorage.setItem('questProgress', JSON.stringify(progress));
};

export const QuestProvider = ({ children }) => {
    const [completedQuests, setCompletedQuests] = useState(loadProgressFromStorage);
    useEffect(() => {
        saveProgressToStorage(completedQuests);
    }, [completedQuests]);

    const updateQuestStatus = (questName, isCompleted) => {
        setCompletedQuests(prev => ({
            ...prev,
            [questName]: isCompleted
        }));
    };

    const resetProgress = () => {
        const resetState = {
            tictactoe: false,
            alchemy: false,
            findSecret: false,
            centerDiv: false,
            junior: false,
            middle: false,
            senior: false,
            lead: false,
        };
        setCompletedQuests(resetState);
        saveProgressToStorage(resetState);
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