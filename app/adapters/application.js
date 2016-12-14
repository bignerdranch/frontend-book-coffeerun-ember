import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  host: "http://coffeerun-v2-rest-api.herokuapp.com",
  namespace: "api"
});
