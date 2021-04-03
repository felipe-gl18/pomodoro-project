import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { CountDownContext } from './countdownContext';

interface IntervalData {
    minutes: number;
    seconds: number;
    startInterval: ()=>void;
    intervalActive: boolean;
}

interface IntervalProps{
    children: ReactNode;
}

export const IntervalContext = createContext({} as IntervalData);

let intervalCount : NodeJS.Timeout; 

export function IntervalProvider({children}: IntervalProps){
    const [intervalTime, setIntervalTime] = useState(5*60);
    const [intervalActive, setIntervalActive] = useState(false);

    const minutes = Math.floor(intervalTime/60);
    const seconds = intervalTime % 60;

    function startInterval(){
        setIntervalActive(true);
    }

    useEffect(()=>{

        if(intervalActive && intervalTime  > 0){
            intervalCount = setTimeout(()=>{
                setIntervalTime(intervalTime-1);
            },1000);
        }else if(intervalTime === 0){
            setIntervalActive(false);
        }

    }, [intervalTime, intervalActive]);

    return(
        <IntervalContext.Provider
        value={{
            minutes,
            seconds,
            startInterval,
            intervalActive
        }}>
            {children}
        </IntervalContext.Provider>
    );
}