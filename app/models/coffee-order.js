import DS from 'ember-data';

export default DS.Model.extend({
  coffee: DS.attr('string'),
  emailAddress: DS.attr('string'),
  strength: DS.attr('number', {defaultValue: 30} ),
  flavor: DS.attr('string'),
  size: DS.attr('string')
});
