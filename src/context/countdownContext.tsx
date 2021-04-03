import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { IntervalContext } from './IntervalContext';

interface CountDownData{
    minutes: number;
    seconds: number;
    isActive: boolean;
    hasFinished: boolean;
    startCountDown: ()=>void;
    resetCountDown: ()=>void;
}

interface CountDownProps{
    children: ReactNode;
}

export const CountDownContext = createContext({} as CountDownData);

let countdown : NodeJS.Timeout;

export function CountDownProvider({children}: CountDownProps){
    const { startInterval } = useContext(IntervalContext);

    const [time, setTime] = useState(25*60);
    const [isActive, setIsActive] = useState(false);
    const [hasFinished, setHasFinished] = useState(false);
    
    const minutes = Math.floor(time/60);
    const seconds= time%60;

    function startCountDown(){
        setIsActive(true);
    }

    function resetCountDown(){
        clearTimeout(countdown);
        setTime(25*60);
        setIsActive(false);
        setHasFinished(false);
    }

    useEffect(()=>{

        if(isActive && time > 0) {
            countdown = setTimeout(()=>{
                setTime(time-1)
            },1000);
        } else if(time === 0){
            setHasFinished(true);
            setIsActive(false);
            startInterval();
        }

    }, [time, isActive])

    return(
        <CountDownContext.Provider
        value={{
            minutes,
            seconds,
            isActive,
            hasFinished,
            startCountDown,
            resetCountDown,
        }}>
            {children}
        </CountDownContext.Provider>
    );
}