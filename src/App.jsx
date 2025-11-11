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
      <Canvas
        camera={{position: [6, 2, 0]}}
        style={{width: "100%", height: "100%"}}>
        
        <Caixa
          walking={rodar} 
          angulo={angle}
          setReset={setReset}
          reset={reset}/>
        
        <ambientLight intensity={.5}/>
        <directionalLight intensity={1} position={[.5, 1, 0]}/>
        <OrbitControls />
        <gridHelper />
      </Canvas>
      <div id="wrapper">
          <h1>Vetores na Pratica</h1>
          <div id="actions">
            <button id="run" onClick={() => setRodar(!rodar)}>{rodar ? "Parar" : "Rodar"}</button>
            <button id="reset" onClick={() => setReset(true)}>Resetar</button>
          </div>
      </div>
    </>
  )
}

export default App
