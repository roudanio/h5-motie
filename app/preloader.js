import Wukong from '../wukong'

/* global DEV */

let wukong = new Wukong({
  loading: '#loading',
  progress: '#progress'
});

let assets = [
  [
    './img/homepage.png',
    './img/logo.png',
    './img/logos.png',
    './node_modules/director/build/director.min.js',
    './node_modules/animate.css/animate.min.css',
    './node_modules/hammerjs/hammer.min.js',
    './css/screen.css',
    './img/logo-tushu.png',
    './img/logo-wenxue.png',
    './img/logo-yule.png',
    './img/about-bg.jpg',
    './img/ip-bg.jpg',
    './img/invitation.jpg'
  ]
];
if (!DEV) {
  assets.push('./dist/main.js');
}
wukong.load(assets);