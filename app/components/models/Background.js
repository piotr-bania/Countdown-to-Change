import { useGLTF } from '@react-three/drei'

const Background = () => {
    const { nodes, materials } = useGLTF('./models/background.glb')

    return (
        <mesh

            receiveShadow
            geometry={nodes.background.geometry}
            material={materials['background']}
            position={nodes.background.position}
        />
    )
}

export default Background