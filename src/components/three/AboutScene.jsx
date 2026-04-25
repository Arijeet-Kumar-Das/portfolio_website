import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Float } from "@react-three/drei";
import SceneWrapper from "./SceneWrapper";

function DevWorkspace() {
  const groupRef = useRef();

  useFrame((state) => {
    if (!groupRef.current) return;

    // smooth subtle motion
    groupRef.current.rotation.y =
      Math.sin(state.clock.elapsedTime * 0.4) * 0.15;
  });

  return (
    <group ref={groupRef} position={[0, -0.3, 0]}>
      
      {/* Desk */}
      <mesh position={[0, -1, 0]}>
        <boxGeometry args={[2.5, 0.1, 1.5]} />
        <meshStandardMaterial color="#020617" />
      </mesh>

      {/* Laptop base */}
      <mesh position={[0, -0.6, 0.2]} rotation={[-0.3, 0, 0]}>
        <boxGeometry args={[1.2, 0.08, 0.8]} />
        <meshStandardMaterial color="#1e293b" />
      </mesh>

      {/* Laptop screen */}
      <mesh position={[0, -0.15, -0.2]} rotation={[0.4, 0, 0]}>
        <boxGeometry args={[1.2, 0.7, 0.05]} />
        <meshStandardMaterial
          color="#0f172a"
          emissive="#38bdf8"
          emissiveIntensity={0.15}
        />
      </mesh>

      {/* Floating "code panel" */}
      <Float speed={1} rotationIntensity={0.3} floatIntensity={0.6}>
        <mesh position={[0.8, 0.5, -0.5]}>
          <boxGeometry args={[0.6, 0.4, 0.05]} />
          <meshStandardMaterial
            color="#0f172a"
            emissive="#22c55e"
            emissiveIntensity={0.1}
          />
        </mesh>
      </Float>

      {/* Floating element */}
      <Float speed={1.2} rotationIntensity={0.4} floatIntensity={0.8}>
        <mesh position={[-0.9, 0.6, -0.7]}>
          <torusGeometry args={[0.25, 0.08, 20, 40]} />
          <meshStandardMaterial
            color="#38bdf8"
            emissive="#0ea5e9"
            emissiveIntensity={0.2}
          />
        </mesh>
      </Float>
    </group>
  );
}

export default function AboutScene() {
  return (
    <SceneWrapper
      className="h-72 w-full rounded-2xl"
      camera={{ position: [0, 0.2, 4.5], fov: 45 }}
    >
      {/* lighting */}
      <ambientLight intensity={0.5} />

      <directionalLight
        position={[3, 4, 5]}
        intensity={1}
        color="#e2e8f0"
      />

      <pointLight position={[0, 1, 2]} intensity={0.6} color="#38bdf8" />

      <DevWorkspace />
    </SceneWrapper>
  );
}