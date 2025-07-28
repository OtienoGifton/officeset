import { Canvas } from "@react-three/fiber";
import { OrbitControls, Bounds } from "@react-three/drei";
import Model from "./assets/Model/Model";

export default function App() {
  return (
    <div className="max-h-screen max-w-screen bg-gray-100 border-4 border-blue-600 overflow-hidden">
      <div
        style={{
          position: "absolute",
          top: "1rem",
          left: "1rem",
          background: "rgba(0, 0, 0, 0.6)",
          color: "white",
          padding: "1rem",
          borderRadius: "0.5rem",
          zIndex: 10,
          maxWidth: "300px",
        }}
      >
        <h2 style={{ marginBottom: "0.5rem" }}>Office Set-up Model</h2>
        <p style={{ fontSize: "0.9rem" }}>
          Use your finger or left click to rotate
        </p>
        <h4 style={{ marginTop: "1rem" }}>
          <a
            href="https://github.com/OtienoGifton/officeset"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#61dafb" }}
          >
            GitHub Link
          </a>
        </h4>
      </div>

      <Canvas
        style={{ height: "100vh", width: "100vw", overflow: "hidden" }}
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
