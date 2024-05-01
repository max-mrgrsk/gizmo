import { shaderMaterial } from '@react-three/drei'
import { extend, useFrame } from '@react-three/fiber'
import { useControls } from 'leva'
import * as THREE from 'three'
import gridVertexShader from './vertex.glsl'
import gridFragmentShader from './fragment.glsl'
import { useRef } from 'react'
import { useEffect } from 'react'

export default function Grid()
{
    const meshRef = useRef()

    // ui
    const { thickness, brightness, visible} = useControls( 
        'grid', { 
        thickness : { value: 0.12, min: 0, max:1, step: 0.01 },
        brightness : { value: 0.34, min: 0, max:1, step: 0.01 },
        visible: true
    },{collapsed:true})

    // shader
    const GridMaterial = shaderMaterial(
        {
            uTime: 0,
            uBrightness: brightness,
            uThickness: thickness
        },
        gridVertexShader,
        gridFragmentShader
    )

    // update shader
    useEffect(()=>{
        meshRef.current.material.uniforms.uBrightness.value = brightness
        meshRef.current.material.uniforms.uThickness.value = thickness

    },[thickness,brightness])

    useFrame((state)=>{
        meshRef.current.material.uniforms.uTime.value = state.clock.elapsedTime
    })
    
    extend({GridMaterial})

    return <>

        <mesh ref={meshRef} rotation-x={ - Math.PI * 0.5 } visible={visible}>
            <planeGeometry
                args={[ 10,10, 10,10 ]}
            />
            <gridMaterial 
                color="gray"
                transparent={true}
                side={THREE.DoubleSide}
            />
        </mesh>

    </>
}