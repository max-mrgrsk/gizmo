import { useControls } from 'leva'
import { PivotControls } from '@react-three/drei'
import Plate from './Plate'

export default function Part()
{
    // ui
    const { thickness, x,y,z, scale, visible} = useControls( 
        'pivot controls', { 
        thickness : { value: 5, min: 0, max:50, step: 0.01 },
        x : '#ff177f', // red
        y : '#12ff05', // green
        z : '#3668ff', // blue
        scale: { value:100, min:1, max:500, step:1 },
        visible: true
    },{collapsed:true})


    return <>
        <PivotControls 
            anchor={[0,0,0]} 
            depthTest={false}
            // style:
            lineWidth={thickness}
            axisColors={[x,y,z]}
            scale={scale}
            fixed={true} // not scalable in perspective
            annotations={true}
        >
            <Plate />

        </PivotControls>
    </>
}