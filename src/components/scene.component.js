import React, { Component } from 'react';
import * as THREE from 'three';
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";

const style = {
  height: 250
};

class Scene extends Component {
  componentDidMount() {
    this.sceneSetup();
    this.startAnimationLoop();
    this.addToSceneObject(this.props.primitives[this.props.primitives.length - 1]);
    window.addEventListener('resize', this.handleWindowResize);
  }

  componentDidUpdate() {
    //this.addToSceneObject(this.props.primitives[this.props.primitives.length - 1]);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowResize);
    window.cancelAnimationFrame(this.requestID);
    this.controls.dispose();
  }

  sceneSetup = () => {
    const width = this.el.clientWidth;
    const height = this.el.clientHeight;
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(
      75,
      width / height,
      0.1,
      1000
    );
    this.camera.position.z = 5;
  //  this.controls = new OrbitControls( this.camera, this.el );
    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setSize(width, height);
    this.el.appendChild(this.renderer.domElement);
  };

  addToSceneObject = (id) => {
    switch (id) {
      case "1": {
        const boxSize = Math.ceil((Math.random()*2));
        const geometry = new THREE.BoxGeometry(boxSize, boxSize, boxSize);
        const material = new THREE.MeshPhongMaterial( {
          color: 0x156289,
          emissive: 0x072534,
          side: THREE.DoubleSide,
          flatShading: true
        } );
        this.cube = new THREE.Mesh( geometry, material );
        this.cube.position.x = -10 + Math.round((Math.random()*5));
        this.cube.position.y = Math.round((Math.random()*5));
        this.cube.position.z = -5 + Math.round((Math.random()*5));
        this.scene.add( this.cube );
      } break;
      case "2": {
        const sphereSize = Math.ceil((Math.random()*2));
        const geometry = new THREE.SphereGeometry(sphereSize, 16, 16);
        const material = new THREE.MeshPhongMaterial( {
          color: 0x156289,
          emissive: 0x072534,
          side: THREE.DoubleSide,
          flatShading: true
        } );
        this.sphere = new THREE.Mesh( geometry, material );
        this.sphere.position.x = -10 + Math.round((Math.random()*5));
        this.sphere.position.y = Math.round((Math.random()*5));
        this.sphere.position.z = -5 + Math.round((Math.random()*5));
        this.scene.add( this.sphere );
      } break;
      case "3": {
        const coneRadius = Math.ceil((Math.random()*2));
        const coneHeight = Math.ceil((Math.random()*5));
        const geometry = new THREE.ConeGeometry(coneRadius, coneHeight, 16);
        const material = new THREE.MeshPhongMaterial( {
          color: 0x156289,
          emissive: 0x072534,
          side: THREE.DoubleSide,
          flatShading: true
        } );
        this.cone = new THREE.Mesh( geometry, material );
        this.cone.position.x = -10 + Math.round((Math.random()*5));
        this.cone.position.y = Math.round((Math.random()*5));
        this.cone.position.z = -5 + Math.round((Math.random()*5));
        this.scene.add( this.cube );
      } break;
      default: {
        break;
      }
    }

    const lights = [];
    lights[ 0 ] = new THREE.PointLight( 0xffffff, 1, 0 );
    lights[ 1 ] = new THREE.PointLight( 0xffffff, 1, 0 );
    lights[ 2 ] = new THREE.PointLight( 0xffffff, 1, 0 );

    lights[ 0 ].position.set( 0, 200, 0 );
    lights[ 1 ].position.set( 100, 200, 100 );
    lights[ 2 ].position.set( - 100, - 200, - 100 );

    this.scene.add( lights[ 0 ] );
    this.scene.add( lights[ 1 ] );
    this.scene.add( lights[ 2 ] );
  };

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
    return <div style={style} ref={ref => (this.el = ref)} />
  }
}

export default Scene;