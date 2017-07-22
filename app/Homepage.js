import $ from 'sizzle';
import Base from '../wukong/Homepage.abstract';
import {load} from '../wukong/helper/loader';
import {play} from '../wukong/helper/next';
import * as templates from './template';

/* global DEV, Router */

class Homepage extends Base {
  constructor(queue) {
    super(queue);
  }

  getTemplate(page) {
    return templates[page];
  }

  showHomepage() {
    if (!DEV) {
      load('http://tajs.qq.com/stats?sId=62752451');
    }
    let homepage = this.createPage('homepage');

    play($('.progress')[0], 'fadeOutUp')
      .then(() => {
        document.body.appendChild(homepage);
        return play(homepage, 'in');
      })
  }
}

window.Homepage = Homepage;