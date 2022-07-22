const LIGHT_COLOR = 0xFFFFFF;
const INTENSITY = 1;
const DOOR_COLOR = 0x5B2B09;
const DOOR_SPEED = 1.5;

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 500 );
const renderer = new THREE.WebGLRenderer();
const geometryForDoorLeft = new THREE.BoxGeometry(14,30,2);
const geometryForDoorRight = new THREE.BoxGeometry(14,30,2);
const materialForCube = new THREE.MeshPhongMaterial( { color: DOOR_COLOR } );
const doorLeft = new THREE.Mesh(geometryForDoorLeft, materialForCube);
const doorRight = new THREE.Mesh(geometryForDoorRight, materialForCube);
const axesHelper = new THREE.AxesHelper( 500 );
const light = new THREE.DirectionalLight(LIGHT_COLOR, INTENSITY);

renderer.setSize( window.innerWidth, window.innerHeight, false );
document.body.appendChild( renderer.domElement );

geometryForDoorLeft.translate(-7,0,0)
geometryForDoorRight.translate(7,0,0)

doorLeft.position.x = 14;
doorLeft.position.y = 10;
doorRight.position.x = -14;
doorRight.position.y = 10;
camera.position.z = 70;
camera.position.y = 30;


light.position.set(10, 20, 30);
camera.lookAt(0,0,0)
scene.add(axesHelper);
scene.add(doorLeft);
scene.add(doorRight);
scene.add(light);

function animate() {
    if(doorLeft.rotation.y < 1.53){
    doorLeft.rotateY(DOOR_SPEED * 0.01)
    doorRight.rotateY(DOOR_SPEED * 0.01 * -1)
    }
	requestAnimationFrame( animate );
	renderer.render( scene, camera );
}


animate();


