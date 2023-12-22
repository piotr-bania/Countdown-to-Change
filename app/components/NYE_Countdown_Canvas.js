'use client'

import { Canvas } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { motion as m } from 'framer-motion'
import { canvas_variant } from './animations/Framer_Motion_Variants'
import Experience from './Experience'

const NYE_Countdown_Canvas = () => {
    return (
        <m.div
            initial='hidden'
            animate='visible'
            variants={canvas_variant}
            className='canvas'
            >
            <Canvas>
                <PerspectiveCamera makeDefault position={[0, 0, 5]} />
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} />
                <Experience />
                <OrbitControls />
            </Canvas>
        </m.div>
    )
}

export default NYE_Countdown_Canvas