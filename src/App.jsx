import {Canvas} from "@react-three/fiber"
import { OrbitControls } from '@react-three/drei'
import AxisHelper from "./coponents/axisHelper"
import Caixa from "./coponents/box"
import { useControls } from "leva"
import { useEffect, useRef, useState } from "react"

function App() {

  const [rodar, setRodar] = useState(false)
  const [reset, setReset] = useState(false)
  const [positions, setPositions] = useState([{x: 0, y: 0}])

  const infoBox = useRef()

  const {angle} = useControls({
    angle:{
      value: 90,
      max: 180,
      min: 0
    }
  })

  useEffect(() =>{
    // console.log("positions:", positions)
    console.log(infoBox.current.scroll)
  }, [positions])

  return (
    <>
      <Canvas
        camera={{position: [6, 2, 0]}}
        style={{width: "100%", height: "100%"}}>
        
        <Caixa
          walking={rodar} 
          angulo={angle}
          setReset={setReset}
          reset={reset}
          setPositions={setPositions}
          position={positions}/>
        
        <ambientLight intensity={.5}/>
        <directionalLight intensity={1} position={[.5, 1, 0]}/>
        <OrbitControls />
        <gridHelper />
      </Canvas>
      <div id="wrapper">
          <h1>Vetores na Pratica</h1>
          <div id="actions">
            <button id={rodar ? "stop" : "run"} onClick={() => setRodar(!rodar)}>{rodar ? "Parar" : "Rodar"}</button>
            <button id="reset" onClick={() => setReset(true)}>Resetar</button>
          </div>
          <ul ref={infoBox}>
            {positions?.map((vall, index) =>
              <p>{vall.x}</p>
            )}
          </ul>
      </div>
    </>
  )
}

export default App
