import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { MeshDistortMaterial } from '@react-three/drei';

export default function AnimatedSphere() {
  const sphereRef = useRef();

  useFrame((state) => {
    if (sphereRef.current) {
      sphereRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      sphereRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <mesh ref={sphereRef} position={[0, 0, 0]}>
      <sphereGeometry args={[2, 64, 64]} />
      <MeshDistortMaterial
        color="#3b82f6"
        attach="material"
        distort={0.4}
        speed={2}
        roughness={0.2}
        metalness={0.8}
        transparent={true}
        opacity={0.5}
      />
    </mesh>
  );
}
