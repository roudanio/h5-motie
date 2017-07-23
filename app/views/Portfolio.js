import $ from 'sizzle';
import Base from '../../wukong/View.abstract';

export default class Portfolio extends Base {
  constructor(el) {
    super(el);

    let container = $('.swiper-container', this.el)[0];
    let swiper = new Swiper(container, {
      slidesPerView: 'auto',
      centeredSlides: true,
      spaceBetween: 18
    });
  }

}