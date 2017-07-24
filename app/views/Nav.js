import $ from 'jquery';
import Base from '../../wukong/View.abstract';

export default class Nav extends Base {
  delegateEvents() {
    this.$el = $(this.el);
    this.$el.on('shown', () => {
      console.log('on shown');
      this.$el.find('.is-animated').addClass('animated');
    });
  }
}