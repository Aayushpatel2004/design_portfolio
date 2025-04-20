
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const Scene3D = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0); // Transparent background
    mountRef.current.appendChild(renderer.domElement);

    // Create torus with improved visibility
    const geometry = new THREE.TorusGeometry(4, 1.5, 32, 100);
    const material = new THREE.MeshPhongMaterial({
      color: '#0FA0CE',
      wireframe: true,
      emissive: '#0FA0CE',
      emissiveIntensity: 0.3,
      wireframeLinewidth: 2,
    });
    const torus = new THREE.Mesh(geometry, material);
    scene.add(torus);

    // Add lights with more intensity
    const pointLight = new THREE.PointLight(0xffffff, 2);
    pointLight.position.set(5, 5, 5);
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(pointLight, ambientLight);

    // Add a second light source for better illumination
    const pointLight2 = new THREE.PointLight(0x0FA0CE, 1.5);
    pointLight2.position.set(-5, -5, 5);
    scene.add(pointLight2);

    // Position camera closer to the torus
    camera.position.z = 8;

    // Animation with slightly faster rotation
    const animate = () => {
      requestAnimationFrame(animate);
      torus.rotation.x += 0.01;
      torus.rotation.y += 0.01;
      renderer.render(scene, camera);
    };
    animate();

    // Handle resize with full window coverage
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      mountRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} className="absolute top-0 right-0 w-full h-full -z-10 opacity-90" />;
};
