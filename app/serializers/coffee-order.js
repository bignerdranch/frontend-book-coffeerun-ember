import ApplicationSerializer from './application';

export default ApplicationSerializer.extend({
  primaryKey: '_id',
  normalizeFindAllResponse(store, primaryModelClass, payload, id, requestType) {
    let payloadKeys = Object.keys(payload);
    let payloadArr = [];
    let returnObject = {};
    // iterate over key in returned object to create array of records
    payloadKeys.forEach(function(key) {
      let newItem = payload[key];
      payloadArr.push(newItem);
    });
    // get key for JSON data key
    let modeName = primaryModelClass.modelName;
    // set model-name as the response key. JSONSerializer is expecting a payload with a key for the model instance or collection
    returnObject[modeName] = payloadArr;
    // run default normalize() method with payload replaced.
    return this._super(store, primaryModelClass, returnObject, id, requestType);
    // return this.normalizeArrayResponse(...arguments);
  },
  normalizeSaveResponse(store, primaryModelClass, payload, id, requestType) {
    let newPayload = {};
    // set model-name as the response key. JSONSerializer is expecting a payload with a key for the model instance or collection
    if(requestType !== "deleteRecord") {
      newPayload[primaryModelClass.modelName] = payload;
    } else {
      // send the payload back with the "modeName" object
      newPayload[primaryModelClass.modelName] = payload;
      // add the id to the "modelName" object with attribute name "_id"
      newPayload[primaryModelClass.modelName]._id = id;
    }
    return this.normalizeSingleResponse(store, primaryModelClass, newPayload, id, requestType);
  }
});
