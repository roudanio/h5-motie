import $ from 'jquery';
import Base from '../wukong/H5App.abstract';
import {load} from '../wukong/helper/loader';
import * as templates from './template';
import Homepage from './views/Homepage';
import Nav from './views/Nav';
import Loading from './views/Loading';
import Portfolio from './views/Portfolio';
import pageOptions from './views/pages.json';

/* global DEV, Router */

class H5App extends Base {
  constructor(queue) {
    super(queue);
  }

  /**
   * 客户要求全部用滚屏实现，所以改成一个大 swiper 包裹所有页
   */
  createSwiper() {
    let swiper = document.createElement('div');
    swiper.id = 'main-swiper';
    swiper.className = 'swiper-container hide';
    document.body.appendChild(swiper);
    let container = document.createElement('div');
    container.className = 'swiper-wrapper';
    swiper.appendChild(container);
    let homepage = this.createPage('home', container);
    this.createPage('nav', container);
    this.createPage('about', container);
    this.createPage('ip100', container);
    this.createPage('portfolio', container);
    this.createPage('invitation', container);
    return [swiper, homepage];
  }

  createPage(name, container) {
    let page = super.createPage(name, container);
    page.classList.add('swiper-slide');
    page.classList.remove('hide', 'out');
    return page;
  }

  getKlass(name) {
    switch (name) {
      case 'home':
        return Homepage;

      case 'nav':
      case 'ip100':
        return Nav;

      case 'portfolio':
        return Portfolio;

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
    let [swiper, homepage] = this.createSwiper();
    loading.close()
      .then(() => {
        swiper.classList.remove('hide');
        homepage.classList.remove('out', 'hide');
      })
      .then(() => {
        new Swiper(swiper, {
          direction: 'vertical',
          onSlideChangeEnd(swiper) {
            $('.page').eq(swiper.activeIndex).trigger('shown');
          }
        });
      });
  }
}

window.H5App = H5App;