import { useFrame } from "@react-three/fiber"
import { useRef } from "react"

function box() {

    const box = useRef()

    useFrame(() =>{
        const {x} = box.current.position
        const {y} = box.current.position
        console.log(x)
        console.log(y)
    })

  return (
    <mesh ref={box}>
        <boxGeometry />
        <meshStandardMaterial color="green"/>
    </mesh>
  )
}

export default box
