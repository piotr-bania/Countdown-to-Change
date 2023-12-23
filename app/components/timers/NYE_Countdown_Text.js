
import Current_Time from './Current_Time'
import { Text } from '@react-three/drei'

const NYE_Countdown_Text = () => {
    const currentTime = Current_Time()

    const NewYearsEve = new Date(currentTime.getFullYear() + 1, 0, 1)
    const timeLeft = NewYearsEve - currentTime

    const daysLeft = Math.floor(timeLeft / (1000 * 60 * 60 * 24))
    const hoursLeft = Math.floor((timeLeft / (1000 * 60 * 60)) % 24)
    const minutesLeft = Math.floor((timeLeft / 1000 / 60) % 60)
    const secondsLeft = Math.floor((timeLeft / 1000) % 60)

    const font = './fonts/Cinzel_Decorative_Black.ttf'
    const fontSize = 0.5
    const fontColor = '#CEBBC2'

    return (
        <mesh
            position={[0, 0.5, 0]}
            // rotation={[-Math.PI * .08, 0, 0]}
            // scale={.5}
            castShadow
            receiveShadow
        >
            {/* Days */}
            <Text position={[0, .75, 0]} font={font} fontSize={fontSize} color={fontColor} anchorX='center' anchorY='middle' >
                {`${daysLeft} days`}
            </Text>
            
            {/* Hours */}
            <Text position={[0, .25, 0]} font={font} fontSize={fontSize} color={fontColor} anchorX='center' anchorY='middle' >
                {`${hoursLeft} hours`}
            </Text>

            {/* Minutes */}
            <Text position={[0, -.25, 0]} font={font} fontSize={fontSize} color={fontColor} anchorX='center' anchorY='middle' >
                {`${minutesLeft} minutes`}
            </Text>

            {/* Seconds */}
            <Text position={[0, -.75, 0]} font={font} fontSize={fontSize} color={fontColor} anchorX='center' anchorY='middle' >
                {`${secondsLeft} seconds`}
            </Text>
        </mesh>
    )
}

export default NYE_Countdown_Text