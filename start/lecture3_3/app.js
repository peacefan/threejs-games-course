import * as THREE from '../../libs/three126/three.module.js';
import { OrbitControls } from '../../libs/three126/OrbitControls.js';

class App{
	constructor(){
		const container = document.createElement( 'div' );
		document.body.appendChild( container );

		// 1. Camera
		this.camera = new THREE.PerspectiveCamera(60, window.innerWidth/window.innerHeight, 0.1, 100); // initialize camera properties
		this.camera.position.set(0, 0, 4); // initialize camera position
		
		// 2. Scene
		this.scene = new THREE.Scene(); // initializze scene
		// this.scene.background = new THREE.Color(0xAAAAAA); // set background colour
		this.scene.background = new THREE.Color(0x00FF00);
		// Hexadecimal color value [AA](first 2 value for Red)
		// Hexadecimal color value [AA](second 2 value for Green)
		// Hexadecimal color value [AA](third 2 value for Blue)

		// 3. renderer
		this.renderer = new THREE.WebGLRenderer({ antialias: true}); // antialaising property
		this.renderer.setPixelRatio(window.devicePixelRatio);
		this.renderer.setSize(window.innerWidth, window.innerHeight);
		container.appendChild(this.renderer.domElement);

		this.renderer.setAnimationLoop(this.render.bind(this));

        window.addEventListener('resize', this.resize.bind(this) );
	}	
    
    resize(){

    }
    
	render( ) {   
		this.renderer.render(this.scene, this.camera);
    }
}

export { App };