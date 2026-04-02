
import { createContext, useMemo, useState } from "react";

const pathContext = createContext();

export const PathProvider = ({ children }) => {
    const [isDev, setIsDev] = useState(false);
    
    const toggleMode = () => {
        setIsDev(prev => !prev);
    };
    
    const value = useMemo(() => ({
        isDev,
        toggleMode,
        setIsDev
    }), [isDev]);
    
    return (
        <pathContext.Provider value={value}>
            {children}
        </pathContext.Provider>
    );
};

export default pathContext; 