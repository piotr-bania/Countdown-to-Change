import { useRef, useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

const Base_Scene = () => {
    const sceneRef = useRef()
    const { scene, animations } = useGLTF('./models/scene.glb')
    const { actions } = useAnimations(animations, sceneRef)

    useEffect(() => {
        if (actions) {
            actions['7Action'].play()
            actions['12Action'].play()
            actions['THREEAction'].play()
        }
    }, [actions])

    return (
        <>
            <mesh
                ref={sceneRef}
                castShadow
                receiveShadow
            >
                <primitive object={scene} />
            </mesh>
        </>
    )
}

export default Base_Scene