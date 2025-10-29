import * as THREE from "three"
import { useFrame } from "@react-three/fiber"
import { useRef } from "react"
import Eixos from "./axisHelper"

function box({angulo, walking}) {

    const box = useRef()

    useFrame(() =>{
      // muda a posicao
      if(walking){
        const vetor = new THREE.Vector3(1, 1 ,0)
        const {x} = box.current.position
        const {y} = box.current.position
        console.log(x)
        console.log(y)
        console.log(vetor)
        const initial = 0
        box.current.position.set(0, initial + 0, 1)

        // normalize torna o vetor unitario
        // onde a base nao sera unitaria, mas sum o vetor resultante
        // os valores de x y sao os radianos de cosseno e seno
        console.log(vetor.normalize())
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
