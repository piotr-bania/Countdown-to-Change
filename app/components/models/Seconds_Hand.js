import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'

const Live_Time = () => new Date()

const Seconds_Hand = () => {
    const handRef = useRef()
    const { nodes, materials } = useGLTF('./models/hands.glb')

    useFrame(() => {
        const currentTime = Live_Time()
        const seconds = currentTime.getSeconds()
        const angle = ((seconds / 60) * Math.PI * 2) - Math.PI / 2
        handRef.current.rotation.z = -angle
    })

    return (
        <mesh
            ref={handRef}
            castShadow
            receiveShadow
            geometry={nodes.seconds.geometry}
            material={materials.titanium}
            position={nodes.seconds.position}
        />
    )
}

export default Seconds_Hand