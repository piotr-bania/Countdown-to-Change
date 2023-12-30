import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'

const Live_Time = () => new Date()

const Minutes_Hand = () => {
    const handRef = useRef()
    const { nodes, materials } = useGLTF('./models/clock_hands.glb')

    useFrame(() => {
        const currentTime = Live_Time()
        const minutes = currentTime.getMinutes()
        const angle = ((minutes / 60) * Math.PI * 2) - Math.PI / 2
        handRef.current.rotation.z = -angle
    })

    return (
        <mesh
            ref={handRef}
            castShadow
            receiveShadow
            geometry={nodes.minutes.geometry}
            material={materials.red}
            position={nodes.minutes.position}
        />
    )
}

export default Minutes_Hand