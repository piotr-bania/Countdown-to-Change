import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'

const Live_Time = () => new Date()

const calculate_hours_angle = () => {
    const currentTime = Live_Time()
    const hours = currentTime.getHours()
    const minutes = currentTime.getMinutes()
    const seconds = currentTime.getSeconds()

    const exact_hour = hours + minutes / 60 + seconds / 3600
    const angle = ((exact_hour / 12) * Math.PI * 2) - Math.PI / 2

    return angle
}

const Hours_Hand = () => {
    const handRef = useRef()
    const { nodes, materials } = useGLTF('./models/hands.glb')

    useFrame(() => {
        const angle = calculate_hours_angle()
        handRef.current.rotation.z = -angle
    })

    return (
        <mesh
            ref={handRef}
            castShadow
            receiveShadow
            geometry={nodes.hours.geometry}
            material={materials.titanium}
            position={nodes.hours.position}
        />
    )
}

export default Hours_Hand