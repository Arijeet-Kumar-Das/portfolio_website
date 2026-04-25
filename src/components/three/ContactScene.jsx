import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import SceneWrapper from "./SceneWrapper";

function ParticleField() {
  const groupRef = useRef(null);
  const particles = useMemo(
    () =>
      new Array(22).fill(0).map((_, i) => ({
        position: [(Math.random() - 0.5) * 5.8, (Math.random() - 0.5) * 2.6, -Math.random() * 2.2],
        scale: 0.03 + (i % 5) * 0.012,
      })),
    []
  );

  useFrame(({ clock }) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.18) * 0.18;
  });

  return (
    <group ref={groupRef}>
      {particles.map((particle, idx) => (
        <mesh key={idx} position={particle.position} scale={particle.scale}>
          <sphereGeometry args={[1, 12, 12]} />
          <meshStandardMaterial color="#67e8f9" emissive="#22d3ee" emissiveIntensity={0.16} />
        </mesh>
      ))}
    </group>
  );
}

export default function ContactScene() {
  return (
    <SceneWrapper className="absolute inset-0" camera={{ position: [0, 0, 4], fov: 48 }}>
      <ambientLight intensity={0.45} />
      <directionalLight position={[2, 2, 2]} intensity={0.85} color="#bae6fd" />
      <ParticleField />
    </SceneWrapper>
  );
}
