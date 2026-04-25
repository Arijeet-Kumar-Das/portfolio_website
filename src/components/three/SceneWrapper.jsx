import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

export default function SceneWrapper({
  className = "absolute inset-0",
  camera = { position: [0, 0, 5], fov: 45 },
  children,
}) {
  return (
    <div className={className}>
      <Canvas
        camera={camera}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      >
        <Suspense fallback={null}>{children}</Suspense>
      </Canvas>
    </div>
  );
}
