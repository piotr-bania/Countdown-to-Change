import Background from './models/Background'
import Static_Clock_Parts from './models/Static_Clock_Parts'
import Animated_Clock_Parts from './models/Animated_Clock_Parts'
import Hours_Hand from './models/Hours_Hand'
import Minutes_Hand from './models/Minutes_Hand'
import Seconds_Hand from './models/Seconds_Hand'

const Experience = () => {
    return (
        <group position={[0, 0, 0]}>
            <Background />
            <Static_Clock_Parts />
            <Animated_Clock_Parts />
            <Seconds_Hand />
            <Minutes_Hand />
            <Hours_Hand />
        </group>
    )
}

export default Experience