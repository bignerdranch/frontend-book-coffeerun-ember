import ApplicationSerializer from './application';

export default ApplicationSerializer.extend({
  primaryKey: '_id',
  normalizeFindAllResponse(store, primaryModelClass, payload, id, requestType) {
    let payloadKeys = Object.keys(payload);
    // iterate over key in returned object to create array of records
    let payloadArr = payloadKeys.map(key => payload[key]);
    // get key for JSON data key
    let modeName = primaryModelClass.modelName;
    // set model-name as the response key. JSONSerializer is expecting a payload with a key for the model instance or collection
    let returnObject = { [modeName]: payloadArr };
    // run default normalize() method with payload replaced.
    return this._super(store, primaryModelClass, returnObject, id, requestType);
    // return this.normalizeArrayResponse(...arguments);
  },
  normalizeSaveResponse(store, primaryModelClass, payload, id, requestType) {
    // send the payload back with the "modeName" object
    // set model-name as the response key. JSONSerializer is expecting a payload with a key for the model instance or collection
    let newPayload = {[primaryModelClass.modelName]: payload};
    return this.normalizeSingleResponse(store, primaryModelClass, newPayload, id, requestType);
  },
  normalizeDeleteRecordResponse(store, primaryModelClass, payload, id, requestType) {
    // add the id to the payload attribute name "_id"
    payload._id = id;
    // call super with the existing arguments.
    return this._super(...arguments);
  }
});
