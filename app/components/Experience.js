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

            <mesh ref={sceneRef}>
                <primitive object={scene.scene} />
            </mesh>
        </group>
    )
}

export default Experience