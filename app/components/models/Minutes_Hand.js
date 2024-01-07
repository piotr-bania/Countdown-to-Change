import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'

const Live_Time = () => new Date()

const calculate_minutes_angle = () => {
    const currentTime = Live_Time()
    const minutes = currentTime.getMinutes()
    const seconds = currentTime.getSeconds()

    const exact_minute = minutes + seconds / 60
    const angle = ((exact_minute / 60) * Math.PI * 2) - Math.PI / 2

    return angle
}

const Minutes_Hand = () => {
    const handRef = useRef()
    const { nodes, materials } = useGLTF('./models/hands.glb')

    useFrame(() => {
        const angle = calculate_minutes_angle()
        handRef.current.rotation.z = -angle
    })

    return (
        <mesh
            ref={handRef}
            castShadow
            receiveShadow
            geometry={nodes.minutes.geometry}
            material={materials.titanium}
            position={nodes.minutes.position}
        />
    )
}

export default Minutes_Hand