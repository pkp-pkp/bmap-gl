/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 745:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1601);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".MyGeolocation{position:absolute;z-index:10;inset:10px auto auto 10px;display:flex;align-items:center;justify-content:center;background-color:#fff;width:26px;height:26px;box-shadow:1px 2px 1px rgba(0,0,0,.15);cursor:pointer}.MyGeolocation .icon{position:absolute;width:14px;height:14px;background:url(https://webmap0.bdimg.com/wolfman/static/common/images/ipLocation/ipLocation_72a86af.png) -14px 0/76px auto}.MyGeolocation .icon.loading{width:14px;height:14px;background:url(//webmap0.bdimg.com/wolfman/static/common/images/new/loading_4a096ed.gif) 0 0/14px 14px}", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 2807:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1601);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".hideTips[data-v-27378224] .anchorBL span{display:none!important}", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 6314:
/***/ (function(module) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ 1601:
/***/ (function(module) {

"use strict";


module.exports = function (i) {
  return i[1];
};

/***/ }),

/***/ 5032:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(745);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(9548)/* ["default"] */ .A)
var update = add("fb964cb2", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ 9724:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(2807);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.id, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = (__webpack_require__(9548)/* ["default"] */ .A)
var update = add("52452cad", content, true, {"sourceMap":false,"shadowMode":false});

/***/ }),

/***/ 9548:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: function() { return /* binding */ addStylesClient; }
});

;// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/listToStyles.js
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}

;// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/addStylesClient.js
/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/



var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

function addStylesClient (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),

/***/ 9306:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var isCallable = __webpack_require__(4901);
var tryToString = __webpack_require__(6823);

var $TypeError = TypeError;

// `Assert: IsCallable(argument) is true`
module.exports = function (argument) {
  if (isCallable(argument)) return argument;
  throw new $TypeError(tryToString(argument) + ' is not a function');
};


/***/ }),

/***/ 8551:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var isObject = __webpack_require__(34);

var $String = String;
var $TypeError = TypeError;

// `Assert: Type(argument) is Object`
module.exports = function (argument) {
  if (isObject(argument)) return argument;
  throw new $TypeError($String(argument) + ' is not an object');
};


/***/ }),

/***/ 9617:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var toIndexedObject = __webpack_require__(5397);
var toAbsoluteIndex = __webpack_require__(5610);
var lengthOfArrayLike = __webpack_require__(6198);

// `Array.prototype.{ indexOf, includes }` methods implementation
var createMethod = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIndexedObject($this);
    var length = lengthOfArrayLike(O);
    if (length === 0) return !IS_INCLUDES && -1;
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare -- NaN check
    if (IS_INCLUDES && el !== el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare -- NaN check
      if (value !== value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) {
      if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

module.exports = {
  // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  includes: createMethod(true),
  // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  indexOf: createMethod(false)
};


/***/ }),

/***/ 4527:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__(3724);
var isArray = __webpack_require__(4376);

var $TypeError = TypeError;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Safari < 13 does not throw an error in this case
var SILENT_ON_NON_WRITABLE_LENGTH_SET = DESCRIPTORS && !function () {
  // makes no sense without proper strict mode support
  if (this !== undefined) return true;
  try {
    // eslint-disable-next-line es/no-object-defineproperty -- safe
    Object.defineProperty([], 'length', { writable: false }).length = 1;
  } catch (error) {
    return error instanceof TypeError;
  }
}();

module.exports = SILENT_ON_NON_WRITABLE_LENGTH_SET ? function (O, length) {
  if (isArray(O) && !getOwnPropertyDescriptor(O, 'length').writable) {
    throw new $TypeError('Cannot set read only .length');
  } return O.length = length;
} : function (O, length) {
  return O.length = length;
};


/***/ }),

/***/ 4576:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__(9504);

var toString = uncurryThis({}.toString);
var stringSlice = uncurryThis(''.slice);

module.exports = function (it) {
  return stringSlice(toString(it), 8, -1);
};


/***/ }),

/***/ 7740:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var hasOwn = __webpack_require__(9297);
var ownKeys = __webpack_require__(5031);
var getOwnPropertyDescriptorModule = __webpack_require__(7347);
var definePropertyModule = __webpack_require__(4913);

module.exports = function (target, source, exceptions) {
  var keys = ownKeys(source);
  var defineProperty = definePropertyModule.f;
  var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    if (!hasOwn(target, key) && !(exceptions && hasOwn(exceptions, key))) {
      defineProperty(target, key, getOwnPropertyDescriptor(source, key));
    }
  }
};


/***/ }),

/***/ 6699:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__(3724);
var definePropertyModule = __webpack_require__(4913);
var createPropertyDescriptor = __webpack_require__(6980);

module.exports = DESCRIPTORS ? function (object, key, value) {
  return definePropertyModule.f(object, key, createPropertyDescriptor(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ 6980:
/***/ (function(module) {

"use strict";

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ 6840:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var isCallable = __webpack_require__(4901);
var definePropertyModule = __webpack_require__(4913);
var makeBuiltIn = __webpack_require__(283);
var defineGlobalProperty = __webpack_require__(9433);

module.exports = function (O, key, value, options) {
  if (!options) options = {};
  var simple = options.enumerable;
  var name = options.name !== undefined ? options.name : key;
  if (isCallable(value)) makeBuiltIn(value, name, options);
  if (options.global) {
    if (simple) O[key] = value;
    else defineGlobalProperty(key, value);
  } else {
    try {
      if (!options.unsafe) delete O[key];
      else if (O[key]) simple = true;
    } catch (error) { /* empty */ }
    if (simple) O[key] = value;
    else definePropertyModule.f(O, key, {
      value: value,
      enumerable: false,
      configurable: !options.nonConfigurable,
      writable: !options.nonWritable
    });
  } return O;
};


/***/ }),

/***/ 9433:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(4475);

// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty = Object.defineProperty;

module.exports = function (key, value) {
  try {
    defineProperty(global, key, { value: value, configurable: true, writable: true });
  } catch (error) {
    global[key] = value;
  } return value;
};


/***/ }),

/***/ 3724:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__(9039);

// Detect IE8's incomplete defineProperty implementation
module.exports = !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty({}, 1, { get: function () { return 7; } })[1] !== 7;
});


/***/ }),

/***/ 4055:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(4475);
var isObject = __webpack_require__(34);

var document = global.document;
// typeof document.createElement is 'object' in old IE
var EXISTS = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return EXISTS ? document.createElement(it) : {};
};


/***/ }),

/***/ 6837:
/***/ (function(module) {

"use strict";

var $TypeError = TypeError;
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF; // 2 ** 53 - 1 == 9007199254740991

module.exports = function (it) {
  if (it > MAX_SAFE_INTEGER) throw $TypeError('Maximum allowed index exceeded');
  return it;
};


/***/ }),

/***/ 9392:
/***/ (function(module) {

"use strict";

module.exports = typeof navigator != 'undefined' && String(navigator.userAgent) || '';


/***/ }),

/***/ 7388:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(4475);
var userAgent = __webpack_require__(9392);

var process = global.process;
var Deno = global.Deno;
var versions = process && process.versions || Deno && Deno.version;
var v8 = versions && versions.v8;
var match, version;

if (v8) {
  match = v8.split('.');
  // in old Chrome, versions of V8 isn't V8 = Chrome / 10
  // but their correct versions are not interesting for us
  version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
}

// BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
// so check `userAgent` even if `.v8` exists, but 0
if (!version && userAgent) {
  match = userAgent.match(/Edge\/(\d+)/);
  if (!match || match[1] >= 74) {
    match = userAgent.match(/Chrome\/(\d+)/);
    if (match) version = +match[1];
  }
}

module.exports = version;


/***/ }),

/***/ 8727:
/***/ (function(module) {

"use strict";

// IE8- don't enum bug keys
module.exports = [
  'constructor',
  'hasOwnProperty',
  'isPrototypeOf',
  'propertyIsEnumerable',
  'toLocaleString',
  'toString',
  'valueOf'
];


/***/ }),

/***/ 6518:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(4475);
var getOwnPropertyDescriptor = (__webpack_require__(7347).f);
var createNonEnumerableProperty = __webpack_require__(6699);
var defineBuiltIn = __webpack_require__(6840);
var defineGlobalProperty = __webpack_require__(9433);
var copyConstructorProperties = __webpack_require__(7740);
var isForced = __webpack_require__(2796);

/*
  options.target         - name of the target object
  options.global         - target is the global object
  options.stat           - export as static methods of target
  options.proto          - export as prototype methods of target
  options.real           - real prototype method for the `pure` version
  options.forced         - export even if the native feature is available
  options.bind           - bind methods to the target, required for the `pure` version
  options.wrap           - wrap constructors to preventing global pollution, required for the `pure` version
  options.unsafe         - use the simple assignment of property instead of delete + defineProperty
  options.sham           - add a flag to not completely full polyfills
  options.enumerable     - export as enumerable property
  options.dontCallGetSet - prevent calling a getter on target
  options.name           - the .name of the function if it does not match the key
*/
module.exports = function (options, source) {
  var TARGET = options.target;
  var GLOBAL = options.global;
  var STATIC = options.stat;
  var FORCED, target, key, targetProperty, sourceProperty, descriptor;
  if (GLOBAL) {
    target = global;
  } else if (STATIC) {
    target = global[TARGET] || defineGlobalProperty(TARGET, {});
  } else {
    target = global[TARGET] && global[TARGET].prototype;
  }
  if (target) for (key in source) {
    sourceProperty = source[key];
    if (options.dontCallGetSet) {
      descriptor = getOwnPropertyDescriptor(target, key);
      targetProperty = descriptor && descriptor.value;
    } else targetProperty = target[key];
    FORCED = isForced(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
    // contained in target
    if (!FORCED && targetProperty !== undefined) {
      if (typeof sourceProperty == typeof targetProperty) continue;
      copyConstructorProperties(sourceProperty, targetProperty);
    }
    // add a flag to not completely full polyfills
    if (options.sham || (targetProperty && targetProperty.sham)) {
      createNonEnumerableProperty(sourceProperty, 'sham', true);
    }
    defineBuiltIn(target, key, sourceProperty, options);
  }
};


/***/ }),

/***/ 9039:
/***/ (function(module) {

"use strict";

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (error) {
    return true;
  }
};


/***/ }),

/***/ 616:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__(9039);

module.exports = !fails(function () {
  // eslint-disable-next-line es/no-function-prototype-bind -- safe
  var test = (function () { /* empty */ }).bind();
  // eslint-disable-next-line no-prototype-builtins -- safe
  return typeof test != 'function' || test.hasOwnProperty('prototype');
});


/***/ }),

/***/ 9565:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var NATIVE_BIND = __webpack_require__(616);

var call = Function.prototype.call;

module.exports = NATIVE_BIND ? call.bind(call) : function () {
  return call.apply(call, arguments);
};


/***/ }),

/***/ 350:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__(3724);
var hasOwn = __webpack_require__(9297);

var FunctionPrototype = Function.prototype;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getDescriptor = DESCRIPTORS && Object.getOwnPropertyDescriptor;

var EXISTS = hasOwn(FunctionPrototype, 'name');
// additional protection from minified / mangled / dropped function names
var PROPER = EXISTS && (function something() { /* empty */ }).name === 'something';
var CONFIGURABLE = EXISTS && (!DESCRIPTORS || (DESCRIPTORS && getDescriptor(FunctionPrototype, 'name').configurable));

module.exports = {
  EXISTS: EXISTS,
  PROPER: PROPER,
  CONFIGURABLE: CONFIGURABLE
};


/***/ }),

/***/ 9504:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var NATIVE_BIND = __webpack_require__(616);

var FunctionPrototype = Function.prototype;
var call = FunctionPrototype.call;
var uncurryThisWithBind = NATIVE_BIND && FunctionPrototype.bind.bind(call, call);

module.exports = NATIVE_BIND ? uncurryThisWithBind : function (fn) {
  return function () {
    return call.apply(fn, arguments);
  };
};


/***/ }),

/***/ 7751:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(4475);
var isCallable = __webpack_require__(4901);

var aFunction = function (argument) {
  return isCallable(argument) ? argument : undefined;
};

module.exports = function (namespace, method) {
  return arguments.length < 2 ? aFunction(global[namespace]) : global[namespace] && global[namespace][method];
};


/***/ }),

/***/ 5966:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var aCallable = __webpack_require__(9306);
var isNullOrUndefined = __webpack_require__(4117);

// `GetMethod` abstract operation
// https://tc39.es/ecma262/#sec-getmethod
module.exports = function (V, P) {
  var func = V[P];
  return isNullOrUndefined(func) ? undefined : aCallable(func);
};


/***/ }),

/***/ 4475:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var check = function (it) {
  return it && it.Math === Math && it;
};

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
module.exports =
  // eslint-disable-next-line es/no-global-this -- safe
  check(typeof globalThis == 'object' && globalThis) ||
  check(typeof window == 'object' && window) ||
  // eslint-disable-next-line no-restricted-globals -- safe
  check(typeof self == 'object' && self) ||
  check(typeof __webpack_require__.g == 'object' && __webpack_require__.g) ||
  check(typeof this == 'object' && this) ||
  // eslint-disable-next-line no-new-func -- fallback
  (function () { return this; })() || Function('return this')();


/***/ }),

/***/ 9297:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__(9504);
var toObject = __webpack_require__(8981);

var hasOwnProperty = uncurryThis({}.hasOwnProperty);

// `HasOwnProperty` abstract operation
// https://tc39.es/ecma262/#sec-hasownproperty
// eslint-disable-next-line es/no-object-hasown -- safe
module.exports = Object.hasOwn || function hasOwn(it, key) {
  return hasOwnProperty(toObject(it), key);
};


/***/ }),

/***/ 421:
/***/ (function(module) {

"use strict";

module.exports = {};


/***/ }),

/***/ 5917:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__(3724);
var fails = __webpack_require__(9039);
var createElement = __webpack_require__(4055);

// Thanks to IE8 for its funny defineProperty
module.exports = !DESCRIPTORS && !fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(createElement('div'), 'a', {
    get: function () { return 7; }
  }).a !== 7;
});


/***/ }),

/***/ 7055:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__(9504);
var fails = __webpack_require__(9039);
var classof = __webpack_require__(4576);

var $Object = Object;
var split = uncurryThis(''.split);

// fallback for non-array-like ES3 and non-enumerable old V8 strings
module.exports = fails(function () {
  // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
  // eslint-disable-next-line no-prototype-builtins -- safe
  return !$Object('z').propertyIsEnumerable(0);
}) ? function (it) {
  return classof(it) === 'String' ? split(it, '') : $Object(it);
} : $Object;


/***/ }),

/***/ 3706:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__(9504);
var isCallable = __webpack_require__(4901);
var store = __webpack_require__(7629);

var functionToString = uncurryThis(Function.toString);

// this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
if (!isCallable(store.inspectSource)) {
  store.inspectSource = function (it) {
    return functionToString(it);
  };
}

module.exports = store.inspectSource;


/***/ }),

/***/ 1181:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var NATIVE_WEAK_MAP = __webpack_require__(8622);
var global = __webpack_require__(4475);
var isObject = __webpack_require__(34);
var createNonEnumerableProperty = __webpack_require__(6699);
var hasOwn = __webpack_require__(9297);
var shared = __webpack_require__(7629);
var sharedKey = __webpack_require__(6119);
var hiddenKeys = __webpack_require__(421);

var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
var TypeError = global.TypeError;
var WeakMap = global.WeakMap;
var set, get, has;

var enforce = function (it) {
  return has(it) ? get(it) : set(it, {});
};

var getterFor = function (TYPE) {
  return function (it) {
    var state;
    if (!isObject(it) || (state = get(it)).type !== TYPE) {
      throw new TypeError('Incompatible receiver, ' + TYPE + ' required');
    } return state;
  };
};

if (NATIVE_WEAK_MAP || shared.state) {
  var store = shared.state || (shared.state = new WeakMap());
  /* eslint-disable no-self-assign -- prototype methods protection */
  store.get = store.get;
  store.has = store.has;
  store.set = store.set;
  /* eslint-enable no-self-assign -- prototype methods protection */
  set = function (it, metadata) {
    if (store.has(it)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    store.set(it, metadata);
    return metadata;
  };
  get = function (it) {
    return store.get(it) || {};
  };
  has = function (it) {
    return store.has(it);
  };
} else {
  var STATE = sharedKey('state');
  hiddenKeys[STATE] = true;
  set = function (it, metadata) {
    if (hasOwn(it, STATE)) throw new TypeError(OBJECT_ALREADY_INITIALIZED);
    metadata.facade = it;
    createNonEnumerableProperty(it, STATE, metadata);
    return metadata;
  };
  get = function (it) {
    return hasOwn(it, STATE) ? it[STATE] : {};
  };
  has = function (it) {
    return hasOwn(it, STATE);
  };
}

module.exports = {
  set: set,
  get: get,
  has: has,
  enforce: enforce,
  getterFor: getterFor
};


/***/ }),

/***/ 4376:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var classof = __webpack_require__(4576);

// `IsArray` abstract operation
// https://tc39.es/ecma262/#sec-isarray
// eslint-disable-next-line es/no-array-isarray -- safe
module.exports = Array.isArray || function isArray(argument) {
  return classof(argument) === 'Array';
};


/***/ }),

/***/ 4901:
/***/ (function(module) {

"use strict";

// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot
var documentAll = typeof document == 'object' && document.all;

// `IsCallable` abstract operation
// https://tc39.es/ecma262/#sec-iscallable
// eslint-disable-next-line unicorn/no-typeof-undefined -- required for testing
module.exports = typeof documentAll == 'undefined' && documentAll !== undefined ? function (argument) {
  return typeof argument == 'function' || argument === documentAll;
} : function (argument) {
  return typeof argument == 'function';
};


/***/ }),

/***/ 2796:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__(9039);
var isCallable = __webpack_require__(4901);

var replacement = /#|\.prototype\./;

var isForced = function (feature, detection) {
  var value = data[normalize(feature)];
  return value === POLYFILL ? true
    : value === NATIVE ? false
    : isCallable(detection) ? fails(detection)
    : !!detection;
};

var normalize = isForced.normalize = function (string) {
  return String(string).replace(replacement, '.').toLowerCase();
};

var data = isForced.data = {};
var NATIVE = isForced.NATIVE = 'N';
var POLYFILL = isForced.POLYFILL = 'P';

module.exports = isForced;


/***/ }),

/***/ 4117:
/***/ (function(module) {

"use strict";

// we can't use just `it == null` since of `document.all` special case
// https://tc39.es/ecma262/#sec-IsHTMLDDA-internal-slot-aec
module.exports = function (it) {
  return it === null || it === undefined;
};


/***/ }),

/***/ 34:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var isCallable = __webpack_require__(4901);

module.exports = function (it) {
  return typeof it == 'object' ? it !== null : isCallable(it);
};


/***/ }),

/***/ 6395:
/***/ (function(module) {

"use strict";

module.exports = false;


/***/ }),

/***/ 757:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var getBuiltIn = __webpack_require__(7751);
var isCallable = __webpack_require__(4901);
var isPrototypeOf = __webpack_require__(1625);
var USE_SYMBOL_AS_UID = __webpack_require__(7040);

var $Object = Object;

module.exports = USE_SYMBOL_AS_UID ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  var $Symbol = getBuiltIn('Symbol');
  return isCallable($Symbol) && isPrototypeOf($Symbol.prototype, $Object(it));
};


/***/ }),

/***/ 6198:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var toLength = __webpack_require__(8014);

// `LengthOfArrayLike` abstract operation
// https://tc39.es/ecma262/#sec-lengthofarraylike
module.exports = function (obj) {
  return toLength(obj.length);
};


/***/ }),

/***/ 283:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__(9504);
var fails = __webpack_require__(9039);
var isCallable = __webpack_require__(4901);
var hasOwn = __webpack_require__(9297);
var DESCRIPTORS = __webpack_require__(3724);
var CONFIGURABLE_FUNCTION_NAME = (__webpack_require__(350).CONFIGURABLE);
var inspectSource = __webpack_require__(3706);
var InternalStateModule = __webpack_require__(1181);

var enforceInternalState = InternalStateModule.enforce;
var getInternalState = InternalStateModule.get;
var $String = String;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var defineProperty = Object.defineProperty;
var stringSlice = uncurryThis(''.slice);
var replace = uncurryThis(''.replace);
var join = uncurryThis([].join);

var CONFIGURABLE_LENGTH = DESCRIPTORS && !fails(function () {
  return defineProperty(function () { /* empty */ }, 'length', { value: 8 }).length !== 8;
});

var TEMPLATE = String(String).split('String');

var makeBuiltIn = module.exports = function (value, name, options) {
  if (stringSlice($String(name), 0, 7) === 'Symbol(') {
    name = '[' + replace($String(name), /^Symbol\(([^)]*)\).*$/, '$1') + ']';
  }
  if (options && options.getter) name = 'get ' + name;
  if (options && options.setter) name = 'set ' + name;
  if (!hasOwn(value, 'name') || (CONFIGURABLE_FUNCTION_NAME && value.name !== name)) {
    if (DESCRIPTORS) defineProperty(value, 'name', { value: name, configurable: true });
    else value.name = name;
  }
  if (CONFIGURABLE_LENGTH && options && hasOwn(options, 'arity') && value.length !== options.arity) {
    defineProperty(value, 'length', { value: options.arity });
  }
  try {
    if (options && hasOwn(options, 'constructor') && options.constructor) {
      if (DESCRIPTORS) defineProperty(value, 'prototype', { writable: false });
    // in V8 ~ Chrome 53, prototypes of some methods, like `Array.prototype.values`, are non-writable
    } else if (value.prototype) value.prototype = undefined;
  } catch (error) { /* empty */ }
  var state = enforceInternalState(value);
  if (!hasOwn(state, 'source')) {
    state.source = join(TEMPLATE, typeof name == 'string' ? name : '');
  } return value;
};

// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
// eslint-disable-next-line no-extend-native -- required
Function.prototype.toString = makeBuiltIn(function toString() {
  return isCallable(this) && getInternalState(this).source || inspectSource(this);
}, 'toString');


/***/ }),

/***/ 741:
/***/ (function(module) {

"use strict";

var ceil = Math.ceil;
var floor = Math.floor;

// `Math.trunc` method
// https://tc39.es/ecma262/#sec-math.trunc
// eslint-disable-next-line es/no-math-trunc -- safe
module.exports = Math.trunc || function trunc(x) {
  var n = +x;
  return (n > 0 ? floor : ceil)(n);
};


/***/ }),

/***/ 4913:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__(3724);
var IE8_DOM_DEFINE = __webpack_require__(5917);
var V8_PROTOTYPE_DEFINE_BUG = __webpack_require__(8686);
var anObject = __webpack_require__(8551);
var toPropertyKey = __webpack_require__(6969);

var $TypeError = TypeError;
// eslint-disable-next-line es/no-object-defineproperty -- safe
var $defineProperty = Object.defineProperty;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
var ENUMERABLE = 'enumerable';
var CONFIGURABLE = 'configurable';
var WRITABLE = 'writable';

// `Object.defineProperty` method
// https://tc39.es/ecma262/#sec-object.defineproperty
exports.f = DESCRIPTORS ? V8_PROTOTYPE_DEFINE_BUG ? function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPropertyKey(P);
  anObject(Attributes);
  if (typeof O === 'function' && P === 'prototype' && 'value' in Attributes && WRITABLE in Attributes && !Attributes[WRITABLE]) {
    var current = $getOwnPropertyDescriptor(O, P);
    if (current && current[WRITABLE]) {
      O[P] = Attributes.value;
      Attributes = {
        configurable: CONFIGURABLE in Attributes ? Attributes[CONFIGURABLE] : current[CONFIGURABLE],
        enumerable: ENUMERABLE in Attributes ? Attributes[ENUMERABLE] : current[ENUMERABLE],
        writable: false
      };
    }
  } return $defineProperty(O, P, Attributes);
} : $defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPropertyKey(P);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return $defineProperty(O, P, Attributes);
  } catch (error) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw new $TypeError('Accessors not supported');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ 7347:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__(3724);
var call = __webpack_require__(9565);
var propertyIsEnumerableModule = __webpack_require__(8773);
var createPropertyDescriptor = __webpack_require__(6980);
var toIndexedObject = __webpack_require__(5397);
var toPropertyKey = __webpack_require__(6969);
var hasOwn = __webpack_require__(9297);
var IE8_DOM_DEFINE = __webpack_require__(5917);

// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var $getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
exports.f = DESCRIPTORS ? $getOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
  O = toIndexedObject(O);
  P = toPropertyKey(P);
  if (IE8_DOM_DEFINE) try {
    return $getOwnPropertyDescriptor(O, P);
  } catch (error) { /* empty */ }
  if (hasOwn(O, P)) return createPropertyDescriptor(!call(propertyIsEnumerableModule.f, O, P), O[P]);
};


/***/ }),

/***/ 8480:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var internalObjectKeys = __webpack_require__(1828);
var enumBugKeys = __webpack_require__(8727);

var hiddenKeys = enumBugKeys.concat('length', 'prototype');

// `Object.getOwnPropertyNames` method
// https://tc39.es/ecma262/#sec-object.getownpropertynames
// eslint-disable-next-line es/no-object-getownpropertynames -- safe
exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return internalObjectKeys(O, hiddenKeys);
};


/***/ }),

/***/ 3717:
/***/ (function(__unused_webpack_module, exports) {

"use strict";

// eslint-disable-next-line es/no-object-getownpropertysymbols -- safe
exports.f = Object.getOwnPropertySymbols;


/***/ }),

/***/ 1625:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__(9504);

module.exports = uncurryThis({}.isPrototypeOf);


/***/ }),

/***/ 1828:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__(9504);
var hasOwn = __webpack_require__(9297);
var toIndexedObject = __webpack_require__(5397);
var indexOf = (__webpack_require__(9617).indexOf);
var hiddenKeys = __webpack_require__(421);

var push = uncurryThis([].push);

module.exports = function (object, names) {
  var O = toIndexedObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) !hasOwn(hiddenKeys, key) && hasOwn(O, key) && push(result, key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (hasOwn(O, key = names[i++])) {
    ~indexOf(result, key) || push(result, key);
  }
  return result;
};


/***/ }),

/***/ 8773:
/***/ (function(__unused_webpack_module, exports) {

"use strict";

var $propertyIsEnumerable = {}.propertyIsEnumerable;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Nashorn ~ JDK8 bug
var NASHORN_BUG = getOwnPropertyDescriptor && !$propertyIsEnumerable.call({ 1: 2 }, 1);

// `Object.prototype.propertyIsEnumerable` method implementation
// https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
exports.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
  var descriptor = getOwnPropertyDescriptor(this, V);
  return !!descriptor && descriptor.enumerable;
} : $propertyIsEnumerable;


/***/ }),

/***/ 4270:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var call = __webpack_require__(9565);
var isCallable = __webpack_require__(4901);
var isObject = __webpack_require__(34);

var $TypeError = TypeError;

// `OrdinaryToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-ordinarytoprimitive
module.exports = function (input, pref) {
  var fn, val;
  if (pref === 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
  if (isCallable(fn = input.valueOf) && !isObject(val = call(fn, input))) return val;
  if (pref !== 'string' && isCallable(fn = input.toString) && !isObject(val = call(fn, input))) return val;
  throw new $TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ 5031:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var getBuiltIn = __webpack_require__(7751);
var uncurryThis = __webpack_require__(9504);
var getOwnPropertyNamesModule = __webpack_require__(8480);
var getOwnPropertySymbolsModule = __webpack_require__(3717);
var anObject = __webpack_require__(8551);

var concat = uncurryThis([].concat);

// all object keys, includes non-enumerable and symbols
module.exports = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
  var keys = getOwnPropertyNamesModule.f(anObject(it));
  var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
  return getOwnPropertySymbols ? concat(keys, getOwnPropertySymbols(it)) : keys;
};


/***/ }),

/***/ 7750:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var isNullOrUndefined = __webpack_require__(4117);

var $TypeError = TypeError;

// `RequireObjectCoercible` abstract operation
// https://tc39.es/ecma262/#sec-requireobjectcoercible
module.exports = function (it) {
  if (isNullOrUndefined(it)) throw new $TypeError("Can't call method on " + it);
  return it;
};


/***/ }),

/***/ 6119:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var shared = __webpack_require__(5745);
var uid = __webpack_require__(3392);

var keys = shared('keys');

module.exports = function (key) {
  return keys[key] || (keys[key] = uid(key));
};


/***/ }),

/***/ 7629:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var IS_PURE = __webpack_require__(6395);
var globalThis = __webpack_require__(4475);
var defineGlobalProperty = __webpack_require__(9433);

var SHARED = '__core-js_shared__';
var store = module.exports = globalThis[SHARED] || defineGlobalProperty(SHARED, {});

(store.versions || (store.versions = [])).push({
  version: '3.36.0',
  mode: IS_PURE ? 'pure' : 'global',
  copyright: '© 2014-2024 Denis Pushkarev (zloirock.ru)',
  license: 'https://github.com/zloirock/core-js/blob/v3.36.0/LICENSE',
  source: 'https://github.com/zloirock/core-js'
});


/***/ }),

/***/ 5745:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var store = __webpack_require__(7629);

module.exports = function (key, value) {
  return store[key] || (store[key] = value || {});
};


/***/ }),

/***/ 4495:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

/* eslint-disable es/no-symbol -- required for testing */
var V8_VERSION = __webpack_require__(7388);
var fails = __webpack_require__(9039);
var global = __webpack_require__(4475);

var $String = global.String;

// eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
module.exports = !!Object.getOwnPropertySymbols && !fails(function () {
  var symbol = Symbol('symbol detection');
  // Chrome 38 Symbol has incorrect toString conversion
  // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
  // nb: Do not call `String` directly to avoid this being optimized out to `symbol+''` which will,
  // of course, fail.
  return !$String(symbol) || !(Object(symbol) instanceof Symbol) ||
    // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && V8_VERSION && V8_VERSION < 41;
});


/***/ }),

/***/ 5610:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var toIntegerOrInfinity = __webpack_require__(1291);

var max = Math.max;
var min = Math.min;

// Helper for a popular repeating case of the spec:
// Let integer be ? ToInteger(index).
// If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
module.exports = function (index, length) {
  var integer = toIntegerOrInfinity(index);
  return integer < 0 ? max(integer + length, 0) : min(integer, length);
};


/***/ }),

/***/ 5397:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

// toObject with fallback for non-array-like ES3 strings
var IndexedObject = __webpack_require__(7055);
var requireObjectCoercible = __webpack_require__(7750);

module.exports = function (it) {
  return IndexedObject(requireObjectCoercible(it));
};


/***/ }),

/***/ 1291:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var trunc = __webpack_require__(741);

// `ToIntegerOrInfinity` abstract operation
// https://tc39.es/ecma262/#sec-tointegerorinfinity
module.exports = function (argument) {
  var number = +argument;
  // eslint-disable-next-line no-self-compare -- NaN check
  return number !== number || number === 0 ? 0 : trunc(number);
};


/***/ }),

/***/ 8014:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var toIntegerOrInfinity = __webpack_require__(1291);

var min = Math.min;

// `ToLength` abstract operation
// https://tc39.es/ecma262/#sec-tolength
module.exports = function (argument) {
  var len = toIntegerOrInfinity(argument);
  return len > 0 ? min(len, 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
};


/***/ }),

/***/ 8981:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var requireObjectCoercible = __webpack_require__(7750);

var $Object = Object;

// `ToObject` abstract operation
// https://tc39.es/ecma262/#sec-toobject
module.exports = function (argument) {
  return $Object(requireObjectCoercible(argument));
};


/***/ }),

/***/ 2777:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var call = __webpack_require__(9565);
var isObject = __webpack_require__(34);
var isSymbol = __webpack_require__(757);
var getMethod = __webpack_require__(5966);
var ordinaryToPrimitive = __webpack_require__(4270);
var wellKnownSymbol = __webpack_require__(8227);

var $TypeError = TypeError;
var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');

// `ToPrimitive` abstract operation
// https://tc39.es/ecma262/#sec-toprimitive
module.exports = function (input, pref) {
  if (!isObject(input) || isSymbol(input)) return input;
  var exoticToPrim = getMethod(input, TO_PRIMITIVE);
  var result;
  if (exoticToPrim) {
    if (pref === undefined) pref = 'default';
    result = call(exoticToPrim, input, pref);
    if (!isObject(result) || isSymbol(result)) return result;
    throw new $TypeError("Can't convert object to primitive value");
  }
  if (pref === undefined) pref = 'number';
  return ordinaryToPrimitive(input, pref);
};


/***/ }),

/***/ 6969:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var toPrimitive = __webpack_require__(2777);
var isSymbol = __webpack_require__(757);

// `ToPropertyKey` abstract operation
// https://tc39.es/ecma262/#sec-topropertykey
module.exports = function (argument) {
  var key = toPrimitive(argument, 'string');
  return isSymbol(key) ? key : key + '';
};


/***/ }),

/***/ 6823:
/***/ (function(module) {

"use strict";

var $String = String;

module.exports = function (argument) {
  try {
    return $String(argument);
  } catch (error) {
    return 'Object';
  }
};


/***/ }),

/***/ 3392:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var uncurryThis = __webpack_require__(9504);

var id = 0;
var postfix = Math.random();
var toString = uncurryThis(1.0.toString);

module.exports = function (key) {
  return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString(++id + postfix, 36);
};


/***/ }),

/***/ 7040:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

/* eslint-disable es/no-symbol -- required for testing */
var NATIVE_SYMBOL = __webpack_require__(4495);

module.exports = NATIVE_SYMBOL
  && !Symbol.sham
  && typeof Symbol.iterator == 'symbol';


/***/ }),

/***/ 8686:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__(3724);
var fails = __webpack_require__(9039);

// V8 ~ Chrome 36-
// https://bugs.chromium.org/p/v8/issues/detail?id=3334
module.exports = DESCRIPTORS && fails(function () {
  // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  return Object.defineProperty(function () { /* empty */ }, 'prototype', {
    value: 42,
    writable: false
  }).prototype !== 42;
});


/***/ }),

/***/ 8622:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(4475);
var isCallable = __webpack_require__(4901);

var WeakMap = global.WeakMap;

module.exports = isCallable(WeakMap) && /native code/.test(String(WeakMap));


/***/ }),

/***/ 8227:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(4475);
var shared = __webpack_require__(5745);
var hasOwn = __webpack_require__(9297);
var uid = __webpack_require__(3392);
var NATIVE_SYMBOL = __webpack_require__(4495);
var USE_SYMBOL_AS_UID = __webpack_require__(7040);

var Symbol = global.Symbol;
var WellKnownSymbolsStore = shared('wks');
var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol['for'] || Symbol : Symbol && Symbol.withoutSetter || uid;

module.exports = function (name) {
  if (!hasOwn(WellKnownSymbolsStore, name)) {
    WellKnownSymbolsStore[name] = NATIVE_SYMBOL && hasOwn(Symbol, name)
      ? Symbol[name]
      : createWellKnownSymbol('Symbol.' + name);
  } return WellKnownSymbolsStore[name];
};


/***/ }),

/***/ 4114:
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(6518);
var toObject = __webpack_require__(8981);
var lengthOfArrayLike = __webpack_require__(6198);
var setArrayLength = __webpack_require__(4527);
var doesNotExceedSafeInteger = __webpack_require__(6837);
var fails = __webpack_require__(9039);

var INCORRECT_TO_LENGTH = fails(function () {
  return [].push.call({ length: 0x100000000 }, 1) !== 4294967297;
});

// V8 <= 121 and Safari <= 15.4; FF < 23 throws InternalError
// https://bugs.chromium.org/p/v8/issues/detail?id=12681
var properErrorOnNonWritableLength = function () {
  try {
    // eslint-disable-next-line es/no-object-defineproperty -- safe
    Object.defineProperty([], 'length', { writable: false }).push();
  } catch (error) {
    return error instanceof TypeError;
  }
};

var FORCED = INCORRECT_TO_LENGTH || !properErrorOnNonWritableLength();

// `Array.prototype.push` method
// https://tc39.es/ecma262/#sec-array.prototype.push
$({ target: 'Array', proto: true, arity: 1, forced: FORCED }, {
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  push: function push(item) {
    var O = toObject(this);
    var len = lengthOfArrayLike(O);
    var argCount = arguments.length;
    doesNotExceedSafeInteger(len + argCount);
    for (var i = 0; i < argCount; i++) {
      O[len] = arguments[i];
      len++;
    }
    setArrayLength(O, len);
    return len;
  }
});


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		__webpack_require__.p = "";
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  BaiduMap: function() { return /* reexport */ Map; },
  "default": function() { return /* binding */ entry_lib; }
});

;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
/* eslint-disable no-var */
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (false) { var getCurrentScript; }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/babel-loader/lib/index.js!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./packages/map/Map.vue?vue&type=template&id=27378224&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    class: [_vm.hideTips ? 'hideTips' : '']
  }, [!_vm.hasBmView ? _c('div', {
    ref: "view",
    staticStyle: {
      "width": "100%",
      "height": "100%"
    }
  }) : _vm._e(), _vm._t("default")], 2);
};
var staticRenderFns = [];

;// CONCATENATED MODULE: ./packages/base/events.js
/* harmony default export */ var events = ({
  'bm-map': ['click', 'dblclick', 'rightclick', 'rightdblclick', 'maptypechange', 'mousemove', 'mouseover', 'mouseout', 'movestart', 'moving', 'moveend', 'zoomstart', 'zoomend', 'addoverlay', 'addcontrol', 'removecontrol', 'removeoverlay', 'clearoverlays', 'dragstart', 'dragging', 'dragend', 'addtilelayer', 'removetilelayer', 'load', 'resize', 'hotspotclick', 'hotspotover', 'hotspotout', 'tilesloaded', 'touchstart', 'touchmove', 'touchend', 'longpress'],
  'bm-geolocation': ['locationSuccess', 'locationError'],
  'bm-overview-map': ['viewchanged', 'viewchanging'],
  'bm-marker': ['click', 'dblclick', 'mousedown', 'mouseup', 'mouseout', 'mouseover', 'remove', 'infowindowclose', 'infowindowopen', 'dragstart', 'dragging', 'dragend', 'rightclick'],
  'bm-polyline': ['click', 'dblclick', 'mousedown', 'mouseup', 'mouseout', 'mouseover', 'remove', 'lineupdate'],
  'bm-polygon': ['click', 'dblclick', 'mousedown', 'mouseup', 'mouseout', 'mouseover', 'remove', 'lineupdate'],
  'bm-circle': ['click', 'dblclick', 'mousedown', 'mouseup', 'mouseout', 'mouseover', 'remove', 'lineupdate'],
  'bm-label': ['click', 'dblclick', 'mousedown', 'mouseup', 'mouseout', 'mouseover', 'remove', 'rightclick'],
  'bm-info-window': ['close', 'open', 'maximize', 'restore', 'clickclose'],
  'bm-ground': ['click', 'dblclick'],
  'bm-autocomplete': ['onconfirm', 'onhighlight'],
  'bm-point-collection': ['click', 'mouseover', 'mouseout']
});
;// CONCATENATED MODULE: ./packages/base/bindEvent.js

/* harmony default export */ function bindEvent(instance, eventList) {
  const ev = eventList || events[this.$options.name];
  ev && ev.forEach(event => {
    const hasOn = event.slice(0, 2) === 'on';
    const eventName = hasOn ? event.slice(2) : event;
    const listener = this.$listeners[eventName];
    listener && instance.addEventListener(event, listener.fns);
  });
}
;// CONCATENATED MODULE: ./packages/base/util.js

const isPoint = obj => obj.lng && obj.lat;
const checkType = val => Object.prototype.toString.call(val).slice(8, -1);
const getPosition = (BMap, point) => isPoint(point) ? createPoint(BMap, point) : point;
const removeEmptyAttribute = obj => {
  for (let i in obj) {
    if (obj[i] === undefined || obj[i] === null) {
      delete obj[i];
    }
  }
  return obj;
};
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/babel-loader/lib/index.js!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./packages/map/Map.vue?vue&type=script&lang=js


/* harmony default export */ var Mapvue_type_script_lang_js = ({
  name: 'bmap-gl',
  props: {
    ak: {
      type: String
    },
    center: {
      type: [Object, String]
    },
    zoom: {
      type: Number
    },
    minZoom: {
      type: Number
    },
    maxZoom: {
      type: Number
    },
    highResolution: {
      type: Boolean,
      default: true
    },
    mapClick: {
      type: Boolean,
      default: true
    },
    mapType: {
      type: String
    },
    dragging: {
      type: Boolean,
      default: true
    },
    scrollWheelZoom: {
      type: Boolean,
      default: false
    },
    doubleClickZoom: {
      type: Boolean,
      default: true
    },
    keyboard: {
      type: Boolean,
      default: true
    },
    inertialDragging: {
      type: Boolean,
      default: true
    },
    continuousZoom: {
      type: Boolean,
      default: true
    },
    pinchToZoom: {
      type: Boolean,
      default: true
    },
    autoResize: {
      type: Boolean,
      default: true
    },
    theme: {
      type: Array
    },
    mapStyle: {
      type: Object
    },
    hideTips: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    center(val, oldVal) {
      const {
        map,
        zoom
      } = this;
      if (checkType(val) === 'String' && val !== oldVal) {
        map.centerAndZoom(val, zoom);
      }
    },
    'center.lng'(val, oldVal) {
      const {
        BMapGL,
        map,
        zoom,
        center
      } = this;
      if (val !== oldVal && val >= -180 && val <= 180) {
        map.centerAndZoom(new BMapGL.Point(val, center.lat), zoom);
      }
    },
    'center.lat'(val, oldVal) {
      const {
        BMapGL,
        map,
        zoom,
        center
      } = this;
      if (val !== oldVal && val >= -74 && val <= 74) {
        map.centerAndZoom(new BMapGL.Point(center.lng, val), zoom);
      }
    },
    zoom(val, oldVal) {
      const {
        map
      } = this;
      if (val !== oldVal && val >= 3 && val <= 19) {
        map.setZoom(val);
      }
    },
    minZoom(val) {
      const {
        map
      } = this;
      map.setMinZoom(val);
    },
    maxZoom(val) {
      const {
        map
      } = this;
      map.setMaxZoom(val);
    },
    highResolution() {
      this.reset();
    },
    mapClick() {
      this.reset();
    },
    mapType(val) {
      const {
        map
      } = this;
      map.setMapType(__webpack_require__.g[val]);
    },
    dragging(val) {
      const {
        map
      } = this;
      val ? map.enableDragging() : map.disableDragging();
    },
    scrollWheelZoom(val) {
      const {
        map
      } = this;
      val ? map.enableScrollWheelZoom() : map.disableScrollWheelZoom();
    },
    doubleClickZoom(val) {
      const {
        map
      } = this;
      val ? map.enableDoubleClickZoom() : map.disableDoubleClickZoom();
    },
    keyboard(val) {
      const {
        map
      } = this;
      val ? map.enableKeyboard() : map.disableKeyboard();
    },
    inertialDragging(val) {
      const {
        map
      } = this;
      val ? map.enableInertialDragging() : map.disableInertialDragging();
    },
    continuousZoom(val) {
      const {
        map
      } = this;
      val ? map.enableContinuousZoom() : map.disableContinuousZoom();
    },
    pinchToZoom(val) {
      const {
        map
      } = this;
      val ? map.enablePinchToZoom() : map.disablePinchToZoom();
    },
    autoResize(val) {
      const {
        map
      } = this;
      val ? map.enableAutoResize() : map.disableAutoResize();
    },
    theme(val) {
      const {
        map
      } = this;
      map.setMapStyle({
        styleJson: val
      });
    },
    'mapStyle.features': {
      handler(val, oldVal) {
        const {
          map,
          mapStyle
        } = this;
        const {
          style,
          styleJson
        } = mapStyle;
        map.setMapStyle({
          styleJson,
          features: val,
          style
        });
      },
      deep: true
    },
    'mapStyle.style'(val, oldVal) {
      const {
        map,
        mapStyle
      } = this;
      const {
        features,
        styleJson
      } = mapStyle;
      map.setMapStyle({
        styleJson,
        features,
        style: val
      });
    },
    'mapStyle.styleJson': {
      handler(val, oldVal) {
        const {
          map,
          mapStyle
        } = this;
        const {
          features,
          style
        } = mapStyle;
        map.setMapStyle({
          styleJson: val,
          features,
          style
        });
      },
      deep: true
    },
    mapStyle(val) {
      const {
        map,
        theme
      } = this;
      !theme && map.setMapStyle(val);
    }
  },
  data() {
    return {
      hasBmView: false,
      control: []
    };
  },
  mounted() {
    this.reset();
  },
  methods: {
    setMapOptions() {
      const {
        map
      } = this;
      // 开启滚动
      map.enableScrollWheelZoom(true);
      let controlArr = [];
      // 3D
      //   controlArr.push(new BMapGL.NavigationControl3D({
      //     anchor: BMAP_ANCHOR_BOTTOM_RIGHT,
      //     offset: new BMapGL.Size(7.5, 150)
      //   }))

      controlArr.map(item => map.addControl(item));
    },
    init(BMapGL) {
      if (this.map) {
        return;
      }
      let $el = this.$refs.view;
      const map = new BMapGL.Map($el, {
        enableHighResolution: this.highResolution,
        enableMapClick: this.mapClick
      });
      this.map = map;
      __webpack_require__.g.map = map;
      const {
        setMapOptions,
        zoom,
        getCenterPoint,
        theme,
        mapStyle
      } = this;
      setMapOptions();
      bindEvent.call(this, map);
      // 此处强行初始化一次地图 回避一个由于错误的 center 字符串导致初始化失败抛出的错误
      // map.reset()
      map.centerAndZoom(getCenterPoint(), zoom);
      this.$emit('ready', {
        BMapGL,
        map
      });
    },
    initMap(BMapGL) {
      this.BMapGL = BMapGL;
      this.init(BMapGL);
    },
    getCenterPoint() {
      const {
        center,
        BMapGL
      } = this;
      switch (checkType(center)) {
        case 'String':
          return center;
        case 'Object':
          return new BMapGL.Point(center.lng, center.lat);
        default:
          return new BMapGL.Point();
      }
    },
    getMapScript() {
      if (!__webpack_require__.g.BMapGL) {
        // ak没改 自己穿，或者有全局的
        const ak = this.ak || this._BMapGL().ak;
        __webpack_require__.g.BMapGL = {};
        __webpack_require__.g.BMapGL._preloader = new Promise((resolve, reject) => {
          __webpack_require__.g._initBaiduMap = function () {
            resolve(__webpack_require__.g.BMapGL);
            __webpack_require__.g.document.body.removeChild($script);
            __webpack_require__.g.BMapGL._preloader = null;
            __webpack_require__.g._initBaiduMap = null;
            console.log('初始化完成', __webpack_require__.g.BMapGL);
          };
          const $script = document.createElement('script');
          __webpack_require__.g.document.body.appendChild($script);
          $script.src = `https://api.map.baidu.com/api?v=3.0&type=webgl&ak=${ak}&callback=_initBaiduMap`;
        });
        return __webpack_require__.g.BMapGL._preloader;
      } else if (!__webpack_require__.g.BMapGL._preloader) {
        return Promise.resolve(__webpack_require__.g.BMapGL);
      } else {
        return __webpack_require__.g.BMapGL._preloader;
      }
    },
    reset() {
      const {
        getMapScript,
        initMap
      } = this;
      getMapScript().then(initMap);
    }
  }
});
;// CONCATENATED MODULE: ./packages/map/Map.vue?vue&type=script&lang=js
 /* harmony default export */ var map_Mapvue_type_script_lang_js = (Mapvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-style-loader/index.js??clonedRuleSet-12.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./packages/map/Map.vue?vue&type=style&index=0&id=27378224&prod&scoped=true&lang=css
var Mapvue_type_style_index_0_id_27378224_prod_scoped_true_lang_css = __webpack_require__(9724);
;// CONCATENATED MODULE: ./packages/map/Map.vue?vue&type=style&index=0&id=27378224&prod&scoped=true&lang=css

;// CONCATENATED MODULE: ./node_modules/@vue/vue-loader-v15/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent(
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */,
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options =
    typeof scriptExports === 'function' ? scriptExports.options : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) {
    // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
          injectStyles.call(
            this,
            (options.functional ? this.parent : this).$root.$options.shadowRoot
          )
        }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

;// CONCATENATED MODULE: ./packages/map/Map.vue



;


/* normalize component */

var component = normalizeComponent(
  map_Mapvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  "27378224",
  null
  
)

/* harmony default export */ var Map = (component.exports);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/babel-loader/lib/index.js!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./packages/overlays/Marker.vue?vue&type=template&id=a83ebb1e
var Markervue_type_template_id_a83ebb1e_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._t("default")], 2);
};
var Markervue_type_template_id_a83ebb1e_staticRenderFns = [];

;// CONCATENATED MODULE: ./packages/base/mixins/common.js
const types = {
  control: {
    unload: 'removeControl'
  },
  layer: {
    unload: 'removeTileLayer'
  },
  overlay: {
    unload: 'removeOverlay'
  },
  contextMenu: {
    unload: 'removeContextMenu'
  }
};
const getParent = $component => $component.abstract || $component.$el === $component.$children[0].$el ? getParent($component.$parent) : $component;
function destroyInstance() {
  const {
    unload,
    renderByParent,
    $parent
  } = this;
  if (renderByParent) {
    $parent.reload();
  }
  unload();
}
class Mixin {
  constructor(prop) {
    this.methods = {
      ready() {
        const $parent = getParent(this.$parent);
        const BMapGL = this.BMapGL = $parent.BMapGL;
        const map = this.map = $parent.map;
        this.load();
        this.$emit('ready', {
          BMapGL,
          map
        });
      },
      transmitEvent(e) {
        this.$emit(e.type.replace(/^on/, ''), e);
      },
      reload() {
        this && this.BMapGL && this.$nextTick(() => {
          this.unload();
          this.$nextTick(this.load);
        });
      },
      unload() {
        const {
          map,
          originInstance
        } = this;
        try {
          switch (prop.type) {
            case 'search':
              return originInstance.clearResults();
            case 'autoComplete':
            case 'lushu':
              return originInstance.dispose();
            case 'markerClusterer':
              return originInstance.clearMarkers();
            default:
              map[types[prop.type].unload](originInstance);
          }
        } catch (e) {}
      }
    };
    this.computed = {
      renderByParent() {
        return this.$parent.preventChildrenRender;
      }
    };
    this.mounted = function () {
      const $parent = getParent(this.$parent);
      const map = $parent.map;
      const {
        ready
      } = this;
      map ? ready() : $parent.$on('ready', ready);
    };
    this.destroyed = destroyInstance;
    this.beforeDestroy = destroyInstance;
  }
}
/* harmony default export */ var common = (type => new Mixin({
  type
}));
;// CONCATENATED MODULE: ./packages/base/factory.js

function factory_createPoint(BMapGL, options = {}) {
  const {
    lng,
    lat
  } = options;
  return new BMapGL.Point(lng, lat);
}
function createPixel(BMapGL, options = {}) {
  const {
    x,
    y
  } = options;
  return new BMapGL.Pixel(x, y);
}
function createBounds(BMapGL, options = {}) {
  const {
    sw,
    ne
  } = options;
  return new BMapGL.Bounds(factory_createPoint(BMapGL, sw), factory_createPoint(BMapGL, ne));
}
function createSize(BMapGL, options = {}) {
  const {
    width,
    height
  } = options;
  return new BMapGL.Size(width, height);
}
function createIcon(BMapGL, options = {}) {
  const {
    url,
    size,
    opts = {}
  } = options;
  let _options = removeEmptyAttribute({
    anchor: opts.anchor && createSize(BMapGL, opts.anchor),
    imageSize: opts.imageSize && createSize(BMapGL, opts.imageSize),
    infoWindowAnchor: opts.infoWindowAnchor && createSize(BMapGL, opts.infoWindowAnchor),
    imageOffset: opts.imageOffset && createSize(BMapGL, opts.imageOffset),
    printImageUrl: opts.printImageUrl
  }); //新版本属性不能传无效值，会报错，此处过滤空值
  return new BMapGL.Icon(url, createSize(BMapGL, size), _options);
}
function createLabel(BMapGL, options = {}) {
  const {
    content,
    opts
  } = options;
  return new BMapGL.Label(content, {
    offset: opts.offset && createSize(BMapGL, opts.offset),
    position: opts.position && factory_createPoint(BMapGL, opts.position),
    enableMassClear: opts.enableMassClear
  });
}
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/babel-loader/lib/index.js!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./packages/overlays/Marker.vue?vue&type=script&lang=js




/* harmony default export */ var Markervue_type_script_lang_js = ({
  name: 'bmap-gl-marker',
  mixins: [common('overlay')],
  props: {
    position: {},
    offset: {},
    icon: {},
    massClear: {
      type: Boolean,
      default: true
    },
    dragging: {
      type: Boolean,
      default: false
    },
    clicking: {
      type: Boolean,
      default: true
    },
    raiseOnDrag: {
      type: Boolean,
      default: false
    },
    draggingCursor: {
      type: String
    },
    rotation: {
      type: Number
    },
    shadow: {
      type: Object
    },
    title: {
      type: String
    },
    label: {
      type: Object
    },
    animation: {
      type: String
    },
    top: {
      type: Boolean,
      default: false
    },
    zIndex: {
      type: Number,
      default: 0
    }
  },
  watch: {
    'position.lng'(val, oldVal) {
      const {
        BMapGL,
        originInstance,
        position,
        renderByParent,
        $parent
      } = this;
      if (val !== oldVal && val >= -180 && val <= 180) {
        originInstance.setPosition(factory_createPoint(BMapGL, {
          lng: val,
          lat: position.lat
        }));
      }
      renderByParent && $parent.reload();
    },
    'position.lat'(val, oldVal) {
      const {
        BMapGL,
        originInstance,
        position,
        renderByParent,
        $parent
      } = this;
      if (val !== oldVal && val >= -74 && val <= 74) {
        originInstance.setPosition(factory_createPoint(BMapGL, {
          lng: position.lng,
          lat: val
        }));
      }
      renderByParent && $parent.reload();
    },
    'offset.width'(val, oldVal) {
      const {
        BMapGL,
        originInstance
      } = this;
      if (val !== oldVal) {
        originInstance.setOffset(new BMapGL.Size(val, this.offset.height));
      }
    },
    'offset.height'(val, oldVal) {
      const {
        BMapGL,
        originInstance
      } = this;
      if (val !== oldVal) {
        originInstance.setOffset(new BMapGL.Size(this.offset.width, val));
      }
    },
    icon: {
      deep: true,
      handler(val) {
        const {
          BMapGL,
          originInstance,
          rotation
        } = this;
        originInstance && originInstance.setIcon(createIcon(BMapGL, val));
        rotation && originInstance && originInstance.setRotation(rotation);
      }
    },
    massClear(val) {
      val ? this.originInstance.enableMassClear() : this.originInstance.disableMassClear();
    },
    dragging(val) {
      val ? this.originInstance.enableDragging() : this.originInstance.disableDragging();
    },
    clicking() {
      this.reload();
    },
    raiseOnDrag() {
      this.reload();
    },
    draggingCursor(val) {
      this.originInstance.setDraggingCursor(val);
    },
    rotation(val) {
      this.originInstance.setRotation(val);
    },
    shadow(val) {
      this.originInstance.setShadow(val);
    },
    title(val) {
      this.originInstance.setTitle(val);
    },
    label(val) {
      this.reload();
    },
    animation(val) {
      this.originInstance.setAnimation(__webpack_require__.g[val]);
    },
    top(val) {
      this.originInstance.setTop(val);
    },
    zIndex(val) {
      this.originInstance.setZIndex(val);
    }
  },
  methods: {
    load() {
      const {
        BMapGL,
        map,
        position,
        offset,
        icon,
        massClear,
        dragging,
        clicking,
        raiseOnDrag,
        draggingCursor,
        rotation,
        shadow,
        title,
        label,
        animation,
        top,
        renderByParent,
        $parent,
        zIndex
      } = this;
      let _options = removeEmptyAttribute({
        offset,
        icon: icon && createIcon(BMapGL, icon),
        enableMassClear: massClear,
        enableDragging: dragging,
        enableClicking: clicking,
        raiseOnDrag,
        draggingCursor,
        rotation,
        shadow,
        title
      });
      const overlay = new BMapGL.Marker(new BMapGL.Point(position.lng, position.lat), _options);
      this.originInstance = overlay;
      label && overlay && overlay.setLabel(createLabel(BMapGL, label));
      overlay.setTop(top);
      overlay.setZIndex(zIndex);
      bindEvent.call(this, overlay);
      if (renderByParent) {
        $parent.reload();
      } else {
        map.addOverlay(overlay);
      }
      overlay.setAnimation(__webpack_require__.g[animation]);
    }
  }
});
;// CONCATENATED MODULE: ./packages/overlays/Marker.vue?vue&type=script&lang=js
 /* harmony default export */ var overlays_Markervue_type_script_lang_js = (Markervue_type_script_lang_js); 
;// CONCATENATED MODULE: ./packages/overlays/Marker.vue





/* normalize component */
;
var Marker_component = normalizeComponent(
  overlays_Markervue_type_script_lang_js,
  Markervue_type_template_id_a83ebb1e_render,
  Markervue_type_template_id_a83ebb1e_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Marker = (Marker_component.exports);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/babel-loader/lib/index.js!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./packages/controls/Geolocation.vue?vue&type=script&lang=js



let MyGeolocation;
/* harmony default export */ var Geolocationvue_type_script_lang_js = ({
  name: 'bmap-gl-geolocation',
  render() {},
  mixins: [common('control')],
  props: {
    anchor: {
      type: String,
      default: 'BMAP_ANCHOR_BOTTOM_RIGHT'
    },
    offset: {
      type: Object,
      default: () => ({
        width: 20,
        height: 50
      })
    },
    showAddressBar: {
      type: Boolean
    },
    autoLocation: {
      type: Boolean
    }
  },
  watch: {
    anchor() {
      this.reload();
    },
    offset() {
      this.reload();
    },
    showAddressBar() {
      this.reload();
    },
    autoLocation() {
      this.reload();
    }
  },
  methods: {
    initMyControl() {
      let {
        BMapGL
      } = this;
      let MyGlocation = function (opts) {
        BMapGL.LocationControl.call(this, opts);
        this.changeStatus = function (status = 'loading') {
          this._locBtn.style.display = 'none';
          this._locLoadingBtn.style.display = 'none';
          this._locFailTip.style.display = 'none';
          if (status === 'loading') {
            this._locLoadingBtn.style.display = 'block';
          } else if (status === 'fail') {
            this._locLoadingBtn.style.display = 'block';
            this._locFailTip.style.display = 'block';
          } else {
            this._locBtn.style.display = 'block';
          }
        };
        this._render = function (map) {
          // 大盒子
          var bigBox = this._container = document.createElement("div");
          bigBox.className = "MyGeolocation";
          // 默认按钮
          this._locBtn = document.createElement("div");
          this._locBtn.className = 'icon';
          bigBox.appendChild(this._locBtn);
          // 加载按钮
          this._locLoadingBtn = document.createElement("div");
          this._locLoadingBtn.className = 'icon loading';
          this._locLoadingBtn.style.background = 'url(//webmap0.bdimg.com/wolfman/static/common/images/new/loading_4a096ed.gif)';
          this._locLoadingBtn.style.backgroundSize = '14px 14px';
          this._locLoadingBtn.style.display = 'none';
          bigBox.appendChild(this._locLoadingBtn);
          this._locFailTip = document.createElement("div");
          this._locFailTip.innerHTML = "定位失败";
          this._locFailTip.style.cssText = "display:none;position:absolute;right:34px;top:50%;width: 52px;height:20px;line-height:20px;margin-top:-10px;font-size:12px;box-shadow:1px 1px 2px rgba(0,0,0,.4);background:rgba(255,255,255,1);border-radius:3px;padding-left:5px;";
          // if(this.anchor ==='BMAP_ANCHOR_TOP_LEFT')
          console.log(__webpack_require__.g.anchor);
          bigBox.appendChild(this._locFailTip);
          map.getContainer().appendChild(bigBox);
          return bigBox;
        };
        this._bind = function () {
          let that = this;
          function onMouseDown() {
            that._buttonTapped = true;
            this.style.background = "#9b9b9b";
          }
          function onMouseUp() {
            if (that._buttonTapped === false) {
              return;
            }
            that._buttonTapped = false;
            that.startLocation();
            this.style.background = "#fff";
          }
          that._container.addEventListener("mousedown", onMouseDown, false);
          that._container.addEventListener("mouseup", onMouseUp, false);
        };
        this.startLocation = function () {
          this.changeStatus('loading');
          var _this = this;
          var e = true;
          if (_this.onLocationStart) {
            function ky(kA) {
              _this._onLocSuccess(kA, true);
            }
            function kz() {
              _this._onLocFailure();
            }
            e = _this.onLocationStart(ky, kz);
          }
          if (e === false) {
            return;
          }
          if (!navigator.geolocation) {
            return;
          }
          var i = {
            enableHighAccuracy: true,
            maximumAge: 1000,
            timeout: 3000
          };
          this.watchId && navigator.geolocation.clearWatch(this.watchId);
          this.watchId = null;
          navigator.geolocation.getCurrentPosition(function (kA) {
            _this.changeStatus('normal');
            _this._onLocSuccess(kA, true);
          }, function (kA) {
            _this.changeStatus('normal');
            _this._onLocFailure(kA);
          }, i);
          if (this.watchPosition) {
            this.watchId = navigator.geolocation.watchPosition(function (kA) {
              _this._onLocSuccess(kA, false);
            }, function (kA) {}, i);
          }
        };
      };
      MyGlocation.prototype = Object.create(BMapGL.LocationControl.prototype);
      MyGlocation.prototype.constructor = MyGlocation;
      MyGeolocation = MyGlocation;
    },
    load() {
      const {
        BMapGL,
        map,
        anchor,
        offset
      } = this;
      /* this.originInstance = new BMapGL.LocationControl({
        anchor: global[anchor],
        offset: offset && createSize(BMapGL, offset),
        // 使用浏览器的 Geolocation API 进行定位
        enableAutoLocation: false
      })
      bindEvents.call(this, this.originInstance)
      map.addControl(this.originInstance)
      this.originInstance.addEventListener('locationSuccess', this.locateUser);
      this.originInstance.addEventListener("locationError",function(e){
        alert(e.message);
      });
       let _container = null
      // 重置样式
      Object.defineProperty(this.originInstance,'_container',{
        set(v) {
          _container = v
          v.style.transform = 'scale(0.68)'
          v.style.transformOrigin = 'right center'
          v.id = 'geolocation'
        },
        get(){
          return _container
        }
      }) */
      !MyGeolocation && this.initMyControl();
      this.originInstance = new MyGeolocation({
        anchor: __webpack_require__.g[anchor],
        offset: offset && createSize(BMapGL, offset)
      });
      map.addControl(this.originInstance);
    },
    locateUser() {
      const isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
      if (isChrome) {
        // 检查浏览器是否支持 Geolocation
        if (navigator.geolocation) {
          // 获取用户的地理位置
          navigator.geolocation.getCurrentPosition(position => {
            alert('请在浏览器设置中，禁止使用位置服务。');
          }, error => {
            console.log('navigator.geolocation,已禁止获取位置信息');
          });
        } else {
          // 如果浏览器不支持 Geolocation，使用 BMapGL.Geolocation
          const geolocation = new BMapGL.Geolocation();
          geolocation.getCurrentPosition(r => {
            if (geolocation.getStatus() == BMAP_STATUS_SUCCESS) {
              alert('请在浏览器设置中，禁止使用位置服务。');
            } else {
              // 处理错误
              console.log('BMapGL.Geolocation,已禁止获取位置信息');
            }
          });
        }
      }
    }
  }
});
;// CONCATENATED MODULE: ./packages/controls/Geolocation.vue?vue&type=script&lang=js
 /* harmony default export */ var controls_Geolocationvue_type_script_lang_js = (Geolocationvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-style-loader/index.js??clonedRuleSet-12.use[0]!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/@vue/vue-loader-v15/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./packages/controls/Geolocation.vue?vue&type=style&index=0&id=40d93060&prod&lang=css
var Geolocationvue_type_style_index_0_id_40d93060_prod_lang_css = __webpack_require__(5032);
;// CONCATENATED MODULE: ./packages/controls/Geolocation.vue?vue&type=style&index=0&id=40d93060&prod&lang=css

;// CONCATENATED MODULE: ./packages/controls/Geolocation.vue
var Geolocation_render, Geolocation_staticRenderFns
;

;


/* normalize component */

var Geolocation_component = normalizeComponent(
  controls_Geolocationvue_type_script_lang_js,
  Geolocation_render,
  Geolocation_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Geolocation = (Geolocation_component.exports);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/babel-loader/lib/index.js!./node_modules/@vue/vue-loader-v15/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./packages/controls/Control.vue?vue&type=template&id=0a8fcbe4
var Controlvue_type_template_id_0a8fcbe4_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._t("default")], 2);
};
var Controlvue_type_template_id_0a8fcbe4_staticRenderFns = [];

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/babel-loader/lib/index.js!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./packages/controls/Control.vue?vue&type=script&lang=js


/* harmony default export */ var Controlvue_type_script_lang_js = ({
  name: 'bmap-gl-control',
  mixins: [common('control')],
  props: ['anchor', 'offset'],
  watch: {
    anchor(val) {
      this.originInstance.setAnchor(val);
    },
    offset(val) {
      this.originInstance.setOffset(val);
    }
  },
  methods: {
    load() {
      const {
        BMapGL,
        map,
        anchor,
        offset,
        $el
      } = this;
      const Control = function () {
        this.defaultAnchor = __webpack_require__.g[anchor || 'BMAP_ANCHOR_TOP_LEFT'];
        this.defaultOffset = createSize(BMapGL, offset);
      };
      Control.prototype = new BMapGL.Control();
      Control.prototype.initialize = map => {
        return map.getContainer().appendChild($el);
      };
      this.originInstance = new Control(anchor, offset);
      map.addControl(this.originInstance);
    }
  }
});
;// CONCATENATED MODULE: ./packages/controls/Control.vue?vue&type=script&lang=js
 /* harmony default export */ var controls_Controlvue_type_script_lang_js = (Controlvue_type_script_lang_js); 
;// CONCATENATED MODULE: ./packages/controls/Control.vue





/* normalize component */
;
var Control_component = normalizeComponent(
  controls_Controlvue_type_script_lang_js,
  Controlvue_type_template_id_0a8fcbe4_render,
  Controlvue_type_template_id_0a8fcbe4_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Control = (Control_component.exports);
// EXTERNAL MODULE: ./node_modules/core-js/modules/es.array.push.js
var es_array_push = __webpack_require__(4114);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/babel-loader/lib/index.js!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./packages/controls/MapType.vue?vue&type=script&lang=js




/* harmony default export */ var MapTypevue_type_script_lang_js = ({
  name: 'bmap-gl-map-type',
  render() {},
  mixins: [common('control')],
  props: ['anchor', 'offset'],
  watch: {
    anchor() {
      this.reload();
    },
    offset() {
      this.reload();
    },
    type() {
      this.reload();
    },
    mapTypes() {
      this.reload();
    }
  },
  methods: {
    load() {
      const {
        BMapGL,
        map,
        anchor,
        offset
      } = this;
      const mapTypes = [];
      this.mapTypes && this.mapTypes.forEach(item => mapTypes.push(__webpack_require__.g[item]));
      this.originInstance = new BMapGL.MapTypeControl({
        anchor: __webpack_require__.g[anchor],
        offset: offset && createSize(BMapGL, offset)
      });
      console.log(this.originInstance);
      map.addControl(this.originInstance);
    }
  }
});
;// CONCATENATED MODULE: ./packages/controls/MapType.vue?vue&type=script&lang=js
 /* harmony default export */ var controls_MapTypevue_type_script_lang_js = (MapTypevue_type_script_lang_js); 
;// CONCATENATED MODULE: ./packages/controls/MapType.vue
var MapType_render, MapType_staticRenderFns
;



/* normalize component */
;
var MapType_component = normalizeComponent(
  controls_MapTypevue_type_script_lang_js,
  MapType_render,
  MapType_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var MapType = (MapType_component.exports);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/babel-loader/lib/index.js!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./packages/controls/Scale.vue?vue&type=script&lang=js


/* harmony default export */ var Scalevue_type_script_lang_js = ({
  name: 'bmap-gl-scale',
  render() {},
  mixins: [common('control')],
  props: {
    anchor: {
      type: String,
      default: 'BMAP_ANCHOR_BOTTOM_RIGHT'
    },
    offset: {
      type: Object
    }
  },
  watch: {
    anchor() {
      this.reload();
    },
    offset() {
      this.reload();
    }
  },
  methods: {
    load() {
      const {
        BMap,
        map,
        anchor,
        offset
      } = this;
      this.originInstance = new BMapGL.ScaleControl({
        anchor: __webpack_require__.g[anchor],
        offset: offset && createSize(BMap, offset)
      });
      map.addControl(this.originInstance);
    }
  }
});
;// CONCATENATED MODULE: ./packages/controls/Scale.vue?vue&type=script&lang=js
 /* harmony default export */ var controls_Scalevue_type_script_lang_js = (Scalevue_type_script_lang_js); 
;// CONCATENATED MODULE: ./packages/controls/Scale.vue
var Scale_render, Scale_staticRenderFns
;



/* normalize component */
;
var Scale_component = normalizeComponent(
  controls_Scalevue_type_script_lang_js,
  Scale_render,
  Scale_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Scale = (Scale_component.exports);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/babel-loader/lib/index.js!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./packages/controls/Zoom.vue?vue&type=script&lang=js


/* harmony default export */ var Zoomvue_type_script_lang_js = ({
  name: 'bmap-gl-zoom',
  render() {},
  mixins: [common('control')],
  props: {
    anchor: {
      type: String,
      default: 'BMAP_ANCHOR_BOTTOM_RIGHT'
    },
    offset: {
      type: Object,
      default: () => ({
        width: 20,
        height: 90
      })
    }
  },
  watch: {
    anchor() {
      this.reload();
    },
    offset() {
      this.reload();
    }
  },
  methods: {
    load() {
      const {
        BMapGL,
        map,
        anchor,
        offset
      } = this;
      this.originInstance = new BMapGL.ZoomControl({
        anchor: __webpack_require__.g[anchor],
        offset: offset && createSize(BMapGL, offset)
      });
      map.addControl(this.originInstance);
    }
  }
});
;// CONCATENATED MODULE: ./packages/controls/Zoom.vue?vue&type=script&lang=js
 /* harmony default export */ var controls_Zoomvue_type_script_lang_js = (Zoomvue_type_script_lang_js); 
;// CONCATENATED MODULE: ./packages/controls/Zoom.vue
var Zoom_render, Zoom_staticRenderFns
;



/* normalize component */
;
var Zoom_component = normalizeComponent(
  controls_Zoomvue_type_script_lang_js,
  Zoom_render,
  Zoom_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Zoom = (Zoom_component.exports);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/babel-loader/lib/index.js!./node_modules/@vue/vue-loader-v15/lib/index.js??vue-loader-options!./packages/controls/Navigation.vue?vue&type=script&lang=js


/* harmony default export */ var Navigationvue_type_script_lang_js = ({
  name: 'bmap-gl-navigation',
  render() {},
  mixins: [common('control')],
  props: {
    anchor: {
      type: String,
      default: 'BMAP_ANCHOR_BOTTOM_RIGHT'
    },
    offset: {
      type: Object,
      default: () => ({
        width: 7.5,
        height: 150
      })
    }
  },
  watch: {
    anchor() {
      this.reload();
    },
    offset() {
      this.reload();
    }
  },
  methods: {
    load() {
      const {
        BMapGL,
        map,
        anchor,
        offset
      } = this;
      this.originInstance = new BMapGL.NavigationControl3D({
        anchor: __webpack_require__.g[anchor],
        offset: offset && createSize(BMapGL, offset)
      });
      map.addControl(this.originInstance);
    }
  }
});
;// CONCATENATED MODULE: ./packages/controls/Navigation.vue?vue&type=script&lang=js
 /* harmony default export */ var controls_Navigationvue_type_script_lang_js = (Navigationvue_type_script_lang_js); 
;// CONCATENATED MODULE: ./packages/controls/Navigation.vue
var Navigation_render, Navigation_staticRenderFns
;



/* normalize component */
;
var Navigation_component = normalizeComponent(
  controls_Navigationvue_type_script_lang_js,
  Navigation_render,
  Navigation_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Navigation = (Navigation_component.exports);
;// CONCATENATED MODULE: ./packages/index.js








const install = function (Vue, options) {
  const {
    ak
  } = options;
  Vue.prototype._BMapGL = () => ({
    ak
  });
  Vue.component('bmap-gl', Map);
  Vue.component('bmap-gl-marker', Marker);
  Vue.component('bmap-gl-geolocation', Geolocation);
  Vue.component('bmap-gl-control', Control);
  Vue.component('bmap-gl-map-type', MapType);
  Vue.component('bmap-gl-scale', Scale);
  Vue.component('bmap-gl-zoom', Zoom);
  Vue.component('bmap-gl-navigation', Navigation);
};
// 判断是否是直接引入文件,如果是，就不用调用 Vue.use()
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}
/* harmony default export */ var packages_0 = ({
  install
});

;// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = (packages_0);


}();
module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=v2-bmap-gl.common.js.map