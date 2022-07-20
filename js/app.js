const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 500 );
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight, false );
document.body.appendChild( renderer.domElement );
const degsToRads = deg => (deg * Math.PI) / 180.0;
const geometry = new THREE.TorusGeometry( 5, 2, 8, 100 );
const material = new THREE.MeshPhongMaterial( { color: 0xE633FF } );
const donut = new THREE.Mesh( geometry, material );
const axesHelper = new THREE.AxesHelper( 5 );
const color = 0xFFFFFF;
const intensity = 1;
const light = new THREE.DirectionalLight(color, intensity);
light.position.set(-1, 2, 4);
scene.add(light);
scene.add( donut );
scene.add( axesHelper );
camera.position.z = 50;

function animate(time) {
    time *= 0.002;
    donut.rotation.x = time;
    donut.rotation.y = time;
	requestAnimationFrame( animate );
	renderer.render( scene, camera );
}


animate();


