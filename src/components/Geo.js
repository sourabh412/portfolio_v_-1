import React, { useRef } from 'react';
import {  useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { motion } from 'framer-motion-3d';

function Geo() {
    const mesh = useRef(null);
    useFrame(() => { mesh.current.rotation.z -= 0.005 });
    return (
        <motion.mesh ref={mesh} rotation={[90, 0, 20]}
            animate={{
                rotateZ: 10
            }}
            transition={{
                delay: 0.2,
                duration: 2
            }}
        >
            <OrbitControls enableZoom={false} />
            <ambientLight intensity={0.5} />
            <directionalLight position={[-2, 5, 2]} intensity={1} />
            <icosahedronBufferGeometry attach='geometry' />
            <meshNormalMaterial attach='material' />
        </motion.mesh>
    );
}

export default Geo