import { useRef, useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

const Base_Scene = () => {
    const sceneRef = useRef()
    const { scene, animations } = useGLTF('./models/surreal_clock.glb')
    const { actions } = useAnimations(animations, sceneRef)

    // useEffect(() => {
    //     if (actions) {
    //         actions['SphereAction'].play()
    //     }
    // }, [actions])

    return (
        <>
            <mesh
                ref={sceneRef}
            >
                <primitive object={scene} />
            </mesh>
        </>
    )
}

export default Base_Scene