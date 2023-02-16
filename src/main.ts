import "./style.css";
import * as THREE from "three";

// Create a basic scene
const scene: THREE.Scene = new THREE.Scene();

const sizes = {
	width: window.innerWidth,
	height: window.innerHeight,
};

// creating geo

const sphereGeo = new THREE.SphereGeometry();

// creating material
const sphereMaterial = new THREE.MeshPhongMaterial({});

//creating mesh
const sphereMesh = new THREE.Mesh(sphereGeo, sphereMaterial);
//adding mesh to scene
scene.add(sphereMesh);

//adding light sources
const lightSource = new THREE.DirectionalLight();
scene.add(lightSource);

// Set up camera
const camera: THREE.PerspectiveCamera = new THREE.PerspectiveCamera(
	75,
	sizes.width / sizes.height,
	0.1,
	100
);

// Set camera position
camera.position.set(0, 0, 3);
scene.add(camera);

const canvas: HTMLCanvasElement = document.querySelector(
	"#experience"
) as HTMLCanvasElement;

const renderer = new THREE.WebGLRenderer({
	canvas,
	antialias: true,
});

renderer.setSize(sizes.width, sizes.height);
function animate() {
	requestAnimationFrame(animate);
	sizes.width = window.innerWidth;
	sizes.height = window.innerHeight;
	renderer.setSize(sizes.width, sizes.height);
	renderer.render(scene, camera);
}
animate();
