import Wukong from '../wukong'

let wukong = new Wukong({
  loading: '#loading',
  progress: '.progress'
});
wukong.load([
  [
    './img/homepage.png',
    './img/logo.png',
    './img/logos.png',
    './node_modules/director/build/director.min.js',
    './node_modules/hammerjs/hammer.min.js',
    './css/screen.css'
  ]
]);