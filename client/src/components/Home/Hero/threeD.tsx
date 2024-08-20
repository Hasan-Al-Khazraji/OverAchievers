import React, { Suspense, useRef, useEffect } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { STLLoader } from "three/examples/jsm/loaders/STLLoader";
import { Mesh, Vector3 } from "three";
import { EffectComposer, Bloom } from "@react-three/postprocessing";

interface STLViewerProps {
  url: string;
}

const STLModel: React.FC<STLViewerProps> = ({ url }) => {
  const geometry = useLoader(STLLoader, url);
  const meshRef = useRef<Mesh>(null);

  // Center the geometry
  useEffect(() => {
    geometry.computeBoundingBox();
    const boundingBox = geometry.boundingBox;
    const center = new Vector3();
    boundingBox?.getCenter(center);
    geometry.center();

    if (meshRef.current) {
      meshRef.current.position.set(-center.x, -center.y + 20, -center.z);
    }
  }, [geometry]);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01; // Adjust the rotation speed as needed
    }
  });

  return (
    <mesh ref={meshRef} geometry={geometry}>
      <meshStandardMaterial color="#3eff69" />
    </mesh>
  );
};

const STLViewer: React.FC<STLViewerProps> = ({ url }) => {
  return (
    <Canvas camera={{ position: [150, 60, 200], fov: 20 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[1, 1, 1]} intensity={1} />
      <Suspense fallback={null}>
        <STLModel url={url} />
      </Suspense>
      {/* <EffectComposer>
        <Bloom luminanceThreshold={0} luminanceSmoothing={0} />
      </EffectComposer> */}
    </Canvas>
  );
};

export default STLViewer;
