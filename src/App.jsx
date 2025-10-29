import {Canvas} from "@react-three/fiber"
import { OrbitControls } from '@react-three/drei'
import AxisHelper from "./coponents/axisHelper"
import Caixa from "./coponents/box"

function App() {
  return (
    <>
      <h1>Gabriel Felipe</h1>
      <Canvas
        camera={{position: [6, 2, 0]}} 
        style={{backgroundColor: "red", width: "600px", height: "300px"}}>
        
        <Caixa />

        <AxisHelper />
        
        <ambientLight intensity={1}/>
        <OrbitControls />
        <gridHelper />
      </Canvas>
    </>
  )
}

export default App
