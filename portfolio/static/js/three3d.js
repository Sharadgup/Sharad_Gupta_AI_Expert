document.addEventListener("DOMContentLoaded", () => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.prepend(renderer.domElement);

    const light = new THREE.PointLight(0xffffff, 1, 500);
    light.position.set(10, 10, 25);
    scene.add(light);

    const cubeGeometry = new THREE.BoxGeometry();
    const cubeMaterial = new THREE.MeshStandardMaterial({ color: 0xff6347, wireframe: true });
    const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
    scene.add(cube);

    const loader = new THREE.FontLoader();
    loader.load('https://threejs.org/examples/fonts/helvetiker_regular.typeface.json', (font) => {
        const textGeometry = new THREE.TextGeometry("Welcome!", {
            font: font,
            size: 1,
            height: 0.5,
            curveSegments: 12,
        });
        const textMaterial = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
        const textMesh = new THREE.Mesh(textGeometry, textMaterial);
        textMesh.position.set(-3, 0, 0);
        scene.add(textMesh);

        function animateText() {
            textMesh.rotation.y += 0.01;
        }

        renderer.setAnimationLoop(() => {
            animateText();
            renderer.render(scene, camera);
        });
    });

    camera.position.z = 5;

    function animate() {
        requestAnimationFrame(animate);
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
        renderer.render(scene, camera);
    }

    animate();

    window.addEventListener("resize", () => {
        renderer.setSize(window.innerWidth, window.innerHeight);
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
    });
});
