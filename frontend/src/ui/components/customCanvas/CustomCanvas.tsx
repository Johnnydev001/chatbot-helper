import {Canvas} from "@react-three/fiber";
import {Model} from "../3dmodel/Model.tsx";
import {Center, Environment, MeshReflectorMaterial, OrbitControls, Text} from '@react-three/drei'
import {EffectComposer, Bloom,  Vignette} from '@react-three/postprocessing'

import './customCanvas.scss'
import {Suspense} from "react";

export const CustomCanvas = () => {

    return <Canvas className={'custom-canvas'} dpr={[1, 2]} flat shadows={'soft'} gl={{antialias: true}} camera={{
        position: [0, 0, 23],
        fov: 60,
    }}>

        <color attach="background" args={['#191920']}/>

        <EffectComposer >
            <Bloom luminanceThreshold={0} luminanceSmoothing={0.9} height={300} intensity={0.4}/>
            <Vignette eskil={false} offset={0.1} darkness={1.1} />
        </EffectComposer>
        <fog attach="fog" args={['#191920', 15, 25]}/>
        <ambientLight intensity={0.5}/>
        <directionalLight castShadow={true} position={[1.5, 1, 1.5]} intensity={10} shadow-mapSize={1024}/>

        <OrbitControls minPolarAngle={Math.PI / 3.6} maxPolarAngle={Math.PI / 2.1 } minAzimuthAngle={Math.PI / 0.2} maxAzimuthAngle={Math.PI * 0.1}  minDistance={5} maxDistance={15}/>

        <Suspense fallback={null}>
            <Center >
                <Text castShadow={true} position={[0,-1,-4]} letterSpacing={0} fontSize={6.5} fontWeight={700} strokeWidth={10} strokeColor={'white'} outlineColor={'gray'} outlineBlur={0.2} outlineOpacity={1}  color="white" >
                    TALK TO ME
                </Text>
                <Model />
                <mesh receiveShadow={true} rotation={[-Math.PI / 2, 0, 0]} position={[0, -4, 0]}>
                    <planeGeometry args={[1000, 1000]}/>
                    <MeshReflectorMaterial
                        blur={[100, 100]}
                        resolution={1024}
                        mixBlur={1.5}
                        mixStrength={15}
                        roughness={1}
                        depthScale={24}
                        color="#050505"
                        metalness={0.3}

                        mirror={1}/>
                </mesh>
            </Center>
        </Suspense>
        <Environment preset={'city'} background={false} blur={1} />

    </Canvas>


}