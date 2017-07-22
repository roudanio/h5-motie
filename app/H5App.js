import $ from 'sizzle';
import Base from '../wukong/H5App.abstract';
import {load} from '../wukong/helper/loader';
import {play} from '../wukong/helper/next';
import * as templates from './template';
import Homepage from './views/Homepage';
import Loading from './views/Loading';

/* global DEV, Router */

class H5App extends Base {
  constructor(queue) {
    super(queue);
  }

  getKlass(name) {
    return name === 'home' ? Homepage : false;
  }

  getTemplate(page) {
    return templates[page];
  }

  showHomepage() {
    if (!DEV) {
      load('http://tajs.qq.com/stats?sId=62752451');
    }
    let homepage = this.createPage('home');
    let loading = new Loading($('#loading')[0]);
    loading.close()
      .then(() => {
        document.body.appendChild(homepage);
        homepage.classList.remove('out');
        return play(homepage, 'in');
      })
  }
}

window.H5App = H5App;