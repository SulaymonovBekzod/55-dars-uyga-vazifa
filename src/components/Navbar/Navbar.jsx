import React, { useState, useEffect } from 'react'

export default function Navbar() {
    const [count, setCount] = useState(0)
    const [stopButton, setStopButton] = useState(false)

    useEffect(() => {
        let timeoff = setTimeout(() => {
            setCount((count) => count + 1)
        }, 1000)

        return () => clearTimeout(timeoff)
    }, [])

    function stopBtn() {
      setStopButton(true)
    }

    return (
        <div>
            <h1>I have rendered {count} times!</h1>;
            <button onClick={() => stopBtn()}>Stop</button>
        </div>

    )
}
