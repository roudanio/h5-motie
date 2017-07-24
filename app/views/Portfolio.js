import $ from 'jquery';
import Base from '../../wukong/View.abstract';

export default class Portfolio extends Base {

  delegateEvents() {
    this.$el = $(this.el);
    this.$el.one('shown', () => {
      let container = this.$el.find('.swiper-container');
      let swiper = new Swiper(container, {
        slidesPerView: 'auto',
        centeredSlides: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        onSlideChangeEnd: this.onSlideChangeEnd.bind(this)
      });
      this.el.classList.add('ready');
    });
  }

  onSlideChangeEnd(swiper) {
    this.$el.find('.nav-item').removeClass('active')
      .eq(swiper.activeIndex >> 1).addClass('active');
  }
}