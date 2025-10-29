import * as THREE from "three"
import { extend } from "@react-three/fiber"

// imoprta o axisHelper para o projeto
extend({ArrowHelper: THREE.ArrowHelper})

function axisHelper() {

    // para onde vai
    const destino = new THREE.Vector3(0, 1, 0).normalize()
    // de onde vem
    const origin = new THREE.Vector3(0, 0, 0)

  return (
    // <></>
    <arrowHelper args={[destino, origin, 2, "blue"]}/>
  )
}

export default axisHelper
