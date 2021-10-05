// const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
// const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)
const vw = document.documentElement.clientWidth;
const vh = document.documentElement.clientHeight;

document
    .getElementById("viewport-size")
    .textContent = `Viewport dimensions: (${vw}x${vh})`;