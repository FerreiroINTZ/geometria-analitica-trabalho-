import * as THREE from "three"
import { useFrame } from "@react-three/fiber"
import { useRef } from "react"

function box() {

    const box = useRef()

    useFrame(() =>{
        const vetor = new THREE.Vector3(1, 1 ,0)
        const {x} = box.current.position
        const {y} = box.current.position
        console.log(x)
        console.log(y)
        console.log(vetor)
        
        // normalize torna o vetor unitario
        // onde a base nao sera unitaria, mas sum o vetor resultante
        // os valores de x y sao os radianos de cosseno e seno
        console.log(vetor.normalize())
    })

  return (
    <mesh ref={box}>
        <boxGeometry />
        <meshStandardMaterial color="green"/>
    </mesh>
  )
}

export default box
