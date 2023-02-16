import "./style.css";
import * as THREE from "three";
import { createScene } from "./scene";
import { createCamera } from "./camera";
import { createSphere } from "./sphere";
import { createLight } from "./light";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

//defining controls

// defining sizes
const sizes = {
	width: window.innerWidth,
	height: window.innerHeight,
};

// Create a basic scene
const scene: THREE.Scene = createScene();

// Set up camera
const camera: THREE.PerspectiveCamera = createCamera();

// Add sphere to the scene
const sphere: THREE.Mesh = createSphere();
scene.add(sphere);

// Add light to the scene
const light: THREE.Light = createLight();
scene.add(light);

const canvas: HTMLCanvasElement = document.querySelector(
	"#experience"
) as HTMLCanvasElement;

const renderer = new THREE.WebGLRenderer({
	canvas,
	antialias: true,
});

const controls = new OrbitControls(camera, renderer.domElement);

function animate() {
	requestAnimationFrame(animate);
	sizes.width = window.innerWidth;
	sizes.height = window.innerHeight;
	renderer.setSize(sizes.width, sizes.height);
	renderer.render(scene, camera);
	controls.update();
}
animate();
