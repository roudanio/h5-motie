import $ from 'sizzle';
import Base from '../../wukong/View.abstract';

export default class Homepage extends Base {
  delegateEvents() {
    this.el.addEventListener('animationend', this.onAnimationEnd.bind(this), false);
    this.el.addEventListener('touchstart', this.onTouchStart.bind(this), false);
  }

  onTouchStart(event) {
    let self = this;
    let y = event.touches[0].screenY;
    let offset = 0;
    function onTouchMove(event) {
      let newY = event.touches[0].screenY;
      offset = newY >= y ? 0 : (y - newY);
      self.el.style.transform = `translate3d(0,-${offset}px,0)`;
    }
    this.el.addEventListener('touchmove', onTouchMove, false);
    this.el.addEventListener('touchend', function onTouchEnd() {
      if (offset > document.body.clientHeight / 4) {
        self.el.classList.add('slideUp');
        self.el.style.transform = 'translate3d(0,-100%,0)';
      } else {
        self.el.style.transform = '';
      }
      self.el.removeEventListener('touchmove', onTouchMove);
      self.el.removeEventListener('touchend', onTouchEnd);
    }, false);
    event.preventDefault();
  }

  onAnimationEnd(event) {
    if (event.target.tagName.toLowerCase() === 'header') {
      event.target.classList.remove('animated', 'slideInDown');
      $('#loading')[0].appendChild(event.target);
      this.el.removeEventListener('animationend', this.onAnimationEnd);
    }
  }
}