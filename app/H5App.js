import $ from 'sizzle';
import Base from '../wukong/H5App.abstract';
import {load} from '../wukong/helper/loader';
import {play} from '../wukong/helper/next';
import * as templates from './template';
import Homepage from './views/Homepage';
import Nav from './views/Nav';
import Loading from './views/Loading';
import pageOptions from './views/pages.json';

/* global DEV, Router */

class H5App extends Base {
  constructor(queue) {
    super(queue);
  }

  getKlass(name) {
    switch (name) {
      case 'home':
        return Homepage;

      case 'nav':
        return Nav;

      default:
        return false;
    }
  }

  getPageOptions(name) {
    return pageOptions[name];
  }

  getTemplate(page) {
    return templates[page];
  }

  showHomepage() {
    if (!DEV) {
      load('http://tajs.qq.com/stats?sId=62752451');
    }
    let loading = new Loading($('#loading')[0]);
    loading.close()
      .then(() => {
        let homepage = this.createPage('home');
        homepage.classList.remove('out');
      })
      .then(() => {
        let nav = this.createPage('nav');
        document.body.appendChild(nav);
      });
  }
}

window.H5App = H5App;