import React, { useContext } from 'react';
import { CountDownContext } from '../context/countdownContext';

import styles from '../styles/countdown.module.css';

export function Countdown(){
    const { 
        minutes, 
        seconds, 
        startCountDown, 
        resetCountDown,
        isActive,
        hasFinished
    } = useContext(CountDownContext);

    const [minuteLeft, minuteRigth] = String(minutes).padStart(2, '0').split('');
    const [secondsLeft, secondsRigth] = String(seconds).padStart(2, '0').split('');

    return(
            <div className={styles.countdown}>
                <div className={styles.minutes}>
                    <span>{minuteLeft}</span>
                    <span>{minuteRigth}</span>
                    <span>:</span>
                    <span>{secondsLeft}</span>
                    <span>{secondsRigth}</span>
                </div>
                {hasFinished?(
                    <button
                    className={styles.finishedbtn}
                    disabled
                    >
                        ciclo encerrado
                    </button>
                ):(
                    <>
                        {isActive?(
                            <button
                            className={styles.resetbtn}
                            onClick={resetCountDown}
                            >
                                reiniciar ciclo
                            </button>
                        ):(
                            <button
                            className={styles.startbtn}
                            onClick={startCountDown}
                            >
                                Iniciar ciclo
                            </button>
                        )}
                    </>
                )}
            </div>
    );
}