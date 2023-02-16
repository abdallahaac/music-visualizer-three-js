import * as THREE from "three";

export function createLight(): THREE.Light {
	const lightSource = new THREE.DirectionalLight(0xffffff, 0.6);
	return lightSource;
}
