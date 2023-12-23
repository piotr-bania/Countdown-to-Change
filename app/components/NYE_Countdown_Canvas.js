'use client'

import { Canvas } from '@react-three/fiber'
import { Environment, OrbitControls, PerspectiveCamera } from '@react-three/drei'
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
            <Canvas shadows >
                <PerspectiveCamera makeDefault position={[0, 1.5, 10]} />
                <Environment files='./environment/immenstadter_horn_1k.hdr' />
                <directionalLight castShadow intensity={5} />
                <Experience />
                <OrbitControls />
            </Canvas>
        </m.div>
    )
}

export default NYE_Countdown_Canvas