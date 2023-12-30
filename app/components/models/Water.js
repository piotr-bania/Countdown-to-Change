'use client'

import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'
import { ShaderMaterial } from 'three'

import water_vert from '../../../public/shaders/water.vert'
import water_frag from '../../../public/shaders/water.frag'

const Water = ({ ...props }) => {
    const group = useRef()
    const { nodes, materials } = useGLTF('./models/water.glb')

    const waterMaterial = new ShaderMaterial({
        uniforms: {
            uTime: { value: 0 },

            uBigWaveElevation: { value: 0.05 },
            uBigWaveFrequency: { value: new THREE.Vector2(1, .5) },
            uBigWaveSpeed: { value: 0.5 },

            uDepthColor: { value: new THREE.Color('#3E5FCA') },
            uSurfaceColor: { value: new THREE.Color('#FFFFFF') },
            uColorOffset: { value: 0.08 },
            uColorMultiplier: { value: 5.0 },

            uTransparency: { value: 0.75 },
        },
        vertexShader: water_vert,
        fragmentShader: water_frag,
        transparent: true,
        side: 2,
    })

    useFrame(( state, delta ) => {
        waterMaterial.uniforms.uTime.value += delta
    })

    return (
        <group ref={group} {...props} dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.water.geometry}
                material={waterMaterial}
                position={nodes.water.position}
                rotation={nodes.water.rotation}
                scale={nodes.water.scale}
            />
        </group>
    )
}

export default Water