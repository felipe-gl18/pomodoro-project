import Head from 'next/head'

import { CountDownProvider } from '../context/countdownContext';
import { Countdown } from '../components/countdownComponent';
import { Interval } from '../components/IntervalComponent';

export default function Home() {
  return (
    <div className="pomodoro">
      <CountDownProvider>
        <Countdown />
        <Interval />
      </CountDownProvider>
    </div>
  )
}
