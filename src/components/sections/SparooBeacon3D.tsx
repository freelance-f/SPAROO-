"use client"

import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Float, PerspectiveCamera, MeshDistortMaterial, Points, PointMaterial } from '@react-three/drei'
import * as THREE from 'three'

function Beacon() {
  const meshRef = useRef<THREE.Mesh>(null!)
  const [hovered, setHover] = useState(false)

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    meshRef.current.rotation.y = t / 2
    meshRef.current.position.y = Math.sin(t / 1.5) / 10
  })

  return (
    <group>
      {/* Outer Shell */}
      <mesh
        ref={meshRef}
        onPointerOver={() => setHover(true)}
        onPointerOut={() => setHover(false)}
      >
        <cylinderGeometry args={[1.2, 1.2, 0.4, 32]} />
        <MeshDistortMaterial 
          color={hovered ? "#E8F55A" : "#39D353"} 
          speed={3} 
          distort={0.2} 
          radius={1}
          emissive="#39D353"
          emissiveIntensity={0.5}
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>

      {/* Inner Pulsing Core */}
      <mesh position={[0, 0, 0]}>
         <cylinderGeometry args={[0.8, 0.8, 0.42, 32]} />
         <meshStandardMaterial 
           color="#080808" 
           metalness={1} 
           roughness={0} 
         />
      </mesh>

      {/* BLE Waves */}
      <Waves />
    </group>
  )
}

function Waves() {
  return (
    <>
      {[1, 2, 3].map((i) => (
        <Wave key={i} index={i} />
      ))}
    </>
  )
}

function Wave({ index }: { index: number }) {
  const meshRef = useRef<THREE.Mesh>(null!)
  
  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    const scale = ((t + index * 1.2) % 4) * 1.5
    meshRef.current.scale.set(scale, scale, scale)
    ;(meshRef.current.material as THREE.MeshBasicMaterial).opacity = (1 - (scale / 6)) * 0.4
  })

  return (
    <mesh ref={meshRef} rotation={[-Math.PI / 2, 0, 0]}>
      <ringGeometry args={[1.1, 1.15, 64]} />
      <meshBasicMaterial color="#39D353" transparent opacity={0.4} side={THREE.DoubleSide} />
    </mesh>
  )
}

function Particles() {
  const points = useRef<THREE.Points>(null!)
  
  const particleCount = 1000
  const positions = new Float32Array(particleCount * 3)
  for (let i = 0; i < particleCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 15
    positions[i * 3 + 1] = (Math.random() - 0.5) * 15
    positions[i * 3 + 2] = (Math.random() - 0.5) * 15
  }

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    points.current.rotation.y = t * 0.03
  })

  return (
    <Points positions={positions} ref={points}>
      <PointMaterial
        transparent
        color="#39D353"
        size={0.03}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.3}
      />
    </Points>
  )
}

export default function SparooBeacon3D() {
  return (
    <div className="w-full h-full min-h-[400px]">
      <Canvas shadows dpr={[1, 2]}>
        <PerspectiveCamera makeDefault position={[0, 3, 7]} fov={40} />
        <ambientLight intensity={0.4} />
        <spotLight position={[10, 10, 10]} angle={0.2} penumbra={1} intensity={2} castShadow />
        <pointLight position={[-10, -10, -10]} intensity={1} color="#39D353" />
        
        <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
          <Beacon />
        </Float>
        
        <Particles />
        
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.8}
        />
      </Canvas>
    </div>
  )
}
