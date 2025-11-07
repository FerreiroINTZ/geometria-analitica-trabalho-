import {Canvas} from "@react-three/fiber"
import { OrbitControls } from '@react-three/drei'
import AxisHelper from "./coponents/axisHelper"
import Caixa from "./coponents/box"
import { useControls } from "leva"
import { useState } from "react"

function App() {

  const [rodar, setRodar] = useState(false)
  const [reset, setReset] = useState(false)

  const {angle} = useControls({
    angle:{
      value: 90,
      max: 180,
      min: 0
    }
  })

  return (
    <>
      <h1>Gabriel Felipe</h1>
      <Canvas
        camera={{position: [6, 2, 0]}} 
        style={{backgroundColor: "red", width: "600px", height: "300px"}}>
        
        <Caixa
          walking={rodar} 
          angulo={angle}
          setReset={setReset}
          reset={reset}/>
        
        <ambientLight intensity={1}/>
        <OrbitControls />
        <gridHelper />
      </Canvas>
      <button onClick={() => setRodar(!rodar)}>{rodar ? "Rodar" : "Parar"}</button>
      <button onClick={() => setReset(true)}>Resetar</button>
    </>
  )
}

export default App
