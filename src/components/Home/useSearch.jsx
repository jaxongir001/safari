import { createContext, useContext, useState } from 'react';

const SearchContext = createContext();
export const useSearchContext = () => useContext(SearchContext);
export const SearchProvider = ({ children }) => {
    const [inputVal, setInputVal] = useState('');

    return (
        <SearchContext.Provider value={{ inputVal, setInputVal }}>
            {children}
        </SearchContext.Provider>
    );
};