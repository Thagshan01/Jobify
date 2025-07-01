import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppContextProvider = (props) => {
    const { children } = props;
    
    const [searchFilter, setSearchFilter] = useState({
        title: '',
        location: ''
    });    
        
    const [isSearched, setIsSearched] = useState(false);
    
    const value = {
        setSearchFilter,
        searchFilter,
        isSearched, 
        setIsSearched
    };

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
};
