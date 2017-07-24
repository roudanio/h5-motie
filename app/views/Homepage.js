import $ from 'sizzle';
import Base from '../../wukong/View.abstract';

export default class Homepage extends Base {
  delegateEvents() {
    this.el.addEventListener('animationend', this.onAnimationEnd.bind(this), false);
  }

  onAnimationEnd(event) {
    if (event.target.tagName.toLowerCase() === 'header') {
      event.target.classList.remove('animated', 'slideInDown');
      $('#loading')[0].appendChild(event.target);
      this.el.removeEventListener('animationend', this.onAnimationEnd);
    }
  }
}