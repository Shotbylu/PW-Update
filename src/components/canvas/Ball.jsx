import React, { Suspense, useState, useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";

import CanvasLoader from "../Loader";

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);
  const { isMobile } = props;
  const meshRef = useRef();
  
  // Validate geometry after mounting
  useEffect(() => {
    if (meshRef.current && meshRef.current.geometry) {
      // Force geometry to update its bounding sphere
      meshRef.current.geometry.computeBoundingSphere();
      
      // Check for NaN values in position attribute
      if (meshRef.current.geometry.attributes.position) {
        const positions = meshRef.current.geometry.attributes.position.array;
        let hasNaN = false;
        
        for (let i = 0; i < positions.length; i++) {
          if (isNaN(positions[i])) {
            positions[i] = 0; // Replace NaN with 0
            hasNaN = true;
          }
        }
        
        if (hasNaN) {
          // Update the attribute and recompute
          meshRef.current.geometry.attributes.position.needsUpdate = true;
          meshRef.current.geometry.computeBoundingSphere();
        }
      }
    }
  }, []);

  return (
    <Float speed={isMobile ? 1.25 : 1.75} rotationIntensity={isMobile ? 0.25 : 1} floatIntensity={isMobile ? 0.5 : 2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh 
        ref={meshRef}
        castShadow 
        receiveShadow 
        scale={isMobile ? 2.25 : 2.75}
      >
        <icosahedronGeometry args={[1, isMobile ? 0 : 1]} />
        <meshStandardMaterial
          color='#fff8eb'
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
          flatShading
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

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

    // Set loading to false after a delay to ensure components are properly initialized
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
      clearTimeout(timer);
    };
  }, []);

  return (
    <Canvas
      frameloop={isMobile ? 'demand' : 'always'}
      dpr={[1, isMobile ? 1.2 : 2]}
      gl={{ preserveDrawingBuffer: true, antialias: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} enablePan={false} />
        {!isLoading && <Ball imgUrl={icon} isMobile={isMobile} />}
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
