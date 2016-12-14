import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    createOrder(orderAttrs) {
      // get form details
      var coffeeOrder = this.store.createRecord('coffee-order', orderAttrs);
      coffeeOrder.save();
      // reset form
    },
    deliverOrder(emailAddress) {
      // removeOrder by email address
      var order = this.get('model').findBy('emailAddress', emailAddress);
      // delete order from store
      // next step would be change property to complete, and display strike-through as complete
      // have a delete button for removing the order without being complete
      // order.deleteRecord();
      // order.save().then(function(res){
      //   debugger;
      // });
      order.destroyRecord();
    }
  }
});
