import { OrbitControls } from '@react-three/drei'
import Part from './Part'

export default function Scene()
{
    return <>

        <OrbitControls makeDefault />

        <Part />

    </>
}