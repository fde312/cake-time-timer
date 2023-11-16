import { useState, useEffect } from 'react';

export default function App() {
    const [minutes, setMinutes] = useState(0);
    const [hours, setHours] = useState(0);
    const [hasStarted, setHasStarted] = useState(false);
    const [isDisabled, setIsDisabled] = useState(false);

    useEffect(() => {
        console.log('### useEffect');
        if (hours >= 0 && minutes >= 0 && hasStarted) {
            setTimeout(() => {
                console.log('### setTimeout');
                if (minutes === 0 && hours > 0) {
                    setHours((prevHours) => {
                        return prevHours - 1;
                    });
                    setMinutes(59);
                } else if (minutes !== 0) {
                    setMinutes((prevMins) => {
                        return prevMins - 1;
                    });
                }
            }, 36000);
        }

        if (hours === 0 && minutes === 0) {
            setHasStarted(false);
            setIsDisabled(false);
        }
    }, [hasStarted, minutes, hours]);

    return (
        <>
            <div>hello känzi</div>
            <div className='text-center my-5'>
                <div className='text-6xl'>INTERHYP CAKE TIME TIMER</div>
                <div className='block text-6xl my-5'>🍰🍰🍰</div>
            </div>
            <div className='flex justify-center my-20'>
                <div className='text-5xl'>NEXT CAKE TIME IN</div>
            </div>

            <div className='flex justify-center my-5'>
                <div className=''>
                    <div className='flex my-3'>
                        <div className='block text-center'>
                            <p className='text-4xl'>Hours</p>

                            <input
                                className='text-9xl w-40 text-center'
                                type='text'
                                disabled={isDisabled}
                                value={hours}
                                onChange={(e) => setHours(+e.target.value)}
                            />
                        </div>
                        <span className='text-9xl mx-8 h-1/2 my-auto'>:</span>
                        <div className='block text-center'>
                            <p className='text-4xl'>Minutes</p>
                            <input
                                className='text-9xl w-40 text-center'
                                type='text'
                                disabled={isDisabled}
                                value={minutes}
                                onChange={(e) => setMinutes(+e.target.value)}
                            />
                        </div>
                    </div>
                </div>
                <div className='text-center'></div>
            </div>
            <div className='flex justify-center my-5'>
                <button
                    className='text-3xl border-b'
                    onClick={() => {
                        setHasStarted(true);
                        setIsDisabled(true);
                    }}
                >
                    Start Timer
                </button>
            </div>
        </>
    );
}