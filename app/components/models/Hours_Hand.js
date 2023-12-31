import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'

const Live_Time = () => new Date()

const Hours_Hand = () => {
    const handRef = useRef()
    const { nodes, materials } = useGLTF('./models/clock_hands.glb')

    useFrame(() => {
        const currentTime = Live_Time()
        const hours = currentTime.getHours()
        const angle = ((hours / 12) * Math.PI * 2) - Math.PI / 2
        handRef.current.rotation.z = -angle
    })

    return (
        <mesh
            ref={handRef}
            castShadow
            receiveShadow
            geometry={nodes.hours.geometry}
            material={materials.gold}
            position={nodes.hours.position}
        />
    )
}

export default Hours_Hand