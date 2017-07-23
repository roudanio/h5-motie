import $ from 'jquery';
import Base from '../../wukong/View.abstract';

export default class Portfolio extends Base {
  constructor(el) {
    super(el);
    this.$el = $(el);

    setTimeout(() => {
      let container = this.$el.find('.swiper-container');
      let swiper = new Swiper(container, {
        slidesPerView: 'auto',
        centeredSlides: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        onSlideChangeEnd: this.onSlideChangeEnd.bind(this)
      });
    }, 100);
  }

  onSlideChangeEnd(swiper) {
    this.$el.find('.nav-item').removeClass('active')
      .eq(swiper.activeIndex >> 1).addClass('active');
  }
}