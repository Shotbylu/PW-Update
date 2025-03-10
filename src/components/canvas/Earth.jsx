import React, { Suspense, useState, useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Earth = ({ isMobile }) => {
  const earth = useGLTF("./planet/scene.gltf");
  const modelRef = useRef();
  
  // Check if the model loaded correctly
  useEffect(() => {
    if (modelRef.current && earth.scene) {
      // Ensure the model has valid geometry
      earth.scene.traverse((child) => {
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
  }, [earth.scene]);

  return (
    <primitive 
      ref={modelRef}
      object={earth.scene} 
      scale={isMobile ? 2.0 : 2.5} 
      position-y={0} 
      rotation-y={0} 
    />
  );
};

const EarthCanvas = () => {
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
      shadows
      frameloop='demand'
      dpr={[1, isMobile ? 1.5 : 2]}
      gl={{ preserveDrawingBuffer: true, antialias: true }}
      camera={{
        fov: isMobile ? 55 : 45,
        near: 0.1,
        far: 200,
        position: isMobile ? [-3, 2.5, 5] : [-4, 3, 6],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth isMobile={isMobile} />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;
