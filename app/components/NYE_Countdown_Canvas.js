'use client'

import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls, PerspectiveCamera, SoftShadows } from '@react-three/drei'
import { motion as m } from 'framer-motion'
import { canvas_variant } from './animations/Framer_Motion_Variants'
import Experience from './Experience'
import { Fog } from 'three'

const NYE_Countdown_Canvas = () => {
    return (
        <m.div
            initial='hidden'
            animate='visible'
            variants={canvas_variant}
            className='canvas'
            >
            <Canvas
                shadows
                onCreated={(state) => {
                    state.gl.setClearColor('#0A171C')
                    state.scene.fog = new Fog('#306A83', 0, 15)
                }}
            >
                {/* <SoftShadows
                    
            /> */}
                <PerspectiveCamera makeDefault position={[0, 0, 5]} />
                <Environment files='./environment/evening_road_01_puresky_1k.hdr' />
                <Experience />
                <OrbitControls
                    minPolarAngle={Math.PI / 2 - (45 * Math.PI) / 180}
                    maxPolarAngle={Math.PI / 2 - (5 * Math.PI) / 180}
                    minDistance={3}
                    maxDistance={5}
                    enablePan={false}
                />
                <directionalLight
                    castShadow
                    position={[2.5, 8, 5]}
                    intensity={1}
                    shadow-mapSize={1024}
                />
            </Canvas>
        </m.div>
    )
}

export default NYE_Countdown_Canvas