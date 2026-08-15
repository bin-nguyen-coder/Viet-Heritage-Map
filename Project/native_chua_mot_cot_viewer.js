import * as THREE from "https://esm.sh/three@0.169.0";
import { OrbitControls } from "https://esm.sh/three@0.169.0/examples/jsm/controls/OrbitControls.js";
import { ColladaLoader } from "https://esm.sh/three@0.169.0/examples/jsm/loaders/ColladaLoader.js";

const DEFAULT_MODEL_URL = "./chua_mot_cot/model.dae";
const DEFAULT_TEXTURE_ROOT = "./chua_mot_cot/model/";
const viewerRegistry = new Map();

function resolveContainer(target) {
  if (typeof target === "string") {
    return document.getElementById(target);
  }
  return target;
}

function showLoading(loadingEl, progressEl, message, progress = null) {
  if (loadingEl?.dataset.complete === "true") {
    return;
  }
  if (loadingEl) {
    loadingEl.dataset.complete = "false";
    loadingEl.classList.remove("is-hidden");
    loadingEl.dataset.message = message;
    const textNode = loadingEl.querySelector("[data-loading-text]");
    if (textNode) {
      textNode.textContent = message;
    }
  }
  if (progressEl && progress !== null) {
    progressEl.style.width = `${progress}%`;
  }
}

function hideLoading(loadingEl) {
  if (loadingEl) {
    loadingEl.dataset.complete = "true";
    loadingEl.classList.add("is-hidden");
  }
}

function cloneMaterial(material) {
  if (!material) {
    return new THREE.MeshStandardMaterial({ color: 0xb9ab93 });
  }
  const next = material.clone();
  if (next.map) {
    next.map.colorSpace = THREE.SRGBColorSpace;
  }
  next.side = THREE.DoubleSide;
  next.needsUpdate = true;
  return next;
}

function centerModel(root) {
  root.updateMatrixWorld(true);
  const box = new THREE.Box3().setFromObject(root);
  const center = box.getCenter(new THREE.Vector3());
  const size = box.getSize(new THREE.Vector3());
  const maxDimension = Math.max(size.x, size.y, size.z, 1);
  root.position.sub(center);
  root.scale.multiplyScalar(12 / maxDimension);
  root.updateMatrixWorld(true);
  return new THREE.Box3().setFromObject(root);
}

function fitCameraToBox(camera, controls, box, offset = 1.35) {
  const size = box.getSize(new THREE.Vector3());
  const center = box.getCenter(new THREE.Vector3());
  const maxSize = Math.max(size.x, size.y, size.z, 1);
  const distance = (maxSize / (2 * Math.tan((Math.PI * camera.fov) / 360))) * offset;

  camera.position.set(center.x + distance * 0.72, center.y + distance * 0.45, center.z + distance * 0.72);
  camera.near = Math.max(distance / 100, 0.1);
  camera.far = distance * 25;
  camera.updateProjectionMatrix();
  controls.target.copy(center);
  controls.update();
}

function createColladaLoader(textureRoot, onProgress) {
  const manager = new THREE.LoadingManager();
  manager.setURLModifier((url) => {
    if (/^https?:/i.test(url) || url.startsWith("data:")) {
      return url;
    }
    const normalized = url.replace(/\\/g, "/");
    if (normalized.startsWith("./chua_mot_cot/") || normalized.startsWith("chua_mot_cot/")) {
      return normalized;
    }
    return `${textureRoot}${normalized.split("/").pop()}`;
  });
  manager.onProgress = (_url, loaded, total) => {
    if (typeof onProgress === "function" && total > 0) {
      onProgress(Math.round((loaded / total) * 100));
    }
  };
  const loader = new ColladaLoader(manager);
  loader.setResourcePath(textureRoot);
  return loader;
}

async function mountNativeViewer(target, options = {}) {
  const container = resolveContainer(target);
  if (!container) {
    throw new Error("Viewer container not found");
  }

  destroyNativeViewer(container);

  const modelUrl = options.modelUrl || DEFAULT_MODEL_URL;
  const textureRoot = options.textureRoot || DEFAULT_TEXTURE_ROOT;
  const loadingEl = resolveContainer(options.loadingTarget);
  const progressEl = resolveContainer(options.progressTarget);

  container.innerHTML = "";
  container.style.margin = "0";
  container.style.padding = "0";
  container.style.width = "100%";
  container.style.height = "100%";
  container.style.overflow = "hidden";
  container.style.display = "block";

  showLoading(loadingEl, progressEl, "Loading Chua Mot Cot model...", 8);

  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x070707);

  const camera = new THREE.PerspectiveCamera(45, Math.max(container.clientWidth, 1) / Math.max(container.clientHeight, 1), 0.1, 2000);
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(Math.max(container.clientWidth, 1), Math.max(container.clientHeight, 1), false);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.domElement.style.margin = "0";
  renderer.domElement.style.padding = "0";
  renderer.domElement.style.width = "100%";
  renderer.domElement.style.height = "100%";
  renderer.domElement.style.overflow = "hidden";
  renderer.domElement.style.display = "block";
  container.appendChild(renderer.domElement);

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.enablePan = true;
  controls.enableZoom = true;
  controls.autoRotate = false;

  scene.add(new THREE.AmbientLight(0xffffff, 0.9));
  const sunLight = new THREE.DirectionalLight(0xffffff, 1.2);
  sunLight.position.set(5, 10, 7);
  sunLight.castShadow = true;
  sunLight.shadow.mapSize.set(2048, 2048);
  sunLight.shadow.bias = -0.0001;
  scene.add(sunLight);

  const fillLight = new THREE.DirectionalLight(0xd6e5ff, 0.45);
  fillLight.position.set(-8, 4, -6);
  scene.add(fillLight);

  const floor = new THREE.Mesh(
    new THREE.CircleGeometry(20, 96),
    new THREE.ShadowMaterial({ opacity: 0.18 }),
  );
  floor.rotation.x = -Math.PI / 2;
  floor.position.y = -2.9;
  floor.receiveShadow = true;
  scene.add(floor);

  const loader = createColladaLoader(textureRoot, (progress) => {
    showLoading(loadingEl, progressEl, "Loading Chua Mot Cot model...", progress);
  });

  const collada = await new Promise((resolve, reject) => {
    loader.load(
      modelUrl,
      resolve,
      (event) => {
        if (event?.total) {
          showLoading(loadingEl, progressEl, "Loading Chua Mot Cot model...", Math.round((event.loaded / event.total) * 100));
        }
      },
      reject,
    );
  });

  const root = collada.scene;
  root.traverse((node) => {
    if (!node.isMesh) {
      return;
    }
    node.material = Array.isArray(node.material)
      ? node.material.map(cloneMaterial)
      : cloneMaterial(node.material);
    node.castShadow = true;
    node.receiveShadow = true;
  });

  const centeredBox = centerModel(root);
  scene.add(root);
  fitCameraToBox(camera, controls, centeredBox, 0.8);
  floor.position.y = centeredBox.min.y - 0.04;
  window.__nativeChuaMotCotDebug = {
    boxSize: centeredBox.getSize(new THREE.Vector3()),
    boxMin: centeredBox.min.clone(),
    boxMax: centeredBox.max.clone(),
    cameraPosition: camera.position.clone(),
  };
  hideLoading(loadingEl);

  let destroyed = false;
  let frameId = null;

  const resize = () => {
    if (destroyed) {
      return;
    }
    const width = Math.max(container.clientWidth, 1);
    const height = Math.max(container.clientHeight, 1);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height, false);
  };

  const animate = () => {
    if (destroyed) {
      return;
    }
    controls.update();
    renderer.render(scene, camera);
    frameId = requestAnimationFrame(animate);
  };

  const resizeObserver = new ResizeObserver(resize);
  resizeObserver.observe(container);
  window.addEventListener("resize", resize);
  resize();
  animate();

  const state = {
    destroy() {
      if (destroyed) {
        return;
      }
      destroyed = true;
      if (frameId) {
        cancelAnimationFrame(frameId);
      }
      resizeObserver.disconnect();
      window.removeEventListener("resize", resize);
      controls.dispose();
      renderer.dispose();
      container.innerHTML = "";
    },
  };

  viewerRegistry.set(container, state);
  return state;
}

function destroyNativeViewer(target) {
  const container = resolveContainer(target);
  const existing = container ? viewerRegistry.get(container) : null;
  if (existing) {
    existing.destroy();
    viewerRegistry.delete(container);
  }
}

window.NativeChuaMotCotViewer = {
  mount: mountNativeViewer,
  destroy: destroyNativeViewer,
};
