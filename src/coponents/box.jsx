import * as THREE from "three"
import { useFrame } from "@react-three/fiber"
import { useRef } from "react"
import Eixos from "./axisHelper"

function box({angulo, walking}) {

    const box = useRef()

    console.log(angulo)

    useFrame(() =>{
      const rad = Math.PI / 180

      if(walking){
        // muda a posicao
        const vetor = new THREE.Vector3(1, 1 ,0).normalize()
        const {z} = box.current.position
        const {y} = box.current.position
        console.log("x", z)
        console.log("y", y)
        console.log(vetor)
        const initial = 0
        box.current.position.set(0, y + .01 *  Math.sin(rad * angulo), z + .01 *  Math.cos(rad * angulo))
        
        // normalize torna o vetor unitario
        // onde a base nao sera unitaria, mas sum o vetor resultante
        // os valores de x y sao os radianos de cosseno e seno
        console.log(vetor)
      }
    })

  return (
    <mesh ref={box}>
        <boxGeometry />
        <meshStandardMaterial color="green"/>
        <Eixos graus={angulo} />
    </mesh>
  )
}

export default box
