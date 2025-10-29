import React from 'react'
import {Canvas} from "@react-three/fiber"
import { OrbitControls } from '@react-three/drei'

function App() {
  return (
    <>
      <h1>Gabriel Felipe</h1>
      <Canvas style={{backgroundColor: "red", width: "600px", height: "300px"}}>
        <mesh>
          <boxGeometry />
          <meshPhysicalMaterial color="green"/>
        </mesh>
        <OrbitControls />
        <gridHelper />
      </Canvas>
    </>
  )
}

export default App
