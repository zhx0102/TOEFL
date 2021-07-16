import logo from './assets/img/logo.png'
import './assets/css/my.css'

const image = new Image()
image.src = logo
document.body.appendChild(image)
document.getElementById('app').innerHTML = '<h1>Hello222</h1>'