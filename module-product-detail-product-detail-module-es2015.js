(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["module-product-detail-product-detail-module"],{

/***/ "./node_modules/lodash.isequal/index.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash.isequal/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {/**
 * Lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright JS Foundation and other contributors <https://js.foundation/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    asyncTag = '[object AsyncFunction]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    nullTag = '[object Null]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    proxyTag = '[object Proxy]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]',
    undefinedTag = '[object Undefined]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function arraySome(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function cacheHas(cache, key) {
  return cache.has(key);
}

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

/** Used for built-in method references. */
var arrayProto = Array.prototype,
    funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined,
    Symbol = root.Symbol,
    Uint8Array = root.Uint8Array,
    propertyIsEnumerable = objectProto.propertyIsEnumerable,
    splice = arrayProto.splice,
    symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols,
    nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined,
    nativeKeys = overArg(Object.keys, Object);

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView'),
    Map = getNative(root, 'Map'),
    Promise = getNative(root, 'Promise'),
    Set = getNative(root, 'Set'),
    WeakMap = getNative(root, 'WeakMap'),
    nativeCreate = getNative(Object, 'create');

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
}

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var index = -1,
      length = values == null ? 0 : values.length;

  this.__data__ = new MapCache;
  while (++index < length) {
    this.add(values[index]);
  }
}

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
  this.size = 0;
}

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache) {
    var pairs = data.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}

/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray(object),
      othIsArr = isArray(other),
      objTag = objIsArr ? arrayTag : getTag(object),
      othTag = othIsArr ? arrayTag : getTag(other);

  objTag = objTag == argsTag ? objectTag : objTag;
  othTag = othTag == argsTag ? objectTag : othTag;

  var objIsObj = objTag == objectTag,
      othIsObj = othTag == objectTag,
      isSameTag = objTag == othTag;

  if (isSameTag && isBuffer(object)) {
    if (!isBuffer(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack);
    return (objIsArr || isTypedArray(object))
      ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
      : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;

      stack || (stack = new Stack);
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack);
  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */
function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      arrLength = array.length,
      othLength = other.length;

  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(array);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var index = -1,
      result = true,
      seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new SetCache : undefined;

  stack.set(array, other);
  stack.set(other, array);

  // Ignore non-index properties.
  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, arrValue, index, other, array, stack)
        : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== undefined) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    // Recursively compare arrays (susceptible to call stack limits).
    if (seen) {
      if (!arraySome(other, function(othValue, othIndex) {
            if (!cacheHas(seen, othIndex) &&
                (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
              return seen.push(othIndex);
            }
          })) {
        result = false;
        break;
      }
    } else if (!(
          arrValue === othValue ||
            equalFunc(arrValue, othValue, bitmask, customizer, stack)
        )) {
      result = false;
      break;
    }
  }
  stack['delete'](array);
  stack['delete'](other);
  return result;
}

/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag:
      if ((object.byteLength != other.byteLength) ||
          (object.byteOffset != other.byteOffset)) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;

    case arrayBufferTag:
      if ((object.byteLength != other.byteLength) ||
          !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
        return false;
      }
      return true;

    case boolTag:
    case dateTag:
    case numberTag:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return eq(+object, +other);

    case errorTag:
      return object.name == other.name && object.message == other.message;

    case regexpTag:
    case stringTag:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == (other + '');

    case mapTag:
      var convert = mapToArray;

    case setTag:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
      convert || (convert = setToArray);

      if (object.size != other.size && !isPartial) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG;

      // Recursively compare objects (susceptible to call stack limits).
      stack.set(object, other);
      var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack['delete'](object);
      return result;

    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}

/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      objProps = getAllKeys(object),
      objLength = objProps.length,
      othProps = getAllKeys(other),
      othLength = othProps.length;

  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
      return false;
    }
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(object);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);

  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
        othValue = other[key];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, objValue, key, other, object, stack)
        : customizer(objValue, othValue, key, object, other, stack);
    }
    // Recursively compare objects (susceptible to call stack limits).
    if (!(compared === undefined
          ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
          : compared
        )) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == 'constructor');
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor;

    // Non `Object` object instances with different constructors are not equal.
    if (objCtor != othCtor &&
        ('constructor' in object && 'constructor' in other) &&
        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack['delete'](object);
  stack['delete'](other);
  return result;
}

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter(nativeGetSymbols(object), function(symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = baseGetTag(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length &&
    (typeof value == 'number' || reIsUint.test(value)) &&
    (value > -1 && value % 1 == 0 && value < length);
}

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

/**
 * Performs a deep comparison between two values to determine if they are
 * equivalent.
 *
 * **Note:** This method supports comparing arrays, array buffers, booleans,
 * date objects, error objects, maps, numbers, `Object` objects, regexes,
 * sets, strings, symbols, and typed arrays. `Object` objects are compared
 * by their own, not inherited, enumerable properties. Functions and DOM
 * nodes are compared by strict equality, i.e. `===`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.isEqual(object, other);
 * // => true
 *
 * object === other;
 * // => false
 */
function isEqual(value, other) {
  return baseIsEqual(value, other);
}

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = isEqual;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/ng2-carouselamos/fesm2015/ng2-carouselamos.js":
/*!********************************************************************!*\
  !*** ./node_modules/ng2-carouselamos/fesm2015/ng2-carouselamos.js ***!
  \********************************************************************/
/*! exports provided: Ng2CarouselamosComponent, Ng2CarouselamosModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ng2CarouselamosComponent", function() { return Ng2CarouselamosComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ng2CarouselamosModule", function() { return Ng2CarouselamosModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var lodash_isequal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash.isequal */ "./node_modules/lodash.isequal/index.js");
/* harmony import */ var lodash_isequal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_isequal__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");




/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function SelectedItemInterface() { }
if (false) {}
/*
 *
 * @param() items - List of items to belong in carousel
 * @param() width - Size of window(view) to show
 * @param() $prev - Template for previous button
 * @param() $next - Template for next button
 * @param() $item - Template for the item
 */
class Ng2CarouselamosComponent {
    constructor() {
        this.items = [];
        this.width = 500;
        this.onSelectedItem = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.childIndex = 0;
        this.amount = 0;
        this.startPress = 0;
        this.lastX = 0;
    }
    /**
     * @param {?} e
     * @return {?}
     */
    onMousedown(e) {
        if (e.which === 1) {
            this.startPress = e.clientX;
            this.lastX = this.amount;
        }
    }
    /**
     * @param {?} e
     * @return {?}
     */
    onTouchdown(e) {
        if (navigator.userAgent.indexOf("Android") >= 0)
            e.preventDefault();
        this.startPress = e.targetTouches[0].clientX;
        this.lastX = this.amount;
    }
    /**
     * @param {?} e
     * @param {?} maxWidth
     * @return {?}
     */
    onMousemove(e, maxWidth) {
        if (e.which === 1) {
            /** @type {?} */
            const amount = this.lastX - (this.startPress - e.clientX);
            if (amount > 0 || amount < -(maxWidth - this.width))
                return;
            this.amount = amount;
        }
    }
    /**
     * @param {?} e
     * @param {?} maxWidth
     * @return {?}
     */
    onTouchmove(e, maxWidth) {
        if (navigator.userAgent.indexOf("Android") >= 0)
            e.preventDefault();
        /** @type {?} */
        const amount = this.lastX - (this.startPress - e.targetTouches[0].clientX);
        if (amount > 0 || amount < -(maxWidth - this.width))
            return;
        this.amount = amount;
    }
    /**
     * @param {?} e
     * @param {?} elem
     * @return {?}
     */
    onMouseup(e, elem) {
        if (e.which === 1) {
            this.startPress = 0;
            this.snap(elem);
        }
    }
    /**
     * @param {?} e
     * @param {?} elem
     * @return {?}
     */
    onTouchup(e, elem) {
        if (navigator.userAgent.indexOf("Android") >= 0)
            e.preventDefault();
        this.startPress = 0;
        this.snap(elem);
    }
    /**
     * @param {?} elem
     * @return {?}
     */
    snap(elem) {
        /** @type {?} */
        let counter = 0;
        /** @type {?} */
        let lastVal = 0;
        for (let i = 0; i < this.items.length; i++) {
            /** @type {?} */
            const el = elem.children[i];
            /** @type {?} */
            const style = el.currentStyle || window.getComputedStyle(el);
            counter +=
                el.offsetWidth +
                    (parseFloat(style.marginLeft) + parseFloat(style.marginRight));
            if (this.amount <= lastVal && this.amount >= -counter) {
                this.amount = -lastVal;
                this.childIndex = i;
                this.onSelectedItem.emit({
                    item: this.items[this.childIndex],
                    index: this.childIndex,
                    first: false
                });
                return;
            }
            lastVal = counter;
        }
        return counter;
    }
    /**
     * @param {?} forward
     * @param {?} elem
     * @return {?}
     */
    scroll(forward, elem) {
        this.childIndex += forward ? 1 : -1;
        this.onSelectedItem.emit({
            item: this.items[this.childIndex],
            index: this.childIndex,
            first: false
        });
        this.amount = -this.calcScroll(elem);
    }
    /**
     * @param {?} elem
     * @return {?}
     */
    calcScroll(elem) {
        /** @type {?} */
        let counter = 0;
        for (let i = this.childIndex - 1; i >= 0; i--) {
            /** @type {?} */
            const el = elem.children[i];
            /** @type {?} */
            const style = el.currentStyle || window.getComputedStyle(el);
            counter +=
                el.offsetWidth +
                    (parseFloat(style.marginLeft) + parseFloat(style.marginRight));
        }
        return counter;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.items &&
            !lodash_isequal__WEBPACK_IMPORTED_MODULE_1___default()(changes.items.previousValue, changes.items.currentValue)) {
            if (changes.items.firstChange) {
                this.onSelectedItem.emit({
                    item: this.items[this.childIndex],
                    index: this.childIndex,
                    first: true
                });
            }
            this.amount = 0;
        }
    }
}
Ng2CarouselamosComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: "[ng2-carouselamos]",
                template: "<div class=\"ng2-carouselamos-container\">\n  <div\n    class=\"ng2-carouselamos-wrapper\"\n    [style.width]=\"width + 'px'\"\n    (mousedown)=\"onMousedown($event)\"\n    (touchstart)=\"onTouchdown($event)\"\n    (mousemove)=\"onMousemove($event, list.scrollWidth)\"\n    (touchmove)=\"onTouchmove($event, list.scrollWidth)\"\n    (mouseup)=\"onMouseup($event, list)\"\n    (mouseleave)=\"onMouseup($event, list)\"\n    (touchend)=\"onTouchup($event, list)\"\n  >\n    <div\n      class=\"ng2-carouselamos\"\n      [attr.startPress]=\"startPress\"\n      [style.transition]=\"startPress > 0 ? 'none' : '-webkit-transform 1s'\"\n      [style.webkitTransition]=\"\n        startPress > 0 ? 'none' : '-webkit-transform 1s'\n      \"\n      [style.transform]=\"'translateX(' + amount + 'px)'\"\n      [style.webkitTransform]=\"'translateX(' + amount + 'px)'\"\n      #list\n    >\n      <ng-template\n        *ngFor=\"let item of items; let i = index\"\n        [ngTemplateOutlet]=\"$item\"\n        [ngTemplateOutletContext]=\"{\n          $implicit: item,\n          index: i,\n          selectedIndex: childIndex\n        }\"\n      ></ng-template>\n    </div>\n  </div>\n  <div class=\"controls\" *ngIf=\"$prev || $next\">\n    <button\n      type=\"button\"\n      *ngIf=\"$prev\"\n      (click)=\"scroll(false, list)\"\n      [disabled]=\"amount >= 0\"\n    >\n      <ng-template [ngTemplateOutlet]=\"$prev\"></ng-template>\n    </button>\n    <button\n      type=\"button\"\n      *ngIf=\"$next\"\n      (click)=\"scroll(true, list)\"\n      [disabled]=\"amount <= -(list.scrollWidth - width)\"\n    >\n      <ng-template [ngTemplateOutlet]=\"$next\"></ng-template>\n    </button>\n  </div>\n</div>\n",
                styles: [".ng2-carouselamos-container{position:relative;display:flex;justify-content:center}.ng2-carouselamos-wrapper{overflow:hidden}.ng2-carouselamos{display:flex;transition:transform 1s}.controls{pointer-events:none;position:absolute;display:flex;width:100%;justify-content:space-between;top:50%;left:0;transform:translateY(-50%)}.controls button{pointer-events:all;background:0 0;border:0}"]
            }] }
];
Ng2CarouselamosComponent.propDecorators = {
    items: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    width: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    $prev: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    $next: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    $item: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
    onSelectedItem: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }]
};
if (false) {}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class Ng2CarouselamosModule {
}
Ng2CarouselamosModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                declarations: [Ng2CarouselamosComponent],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
                exports: [Ng2CarouselamosComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


//# sourceMappingURL=ng2-carouselamos.js.map


/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/module/product-detail/product-detail/product-detail.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/module/product-detail/product-detail/product-detail.component.html ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"product-wrapper-container\">\n    <!-- Decription -->\n    <div class=\"row inner-pad-25\">\n        <!-- Size Chart -->\n        <div class=\"cl-4 cl-xs-12 cl order-xs-1\">\n            <div class=\"pad-25 w100\">\n                <div class=\"c-flex column w100 c-center c-align-center\">\n                    <div class=\"overview\">\n                        <div class=\"c-flex c-space-between\">\n                            <span class=\"product-name\">{{product?.name}}</span>\n                            <span class=\"price\">{{product?.price}}</span>\n                        </div>\n                        <div class=\"c-flex c-space-between\">\n                            <span class=\"description\">{{product?.description}}</span>\n                            <span class=\"rating\">\n                                <i *ngFor=\"let s of stars\">\n                                    <img [src]=\"star\">\n                                </i>\n                                <i>\n                                    <img [src]=\"fullStar\">\n                                </i>154 Rating</span>\n                        </div>\n                    </div>\n                    <div class=\"size-chart\">\n                        <div class=\"c-flex c-space-between sep\">\n                            <div class=\"tab c-flex c-center c-align-center\" [ngClass]=\"{'in-active-left':men}\" (click)='toggleSizeChart()'>\n                                <span>MEN</span>\n                            </div>\n                            <div class=\"tab c-flex c-center c-align-center\" [ngClass]=\"{'in-active':!men}\" (click)='toggleSizeChart()'>\n                                <span>WOMEN</span>\n                            </div>\n                        </div>\n                        <div class=\"pad-12 size-color-pallete\">\n                            <span>SELECT COLOR</span>\n                            <div class=\"colors c-flex c-align-center\">\n                                <div class=\"marker-container\" *ngFor=\"let color of colorPallete;let i=index\" [ngClass]=\"{'active': i==6}\">\n                                    <div class=\"marker\" [ngStyle]=\"{ 'background-color': color }\"></div>\n                                </div>\n                                <div class=\"marker-container\">\n                                    <div class=\"marker marker-multi\"></div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"pad-12 size-index\">\n                            <div class=\"c-flex c-space-between\">\n                                <span>SELECT SIZE</span>\n                                <span class=\"underline\">SIZE & FIT GUIDE</span>\n                            </div>\n                            <div class=\"size-panel c-flex\">\n                                <div class=\"sizer\" *ngFor=\"let size of sizeList\" [ngClass]=\"{'disabled':!size.disabled }\">\n                                    <span>\n                                        {{size.size}}\n                                    </span>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"add-button w100\">\n                            <span>ADD TO BAG</span>\n                        </div>\n                    </div>\n                    <div>\n                        <span class=\"shipping\">Worldwide Shipping + Free Returns</span>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <!-- Product Details -->\n        <div class=\"cl-8 cl-xs-12 cl\">\n            <div class=\"inner-pad-25 w100\">\n                <div class=\"c-flex column\">\n                    <div class=\"product-main-image c-flex c-center\">\n                        <img [src]=\"image?.url\">\n                    </div>\n                    <div class=\"carousel-container c-flex c-center\">\n                        <!-- Caorusel -->\n                        <div class=\"car-container thumbnail-container\" ng2-carouselamos [width]=\"\" [items]=\"images\" [$item]=\"itemTemplateThumbnail\"\n                            [$prev]=\"prevTemplateThumbnail\" [$next]=\"nextTemplateThumbnail\" (onSelectedItem)=\"selectedItem = $event.item;cIndex=$event.item.id; selectedIndex = $event.index;getImagebyProductId($event.item)\"></div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <!-- Favourites -->\n    <div class=\"fav\">\n        <div class=\"row\">\n            <div class=\"cl\">\n                <div class=\"product-list\">\n                    <h3>You’ll Also Like</h3>\n                </div>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"cl rel\">\n                <div class=\"overlay\"></div>\n                <div class=\"car-container d-show\" ng2-carouselamos [width]=\"\" [items]=\"listOfItems\" [$item]=\"itemTemplate\" [$prev]=\"prevTemplate\"\n                    [$next]=\"nextTemplate\" (onSelectedItem)=\"selectedItem = $event.item;selectedIndex = $event.index\"></div>\n                   <div class=\"d-show-12 car-container md-view\">\n                        <div class=\"product-wrapper\" *ngFor=\"let item of listOfItems.slice(0,4);\">\n                                <div class=\"product-image\">\n                                    <div class=\"description\" *ngIf=\"item?.desc\">\n                                        {{item?.desc}}\n                                    </div>\n                                    <img [src]=\"item?.url\">\n                                </div>\n                                <div class=\"product-text c-flex column\">\n                                    <span class=\"name\">{{item?.name}}</span>\n                                    <span class=\"price\">${{item?.price}}</span>\n                                </div>\n                            </div>\n                   </div>\n            </div>\n        </div>\n    </div>\n<!-- Templates For Carousel -->\n    <ng-template #prevTemplate>\n        <span>\n            <img class=\"arrowL\" [src]=\"arrowLeft\">\n        </span>\n    </ng-template>\n\n    <ng-template #nextTemplate>\n        <span>\n            <img class=\"arrowR\" [src]=\"arrowRight\">\n        </span>\n    </ng-template>\n\n    <ng-template let-item let-i=\"index\" #itemTemplate>\n        <div class=\"product-wrapper\">\n            <div class=\"product-image\">\n                <div class=\"description\" *ngIf=\"item?.desc\">\n                    {{item?.desc}}\n                </div>\n                <img [src]=\"item?.url\">\n            </div>\n            <div class=\"product-text c-flex column\">\n                <span class=\"name\">{{item?.name}}</span>\n                <span class=\"price\">${{item?.price}}</span>\n            </div>\n        </div>\n    </ng-template>\n    <ng-template #prevTemplateThumbnail>\n        <span>\n            <img class=\"arrowL\" [src]=\"arrowLeft\">\n        </span>\n    </ng-template>\n\n    <ng-template #nextTemplateThumbnail>\n        <span>\n            <img class=\"arrowR\" [src]=\"arrowRight\">\n        </span>\n    </ng-template>\n\n    <ng-template let-item let-i=\"index\" #itemTemplateThumbnail>\n        <div class=\"thumbnail c-flex c-center c-align-center\" [ngClass]=\"{'active':cIndex==item.id}\">\n            <img [src]=\"item?.url\">\n        </div>\n    </ng-template>\n</div>\n\n{{cIndex}}"

/***/ }),

/***/ "./node_modules/rxjs/internal/Observable.js":
/*!**************************************************!*\
  !*** ./node_modules/rxjs/internal/Observable.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var canReportError_1 = __webpack_require__(/*! ./util/canReportError */ "./node_modules/rxjs/internal/util/canReportError.js");
var toSubscriber_1 = __webpack_require__(/*! ./util/toSubscriber */ "./node_modules/rxjs/internal/util/toSubscriber.js");
var observable_1 = __webpack_require__(/*! ../internal/symbol/observable */ "./node_modules/rxjs/internal/symbol/observable.js");
var pipe_1 = __webpack_require__(/*! ./util/pipe */ "./node_modules/rxjs/internal/util/pipe.js");
var config_1 = __webpack_require__(/*! ./config */ "./node_modules/rxjs/internal/config.js");
var Observable = (function () {
    function Observable(subscribe) {
        this._isScalar = false;
        if (subscribe) {
            this._subscribe = subscribe;
        }
    }
    Observable.prototype.lift = function (operator) {
        var observable = new Observable();
        observable.source = this;
        observable.operator = operator;
        return observable;
    };
    Observable.prototype.subscribe = function (observerOrNext, error, complete) {
        var operator = this.operator;
        var sink = toSubscriber_1.toSubscriber(observerOrNext, error, complete);
        if (operator) {
            sink.add(operator.call(sink, this.source));
        }
        else {
            sink.add(this.source || (config_1.config.useDeprecatedSynchronousErrorHandling && !sink.syncErrorThrowable) ?
                this._subscribe(sink) :
                this._trySubscribe(sink));
        }
        if (config_1.config.useDeprecatedSynchronousErrorHandling) {
            if (sink.syncErrorThrowable) {
                sink.syncErrorThrowable = false;
                if (sink.syncErrorThrown) {
                    throw sink.syncErrorValue;
                }
            }
        }
        return sink;
    };
    Observable.prototype._trySubscribe = function (sink) {
        try {
            return this._subscribe(sink);
        }
        catch (err) {
            if (config_1.config.useDeprecatedSynchronousErrorHandling) {
                sink.syncErrorThrown = true;
                sink.syncErrorValue = err;
            }
            if (canReportError_1.canReportError(sink)) {
                sink.error(err);
            }
            else {
                console.warn(err);
            }
        }
    };
    Observable.prototype.forEach = function (next, promiseCtor) {
        var _this = this;
        promiseCtor = getPromiseCtor(promiseCtor);
        return new promiseCtor(function (resolve, reject) {
            var subscription;
            subscription = _this.subscribe(function (value) {
                try {
                    next(value);
                }
                catch (err) {
                    reject(err);
                    if (subscription) {
                        subscription.unsubscribe();
                    }
                }
            }, reject, resolve);
        });
    };
    Observable.prototype._subscribe = function (subscriber) {
        var source = this.source;
        return source && source.subscribe(subscriber);
    };
    Observable.prototype[observable_1.observable] = function () {
        return this;
    };
    Observable.prototype.pipe = function () {
        var operations = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            operations[_i] = arguments[_i];
        }
        if (operations.length === 0) {
            return this;
        }
        return pipe_1.pipeFromArray(operations)(this);
    };
    Observable.prototype.toPromise = function (promiseCtor) {
        var _this = this;
        promiseCtor = getPromiseCtor(promiseCtor);
        return new promiseCtor(function (resolve, reject) {
            var value;
            _this.subscribe(function (x) { return value = x; }, function (err) { return reject(err); }, function () { return resolve(value); });
        });
    };
    Observable.create = function (subscribe) {
        return new Observable(subscribe);
    };
    return Observable;
}());
exports.Observable = Observable;
function getPromiseCtor(promiseCtor) {
    if (!promiseCtor) {
        promiseCtor = config_1.config.Promise || Promise;
    }
    if (!promiseCtor) {
        throw new Error('no Promise impl found');
    }
    return promiseCtor;
}
//# sourceMappingURL=Observable.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/Observer.js":
/*!************************************************!*\
  !*** ./node_modules/rxjs/internal/Observer.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = __webpack_require__(/*! ./config */ "./node_modules/rxjs/internal/config.js");
var hostReportError_1 = __webpack_require__(/*! ./util/hostReportError */ "./node_modules/rxjs/internal/util/hostReportError.js");
exports.empty = {
    closed: true,
    next: function (value) { },
    error: function (err) {
        if (config_1.config.useDeprecatedSynchronousErrorHandling) {
            throw err;
        }
        else {
            hostReportError_1.hostReportError(err);
        }
    },
    complete: function () { }
};
//# sourceMappingURL=Observer.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/Subscriber.js":
/*!**************************************************!*\
  !*** ./node_modules/rxjs/internal/Subscriber.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var isFunction_1 = __webpack_require__(/*! ./util/isFunction */ "./node_modules/rxjs/internal/util/isFunction.js");
var Observer_1 = __webpack_require__(/*! ./Observer */ "./node_modules/rxjs/internal/Observer.js");
var Subscription_1 = __webpack_require__(/*! ./Subscription */ "./node_modules/rxjs/internal/Subscription.js");
var rxSubscriber_1 = __webpack_require__(/*! ../internal/symbol/rxSubscriber */ "./node_modules/rxjs/internal/symbol/rxSubscriber.js");
var config_1 = __webpack_require__(/*! ./config */ "./node_modules/rxjs/internal/config.js");
var hostReportError_1 = __webpack_require__(/*! ./util/hostReportError */ "./node_modules/rxjs/internal/util/hostReportError.js");
var Subscriber = (function (_super) {
    __extends(Subscriber, _super);
    function Subscriber(destinationOrNext, error, complete) {
        var _this = _super.call(this) || this;
        _this.syncErrorValue = null;
        _this.syncErrorThrown = false;
        _this.syncErrorThrowable = false;
        _this.isStopped = false;
        switch (arguments.length) {
            case 0:
                _this.destination = Observer_1.empty;
                break;
            case 1:
                if (!destinationOrNext) {
                    _this.destination = Observer_1.empty;
                    break;
                }
                if (typeof destinationOrNext === 'object') {
                    if (destinationOrNext instanceof Subscriber) {
                        _this.syncErrorThrowable = destinationOrNext.syncErrorThrowable;
                        _this.destination = destinationOrNext;
                        destinationOrNext.add(_this);
                    }
                    else {
                        _this.syncErrorThrowable = true;
                        _this.destination = new SafeSubscriber(_this, destinationOrNext);
                    }
                    break;
                }
            default:
                _this.syncErrorThrowable = true;
                _this.destination = new SafeSubscriber(_this, destinationOrNext, error, complete);
                break;
        }
        return _this;
    }
    Subscriber.prototype[rxSubscriber_1.rxSubscriber] = function () { return this; };
    Subscriber.create = function (next, error, complete) {
        var subscriber = new Subscriber(next, error, complete);
        subscriber.syncErrorThrowable = false;
        return subscriber;
    };
    Subscriber.prototype.next = function (value) {
        if (!this.isStopped) {
            this._next(value);
        }
    };
    Subscriber.prototype.error = function (err) {
        if (!this.isStopped) {
            this.isStopped = true;
            this._error(err);
        }
    };
    Subscriber.prototype.complete = function () {
        if (!this.isStopped) {
            this.isStopped = true;
            this._complete();
        }
    };
    Subscriber.prototype.unsubscribe = function () {
        if (this.closed) {
            return;
        }
        this.isStopped = true;
        _super.prototype.unsubscribe.call(this);
    };
    Subscriber.prototype._next = function (value) {
        this.destination.next(value);
    };
    Subscriber.prototype._error = function (err) {
        this.destination.error(err);
        this.unsubscribe();
    };
    Subscriber.prototype._complete = function () {
        this.destination.complete();
        this.unsubscribe();
    };
    Subscriber.prototype._unsubscribeAndRecycle = function () {
        var _a = this, _parent = _a._parent, _parents = _a._parents;
        this._parent = null;
        this._parents = null;
        this.unsubscribe();
        this.closed = false;
        this.isStopped = false;
        this._parent = _parent;
        this._parents = _parents;
        return this;
    };
    return Subscriber;
}(Subscription_1.Subscription));
exports.Subscriber = Subscriber;
var SafeSubscriber = (function (_super) {
    __extends(SafeSubscriber, _super);
    function SafeSubscriber(_parentSubscriber, observerOrNext, error, complete) {
        var _this = _super.call(this) || this;
        _this._parentSubscriber = _parentSubscriber;
        var next;
        var context = _this;
        if (isFunction_1.isFunction(observerOrNext)) {
            next = observerOrNext;
        }
        else if (observerOrNext) {
            next = observerOrNext.next;
            error = observerOrNext.error;
            complete = observerOrNext.complete;
            if (observerOrNext !== Observer_1.empty) {
                context = Object.create(observerOrNext);
                if (isFunction_1.isFunction(context.unsubscribe)) {
                    _this.add(context.unsubscribe.bind(context));
                }
                context.unsubscribe = _this.unsubscribe.bind(_this);
            }
        }
        _this._context = context;
        _this._next = next;
        _this._error = error;
        _this._complete = complete;
        return _this;
    }
    SafeSubscriber.prototype.next = function (value) {
        if (!this.isStopped && this._next) {
            var _parentSubscriber = this._parentSubscriber;
            if (!config_1.config.useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
                this.__tryOrUnsub(this._next, value);
            }
            else if (this.__tryOrSetError(_parentSubscriber, this._next, value)) {
                this.unsubscribe();
            }
        }
    };
    SafeSubscriber.prototype.error = function (err) {
        if (!this.isStopped) {
            var _parentSubscriber = this._parentSubscriber;
            var useDeprecatedSynchronousErrorHandling = config_1.config.useDeprecatedSynchronousErrorHandling;
            if (this._error) {
                if (!useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
                    this.__tryOrUnsub(this._error, err);
                    this.unsubscribe();
                }
                else {
                    this.__tryOrSetError(_parentSubscriber, this._error, err);
                    this.unsubscribe();
                }
            }
            else if (!_parentSubscriber.syncErrorThrowable) {
                this.unsubscribe();
                if (useDeprecatedSynchronousErrorHandling) {
                    throw err;
                }
                hostReportError_1.hostReportError(err);
            }
            else {
                if (useDeprecatedSynchronousErrorHandling) {
                    _parentSubscriber.syncErrorValue = err;
                    _parentSubscriber.syncErrorThrown = true;
                }
                else {
                    hostReportError_1.hostReportError(err);
                }
                this.unsubscribe();
            }
        }
    };
    SafeSubscriber.prototype.complete = function () {
        var _this = this;
        if (!this.isStopped) {
            var _parentSubscriber = this._parentSubscriber;
            if (this._complete) {
                var wrappedComplete = function () { return _this._complete.call(_this._context); };
                if (!config_1.config.useDeprecatedSynchronousErrorHandling || !_parentSubscriber.syncErrorThrowable) {
                    this.__tryOrUnsub(wrappedComplete);
                    this.unsubscribe();
                }
                else {
                    this.__tryOrSetError(_parentSubscriber, wrappedComplete);
                    this.unsubscribe();
                }
            }
            else {
                this.unsubscribe();
            }
        }
    };
    SafeSubscriber.prototype.__tryOrUnsub = function (fn, value) {
        try {
            fn.call(this._context, value);
        }
        catch (err) {
            this.unsubscribe();
            if (config_1.config.useDeprecatedSynchronousErrorHandling) {
                throw err;
            }
            else {
                hostReportError_1.hostReportError(err);
            }
        }
    };
    SafeSubscriber.prototype.__tryOrSetError = function (parent, fn, value) {
        if (!config_1.config.useDeprecatedSynchronousErrorHandling) {
            throw new Error('bad call');
        }
        try {
            fn.call(this._context, value);
        }
        catch (err) {
            if (config_1.config.useDeprecatedSynchronousErrorHandling) {
                parent.syncErrorValue = err;
                parent.syncErrorThrown = true;
                return true;
            }
            else {
                hostReportError_1.hostReportError(err);
                return true;
            }
        }
        return false;
    };
    SafeSubscriber.prototype._unsubscribe = function () {
        var _parentSubscriber = this._parentSubscriber;
        this._context = null;
        this._parentSubscriber = null;
        _parentSubscriber.unsubscribe();
    };
    return SafeSubscriber;
}(Subscriber));
exports.SafeSubscriber = SafeSubscriber;
//# sourceMappingURL=Subscriber.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/Subscription.js":
/*!****************************************************!*\
  !*** ./node_modules/rxjs/internal/Subscription.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var isArray_1 = __webpack_require__(/*! ./util/isArray */ "./node_modules/rxjs/internal/util/isArray.js");
var isObject_1 = __webpack_require__(/*! ./util/isObject */ "./node_modules/rxjs/internal/util/isObject.js");
var isFunction_1 = __webpack_require__(/*! ./util/isFunction */ "./node_modules/rxjs/internal/util/isFunction.js");
var UnsubscriptionError_1 = __webpack_require__(/*! ./util/UnsubscriptionError */ "./node_modules/rxjs/internal/util/UnsubscriptionError.js");
var Subscription = (function () {
    function Subscription(unsubscribe) {
        this.closed = false;
        this._parent = null;
        this._parents = null;
        this._subscriptions = null;
        if (unsubscribe) {
            this._unsubscribe = unsubscribe;
        }
    }
    Subscription.prototype.unsubscribe = function () {
        var hasErrors = false;
        var errors;
        if (this.closed) {
            return;
        }
        var _a = this, _parent = _a._parent, _parents = _a._parents, _unsubscribe = _a._unsubscribe, _subscriptions = _a._subscriptions;
        this.closed = true;
        this._parent = null;
        this._parents = null;
        this._subscriptions = null;
        var index = -1;
        var len = _parents ? _parents.length : 0;
        while (_parent) {
            _parent.remove(this);
            _parent = ++index < len && _parents[index] || null;
        }
        if (isFunction_1.isFunction(_unsubscribe)) {
            try {
                _unsubscribe.call(this);
            }
            catch (e) {
                hasErrors = true;
                errors = e instanceof UnsubscriptionError_1.UnsubscriptionError ? flattenUnsubscriptionErrors(e.errors) : [e];
            }
        }
        if (isArray_1.isArray(_subscriptions)) {
            index = -1;
            len = _subscriptions.length;
            while (++index < len) {
                var sub = _subscriptions[index];
                if (isObject_1.isObject(sub)) {
                    try {
                        sub.unsubscribe();
                    }
                    catch (e) {
                        hasErrors = true;
                        errors = errors || [];
                        if (e instanceof UnsubscriptionError_1.UnsubscriptionError) {
                            errors = errors.concat(flattenUnsubscriptionErrors(e.errors));
                        }
                        else {
                            errors.push(e);
                        }
                    }
                }
            }
        }
        if (hasErrors) {
            throw new UnsubscriptionError_1.UnsubscriptionError(errors);
        }
    };
    Subscription.prototype.add = function (teardown) {
        var subscription = teardown;
        switch (typeof teardown) {
            case 'function':
                subscription = new Subscription(teardown);
            case 'object':
                if (subscription === this || subscription.closed || typeof subscription.unsubscribe !== 'function') {
                    return subscription;
                }
                else if (this.closed) {
                    subscription.unsubscribe();
                    return subscription;
                }
                else if (!(subscription instanceof Subscription)) {
                    var tmp = subscription;
                    subscription = new Subscription();
                    subscription._subscriptions = [tmp];
                }
                break;
            default: {
                if (!teardown) {
                    return Subscription.EMPTY;
                }
                throw new Error('unrecognized teardown ' + teardown + ' added to Subscription.');
            }
        }
        if (subscription._addParent(this)) {
            var subscriptions = this._subscriptions;
            if (subscriptions) {
                subscriptions.push(subscription);
            }
            else {
                this._subscriptions = [subscription];
            }
        }
        return subscription;
    };
    Subscription.prototype.remove = function (subscription) {
        var subscriptions = this._subscriptions;
        if (subscriptions) {
            var subscriptionIndex = subscriptions.indexOf(subscription);
            if (subscriptionIndex !== -1) {
                subscriptions.splice(subscriptionIndex, 1);
            }
        }
    };
    Subscription.prototype._addParent = function (parent) {
        var _a = this, _parent = _a._parent, _parents = _a._parents;
        if (_parent === parent) {
            return false;
        }
        else if (!_parent) {
            this._parent = parent;
            return true;
        }
        else if (!_parents) {
            this._parents = [parent];
            return true;
        }
        else if (_parents.indexOf(parent) === -1) {
            _parents.push(parent);
            return true;
        }
        return false;
    };
    Subscription.EMPTY = (function (empty) {
        empty.closed = true;
        return empty;
    }(new Subscription()));
    return Subscription;
}());
exports.Subscription = Subscription;
function flattenUnsubscriptionErrors(errors) {
    return errors.reduce(function (errs, err) { return errs.concat((err instanceof UnsubscriptionError_1.UnsubscriptionError) ? err.errors : err); }, []);
}
//# sourceMappingURL=Subscription.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/config.js":
/*!**********************************************!*\
  !*** ./node_modules/rxjs/internal/config.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var _enable_super_gross_mode_that_will_cause_bad_things = false;
exports.config = {
    Promise: undefined,
    set useDeprecatedSynchronousErrorHandling(value) {
        if (value) {
            var error = new Error();
            console.warn('DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n' + error.stack);
        }
        else if (_enable_super_gross_mode_that_will_cause_bad_things) {
            console.log('RxJS: Back to a better error behavior. Thank you. <3');
        }
        _enable_super_gross_mode_that_will_cause_bad_things = value;
    },
    get useDeprecatedSynchronousErrorHandling() {
        return _enable_super_gross_mode_that_will_cause_bad_things;
    },
};
//# sourceMappingURL=config.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/symbol/observable.js":
/*!*********************************************************!*\
  !*** ./node_modules/rxjs/internal/symbol/observable.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.observable = typeof Symbol === 'function' && Symbol.observable || '@@observable';
//# sourceMappingURL=observable.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/symbol/rxSubscriber.js":
/*!***********************************************************!*\
  !*** ./node_modules/rxjs/internal/symbol/rxSubscriber.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.rxSubscriber = typeof Symbol === 'function'
    ? Symbol('rxSubscriber')
    : '@@rxSubscriber_' + Math.random();
exports.$$rxSubscriber = exports.rxSubscriber;
//# sourceMappingURL=rxSubscriber.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/UnsubscriptionError.js":
/*!****************************************************************!*\
  !*** ./node_modules/rxjs/internal/util/UnsubscriptionError.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function UnsubscriptionErrorImpl(errors) {
    Error.call(this);
    this.message = errors ?
        errors.length + " errors occurred during unsubscription:\n" + errors.map(function (err, i) { return i + 1 + ") " + err.toString(); }).join('\n  ') : '';
    this.name = 'UnsubscriptionError';
    this.errors = errors;
    return this;
}
UnsubscriptionErrorImpl.prototype = Object.create(Error.prototype);
exports.UnsubscriptionError = UnsubscriptionErrorImpl;
//# sourceMappingURL=UnsubscriptionError.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/canReportError.js":
/*!***********************************************************!*\
  !*** ./node_modules/rxjs/internal/util/canReportError.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Subscriber_1 = __webpack_require__(/*! ../Subscriber */ "./node_modules/rxjs/internal/Subscriber.js");
function canReportError(observer) {
    while (observer) {
        var _a = observer, closed_1 = _a.closed, destination = _a.destination, isStopped = _a.isStopped;
        if (closed_1 || isStopped) {
            return false;
        }
        else if (destination && destination instanceof Subscriber_1.Subscriber) {
            observer = destination;
        }
        else {
            observer = null;
        }
    }
    return true;
}
exports.canReportError = canReportError;
//# sourceMappingURL=canReportError.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/hostReportError.js":
/*!************************************************************!*\
  !*** ./node_modules/rxjs/internal/util/hostReportError.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function hostReportError(err) {
    setTimeout(function () { throw err; });
}
exports.hostReportError = hostReportError;
//# sourceMappingURL=hostReportError.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/isArray.js":
/*!****************************************************!*\
  !*** ./node_modules/rxjs/internal/util/isArray.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.isArray = Array.isArray || (function (x) { return x && typeof x.length === 'number'; });
//# sourceMappingURL=isArray.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/isFunction.js":
/*!*******************************************************!*\
  !*** ./node_modules/rxjs/internal/util/isFunction.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function isFunction(x) {
    return typeof x === 'function';
}
exports.isFunction = isFunction;
//# sourceMappingURL=isFunction.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/isObject.js":
/*!*****************************************************!*\
  !*** ./node_modules/rxjs/internal/util/isObject.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function isObject(x) {
    return x !== null && typeof x === 'object';
}
exports.isObject = isObject;
//# sourceMappingURL=isObject.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/noop.js":
/*!*************************************************!*\
  !*** ./node_modules/rxjs/internal/util/noop.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function noop() { }
exports.noop = noop;
//# sourceMappingURL=noop.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/pipe.js":
/*!*************************************************!*\
  !*** ./node_modules/rxjs/internal/util/pipe.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var noop_1 = __webpack_require__(/*! ./noop */ "./node_modules/rxjs/internal/util/noop.js");
function pipe() {
    var fns = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        fns[_i] = arguments[_i];
    }
    return pipeFromArray(fns);
}
exports.pipe = pipe;
function pipeFromArray(fns) {
    if (!fns) {
        return noop_1.noop;
    }
    if (fns.length === 1) {
        return fns[0];
    }
    return function piped(input) {
        return fns.reduce(function (prev, fn) { return fn(prev); }, input);
    };
}
exports.pipeFromArray = pipeFromArray;
//# sourceMappingURL=pipe.js.map

/***/ }),

/***/ "./node_modules/rxjs/internal/util/toSubscriber.js":
/*!*********************************************************!*\
  !*** ./node_modules/rxjs/internal/util/toSubscriber.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Subscriber_1 = __webpack_require__(/*! ../Subscriber */ "./node_modules/rxjs/internal/Subscriber.js");
var rxSubscriber_1 = __webpack_require__(/*! ../symbol/rxSubscriber */ "./node_modules/rxjs/internal/symbol/rxSubscriber.js");
var Observer_1 = __webpack_require__(/*! ../Observer */ "./node_modules/rxjs/internal/Observer.js");
function toSubscriber(nextOrObserver, error, complete) {
    if (nextOrObserver) {
        if (nextOrObserver instanceof Subscriber_1.Subscriber) {
            return nextOrObserver;
        }
        if (nextOrObserver[rxSubscriber_1.rxSubscriber]) {
            return nextOrObserver[rxSubscriber_1.rxSubscriber]();
        }
    }
    if (!nextOrObserver && !error && !complete) {
        return new Subscriber_1.Subscriber(Observer_1.empty);
    }
    return new Subscriber_1.Subscriber(nextOrObserver, error, complete);
}
exports.toSubscriber = toSubscriber;
//# sourceMappingURL=toSubscriber.js.map

/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./src/app/module/product-detail/product-detail-routing.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/module/product-detail/product-detail-routing.module.ts ***!
  \************************************************************************/
/*! exports provided: ProductDetailRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailRoutingModule", function() { return ProductDetailRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product-detail/product-detail.component */ "./src/app/module/product-detail/product-detail/product-detail.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




const routes = [{
        path: '',
        component: _product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_1__["ProductDetailComponent"]
    }];
let ProductDetailRoutingModule = class ProductDetailRoutingModule {
};
ProductDetailRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
    })
], ProductDetailRoutingModule);



/***/ }),

/***/ "./src/app/module/product-detail/product-detail.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/module/product-detail/product-detail.module.ts ***!
  \****************************************************************/
/*! exports provided: ProductDetailModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailModule", function() { return ProductDetailModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _product_detail_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./product-detail-routing.module */ "./src/app/module/product-detail/product-detail-routing.module.ts");
/* harmony import */ var _product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./product-detail/product-detail.component */ "./src/app/module/product-detail/product-detail/product-detail.component.ts");
/* harmony import */ var ng2_carouselamos__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-carouselamos */ "./node_modules/ng2-carouselamos/fesm2015/ng2-carouselamos.js");






let ProductDetailModule = class ProductDetailModule {
};
ProductDetailModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_4__["ProductDetailComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _product_detail_routing_module__WEBPACK_IMPORTED_MODULE_3__["ProductDetailRoutingModule"],
            ng2_carouselamos__WEBPACK_IMPORTED_MODULE_5__["Ng2CarouselamosModule"]
        ]
    })
], ProductDetailModule);



/***/ }),

/***/ "./src/app/module/product-detail/product-detail/product-detail.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/module/product-detail/product-detail/product-detail.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".product-wrapper-container {\n  margin-top: 25px;\n}\n.product-wrapper-container .product-main-image {\n  height: 535px;\n  width: 100%;\n}\n.product-wrapper-container .product-main-image img {\n  height: 100%;\n  max-width: 100%;\n}\n.product-wrapper-container .carousel-container {\n  position: relative;\n  margin-top: 5px;\n}\n.product-wrapper-container .carousel-container .thumbnail {\n  height: 60px;\n  width: 80px;\n  margin-right: 5px;\n}\n.product-wrapper-container .carousel-container .thumbnail img {\n  height: 100%;\n  max-width: 80px;\n  max-height: 60px;\n}\n.product-wrapper-container .carousel-container .thumbnail.active {\n  border: 4px solid #7DC242;\n}\n.product-wrapper-container .overview {\n  color: #4A4A4A;\n  letter-spacing: 0;\n  text-align: right;\n  font-size: 12px;\n  max-width: 400px;\n  max-height: 44px;\n  margin-bottom: 32px;\n  width: 100%;\n}\n.product-wrapper-container .overview .product-name {\n  font-size: 24px;\n  color: #000000;\n}\n.product-wrapper-container .overview .price {\n  font-size: 16px;\n  letter-spacing: 0;\n}\n.product-wrapper-container .overview .description,\n.product-wrapper-container .overview .rating {\n  text-align: right;\n  font-size: 12px;\n  color: #4A4A4A;\n  letter-spacing: 0;\n  text-overflow: ellipsis;\n}\n.product-wrapper-container .overview .description i,\n.product-wrapper-container .overview .rating i {\n  margin-right: 4px;\n}\n.product-wrapper-container .overview .description i:last-child,\n.product-wrapper-container .overview .rating i:last-child {\n  margin-right: 12px;\n}\n.product-wrapper-container .overview .description {\n  text-align: left;\n}\n.product-wrapper-container .size-chart {\n  color: #4A4A4A;\n  letter-spacing: 0;\n  max-width: 400px;\n  margin-bottom: 20px;\n  width: 100%;\n  border: 1px solid #BBBBBB;\n}\n.product-wrapper-container .size-chart .sep .tab {\n  height: 39px;\n  width: 50%;\n  text-align: center;\n}\n.product-wrapper-container .size-chart .sep .tab span {\n  font-size: 16px;\n  color: #7DC242;\n  letter-spacing: 1.33px;\n  text-align: center;\n}\n.product-wrapper-container .size-chart .sep .tab.in-active {\n  background-color: #F1F1F1;\n  border: 1px solid #BBBBBB;\n  border-top: 0px;\n  border-right: 0px;\n}\n.product-wrapper-container .size-chart .sep .tab.in-active span {\n  font-size: 16px;\n  color: #000000;\n  font-weight: bold;\n}\n.product-wrapper-container .size-chart .sep .tab.in-active-left {\n  background-color: #F1F1F1;\n  border: 1px solid #BBBBBB;\n  border-top: 0px;\n  border-left: 0px;\n}\n.product-wrapper-container .size-chart .sep .tab.in-active-left span {\n  font-size: 16px;\n  color: #000000;\n  font-weight: bold;\n}\n.product-wrapper-container .size-chart .size-color-pallete {\n  margin-top: 30px;\n}\n.product-wrapper-container .size-chart .size-color-pallete span {\n  font-size: 10px;\n  color: #4A4A4A;\n  letter-spacing: 0.5px;\n}\n.product-wrapper-container .size-chart .size-color-pallete .colors {\n  flex-wrap: wrap;\n}\n.product-wrapper-container .size-chart .size-color-pallete .colors div.marker-container {\n  padding: 5px 4px;\n  border-radius: 50%;\n}\n.product-wrapper-container .size-chart .size-color-pallete .colors div.marker-container.active {\n  border: 3px solid #7DC242;\n}\n.product-wrapper-container .size-chart .size-color-pallete .colors div.marker-container div {\n  height: 24px;\n  width: 24px;\n  border-radius: 50%;\n}\n.product-wrapper-container .size-chart .size-color-pallete .colors div.marker-container div.marker {\n  border: 1px solid #C8C8C8;\n}\n.product-wrapper-container .size-chart .size-color-pallete .colors div.marker-container div.marker.marker-multi {\n  background: black;\n  background: -webkit-gradient(linear, left top, right top, from(#fbfbfb), color-stop(49%, #f9f9fb), color-stop(49%, white), color-stop(51%, white), color-stop(51%, black));\n  background: linear-gradient(-270deg, #fbfbfb, #f9f9fb 49%, white 49%, white 51%, black 51%);\n  border-radius: 50%;\n}\n.product-wrapper-container .size-chart .size-index {\n  margin-bottom: 19px;\n  margin-top: 30px;\n}\n.product-wrapper-container .size-chart .size-index span {\n  font-size: 10px;\n  color: #4A4A4A;\n  letter-spacing: 0.5px;\n}\n.product-wrapper-container .size-chart .size-index span.underline {\n  font-size: 12px;\n  color: #000000;\n  letter-spacing: 0;\n  text-decoration: underline;\n}\n.product-wrapper-container .size-chart .size-index .size-panel {\n  flex-wrap: wrap;\n}\n.product-wrapper-container .size-chart .size-index .size-panel .sizer {\n  display: table;\n  margin: 4px;\n  width: 34px;\n  height: 34px;\n  border: 1px solid #B3B3B3;\n}\n.product-wrapper-container .size-chart .size-index .size-panel .sizer span {\n  font-size: 14px;\n  color: #000000;\n  letter-spacing: 0;\n  display: table-cell;\n  vertical-align: middle;\n  text-align: center;\n}\n.product-wrapper-container .size-chart .size-index .size-panel .sizer.disabled {\n  background-color: #e9e9e9;\n}\n.product-wrapper-container .size-chart .add-button {\n  height: 60px;\n  display: table;\n  font-size: 16px;\n  color: #FFFFFF;\n  letter-spacing: 2px;\n  background-color: #7DC242;\n}\n.product-wrapper-container .size-chart .add-button span {\n  text-align: center;\n  display: table-cell;\n  vertical-align: middle;\n}\n.product-wrapper-container .size-chart .pad-12 {\n  padding: 0px 12px;\n}\n.product-wrapper-container .shipping {\n  font-size: 12px;\n  color: #4A4A4A;\n  letter-spacing: 0;\n  text-align: center;\n}\n.product-wrapper-container ::ng-deep .ng2-carouselamos-wrapper {\n  max-width: 1400px !important;\n  width: 100% !important;\n}\n.product-wrapper-container ::ng-deep .arrowL {\n  position: absolute;\n  left: -30px;\n}\n.product-wrapper-container ::ng-deep .arrowR {\n  position: absolute;\n  right: -25px;\n}\n.product-wrapper-container .car-container {\n  width: 100%;\n  max-width: 1400px;\n  margin-bottom: 35px;\n}\n.product-wrapper-container .car-container .product-wrapper {\n  position: relative;\n  margin-right: 6px;\n}\n.product-wrapper-container .car-container .product-wrapper .product-image {\n  max-height: 348px;\n  overflow: hidden;\n}\n.product-wrapper-container .car-container .product-wrapper .product-image .description {\n  position: absolute;\n  background-color: white;\n  padding: 5px 7px;\n  top: 6px;\n  left: 2px;\n  font-size: 10px;\n  color: #4A4A4A;\n  letter-spacing: 0.42px;\n  border-radius: 4px;\n  text-transform: uppercase;\n}\n.product-wrapper-container .car-container .product-wrapper .product-text span {\n  margin-left: 10px;\n}\n.product-wrapper-container .car-container .product-wrapper .product-text span.name {\n  margin-top: 6px;\n  font-size: 16px;\n  color: #000000;\n  letter-spacing: 0;\n}\n.product-wrapper-container .car-container .product-wrapper .product-text span.price {\n  margin-top: 3px;\n  font-size: 14px;\n  color: #4A4A4A;\n  letter-spacing: 0;\n}\n.product-wrapper-container .car-container.thumbnail-container {\n  max-width: 590px;\n}\n.product-wrapper-container .car-container.thumbnail-container ::ng-deep .ng2-carouselamos {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\n.product-wrapper-container .car-container.thumbnail-container ::ng-deep .ng2-carouselamos-wrapper {\n  max-width: 590px !important;\n  width: 100% !important;\n}\n.product-wrapper-container .car-container.thumbnail-container ::ng-deep .arrowL {\n  position: absolute;\n  left: -3%;\n  top: -10px;\n}\n.product-wrapper-container .car-container.thumbnail-container ::ng-deep .arrowR {\n  position: absolute;\n  right: 3%;\n  top: -10px;\n}\n.product-wrapper-container .fav {\n  padding: 0px 50px;\n  background-color: #fafafa;\n}\n.product-wrapper-container .fav .product-list {\n  width: 100%;\n}\n.product-wrapper-container .fav .product-list h3 {\n  font-size: 24px;\n  color: #4A4A4A;\n  letter-spacing: 0;\n  margin: 40px 0px 25px 0px;\n  font-weight: lighter;\n}\n@media only screen and (min-width: 0px) and (max-device-width : 576px) {\n  .product-wrapper-container .product-main-image {\n    max-height: 300px;\n  }\n  .product-wrapper-container .carousel-container .thumbnail {\n    height: 50px;\n    width: 50px;\n    margin-right: 3px;\n  }\n  .product-wrapper-container .overview {\n    padding: 0px 20px;\n    width: 100%;\n    min-width: auto !important;\n    margin-bottom: 20px;\n  }\n  .product-wrapper-container .overview .rating i {\n    margin-right: 3px;\n  }\n  .product-wrapper-container .overview .rating i:last-child {\n    margin-right: 5px;\n  }\n  .product-wrapper-container .size-chart {\n    border-top: 1px solid #BBBBBB;\n    border-bottom: 1px solid #BBBBBB;\n    margin-bottom: 15px;\n  }\n  .product-wrapper-container .fav {\n    padding: 0px 20px;\n  }\n  .product-wrapper-container .fav .product-list {\n    text-align: center;\n  }\n\n  .product-wrapper-container .car-container {\n    position: relative;\n  }\n  .product-wrapper-container .car-container.md-view {\n    display: -webkit-box !important;\n    display: flex !important;\n    flex-wrap: wrap;\n  }\n  .product-wrapper-container .car-container.md-view .product-wrapper {\n    position: relative;\n    margin-right: 6px;\n    max-width: 48%;\n  }\n  .product-wrapper-container .car-container.md-view .product-wrapper .product-image img {\n    max-width: 100%;\n  }\n  .product-wrapper-container .car-container.thumbnail-container {\n    max-width: 590px;\n  }\n  .product-wrapper-container .car-container.thumbnail-container ::ng-deep .controls {\n    position: absolute;\n    top: -150px;\n  }\n  .product-wrapper-container .car-container.thumbnail-container ::ng-deep .arrowL {\n    position: absolute;\n    left: 40px;\n    top: -10px;\n  }\n  .product-wrapper-container .car-container.thumbnail-container ::ng-deep .arrowR {\n    position: absolute;\n    right: 40px;\n    top: -10px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYW50aG9zaGt1bWFyL0RvY3VtZW50cy9Qcm9qZWN0cy9Pd24gUHJvamVjdHMvQW5uYXR0YS9hbm5hdHRhL3NyYy9hcHAvbW9kdWxlL3Byb2R1Y3QtZGV0YWlsL3Byb2R1Y3QtZGV0YWlsL3Byb2R1Y3QtZGV0YWlsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9tb2R1bGUvcHJvZHVjdC1kZXRhaWwvcHJvZHVjdC1kZXRhaWwvcHJvZHVjdC1kZXRhaWwuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvc2FudGhvc2hrdW1hci9Eb2N1bWVudHMvUHJvamVjdHMvT3duIFByb2plY3RzL0FubmF0dGEvYW5uYXR0YS9zcmMvYXNzZXRzL3Njc3MvbWVkaWEtcXVlcnkuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGdCQUFBO0FDQUo7QURDSTtFQUNJLGFBQUE7RUFDQSxXQUFBO0FDQ1I7QURBUTtFQUNJLFlBQUE7RUFDQSxlQUFBO0FDRVo7QURDSTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtBQ0NSO0FEQVE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FDRVo7QUREWTtFQUNJLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNHaEI7QUREWTtFQUNJLHlCQUFBO0FDR2hCO0FEQ0k7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FDQ1I7QURBUTtFQUNJLGVBQUE7RUFDQSxjQUFBO0FDRVo7QURBUTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtBQ0VaO0FEQVE7O0VBRUksaUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7QUNFWjtBRERZOztFQUNJLGlCQUFBO0FDSWhCO0FERlk7O0VBQ0ksa0JBQUE7QUNLaEI7QURGUTtFQUNJLGdCQUFBO0FDSVo7QURESTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7QUNHUjtBRERZO0VBQ0ksWUFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtBQ0doQjtBREZnQjtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBQ0lwQjtBREZnQjtFQUNJLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNJcEI7QURIb0I7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FDS3hCO0FERmdCO0VBQ0kseUJBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0lwQjtBREhvQjtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUNLeEI7QURBUTtFQUNJLGdCQUFBO0FDRVo7QUREWTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7QUNHaEI7QUREWTtFQUNJLGVBQUE7QUNHaEI7QURGZ0I7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0FDSXBCO0FEQW9CO0VBQ0kseUJBQUE7QUNFeEI7QURBb0I7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FDRXhCO0FERHdCO0VBQ0kseUJBQUE7QUNHNUI7QURGNEI7RUFDSSxpQkFBQTtFQUNBLDBLQUFBO0VBQUEsMkZBQUE7RUFDQSxrQkFBQTtBQ0loQztBREdRO0VBQ0ksbUJBQUE7RUFDQSxnQkFBQTtBQ0RaO0FERVk7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0FDQWhCO0FEQ2dCO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLDBCQUFBO0FDQ3BCO0FERVk7RUFDSSxlQUFBO0FDQWhCO0FEQ2dCO0VBQ0ksY0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0FDQ3BCO0FEQW9CO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBQ0V4QjtBREFvQjtFQUNJLHlCQUFBO0FDRXhCO0FER1E7RUFDSSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtBQ0RaO0FERVk7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QUNBaEI7QURHUTtFQUNJLGlCQUFBO0FDRFo7QURJSTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ0ZSO0FES1E7RUFDSSw0QkFBQTtFQUNBLHNCQUFBO0FDSFo7QURLUTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtBQ0haO0FES1E7RUFDSSxrQkFBQTtFQUNBLFlBQUE7QUNIWjtBRE1JO0VBQ0ksV0FBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUNKUjtBREtRO0VBQ0ksa0JBQUE7RUFDQSxpQkFBQTtBQ0haO0FESVk7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0FDRmhCO0FER2dCO0VBQ0ksa0JBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtBQ0RwQjtBREtnQjtFQUNJLGlCQUFBO0FDSHBCO0FESW9CO0VBQ0ksZUFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUNGeEI7QURJb0I7RUFDSSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQ0Z4QjtBRE9RO0VBQ0ksZ0JBQUE7QUNMWjtBRE9nQjtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0FDTHBCO0FET2dCO0VBQ0ksMkJBQUE7RUFDQSxzQkFBQTtBQ0xwQjtBRE9nQjtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUNMcEI7QURPZ0I7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FDTHBCO0FEVUk7RUFDSSxpQkFBQTtFQUNBLHlCQUFBO0FDUlI7QURTUTtFQUNJLFdBQUE7QUNQWjtBRFFZO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0Esb0JBQUE7QUNOaEI7QUN0UVE7RUZvUkE7SUFDSSxpQkFBQTtFQ1ZWO0VEYVU7SUFDSSxZQUFBO0lBQ0EsV0FBQTtJQUNBLGlCQUFBO0VDWGQ7RURjTTtJQUNJLGlCQUFBO0lBQ0EsV0FBQTtJQUNBLDBCQUFBO0lBQ0EsbUJBQUE7RUNaVjtFRGNjO0lBQ0ksaUJBQUE7RUNabEI7RURjYztJQUNJLGlCQUFBO0VDWmxCO0VEZ0JNO0lBRUksNkJBQUE7SUFDQSxnQ0FBQTtJQUNBLG1CQUFBO0VDZlY7RURpQk07SUFDSSxpQkFBQTtFQ2ZWO0VEZ0JVO0lBQ0ksa0JBQUE7RUNkZDs7RURtQk07SUFlSSxrQkFBQTtFQzlCVjtFRGdCVTtJQUNJLCtCQUFBO0lBQUEsd0JBQUE7SUFDQSxlQUFBO0VDZGQ7RURlYztJQUNJLGtCQUFBO0lBQ0EsaUJBQUE7SUFDQSxjQUFBO0VDYmxCO0VEZXNCO0lBQ0ksZUFBQTtFQ2IxQjtFRG1CVTtJQUNJLGdCQUFBO0VDakJkO0VEbUJrQjtJQUNJLGtCQUFBO0lBQ0EsV0FBQTtFQ2pCdEI7RURtQmtCO0lBQ0ksa0JBQUE7SUFDQSxVQUFBO0lBQ0EsVUFBQTtFQ2pCdEI7RURtQmtCO0lBQ0ksa0JBQUE7SUFDQSxXQUFBO0lBQ0EsVUFBQTtFQ2pCdEI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZS9wcm9kdWN0LWRldGFpbC9wcm9kdWN0LWRldGFpbC9wcm9kdWN0LWRldGFpbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJtZWRpYS1xdWVyeVwiO1xuLnByb2R1Y3Qtd3JhcHBlci1jb250YWluZXIge1xuICAgIG1hcmdpbi10b3A6IDI1cHg7XG4gICAgLnByb2R1Y3QtbWFpbi1pbWFnZSB7XG4gICAgICAgIGhlaWdodDogNTM1cHg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBpbWcge1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgfVxuICAgIC5jYXJvdXNlbC1jb250YWluZXIge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICAgICAgLnRodW1ibmFpbCB7XG4gICAgICAgICAgICBoZWlnaHQ6IDYwcHg7XG4gICAgICAgICAgICB3aWR0aDogODBweDtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA4MHB4O1xuICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6IDYwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAmLmFjdGl2ZSB7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiA0cHggc29saWQgIzdEQzI0MjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAub3ZlcnZpZXcge1xuICAgICAgICBjb2xvcjogIzRBNEE0QTtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIG1heC13aWR0aDogNDAwcHg7XG4gICAgICAgIG1heC1oZWlnaHQ6IDQ0cHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDMycHg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAucHJvZHVjdC1uYW1lIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgICAgIGNvbG9yOiAjMDAwMDAwO1xuICAgICAgICB9XG4gICAgICAgIC5wcmljZSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMDtcbiAgICAgICAgfVxuICAgICAgICAuZGVzY3JpcHRpb24sXG4gICAgICAgIC5yYXRpbmcge1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICBjb2xvcjogIzRBNEE0QTtcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwO1xuICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICAgICAgICBpIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDRweFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaTpsYXN0LWNoaWxkIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEycHhcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAuZGVzY3JpcHRpb24ge1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAuc2l6ZS1jaGFydCB7XG4gICAgICAgIGNvbG9yOiAjNEE0QTRBO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMDtcbiAgICAgICAgbWF4LXdpZHRoOiA0MDBweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNCQkJCQkI7XG4gICAgICAgIC5zZXAge1xuICAgICAgICAgICAgLnRhYiB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzOXB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjN0RDMjQyO1xuICAgICAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMS4zM3B4O1xuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICYuaW4tYWN0aXZlIHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0YxRjFGMTtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI0JCQkJCQjtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXRvcDogMHB4O1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmlnaHQ6IDBweDtcbiAgICAgICAgICAgICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzAwMDAwMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgJi5pbi1hY3RpdmUtbGVmdCB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGMUYxRjE7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNCQkJCQkI7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci10b3A6IDBweDtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWxlZnQ6IDBweDtcbiAgICAgICAgICAgICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzAwMDAwMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLnNpemUtY29sb3ItcGFsbGV0ZSB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjNEE0QTRBO1xuICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5jb2xvcnMge1xuICAgICAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgICAgICAgICBkaXYubWFya2VyLWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweCA0cHg7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBib3JkZXI6IDNweCBzb2xpZCAjN0RDMjQyOyAgIFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICYuYWN0aXZlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogM3B4IHNvbGlkICM3REMyNDI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZGl2IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjRweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyNHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgJi5tYXJrZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNDOEM4Qzg7IC8vIG1hcmdpbjogNXB4IDRweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAmLm1hcmtlci1tdWx0aSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGJsYWNrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIC0yNzBkZWcsICNmYmZiZmIsICNmOWY5ZmIgNDklLCB3aGl0ZSA0OSUsIHdoaXRlIDUxJSwgYmxhY2sgNTElKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAuc2l6ZS1pbmRleCB7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxOXB4O1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzRBNEE0QTtcbiAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC41cHg7XG4gICAgICAgICAgICAgICAgJi51bmRlcmxpbmUge1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMDAwMDAwO1xuICAgICAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMDtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuc2l6ZS1wYW5lbCB7XG4gICAgICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICAgICAgICAgIC5zaXplciB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IHRhYmxlO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDRweDtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDM0cHg7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzRweDtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI0IzQjNCMztcbiAgICAgICAgICAgICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzAwMDAwMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgJi5kaXNhYmxlZCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTllOWU5O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5hZGQtYnV0dG9uIHtcbiAgICAgICAgICAgIGhlaWdodDogNjBweDtcbiAgICAgICAgICAgIGRpc3BsYXk6IHRhYmxlO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgY29sb3I6ICNGRkZGRkY7XG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzdEQzI0MjtcbiAgICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLnBhZC0xMiB7XG4gICAgICAgICAgICBwYWRkaW5nOiAwcHggMTJweDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAuc2hpcHBpbmcge1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGNvbG9yOiAjNEE0QTRBO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbiAgICA6Om5nLWRlZXAge1xuICAgICAgICAubmcyLWNhcm91c2VsYW1vcy13cmFwcGVyIHtcbiAgICAgICAgICAgIG1heC13aWR0aDogMTQwMHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50OyAvLyBtYXJnaW4tcmlnaHQ6IDUwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLmFycm93TCB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBsZWZ0OiAtMzBweDtcbiAgICAgICAgfVxuICAgICAgICAuYXJyb3dSIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHJpZ2h0OiAtMjVweDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAuY2FyLWNvbnRhaW5lciB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXgtd2lkdGg6IDE0MDBweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMzVweDtcbiAgICAgICAgLnByb2R1Y3Qtd3JhcHBlciB7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDZweDtcbiAgICAgICAgICAgIC5wcm9kdWN0LWltYWdlIHtcbiAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiAzNDhweDtcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgICAgIC5kZXNjcmlwdGlvbiB7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweCA3cHg7XG4gICAgICAgICAgICAgICAgICAgIHRvcDogNnB4O1xuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAycHg7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM0QTRBNEE7XG4gICAgICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjQycHg7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAucHJvZHVjdC10ZXh0IHtcbiAgICAgICAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgICAgICAgICAgICAgICAgICYubmFtZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA2cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzAwMDAwMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICYucHJpY2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogM3B4O1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICM0QTRBNEE7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAmLnRodW1ibmFpbC1jb250YWluZXIge1xuICAgICAgICAgICAgbWF4LXdpZHRoOiA1OTBweDtcbiAgICAgICAgICAgIDo6bmctZGVlcCB7XG4gICAgICAgICAgICAgICAgLm5nMi1jYXJvdXNlbGFtb3Mge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLm5nMi1jYXJvdXNlbGFtb3Mtd3JhcHBlciB7XG4gICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogNTkwcHggIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDsgLy8gbWFyZ2luLXJpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuYXJyb3dMIHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAtMyU7XG4gICAgICAgICAgICAgICAgICAgIHRvcDogLTEwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5hcnJvd1Ige1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAzJTtcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAtMTBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmZhdiB7XG4gICAgICAgIHBhZGRpbmc6IDBweCA1MHB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xuICAgICAgICAucHJvZHVjdC1saXN0IHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaDMge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzRBNEE0QTtcbiAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMDtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDQwcHggMHB4IDI1cHggMHB4O1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5AaW5jbHVkZSByZXNwb25kLXRvKHhzKSB7XG4gICAgLnByb2R1Y3Qtd3JhcHBlci1jb250YWluZXIge1xuICAgICAgICAucHJvZHVjdC1tYWluLWltYWdlIHtcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6IDMwMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5jYXJvdXNlbC1jb250YWluZXIge1xuICAgICAgICAgICAgLnRodW1ibmFpbCB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogM3B4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5vdmVydmlldyB7XG4gICAgICAgICAgICBwYWRkaW5nOiAwcHggMjBweDtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgbWluLXdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICAgICAgLnJhdGluZyB7XG4gICAgICAgICAgICAgICAgaSB7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogM3B4XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGk6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5zaXplLWNoYXJ0IHtcbiAgICAgICAgICAgIC8vIHBhZGRpbmc6IDBweCAyMHB4O1xuICAgICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNCQkJCQkI7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0JCQkJCQjtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgICAgIH1cbiAgICAgICAgLmZhdiB7XG4gICAgICAgICAgICBwYWRkaW5nOiAwcHggMjBweDtcbiAgICAgICAgICAgIC5wcm9kdWN0LWxpc3Qge1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAucHJvZHVjdC13cmFwcGVyLWNvbnRhaW5lciB7XG4gICAgICAgIC5jYXItY29udGFpbmVyIHtcbiAgICAgICAgICAgICYubWQtdmlldyB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgICAgICAgICAucHJvZHVjdC13cmFwcGVyIHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDZweDtcbiAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiA0OCU7XG4gICAgICAgICAgICAgICAgICAgIC5wcm9kdWN0LWltYWdlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAmLnRodW1ibmFpbC1jb250YWluZXIge1xuICAgICAgICAgICAgICAgIG1heC13aWR0aDogNTkwcHg7XG4gICAgICAgICAgICAgICAgOjpuZy1kZWVwIHtcbiAgICAgICAgICAgICAgICAgICAgLmNvbnRyb2xzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogLTE1MHB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5hcnJvd0wge1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogNDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogLTEwcHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLmFycm93UiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgICAgICByaWdodDogNDBweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogLTEwcHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi8vIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbi8vIHJpZ2h0OiAyMHB4O1xuLy8gdG9wOiAtMTg4cHg7UiIsIi5wcm9kdWN0LXdyYXBwZXItY29udGFpbmVyIHtcbiAgbWFyZ2luLXRvcDogMjVweDtcbn1cbi5wcm9kdWN0LXdyYXBwZXItY29udGFpbmVyIC5wcm9kdWN0LW1haW4taW1hZ2Uge1xuICBoZWlnaHQ6IDUzNXB4O1xuICB3aWR0aDogMTAwJTtcbn1cbi5wcm9kdWN0LXdyYXBwZXItY29udGFpbmVyIC5wcm9kdWN0LW1haW4taW1hZ2UgaW1nIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXgtd2lkdGg6IDEwMCU7XG59XG4ucHJvZHVjdC13cmFwcGVyLWNvbnRhaW5lciAuY2Fyb3VzZWwtY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tdG9wOiA1cHg7XG59XG4ucHJvZHVjdC13cmFwcGVyLWNvbnRhaW5lciAuY2Fyb3VzZWwtY29udGFpbmVyIC50aHVtYm5haWwge1xuICBoZWlnaHQ6IDYwcHg7XG4gIHdpZHRoOiA4MHB4O1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cbi5wcm9kdWN0LXdyYXBwZXItY29udGFpbmVyIC5jYXJvdXNlbC1jb250YWluZXIgLnRodW1ibmFpbCBpbWcge1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1heC13aWR0aDogODBweDtcbiAgbWF4LWhlaWdodDogNjBweDtcbn1cbi5wcm9kdWN0LXdyYXBwZXItY29udGFpbmVyIC5jYXJvdXNlbC1jb250YWluZXIgLnRodW1ibmFpbC5hY3RpdmUge1xuICBib3JkZXI6IDRweCBzb2xpZCAjN0RDMjQyO1xufVxuLnByb2R1Y3Qtd3JhcHBlci1jb250YWluZXIgLm92ZXJ2aWV3IHtcbiAgY29sb3I6ICM0QTRBNEE7XG4gIGxldHRlci1zcGFjaW5nOiAwO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBtYXgtd2lkdGg6IDQwMHB4O1xuICBtYXgtaGVpZ2h0OiA0NHB4O1xuICBtYXJnaW4tYm90dG9tOiAzMnB4O1xuICB3aWR0aDogMTAwJTtcbn1cbi5wcm9kdWN0LXdyYXBwZXItY29udGFpbmVyIC5vdmVydmlldyAucHJvZHVjdC1uYW1lIHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBjb2xvcjogIzAwMDAwMDtcbn1cbi5wcm9kdWN0LXdyYXBwZXItY29udGFpbmVyIC5vdmVydmlldyAucHJpY2Uge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxldHRlci1zcGFjaW5nOiAwO1xufVxuLnByb2R1Y3Qtd3JhcHBlci1jb250YWluZXIgLm92ZXJ2aWV3IC5kZXNjcmlwdGlvbixcbi5wcm9kdWN0LXdyYXBwZXItY29udGFpbmVyIC5vdmVydmlldyAucmF0aW5nIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICM0QTRBNEE7XG4gIGxldHRlci1zcGFjaW5nOiAwO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cbi5wcm9kdWN0LXdyYXBwZXItY29udGFpbmVyIC5vdmVydmlldyAuZGVzY3JpcHRpb24gaSxcbi5wcm9kdWN0LXdyYXBwZXItY29udGFpbmVyIC5vdmVydmlldyAucmF0aW5nIGkge1xuICBtYXJnaW4tcmlnaHQ6IDRweDtcbn1cbi5wcm9kdWN0LXdyYXBwZXItY29udGFpbmVyIC5vdmVydmlldyAuZGVzY3JpcHRpb24gaTpsYXN0LWNoaWxkLFxuLnByb2R1Y3Qtd3JhcHBlci1jb250YWluZXIgLm92ZXJ2aWV3IC5yYXRpbmcgaTpsYXN0LWNoaWxkIHtcbiAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xufVxuLnByb2R1Y3Qtd3JhcHBlci1jb250YWluZXIgLm92ZXJ2aWV3IC5kZXNjcmlwdGlvbiB7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG4ucHJvZHVjdC13cmFwcGVyLWNvbnRhaW5lciAuc2l6ZS1jaGFydCB7XG4gIGNvbG9yOiAjNEE0QTRBO1xuICBsZXR0ZXItc3BhY2luZzogMDtcbiAgbWF4LXdpZHRoOiA0MDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNCQkJCQkI7XG59XG4ucHJvZHVjdC13cmFwcGVyLWNvbnRhaW5lciAuc2l6ZS1jaGFydCAuc2VwIC50YWIge1xuICBoZWlnaHQ6IDM5cHg7XG4gIHdpZHRoOiA1MCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5wcm9kdWN0LXdyYXBwZXItY29udGFpbmVyIC5zaXplLWNoYXJ0IC5zZXAgLnRhYiBzcGFuIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogIzdEQzI0MjtcbiAgbGV0dGVyLXNwYWNpbmc6IDEuMzNweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnByb2R1Y3Qtd3JhcHBlci1jb250YWluZXIgLnNpemUtY2hhcnQgLnNlcCAudGFiLmluLWFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGMUYxRjE7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNCQkJCQkI7XG4gIGJvcmRlci10b3A6IDBweDtcbiAgYm9yZGVyLXJpZ2h0OiAwcHg7XG59XG4ucHJvZHVjdC13cmFwcGVyLWNvbnRhaW5lciAuc2l6ZS1jaGFydCAuc2VwIC50YWIuaW4tYWN0aXZlIHNwYW4ge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGNvbG9yOiAjMDAwMDAwO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5wcm9kdWN0LXdyYXBwZXItY29udGFpbmVyIC5zaXplLWNoYXJ0IC5zZXAgLnRhYi5pbi1hY3RpdmUtbGVmdCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGMUYxRjE7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNCQkJCQkI7XG4gIGJvcmRlci10b3A6IDBweDtcbiAgYm9yZGVyLWxlZnQ6IDBweDtcbn1cbi5wcm9kdWN0LXdyYXBwZXItY29udGFpbmVyIC5zaXplLWNoYXJ0IC5zZXAgLnRhYi5pbi1hY3RpdmUtbGVmdCBzcGFuIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogIzAwMDAwMDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4ucHJvZHVjdC13cmFwcGVyLWNvbnRhaW5lciAuc2l6ZS1jaGFydCAuc2l6ZS1jb2xvci1wYWxsZXRlIHtcbiAgbWFyZ2luLXRvcDogMzBweDtcbn1cbi5wcm9kdWN0LXdyYXBwZXItY29udGFpbmVyIC5zaXplLWNoYXJ0IC5zaXplLWNvbG9yLXBhbGxldGUgc3BhbiB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgY29sb3I6ICM0QTRBNEE7XG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbn1cbi5wcm9kdWN0LXdyYXBwZXItY29udGFpbmVyIC5zaXplLWNoYXJ0IC5zaXplLWNvbG9yLXBhbGxldGUgLmNvbG9ycyB7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cbi5wcm9kdWN0LXdyYXBwZXItY29udGFpbmVyIC5zaXplLWNoYXJ0IC5zaXplLWNvbG9yLXBhbGxldGUgLmNvbG9ycyBkaXYubWFya2VyLWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDVweCA0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbi5wcm9kdWN0LXdyYXBwZXItY29udGFpbmVyIC5zaXplLWNoYXJ0IC5zaXplLWNvbG9yLXBhbGxldGUgLmNvbG9ycyBkaXYubWFya2VyLWNvbnRhaW5lci5hY3RpdmUge1xuICBib3JkZXI6IDNweCBzb2xpZCAjN0RDMjQyO1xufVxuLnByb2R1Y3Qtd3JhcHBlci1jb250YWluZXIgLnNpemUtY2hhcnQgLnNpemUtY29sb3ItcGFsbGV0ZSAuY29sb3JzIGRpdi5tYXJrZXItY29udGFpbmVyIGRpdiB7XG4gIGhlaWdodDogMjRweDtcbiAgd2lkdGg6IDI0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbi5wcm9kdWN0LXdyYXBwZXItY29udGFpbmVyIC5zaXplLWNoYXJ0IC5zaXplLWNvbG9yLXBhbGxldGUgLmNvbG9ycyBkaXYubWFya2VyLWNvbnRhaW5lciBkaXYubWFya2VyIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI0M4QzhDODtcbn1cbi5wcm9kdWN0LXdyYXBwZXItY29udGFpbmVyIC5zaXplLWNoYXJ0IC5zaXplLWNvbG9yLXBhbGxldGUgLmNvbG9ycyBkaXYubWFya2VyLWNvbnRhaW5lciBkaXYubWFya2VyLm1hcmtlci1tdWx0aSB7XG4gIGJhY2tncm91bmQ6IGJsYWNrO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoLTI3MGRlZywgI2ZiZmJmYiwgI2Y5ZjlmYiA0OSUsIHdoaXRlIDQ5JSwgd2hpdGUgNTElLCBibGFjayA1MSUpO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG4ucHJvZHVjdC13cmFwcGVyLWNvbnRhaW5lciAuc2l6ZS1jaGFydCAuc2l6ZS1pbmRleCB7XG4gIG1hcmdpbi1ib3R0b206IDE5cHg7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG59XG4ucHJvZHVjdC13cmFwcGVyLWNvbnRhaW5lciAuc2l6ZS1jaGFydCAuc2l6ZS1pbmRleCBzcGFuIHtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBjb2xvcjogIzRBNEE0QTtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xufVxuLnByb2R1Y3Qtd3JhcHBlci1jb250YWluZXIgLnNpemUtY2hhcnQgLnNpemUtaW5kZXggc3Bhbi51bmRlcmxpbmUge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjMDAwMDAwO1xuICBsZXR0ZXItc3BhY2luZzogMDtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG4ucHJvZHVjdC13cmFwcGVyLWNvbnRhaW5lciAuc2l6ZS1jaGFydCAuc2l6ZS1pbmRleCAuc2l6ZS1wYW5lbCB7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cbi5wcm9kdWN0LXdyYXBwZXItY29udGFpbmVyIC5zaXplLWNoYXJ0IC5zaXplLWluZGV4IC5zaXplLXBhbmVsIC5zaXplciB7XG4gIGRpc3BsYXk6IHRhYmxlO1xuICBtYXJnaW46IDRweDtcbiAgd2lkdGg6IDM0cHg7XG4gIGhlaWdodDogMzRweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI0IzQjNCMztcbn1cbi5wcm9kdWN0LXdyYXBwZXItY29udGFpbmVyIC5zaXplLWNoYXJ0IC5zaXplLWluZGV4IC5zaXplLXBhbmVsIC5zaXplciBzcGFuIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzAwMDAwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gIGRpc3BsYXk6IHRhYmxlLWNlbGw7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5wcm9kdWN0LXdyYXBwZXItY29udGFpbmVyIC5zaXplLWNoYXJ0IC5zaXplLWluZGV4IC5zaXplLXBhbmVsIC5zaXplci5kaXNhYmxlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlOWU5ZTk7XG59XG4ucHJvZHVjdC13cmFwcGVyLWNvbnRhaW5lciAuc2l6ZS1jaGFydCAuYWRkLWJ1dHRvbiB7XG4gIGhlaWdodDogNjBweDtcbiAgZGlzcGxheTogdGFibGU7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6ICNGRkZGRkY7XG4gIGxldHRlci1zcGFjaW5nOiAycHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3REMyNDI7XG59XG4ucHJvZHVjdC13cmFwcGVyLWNvbnRhaW5lciAuc2l6ZS1jaGFydCAuYWRkLWJ1dHRvbiBzcGFuIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuLnByb2R1Y3Qtd3JhcHBlci1jb250YWluZXIgLnNpemUtY2hhcnQgLnBhZC0xMiB7XG4gIHBhZGRpbmc6IDBweCAxMnB4O1xufVxuLnByb2R1Y3Qtd3JhcHBlci1jb250YWluZXIgLnNoaXBwaW5nIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogIzRBNEE0QTtcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5wcm9kdWN0LXdyYXBwZXItY29udGFpbmVyIDo6bmctZGVlcCAubmcyLWNhcm91c2VsYW1vcy13cmFwcGVyIHtcbiAgbWF4LXdpZHRoOiAxNDAwcHggIWltcG9ydGFudDtcbiAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbn1cbi5wcm9kdWN0LXdyYXBwZXItY29udGFpbmVyIDo6bmctZGVlcCAuYXJyb3dMIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAtMzBweDtcbn1cbi5wcm9kdWN0LXdyYXBwZXItY29udGFpbmVyIDo6bmctZGVlcCAuYXJyb3dSIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogLTI1cHg7XG59XG4ucHJvZHVjdC13cmFwcGVyLWNvbnRhaW5lciAuY2FyLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IDE0MDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMzVweDtcbn1cbi5wcm9kdWN0LXdyYXBwZXItY29udGFpbmVyIC5jYXItY29udGFpbmVyIC5wcm9kdWN0LXdyYXBwZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi1yaWdodDogNnB4O1xufVxuLnByb2R1Y3Qtd3JhcHBlci1jb250YWluZXIgLmNhci1jb250YWluZXIgLnByb2R1Y3Qtd3JhcHBlciAucHJvZHVjdC1pbWFnZSB7XG4gIG1heC1oZWlnaHQ6IDM0OHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLnByb2R1Y3Qtd3JhcHBlci1jb250YWluZXIgLmNhci1jb250YWluZXIgLnByb2R1Y3Qtd3JhcHBlciAucHJvZHVjdC1pbWFnZSAuZGVzY3JpcHRpb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiA1cHggN3B4O1xuICB0b3A6IDZweDtcbiAgbGVmdDogMnB4O1xuICBmb250LXNpemU6IDEwcHg7XG4gIGNvbG9yOiAjNEE0QTRBO1xuICBsZXR0ZXItc3BhY2luZzogMC40MnB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG4ucHJvZHVjdC13cmFwcGVyLWNvbnRhaW5lciAuY2FyLWNvbnRhaW5lciAucHJvZHVjdC13cmFwcGVyIC5wcm9kdWN0LXRleHQgc3BhbiB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuLnByb2R1Y3Qtd3JhcHBlci1jb250YWluZXIgLmNhci1jb250YWluZXIgLnByb2R1Y3Qtd3JhcHBlciAucHJvZHVjdC10ZXh0IHNwYW4ubmFtZSB7XG4gIG1hcmdpbi10b3A6IDZweDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogIzAwMDAwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XG59XG4ucHJvZHVjdC13cmFwcGVyLWNvbnRhaW5lciAuY2FyLWNvbnRhaW5lciAucHJvZHVjdC13cmFwcGVyIC5wcm9kdWN0LXRleHQgc3Bhbi5wcmljZSB7XG4gIG1hcmdpbi10b3A6IDNweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzRBNEE0QTtcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XG59XG4ucHJvZHVjdC13cmFwcGVyLWNvbnRhaW5lciAuY2FyLWNvbnRhaW5lci50aHVtYm5haWwtY29udGFpbmVyIHtcbiAgbWF4LXdpZHRoOiA1OTBweDtcbn1cbi5wcm9kdWN0LXdyYXBwZXItY29udGFpbmVyIC5jYXItY29udGFpbmVyLnRodW1ibmFpbC1jb250YWluZXIgOjpuZy1kZWVwIC5uZzItY2Fyb3VzZWxhbW9zIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ucHJvZHVjdC13cmFwcGVyLWNvbnRhaW5lciAuY2FyLWNvbnRhaW5lci50aHVtYm5haWwtY29udGFpbmVyIDo6bmctZGVlcCAubmcyLWNhcm91c2VsYW1vcy13cmFwcGVyIHtcbiAgbWF4LXdpZHRoOiA1OTBweCAhaW1wb3J0YW50O1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xufVxuLnByb2R1Y3Qtd3JhcHBlci1jb250YWluZXIgLmNhci1jb250YWluZXIudGh1bWJuYWlsLWNvbnRhaW5lciA6Om5nLWRlZXAgLmFycm93TCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogLTMlO1xuICB0b3A6IC0xMHB4O1xufVxuLnByb2R1Y3Qtd3JhcHBlci1jb250YWluZXIgLmNhci1jb250YWluZXIudGh1bWJuYWlsLWNvbnRhaW5lciA6Om5nLWRlZXAgLmFycm93UiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDMlO1xuICB0b3A6IC0xMHB4O1xufVxuLnByb2R1Y3Qtd3JhcHBlci1jb250YWluZXIgLmZhdiB7XG4gIHBhZGRpbmc6IDBweCA1MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xufVxuLnByb2R1Y3Qtd3JhcHBlci1jb250YWluZXIgLmZhdiAucHJvZHVjdC1saXN0IHtcbiAgd2lkdGg6IDEwMCU7XG59XG4ucHJvZHVjdC13cmFwcGVyLWNvbnRhaW5lciAuZmF2IC5wcm9kdWN0LWxpc3QgaDMge1xuICBmb250LXNpemU6IDI0cHg7XG4gIGNvbG9yOiAjNEE0QTRBO1xuICBsZXR0ZXItc3BhY2luZzogMDtcbiAgbWFyZ2luOiA0MHB4IDBweCAyNXB4IDBweDtcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMHB4KSBhbmQgKG1heC1kZXZpY2Utd2lkdGggOiA1NzZweCkge1xuICAucHJvZHVjdC13cmFwcGVyLWNvbnRhaW5lciAucHJvZHVjdC1tYWluLWltYWdlIHtcbiAgICBtYXgtaGVpZ2h0OiAzMDBweDtcbiAgfVxuICAucHJvZHVjdC13cmFwcGVyLWNvbnRhaW5lciAuY2Fyb3VzZWwtY29udGFpbmVyIC50aHVtYm5haWwge1xuICAgIGhlaWdodDogNTBweDtcbiAgICB3aWR0aDogNTBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDNweDtcbiAgfVxuICAucHJvZHVjdC13cmFwcGVyLWNvbnRhaW5lciAub3ZlcnZpZXcge1xuICAgIHBhZGRpbmc6IDBweCAyMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1pbi13aWR0aDogYXV0byAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIH1cbiAgLnByb2R1Y3Qtd3JhcHBlci1jb250YWluZXIgLm92ZXJ2aWV3IC5yYXRpbmcgaSB7XG4gICAgbWFyZ2luLXJpZ2h0OiAzcHg7XG4gIH1cbiAgLnByb2R1Y3Qtd3JhcHBlci1jb250YWluZXIgLm92ZXJ2aWV3IC5yYXRpbmcgaTpsYXN0LWNoaWxkIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgfVxuICAucHJvZHVjdC13cmFwcGVyLWNvbnRhaW5lciAuc2l6ZS1jaGFydCB7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNCQkJCQkI7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNCQkJCQkI7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgfVxuICAucHJvZHVjdC13cmFwcGVyLWNvbnRhaW5lciAuZmF2IHtcbiAgICBwYWRkaW5nOiAwcHggMjBweDtcbiAgfVxuICAucHJvZHVjdC13cmFwcGVyLWNvbnRhaW5lciAuZmF2IC5wcm9kdWN0LWxpc3Qge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuXG4gIC5wcm9kdWN0LXdyYXBwZXItY29udGFpbmVyIC5jYXItY29udGFpbmVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIH1cbiAgLnByb2R1Y3Qtd3JhcHBlci1jb250YWluZXIgLmNhci1jb250YWluZXIubWQtdmlldyB7XG4gICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgfVxuICAucHJvZHVjdC13cmFwcGVyLWNvbnRhaW5lciAuY2FyLWNvbnRhaW5lci5tZC12aWV3IC5wcm9kdWN0LXdyYXBwZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW4tcmlnaHQ6IDZweDtcbiAgICBtYXgtd2lkdGg6IDQ4JTtcbiAgfVxuICAucHJvZHVjdC13cmFwcGVyLWNvbnRhaW5lciAuY2FyLWNvbnRhaW5lci5tZC12aWV3IC5wcm9kdWN0LXdyYXBwZXIgLnByb2R1Y3QtaW1hZ2UgaW1nIHtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gIH1cbiAgLnByb2R1Y3Qtd3JhcHBlci1jb250YWluZXIgLmNhci1jb250YWluZXIudGh1bWJuYWlsLWNvbnRhaW5lciB7XG4gICAgbWF4LXdpZHRoOiA1OTBweDtcbiAgfVxuICAucHJvZHVjdC13cmFwcGVyLWNvbnRhaW5lciAuY2FyLWNvbnRhaW5lci50aHVtYm5haWwtY29udGFpbmVyIDo6bmctZGVlcCAuY29udHJvbHMge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IC0xNTBweDtcbiAgfVxuICAucHJvZHVjdC13cmFwcGVyLWNvbnRhaW5lciAuY2FyLWNvbnRhaW5lci50aHVtYm5haWwtY29udGFpbmVyIDo6bmctZGVlcCAuYXJyb3dMIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogNDBweDtcbiAgICB0b3A6IC0xMHB4O1xuICB9XG4gIC5wcm9kdWN0LXdyYXBwZXItY29udGFpbmVyIC5jYXItY29udGFpbmVyLnRodW1ibmFpbC1jb250YWluZXIgOjpuZy1kZWVwIC5hcnJvd1Ige1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogNDBweDtcbiAgICB0b3A6IC0xMHB4O1xuICB9XG59IiwiXG4vLyBFeHRyYSBTbWFsbCBkZXZpY2VzIChsYW5kc2NhcGUgcGhvbmVzLCA1NzZweCBhbmQgbGVzcylcbiR4czogXCJvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMHB4KSBhbmQgKG1heC1kZXZpY2Utd2lkdGggOiA1NzZweClcIjtcblxuLy8gU21hbGwgZGV2aWNlcyAobGFuZHNjYXBlIHBob25lcywgNTc2cHggYW5kIHVwKVxuJHNtOiBcIm9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1NzZweCkgYW5kIChtYXgtZGV2aWNlLXdpZHRoIDogNzY4cHgpXCI7XG5cbi8vIE1lZGl1bSBkZXZpY2VzICh0YWJsZXRzLCA3NjhweCBhbmQgdXApXG4kbWQ6IFwib25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSBhbmQgKG1heC1kZXZpY2Utd2lkdGggOiA5OTJweClcIjtcbi8vIExhcmdlIGRldmljZXMgKGRlc2t0b3BzLCA5OTJweCBhbmQgdXApXG5cbiRsZzogXCJvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpIGFuZCAobWF4LWRldmljZS13aWR0aCA6IDEyMDBweClcIjtcblxuLy8gRXh0cmEgbGFyZ2UgZGV2aWNlcyAobGFyZ2UgZGVza3RvcHMsIDEyMDBweCBhbmQgdXApXG4keGw6IFwib25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDBweClcIjtcblxuXG5cbkBtaXhpbiByZXNwb25kLXRvKCRtZWRpYSkge1xuICAgIEBpZiAkbWVkaWE9PXhzIHtcbiAgICAgICAgQG1lZGlhICN7JHhzfSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBAaWYgJG1lZGlhPT1zbSB7XG4gICAgICAgIEBtZWRpYSAjeyRzbX0ge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgQGlmICRtZWRpYT09bWQge1xuICAgICAgICBAbWVkaWEgI3skbWR9IHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfVxuICAgIEBpZiAkbWVkaWE9PWxnIHtcbiAgICAgICAgQG1lZGlhICN7JGxnfSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBAaWYgJG1lZGlhPT14bCB7XG4gICAgICAgIEBtZWRpYSAjeyR4bH0ge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/module/product-detail/product-detail/product-detail.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/module/product-detail/product-detail/product-detail.component.ts ***!
  \**********************************************************************************/
/*! exports provided: ProductDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailComponent", function() { return ProductDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _products_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../products.service */ "./src/app/module/product-detail/products.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let ProductDetailComponent = class ProductDetailComponent {
    constructor(productService) {
        this.productService = productService;
        this.fullStar = __webpack_require__(/*! ./../../../../assets/images/Star-full.svg */ "./src/assets/images/Star-full.svg");
        this.star = __webpack_require__(/*! ./../../../../assets/images/star.svg */ "./src/assets/images/star.svg");
        this.strip = __webpack_require__(/*! ./../../../../assets/images/features.svg */ "./src/assets/images/features.svg");
        this.stripSmall = __webpack_require__(/*! ./../../../../assets/images/features.svg */ "./src/assets/images/features.svg");
        this.arrowRight = __webpack_require__(/*! ./../../../../assets/images/arrow-right.png */ "./src/assets/images/arrow-right.png");
        this.arrowLeft = __webpack_require__(/*! ./../../../../assets/images/arrow-left.png */ "./src/assets/images/arrow-left.png");
        this.stars = [0, 1, 2, 3, 4];
        this.men = true;
        this.cIndex = 0;
        this.colorPallete = ['#F7F7F7', '#072348', '#BB0D0F', '#FFCF60', '#4E4E4E', '#129F7D', '#C69F97', '#000000', '#215297', '#B3926E'];
        this.listOfItems = [{ name: 'White Canvas', price: '79', desc: 'Los Angeles Favourite', url: __webpack_require__(/*! ./../../../../assets/images/canvas.png */ "./src/assets/images/canvas.png") },
            { name: 'Black Canvas', price: '79', desc: '', url: __webpack_require__(/*! ./../../../../assets/images/canvas1.png */ "./src/assets/images/canvas1.png") },
            { name: 'Grey Suede', price: '98', desc: 'Sold Out', url: __webpack_require__(/*! ./../../../../assets/images/canvas.png */ "./src/assets/images/canvas.png") },
            { name: 'White Canvas', price: '79', desc: '', url: __webpack_require__(/*! ./../../../../assets/images/canvas.png */ "./src/assets/images/canvas.png") },
            { name: 'White Canvas', price: '79', desc: 'Los Angeles Favourite', url: __webpack_require__(/*! ./../../../../assets/images/canvas.png */ "./src/assets/images/canvas.png") },
            { name: 'Black Canvas', price: '79', desc: '', url: __webpack_require__(/*! ./../../../../assets/images/canvas1.png */ "./src/assets/images/canvas1.png") },
            { name: 'Grey Suede', price: '98', desc: 'Sold Out', url: __webpack_require__(/*! ./../../../../assets/images/canvas.png */ "./src/assets/images/canvas.png") },
            { name: 'White Canvas', price: '79', desc: '', url: __webpack_require__(/*! ./../../../../assets/images/canvas.png */ "./src/assets/images/canvas.png") }
        ];
        this.sizeList = [{
                size: 5,
                disabled: true
            },
            {
                size: 5.5,
                disabled: false
            },
            {
                size: 6,
                disabled: true
            },
            {
                size: 6.5,
                disabled: false
            },
            {
                size: 7,
                disabled: true
            },
            {
                size: 7.5,
                disabled: false
            },
            {
                size: 8,
                disabled: true
            },
            {
                size: 8.5,
                disabled: true
            },
            {
                size: 9,
                disabled: true
            },
            {
                size: 9.5,
                disabled: false
            },
            {
                size: 10,
                disabled: true
            },
            {
                size: 10.5,
                disabled: true
            },
            {
                size: 11,
                disabled: true
            },
            {
                size: 11.5,
                disabled: true
            },
            {
                size: 12,
                disabled: true
            },
            {
                size: 12.5,
                disabled: true
            },
            {
                size: 13,
                disabled: true
            }];
    }
    ngOnInit() {
        this.getProducts();
    }
    // Get All Products
    getProducts() {
        this.productService.getProducts().subscribe((products) => {
            this.products = products;
            this.getProduct(this.products[4].id);
        });
    }
    // Get Product
    getProduct(productId) {
        this.productService.getProduct(productId).subscribe((products) => {
            this.product = products;
            this.getImagesByProduct(this.product.id);
        });
    }
    // Get Image
    getImage(imageId) {
        this.productService.getImage(imageId).subscribe((image) => {
            this.image = image;
        });
    }
    //  Get Image by Product Id
    getImagesByProduct(productId) {
        this.productService.getImagesByProduct(productId).subscribe((image) => {
            this.images = image;
            this.cIndex = this.images[0].id;
            this.getImage(this.images[0].id);
        });
    }
    // Get Image By Product and Image Id
    getImagebyProductId(image) {
        this.productService.getImagebyProductIdImageId(image.productId, image.id).subscribe((img) => {
            this.cIndex = img.id;
            this.image = img;
        });
    }
    // Toggle Men Women
    toggleSizeChart() {
        this.men = !this.men;
    }
};
ProductDetailComponent.ctorParameters = () => [
    { type: _products_service__WEBPACK_IMPORTED_MODULE_1__["ProductsService"] }
];
ProductDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-product-detail',
        template: __webpack_require__(/*! raw-loader!./product-detail.component.html */ "./node_modules/raw-loader/index.js!./src/app/module/product-detail/product-detail/product-detail.component.html"),
        styles: [__webpack_require__(/*! ./product-detail.component.scss */ "./src/app/module/product-detail/product-detail/product-detail.component.scss")]
    })
], ProductDetailComponent);



/***/ }),

/***/ "./src/app/module/product-detail/products.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/module/product-detail/products.service.ts ***!
  \***********************************************************/
/*! exports provided: ProductsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsService", function() { return ProductsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/internal/Observable */ "./node_modules/rxjs/internal/Observable.js");
/* harmony import */ var rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");




const apiData = {
    url: 'https://anatta-demo-app.herokuapp.com/api/',
    product: 'products',
    image: 'images'
};
let ProductsService = class ProductsService {
    constructor(http) {
        this.http = http;
    }
    getData(url) {
        let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]();
        headers = headers.append('Accept', 'application/json');
        return this.http.get(url, { headers });
    }
    getProducts() {
        const url = `${apiData.url}${apiData.product}`;
        return new rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"](observer => {
            this.getData(url).subscribe((response) => {
                observer.next(response);
                observer.complete();
            }, error => {
                throw new Error(JSON.stringify(error));
            });
        });
    }
    getProduct(productId) {
        const url = `${apiData.url}${apiData.product}/${productId}`;
        return new rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"](observer => {
            this.getData(url).subscribe((response) => {
                observer.next(response);
                observer.complete();
            }, error => {
                throw new Error(JSON.stringify(error));
            });
        });
    }
    getImagesByProduct(productId) {
        const url = `${apiData.url}${apiData.product}/${productId}/image`;
        return new rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"](observer => {
            this.getData(url).subscribe((response) => {
                observer.next(response);
                observer.complete();
            }, error => {
                throw new Error(JSON.stringify(error));
            });
        });
    }
    getImage(imageId) {
        const url = `${apiData.url}${apiData.image}/${imageId}`;
        return new rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"](observer => {
            this.getData(url).subscribe((response) => {
                observer.next(response);
                observer.complete();
            }, error => {
                throw new Error(JSON.stringify(error));
            });
        });
    }
    getImagebyProductIdImageId(productId, imageId) {
        const url = `${apiData.url}${apiData.product}/${productId}/image/${imageId}`;
        return new rxjs_internal_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"](observer => {
            this.getData(url).subscribe((response) => {
                observer.next(response);
                observer.complete();
            }, error => {
                throw new Error(JSON.stringify(error));
            });
        });
    }
};
ProductsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
];
ProductsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ProductsService);



/***/ }),

/***/ "./src/assets/images/Star-full.svg":
/*!*****************************************!*\
  !*** ./src/assets/images/Star-full.svg ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "Star-full.svg";

/***/ }),

/***/ "./src/assets/images/arrow-left.png":
/*!******************************************!*\
  !*** ./src/assets/images/arrow-left.png ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "arrow-left.png";

/***/ }),

/***/ "./src/assets/images/arrow-right.png":
/*!*******************************************!*\
  !*** ./src/assets/images/arrow-right.png ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "arrow-right.png";

/***/ }),

/***/ "./src/assets/images/canvas.png":
/*!**************************************!*\
  !*** ./src/assets/images/canvas.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "canvas.png";

/***/ }),

/***/ "./src/assets/images/canvas1.png":
/*!***************************************!*\
  !*** ./src/assets/images/canvas1.png ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "canvas1.png";

/***/ }),

/***/ "./src/assets/images/star.svg":
/*!************************************!*\
  !*** ./src/assets/images/star.svg ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "star.svg";

/***/ })

}]);
//# sourceMappingURL=module-product-detail-product-detail-module-es2015.js.map