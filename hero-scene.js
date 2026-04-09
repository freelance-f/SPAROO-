import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.164.1/build/three.module.js";

const mount = document.getElementById("hero-canvas");
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (!mount || prefersReducedMotion) {
  if (mount) {
    mount.style.display = "none";
  }
} else {
  const renderer = new THREE.WebGLRenderer({
    alpha: true,
    antialias: true,
    powerPreference: "high-performance",
  });

  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
  renderer.setSize(Math.max(mount.clientWidth, 1), Math.max(mount.clientHeight, 1), false);
  renderer.setClearColor(0x000000, 0);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  mount.appendChild(renderer.domElement);

  const scene = new THREE.Scene();
  scene.fog = new THREE.Fog(0x000000, 980, 3600);

  const camera = new THREE.PerspectiveCamera(46, 1, 1, 6000);
  camera.position.set(0, 320, 1440);

  const ambient = new THREE.AmbientLight(0xffffff, 0.64);
  scene.add(ambient);

  const accent = new THREE.PointLight(0x00ff88, 1.15, 2200);
  accent.position.set(220, 240, 1040);
  scene.add(accent);

  const separation = 64;
  const amountX = 28;
  const amountY = 42;
  const total = amountX * amountY;

  const positions = new Float32Array(total * 3);
  const initialPositions = new Float32Array(total * 3);
  const colors = new Float32Array(total * 3);

  let i = 0;
  for (let ix = 0; ix < amountX; ix += 1) {
    for (let iy = 0; iy < amountY; iy += 1) {
      const x = ix * separation - (amountX * separation) / 2;
      const y = 0;
      const z = iy * separation - (amountY * separation) / 2;
      const index = i * 3;

      positions[index] = x;
      positions[index + 1] = y;
      positions[index + 2] = z;

      initialPositions[index] = x;
      initialPositions[index + 1] = y;
      initialPositions[index + 2] = z;

      colors[index] = 0.04;
      colors[index + 1] = 1;
      colors[index + 2] = 0.56;

      i += 1;
    }
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

  const material = new THREE.PointsMaterial({
    size: 6.2,
    vertexColors: true,
    transparent: true,
    opacity: 0.48,
    sizeAttenuation: true,
    depthWrite: false,
  });

  const points = new THREE.Points(geometry, material);
  points.rotation.x = -0.88;
  points.position.set(0, -186, 0);
  scene.add(points);

  const secondaryMaterial = new THREE.PointsMaterial({
    color: 0xcafee3,
    size: 3.2,
    transparent: true,
    opacity: 0.1,
    sizeAttenuation: true,
    depthWrite: false,
  });

  const secondary = new THREE.Points(geometry.clone(), secondaryMaterial);
  secondary.rotation.x = -0.88;
  secondary.position.set(0, -160, -110);
  scene.add(secondary);

  const pointer = { x: 0, y: 0 };
  const currentPointer = { x: 0, y: 0 };

  const resize = () => {
    const width = Math.max(mount.clientWidth, 1);
    const height = Math.max(mount.clientHeight, 1);
    renderer.setSize(width, height, false);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
  };

  resize();

  window.addEventListener("pointermove", (event) => {
    pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
    pointer.y = (event.clientY / window.innerHeight) * 2 - 1;
  });

  const clock = new THREE.Clock();
  let frameId = 0;
  let running = true;

  const animate = () => {
    const elapsed = clock.getElapsedTime();
    const positionAttribute = geometry.getAttribute("position");
    const secondaryPositionAttribute = secondary.geometry.getAttribute("position");

    currentPointer.x = THREE.MathUtils.lerp(currentPointer.x, pointer.x, 0.03);
    currentPointer.y = THREE.MathUtils.lerp(currentPointer.y, pointer.y, 0.03);

    let particleIndex = 0;
    for (let ix = 0; ix < amountX; ix += 1) {
      for (let iy = 0; iy < amountY; iy += 1) {
        const index = particleIndex * 3;
        const waveY =
          Math.sin((ix + elapsed * 1.15) * 0.36) * 22 +
          Math.sin((iy + elapsed * 1.55) * 0.4) * 18;

        positionAttribute.array[index] = initialPositions[index];
        positionAttribute.array[index + 1] = waveY;
        positionAttribute.array[index + 2] = initialPositions[index + 2];

        secondaryPositionAttribute.array[index] = initialPositions[index];
        secondaryPositionAttribute.array[index + 1] = waveY * 0.6;
        secondaryPositionAttribute.array[index + 2] = initialPositions[index + 2];

        particleIndex += 1;
      }
    }

    positionAttribute.needsUpdate = true;
    secondaryPositionAttribute.needsUpdate = true;

    points.rotation.z = Math.sin(elapsed * 0.12) * 0.025;
    secondary.rotation.z = Math.sin(elapsed * 0.09) * 0.03;
    points.position.x = currentPointer.x * 40;
    points.position.y = -186 + currentPointer.y * -18;
    secondary.position.x = currentPointer.x * 24;

    camera.position.x = THREE.MathUtils.lerp(camera.position.x, currentPointer.x * 92, 0.04);
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, 320 + currentPointer.y * -34, 0.04);
    camera.lookAt(0, -132, 0);

    accent.intensity = 1.05 + Math.sin(elapsed * 1.05) * 0.08;
    renderer.render(scene, camera);

    if (running) {
      frameId = window.requestAnimationFrame(animate);
    }
  };

  const start = () => {
    if (running) {
      return;
    }

    running = true;
    clock.start();
    animate();
  };

  const stop = () => {
    running = false;
    if (frameId) {
      window.cancelAnimationFrame(frameId);
      frameId = 0;
    }
  };

  animate();

  const observer = new IntersectionObserver(
    (entries) => {
      const [entry] = entries;
      if (!entry) {
        return;
      }

      if (entry.isIntersecting) {
        start();
      } else {
        stop();
      }
    },
    { threshold: 0.08 }
  );

  observer.observe(mount);
  window.addEventListener("resize", resize);
}
