import Ember from 'ember';

export default Ember.Component.extend({
  isComplete: false,
  isCompleteChanged: Ember.observer('isComplete', function() {
    this.send('removeRow');
  }),
  actions: {
    removeRow() {
      this.get('deliverOrder')(this.get('order.emailAddress'));
    }
  }
});
