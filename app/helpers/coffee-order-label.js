import Ember from 'ember';

export function coffeeOrder(params) {
  let coffeeOrder = params[0];
  let description = '';

  if(coffeeOrder) {
    description = ' ' + coffeeOrder.get('size') + ' ';
    if(coffeeOrder.get('flavor')) {
      description += coffeeOrder.get('flavor') + ' ';
    }
    description += coffeeOrder.get('coffee') + ', ';
    description += ' (' + coffeeOrder.get('emailAddress') + ')';
    description += ' [' + coffeeOrder.get('strength') + 'x]';
  }
  return description;
}

export default Ember.Helper.helper(coffeeOrder);
