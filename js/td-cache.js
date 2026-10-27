// tdLocalCache - cache sederhana
"use strict";

const tdLocalCache = {
  data: {},
  remove(resourceId) {
    delete this.data[resourceId];
  },
  exist(resourceId) {
    return this.data.hasOwnProperty(resourceId) && this.data[resourceId] !== null;
  },
  get(resourceId) {
    return this.data[resourceId];
  },
  set(resourceId, cachedData) {
    this.remove(resourceId);
    this.data[resourceId] = cachedData;
  }
};

export default tdLocalCache;
