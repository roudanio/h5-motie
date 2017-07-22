import $ from 'sizzle';
import Base from '../../wukong/View.abstract'
import {play} from '../../wukong/helper/next';

export default class Loading extends Base {
  close() {
    let progress = $('#progress')[0];
    progress.classList.remove('float');
    return play(progress, 'fadeOutUp');
  }

  delegateEvents() {
    this.el.addEventListener('animationend', this.onAnimationEnd.bind(this), false);
  }

  onAnimationEnd(event) {
    event.target.remove();
    this.el.classList.add('ready');
    this.el.removeEventListener('animationend', this.onAnimationEnd);
  }
}