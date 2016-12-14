import Ember from 'ember';

export function coffeeOrder(params) {
  let coffeeOrder = params[0];
  if (coffeeOrder) {
    let size = coffeeOrder.get('size');
    let flavor = coffeeOrder.get('flavor');
    let coffee = coffeeOrder.get('coffee');
    let emailAddress = coffeeOrder.get('emailAddress');
    let strength = coffeeOrder.get('strength');
    return `${size} ${flavor} ${coffee}, (${emailAddress}) [${strength}x]`;
  }
  return '';
}

export default Ember.Helper.helper(coffeeOrder);
