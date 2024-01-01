import { useRef, useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

const Animated_Clock_Parts = () => {
    const sceneRef = useRef()
    const { scene, animations } = useGLTF('./models/animated_clock_parts.glb')
    const { actions } = useAnimations(animations, sceneRef)

    useEffect(() => {
        if (actions) {
            actions['7Action'].play()
            actions['12Action'].play()
            actions['THREEAction'].play()
        }
    }, [actions])

    return (
        <mesh ref={sceneRef} >
            <primitive object={scene} />
        </mesh>
    )
}

export default Animated_Clock_Parts