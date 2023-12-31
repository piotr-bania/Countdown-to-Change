import Live_Time from './timers/Live_Time'
import Hours_Hand from './models/Hours_Hand'
import Minutes_Hand from './models/Minutes_Hand'
import Seconds_Hand from './models/Seconds_Hand'
import Base_Scene from './models/Base_Scene'
import Water from './models/Water'

const Experience = () => {
    return (
        <group position={[0, 0, 0]}>
            <Seconds_Hand />
            <Minutes_Hand />
            <Hours_Hand />
            <Base_Scene />
            {/* <Water /> */}
            {/* <Live_Time /> */}
        </group>
    )
}

export default Experience