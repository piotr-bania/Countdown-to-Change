import { useState, useEffect } from 'react'
import { Text } from '@react-three/drei'

const Live_Time = () => {
    const [currentTime, setCurrentTime] = useState(new Date())

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(new Date())
        }, 1000)

        return () => {
            clearInterval(interval)
        }
    }, [])

    const hours = currentTime.getHours().toString().padStart(2, '0')
    const minutes = currentTime.getMinutes().toString().padStart(2, '0')
    const seconds = currentTime.getSeconds().toString().padStart(2, '0')
    const formattedTime = `${hours}:${minutes}:${seconds}`

    const font = './fonts/Cinzel_Decorative_Black.ttf'
    const fontSize = 0.5
    const fontColor = '#CEBBC2'

    return (
        <mesh position={[0, 1, 0]} castShadow receiveShadow>
            <Text
                font={font}
                fontSize={fontSize}
                color={fontColor}
                anchorX="center"
                anchorY="middle"
            >
                {formattedTime}
            </Text>
    </mesh>
    )
}

export default Live_Time