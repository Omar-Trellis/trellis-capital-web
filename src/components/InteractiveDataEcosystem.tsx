import React, { useRef, useMemo, useEffect, useState, useCallback } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Text, OrbitControls } from '@react-three/drei';
import { motion, useInView, useAnimation, useMotionValue, useSpring } from 'framer-motion';
import * as THREE from 'three';
import { useIsMobile } from '@/hooks/use-mobile';

// Types
interface PillarProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay: number;
  inView: boolean;
}

interface ParticleProps {
  count: number;
  animation: 'scatter' | 'bar' | 'line';
}

interface FloridaMapProps {
  inView: boolean;
}

interface TrustShieldProps {
  inView: boolean;
}

// Animated Counter Component
const AnimatedCounter: React.FC<{ target: number; duration: number; suffix?: string }> = ({ 
  target, 
  duration, 
  suffix = '' 
}) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    let startTime: number;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(target * easeOutQuart));
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [target, duration]);

  return <span>{count.toLocaleString()}{suffix}</span>;
};

// Data Particles Component
const DataParticles: React.FC<ParticleProps> = ({ count, animation }) => {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const dummy = useMemo(() => new THREE.Object3D(), []);
  const [animationPhase, setAnimationPhase] = useState(0);
  const isMobile = useIsMobile();

  // Generate initial positions
  const { positions, scatterPositions, barPositions, linePositions } = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const scatterPositions = new Float32Array(count * 3);
    const barPositions = new Float32Array(count * 3);
    const linePositions = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      
      // Random initial positions
      positions[i3] = (Math.random() - 0.5) * 8;
      positions[i3 + 1] = (Math.random() - 0.5) * 6;
      positions[i3 + 2] = (Math.random() - 0.5) * 2;

      // Scatter plot formation
      scatterPositions[i3] = (Math.random() - 0.5) * 4;
      scatterPositions[i3 + 1] = (Math.random() - 0.5) * 3;
      scatterPositions[i3 + 2] = 0;

      // Bar chart formation
      const barIndex = Math.floor(i / (count / 8));
      barPositions[i3] = (barIndex - 4) * 0.8;
      barPositions[i3 + 1] = (i % (count / 8)) * 0.05 - 1;
      barPositions[i3 + 2] = 0;

      // Line graph formation
      const lineProgress = i / count;
      linePositions[i3] = (lineProgress - 0.5) * 6;
      linePositions[i3 + 1] = Math.sin(lineProgress * Math.PI * 4) * 0.5;
      linePositions[i3 + 2] = 0;
    }

    return { positions, scatterPositions, barPositions, linePositions };
  }, [count]);

  useFrame((state) => {
    if (!meshRef.current) return;

    const time = state.clock.elapsedTime;
    
    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      
      let targetX, targetY, targetZ;
      
      // Determine target position based on animation phase
      if (animationPhase === 0) {
        targetX = scatterPositions[i3];
        targetY = scatterPositions[i3 + 1];
        targetZ = scatterPositions[i3 + 2];
      } else if (animationPhase === 1) {
        targetX = barPositions[i3];
        targetY = barPositions[i3 + 1];
        targetZ = barPositions[i3 + 2];
      } else {
        targetX = linePositions[i3];
        targetY = linePositions[i3 + 1];
        targetZ = linePositions[i3 + 2];
      }

      // Smooth interpolation to target
      const currentX = positions[i3];
      const currentY = positions[i3 + 1];
      const currentZ = positions[i3 + 2];

      const lerpFactor = isMobile ? 0.04 : 0.02;
      positions[i3] = THREE.MathUtils.lerp(currentX, targetX, lerpFactor);
      positions[i3 + 1] = THREE.MathUtils.lerp(currentY, targetY, lerpFactor);
      positions[i3 + 2] = THREE.MathUtils.lerp(currentZ, targetZ, lerpFactor);

      dummy.position.set(
        positions[i3] + Math.sin(time + i * 0.1) * 0.01,
        positions[i3 + 1] + Math.cos(time + i * 0.1) * 0.01,
        positions[i3 + 2]
      );
      dummy.updateMatrix();
      meshRef.current.setMatrixAt(i, dummy.matrix);
    }
    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  // Animation phase progression
  useEffect(() => {
    const timer1 = setTimeout(() => setAnimationPhase(1), 2000);
    const timer2 = setTimeout(() => setAnimationPhase(2), 4000);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
      <sphereGeometry args={[0.015, isMobile ? 4 : 8, isMobile ? 4 : 8]} />
      <meshBasicMaterial color="#D4AF37" />
    </instancedMesh>
  );
};

// Florida Network Map Component
const FloridaNetworkMap: React.FC<FloridaMapProps> = ({ inView }) => {
  const groupRef = useRef<THREE.Group>(null);
  const [showConnections, setShowConnections] = useState(false);
  const isMobile = useIsMobile();

  // Florida cities data
  const cities = useMemo(() => [
    { name: 'Miami', x: 1.2, y: -1.5, z: 0 },
    { name: 'Orlando', x: 0.5, y: -0.3, z: 0 },
    { name: 'Tampa', x: -0.2, y: -0.8, z: 0 },
    { name: 'Jacksonville', x: 0.8, y: 1.2, z: 0 },
    { name: 'Tallahassee', x: -0.8, y: 0.8, z: 0 }
  ], []);

  // Accurate Florida outline path
  const floridaPath = useMemo(() => {
    const shape = new THREE.Shape();
    
    // Start from northwest panhandle
    shape.moveTo(-1.8, 0.8);
    shape.lineTo(-1.4, 0.85);
    shape.lineTo(-1.0, 0.9);
    shape.lineTo(-0.6, 0.85);
    shape.lineTo(-0.2, 0.8);
    
    // Northeast coast
    shape.lineTo(0.2, 0.7);
    shape.lineTo(0.5, 0.5);
    shape.lineTo(0.7, 0.2);
    shape.lineTo(0.8, -0.1);
    
    // East coast down to Miami
    shape.lineTo(0.85, -0.4);
    shape.lineTo(0.9, -0.7);
    shape.lineTo(0.95, -1.0);
    shape.lineTo(1.0, -1.3);
    shape.lineTo(1.05, -1.6);
    
    // Southern tip (Keys area)
    shape.lineTo(0.9, -1.8);
    shape.lineTo(0.6, -1.85);
    shape.lineTo(0.3, -1.8);
    shape.lineTo(0.0, -1.75);
    
    // West coast up from Keys
    shape.lineTo(-0.3, -1.6);
    shape.lineTo(-0.5, -1.3);
    shape.lineTo(-0.6, -1.0);
    shape.lineTo(-0.65, -0.7);
    shape.lineTo(-0.7, -0.4);
    
    // Gulf coast
    shape.lineTo(-0.8, -0.1);
    shape.lineTo(-0.9, 0.2);
    shape.lineTo(-1.1, 0.4);
    shape.lineTo(-1.4, 0.6);
    
    // Close the panhandle
    shape.lineTo(-1.8, 0.8);
    
    return shape;
  }, []);

  useFrame((state) => {
    if (!groupRef.current) return;
    
    // Gentle rotation
    groupRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.2) * 0.05;
  });

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => setShowConnections(true), 1000);
      return () => clearTimeout(timer);
    }
  }, [inView]);

  return (
    <group ref={groupRef} scale={inView ? (isMobile ? 0.8 : 1) : 0}>
      {/* Florida outline */}
      <mesh>
        <shapeGeometry args={[floridaPath]} />
        <meshBasicMaterial color="#D4AF37" wireframe transparent opacity={0.3} />
      </mesh>

      {/* City nodes */}
      {cities.map((city, index) => (
        <group key={city.name} position={[city.x, city.y, city.z]}>
          {/* Pulsing node */}
          <mesh>
            <sphereGeometry args={[isMobile ? 0.1 : 0.08, isMobile ? 8 : 16, isMobile ? 8 : 16]} />
            <meshBasicMaterial color="#D4AF37" />
          </mesh>
          
          {/* City label */}
          <Text
            position={[0, -0.2, 0]}
            fontSize={isMobile ? 0.12 : 0.1}
            color="#D4AF37"
            anchorX="center"
            anchorY="middle"
          >
            {city.name}
          </Text>
        </group>
      ))}

      {/* Network connections */}
      {showConnections && cities.map((city, i) => 
        cities.slice(i + 1).map((otherCity, j) => {
          const start = new THREE.Vector3(city.x, city.y, city.z);
          const end = new THREE.Vector3(otherCity.x, otherCity.y, otherCity.z);
          const mid = start.clone().lerp(end, 0.5);
          mid.z = 0.2; // Arc effect

          return (
            <mesh key={`${i}-${j}`}>
              <tubeGeometry
                args={[
                  new THREE.QuadraticBezierCurve3(start, mid, end),
                  20,
                  0.01,
                  8,
                  false
                ]}
              />
              <meshBasicMaterial color="#D4AF37" transparent opacity={0.6} />
            </mesh>
          );
        })
      )}
    </group>
  );
};

// Trust Shield Component
const TrustShield: React.FC<TrustShieldProps> = ({ inView }) => {
  const [segments, setSegments] = useState(0);
  const maxSegments = 8;
  const isMobile = useIsMobile();

  useEffect(() => {
    if (!inView) return;
    
    const interval = setInterval(() => {
      setSegments(prev => {
        if (prev >= maxSegments) {
          clearInterval(interval);
          return prev;
        }
        return prev + 1;
      });
    }, 200);

    return () => clearInterval(interval);
  }, [inView]);

  return (
    <group scale={inView ? (isMobile ? 0.8 : 1) : 0}>
      {/* Shield segments */}
      {Array.from({ length: segments }, (_, i) => {
        const angle = (i / maxSegments) * Math.PI * 2;
        const nextAngle = ((i + 1) / maxSegments) * Math.PI * 2;
        
        return (
          <mesh key={i}>
            <ringGeometry 
              args={[0.5, 1, 16, 1, angle, nextAngle - angle]} 
            />
            <meshBasicMaterial 
              color="#D4AF37" 
              transparent 
              opacity={0.8}
            />
          </mesh>
        );
      })}
      
      {/* Center emblem */}
      {segments === maxSegments && (
        <mesh>
          <circleGeometry args={[0.3, 32]} />
          <meshBasicMaterial color="#D4AF37" />
        </mesh>
      )}
    </group>
  );
};

// Individual Pillar Component
const DataPillar: React.FC<PillarProps> = ({ title, description, icon, delay, inView }) => {
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] }
      });
    } else {
      controls.start({ opacity: 0, y: 50 });
    }
  }, [controls, inView, delay]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      className="pillar-container"
    >
      <div className="pillar-icon">
        {icon}
      </div>
      
      <motion.h3
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: delay + 0.3 }}
        className="pillar-title"
      >
        {title}
      </motion.h3>
      
      <motion.p
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: delay + 0.5 }}
        className="pillar-description"
      >
        {description}
      </motion.p>
    </motion.div>
  );
};

// Main Component
const InteractiveDataEcosystem: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  const isInView = useInView(containerRef, { 
    amount: isMobile ? 0.1 : 0.3,
    margin: isMobile ? "-50px" : "-100px"
  });

  const styles = {
    container: {
      minHeight: '100vh',
      backgroundColor: '#1a1a1a',
      color: '#ffffff',
      display: 'flex',
      flexDirection: 'column' as const,
      alignItems: 'center',
      justifyContent: 'center',
      padding: isMobile ? '3rem 1rem' : '4rem 2rem',
      position: 'relative' as const,
      overflow: 'hidden'
    },
    header: {
      textAlign: 'center' as const,
      marginBottom: '4rem',
      zIndex: 10,
      position: 'relative' as const
    },
    title: {
      fontSize: isMobile ? '2rem' : 'clamp(2.5rem, 5vw, 4rem)',
      fontWeight: 700,
      color: '#ffffff',
      marginBottom: '1rem',
      lineHeight: 1.2,
      display: 'block'
    },
    subtitle: {
      fontSize: isMobile ? '1rem' : 'clamp(1rem, 2.5vw, 1.25rem)',
      color: '#888888',
      maxWidth: '600px',
      margin: '0 auto',
      lineHeight: 1.6,
      padding: isMobile ? '0 1rem' : '0'
    },
    pillarsGrid: {
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '3rem',
      maxWidth: '1200px',
      width: '100%',
      zIndex: 10,
      position: 'relative' as const
    },
    pillarContainer: {
      background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
      borderRadius: '20px',
      padding: isMobile ? '1.5rem' : '2rem',
      border: '1px solid rgba(212, 175, 55, 0.2)',
      backdropFilter: 'blur(10px)',
      position: 'relative' as const,
      overflow: 'hidden',
      width: '100%'
    },
    pillarIcon: {
      width: isMobile ? '250px' : '300px',
      height: isMobile ? '150px' : '200px',
      marginBottom: '1.5rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '0 auto 1.5rem auto'
    },
    pillarTitle: {
      fontSize: isMobile ? '1.25rem' : '1.5rem',
      fontWeight: 600,
      color: '#D4AF37',
      marginBottom: '1rem',
      textAlign: 'center' as const,
      display: 'block'
    },
    pillarDescription: {
      fontSize: isMobile ? '0.875rem' : '1rem',
      color: '#cccccc',
      lineHeight: 1.6,
      textAlign: 'center' as const,
      display: 'block'
    },
    canvas: {
      width: '100%',
      height: '100%'
    },
    backgroundElements: {
      position: 'absolute' as const,
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: 1,
      pointerEvents: 'none' as const
    }
  };

  return (
    <div ref={containerRef} style={styles.container}>
      <motion.div
        style={styles.header}
        initial={{ opacity: 0, y: -50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
        transition={{ duration: 0.8 }}
      >
        <h2 style={styles.title}>Why Choose Trellis Capital Group</h2>
        <p style={styles.subtitle}>
          We combine cutting-edge technology with deep market expertise to deliver unmatched results
        </p>
      </motion.div>

      <div style={styles.pillarsGrid}>
        <div style={styles.pillarContainer} className="pillar-container">
          <div style={styles.pillarIcon} className="pillar-icon">
            <Canvas style={styles.canvas} camera={{ position: [0, 0, 5] }}>
              <ambientLight intensity={0.5} />
              <pointLight position={[10, 10, 10]} />
              <DataParticles count={isMobile ? 100 : 200} animation="scatter" />
            </Canvas>
          </div>
          <h3 style={styles.pillarTitle} className="pillar-title">
            Data-Driven Decisions
          </h3>
          <p style={styles.pillarDescription} className="pillar-description">
            Our proprietary AI analyzes{' '}
            {isInView && <AnimatedCounter target={10000} duration={2} suffix="+" />} data points to identify the most profitable opportunities
          </p>
        </div>

        <div style={styles.pillarContainer} className="pillar-container">
          <div style={styles.pillarIcon} className="pillar-icon">
            <Canvas style={styles.canvas} camera={{ position: [0, 0, isMobile ? 4 : 3] }}>
              <ambientLight intensity={0.5} />
              <pointLight position={[10, 10, 10]} />
              <FloridaNetworkMap inView={isInView} />
            </Canvas>
          </div>
          <h3 style={styles.pillarTitle} className="pillar-title">
            Local Expertise
          </h3>
          <p style={styles.pillarDescription} className="pillar-description">
            {isInView && <AnimatedCounter target={15} duration={1.5} suffix="+" />} years of Florida market experience with an extensive network of trusted professionals
          </p>
        </div>

        <div style={styles.pillarContainer} className="pillar-container">
          <div style={styles.pillarIcon} className="pillar-icon">
            <Canvas style={styles.canvas} camera={{ position: [0, 0, isMobile ? 4 : 3] }}>
              <ambientLight intensity={0.5} />
              <pointLight position={[10, 10, 10]} />
              <TrustShield inView={isInView} />
            </Canvas>
          </div>
          <h3 style={styles.pillarTitle} className="pillar-title">
            Trusted Partnership
          </h3>
          <p style={styles.pillarDescription} className="pillar-description">
            Transparent processes, fair deals, and a{' '}
            {isInView && <AnimatedCounter target={100} duration={2} suffix="%" />} commitment to your success every step of the way
          </p>
        </div>
      </div>

      <div style={styles.backgroundElements}>
        {/* Background particles */}
        <Canvas camera={{ position: [0, 0, 10] }}>
          <ambientLight intensity={0.2} />
          {Array.from({ length: isMobile ? 20 : 50 }, (_, i) => (
            <mesh key={i} position={[
              (Math.random() - 0.5) * 20,
              (Math.random() - 0.5) * 20,
              (Math.random() - 0.5) * 20
            ]}>
              <sphereGeometry args={[0.01, 8, 8]} />
              <meshBasicMaterial color="#D4AF37" transparent opacity={0.1} />
            </mesh>
          ))}
        </Canvas>
      </div>
    </div>
  );
};

export default InteractiveDataEcosystem; 