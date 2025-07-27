import { Canvas } from "@react-three/fiber";
import { OrbitControls, Bounds } from "@react-three/drei";
import Model from "./assets/Model/Model";

export default function App() {
  return (
    <div className="h-screen w-screen bg-gray-100 border-4 border-blue-600">
      <Canvas
        style={{ height: "90vh", width: "90vw" }}
        camera={{ position: [0, 0, 10], fov: 35 }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <Bounds fit clip observe margin={1.2}>
          <Model />
        </Bounds>
        <OrbitControls makeDefault />
      </Canvas>
    </div>
  );
}
