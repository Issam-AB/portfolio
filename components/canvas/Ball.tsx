import React, { Suspense, useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import {
	Decal,
	Float,
	OrbitControls,
	Preload,
	useTexture,
} from "@react-three/drei";

import CanvasLoader from "../Loader";
import { StaticImageData } from "next/image";
import * as THREE from "three";

const Ball = (props: any) => {
	const [decal] = useTexture([props.imgUrl]);

	const memoizedGeometry = useMemo(
		() => new THREE.IcosahedronGeometry(1, 1),
		[]
	);
	const memoizedMaterial = useMemo(
		() =>
			new THREE.MeshStandardMaterial({ color: "#fff8eb", flatShading: true }),
		[]
	);

	return (
		<Float {...props} speed={1} rotationIntensity={1.75}>
			<ambientLight intensity={0.25} />
			<directionalLight position={[0, 0, 0.05]} />
			<mesh
				geometry={memoizedGeometry}
				material={memoizedMaterial}
				scale={2.75}
			>
				{/* <icosahedronGeometry args={[1, 1]} />
				<meshStandardMaterial
					color="#fff8eb"
					polygonOffset
					polygonOffsetFactor={-5}
					flatShading
				/> */}
				<Decal
					position={[0, 0, 1]}
					map={decal}
					rotation={[2 * Math.PI, 0, 6.25]}
					flatShading
				/>
			</mesh>
		</Float>
	);
};

const BallCanvas: React.FC<{ icon: StaticImageData }> = ({ icon }) => {
	return (
		<Canvas
			frameloop="demand"
			dpr={[1, 2]}
			// gl={{ preserveDrawingBuffer: true }}
			gl={{ powerPreference: "low-power", alpha: false }}
		>
			<Suspense fallback={<CanvasLoader />}>
				<OrbitControls enableZoom={false} />
				<Ball imgUrl={icon.src} />
			</Suspense>

			{/* <Preload all /> */}
		</Canvas>
	);
};

export default BallCanvas;
