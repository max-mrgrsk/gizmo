import { useControls } from 'leva'

export default function Plate()
{
    // debug part
    const {color, width, height, thickness, visible} = useControls( 'part', { 
        color : '#218d48',
        width : { value: 4, min: 0, max:8, step: 0.01 },
        height : { value: 3, min: 0, max:6, step: 0.01 },
        thickness : { value: 0.3, min: 0, max:1, step: 0.01 },
        visible: true
    },{collapsed:true})

    return <>

            <mesh position-y={ thickness / 2 } visible={visible}>
                <boxGeometry args={[ width, thickness, height ]} />
                <meshStandardMaterial color={color} />
            </mesh>

    </>
}