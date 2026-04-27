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

function FeatureModel() {
  return (
    <Float speed={0.9} rotationIntensity={0.2} floatIntensity={0.5}>
      <group position={[0.4, -0.2, -3.2]} rotation={[0.18, -0.4, 0]}>
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[2.4, 1.45, 0.15]} />
          <meshStandardMaterial color="#0f172a" roughness={0.62} metalness={0.2} />
        </mesh>
        <mesh position={[0, 0, 0.09]}>
          <planeGeometry args={[2.15, 1.2]} />
          <meshStandardMaterial color="#0b1220" emissive="#0ea5e9" emissiveIntensity={0.08} />
        </mesh>
        <mesh position={[0, -0.85, -0.2]} rotation={[-0.5, 0, 0]}>
          <boxGeometry args={[2.6, 0.14, 1.15]} />
          <meshStandardMaterial color="#111827" roughness={0.6} metalness={0.15} />
        </mesh>
      </group>
    </Float>
  );
}

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
        count={520}
        factor={1.6}
        saturation={0}
        speed={0.12}
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
      <FeatureModel />

      {/* Shapes with smooth floating */}
      {SHAPES.map((shape, index) => (
        <Float
          key={index}
          speed={1.2}
          rotationIntensity={0.45}
          floatIntensity={1.1}
        >
          <FloatingShape {...shape} />
        </Float>
      ))}
    </SceneWrapper>
  );
}