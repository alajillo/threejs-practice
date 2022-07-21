const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 500 );
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight, false );
document.body.appendChild( renderer.domElement );
const degsToRads = deg => (deg * Math.PI) / 180.0;
const geometry = new THREE.TorusGeometry( 5, 2, 8, 100 );
const material = new THREE.MeshPhongMaterial( { color: 0xE633FF } );
const geometryForCube = new THREE.BoxGeometry(3,3,3);
const materialForCube = new THREE.MeshPhongMaterial( { color: 0xffffff } );
const cube = new THREE.Mesh(geometryForCube, materialForCube);
const donut = new THREE.Mesh( geometry, material );
donut.add(cube)
const x = Number(10);
cube.position.x = x;
cube.position.y = 10;
const axesHelper = new THREE.AxesHelper( 100 );
const color = 0xFFFFFF;
const intensity = 1;
const light = new THREE.DirectionalLight(color, intensity);
light.position.set(-1, 2, 4);
scene.add(light);
scene.add( donut );
scene.add( axesHelper );
camera.position.z = 50;
const domEvents	= new THREEx.DomEvents(camera, renderer.domElement)

function getRandomHexColor(){
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    return `0x${randomColor}`
}
domEvents.addEventListener(donut, 'click',event => {
	donut.material.color.setHex( getRandomHexColor() );
	cube.material.color.setHex( getRandomHexColor() );
})
function animate(time) {
    time *= 0.001;
    donut.rotation.x = time;
    donut.rotation.y = time;
	requestAnimationFrame( animate );
	renderer.render( scene, camera );
}


animate();


