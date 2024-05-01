import './style.css'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import { StrictMode } from 'react'
import { Leva } from 'leva'
import Scene from './Scene/Scene.jsx'
import Interface from './Interface/Interface.jsx'

const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
    <StrictMode>
        {/* <Leva collapsed={false} hidden={false} /> */}
        <Canvas
            camera={ {
                fov: 45,
                near: 0.1,
                far: 200,
                position: [ - 4, 3, 6 ]
            } }
        >
            <Scene />
            <Interface />
        </Canvas>
    </StrictMode>
)