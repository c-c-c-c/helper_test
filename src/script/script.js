

let scene = new THREE.Scene();
let box;
let controls;
let renderer;
let camera;
let model = [];
//let model = {};

function renderFlag () {
  'use strict';
  let light;
  let ambient;
  let width = 1200;
  let height = 1200;
	let modelPath ;

   //light
	 //light = new THREE.PointLight(0xffffff,2);
	 //light.position.set(100,0,300);
	 //scene.add(light);



  light = new THREE.DirectionalLight(0xffffff, 1);
  light.position.set(100, 0, 300);
  scene.add(light);
/*
  ambient = new THREE.AmbientLight(0x404040);
  scene.add(ambient);
*/
	//camera
  //camera = new THREE.PerspectiveCamera(45, width /　height, 1 , 1000);
	camera = new THREE.PerspectiveCamera(60, window.innerWidth/window.innerHeight, 0.1, 14000);
	camera.position.set(0,0,1000);
  camera.lookAt(new THREE.Vector3(0,0,0));

//  camera.position.set(0, 400, 300);
//  camera.lookAt(scene.position);

  // helper 現在は非表示
  let gridHelper = new THREE.GridHelper(200, 50);
  scene.add(gridHelper);
  let axisHelper = new THREE.AxisHelper(1000);
  scene.add(axisHelper);
  let lightHelper = new THREE.DirectionalLightHelper(light , 20)
  scene.add(lightHelper);

  //controls
  controls = new THREE.OrbitControls(camera);
  //cameraの自動回転
  controls.autoRotate = true;
  controls.autoRotateSpeed = 1.5;

  // renderer
  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(width, height);
  renderer.setClearColor(0xffffff);
  renderer.setPixelRatio(window.devicePixelRatio);
  document.getElementById('stage').appendChild(renderer.domElement);


	//var texture = new THREE.TextureLoader().load("./public/img/tora_flag.jpg");
	//var texture = new THREE.TextureLoader().load("./public/img/dice.jpg");
	//テクスチャ読み込み
	let loader = new THREE.TextureLoader();
	//let texture=loader.load('./public/img/dice.jpg');
	let texture=loader.load('./public/img/yoko.jpg');
	//console.log(texture);

//	var geometry = new THREE.PlaneGeometry(1300, 1228, SEGX, SEGY);
	let geometry = new THREE.PlaneGeometry(973, 703, 1, 1);
	let material = new THREE.MeshBasicMaterial({map:texture, side: THREE.DoubleSide} );
	//let material = new THREE.MeshBasicMaterial( {color: 0xffff00, side: THREE.DoubleSide} );
	//var material = new THREE.MeshBasicMaterial( {color: 0xffff00, side: THREE.DoubleSide} );
	//var material = new THREE.MeshBasicMaterial( {color: 0xffff00, side: THREE.DoubleSide} );
	let plane = new THREE.Mesh(geometry, material);
	scene.add(plane);

  render();
}

function render () {

  requestAnimationFrame(render);
  controls.update();
  renderer.render(scene, camera);
}

renderFlag();
