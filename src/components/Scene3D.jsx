import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, Stars, Environment } from '@react-three/drei'
import * as THREE from 'three'

// Chili Pepper 3D Component
function ChiliPepper({ position, rotation, scale = 1 }) {
  const meshRef = useRef()
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + position[0]) * 0.3
    }
  })
  
  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh ref={meshRef} position={position} rotation={rotation} scale={scale}>
        <capsuleGeometry args={[0.15, 0.6, 8, 16]} />
        <meshStandardMaterial
          color="#FF2D2D"
          roughness={0.3}
          metalness={0.1}
          emissive="#FF0000"
          emissiveIntensity={0.3}
        />
      </mesh>
    </Float>
  )
}

// Floating Fire Particles
function FireParticles() {
  const particlesRef = useRef()
  const count = 100
  
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10
    }
    return pos
  }, [])
  
  const colors = useMemo(() => {
    const cols = new Float32Array(count * 3)
    const colorOptions = [
      new THREE.Color('#FF2D2D'),
      new THREE.Color('#FF6B35'),
      new THREE.Color('#FF8C42'),
    ]
    for (let i = 0; i < count; i++) {
      const color = colorOptions[Math.floor(Math.random() * colorOptions.length)]
      cols[i * 3] = color.r
      cols[i * 3 + 1] = color.g
      cols[i * 3 + 2] = color.b
    }
    return cols
  }, [])
  
  useFrame((state) => {
    if (particlesRef.current) {
      const positions = particlesRef.current.geometry.attributes.position.array
      for (let i = 0; i < count; i++) {
        positions[i * 3 + 1] += 0.02
        if (positions[i * 3 + 1] > 10) {
          positions[i * 3 + 1] = -10
        }
      }
      particlesRef.current.geometry.attributes.position.needsUpdate = true
    }
  })
  
  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={count}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.1}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation
      />
    </points>
  )
}

// Rotating Bottle Shape
function BottleShape() {
  const meshRef = useRef()
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.2
    }
  })
  
  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.5}>
      <group ref={meshRef}>
        {/* Bottle Body */}
        <mesh position={[0, 0, 0]}>
          <cylinderGeometry args={[0.5, 0.6, 1.5, 32]} />
          <meshStandardMaterial
            color="#FF6B35"
            roughness={0.2}
            metalness={0.8}
            transparent
            opacity={0.9}
          />
        </mesh>
        {/* Bottle Neck */}
        <mesh position={[0, 1, 0]}>
          <cylinderGeometry args={[0.2, 0.4, 0.5, 32]} />
          <meshStandardMaterial
            color="#FF6B35"
            roughness={0.2}
            metalness={0.8}
          />
        </mesh>
        {/* Bottle Cap */}
        <mesh position={[0, 1.4, 0]}>
          <cylinderGeometry args={[0.25, 0.25, 0.3, 32]} />
          <meshStandardMaterial
            color="#0a0a0a"
            roughness={0.5}
            metalness={0.3}
          />
        </mesh>
      </group>
    </Float>
  )
}

// Main 3D Scene Component
export default function Scene3D() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#FF6B35" />
        <pointLight position={[-10, -10, 5]} intensity={0.5} color="#FF2D2D" />
        <spotLight
          position={[0, 10, 5]}
          angle={0.3}
          penumbra={1}
          intensity={1}
          color="#FF6B35"
        />
        
        {/* Floating Chili Peppers */}
        <ChiliPepper position={[-4, 2, -2]} rotation={[0.5, 0, 0.3]} scale={1.2} />
        <ChiliPepper position={[4, -1, -3]} rotation={[-0.3, 0, -0.5]} scale={0.8} />
        <ChiliPepper position={[-3, -2, -1]} rotation={[0.2, 0.5, 0.1]} scale={1} />
        <ChiliPepper position={[3, 3, -2]} rotation={[-0.4, 0.2, 0.4]} scale={0.9} />
        <ChiliPepper position={[5, 0, -4]} rotation={[0.1, -0.3, 0.2]} scale={1.1} />
        <ChiliPepper position={[-5, 1, -3]} rotation={[-0.2, 0.4, -0.1]} scale={0.7} />
        
        {/* Fire Particles */}
        <FireParticles />
        
        {/* Background Stars */}
        <Stars
          radius={50}
          depth={50}
          count={1000}
          factor={3}
          saturation={1}
          fade
          speed={1}
        />
        
        <Environment preset="night" />
      </Canvas>
    </div>
  )
}
