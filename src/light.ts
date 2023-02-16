import * as THREE from "three";

export function createLight(): THREE.Light {
	const lightSource = new THREE.DirectionalLight();
	return lightSource;
}
