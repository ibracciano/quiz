import { useEffect, useState } from "react"


const Timer = ({ setStop, questionNumber }) => {
    const [timer, setTimer] = useState(15)


    useEffect(() => {
        if (timer === 0) return setStop(true)
        const interval = setInterval(() => {
            setTimer(previous => previous - 1)
        }, 1000)
        return () => clearInterval(interval)
    }, [timer, setStop])



    useEffect(() => {
        setTimer(15)
    }, [questionNumber])





    return (
        <div className="flex items-center justify-center w-20 h-20 text-3xl font-black border-4 border-yellow-600 rounded-full bg-bleu mx-[40%] md:mx-[50%] mb-10">{timer}</div>
    )
}

export default Timer