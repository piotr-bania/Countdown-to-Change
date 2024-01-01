import { useGLTF } from '@react-three/drei'

const Static_Clock_Parts = () => {
    const { nodes, materials } = useGLTF('./models/static_clock_parts.glb')

    return (
        <>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.react.geometry}
                material={materials['metal_rustic']}
                position={nodes.react.position}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.fiber.geometry}
                material={materials['metal_rustic']}
                position={nodes.fiber.position}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.center.geometry}
                material={materials['metal_rustic']}
                position={nodes.center.position}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.clock.geometry}
                material={materials['wood_dark']}
                position={nodes.clock.position}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.ticks.geometry}
                material={materials['metal_rustic']}
                position={nodes.ticks.position}
            />
        </>
    )
}

export default Static_Clock_Parts