import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { STRATEGY_NODES } from '../../data/portfolioData';

interface SceneContainerProps {
  scrollProgress: number;
  activeSection: string;
  onHoverStrategyNode?: (nodeId: string) => void;
  hoveredStrategyNode?: string;
  easterEggActive?: boolean;
}

export const SceneContainer: React.FC<SceneContainerProps> = ({
  scrollProgress,
  activeSection,
  onHoverStrategyNode,
  hoveredStrategyNode,
  easterEggActive
}) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef<{ x: number; y: number; targetX: number; targetY: number }>({
    x: 0,
    y: 0,
    targetX: 0,
    targetY: 0
  });

  const stateRef = useRef({
    scrollProgress,
    activeSection,
    hoveredStrategyNode,
    easterEggActive
  });

  useEffect(() => {
    stateRef.current = {
      scrollProgress,
      activeSection,
      hoveredStrategyNode,
      easterEggActive
    };
  }, [scrollProgress, activeSection, hoveredStrategyNode, easterEggActive]);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x040508, 0.035);

    const camera = new THREE.PerspectiveCamera(
      55,
      window.innerWidth / window.innerHeight,
      0.1,
      100
    );
    camera.position.set(0, 0, 8);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance'
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    container.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0x0d1527, 2.0);
    scene.add(ambientLight);

    const blueCoreLight = new THREE.PointLight(0x0066ff, 5, 25);
    blueCoreLight.position.set(0, 0, 0);
    scene.add(blueCoreLight);

    const cyanRimLight = new THREE.DirectionalLight(0x00f0ff, 2.5);
    cyanRimLight.position.set(5, 5, 5);
    scene.add(cyanRimLight);

    // GROWTH CORE (HERO)
    const growthCoreGroup = new THREE.Group();
    scene.add(growthCoreGroup);

    const innerGeom = new THREE.IcosahedronGeometry(1.35, 2);
    const innerMat = new THREE.MeshStandardMaterial({
      color: 0x080c14,
      metalness: 0.95,
      roughness: 0.15,
      emissive: 0x002266,
      emissiveIntensity: 0.6
    });
    const innerCoreMesh = new THREE.Mesh(innerGeom, innerMat);
    growthCoreGroup.add(innerCoreMesh);

    const outerGeom = new THREE.DodecahedronGeometry(2.0, 1);
    const outerWireMat = new THREE.MeshStandardMaterial({
      color: 0x00f0ff,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
      emissive: 0x0066ff,
      emissiveIntensity: 0.8
    });
    const outerCageMesh = new THREE.Mesh(outerGeom, outerWireMat);
    growthCoreGroup.add(outerCageMesh);

    const glassMat = new THREE.MeshPhysicalMaterial({
      color: 0x0a101d,
      metalness: 0.1,
      roughness: 0.1,
      transmission: 0.7,
      transparent: true,
      opacity: 0.45,
      reflectivity: 0.9
    });
    const glassCageMesh = new THREE.Mesh(outerGeom, glassMat);
    growthCoreGroup.add(glassCageMesh);

    const ringMaterials = [
      new THREE.LineBasicMaterial({ color: 0x00f0ff, transparent: true, opacity: 0.7 }),
      new THREE.LineBasicMaterial({ color: 0x0066ff, transparent: true, opacity: 0.6 }),
      new THREE.LineBasicMaterial({ color: 0x38bdf8, transparent: true, opacity: 0.5 })
    ];

    const rings: THREE.Line[] = [];
    const ringRadii = [2.6, 3.1, 3.6];
    ringRadii.forEach((radius, idx) => {
      const ringGeom = new THREE.BufferGeometry();
      const points: THREE.Vector3[] = [];
      const segments = 64;
      for (let i = 0; i <= segments; i++) {
        const theta = (i / segments) * Math.PI * 2;
        points.push(new THREE.Vector3(Math.cos(theta) * radius, Math.sin(theta) * radius, 0));
      }
      ringGeom.setFromPoints(points);
      const ringLine = new THREE.Line(ringGeom, ringMaterials[idx]);
      ringLine.rotation.x = idx * 0.7 + 0.3;
      ringLine.rotation.y = idx * 0.5 + 0.2;
      rings.push(ringLine);
      growthCoreGroup.add(ringLine);
    });

    // DYNAMIC PARTICLES
    const particleCount = 3500;
    const particleGeom = new THREE.BufferGeometry();
    const posArray = new Float32Array(particleCount * 3);
    const originArray = new Float32Array(particleCount * 3);
    const colorArray = new Float32Array(particleCount * 3);

    const baseColor = new THREE.Color(0x0066ff);
    const cyanColor = new THREE.Color(0x00f0ff);
    const whiteColor = new THREE.Color(0xffffff);

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      const radius = 2.5 + Math.random() * 18;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);

      posArray[i3] = x;
      posArray[i3 + 1] = y;
      posArray[i3 + 2] = z;

      originArray[i3] = x;
      originArray[i3 + 1] = y;
      originArray[i3 + 2] = z;

      const mixFactor = Math.random();
      const pColor = mixFactor < 0.6 ? baseColor : mixFactor < 0.9 ? cyanColor : whiteColor;
      colorArray[i3] = pColor.r;
      colorArray[i3 + 1] = pColor.g;
      colorArray[i3 + 2] = pColor.b;
    }

    particleGeom.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    particleGeom.setAttribute('color', new THREE.BufferAttribute(colorArray, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.05,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending
    });

    const particles = new THREE.Points(particleGeom, particleMat);
    scene.add(particles);

    // STRATEGY ENGINE 3D NODES
    const strategyGroup = new THREE.Group();
    strategyGroup.position.set(0, -25, 0);
    scene.add(strategyGroup);

    const centerNodeGeom = new THREE.SphereGeometry(1.0, 32, 32);
    const centerNodeMat = new THREE.MeshStandardMaterial({
      color: 0x00f0ff,
      emissive: 0x0066ff,
      emissiveIntensity: 0.9,
      roughness: 0.2,
      metalness: 0.8
    });
    const centerNode = new THREE.Mesh(centerNodeGeom, centerNodeMat);
    strategyGroup.add(centerNode);

    const nodeMeshes: THREE.Mesh[] = [];
    STRATEGY_NODES.forEach((nodeData) => {
      const nodeGeom = new THREE.SphereGeometry(0.45, 24, 24);
      const nodeMat = new THREE.MeshStandardMaterial({
        color: new THREE.Color(nodeData.color),
        emissive: new THREE.Color(nodeData.color),
        emissiveIntensity: 0.7,
        roughness: 0.3,
        metalness: 0.7
      });
      const nodeMesh = new THREE.Mesh(nodeGeom, nodeMat);
      nodeMesh.position.set(nodeData.position[0], nodeData.position[1], nodeData.position[2]);
      nodeMesh.userData = { id: nodeData.id, label: nodeData.label };
      strategyGroup.add(nodeMesh);
      nodeMeshes.push(nodeMesh);

      const curve = new THREE.LineCurve3(
        new THREE.Vector3(0, 0, 0),
        new THREE.Vector3(nodeData.position[0], nodeData.position[1], nodeData.position[2])
      );
      const linePoints = curve.getPoints(20);
      const lineGeom = new THREE.BufferGeometry().setFromPoints(linePoints);
      const lineMat = new THREE.LineBasicMaterial({
        color: new THREE.Color(nodeData.color),
        transparent: true,
        opacity: 0.6
      });
      const lineMesh = new THREE.Line(lineGeom, lineMat);
      strategyGroup.add(lineMesh);
    });

    // TUNNEL CHAMBER
    const tunnelGroup = new THREE.Group();
    tunnelGroup.position.set(0, -50, 0);
    scene.add(tunnelGroup);

    const tunnelRings: THREE.Line[] = [];
    for (let r = 0; r < 18; r++) {
      const tGeom = new THREE.BufferGeometry();
      const tPts: THREE.Vector3[] = [];
      const segs = 32;
      const tRadius = 3.5 + Math.sin(r * 0.4) * 0.5;
      for (let s = 0; s <= segs; s++) {
        const th = (s / segs) * Math.PI * 2;
        tPts.push(new THREE.Vector3(Math.cos(th) * tRadius, Math.sin(th) * tRadius, -r * 3.5));
      }
      tGeom.setFromPoints(tPts);
      const tMat = new THREE.LineBasicMaterial({
        color: r % 2 === 0 ? 0x00f0ff : 0x0066ff,
        transparent: true,
        opacity: 0.35 + (18 - r) * 0.03
      });
      const tRing = new THREE.Line(tGeom, tMat);
      tunnelGroup.add(tRing);
      tunnelRings.push(tRing);
    }

    const raycaster = new THREE.Raycaster();
    const mouseVector = new THREE.Vector2();

    const onPointerMove = (e: MouseEvent) => {
      mouseRef.current.targetX = (e.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.targetY = -(e.clientY / window.innerHeight) * 2 + 1;

      mouseVector.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouseVector.y = -(e.clientY / window.innerHeight) * 2 + 1;

      // Only if 3D node mesh is intersected directly, update strategy node
      if (stateRef.current.activeSection === 'strategy') {
        raycaster.setFromCamera(mouseVector, camera);
        const intersects = raycaster.intersectObjects(nodeMeshes);
        if (intersects.length > 0) {
          const hoveredId = intersects[0].object.userData.id;
          if (onHoverStrategyNode) {
            onHoverStrategyNode(hoveredId);
          }
        }
      }
    };

    window.addEventListener('mousemove', onPointerMove);

    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };
    window.addEventListener('resize', onResize);

    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();
      const { scrollProgress: sp, hoveredStrategyNode: hNode, easterEggActive: egg } = stateRef.current;

      mouseRef.current.x += (mouseRef.current.targetX - mouseRef.current.x) * 0.05;
      mouseRef.current.y += (mouseRef.current.targetY - mouseRef.current.y) * 0.05;

      const targetCamY = -sp * 65;
      const targetCamZ = 8 + Math.sin(sp * Math.PI * 4) * 2 - (sp > 0.85 ? (sp - 0.85) * 15 : 0);
      const targetCamX = mouseRef.current.x * 0.8 + Math.sin(sp * Math.PI * 2) * 0.5;

      camera.position.x += (targetCamX - camera.position.x) * 0.06;
      camera.position.y += (targetCamY - camera.position.y) * 0.06;
      camera.position.z += (targetCamZ - camera.position.z) * 0.06;
      camera.rotation.y = -mouseRef.current.x * 0.1;
      camera.rotation.x = mouseRef.current.y * 0.08;

      const coreSpeed = egg ? 3.0 : 0.6;
      growthCoreGroup.rotation.y = elapsedTime * 0.3 * coreSpeed;
      growthCoreGroup.rotation.x = Math.sin(elapsedTime * 0.2) * 0.2;
      innerCoreMesh.rotation.y = -elapsedTime * 0.5 * coreSpeed;
      outerCageMesh.rotation.z = elapsedTime * 0.2 * coreSpeed;

      rings.forEach((ring, idx) => {
        ring.rotation.z = elapsedTime * (0.4 + idx * 0.2) * (idx % 2 === 0 ? 1 : -1) * coreSpeed;
      });

      growthCoreGroup.position.set(
        mouseRef.current.x * 0.5,
        Math.sin(elapsedTime * 0.8) * 0.15,
        0
      );

      const strategySpeed = 0.2;
      strategyGroup.rotation.y = elapsedTime * strategySpeed;
      strategyGroup.rotation.z = Math.sin(elapsedTime * 0.2) * 0.1;

      nodeMeshes.forEach((mesh) => {
        const isHovered = mesh.userData.id === hNode;
        const targetScale = isHovered ? 1.5 : 1.0;
        mesh.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1);
        if (isHovered) {
          mesh.rotation.y += 0.04;
        }
      });

      tunnelGroup.rotation.z = elapsedTime * 0.1;

      const positions = particleGeom.attributes.position.array as Float32Array;
      const colors = particleGeom.attributes.color.array as Float32Array;

      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        const ox = originArray[i3];
        const oy = originArray[i3 + 1];
        const oz = originArray[i3 + 2];

        if (egg) {
          positions[i3] = ox + Math.sin(elapsedTime * 8 + i) * 1.5;
          positions[i3 + 1] = oy + Math.cos(elapsedTime * 8 + i) * 1.5;
          positions[i3 + 2] = oz + Math.sin(elapsedTime * 10) * 3;
          colors[i3] = 0.0;
          colors[i3 + 1] = 1.0;
          colors[i3 + 2] = 1.0;
        } else if (sp > 0.9) {
          const collapseT = (sp - 0.9) * 10;
          positions[i3] = THREE.MathUtils.lerp(ox, (Math.random() - 0.5) * 1.5, collapseT);
          positions[i3 + 1] = THREE.MathUtils.lerp(oy + targetCamY, targetCamY + (Math.random() - 0.5) * 1.5, collapseT);
          positions[i3 + 2] = THREE.MathUtils.lerp(oz, (Math.random() - 0.5) * 1.5, collapseT);
        } else {
          positions[i3] = ox + Math.sin(elapsedTime * 0.5 + i) * 0.3;
          positions[i3 + 1] = oy + Math.cos(elapsedTime * 0.4 + i) * 0.3;
          positions[i3 + 2] = oz + Math.sin(elapsedTime * 0.3 + i * 0.5) * 0.3;
        }
      }
      particleGeom.attributes.position.needsUpdate = true;
      if (egg) particleGeom.attributes.color.needsUpdate = true;

      blueCoreLight.intensity = 4 + Math.sin(elapsedTime * 3) * 1.5;
      blueCoreLight.position.y = targetCamY;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', onPointerMove);
      window.removeEventListener('resize', onResize);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      style={{ opacity: 0.95 }}
    />
  );
};
