import Base from '../../wukong/View.abstract';

export default class Nav extends Base {
  constructor(el) {
    super(el);

    document.body.addEventListener('transitionend', this.body_onTransitionEnd.bind(this), false);
  }

  body_onTransitionEnd(event) {
    if (event.target.id === 'home' && event.target.classList.contains('slideUp')) {
      this.el.classList.remove('out');
    }
  }
}