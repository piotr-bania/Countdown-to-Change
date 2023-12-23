'use client'

import React, { useRef } from 'react'
import NYE_Countdown_Text from './timers/NYE_Countdown_Text'
import { useGLTF } from '@react-three/drei'

const Experience = () => {
    const sceneRef = useRef()
    const scene = useGLTF('./models/scene.glb')

    return (
        <group>
            <NYE_Countdown_Text />

            <mesh
                ref={sceneRef}
                scale={2}
                position={[0, -1.5, 0]}
                castShadow
                receiveShadow
                >
                <primitive object={scene.scene} />
            </mesh>
        </group>
    )
}

export default Experience