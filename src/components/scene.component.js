import React, { Component } from 'react';
import * as THREE from 'three';
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";

const style = {
  height: 300
};

class Scene extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.sceneSetup();
    this.startAnimationLoop();
    window.addEventListener('resize', this.handleWindowResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowResize);
    window.cancelAnimationFrame(this.requestID);
    this.controls.dispose();
  }

  shouldComponentUpdate(nextProps) {
    if(nextProps.selected.length) {
      this.addToSceneObject(nextProps.selected[nextProps.selected.length - 1]["type"]);
      return true;
    } else return false;
  }

  sceneSetup = () => {
    const width = this.el.clientWidth;
    const height = this.el.clientHeight;
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(
      45,
      width / height,
      0.1,
      1000
    );
    this.camera.position.z = 5;
    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setClearColor(0xEEEEEE);
    this.renderer.setSize(width, height);
    this.el.appendChild(this.renderer.domElement);

    const lights = [];
    lights[0] = new THREE.PointLight(0xffffff, 1, 0);
    lights[0].position.set(0, 200, 0);
    this.scene.add(lights[0]);
  };

  addToSceneObject = (type) => {
    let uuid = "";
    switch (type) {
      case "Cube": {
        const boxSize = Math.ceil((Math.random()*2));
        const geometry = new THREE.BoxGeometry(boxSize, boxSize, boxSize);
        const material = new THREE.MeshLambertMaterial({
          color: Math.random()*0xffffff,
          emissive: 0x072534,
          side: THREE.DoubleSide,
          flatShading: true
        });
        this.cube = new THREE.Mesh( geometry, material );
        this.uuid = this.cube.geometry.uuid;
        this.cube.position.x = Math.round((Math.random()*5));
        this.cube.position.y = Math.round((Math.random()*2));
        this.cube.position.z = -3 + Math.round((Math.random()*2));
        this.scene.add( this.cube );
      } break;
      case "Sphere": {
        const sphereSize = Math.ceil((Math.random()*2));
        const geometry = new THREE.SphereGeometry(sphereSize, 32, 32);
        const material = new THREE.MeshPhongMaterial({
          color: Math.random()*0xffffff,
          emissive: 0x072534,
          side: THREE.DoubleSide,
          flatShading: true
        });
        this.sphere = new THREE.Mesh( geometry, material );
        this.uuid = this.sphere.geometry.uuid;
        this.sphere.position.x = Math.round((Math.random()*5));
        this.sphere.position.y = Math.round((Math.random()*2));
        this.sphere.position.z = -3 + Math.round((Math.random()*2));
        this.scene.add( this.sphere );
      } break;
      case "Cone": {
        const coneRadius = Math.ceil((Math.random()*2));
        const coneHeight = Math.ceil((Math.random()*5));
        const geometry = new THREE.ConeGeometry(coneRadius, coneHeight, 32);
        const material = new THREE.MeshPhongMaterial({
          color: Math.random()*0xffffff,
          emissive: 0x072534,
          side: THREE.DoubleSide,
          flatShading: true
        });
        this.cone = new THREE.Mesh( geometry, material );
        this.uuid = this.cone.geometry.uuid;
        this.cone.position.x = Math.round((Math.random()*5));
        this.cone.position.y = Math.round((Math.random()*2));
        this.cone.position.z = -3 + Math.round((Math.random()*2));
        this.scene.add( this.cone );
      } break;
      default: {
        break;
      }
    }
   // this.props.onAddSuccess(this.uuid, this.scene.children.length-2);
  };

  // clearThree = (obj) => {
  //   while(obj.children.length > 0){
  //     this.clearThree(obj.children[0]);
  //     obj.remove(obj.children[0]);
  //   }
  //   if(obj.geometry) obj.geometry.dispose();
  //   if(obj.material) obj.material.dispose();
  //   if(obj.texture) obj.texture.dispose();
  // };

  startAnimationLoop = () => {
    this.renderer.render(this.scene, this.camera);
    this.requestID = window.requestAnimationFrame(this.startAnimationLoop);
  };

  handleWindowResize = () => {
    const width = this.el.clientWidth;
    const height = this.el.clientHeight;

    this.renderer.setSize(width, height);
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
  };

  render() {
    // if(this.props.selected.length) {
    //   this.addToSceneObject(this.props.selected[this.props.selected.length-1]["type"]);
    // }
   //  {
   //    this.props.selected.map(primitive => {
   //      this.addToSceneObject(primitive.type);
   //    })
   //  }

    return <div style={style} ref={ref => (this.el = ref)} />
  }
}

export default Scene;