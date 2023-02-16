import * as THREE from "three";

export function createSphere(): THREE.Mesh {
	const sphereGeo = new THREE.SphereGeometry();
	const sphereMaterial = new THREE.MeshPhongMaterial({});
	const sphereMesh = new THREE.Mesh(sphereGeo, sphereMaterial);
	return sphereMesh;
}
