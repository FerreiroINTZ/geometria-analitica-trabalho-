import * as THREE from "three"
import { extend } from "@react-three/fiber"
import { useControls } from "leva"

// imoprta o axisHelper para o projeto
extend({ArrowHelper: THREE.ArrowHelper})

function axisHelper({graus}) {
  
      // cancula o radiano de um gral
      const rad = Math.PI / 180
      const angle = rad * graus

      // para onde vai
    const destino = new THREE.Vector3(0, Math.sin(angle), Math.cos(angle))
    // de onde vem
    const origin = new THREE.Vector3(0, 0, 0)

  return (
    // <></>
    <arrowHelper args={[destino, origin, 2, "green"]}/>
  )
}

export default axisHelper
