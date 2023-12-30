import { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

const Base_Scene = () => {
    const sceneRef = useRef()
    const scene = useGLTF('./models/surreal_clock.glb')

    return (
        <>
            <mesh
                ref={sceneRef}
            >
                <primitive object={scene.scene} />
            </mesh>
        </>
    )
}

export default Base_Scene