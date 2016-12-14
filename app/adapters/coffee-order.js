import ApplicationAdapter from './application';
import Ember from 'ember';

export default ApplicationAdapter.extend({
  handleResponse(status, headers, payload, requestData) {
    // returned empty object
    if(!Ember.isArray(payload) && Object.keys(payload).length === 0) {
      let newPayload = [];
      return this._super(status, headers, newPayload, requestData);
    } else {
      return this._super(...arguments);
    }
  },
  pathForType(modelName) {
    var nonDasherized = modelName.replace('-', '');
    return Ember.String.pluralize(nonDasherized);
  },
  createRecord(store, type, snapshot) {
    var data = {};
    var url = this.buildURL(type.modelName, null, snapshot, 'createRecord');
    // make emailAddress the main key
    // object with all attriburtes as value
    data = snapshot.attributes();
    return this.ajax(url, "POST", { data: data });
  },
  deleteRecord: function(store, type, snapshot) {
    var id = snapshot.attributes().emailAddress;
    return this.ajax(this.buildURL(type.modelName, id, snapshot, 'deleteRecord'), "DELETE");
  }
});
