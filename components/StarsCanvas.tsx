import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.cjs";
import { Suspense, useRef, useEffect } from "react";
import type { Points as PointsProps } from "three";

const Stars = (props: any) => {
	const ref = useRef<PointsProps>(null);

	const sphere: Float32Array = new Float32Array(
		Array.from(
			random.inSphere(new Float64Array(5000), {
				radius: 1.2,
			})
		)
	);

	return (
		<group rotation={[0, 0, Math.PI / 4]}>
			<Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
				<PointMaterial
					transparent
					color="#f272c8"
					size={0.002}
					sizeAttenuation={true}
					depthWrite={false}
				/>
			</Points>
		</group>
	);
};

// Create a custom canvas component
const StarsCanvas = () => {
	return (
		<div className="w-full h-auto absolute inset-0 z-[1]">
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
