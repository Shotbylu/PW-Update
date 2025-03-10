import React, { Suspense, useEffect, useState, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");
  const modelRef = useRef();
  
  // Check if the model loaded correctly
  useEffect(() => {
    if (modelRef.current && computer.scene) {
      // Ensure the model has valid geometry
      computer.scene.traverse((child) => {
        if (child.isMesh && child.geometry) {
          // Force geometry to update its bounding sphere
          child.geometry.computeBoundingSphere();
          
          // Check for NaN values in position attribute
          if (child.geometry.attributes.position) {
            const positions = child.geometry.attributes.position.array;
            let hasNaN = false;
            
            for (let i = 0; i < positions.length; i++) {
              if (isNaN(positions[i])) {
                positions[i] = 0; // Replace NaN with 0
                hasNaN = true;
              }
            }
            
            if (hasNaN) {
              // Update the attribute and recompute
              child.geometry.attributes.position.needsUpdate = true;
              child.geometry.computeBoundingSphere();
            }
          }
        }
      });
    }
  }, [computer.scene]);

  return (
    <mesh ref={modelRef}>
      <hemisphereLight intensity={0.15} groundColor='black' />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.6 : 0.75}
        position={isMobile ? [0, -2.5, -2.0] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      style={{ height: "100vh", width: "100%" }}
      frameloop='demand'
      shadows
      dpr={[1, isMobile ? 1.5 : 2]}
      camera={{ position: isMobile ? [2, 2, 6] : [2, 2, 5], fov: isMobile ? 60 : 50 }}
      gl={{ preserveDrawingBuffer: true, antialias: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
