import React, { useContext, useState } from 'react';
import { CountDownContext } from '../context/countdownContext';
import { IntervalContext } from '../context/IntervalContext';

import styles from '../styles/interval.module.css';

export function Interval(){
    const { intervalActive } = useContext(IntervalContext);
    const { hasFinished, resetCountDown } = useContext(CountDownContext);

    const {minutes, seconds } = useContext(IntervalContext);

    const [minuteLeft, minuteRigth] = String(minutes).padStart(2, '0').split('');
    const [secondsLeft, secondsRigth] = String(seconds).padStart(2, '0').split('');

    return(
            <div className={styles.interval}>
                <h4>Intervalo</h4>
                {hasFinished?(
                    <>
                        {intervalActive?(
                            <div className={styles.intervalminutes}>
                                <span>{minuteLeft}</span>
                                <span>{minuteRigth}</span>
                                <span>:</span>
                                <span>{secondsLeft}</span>
                                <span>{secondsRigth}</span>
                            </div>
                        ):(
                            <button
                            className={styles.intervalreset}
                            onClick={resetCountDown}
                            >
                                reinicar
                            </button>
                        )}
                    </>
                ):(
                    <div className={styles.isnotactive}>
                        <p>termine um ciclo para o intervalo</p>
                        <div className={styles.img}><img src='/svg/icons8-clock 1.svg' alt="clock"/></div>
                    </div>
                )}
            </div>
    );
}