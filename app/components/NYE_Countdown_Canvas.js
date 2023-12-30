'use client'

import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls, PerspectiveCamera } from '@react-three/drei'
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
                // onCreated={(state) => {
                //     state.gl.setClearColor('#0A171C')
                //     state.scene.fog = new Fog('#306A83', 0, 15)
                // }}
            >
                <PerspectiveCamera makeDefault position={[0, 0, 1]} />
                <Environment files='./environment/vignaioli_night_2k.hdr' />
                <Experience />
                <OrbitControls
                    minPolarAngle={Math.PI / 2 - (45 * Math.PI) / 180}
                    maxPolarAngle={Math.PI / 2 - (5 * Math.PI) / 180}
                    minDistance={1}
                    maxDistance={2}
                    enablePan={false}
                />
                {/* <directionalLight
                    castShadow
                    position={[2.5, 8, 5]}
                    intensity={1}
                    shadow-mapSize={1024}
                /> */}
            </Canvas>
        </m.div>
    )
}

export default NYE_Countdown_Canvas