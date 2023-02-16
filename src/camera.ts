import * as THREE from "three";

export function createCamera(): THREE.PerspectiveCamera {
	const sizes = {
		width: window.innerWidth,
		height: window.innerHeight,
	};

	const camera = new THREE.PerspectiveCamera(
		75,
		sizes.width / sizes.height,
		0.1,
		100
	);

	// Set camera position
	camera.position.set(0, 0, 3);

	return camera;
}
