/* eslint-disable react/no-unknown-property */
import * as THREE from 'three';
import { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Trail, Float, Line, Sphere } from '@react-three/drei';

export default function ReactLogo(props) {
  return (
    <Float speed={4} rotationIntensity={1} floatIntensity={2}>
      <Atom {...props} />
    </Float>
  );
}

function Atom(props) {
  const ref = useRef();

  // Create points for the elliptical paths
  const points = useMemo(
    () => new THREE.EllipseCurve(0, 0, 3, 1.15, 0, 2 * Math.PI, false, 0).getPoints(100),
    []
  );

  return (
    <group ref={ref} position={[9, 3, 0]} scale={0.5} {...props}>
      {/* Atom paths */}
      <Line worldUnits points={points} color="turquoise" lineWidth={0.2} />
      <Line worldUnits points={points} color="turquoise" lineWidth={0.2} rotation={[0, 0, 1]} />
      <Line worldUnits points={points} color="turquoise" lineWidth={0.2} rotation={[0, 0, -1]} />

      {/* Electrons */}
      <Electron position={[0, 0, 0.5]} speed={6} />
      <Electron position={[0, 0, 0.5]} rotation={[0, 0, Math.PI / 3]} speed={6.5} />
      <Electron position={[0, 0, 0.5]} rotation={[0, 0, -Math.PI / 3]} speed={7} />

      {/* Nucleus of the atom */}
      <Sphere args={[0.55, 64, 64]}>
        <meshBasicMaterial color={[6, 0.5, 2]} toneMapped={false} />
      </Sphere>
    </group>
  );
}

function Electron({ radius = 2.75, speed = 6, ...props }) {
  const ref = useRef();

  // Use frame to update the position of the electron
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    const t = time * speed;
    ref.current.position.set(
      Math.sin(t) * radius,
      (Math.cos(t) * radius * Math.atan(t)) / Math.PI / 1.25,
      0
    );
  });

  return (
    <Trail
      local
      width={5}
      length={4}
      color={new THREE.Color(1, 1, 10)}
      attenuation={(t) => t * t}
    >
      <group {...props}>
        <mesh ref={ref}>
          <sphereGeometry args={[0.25]} />
          <meshBasicMaterial color={[10, 1, 10]} toneMapped={false} />
        </mesh>
      </group>
    </Trail>
  );
}