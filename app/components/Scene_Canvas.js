'use client'

import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { motion as m } from 'framer-motion'
import { canvas_variant } from './animations/Framer_Motion_Variants'
import Experience from './Experience'

const Scene_Canvas = () => {
    return (
        <m.div
            initial='hidden'
            animate='visible'
            variants={canvas_variant}
            className='canvas'
            >
            <Canvas shadows >
                <PerspectiveCamera makeDefault position={[0, 0, 4]} />
                <Environment files='./environment/syferfontein_18d_clear_puresky_1k.hdr' />
                <directionalLight
                    castShadow
                    position={[-2, 5, 1]}
                    intensity={1}
                    shadow-mapSize={1024}
                />
                <OrbitControls
                    minPolarAngle={Math.PI / 2 - (25 * Math.PI) / 180}
                    maxPolarAngle={Math.PI / 2 - (1 * Math.PI) / 180}
                    minDistance={2}
                    maxDistance={5}
                    enablePan={false}
                />
                <Experience />
            </Canvas>
        </m.div>
    )
}

export default Scene_Canvas