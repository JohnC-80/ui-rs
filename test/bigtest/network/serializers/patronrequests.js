import ApplicationSerializer from './application';

export default ApplicationSerializer.extend({
  serialize(...args) {
    const json = ApplicationSerializer.prototype.serialize.apply(this, args);

    if (Array.isArray(json.patronrequests)) {
      json.totalRecords = json.patronrequests.length;
      json.results = json.patronrequests;
      delete json.patronrequests;
    }

    return json;
  }
});
