import { Float } from "@react-three/drei";
import { useMemo } from "react";
import * as THREE from "three";

export default function FloatingShape({
  type = "sphere",
  position = [0, 0, 0],
  scale = 1,
  color = "#334155",
  roughness = 0.5,
  metalness = 0.25,
}) {
  // subtle variation per shape (VERY important)
  const materialProps = useMemo(() => {
    const baseColor = new THREE.Color(color);

    return {
      color: baseColor,
      roughness: roughness,
      metalness: metalness,
      emissive: baseColor.clone().multiplyScalar(0.15),
    };
  }, [color, roughness, metalness]);

  return (
    <Float
      speed={1}
      rotationIntensity={0.4}
      floatIntensity={1}
    >
      <mesh position={position} scale={scale}>
        {type === "sphere" && <sphereGeometry args={[1, 32, 32]} />}
        {type === "torus" && <torusGeometry args={[1, 0.25, 24, 64]} />}
        {type === "box" && <boxGeometry args={[1.2, 1.2, 1.2]} />}
        {type === "octahedron" && <octahedronGeometry args={[1, 0]} />}

        <meshStandardMaterial
          {...materialProps}
          envMapIntensity={0.6}
        />
      </mesh>
    </Float>
  );
}