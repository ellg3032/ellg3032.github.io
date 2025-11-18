import LiquidBackground from 'https://cdn.jsdelivr.net/npm/threejs-components@0.0.22/build/backgrounds/liquid1.min.js'

const app = LiquidBackground(document.getElementById('canvas'))

app.loadImage('https://assets.codepen.io/33787/liquid.webp')
app.liquidPlane.material.metalness = 2
app.liquidPlane.material.roughness = 5
app.liquidPlane.uniforms.displacementScale.value = 10
app.setRain(false)