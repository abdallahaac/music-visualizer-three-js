import * as THREE from "three";

export function createSphere(): THREE.Mesh {
	const texture = new THREE.TextureLoader().load("../public/normal.jpeg");
	console.log(texture);

	const sphereGeo = new THREE.TorusGeometry();
	const sphereMaterial = new THREE.MeshPhongMaterial({
		normalMap: texture,
		reflectivity: 1,
		shininess: 200,
		color: 0xff00000,
	});
	const sphereMesh = new THREE.Mesh(sphereGeo, sphereMaterial);
	return sphereMesh;
}
