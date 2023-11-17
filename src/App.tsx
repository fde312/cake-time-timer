import { useState, useEffect } from 'react';

export default function App() {
    const [minutes, setMinutes] = useState(0);
    const [hours, setHours] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [hasStarted, setHasStarted] = useState(false);
    const [isDisabled, setIsDisabled] = useState(false);

    useEffect(() => {
        if (hours >= 0 && minutes >= 0 && seconds >= 0 && hasStarted) {
            setTimeout(() => {
                if (seconds === 0) {
                    if (minutes === 0 && hours > 0) {
                        setHours((prevHours) => prevHours - 1);
                        setMinutes(59);
                    } else if (minutes !== 0) {
                        setMinutes((prevMins) => prevMins - 1);
                    }
                    if (minutes > 0 || hours > 0) {
                        setSeconds(59);
                    }
                } else {
                    setSeconds((prevSecs) => prevSecs - 1);
                }
            }, 1000);
        }

        if (hours === 0 && minutes === 0 && seconds === 0) {
            setHasStarted(false);
            setIsDisabled(false);
        }
    }, [hasStarted, minutes, hours, seconds]);

    return (
        <div className='text-white font-bold px-2'>
            <div className='text-center mt-12'>
                <div className='text-6xl'>INTERHYP CAKE TIMER</div>
                <div className='block text-6xl mt-7 mb-44'>🍰🍰🍰</div>
            </div>
            <div className='flex justify-center mb-20 text-center'>
                <div className='text-5xl'>NEXT CAKE TIME IN</div>
            </div>
            <div className='flex justify-center my-5'>
                    <div className='flex flex-wrap my-3 gap-4 md:gap-8'>
                        <div className='block text-center'>
                            <p className='text-4xl'>HOURS</p>
                            <input
                                className='text-9xl font-mono w-36 md:w-44 text-center bg-transparent outline-0'
                                type='text'
                                disabled={isDisabled}
                                value={String(hours).padStart(2, '0')}
                                onChange={(e) => setHours(+e.target.value)}
                            />
                        </div>
                        <span className='text-9xl h-1/2 my-auto'>:</span>
                        <div className='block text-center'>
                            <p className='text-4xl'>MINUTES</p>
                            <input
                                className='text-9xl font-mono w-36 md:w-44 text-center bg-transparent outline-0'
                                type='text'
                                disabled={isDisabled}
                                value={String(minutes).padStart(2, '0')}
                                onChange={(e) => setMinutes(+e.target.value)}
                            />
                        </div>
                        <span className='hidden md:block text-7xl md:text-9xl h-1/2 my-auto'>:</span>
                        <div className='hidden md:block text-center'>
                            <p className='text-2xl md:text-4xl'>SECONDS</p>
                            <input
                                className='text-7xl md:text-9xl font-mono w-36 md:w-44 text-center bg-transparent outline-0'
                                type='text'
                                disabled={isDisabled}
                                value={String(seconds).padStart(2, '0')}
                                onChange={(e) => setSeconds(+e.target.value)}
                            />
                        </div>
                </div>
            </div>
            {!isDisabled && (
                <div className='flex justify-center my-5'>
                    <button
                        className='text-3xl bg-tertiary px-4 py-2 font-normal'
                        onClick={() => {
                            setHasStarted(true);
                            setIsDisabled(true);
                        }}
                    >
                        Start Timer
                    </button>
                </div>
            )}
        </div>
    );
}
