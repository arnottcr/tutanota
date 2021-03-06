"use strict";

tutao.provide('tutao.entity.sys.CustomerServerProperties');

/**
 * @constructor
 * @param {Object=} data The json data to store in this entity.
 */
tutao.entity.sys.CustomerServerProperties = function(data) {
  if (data) {
    this.updateData(data);
  } else {
    this.__format = "0";
    this.__id = null;
    this.__permissions = null;
    this._emailSenderList = [];
  }
  this._entityHelper = new tutao.entity.EntityHelper(this);
  this.prototype = tutao.entity.sys.CustomerServerProperties.prototype;
};

/**
 * Updates the data of this entity.
 * @param {Object=} data The json data to store in this entity.
 */
tutao.entity.sys.CustomerServerProperties.prototype.updateData = function(data) {
  this.__format = data._format;
  this.__id = data._id;
  this.__permissions = data._permissions;
  this._emailSenderList = [];
  for (var i=0; i < data.emailSenderList.length; i++) {
    this._emailSenderList.push(new tutao.entity.sys.EmailSenderListElement(this, data.emailSenderList[i]));
  }
};

/**
 * The version of the model this type belongs to.
 * @const
 */
tutao.entity.sys.CustomerServerProperties.MODEL_VERSION = '16';

/**
 * The url path to the resource.
 * @const
 */
tutao.entity.sys.CustomerServerProperties.PATH = '/rest/sys/customerserverproperties';

/**
 * The id of the root instance reference.
 * @const
 */
tutao.entity.sys.CustomerServerProperties.ROOT_INSTANCE_ID = 'A3N5cwADug';

/**
 * The generated id type flag.
 * @const
 */
tutao.entity.sys.CustomerServerProperties.GENERATED_ID = true;

/**
 * The encrypted flag.
 * @const
 */
tutao.entity.sys.CustomerServerProperties.prototype.ENCRYPTED = true;

/**
 * Provides the data of this instances as an object that can be converted to json.
 * @return {Object} The json object.
 */
tutao.entity.sys.CustomerServerProperties.prototype.toJsonData = function() {
  return {
    _format: this.__format, 
    _id: this.__id, 
    _permissions: this.__permissions, 
    emailSenderList: tutao.entity.EntityHelper.aggregatesToJsonData(this._emailSenderList)
  };
};

/**
 * The id of the CustomerServerProperties type.
 */
tutao.entity.sys.CustomerServerProperties.prototype.TYPE_ID = 954;

/**
 * The id of the emailSenderList attribute.
 */
tutao.entity.sys.CustomerServerProperties.prototype.EMAILSENDERLIST_ATTRIBUTE_ID = 959;

/**
 * Provides the id of this CustomerServerProperties.
 * @return {string} The id of this CustomerServerProperties.
 */
tutao.entity.sys.CustomerServerProperties.prototype.getId = function() {
  return this.__id;
};

/**
 * Sets the format of this CustomerServerProperties.
 * @param {string} format The format of this CustomerServerProperties.
 */
tutao.entity.sys.CustomerServerProperties.prototype.setFormat = function(format) {
  this.__format = format;
  return this;
};

/**
 * Provides the format of this CustomerServerProperties.
 * @return {string} The format of this CustomerServerProperties.
 */
tutao.entity.sys.CustomerServerProperties.prototype.getFormat = function() {
  return this.__format;
};

/**
 * Sets the permissions of this CustomerServerProperties.
 * @param {string} permissions The permissions of this CustomerServerProperties.
 */
tutao.entity.sys.CustomerServerProperties.prototype.setPermissions = function(permissions) {
  this.__permissions = permissions;
  return this;
};

/**
 * Provides the permissions of this CustomerServerProperties.
 * @return {string} The permissions of this CustomerServerProperties.
 */
tutao.entity.sys.CustomerServerProperties.prototype.getPermissions = function() {
  return this.__permissions;
};

/**
 * Provides the emailSenderList of this CustomerServerProperties.
 * @return {Array.<tutao.entity.sys.EmailSenderListElement>} The emailSenderList of this CustomerServerProperties.
 */
tutao.entity.sys.CustomerServerProperties.prototype.getEmailSenderList = function() {
  return this._emailSenderList;
};

/**
 * Loads a CustomerServerProperties from the server.
 * @param {string} id The id of the CustomerServerProperties.
 * @return {Promise.<tutao.entity.sys.CustomerServerProperties>} Resolves to the CustomerServerProperties or an exception if the loading failed.
 */
tutao.entity.sys.CustomerServerProperties.load = function(id) {
  return tutao.locator.entityRestClient.getElement(tutao.entity.sys.CustomerServerProperties, tutao.entity.sys.CustomerServerProperties.PATH, id, null, {"v" : 16}, tutao.entity.EntityHelper.createAuthHeaders()).then(function(entity) {
    return entity._entityHelper.loadSessionKey();
  });
};

/**
 * Loads multiple CustomerServerPropertiess from the server.
 * @param {Array.<string>} ids The ids of the CustomerServerPropertiess to load.
 * @return {Promise.<Array.<tutao.entity.sys.CustomerServerProperties>>} Resolves to an array of CustomerServerProperties or rejects with an exception if the loading failed.
 */
tutao.entity.sys.CustomerServerProperties.loadMultiple = function(ids) {
  return tutao.locator.entityRestClient.getElements(tutao.entity.sys.CustomerServerProperties, tutao.entity.sys.CustomerServerProperties.PATH, ids, {"v": 16}, tutao.entity.EntityHelper.createAuthHeaders()).then(function(entities) {
    return tutao.entity.EntityHelper.loadSessionKeys(entities);
  });
};

/**
 * Updates this CustomerServerProperties on the server.
 * @return {Promise.<>} Resolves when finished, rejected if the update failed.
 */
tutao.entity.sys.CustomerServerProperties.prototype.update = function() {
  var self = this;
  return tutao.locator.entityRestClient.putElement(tutao.entity.sys.CustomerServerProperties.PATH, this, {"v": 16}, tutao.entity.EntityHelper.createAuthHeaders()).then(function() {
    self._entityHelper.notifyObservers(false);
  });
};

/**
 * Register a function that is called as soon as any attribute of the entity has changed. If this listener
 * was already registered it is not registered again.
 * @param {function(Object,*=)} listener. The listener function. When called it gets the entity and the given id as arguments.
 * @param {*=} id. An optional value that is just passed-through to the listener.
 */
tutao.entity.sys.CustomerServerProperties.prototype.registerObserver = function(listener, id) {
  this._entityHelper.registerObserver(listener, id);
};

/**
 * Removes a registered listener function if it was registered before.
 * @param {function(Object)} listener. The listener to unregister.
 */
tutao.entity.sys.CustomerServerProperties.prototype.unregisterObserver = function(listener) {
  this._entityHelper.unregisterObserver(listener);
};
/**
 * Provides the entity helper of this entity.
 * @return {tutao.entity.EntityHelper} The entity helper.
 */
tutao.entity.sys.CustomerServerProperties.prototype.getEntityHelper = function() {
  return this._entityHelper;
};
