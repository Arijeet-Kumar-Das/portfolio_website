import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { Float, Stars } from "@react-three/drei";
import FloatingShape from "./three/FloatingShape";
import SceneWrapper from "./three/SceneWrapper";


const SHAPES = [
  {
    type: "sphere",
    position: [-2.2, 1.2, -1.5],
    scale: 0.9,
    color: "#38bdf8", // accent color
  },
  {
    type: "torus",
    position: [2.4, 0.5, -2],
    scale: 1,
    color: "#818cf8",
  },
  {
    type: "box",
    position: [-1, -1.4, -1],
    scale: 0.8,
    color: "#1e293b",
  },
  {
    type: "sphere",
    position: [1.2, -1, -2.5],
    scale: 0.6,
    color: "#475569",
  },
  {
    type: "torus",
    position: [0.3, 1.8, -3],
    scale: 0.6,
    color: "#0f172a",
  },
];

function CameraRig() {
  const { camera, pointer } = useThree();

  useFrame(() => {
    camera.position.x = THREE.MathUtils.lerp(
      camera.position.x,
      pointer.x * 0.3,
      0.03
    );
    camera.position.y = THREE.MathUtils.lerp(
      camera.position.y,
      pointer.y * 0.2,
      0.03
    );

    camera.lookAt(0, 0, -2);
  });

  return null;
}

export default function ThreeScene() {
  return (
    <SceneWrapper
      className="absolute inset-0"
      camera={{ position: [0, 0, 6], fov: 45 }}
    >
      {/* Background */}
      <color attach="background" args={["#020617"]} />
      <fog attach="fog" args={["#020617", 6, 20]} />
      <Stars
        radius={45}
        depth={22}
        count={420}
        factor={1.6}
        saturation={0}
        speed={0.08}
        fade
      />

      {/* Lighting */}
      <ambientLight intensity={0.4} />

      <directionalLight
        position={[5, 5, 5]}
        intensity={1.2}
        color="#e2e8f0"
      />

      <directionalLight
        position={[-5, -3, -2]}
        intensity={0.3}
        color="#334155"
      />

      {/* Subtle glow */}
      <pointLight position={[0, 0, 2]} intensity={0.6} color="#38bdf8" />

      <CameraRig />

      {/* Shapes with smooth floating */}
      {SHAPES.map((shape, index) => (
        <Float
          key={index}
          speed={1}
          rotationIntensity={0.4}
          floatIntensity={1}
        >
          <FloatingShape {...shape} />
        </Float>
      ))}
    </SceneWrapper>
  );
}