import { GizmoHelper, GizmoViewcube, GizmoViewport } from '@react-three/drei'
import { useControls } from 'leva'

export default function Gizmo()
{
    // ui
    const { thickness, x,y,z, margin, box, visible} = useControls( 
        'gizmo helper', { 
        thickness : { value: 5, min: 0, max:50, step: 0.01 },
        x : '#ff177f', // red
        y : '#12ff05', // green
        z : '#3668ff', // blue
        margin: { value:80, min:1, max:100, step:1 },
        visible: true,
        box: false
    },{collapsed:true})

    return <>
    
        <GizmoHelper
            alignment="bottom-right" // widget alignment within scene
            margin={[margin, margin]} // widget margins (X, Y)
            visible={visible}
            >
            {!box && (
                <GizmoViewport 
                    axisColors={[x,y,z]} 
                    labelColor="black" 
                    visible={visible}
                />
            )}

            {box && (
                <GizmoViewcube />
            )}
            
        </GizmoHelper>
    
    </>
}