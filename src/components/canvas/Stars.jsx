import { useState, useRef, Suspense, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";

const Stars = (props) => {
  const ref = useRef();
  const [isMobile, setIsMobile] = useState(false);
  
  // Check for mobile device
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);
    
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };
    
    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);
  
  // Generate sphere with fewer points on mobile
  const [sphere] = useState(() => {
    // Use fewer points on mobile devices for better performance
    const count = isMobile ? 1000 : 4000;
    
    // Create positions array with proper initialization to avoid NaN values
    const positions = new Float32Array(count * 3);
    
    try {
      // Safely generate random points in a sphere
      random.inSphere(positions, { radius: 1.2 });
      
      // Validate positions to ensure no NaN values
      for (let i = 0; i < positions.length; i++) {
        if (isNaN(positions[i])) {
          positions[i] = 0; // Replace NaN with 0
        }
      }
    } catch (error) {
      console.error("Error generating star positions:", error);
      // Fill with safe values if random generation fails
      for (let i = 0; i < positions.length; i += 3) {
        positions[i] = (Math.random() - 0.5) * 2;
        positions[i + 1] = (Math.random() - 0.5) * 2;
        positions[i + 2] = (Math.random() - 0.5) * 2;
      }
    }
    
    return positions;
  });

  useFrame((state, delta) => {
    // Slower rotation on mobile for better performance
    const rotationSpeed = isMobile ? 0.005 : 0.01;
    ref.current.rotation.x -= delta * rotationSpeed;
    ref.current.rotation.y -= delta * rotationSpeed * 1.5;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color='#f272c8'
          size={isMobile ? 0.001 : 0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => {
  return (
    <div className='w-full h-auto absolute inset-0 z-[-1]'>
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Stars />
        </Suspense>

        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
