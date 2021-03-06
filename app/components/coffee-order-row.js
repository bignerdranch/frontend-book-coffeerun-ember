import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ["checkbox"],
  attributeBindings: ["data-coffee-order"],
  isComplete: false,
  isCompleteChanged: Ember.observer('isComplete', function() {
    if(this.get('isComplete')) this.send('removeRow');
  }),
  actions: {
    removeRow() {
      this.get('deliverOrder')(this.get('order.emailAddress'));
    }
  }
});
