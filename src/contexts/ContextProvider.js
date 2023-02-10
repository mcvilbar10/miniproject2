import React,{createContext, useContext, useState} from 'react'

const StateContext=createContext();

const initialState={
    chat:false,
    cart:false,
    userProfile:false,
    notification:false,
}
export const ContextProvider =({children})=>{
    const [activeMenu, setActiveMenu]=useState(true)
    const [isClicked, setIsClicked]=useState(initialState)
    const [currentMode, setCurrentMode] = useState('Light');
    const [screenSize, setScreenSize]=useState(undefined)

    const setMode = (e) => {
        setCurrentMode(e.target.value);
        localStorage.setItem('themeMode', e.target.value);
      };

    const handleClick = (clicked)=>{setIsClicked({...initialState, [clicked]:true})}
    return (
        <StateContext.Provider
            value={{
                activeMenu,
                setActiveMenu,
                isClicked,
                setIsClicked,
                handleClick,
                screenSize,
                setScreenSize,
                currentMode,
                setMode,
            }}
        >
            {children}
        </StateContext.Provider>

    )
}

export const useStateContext=()=>useContext(StateContext)