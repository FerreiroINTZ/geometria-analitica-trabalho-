import * as THREE from "three"
import { useFrame } from "@react-three/fiber"
import { useRef } from "react"
import Eixos from "./axisHelper"

function box({angulo, walking, setReset, reset}) {

    const caixa = useRef()

    console.log(angulo)

    useFrame(() =>{
      const rad = Math.PI / 180

      if(walking){
        // muda a posicao
        const vetor = new THREE.Vector3(1, 1 ,0).normalize()
        const {z} = caixa.current.position
        const {y} = caixa.current.position
        console.log("x", z)
        console.log("y", y)
        console.log(vetor)
        const initial = 0
        caixa.current.position.set(0, y + .005 *  Math.sin(rad * angulo), z + .005 *  Math.cos(rad * angulo))
        
        // normalize torna o vetor unitario
        // onde a base nao sera unitaria, mas sum o vetor resultante
        // os valores de x y sao os radianos de cosseno e seno
        console.log(vetor)
      }
      if(reset){
        caixa.current.position.set(0, 0 ,0)
        setReset(false)
      }
    })

  return (
    <mesh ref={caixa}>
        <boxGeometry />
        <meshStandardMaterial color="green"/>
        <Eixos graus={angulo} />
    </mesh>
  )
}

export default box
