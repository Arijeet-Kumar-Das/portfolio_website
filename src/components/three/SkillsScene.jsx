import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import SceneWrapper from "./SceneWrapper";

function CoreStackNodes() {
  const groupRef = useRef(null);

  useFrame(({ clock }) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.2) * 0.35;
  });

  return (
    <group ref={groupRef}>
      <mesh position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[1.05, 1.12, 80]} />
        <meshStandardMaterial color="#334155" metalness={0.3} roughness={0.58} />
      </mesh>
      <mesh position={[-0.9, 0.2, 0.15]}>
        <sphereGeometry args={[0.22, 26, 26]} />
        <meshStandardMaterial color="#38bdf8" emissive="#38bdf8" emissiveIntensity={0.2} />
      </mesh>
      <mesh position={[0.9, -0.18, -0.1]}>
        <sphereGeometry args={[0.22, 26, 26]} />
        <meshStandardMaterial color="#4ade80" emissive="#22c55e" emissiveIntensity={0.17} />
      </mesh>
      <mesh position={[0, 0.45, -0.2]}>
        <sphereGeometry args={[0.2, 26, 26]} />
        <meshStandardMaterial color="#60a5fa" emissive="#3b82f6" emissiveIntensity={0.17} />
      </mesh>

      {[
        [-1.35, -0.55, -0.5],
        [1.25, 0.55, -0.6],
        [0.05, -0.85, -0.8],
        [0.6, 0.95, -0.7],
        [-0.55, 0.88, -0.75],
      ].map((position, index) => (
        <mesh key={index} position={position} scale={0.04}>
          <sphereGeometry args={[1, 10, 10]} />
          <meshStandardMaterial
            color="#7dd3fc"
            emissive="#7dd3fc"
            emissiveIntensity={0.15}
            roughness={0.4}
          />
        </mesh>
      ))}
    </group>
  );
}

export default function SkillsScene() {
  return (
    <SceneWrapper className="h-56 w-full rounded-2xl" camera={{ position: [0, 0.4, 4.2], fov: 44 }}>
      <ambientLight intensity={0.58} />
      <directionalLight position={[3, 3, 3]} intensity={0.95} color="#cbd5e1" />
      <directionalLight position={[-3, -2, -2]} intensity={0.2} color="#1e293b" />
      <CoreStackNodes />
    </SceneWrapper>
  );
}
