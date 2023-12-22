'use client'

import { useState, useEffect } from 'react'

const Current_Time = () => {
    const [currentTime, setCurrentTime] = useState(new Date())

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(new Date())
        }, 1000)

        return () => {
            clearInterval(interval)
        }
    }, [])

    return currentTime
}

export default Current_Time