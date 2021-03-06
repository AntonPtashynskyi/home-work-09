// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"7FFbI":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "4a236f9275d0a351";
module.bundle.HMR_BUNDLE_ID = "d5080ab5006301b4";
"use strict";
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = o[Symbol.iterator]();
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('???? [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] ???? Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ??? Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>???? ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) return true;
    var parents = getParents(module.bundle.root, id); // If no parents, the asset is new. Prevent reloading the page.
    if (!parents.length) return true;
    return parents.some(function(v) {
        return hmrAcceptCheck(v[0], v[1], null);
    });
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"6mHD6":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _flatpickr = require("flatpickr");
var _flatpickrDefault = parcelHelpers.interopDefault(_flatpickr);
var _flatpickrMinCss = require("flatpickr/dist/flatpickr.min.css");
var _notiflixNotifyAio = require("notiflix/build/notiflix-notify-aio");
const dateInput = document.querySelector('input#datetime-picker');
const startBtn = document.querySelector('button[data-start]');
startBtn.disabled = true;
let intervalId;
let selectedDate;
const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose: onSelectDate
};
_flatpickrDefault.default(dateInput, options);
function onSelectDate(selectedDates) {
    const currentTime = new Date().getTime();
    const rawSelectedDate = selectedDates[0].getTime();
    if (rawSelectedDate < currentTime) return _notiflixNotifyAio.Notify.failure('Please choose a date in the future');
    else selectedDate = rawSelectedDate;
    startBtn.disabled = false;
}
startBtn.addEventListener('click', ()=>{
    if (intervalId) clearInterval(intervalId);
    intervalId = setInterval(()=>{
        const timeNow = new Date().getTime();
        if (selectedDate <= timeNow) {
            clearInterval(intervalId);
            return;
        }
        const timeToEnd = convertMs(selectedDate - timeNow);
        const timeToEndToString = addLeadingZero(timeToEnd);
        renderTime(timeToEndToString);
    }, 1000);
});
function renderTime({ days , hours , minutes , seconds  }) {
    const dateDays = document.querySelector('.value[data-days]');
    const dateHours = document.querySelector('.value[data-hours]');
    const dateMinutes = document.querySelector('.value[data-minutes]');
    const dateSeconds = document.querySelector('.value[data-seconds]');
    dateDays.textContent = days;
    dateHours.textContent = hours;
    dateMinutes.textContent = minutes;
    dateSeconds.textContent = seconds;
}
function convertMs(ms) {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
    const days = Math.floor(ms / day);
    const hours = Math.floor(ms % day / hour);
    const minutes = Math.floor(ms % day % hour / minute);
    const seconds = Math.floor(ms % day % hour % minute / second);
    return {
        days,
        hours,
        minutes,
        seconds
    };
}
function addLeadingZero(time) {
    return {
        days: `${time.days}`.padStart(2, '0'),
        hours: `${time.hours}`.padStart(2, '0'),
        minutes: `${time.minutes}`.padStart(2, '0'),
        seconds: `${time.seconds}`.padStart(2, '0')
    };
}

},{"flatpickr":"4TcAt","flatpickr/dist/flatpickr.min.css":"aL2mM","notiflix/build/notiflix-notify-aio":"heCpW","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"4TcAt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _options = require("./types/options");
var _default = require("./l10n/default");
var _defaultDefault = parcelHelpers.interopDefault(_default);
var _utils = require("./utils");
var _dom = require("./utils/dom");
var _dates = require("./utils/dates");
var _formatting = require("./utils/formatting");
var _polyfills = require("./utils/polyfills");
const DEBOUNCED_CHANGE_MS = 300;
function FlatpickrInstance(element1, instanceConfig) {
    const self = {
        config: Object.assign(Object.assign({
        }, _options.defaults), flatpickr.defaultConfig),
        l10n: _defaultDefault.default
    };
    self.parseDate = _dates.createDateParser({
        config: self.config,
        l10n: self.l10n
    });
    self._handlers = [];
    self.pluginElements = [];
    self.loadedPlugins = [];
    self._bind = bind;
    self._setHoursFromDate = setHoursFromDate;
    self._positionCalendar = positionCalendar;
    self.changeMonth = changeMonth;
    self.changeYear = changeYear;
    self.clear = clear;
    self.close = close;
    self._createElement = _dom.createElement;
    self.destroy = destroy;
    self.isEnabled = isEnabled;
    self.jumpToDate = jumpToDate;
    self.open = open;
    self.redraw = redraw;
    self.set = set;
    self.setDate = setDate;
    self.toggle = toggle;
    function setupHelperFunctions() {
        self.utils = {
            getDaysInMonth (month = self.currentMonth, yr = self.currentYear) {
                if (month === 1 && (yr % 4 === 0 && yr % 100 !== 0 || yr % 400 === 0)) return 29;
                return self.l10n.daysInMonth[month];
            }
        };
    }
    function init() {
        self.element = self.input = element1;
        self.isOpen = false;
        parseConfig();
        setupLocale();
        setupInputs();
        setupDates();
        setupHelperFunctions();
        if (!self.isMobile) build();
        bindEvents();
        if (self.selectedDates.length || self.config.noCalendar) {
            if (self.config.enableTime) setHoursFromDate(self.config.noCalendar ? self.latestSelectedDateObj : undefined);
            updateValue(false);
        }
        setCalendarWidth();
        const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
        if (!self.isMobile && isSafari) positionCalendar();
        triggerEvent("onReady");
    }
    function bindToInstance(fn) {
        return fn.bind(self);
    }
    function setCalendarWidth() {
        const config = self.config;
        if (config.weekNumbers === false && config.showMonths === 1) return;
        else if (config.noCalendar !== true) window.requestAnimationFrame(function() {
            if (self.calendarContainer !== undefined) {
                self.calendarContainer.style.visibility = "hidden";
                self.calendarContainer.style.display = "block";
            }
            if (self.daysContainer !== undefined) {
                const daysWidth = (self.days.offsetWidth + 1) * config.showMonths;
                self.daysContainer.style.width = daysWidth + "px";
                self.calendarContainer.style.width = daysWidth + (self.weekWrapper !== undefined ? self.weekWrapper.offsetWidth : 0) + "px";
                self.calendarContainer.style.removeProperty("visibility");
                self.calendarContainer.style.removeProperty("display");
            }
        });
    }
    function updateTime(e) {
        if (self.selectedDates.length === 0) {
            const defaultDate = self.config.minDate === undefined || _dates.compareDates(new Date(), self.config.minDate) >= 0 ? new Date() : new Date(self.config.minDate.getTime());
            const defaults = _dates.getDefaultHours(self.config);
            defaultDate.setHours(defaults.hours, defaults.minutes, defaults.seconds, defaultDate.getMilliseconds());
            self.selectedDates = [
                defaultDate
            ];
            self.latestSelectedDateObj = defaultDate;
        }
        if (e !== undefined && e.type !== "blur") timeWrapper(e);
        const prevValue = self._input.value;
        setHoursFromInputs();
        updateValue();
        if (self._input.value !== prevValue) self._debouncedChange();
    }
    function ampm2military(hour, amPM) {
        return hour % 12 + 12 * _utils.int(amPM === self.l10n.amPM[1]);
    }
    function military2ampm(hour) {
        switch(hour % 24){
            case 0:
            case 12:
                return 12;
            default:
                return hour % 12;
        }
    }
    function setHoursFromInputs() {
        if (self.hourElement === undefined || self.minuteElement === undefined) return;
        let hours = (parseInt(self.hourElement.value.slice(-2), 10) || 0) % 24, minutes = (parseInt(self.minuteElement.value, 10) || 0) % 60, seconds = self.secondElement !== undefined ? (parseInt(self.secondElement.value, 10) || 0) % 60 : 0;
        if (self.amPM !== undefined) hours = ampm2military(hours, self.amPM.textContent);
        const limitMinHours = self.config.minTime !== undefined || self.config.minDate && self.minDateHasTime && self.latestSelectedDateObj && _dates.compareDates(self.latestSelectedDateObj, self.config.minDate, true) === 0;
        const limitMaxHours = self.config.maxTime !== undefined || self.config.maxDate && self.maxDateHasTime && self.latestSelectedDateObj && _dates.compareDates(self.latestSelectedDateObj, self.config.maxDate, true) === 0;
        if (limitMaxHours) {
            const maxTime = self.config.maxTime !== undefined ? self.config.maxTime : self.config.maxDate;
            hours = Math.min(hours, maxTime.getHours());
            if (hours === maxTime.getHours()) minutes = Math.min(minutes, maxTime.getMinutes());
            if (minutes === maxTime.getMinutes()) seconds = Math.min(seconds, maxTime.getSeconds());
        }
        if (limitMinHours) {
            const minTime = self.config.minTime !== undefined ? self.config.minTime : self.config.minDate;
            hours = Math.max(hours, minTime.getHours());
            if (hours === minTime.getHours() && minutes < minTime.getMinutes()) minutes = minTime.getMinutes();
            if (minutes === minTime.getMinutes()) seconds = Math.max(seconds, minTime.getSeconds());
        }
        setHours(hours, minutes, seconds);
    }
    function setHoursFromDate(dateObj) {
        const date = dateObj || self.latestSelectedDateObj;
        if (date) setHours(date.getHours(), date.getMinutes(), date.getSeconds());
    }
    function setHours(hours, minutes, seconds) {
        if (self.latestSelectedDateObj !== undefined) self.latestSelectedDateObj.setHours(hours % 24, minutes, seconds || 0, 0);
        if (!self.hourElement || !self.minuteElement || self.isMobile) return;
        self.hourElement.value = _utils.pad(!self.config.time_24hr ? (12 + hours) % 12 + 12 * _utils.int(hours % 12 === 0) : hours);
        self.minuteElement.value = _utils.pad(minutes);
        if (self.amPM !== undefined) self.amPM.textContent = self.l10n.amPM[_utils.int(hours >= 12)];
        if (self.secondElement !== undefined) self.secondElement.value = _utils.pad(seconds);
    }
    function onYearInput(event) {
        const eventTarget = _dom.getEventTarget(event);
        const year = parseInt(eventTarget.value) + (event.delta || 0);
        if (year / 1000 > 1 || event.key === "Enter" && !/[^\d]/.test(year.toString())) changeYear(year);
    }
    function bind(element, event, handler, options) {
        if (event instanceof Array) return event.forEach((ev)=>bind(element, ev, handler, options)
        );
        if (element instanceof Array) return element.forEach((el)=>bind(el, event, handler, options)
        );
        element.addEventListener(event, handler, options);
        self._handlers.push({
            remove: ()=>element.removeEventListener(event, handler)
        });
    }
    function triggerChange1() {
        triggerEvent("onChange");
    }
    function bindEvents() {
        if (self.config.wrap) [
            "open",
            "close",
            "toggle",
            "clear"
        ].forEach((evt)=>{
            Array.prototype.forEach.call(self.element.querySelectorAll(`[data-${evt}]`), (el)=>bind(el, "click", self[evt])
            );
        });
        if (self.isMobile) {
            setupMobile();
            return;
        }
        const debouncedResize = _utils.debounce(onResize, 50);
        self._debouncedChange = _utils.debounce(triggerChange1, DEBOUNCED_CHANGE_MS);
        if (self.daysContainer && !/iPhone|iPad|iPod/i.test(navigator.userAgent)) bind(self.daysContainer, "mouseover", (e)=>{
            if (self.config.mode === "range") onMouseOver(_dom.getEventTarget(e));
        });
        bind(window.document.body, "keydown", onKeyDown);
        if (!self.config.inline && !self.config.static) bind(window, "resize", debouncedResize);
        if (window.ontouchstart !== undefined) bind(window.document, "touchstart", documentClick);
        else bind(window.document, "mousedown", documentClick);
        bind(window.document, "focus", documentClick, {
            capture: true
        });
        if (self.config.clickOpens === true) {
            bind(self._input, "focus", self.open);
            bind(self._input, "click", self.open);
        }
        if (self.daysContainer !== undefined) {
            bind(self.monthNav, "click", onMonthNavClick);
            bind(self.monthNav, [
                "keyup",
                "increment"
            ], onYearInput);
            bind(self.daysContainer, "click", selectDate);
        }
        if (self.timeContainer !== undefined && self.minuteElement !== undefined && self.hourElement !== undefined) {
            const selText = (e)=>_dom.getEventTarget(e).select()
            ;
            bind(self.timeContainer, [
                "increment"
            ], updateTime);
            bind(self.timeContainer, "blur", updateTime, {
                capture: true
            });
            bind(self.timeContainer, "click", timeIncrement);
            bind([
                self.hourElement,
                self.minuteElement
            ], [
                "focus",
                "click"
            ], selText);
            if (self.secondElement !== undefined) bind(self.secondElement, "focus", ()=>self.secondElement && self.secondElement.select()
            );
            if (self.amPM !== undefined) bind(self.amPM, "click", (e)=>{
                updateTime(e);
                triggerChange1();
            });
        }
        if (self.config.allowInput) bind(self._input, "blur", onBlur);
    }
    function jumpToDate(jumpDate, triggerChange) {
        const jumpTo = jumpDate !== undefined ? self.parseDate(jumpDate) : self.latestSelectedDateObj || (self.config.minDate && self.config.minDate > self.now ? self.config.minDate : self.config.maxDate && self.config.maxDate < self.now ? self.config.maxDate : self.now);
        const oldYear = self.currentYear;
        const oldMonth = self.currentMonth;
        try {
            if (jumpTo !== undefined) {
                self.currentYear = jumpTo.getFullYear();
                self.currentMonth = jumpTo.getMonth();
            }
        } catch (e) {
            e.message = "Invalid date supplied: " + jumpTo;
            self.config.errorHandler(e);
        }
        if (triggerChange && self.currentYear !== oldYear) {
            triggerEvent("onYearChange");
            buildMonthSwitch();
        }
        if (triggerChange && (self.currentYear !== oldYear || self.currentMonth !== oldMonth)) triggerEvent("onMonthChange");
        self.redraw();
    }
    function timeIncrement(e) {
        const eventTarget = _dom.getEventTarget(e);
        if (~eventTarget.className.indexOf("arrow")) incrementNumInput(e, eventTarget.classList.contains("arrowUp") ? 1 : -1);
    }
    function incrementNumInput(e, delta, inputElem) {
        const target = e && _dom.getEventTarget(e);
        const input = inputElem || target && target.parentNode && target.parentNode.firstChild;
        const event = createEvent("increment");
        event.delta = delta;
        input && input.dispatchEvent(event);
    }
    function build() {
        const fragment = window.document.createDocumentFragment();
        self.calendarContainer = _dom.createElement("div", "flatpickr-calendar");
        self.calendarContainer.tabIndex = -1;
        if (!self.config.noCalendar) {
            fragment.appendChild(buildMonthNav());
            self.innerContainer = _dom.createElement("div", "flatpickr-innerContainer");
            if (self.config.weekNumbers) {
                const { weekWrapper , weekNumbers  } = buildWeeks();
                self.innerContainer.appendChild(weekWrapper);
                self.weekNumbers = weekNumbers;
                self.weekWrapper = weekWrapper;
            }
            self.rContainer = _dom.createElement("div", "flatpickr-rContainer");
            self.rContainer.appendChild(buildWeekdays());
            if (!self.daysContainer) {
                self.daysContainer = _dom.createElement("div", "flatpickr-days");
                self.daysContainer.tabIndex = -1;
            }
            buildDays();
            self.rContainer.appendChild(self.daysContainer);
            self.innerContainer.appendChild(self.rContainer);
            fragment.appendChild(self.innerContainer);
        }
        if (self.config.enableTime) fragment.appendChild(buildTime());
        _dom.toggleClass(self.calendarContainer, "rangeMode", self.config.mode === "range");
        _dom.toggleClass(self.calendarContainer, "animate", self.config.animate === true);
        _dom.toggleClass(self.calendarContainer, "multiMonth", self.config.showMonths > 1);
        self.calendarContainer.appendChild(fragment);
        const customAppend = self.config.appendTo !== undefined && self.config.appendTo.nodeType !== undefined;
        if (self.config.inline || self.config.static) {
            self.calendarContainer.classList.add(self.config.inline ? "inline" : "static");
            if (self.config.inline) {
                if (!customAppend && self.element.parentNode) self.element.parentNode.insertBefore(self.calendarContainer, self._input.nextSibling);
                else if (self.config.appendTo !== undefined) self.config.appendTo.appendChild(self.calendarContainer);
            }
            if (self.config.static) {
                const wrapper = _dom.createElement("div", "flatpickr-wrapper");
                if (self.element.parentNode) self.element.parentNode.insertBefore(wrapper, self.element);
                wrapper.appendChild(self.element);
                if (self.altInput) wrapper.appendChild(self.altInput);
                wrapper.appendChild(self.calendarContainer);
            }
        }
        if (!self.config.static && !self.config.inline) (self.config.appendTo !== undefined ? self.config.appendTo : window.document.body).appendChild(self.calendarContainer);
    }
    function createDay(className, date, dayNumber, i) {
        const dateIsEnabled = isEnabled(date, true), dayElement = _dom.createElement("span", "flatpickr-day " + className, date.getDate().toString());
        dayElement.dateObj = date;
        dayElement.$i = i;
        dayElement.setAttribute("aria-label", self.formatDate(date, self.config.ariaDateFormat));
        if (className.indexOf("hidden") === -1 && _dates.compareDates(date, self.now) === 0) {
            self.todayDateElem = dayElement;
            dayElement.classList.add("today");
            dayElement.setAttribute("aria-current", "date");
        }
        if (dateIsEnabled) {
            dayElement.tabIndex = -1;
            if (isDateSelected(date)) {
                dayElement.classList.add("selected");
                self.selectedDateElem = dayElement;
                if (self.config.mode === "range") {
                    _dom.toggleClass(dayElement, "startRange", self.selectedDates[0] && _dates.compareDates(date, self.selectedDates[0], true) === 0);
                    _dom.toggleClass(dayElement, "endRange", self.selectedDates[1] && _dates.compareDates(date, self.selectedDates[1], true) === 0);
                    if (className === "nextMonthDay") dayElement.classList.add("inRange");
                }
            }
        } else dayElement.classList.add("flatpickr-disabled");
        if (self.config.mode === "range") {
            if (isDateInRange(date) && !isDateSelected(date)) dayElement.classList.add("inRange");
        }
        if (self.weekNumbers && self.config.showMonths === 1 && className !== "prevMonthDay" && dayNumber % 7 === 1) self.weekNumbers.insertAdjacentHTML("beforeend", "<span class='flatpickr-day'>" + self.config.getWeek(date) + "</span>");
        triggerEvent("onDayCreate", dayElement);
        return dayElement;
    }
    function focusOnDayElem(targetNode) {
        targetNode.focus();
        if (self.config.mode === "range") onMouseOver(targetNode);
    }
    function getFirstAvailableDay(delta) {
        const startMonth = delta > 0 ? 0 : self.config.showMonths - 1;
        const endMonth = delta > 0 ? self.config.showMonths : -1;
        for(let m = startMonth; m != endMonth; m += delta){
            const month = self.daysContainer.children[m];
            const startIndex = delta > 0 ? 0 : month.children.length - 1;
            const endIndex = delta > 0 ? month.children.length : -1;
            for(let i = startIndex; i != endIndex; i += delta){
                const c = month.children[i];
                if (c.className.indexOf("hidden") === -1 && isEnabled(c.dateObj)) return c;
            }
        }
        return undefined;
    }
    function getNextAvailableDay(current, delta) {
        const givenMonth = current.className.indexOf("Month") === -1 ? current.dateObj.getMonth() : self.currentMonth;
        const endMonth = delta > 0 ? self.config.showMonths : -1;
        const loopDelta = delta > 0 ? 1 : -1;
        for(let m = givenMonth - self.currentMonth; m != endMonth; m += loopDelta){
            const month = self.daysContainer.children[m];
            const startIndex = givenMonth - self.currentMonth === m ? current.$i + delta : delta < 0 ? month.children.length - 1 : 0;
            const numMonthDays = month.children.length;
            for(let i = startIndex; i >= 0 && i < numMonthDays && i != (delta > 0 ? numMonthDays : -1); i += loopDelta){
                const c = month.children[i];
                if (c.className.indexOf("hidden") === -1 && isEnabled(c.dateObj) && Math.abs(current.$i - i) >= Math.abs(delta)) return focusOnDayElem(c);
            }
        }
        self.changeMonth(loopDelta);
        focusOnDay(getFirstAvailableDay(loopDelta), 0);
        return undefined;
    }
    function focusOnDay(current, offset) {
        const dayFocused = isInView(document.activeElement || document.body);
        const startElem = current !== undefined ? current : dayFocused ? document.activeElement : self.selectedDateElem !== undefined && isInView(self.selectedDateElem) ? self.selectedDateElem : self.todayDateElem !== undefined && isInView(self.todayDateElem) ? self.todayDateElem : getFirstAvailableDay(offset > 0 ? 1 : -1);
        if (startElem === undefined) self._input.focus();
        else if (!dayFocused) focusOnDayElem(startElem);
        else getNextAvailableDay(startElem, offset);
    }
    function buildMonthDays(year, month) {
        const firstOfMonth = (new Date(year, month, 1).getDay() - self.l10n.firstDayOfWeek + 7) % 7;
        const prevMonthDays = self.utils.getDaysInMonth((month - 1 + 12) % 12, year);
        const daysInMonth = self.utils.getDaysInMonth(month, year), days = window.document.createDocumentFragment(), isMultiMonth = self.config.showMonths > 1, prevMonthDayClass = isMultiMonth ? "prevMonthDay hidden" : "prevMonthDay", nextMonthDayClass = isMultiMonth ? "nextMonthDay hidden" : "nextMonthDay";
        let dayNumber = prevMonthDays + 1 - firstOfMonth, dayIndex = 0;
        for(; dayNumber <= prevMonthDays; dayNumber++, dayIndex++)days.appendChild(createDay(prevMonthDayClass, new Date(year, month - 1, dayNumber), dayNumber, dayIndex));
        for(dayNumber = 1; dayNumber <= daysInMonth; dayNumber++, dayIndex++)days.appendChild(createDay("", new Date(year, month, dayNumber), dayNumber, dayIndex));
        for(let dayNum = daysInMonth + 1; dayNum <= 42 - firstOfMonth && (self.config.showMonths === 1 || dayIndex % 7 !== 0); dayNum++, dayIndex++)days.appendChild(createDay(nextMonthDayClass, new Date(year, month + 1, dayNum % daysInMonth), dayNum, dayIndex));
        const dayContainer = _dom.createElement("div", "dayContainer");
        dayContainer.appendChild(days);
        return dayContainer;
    }
    function buildDays() {
        if (self.daysContainer === undefined) return;
        _dom.clearNode(self.daysContainer);
        if (self.weekNumbers) _dom.clearNode(self.weekNumbers);
        const frag = document.createDocumentFragment();
        for(let i = 0; i < self.config.showMonths; i++){
            const d = new Date(self.currentYear, self.currentMonth, 1);
            d.setMonth(self.currentMonth + i);
            frag.appendChild(buildMonthDays(d.getFullYear(), d.getMonth()));
        }
        self.daysContainer.appendChild(frag);
        self.days = self.daysContainer.firstChild;
        if (self.config.mode === "range" && self.selectedDates.length === 1) onMouseOver();
    }
    function buildMonthSwitch() {
        if (self.config.showMonths > 1 || self.config.monthSelectorType !== "dropdown") return;
        const shouldBuildMonth = function(month) {
            if (self.config.minDate !== undefined && self.currentYear === self.config.minDate.getFullYear() && month < self.config.minDate.getMonth()) return false;
            return !(self.config.maxDate !== undefined && self.currentYear === self.config.maxDate.getFullYear() && month > self.config.maxDate.getMonth());
        };
        self.monthsDropdownContainer.tabIndex = -1;
        self.monthsDropdownContainer.innerHTML = "";
        for(let i = 0; i < 12; i++){
            if (!shouldBuildMonth(i)) continue;
            const month = _dom.createElement("option", "flatpickr-monthDropdown-month");
            month.value = new Date(self.currentYear, i).getMonth().toString();
            month.textContent = _formatting.monthToStr(i, self.config.shorthandCurrentMonth, self.l10n);
            month.tabIndex = -1;
            if (self.currentMonth === i) month.selected = true;
            self.monthsDropdownContainer.appendChild(month);
        }
    }
    function buildMonth() {
        const container = _dom.createElement("div", "flatpickr-month");
        const monthNavFragment = window.document.createDocumentFragment();
        let monthElement;
        if (self.config.showMonths > 1 || self.config.monthSelectorType === "static") monthElement = _dom.createElement("span", "cur-month");
        else {
            self.monthsDropdownContainer = _dom.createElement("select", "flatpickr-monthDropdown-months");
            self.monthsDropdownContainer.setAttribute("aria-label", self.l10n.monthAriaLabel);
            bind(self.monthsDropdownContainer, "change", (e)=>{
                const target = _dom.getEventTarget(e);
                const selectedMonth = parseInt(target.value, 10);
                self.changeMonth(selectedMonth - self.currentMonth);
                triggerEvent("onMonthChange");
            });
            buildMonthSwitch();
            monthElement = self.monthsDropdownContainer;
        }
        const yearInput = _dom.createNumberInput("cur-year", {
            tabindex: "-1"
        });
        const yearElement = yearInput.getElementsByTagName("input")[0];
        yearElement.setAttribute("aria-label", self.l10n.yearAriaLabel);
        if (self.config.minDate) yearElement.setAttribute("min", self.config.minDate.getFullYear().toString());
        if (self.config.maxDate) {
            yearElement.setAttribute("max", self.config.maxDate.getFullYear().toString());
            yearElement.disabled = !!self.config.minDate && self.config.minDate.getFullYear() === self.config.maxDate.getFullYear();
        }
        const currentMonth = _dom.createElement("div", "flatpickr-current-month");
        currentMonth.appendChild(monthElement);
        currentMonth.appendChild(yearInput);
        monthNavFragment.appendChild(currentMonth);
        container.appendChild(monthNavFragment);
        return {
            container,
            yearElement,
            monthElement
        };
    }
    function buildMonths() {
        _dom.clearNode(self.monthNav);
        self.monthNav.appendChild(self.prevMonthNav);
        if (self.config.showMonths) {
            self.yearElements = [];
            self.monthElements = [];
        }
        for(let m = self.config.showMonths; m--;){
            const month = buildMonth();
            self.yearElements.push(month.yearElement);
            self.monthElements.push(month.monthElement);
            self.monthNav.appendChild(month.container);
        }
        self.monthNav.appendChild(self.nextMonthNav);
    }
    function buildMonthNav() {
        self.monthNav = _dom.createElement("div", "flatpickr-months");
        self.yearElements = [];
        self.monthElements = [];
        self.prevMonthNav = _dom.createElement("span", "flatpickr-prev-month");
        self.prevMonthNav.innerHTML = self.config.prevArrow;
        self.nextMonthNav = _dom.createElement("span", "flatpickr-next-month");
        self.nextMonthNav.innerHTML = self.config.nextArrow;
        buildMonths();
        Object.defineProperty(self, "_hidePrevMonthArrow", {
            get: ()=>self.__hidePrevMonthArrow
            ,
            set (bool) {
                if (self.__hidePrevMonthArrow !== bool) {
                    _dom.toggleClass(self.prevMonthNav, "flatpickr-disabled", bool);
                    self.__hidePrevMonthArrow = bool;
                }
            }
        });
        Object.defineProperty(self, "_hideNextMonthArrow", {
            get: ()=>self.__hideNextMonthArrow
            ,
            set (bool) {
                if (self.__hideNextMonthArrow !== bool) {
                    _dom.toggleClass(self.nextMonthNav, "flatpickr-disabled", bool);
                    self.__hideNextMonthArrow = bool;
                }
            }
        });
        self.currentYearElement = self.yearElements[0];
        updateNavigationCurrentMonth();
        return self.monthNav;
    }
    function buildTime() {
        self.calendarContainer.classList.add("hasTime");
        if (self.config.noCalendar) self.calendarContainer.classList.add("noCalendar");
        const defaults = _dates.getDefaultHours(self.config);
        self.timeContainer = _dom.createElement("div", "flatpickr-time");
        self.timeContainer.tabIndex = -1;
        const separator = _dom.createElement("span", "flatpickr-time-separator", ":");
        const hourInput = _dom.createNumberInput("flatpickr-hour", {
            "aria-label": self.l10n.hourAriaLabel
        });
        self.hourElement = hourInput.getElementsByTagName("input")[0];
        const minuteInput = _dom.createNumberInput("flatpickr-minute", {
            "aria-label": self.l10n.minuteAriaLabel
        });
        self.minuteElement = minuteInput.getElementsByTagName("input")[0];
        self.hourElement.tabIndex = self.minuteElement.tabIndex = -1;
        self.hourElement.value = _utils.pad(self.latestSelectedDateObj ? self.latestSelectedDateObj.getHours() : self.config.time_24hr ? defaults.hours : military2ampm(defaults.hours));
        self.minuteElement.value = _utils.pad(self.latestSelectedDateObj ? self.latestSelectedDateObj.getMinutes() : defaults.minutes);
        self.hourElement.setAttribute("step", self.config.hourIncrement.toString());
        self.minuteElement.setAttribute("step", self.config.minuteIncrement.toString());
        self.hourElement.setAttribute("min", self.config.time_24hr ? "0" : "1");
        self.hourElement.setAttribute("max", self.config.time_24hr ? "23" : "12");
        self.hourElement.setAttribute("maxlength", "2");
        self.minuteElement.setAttribute("min", "0");
        self.minuteElement.setAttribute("max", "59");
        self.minuteElement.setAttribute("maxlength", "2");
        self.timeContainer.appendChild(hourInput);
        self.timeContainer.appendChild(separator);
        self.timeContainer.appendChild(minuteInput);
        if (self.config.time_24hr) self.timeContainer.classList.add("time24hr");
        if (self.config.enableSeconds) {
            self.timeContainer.classList.add("hasSeconds");
            const secondInput = _dom.createNumberInput("flatpickr-second");
            self.secondElement = secondInput.getElementsByTagName("input")[0];
            self.secondElement.value = _utils.pad(self.latestSelectedDateObj ? self.latestSelectedDateObj.getSeconds() : defaults.seconds);
            self.secondElement.setAttribute("step", self.minuteElement.getAttribute("step"));
            self.secondElement.setAttribute("min", "0");
            self.secondElement.setAttribute("max", "59");
            self.secondElement.setAttribute("maxlength", "2");
            self.timeContainer.appendChild(_dom.createElement("span", "flatpickr-time-separator", ":"));
            self.timeContainer.appendChild(secondInput);
        }
        if (!self.config.time_24hr) {
            self.amPM = _dom.createElement("span", "flatpickr-am-pm", self.l10n.amPM[_utils.int((self.latestSelectedDateObj ? self.hourElement.value : self.config.defaultHour) > 11)]);
            self.amPM.title = self.l10n.toggleTitle;
            self.amPM.tabIndex = -1;
            self.timeContainer.appendChild(self.amPM);
        }
        return self.timeContainer;
    }
    function buildWeekdays() {
        if (!self.weekdayContainer) self.weekdayContainer = _dom.createElement("div", "flatpickr-weekdays");
        else _dom.clearNode(self.weekdayContainer);
        for(let i = self.config.showMonths; i--;){
            const container = _dom.createElement("div", "flatpickr-weekdaycontainer");
            self.weekdayContainer.appendChild(container);
        }
        updateWeekdays();
        return self.weekdayContainer;
    }
    function updateWeekdays() {
        if (!self.weekdayContainer) return;
        const firstDayOfWeek = self.l10n.firstDayOfWeek;
        let weekdays = [
            ...self.l10n.weekdays.shorthand
        ];
        if (firstDayOfWeek > 0 && firstDayOfWeek < weekdays.length) weekdays = [
            ...weekdays.splice(firstDayOfWeek, weekdays.length),
            ...weekdays.splice(0, firstDayOfWeek), 
        ];
        for(let i = self.config.showMonths; i--;)self.weekdayContainer.children[i].innerHTML = `
      <span class='flatpickr-weekday'>
        ${weekdays.join("</span><span class='flatpickr-weekday'>")}
      </span>
      `;
    }
    function buildWeeks() {
        self.calendarContainer.classList.add("hasWeeks");
        const weekWrapper = _dom.createElement("div", "flatpickr-weekwrapper");
        weekWrapper.appendChild(_dom.createElement("span", "flatpickr-weekday", self.l10n.weekAbbreviation));
        const weekNumbers = _dom.createElement("div", "flatpickr-weeks");
        weekWrapper.appendChild(weekNumbers);
        return {
            weekWrapper,
            weekNumbers
        };
    }
    function changeMonth(value, isOffset = true) {
        const delta = isOffset ? value : value - self.currentMonth;
        if (delta < 0 && self._hidePrevMonthArrow === true || delta > 0 && self._hideNextMonthArrow === true) return;
        self.currentMonth += delta;
        if (self.currentMonth < 0 || self.currentMonth > 11) {
            self.currentYear += self.currentMonth > 11 ? 1 : -1;
            self.currentMonth = (self.currentMonth + 12) % 12;
            triggerEvent("onYearChange");
            buildMonthSwitch();
        }
        buildDays();
        triggerEvent("onMonthChange");
        updateNavigationCurrentMonth();
    }
    function clear(triggerChangeEvent = true, toInitial = true) {
        self.input.value = "";
        if (self.altInput !== undefined) self.altInput.value = "";
        if (self.mobileInput !== undefined) self.mobileInput.value = "";
        self.selectedDates = [];
        self.latestSelectedDateObj = undefined;
        if (toInitial === true) {
            self.currentYear = self._initialDate.getFullYear();
            self.currentMonth = self._initialDate.getMonth();
        }
        if (self.config.enableTime === true) {
            const { hours , minutes , seconds  } = _dates.getDefaultHours(self.config);
            setHours(hours, minutes, seconds);
        }
        self.redraw();
        if (triggerChangeEvent) triggerEvent("onChange");
    }
    function close() {
        self.isOpen = false;
        if (!self.isMobile) {
            if (self.calendarContainer !== undefined) self.calendarContainer.classList.remove("open");
            if (self._input !== undefined) self._input.classList.remove("active");
        }
        triggerEvent("onClose");
    }
    function destroy() {
        if (self.config !== undefined) triggerEvent("onDestroy");
        for(let i = self._handlers.length; i--;)self._handlers[i].remove();
        self._handlers = [];
        if (self.mobileInput) {
            if (self.mobileInput.parentNode) self.mobileInput.parentNode.removeChild(self.mobileInput);
            self.mobileInput = undefined;
        } else if (self.calendarContainer && self.calendarContainer.parentNode) {
            if (self.config.static && self.calendarContainer.parentNode) {
                const wrapper = self.calendarContainer.parentNode;
                wrapper.lastChild && wrapper.removeChild(wrapper.lastChild);
                if (wrapper.parentNode) {
                    while(wrapper.firstChild)wrapper.parentNode.insertBefore(wrapper.firstChild, wrapper);
                    wrapper.parentNode.removeChild(wrapper);
                }
            } else self.calendarContainer.parentNode.removeChild(self.calendarContainer);
        }
        if (self.altInput) {
            self.input.type = "text";
            if (self.altInput.parentNode) self.altInput.parentNode.removeChild(self.altInput);
            delete self.altInput;
        }
        if (self.input) {
            self.input.type = self.input._type;
            self.input.classList.remove("flatpickr-input");
            self.input.removeAttribute("readonly");
        }
        [
            "_showTimeInput",
            "latestSelectedDateObj",
            "_hideNextMonthArrow",
            "_hidePrevMonthArrow",
            "__hideNextMonthArrow",
            "__hidePrevMonthArrow",
            "isMobile",
            "isOpen",
            "selectedDateElem",
            "minDateHasTime",
            "maxDateHasTime",
            "days",
            "daysContainer",
            "_input",
            "_positionElement",
            "innerContainer",
            "rContainer",
            "monthNav",
            "todayDateElem",
            "calendarContainer",
            "weekdayContainer",
            "prevMonthNav",
            "nextMonthNav",
            "monthsDropdownContainer",
            "currentMonthElement",
            "currentYearElement",
            "navigationCurrentMonth",
            "selectedDateElem",
            "config", 
        ].forEach((k)=>{
            try {
                delete self[k];
            } catch (_) {
            }
        });
    }
    function isCalendarElem(elem) {
        if (self.config.appendTo && self.config.appendTo.contains(elem)) return true;
        return self.calendarContainer.contains(elem);
    }
    function documentClick(e) {
        if (self.isOpen && !self.config.inline) {
            const eventTarget = _dom.getEventTarget(e);
            const isCalendarElement = isCalendarElem(eventTarget);
            const isInput = eventTarget === self.input || eventTarget === self.altInput || self.element.contains(eventTarget) || e.path && e.path.indexOf && (~e.path.indexOf(self.input) || ~e.path.indexOf(self.altInput));
            const lostFocus = e.type === "blur" ? isInput && e.relatedTarget && !isCalendarElem(e.relatedTarget) : !isInput && !isCalendarElement && !isCalendarElem(e.relatedTarget);
            const isIgnored = !self.config.ignoredFocusElements.some((elem)=>elem.contains(eventTarget)
            );
            if (lostFocus && isIgnored) {
                if (self.timeContainer !== undefined && self.minuteElement !== undefined && self.hourElement !== undefined && self.input.value !== "" && self.input.value !== undefined) updateTime();
                self.close();
                if (self.config && self.config.mode === "range" && self.selectedDates.length === 1) {
                    self.clear(false);
                    self.redraw();
                }
            }
        }
    }
    function changeYear(newYear) {
        if (!newYear || self.config.minDate && newYear < self.config.minDate.getFullYear() || self.config.maxDate && newYear > self.config.maxDate.getFullYear()) return;
        const newYearNum = newYear, isNewYear = self.currentYear !== newYearNum;
        self.currentYear = newYearNum || self.currentYear;
        if (self.config.maxDate && self.currentYear === self.config.maxDate.getFullYear()) self.currentMonth = Math.min(self.config.maxDate.getMonth(), self.currentMonth);
        else if (self.config.minDate && self.currentYear === self.config.minDate.getFullYear()) self.currentMonth = Math.max(self.config.minDate.getMonth(), self.currentMonth);
        if (isNewYear) {
            self.redraw();
            triggerEvent("onYearChange");
            buildMonthSwitch();
        }
    }
    function isEnabled(date, timeless = true) {
        var _a;
        const dateToCheck = self.parseDate(date, undefined, timeless);
        if (self.config.minDate && dateToCheck && _dates.compareDates(dateToCheck, self.config.minDate, timeless !== undefined ? timeless : !self.minDateHasTime) < 0 || self.config.maxDate && dateToCheck && _dates.compareDates(dateToCheck, self.config.maxDate, timeless !== undefined ? timeless : !self.maxDateHasTime) > 0) return false;
        if (!self.config.enable && self.config.disable.length === 0) return true;
        if (dateToCheck === undefined) return false;
        const bool = !!self.config.enable, array = (_a = self.config.enable) !== null && _a !== void 0 ? _a : self.config.disable;
        for(let i = 0, d; i < array.length; i++){
            d = array[i];
            if (typeof d === "function" && d(dateToCheck)) return bool;
            else if (d instanceof Date && dateToCheck !== undefined && d.getTime() === dateToCheck.getTime()) return bool;
            else if (typeof d === "string") {
                const parsed = self.parseDate(d, undefined, true);
                return parsed && parsed.getTime() === dateToCheck.getTime() ? bool : !bool;
            } else if (typeof d === "object" && dateToCheck !== undefined && d.from && d.to && dateToCheck.getTime() >= d.from.getTime() && dateToCheck.getTime() <= d.to.getTime()) return bool;
        }
        return !bool;
    }
    function isInView(elem) {
        if (self.daysContainer !== undefined) return elem.className.indexOf("hidden") === -1 && elem.className.indexOf("flatpickr-disabled") === -1 && self.daysContainer.contains(elem);
        return false;
    }
    function onBlur(e) {
        const isInput = e.target === self._input;
        if (isInput && (self.selectedDates.length > 0 || self._input.value.length > 0) && !(e.relatedTarget && isCalendarElem(e.relatedTarget))) self.setDate(self._input.value, true, e.target === self.altInput ? self.config.altFormat : self.config.dateFormat);
    }
    function onKeyDown(e) {
        const eventTarget = _dom.getEventTarget(e);
        const isInput = self.config.wrap ? element1.contains(eventTarget) : eventTarget === self._input;
        const allowInput = self.config.allowInput;
        const allowKeydown = self.isOpen && (!allowInput || !isInput);
        const allowInlineKeydown = self.config.inline && isInput && !allowInput;
        if (e.keyCode === 13 && isInput) {
            if (allowInput) {
                self.setDate(self._input.value, true, eventTarget === self.altInput ? self.config.altFormat : self.config.dateFormat);
                return eventTarget.blur();
            } else self.open();
        } else if (isCalendarElem(eventTarget) || allowKeydown || allowInlineKeydown) {
            const isTimeObj = !!self.timeContainer && self.timeContainer.contains(eventTarget);
            switch(e.keyCode){
                case 13:
                    if (isTimeObj) {
                        e.preventDefault();
                        updateTime();
                        focusAndClose();
                    } else selectDate(e);
                    break;
                case 27:
                    e.preventDefault();
                    focusAndClose();
                    break;
                case 8:
                case 46:
                    if (isInput && !self.config.allowInput) {
                        e.preventDefault();
                        self.clear();
                    }
                    break;
                case 37:
                case 39:
                    if (!isTimeObj && !isInput) {
                        e.preventDefault();
                        if (self.daysContainer !== undefined && (allowInput === false || document.activeElement && isInView(document.activeElement))) {
                            const delta = e.keyCode === 39 ? 1 : -1;
                            if (!e.ctrlKey) focusOnDay(undefined, delta);
                            else {
                                e.stopPropagation();
                                changeMonth(delta);
                                focusOnDay(getFirstAvailableDay(1), 0);
                            }
                        }
                    } else if (self.hourElement) self.hourElement.focus();
                    break;
                case 38:
                case 40:
                    e.preventDefault();
                    const delta = e.keyCode === 40 ? 1 : -1;
                    if (self.daysContainer && eventTarget.$i !== undefined || eventTarget === self.input || eventTarget === self.altInput) {
                        if (e.ctrlKey) {
                            e.stopPropagation();
                            changeYear(self.currentYear - delta);
                            focusOnDay(getFirstAvailableDay(1), 0);
                        } else if (!isTimeObj) focusOnDay(undefined, delta * 7);
                    } else if (eventTarget === self.currentYearElement) changeYear(self.currentYear - delta);
                    else if (self.config.enableTime) {
                        if (!isTimeObj && self.hourElement) self.hourElement.focus();
                        updateTime(e);
                        self._debouncedChange();
                    }
                    break;
                case 9:
                    if (isTimeObj) {
                        const elems = [
                            self.hourElement,
                            self.minuteElement,
                            self.secondElement,
                            self.amPM, 
                        ].concat(self.pluginElements).filter((x)=>x
                        );
                        const i = elems.indexOf(eventTarget);
                        if (i !== -1) {
                            const target = elems[i + (e.shiftKey ? -1 : 1)];
                            e.preventDefault();
                            (target || self._input).focus();
                        }
                    } else if (!self.config.noCalendar && self.daysContainer && self.daysContainer.contains(eventTarget) && e.shiftKey) {
                        e.preventDefault();
                        self._input.focus();
                    }
                    break;
                default:
                    break;
            }
        }
        if (self.amPM !== undefined && eventTarget === self.amPM) switch(e.key){
            case self.l10n.amPM[0].charAt(0):
            case self.l10n.amPM[0].charAt(0).toLowerCase():
                self.amPM.textContent = self.l10n.amPM[0];
                setHoursFromInputs();
                updateValue();
                break;
            case self.l10n.amPM[1].charAt(0):
            case self.l10n.amPM[1].charAt(0).toLowerCase():
                self.amPM.textContent = self.l10n.amPM[1];
                setHoursFromInputs();
                updateValue();
                break;
        }
        if (isInput || isCalendarElem(eventTarget)) triggerEvent("onKeyDown", e);
    }
    function onMouseOver(elem) {
        if (self.selectedDates.length !== 1 || elem && (!elem.classList.contains("flatpickr-day") || elem.classList.contains("flatpickr-disabled"))) return;
        const hoverDate = elem ? elem.dateObj.getTime() : self.days.firstElementChild.dateObj.getTime(), initialDate = self.parseDate(self.selectedDates[0], undefined, true).getTime(), rangeStartDate = Math.min(hoverDate, self.selectedDates[0].getTime()), rangeEndDate = Math.max(hoverDate, self.selectedDates[0].getTime());
        let containsDisabled = false;
        let minRange = 0, maxRange = 0;
        for(let t = rangeStartDate; t < rangeEndDate; t += _dates.duration.DAY)if (!isEnabled(new Date(t), true)) {
            containsDisabled = containsDisabled || t > rangeStartDate && t < rangeEndDate;
            if (t < initialDate && (!minRange || t > minRange)) minRange = t;
            else if (t > initialDate && (!maxRange || t < maxRange)) maxRange = t;
        }
        for(let m = 0; m < self.config.showMonths; m++){
            const month = self.daysContainer.children[m];
            for(let i = 0, l = month.children.length; i < l; i++){
                const dayElem = month.children[i], date = dayElem.dateObj;
                const timestamp = date.getTime();
                const outOfRange = minRange > 0 && timestamp < minRange || maxRange > 0 && timestamp > maxRange;
                if (outOfRange) {
                    dayElem.classList.add("notAllowed");
                    [
                        "inRange",
                        "startRange",
                        "endRange"
                    ].forEach((c)=>{
                        dayElem.classList.remove(c);
                    });
                    continue;
                } else if (containsDisabled && !outOfRange) continue;
                [
                    "startRange",
                    "inRange",
                    "endRange",
                    "notAllowed"
                ].forEach((c)=>{
                    dayElem.classList.remove(c);
                });
                if (elem !== undefined) {
                    elem.classList.add(hoverDate <= self.selectedDates[0].getTime() ? "startRange" : "endRange");
                    if (initialDate < hoverDate && timestamp === initialDate) dayElem.classList.add("startRange");
                    else if (initialDate > hoverDate && timestamp === initialDate) dayElem.classList.add("endRange");
                    if (timestamp >= minRange && (maxRange === 0 || timestamp <= maxRange) && _dates.isBetween(timestamp, initialDate, hoverDate)) dayElem.classList.add("inRange");
                }
            }
        }
    }
    function onResize() {
        if (self.isOpen && !self.config.static && !self.config.inline) positionCalendar();
    }
    function open(e, positionElement = self._positionElement) {
        if (self.isMobile === true) {
            if (e) {
                e.preventDefault();
                const eventTarget = _dom.getEventTarget(e);
                if (eventTarget) eventTarget.blur();
            }
            if (self.mobileInput !== undefined) {
                self.mobileInput.focus();
                self.mobileInput.click();
            }
            triggerEvent("onOpen");
            return;
        } else if (self._input.disabled || self.config.inline) return;
        const wasOpen = self.isOpen;
        self.isOpen = true;
        if (!wasOpen) {
            self.calendarContainer.classList.add("open");
            self._input.classList.add("active");
            triggerEvent("onOpen");
            positionCalendar(positionElement);
        }
        if (self.config.enableTime === true && self.config.noCalendar === true) {
            if (self.config.allowInput === false && (e === undefined || !self.timeContainer.contains(e.relatedTarget))) setTimeout(()=>self.hourElement.select()
            , 50);
        }
    }
    function minMaxDateSetter(type) {
        return (date)=>{
            const dateObj = self.config[`_${type}Date`] = self.parseDate(date, self.config.dateFormat);
            const inverseDateObj = self.config[`_${type === "min" ? "max" : "min"}Date`];
            if (dateObj !== undefined) self[type === "min" ? "minDateHasTime" : "maxDateHasTime"] = dateObj.getHours() > 0 || dateObj.getMinutes() > 0 || dateObj.getSeconds() > 0;
            if (self.selectedDates) {
                self.selectedDates = self.selectedDates.filter((d)=>isEnabled(d)
                );
                if (!self.selectedDates.length && type === "min") setHoursFromDate(dateObj);
                updateValue();
            }
            if (self.daysContainer) {
                redraw();
                if (dateObj !== undefined) self.currentYearElement[type] = dateObj.getFullYear().toString();
                else self.currentYearElement.removeAttribute(type);
                self.currentYearElement.disabled = !!inverseDateObj && dateObj !== undefined && inverseDateObj.getFullYear() === dateObj.getFullYear();
            }
        };
    }
    function parseConfig() {
        const boolOpts = [
            "wrap",
            "weekNumbers",
            "allowInput",
            "allowInvalidPreload",
            "clickOpens",
            "time_24hr",
            "enableTime",
            "noCalendar",
            "altInput",
            "shorthandCurrentMonth",
            "inline",
            "static",
            "enableSeconds",
            "disableMobile", 
        ];
        const userConfig = Object.assign(Object.assign({
        }, JSON.parse(JSON.stringify(element1.dataset || {
        }))), instanceConfig);
        const formats = {
        };
        self.config.parseDate = userConfig.parseDate;
        self.config.formatDate = userConfig.formatDate;
        Object.defineProperty(self.config, "enable", {
            get: ()=>self.config._enable
            ,
            set: (dates)=>{
                self.config._enable = parseDateRules(dates);
            }
        });
        Object.defineProperty(self.config, "disable", {
            get: ()=>self.config._disable
            ,
            set: (dates)=>{
                self.config._disable = parseDateRules(dates);
            }
        });
        const timeMode = userConfig.mode === "time";
        if (!userConfig.dateFormat && (userConfig.enableTime || timeMode)) {
            const defaultDateFormat = flatpickr.defaultConfig.dateFormat || _options.defaults.dateFormat;
            formats.dateFormat = userConfig.noCalendar || timeMode ? "H:i" + (userConfig.enableSeconds ? ":S" : "") : defaultDateFormat + " H:i" + (userConfig.enableSeconds ? ":S" : "");
        }
        if (userConfig.altInput && (userConfig.enableTime || timeMode) && !userConfig.altFormat) {
            const defaultAltFormat = flatpickr.defaultConfig.altFormat || _options.defaults.altFormat;
            formats.altFormat = userConfig.noCalendar || timeMode ? "h:i" + (userConfig.enableSeconds ? ":S K" : " K") : defaultAltFormat + ` h:i${userConfig.enableSeconds ? ":S" : ""} K`;
        }
        Object.defineProperty(self.config, "minDate", {
            get: ()=>self.config._minDate
            ,
            set: minMaxDateSetter("min")
        });
        Object.defineProperty(self.config, "maxDate", {
            get: ()=>self.config._maxDate
            ,
            set: minMaxDateSetter("max")
        });
        const minMaxTimeSetter = (type)=>(val)=>{
                self.config[type === "min" ? "_minTime" : "_maxTime"] = self.parseDate(val, "H:i:S");
            }
        ;
        Object.defineProperty(self.config, "minTime", {
            get: ()=>self.config._minTime
            ,
            set: minMaxTimeSetter("min")
        });
        Object.defineProperty(self.config, "maxTime", {
            get: ()=>self.config._maxTime
            ,
            set: minMaxTimeSetter("max")
        });
        if (userConfig.mode === "time") {
            self.config.noCalendar = true;
            self.config.enableTime = true;
        }
        Object.assign(self.config, formats, userConfig);
        for(let i = 0; i < boolOpts.length; i++)self.config[boolOpts[i]] = self.config[boolOpts[i]] === true || self.config[boolOpts[i]] === "true";
        _options.HOOKS.filter((hook)=>self.config[hook] !== undefined
        ).forEach((hook)=>{
            self.config[hook] = _utils.arrayify(self.config[hook] || []).map(bindToInstance);
        });
        self.isMobile = !self.config.disableMobile && !self.config.inline && self.config.mode === "single" && !self.config.disable.length && !self.config.enable && !self.config.weekNumbers && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        for(let i1 = 0; i1 < self.config.plugins.length; i1++){
            const pluginConf = self.config.plugins[i1](self) || {
            };
            for(const key in pluginConf){
                if (_options.HOOKS.indexOf(key) > -1) self.config[key] = _utils.arrayify(pluginConf[key]).map(bindToInstance).concat(self.config[key]);
                else if (typeof userConfig[key] === "undefined") self.config[key] = pluginConf[key];
            }
        }
        if (!userConfig.altInputClass) self.config.altInputClass = getInputElem().className + " " + self.config.altInputClass;
        triggerEvent("onParseConfig");
    }
    function getInputElem() {
        return self.config.wrap ? element1.querySelector("[data-input]") : element1;
    }
    function setupLocale() {
        if (typeof self.config.locale !== "object" && typeof flatpickr.l10ns[self.config.locale] === "undefined") self.config.errorHandler(new Error(`flatpickr: invalid locale ${self.config.locale}`));
        self.l10n = Object.assign(Object.assign({
        }, flatpickr.l10ns.default), typeof self.config.locale === "object" ? self.config.locale : self.config.locale !== "default" ? flatpickr.l10ns[self.config.locale] : undefined);
        _formatting.tokenRegex.K = `(${self.l10n.amPM[0]}|${self.l10n.amPM[1]}|${self.l10n.amPM[0].toLowerCase()}|${self.l10n.amPM[1].toLowerCase()})`;
        const userConfig = Object.assign(Object.assign({
        }, instanceConfig), JSON.parse(JSON.stringify(element1.dataset || {
        })));
        if (userConfig.time_24hr === undefined && flatpickr.defaultConfig.time_24hr === undefined) self.config.time_24hr = self.l10n.time_24hr;
        self.formatDate = _dates.createDateFormatter(self);
        self.parseDate = _dates.createDateParser({
            config: self.config,
            l10n: self.l10n
        });
    }
    function positionCalendar(customPositionElement) {
        if (typeof self.config.position === "function") return void self.config.position(self, customPositionElement);
        if (self.calendarContainer === undefined) return;
        triggerEvent("onPreCalendarPosition");
        const positionElement = customPositionElement || self._positionElement;
        const calendarHeight = Array.prototype.reduce.call(self.calendarContainer.children, (acc, child)=>acc + child.offsetHeight
        , 0), calendarWidth = self.calendarContainer.offsetWidth, configPos = self.config.position.split(" "), configPosVertical = configPos[0], configPosHorizontal = configPos.length > 1 ? configPos[1] : null, inputBounds = positionElement.getBoundingClientRect(), distanceFromBottom = window.innerHeight - inputBounds.bottom, showOnTop = configPosVertical === "above" || configPosVertical !== "below" && distanceFromBottom < calendarHeight && inputBounds.top > calendarHeight;
        const top = window.pageYOffset + inputBounds.top + (!showOnTop ? positionElement.offsetHeight + 2 : -calendarHeight - 2);
        _dom.toggleClass(self.calendarContainer, "arrowTop", !showOnTop);
        _dom.toggleClass(self.calendarContainer, "arrowBottom", showOnTop);
        if (self.config.inline) return;
        let left = window.pageXOffset + inputBounds.left;
        let isCenter = false;
        let isRight = false;
        if (configPosHorizontal === "center") {
            left -= (calendarWidth - inputBounds.width) / 2;
            isCenter = true;
        } else if (configPosHorizontal === "right") {
            left -= calendarWidth - inputBounds.width;
            isRight = true;
        }
        _dom.toggleClass(self.calendarContainer, "arrowLeft", !isCenter && !isRight);
        _dom.toggleClass(self.calendarContainer, "arrowCenter", isCenter);
        _dom.toggleClass(self.calendarContainer, "arrowRight", isRight);
        const right = window.document.body.offsetWidth - (window.pageXOffset + inputBounds.right);
        const rightMost = left + calendarWidth > window.document.body.offsetWidth;
        const centerMost = right + calendarWidth > window.document.body.offsetWidth;
        _dom.toggleClass(self.calendarContainer, "rightMost", rightMost);
        if (self.config.static) return;
        self.calendarContainer.style.top = `${top}px`;
        if (!rightMost) {
            self.calendarContainer.style.left = `${left}px`;
            self.calendarContainer.style.right = "auto";
        } else if (!centerMost) {
            self.calendarContainer.style.left = "auto";
            self.calendarContainer.style.right = `${right}px`;
        } else {
            const doc = getDocumentStyleSheet();
            if (doc === undefined) return;
            const bodyWidth = window.document.body.offsetWidth;
            const centerLeft = Math.max(0, bodyWidth / 2 - calendarWidth / 2);
            const centerBefore = ".flatpickr-calendar.centerMost:before";
            const centerAfter = ".flatpickr-calendar.centerMost:after";
            const centerIndex = doc.cssRules.length;
            const centerStyle = `{left:${inputBounds.left}px;right:auto;}`;
            _dom.toggleClass(self.calendarContainer, "rightMost", false);
            _dom.toggleClass(self.calendarContainer, "centerMost", true);
            doc.insertRule(`${centerBefore},${centerAfter}${centerStyle}`, centerIndex);
            self.calendarContainer.style.left = `${centerLeft}px`;
            self.calendarContainer.style.right = "auto";
        }
    }
    function getDocumentStyleSheet() {
        let editableSheet = null;
        for(let i = 0; i < document.styleSheets.length; i++){
            const sheet = document.styleSheets[i];
            try {
                sheet.cssRules;
            } catch (err) {
                continue;
            }
            editableSheet = sheet;
            break;
        }
        return editableSheet != null ? editableSheet : createStyleSheet();
    }
    function createStyleSheet() {
        const style = document.createElement("style");
        document.head.appendChild(style);
        return style.sheet;
    }
    function redraw() {
        if (self.config.noCalendar || self.isMobile) return;
        buildMonthSwitch();
        updateNavigationCurrentMonth();
        buildDays();
    }
    function focusAndClose() {
        self._input.focus();
        if (window.navigator.userAgent.indexOf("MSIE") !== -1 || navigator.msMaxTouchPoints !== undefined) setTimeout(self.close, 0);
        else self.close();
    }
    function selectDate(e) {
        e.preventDefault();
        e.stopPropagation();
        const isSelectable = (day)=>day.classList && day.classList.contains("flatpickr-day") && !day.classList.contains("flatpickr-disabled") && !day.classList.contains("notAllowed")
        ;
        const t = _dom.findParent(_dom.getEventTarget(e), isSelectable);
        if (t === undefined) return;
        const target = t;
        const selectedDate = self.latestSelectedDateObj = new Date(target.dateObj.getTime());
        const shouldChangeMonth = (selectedDate.getMonth() < self.currentMonth || selectedDate.getMonth() > self.currentMonth + self.config.showMonths - 1) && self.config.mode !== "range";
        self.selectedDateElem = target;
        if (self.config.mode === "single") self.selectedDates = [
            selectedDate
        ];
        else if (self.config.mode === "multiple") {
            const selectedIndex = isDateSelected(selectedDate);
            if (selectedIndex) self.selectedDates.splice(parseInt(selectedIndex), 1);
            else self.selectedDates.push(selectedDate);
        } else if (self.config.mode === "range") {
            if (self.selectedDates.length === 2) self.clear(false, false);
            self.latestSelectedDateObj = selectedDate;
            self.selectedDates.push(selectedDate);
            if (_dates.compareDates(selectedDate, self.selectedDates[0], true) !== 0) self.selectedDates.sort((a, b)=>a.getTime() - b.getTime()
            );
        }
        setHoursFromInputs();
        if (shouldChangeMonth) {
            const isNewYear = self.currentYear !== selectedDate.getFullYear();
            self.currentYear = selectedDate.getFullYear();
            self.currentMonth = selectedDate.getMonth();
            if (isNewYear) {
                triggerEvent("onYearChange");
                buildMonthSwitch();
            }
            triggerEvent("onMonthChange");
        }
        updateNavigationCurrentMonth();
        buildDays();
        updateValue();
        if (!shouldChangeMonth && self.config.mode !== "range" && self.config.showMonths === 1) focusOnDayElem(target);
        else if (self.selectedDateElem !== undefined && self.hourElement === undefined) self.selectedDateElem && self.selectedDateElem.focus();
        if (self.hourElement !== undefined) self.hourElement !== undefined && self.hourElement.focus();
        if (self.config.closeOnSelect) {
            const single = self.config.mode === "single" && !self.config.enableTime;
            const range = self.config.mode === "range" && self.selectedDates.length === 2 && !self.config.enableTime;
            if (single || range) focusAndClose();
        }
        triggerChange1();
    }
    const CALLBACKS = {
        locale: [
            setupLocale,
            updateWeekdays
        ],
        showMonths: [
            buildMonths,
            setCalendarWidth,
            buildWeekdays
        ],
        minDate: [
            jumpToDate
        ],
        maxDate: [
            jumpToDate
        ],
        clickOpens: [
            ()=>{
                if (self.config.clickOpens === true) {
                    bind(self._input, "focus", self.open);
                    bind(self._input, "click", self.open);
                } else {
                    self._input.removeEventListener("focus", self.open);
                    self._input.removeEventListener("click", self.open);
                }
            }, 
        ]
    };
    function set(option, value) {
        if (option !== null && typeof option === "object") {
            Object.assign(self.config, option);
            for(const key in option)if (CALLBACKS[key] !== undefined) CALLBACKS[key].forEach((x)=>x()
            );
        } else {
            self.config[option] = value;
            if (CALLBACKS[option] !== undefined) CALLBACKS[option].forEach((x)=>x()
            );
            else if (_options.HOOKS.indexOf(option) > -1) self.config[option] = _utils.arrayify(value);
        }
        self.redraw();
        updateValue(true);
    }
    function setSelectedDate(inputDate, format) {
        let dates = [];
        if (inputDate instanceof Array) dates = inputDate.map((d)=>self.parseDate(d, format)
        );
        else if (inputDate instanceof Date || typeof inputDate === "number") dates = [
            self.parseDate(inputDate, format)
        ];
        else if (typeof inputDate === "string") switch(self.config.mode){
            case "single":
            case "time":
                dates = [
                    self.parseDate(inputDate, format)
                ];
                break;
            case "multiple":
                dates = inputDate.split(self.config.conjunction).map((date)=>self.parseDate(date, format)
                );
                break;
            case "range":
                dates = inputDate.split(self.l10n.rangeSeparator).map((date)=>self.parseDate(date, format)
                );
                break;
            default:
                break;
        }
        else self.config.errorHandler(new Error(`Invalid date supplied: ${JSON.stringify(inputDate)}`));
        self.selectedDates = self.config.allowInvalidPreload ? dates : dates.filter((d)=>d instanceof Date && isEnabled(d, false)
        );
        if (self.config.mode === "range") self.selectedDates.sort((a, b)=>a.getTime() - b.getTime()
        );
    }
    function setDate(date, triggerChange = false, format = self.config.dateFormat) {
        if (date !== 0 && !date || date instanceof Array && date.length === 0) return self.clear(triggerChange);
        setSelectedDate(date, format);
        self.latestSelectedDateObj = self.selectedDates[self.selectedDates.length - 1];
        self.redraw();
        jumpToDate(undefined, triggerChange);
        setHoursFromDate();
        if (self.selectedDates.length === 0) self.clear(false);
        updateValue(triggerChange);
        if (triggerChange) triggerEvent("onChange");
    }
    function parseDateRules(arr) {
        return arr.slice().map((rule)=>{
            if (typeof rule === "string" || typeof rule === "number" || rule instanceof Date) return self.parseDate(rule, undefined, true);
            else if (rule && typeof rule === "object" && rule.from && rule.to) return {
                from: self.parseDate(rule.from, undefined),
                to: self.parseDate(rule.to, undefined)
            };
            return rule;
        }).filter((x)=>x
        );
    }
    function setupDates() {
        self.selectedDates = [];
        self.now = self.parseDate(self.config.now) || new Date();
        const preloadedDate = self.config.defaultDate || ((self.input.nodeName === "INPUT" || self.input.nodeName === "TEXTAREA") && self.input.placeholder && self.input.value === self.input.placeholder ? null : self.input.value);
        if (preloadedDate) setSelectedDate(preloadedDate, self.config.dateFormat);
        self._initialDate = self.selectedDates.length > 0 ? self.selectedDates[0] : self.config.minDate && self.config.minDate.getTime() > self.now.getTime() ? self.config.minDate : self.config.maxDate && self.config.maxDate.getTime() < self.now.getTime() ? self.config.maxDate : self.now;
        self.currentYear = self._initialDate.getFullYear();
        self.currentMonth = self._initialDate.getMonth();
        if (self.selectedDates.length > 0) self.latestSelectedDateObj = self.selectedDates[0];
        if (self.config.minTime !== undefined) self.config.minTime = self.parseDate(self.config.minTime, "H:i");
        if (self.config.maxTime !== undefined) self.config.maxTime = self.parseDate(self.config.maxTime, "H:i");
        self.minDateHasTime = !!self.config.minDate && (self.config.minDate.getHours() > 0 || self.config.minDate.getMinutes() > 0 || self.config.minDate.getSeconds() > 0);
        self.maxDateHasTime = !!self.config.maxDate && (self.config.maxDate.getHours() > 0 || self.config.maxDate.getMinutes() > 0 || self.config.maxDate.getSeconds() > 0);
    }
    function setupInputs() {
        self.input = getInputElem();
        if (!self.input) {
            self.config.errorHandler(new Error("Invalid input element specified"));
            return;
        }
        self.input._type = self.input.type;
        self.input.type = "text";
        self.input.classList.add("flatpickr-input");
        self._input = self.input;
        if (self.config.altInput) {
            self.altInput = _dom.createElement(self.input.nodeName, self.config.altInputClass);
            self._input = self.altInput;
            self.altInput.placeholder = self.input.placeholder;
            self.altInput.disabled = self.input.disabled;
            self.altInput.required = self.input.required;
            self.altInput.tabIndex = self.input.tabIndex;
            self.altInput.type = "text";
            self.input.setAttribute("type", "hidden");
            if (!self.config.static && self.input.parentNode) self.input.parentNode.insertBefore(self.altInput, self.input.nextSibling);
        }
        if (!self.config.allowInput) self._input.setAttribute("readonly", "readonly");
        self._positionElement = self.config.positionElement || self._input;
    }
    function setupMobile() {
        const inputType = self.config.enableTime ? self.config.noCalendar ? "time" : "datetime-local" : "date";
        self.mobileInput = _dom.createElement("input", self.input.className + " flatpickr-mobile");
        self.mobileInput.tabIndex = 1;
        self.mobileInput.type = inputType;
        self.mobileInput.disabled = self.input.disabled;
        self.mobileInput.required = self.input.required;
        self.mobileInput.placeholder = self.input.placeholder;
        self.mobileFormatStr = inputType === "datetime-local" ? "Y-m-d\\TH:i:S" : inputType === "date" ? "Y-m-d" : "H:i:S";
        if (self.selectedDates.length > 0) self.mobileInput.defaultValue = self.mobileInput.value = self.formatDate(self.selectedDates[0], self.mobileFormatStr);
        if (self.config.minDate) self.mobileInput.min = self.formatDate(self.config.minDate, "Y-m-d");
        if (self.config.maxDate) self.mobileInput.max = self.formatDate(self.config.maxDate, "Y-m-d");
        if (self.input.getAttribute("step")) self.mobileInput.step = String(self.input.getAttribute("step"));
        self.input.type = "hidden";
        if (self.altInput !== undefined) self.altInput.type = "hidden";
        try {
            if (self.input.parentNode) self.input.parentNode.insertBefore(self.mobileInput, self.input.nextSibling);
        } catch (_a) {
        }
        bind(self.mobileInput, "change", (e)=>{
            self.setDate(_dom.getEventTarget(e).value, false, self.mobileFormatStr);
            triggerEvent("onChange");
            triggerEvent("onClose");
        });
    }
    function toggle(e) {
        if (self.isOpen === true) return self.close();
        self.open(e);
    }
    function triggerEvent(event, data) {
        if (self.config === undefined) return;
        const hooks = self.config[event];
        if (hooks !== undefined && hooks.length > 0) for(let i = 0; hooks[i] && i < hooks.length; i++)hooks[i](self.selectedDates, self.input.value, self, data);
        if (event === "onChange") {
            self.input.dispatchEvent(createEvent("change"));
            self.input.dispatchEvent(createEvent("input"));
        }
    }
    function createEvent(name) {
        const e = document.createEvent("Event");
        e.initEvent(name, true, true);
        return e;
    }
    function isDateSelected(date) {
        for(let i = 0; i < self.selectedDates.length; i++){
            if (_dates.compareDates(self.selectedDates[i], date) === 0) return "" + i;
        }
        return false;
    }
    function isDateInRange(date) {
        if (self.config.mode !== "range" || self.selectedDates.length < 2) return false;
        return _dates.compareDates(date, self.selectedDates[0]) >= 0 && _dates.compareDates(date, self.selectedDates[1]) <= 0;
    }
    function updateNavigationCurrentMonth() {
        if (self.config.noCalendar || self.isMobile || !self.monthNav) return;
        self.yearElements.forEach((yearElement, i)=>{
            const d = new Date(self.currentYear, self.currentMonth, 1);
            d.setMonth(self.currentMonth + i);
            if (self.config.showMonths > 1 || self.config.monthSelectorType === "static") self.monthElements[i].textContent = _formatting.monthToStr(d.getMonth(), self.config.shorthandCurrentMonth, self.l10n) + " ";
            else self.monthsDropdownContainer.value = d.getMonth().toString();
            yearElement.value = d.getFullYear().toString();
        });
        self._hidePrevMonthArrow = self.config.minDate !== undefined && (self.currentYear === self.config.minDate.getFullYear() ? self.currentMonth <= self.config.minDate.getMonth() : self.currentYear < self.config.minDate.getFullYear());
        self._hideNextMonthArrow = self.config.maxDate !== undefined && (self.currentYear === self.config.maxDate.getFullYear() ? self.currentMonth + 1 > self.config.maxDate.getMonth() : self.currentYear > self.config.maxDate.getFullYear());
    }
    function getDateStr(format) {
        return self.selectedDates.map((dObj)=>self.formatDate(dObj, format)
        ).filter((d, i, arr)=>self.config.mode !== "range" || self.config.enableTime || arr.indexOf(d) === i
        ).join(self.config.mode !== "range" ? self.config.conjunction : self.l10n.rangeSeparator);
    }
    function updateValue(triggerChange = true) {
        if (self.mobileInput !== undefined && self.mobileFormatStr) self.mobileInput.value = self.latestSelectedDateObj !== undefined ? self.formatDate(self.latestSelectedDateObj, self.mobileFormatStr) : "";
        self.input.value = getDateStr(self.config.dateFormat);
        if (self.altInput !== undefined) self.altInput.value = getDateStr(self.config.altFormat);
        if (triggerChange !== false) triggerEvent("onValueUpdate");
    }
    function onMonthNavClick(e) {
        const eventTarget = _dom.getEventTarget(e);
        const isPrevMonth = self.prevMonthNav.contains(eventTarget);
        const isNextMonth = self.nextMonthNav.contains(eventTarget);
        if (isPrevMonth || isNextMonth) changeMonth(isPrevMonth ? -1 : 1);
        else if (self.yearElements.indexOf(eventTarget) >= 0) eventTarget.select();
        else if (eventTarget.classList.contains("arrowUp")) self.changeYear(self.currentYear + 1);
        else if (eventTarget.classList.contains("arrowDown")) self.changeYear(self.currentYear - 1);
    }
    function timeWrapper(e) {
        e.preventDefault();
        const isKeyDown = e.type === "keydown", eventTarget = _dom.getEventTarget(e), input = eventTarget;
        if (self.amPM !== undefined && eventTarget === self.amPM) self.amPM.textContent = self.l10n.amPM[_utils.int(self.amPM.textContent === self.l10n.amPM[0])];
        const min = parseFloat(input.getAttribute("min")), max = parseFloat(input.getAttribute("max")), step = parseFloat(input.getAttribute("step")), curValue = parseInt(input.value, 10), delta = e.delta || (isKeyDown ? e.which === 38 ? 1 : -1 : 0);
        let newValue = curValue + step * delta;
        if (typeof input.value !== "undefined" && input.value.length === 2) {
            const isHourElem = input === self.hourElement, isMinuteElem = input === self.minuteElement;
            if (newValue < min) {
                newValue = max + newValue + _utils.int(!isHourElem) + (_utils.int(isHourElem) && _utils.int(!self.amPM));
                if (isMinuteElem) incrementNumInput(undefined, -1, self.hourElement);
            } else if (newValue > max) {
                newValue = input === self.hourElement ? newValue - max - _utils.int(!self.amPM) : min;
                if (isMinuteElem) incrementNumInput(undefined, 1, self.hourElement);
            }
            if (self.amPM && isHourElem && (step === 1 ? newValue + curValue === 23 : Math.abs(newValue - curValue) > step)) self.amPM.textContent = self.l10n.amPM[_utils.int(self.amPM.textContent === self.l10n.amPM[0])];
            input.value = _utils.pad(newValue);
        }
    }
    init();
    return self;
}
function _flatpickr(nodeList, config) {
    const nodes = Array.prototype.slice.call(nodeList).filter((x)=>x instanceof HTMLElement
    );
    const instances = [];
    for(let i = 0; i < nodes.length; i++){
        const node = nodes[i];
        try {
            if (node.getAttribute("data-fp-omit") !== null) continue;
            if (node._flatpickr !== undefined) {
                node._flatpickr.destroy();
                node._flatpickr = undefined;
            }
            node._flatpickr = FlatpickrInstance(node, config || {
            });
            instances.push(node._flatpickr);
        } catch (e) {
            console.error(e);
        }
    }
    return instances.length === 1 ? instances[0] : instances;
}
if (typeof HTMLElement !== "undefined" && typeof HTMLCollection !== "undefined" && typeof NodeList !== "undefined") {
    HTMLCollection.prototype.flatpickr = NodeList.prototype.flatpickr = function(config) {
        return _flatpickr(this, config);
    };
    HTMLElement.prototype.flatpickr = function(config) {
        return _flatpickr([
            this
        ], config);
    };
}
var flatpickr = function(selector, config) {
    if (typeof selector === "string") return _flatpickr(window.document.querySelectorAll(selector), config);
    else if (selector instanceof Node) return _flatpickr([
        selector
    ], config);
    else return _flatpickr(selector, config);
};
flatpickr.defaultConfig = {
};
flatpickr.l10ns = {
    en: Object.assign({
    }, _defaultDefault.default),
    default: Object.assign({
    }, _defaultDefault.default)
};
flatpickr.localize = (l10n)=>{
    flatpickr.l10ns.default = Object.assign(Object.assign({
    }, flatpickr.l10ns.default), l10n);
};
flatpickr.setDefaults = (config)=>{
    flatpickr.defaultConfig = Object.assign(Object.assign({
    }, flatpickr.defaultConfig), config);
};
flatpickr.parseDate = _dates.createDateParser({
});
flatpickr.formatDate = _dates.createDateFormatter({
});
flatpickr.compareDates = _dates.compareDates;
if (typeof jQuery !== "undefined" && typeof jQuery.fn !== "undefined") jQuery.fn.flatpickr = function(config) {
    return _flatpickr(this, config);
};
Date.prototype.fp_incr = function(days) {
    return new Date(this.getFullYear(), this.getMonth(), this.getDate() + (typeof days === "string" ? parseInt(days, 10) : days));
};
if (typeof window !== "undefined") window.flatpickr = flatpickr;
exports.default = flatpickr;

},{"./types/options":"jDXoW","./l10n/default":"1vtFG","./utils":"hwEZL","./utils/dom":"id3zQ","./utils/dates":"hY2LD","./utils/formatting":"lamdT","./utils/polyfills":"1MZyH","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"jDXoW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "HOOKS", ()=>HOOKS
);
parcelHelpers.export(exports, "defaults", ()=>defaults
);
const HOOKS = [
    "onChange",
    "onClose",
    "onDayCreate",
    "onDestroy",
    "onKeyDown",
    "onMonthChange",
    "onOpen",
    "onParseConfig",
    "onReady",
    "onValueUpdate",
    "onYearChange",
    "onPreCalendarPosition", 
];
const defaults = {
    _disable: [],
    allowInput: false,
    allowInvalidPreload: false,
    altFormat: "F j, Y",
    altInput: false,
    altInputClass: "form-control input",
    animate: typeof window === "object" && window.navigator.userAgent.indexOf("MSIE") === -1,
    ariaDateFormat: "F j, Y",
    autoFillDefaultTime: true,
    clickOpens: true,
    closeOnSelect: true,
    conjunction: ", ",
    dateFormat: "Y-m-d",
    defaultHour: 12,
    defaultMinute: 0,
    defaultSeconds: 0,
    disable: [],
    disableMobile: false,
    enableSeconds: false,
    enableTime: false,
    errorHandler: (err)=>typeof console !== "undefined" && console.warn(err)
    ,
    getWeek: (givenDate)=>{
        const date = new Date(givenDate.getTime());
        date.setHours(0, 0, 0, 0);
        date.setDate(date.getDate() + 3 - (date.getDay() + 6) % 7);
        var week1 = new Date(date.getFullYear(), 0, 4);
        return 1 + Math.round(((date.getTime() - week1.getTime()) / 86400000 - 3 + (week1.getDay() + 6) % 7) / 7);
    },
    hourIncrement: 1,
    ignoredFocusElements: [],
    inline: false,
    locale: "default",
    minuteIncrement: 5,
    mode: "single",
    monthSelectorType: "dropdown",
    nextArrow: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M13.207 8.472l-7.854 7.854-0.707-0.707 7.146-7.146-7.146-7.148 0.707-0.707 7.854 7.854z' /></svg>",
    noCalendar: false,
    now: new Date(),
    onChange: [],
    onClose: [],
    onDayCreate: [],
    onDestroy: [],
    onKeyDown: [],
    onMonthChange: [],
    onOpen: [],
    onParseConfig: [],
    onReady: [],
    onValueUpdate: [],
    onYearChange: [],
    onPreCalendarPosition: [],
    plugins: [],
    position: "auto",
    positionElement: undefined,
    prevArrow: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M5.207 8.471l7.146 7.147-0.707 0.707-7.853-7.854 7.854-7.853 0.707 0.707-7.147 7.146z' /></svg>",
    shorthandCurrentMonth: false,
    showMonths: 1,
    static: false,
    time_24hr: false,
    weekNumbers: false,
    wrap: false
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"ciiiV":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"1vtFG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "english", ()=>english
);
const english = {
    weekdays: {
        shorthand: [
            "Sun",
            "Mon",
            "Tue",
            "Wed",
            "Thu",
            "Fri",
            "Sat"
        ],
        longhand: [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday", 
        ]
    },
    months: {
        shorthand: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec", 
        ],
        longhand: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December", 
        ]
    },
    daysInMonth: [
        31,
        28,
        31,
        30,
        31,
        30,
        31,
        31,
        30,
        31,
        30,
        31
    ],
    firstDayOfWeek: 0,
    ordinal: (nth)=>{
        const s = nth % 100;
        if (s > 3 && s < 21) return "th";
        switch(s % 10){
            case 1:
                return "st";
            case 2:
                return "nd";
            case 3:
                return "rd";
            default:
                return "th";
        }
    },
    rangeSeparator: " to ",
    weekAbbreviation: "Wk",
    scrollTitle: "Scroll to increment",
    toggleTitle: "Click to toggle",
    amPM: [
        "AM",
        "PM"
    ],
    yearAriaLabel: "Year",
    monthAriaLabel: "Month",
    hourAriaLabel: "Hour",
    minuteAriaLabel: "Minute",
    time_24hr: false
};
exports.default = english;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"hwEZL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "pad", ()=>pad
);
parcelHelpers.export(exports, "int", ()=>int
);
parcelHelpers.export(exports, "debounce", ()=>debounce
);
parcelHelpers.export(exports, "arrayify", ()=>arrayify
);
const pad = (number, length = 2)=>`000${number}`.slice(length * -1)
;
const int = (bool)=>bool === true ? 1 : 0
;
function debounce(fn, wait) {
    let t;
    return function() {
        clearTimeout(t);
        t = setTimeout(()=>fn.apply(this, arguments)
        , wait);
    };
}
const arrayify = (obj)=>obj instanceof Array ? obj : [
        obj
    ]
;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"id3zQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "toggleClass", ()=>toggleClass
);
parcelHelpers.export(exports, "createElement", ()=>createElement
);
parcelHelpers.export(exports, "clearNode", ()=>clearNode
);
parcelHelpers.export(exports, "findParent", ()=>findParent
);
parcelHelpers.export(exports, "createNumberInput", ()=>createNumberInput
);
parcelHelpers.export(exports, "getEventTarget", ()=>getEventTarget
);
function toggleClass(elem, className, bool) {
    if (bool === true) return elem.classList.add(className);
    elem.classList.remove(className);
}
function createElement(tag, className, content) {
    const e = window.document.createElement(tag);
    className = className || "";
    content = content || "";
    e.className = className;
    if (content !== undefined) e.textContent = content;
    return e;
}
function clearNode(node) {
    while(node.firstChild)node.removeChild(node.firstChild);
}
function findParent(node, condition) {
    if (condition(node)) return node;
    else if (node.parentNode) return findParent(node.parentNode, condition);
    return undefined;
}
function createNumberInput(inputClassName, opts) {
    const wrapper = createElement("div", "numInputWrapper"), numInput = createElement("input", "numInput " + inputClassName), arrowUp = createElement("span", "arrowUp"), arrowDown = createElement("span", "arrowDown");
    if (navigator.userAgent.indexOf("MSIE 9.0") === -1) numInput.type = "number";
    else {
        numInput.type = "text";
        numInput.pattern = "\\d*";
    }
    if (opts !== undefined) for(const key in opts)numInput.setAttribute(key, opts[key]);
    wrapper.appendChild(numInput);
    wrapper.appendChild(arrowUp);
    wrapper.appendChild(arrowDown);
    return wrapper;
}
function getEventTarget(event) {
    try {
        if (typeof event.composedPath === "function") {
            const path = event.composedPath();
            return path[0];
        }
        return event.target;
    } catch (error) {
        return event.target;
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"hY2LD":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createDateFormatter", ()=>createDateFormatter
);
parcelHelpers.export(exports, "createDateParser", ()=>createDateParser
);
parcelHelpers.export(exports, "compareDates", ()=>compareDates
);
parcelHelpers.export(exports, "compareTimes", ()=>compareTimes
);
parcelHelpers.export(exports, "isBetween", ()=>isBetween
);
parcelHelpers.export(exports, "duration", ()=>duration
);
parcelHelpers.export(exports, "getDefaultHours", ()=>getDefaultHours
);
var _formatting = require("./formatting");
var _options = require("../types/options");
var _default = require("../l10n/default");
const createDateFormatter = ({ config =_options.defaults , l10n =_default.english , isMobile =false ,  })=>(dateObj, frmt, overrideLocale)=>{
        const locale = overrideLocale || l10n;
        if (config.formatDate !== undefined && !isMobile) return config.formatDate(dateObj, frmt, locale);
        return frmt.split("").map((c, i, arr)=>_formatting.formats[c] && arr[i - 1] !== "\\" ? _formatting.formats[c](dateObj, locale, config) : c !== "\\" ? c : ""
        ).join("");
    }
;
const createDateParser = ({ config =_options.defaults , l10n =_default.english  })=>(date, givenFormat, timeless, customLocale)=>{
        if (date !== 0 && !date) return undefined;
        const locale = customLocale || l10n;
        let parsedDate;
        const dateOrig = date;
        if (date instanceof Date) parsedDate = new Date(date.getTime());
        else if (typeof date !== "string" && date.toFixed !== undefined) parsedDate = new Date(date);
        else if (typeof date === "string") {
            const format = givenFormat || (config || _options.defaults).dateFormat;
            const datestr = String(date).trim();
            if (datestr === "today") {
                parsedDate = new Date();
                timeless = true;
            } else if (/Z$/.test(datestr) || /GMT$/.test(datestr)) parsedDate = new Date(date);
            else if (config && config.parseDate) parsedDate = config.parseDate(date, format);
            else {
                parsedDate = !config || !config.noCalendar ? new Date(new Date().getFullYear(), 0, 1, 0, 0, 0, 0) : new Date(new Date().setHours(0, 0, 0, 0));
                let matched, ops = [];
                for(let i = 0, matchIndex = 0, regexStr = ""; i < format.length; i++){
                    const token = format[i];
                    const isBackSlash = token === "\\";
                    const escaped = format[i - 1] === "\\" || isBackSlash;
                    if (_formatting.tokenRegex[token] && !escaped) {
                        regexStr += _formatting.tokenRegex[token];
                        const match = new RegExp(regexStr).exec(date);
                        if (match && (matched = true)) ops[token !== "Y" ? "push" : "unshift"]({
                            fn: _formatting.revFormat[token],
                            val: match[++matchIndex]
                        });
                    } else if (!isBackSlash) regexStr += ".";
                    ops.forEach(({ fn , val  })=>parsedDate = fn(parsedDate, val, locale) || parsedDate
                    );
                }
                parsedDate = matched ? parsedDate : undefined;
            }
        }
        if (!(parsedDate instanceof Date && !isNaN(parsedDate.getTime()))) {
            config.errorHandler(new Error(`Invalid date provided: ${dateOrig}`));
            return undefined;
        }
        if (timeless === true) parsedDate.setHours(0, 0, 0, 0);
        return parsedDate;
    }
;
function compareDates(date1, date2, timeless = true) {
    if (timeless !== false) return new Date(date1.getTime()).setHours(0, 0, 0, 0) - new Date(date2.getTime()).setHours(0, 0, 0, 0);
    return date1.getTime() - date2.getTime();
}
function compareTimes(date1, date2) {
    return 3600 * (date1.getHours() - date2.getHours()) + 60 * (date1.getMinutes() - date2.getMinutes()) + date1.getSeconds() - date2.getSeconds();
}
const isBetween = (ts, ts1, ts2)=>{
    return ts > Math.min(ts1, ts2) && ts < Math.max(ts1, ts2);
};
const duration = {
    DAY: 86400000
};
function getDefaultHours(config) {
    let hours = config.defaultHour;
    let minutes = config.defaultMinute;
    let seconds = config.defaultSeconds;
    if (config.minDate !== undefined) {
        const minHour = config.minDate.getHours();
        const minMinutes = config.minDate.getMinutes();
        const minSeconds = config.minDate.getSeconds();
        if (hours < minHour) hours = minHour;
        if (hours === minHour && minutes < minMinutes) minutes = minMinutes;
        if (hours === minHour && minutes === minMinutes && seconds < minSeconds) seconds = config.minDate.getSeconds();
    }
    if (config.maxDate !== undefined) {
        const maxHr = config.maxDate.getHours();
        const maxMinutes = config.maxDate.getMinutes();
        hours = Math.min(hours, maxHr);
        if (hours === maxHr) minutes = Math.min(maxMinutes, minutes);
        if (hours === maxHr && minutes === maxMinutes) seconds = config.maxDate.getSeconds();
    }
    return {
        hours,
        minutes,
        seconds
    };
}

},{"./formatting":"lamdT","../types/options":"jDXoW","../l10n/default":"1vtFG","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"lamdT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "monthToStr", ()=>monthToStr
);
parcelHelpers.export(exports, "revFormat", ()=>revFormat
);
parcelHelpers.export(exports, "tokenRegex", ()=>tokenRegex
);
parcelHelpers.export(exports, "formats", ()=>formats
);
var _utils = require("../utils");
const doNothing = ()=>undefined
;
const monthToStr = (monthNumber, shorthand, locale)=>locale.months[shorthand ? "shorthand" : "longhand"][monthNumber]
;
const revFormat = {
    D: doNothing,
    F: function(dateObj, monthName, locale) {
        dateObj.setMonth(locale.months.longhand.indexOf(monthName));
    },
    G: (dateObj, hour)=>{
        dateObj.setHours(parseFloat(hour));
    },
    H: (dateObj, hour)=>{
        dateObj.setHours(parseFloat(hour));
    },
    J: (dateObj, day)=>{
        dateObj.setDate(parseFloat(day));
    },
    K: (dateObj, amPM, locale)=>{
        dateObj.setHours(dateObj.getHours() % 12 + 12 * _utils.int(new RegExp(locale.amPM[1], "i").test(amPM)));
    },
    M: function(dateObj, shortMonth, locale) {
        dateObj.setMonth(locale.months.shorthand.indexOf(shortMonth));
    },
    S: (dateObj, seconds)=>{
        dateObj.setSeconds(parseFloat(seconds));
    },
    U: (_, unixSeconds)=>new Date(parseFloat(unixSeconds) * 1000)
    ,
    W: function(dateObj, weekNum, locale) {
        const weekNumber = parseInt(weekNum);
        const date = new Date(dateObj.getFullYear(), 0, 2 + (weekNumber - 1) * 7, 0, 0, 0, 0);
        date.setDate(date.getDate() - date.getDay() + locale.firstDayOfWeek);
        return date;
    },
    Y: (dateObj, year)=>{
        dateObj.setFullYear(parseFloat(year));
    },
    Z: (_, ISODate)=>new Date(ISODate)
    ,
    d: (dateObj, day)=>{
        dateObj.setDate(parseFloat(day));
    },
    h: (dateObj, hour)=>{
        dateObj.setHours(parseFloat(hour));
    },
    i: (dateObj, minutes)=>{
        dateObj.setMinutes(parseFloat(minutes));
    },
    j: (dateObj, day)=>{
        dateObj.setDate(parseFloat(day));
    },
    l: doNothing,
    m: (dateObj, month)=>{
        dateObj.setMonth(parseFloat(month) - 1);
    },
    n: (dateObj, month)=>{
        dateObj.setMonth(parseFloat(month) - 1);
    },
    s: (dateObj, seconds)=>{
        dateObj.setSeconds(parseFloat(seconds));
    },
    u: (_, unixMillSeconds)=>new Date(parseFloat(unixMillSeconds))
    ,
    w: doNothing,
    y: (dateObj, year)=>{
        dateObj.setFullYear(2000 + parseFloat(year));
    }
};
const tokenRegex = {
    D: "(\\w+)",
    F: "(\\w+)",
    G: "(\\d\\d|\\d)",
    H: "(\\d\\d|\\d)",
    J: "(\\d\\d|\\d)\\w+",
    K: "",
    M: "(\\w+)",
    S: "(\\d\\d|\\d)",
    U: "(.+)",
    W: "(\\d\\d|\\d)",
    Y: "(\\d{4})",
    Z: "(.+)",
    d: "(\\d\\d|\\d)",
    h: "(\\d\\d|\\d)",
    i: "(\\d\\d|\\d)",
    j: "(\\d\\d|\\d)",
    l: "(\\w+)",
    m: "(\\d\\d|\\d)",
    n: "(\\d\\d|\\d)",
    s: "(\\d\\d|\\d)",
    u: "(.+)",
    w: "(\\d\\d|\\d)",
    y: "(\\d{2})"
};
const formats = {
    Z: (date)=>date.toISOString()
    ,
    D: function(date, locale, options) {
        return locale.weekdays.shorthand[formats.w(date, locale, options)];
    },
    F: function(date, locale, options) {
        return monthToStr(formats.n(date, locale, options) - 1, false, locale);
    },
    G: function(date, locale, options) {
        return _utils.pad(formats.h(date, locale, options));
    },
    H: (date)=>_utils.pad(date.getHours())
    ,
    J: function(date, locale) {
        return locale.ordinal !== undefined ? date.getDate() + locale.ordinal(date.getDate()) : date.getDate();
    },
    K: (date, locale)=>locale.amPM[_utils.int(date.getHours() > 11)]
    ,
    M: function(date, locale) {
        return monthToStr(date.getMonth(), true, locale);
    },
    S: (date)=>_utils.pad(date.getSeconds())
    ,
    U: (date)=>date.getTime() / 1000
    ,
    W: function(date, _, options) {
        return options.getWeek(date);
    },
    Y: (date)=>_utils.pad(date.getFullYear(), 4)
    ,
    d: (date)=>_utils.pad(date.getDate())
    ,
    h: (date)=>date.getHours() % 12 ? date.getHours() % 12 : 12
    ,
    i: (date)=>_utils.pad(date.getMinutes())
    ,
    j: (date)=>date.getDate()
    ,
    l: function(date, locale) {
        return locale.weekdays.longhand[date.getDay()];
    },
    m: (date)=>_utils.pad(date.getMonth() + 1)
    ,
    n: (date)=>date.getMonth() + 1
    ,
    s: (date)=>date.getSeconds()
    ,
    u: (date)=>date.getTime()
    ,
    w: (date)=>date.getDay()
    ,
    y: (date)=>String(date.getFullYear()).substring(2)
};

},{"../utils":"hwEZL","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"1MZyH":[function(require,module,exports) {
"use strict";
if (typeof Object.assign !== "function") Object.assign = function(target, ...args) {
    if (!target) throw TypeError("Cannot convert undefined or null to object");
    for (const source of args)if (source) Object.keys(source).forEach((key)=>target[key] = source[key]
    );
    return target;
};

},{}],"aL2mM":[function() {},{}],"heCpW":[function(require,module,exports) {
var global = arguments[3];
/*
* Notiflix Notify AIO (https://notiflix.github.io)
* Description: This file has been created automatically that using "notiflix.js", and "notiflix.css" files.
* Version: 3.2.2
* Author: Furkan MT (https://github.com/furcan)
* Copyright 2019 - 2021 Notiflix, MIT Licence (https://opensource.org/licenses/MIT)
*/ /* global define */ (function(root, factory) {
    if (typeof define === 'function' && define.amd) define([], function() {
        return factory(root);
    });
    else if (typeof module === 'object' && typeof module.exports === 'object') module.exports = factory(root);
    else root.Notiflix = factory(root);
})(typeof global !== 'undefined' ? global : typeof window !== 'undefined' ? window : this, function(window) {
    'use strict';
    // COMMON: SSR check: begin
    if (typeof window === 'undefined' && typeof window.document === 'undefined') return false;
    // COMMON: SSR check: end
    // COMMON: Variables: begin
    var notiflixNamespace = 'Notiflix';
    var notiflixConsoleDocs = '\n\nVisit documentation page to learn more: https://notiflix.github.io/documentation';
    var defaultFontFamily = '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif';
    // COMMON: Variables: end
    // NOTIFY: Default Settings: begin
    var typesNotify = {
        Success: 'Success',
        Failure: 'Failure',
        Warning: 'Warning',
        Info: 'Info'
    };
    var newNotifySettings;
    var notifySettings = {
        wrapID: 'NotiflixNotifyWrap',
        overlayID: 'NotiflixNotifyOverlay',
        width: '280px',
        position: 'right-top',
        distance: '10px',
        opacity: 1,
        borderRadius: '5px',
        rtl: false,
        timeout: 3000,
        messageMaxLength: 110,
        backOverlay: false,
        backOverlayColor: 'rgba(0,0,0,0.5)',
        plainText: true,
        showOnlyTheLastOne: false,
        clickToClose: false,
        pauseOnHover: true,
        ID: 'NotiflixNotify',
        className: 'notiflix-notify',
        zindex: 4001,
        fontFamily: 'Quicksand',
        fontSize: '13px',
        cssAnimation: true,
        cssAnimationDuration: 400,
        cssAnimationStyle: 'fade',
        closeButton: false,
        useIcon: true,
        useFontAwesome: false,
        fontAwesomeIconStyle: 'basic',
        fontAwesomeIconSize: '34px',
        success: {
            background: '#32c682',
            textColor: '#fff',
            childClassName: 'notiflix-notify-success',
            notiflixIconColor: 'rgba(0,0,0,0.2)',
            fontAwesomeClassName: 'fas fa-check-circle',
            fontAwesomeIconColor: 'rgba(0,0,0,0.2)',
            backOverlayColor: 'rgba(50,198,130,0.2)'
        },
        failure: {
            background: '#ff5549',
            textColor: '#fff',
            childClassName: 'notiflix-notify-failure',
            notiflixIconColor: 'rgba(0,0,0,0.2)',
            fontAwesomeClassName: 'fas fa-times-circle',
            fontAwesomeIconColor: 'rgba(0,0,0,0.2)',
            backOverlayColor: 'rgba(255,85,73,0.2)'
        },
        warning: {
            background: '#eebf31',
            textColor: '#fff',
            childClassName: 'notiflix-notify-warning',
            notiflixIconColor: 'rgba(0,0,0,0.2)',
            fontAwesomeClassName: 'fas fa-exclamation-circle',
            fontAwesomeIconColor: 'rgba(0,0,0,0.2)',
            backOverlayColor: 'rgba(238,191,49,0.2)'
        },
        info: {
            background: '#26c0d3',
            textColor: '#fff',
            childClassName: 'notiflix-notify-info',
            notiflixIconColor: 'rgba(0,0,0,0.2)',
            fontAwesomeClassName: 'fas fa-info-circle',
            fontAwesomeIconColor: 'rgba(0,0,0,0.2)',
            backOverlayColor: 'rgba(38,192,211,0.2)'
        }
    };
    // NOTIFY: Default Settings: end
    // COMMON: Console Error: begin
    var commonConsoleError = function(message) {
        return console.error('%c ' + notiflixNamespace + ' Error ', 'padding:2px;border-radius:20px;color:#fff;background:#ff5549', '\n' + message + notiflixConsoleDocs);
    };
    // COMMON: Console Error: end
    // COMMON: Check Head or Body: begin
    var commonCheckHeadOrBody = function(element) {
        if (!element) element = 'head';
        if (window.document[element] === null) {
            commonConsoleError('\nNotiflix needs to be appended to the "<' + element + '>" element, but you called it before the "<' + element + '>" element has been created.');
            return false;
        }
        return true;
    };
    // COMMON: Check Head or Body: end
    // COMMON: Set Internal CSS Codes: begin
    var commonSetInternalCSSCodes = function(getInternalCSSCodes, styleElementId) {
        // check doc head
        if (!commonCheckHeadOrBody('head')) return false;
        // internal css
        if (getInternalCSSCodes() !== null && !window.document.getElementById(styleElementId)) {
            var internalCSS = window.document.createElement('style');
            internalCSS.id = styleElementId;
            internalCSS.innerHTML = getInternalCSSCodes();
            window.document.head.appendChild(internalCSS);
        }
    };
    // COMMON: Set Internal CSS Codes: end
    // COMMON: Extend Options: begin
    var commonExtendOptions = function() {
        // variables
        var extended = {
        };
        var deep = false;
        var i = 0;
        // check if a deep merge
        if (Object.prototype.toString.call(arguments[0]) === '[object Boolean]') {
            deep = arguments[0];
            i++;
        }
        // merge the object into the extended object
        var merge = function(obj) {
            for(var prop in obj)if (Object.prototype.hasOwnProperty.call(obj, prop)) {
                // if property is an object, merge properties
                if (deep && Object.prototype.toString.call(obj[prop]) === '[object Object]') extended[prop] = commonExtendOptions(extended[prop], obj[prop]);
                else extended[prop] = obj[prop];
            }
        };
        // loop through each object and conduct a merge
        for(; i < arguments.length; i++)merge(arguments[i]);
        return extended;
    };
    // COMMON: Extend Options: end
    // COMMON: Get Plaintext: begin
    var commonGetPlaintext = function(html) {
        var htmlPool = window.document.createElement('div');
        htmlPool.innerHTML = html;
        return htmlPool.textContent || htmlPool.innerText || '';
    };
    // COMMON: Get Plaintext: end
    // NOTIFY: Get Internal CSS Codes: begin
    var notifyGetInternalCSSCodes = function() {
        var notifyCSS = '[id^=NotiflixNotifyWrap]{pointer-events:none;position:fixed;z-index:4001;opacity:1;right:10px;top:10px;width:280px;max-width:96%;-webkit-box-sizing:border-box;box-sizing:border-box;background:transparent}[id^=NotiflixNotifyWrap].nx-flex-center-center{max-height:calc(100vh - 20px);overflow-x:hidden;overflow-y:auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;margin:auto}[id^=NotiflixNotifyWrap]::-webkit-scrollbar{width:0;height:0}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-thumb{background:transparent}[id^=NotiflixNotifyWrap]::-webkit-scrollbar-track{background:transparent}[id^=NotiflixNotifyWrap] *{-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyOverlay]{-webkit-transition:background .3s ease-in-out;-o-transition:background .3s ease-in-out;transition:background .3s ease-in-out}[id^=NotiflixNotifyWrap]>div{pointer-events:all;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:"Quicksand",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;width:100%;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;position:relative;margin:0 0 10px;border-radius:5px;background:#1e1e1e;color:#fff;padding:10px 12px;font-size:14px;line-height:1.4}[id^=NotiflixNotifyWrap]>div:last-child{margin:0}[id^=NotiflixNotifyWrap]>div.nx-with-callback{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-icon{padding:8px;min-height:56px}[id^=NotiflixNotifyWrap]>div.nx-paused{cursor:auto}[id^=NotiflixNotifyWrap]>div.nx-click-to-close{cursor:pointer}[id^=NotiflixNotifyWrap]>div.nx-with-close-button{padding:10px 36px 10px 12px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button{padding:6px 36px 6px 6px}[id^=NotiflixNotifyWrap]>div>span.nx-message{cursor:inherit;font-weight:normal;font-family:inherit!important;word-break:break-all;word-break:break-word}[id^=NotiflixNotifyWrap]>div>span.nx-close-button{cursor:pointer;-webkit-transition:all .2s ease-in-out;-o-transition:all .2s ease-in-out;transition:all .2s ease-in-out;position:absolute;right:8px;top:0;bottom:0;margin:auto;color:inherit;width:20px;height:20px}[id^=NotiflixNotifyWrap]>div>span.nx-close-button:hover{-webkit-transform:rotate(90deg);transform:rotate(90deg)}[id^=NotiflixNotifyWrap]>div>span.nx-close-button>svg{position:absolute;width:16px;height:16px;right:2px;top:2px}[id^=NotiflixNotifyWrap]>div>.nx-message-icon{position:absolute;width:40px;height:40px;font-size:30px;line-height:40px;text-align:center;left:8px;top:0;bottom:0;margin:auto;border-radius:inherit}[id^=NotiflixNotifyWrap]>div>.nx-message-icon-fa.nx-message-icon-fa-shadow{color:inherit;background:rgba(0,0,0,.15);-webkit-box-shadow:inset 0 0 34px rgba(0,0,0,.2);box-shadow:inset 0 0 34px rgba(0,0,0,.2);text-shadow:0 0 10px rgba(0,0,0,.3)}[id^=NotiflixNotifyWrap]>div>span.nx-with-icon{position:relative;float:left;width:calc(100% - 40px);margin:0 0 0 40px;padding:0 0 0 10px;-webkit-box-sizing:border-box;box-sizing:border-box}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>.nx-message-icon{left:auto;right:8px}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-with-icon{padding:0 10px 0 0;margin:0 40px 0 0}[id^=NotiflixNotifyWrap]>div.nx-rtl-on>span.nx-close-button{right:auto;left:8px}[id^=NotiflixNotifyWrap]>div.nx-with-icon.nx-with-close-button.nx-rtl-on{padding:6px 6px 6px 36px}[id^=NotiflixNotifyWrap]>div.nx-with-close-button.nx-rtl-on{padding:10px 12px 10px 36px}[id^=NotiflixNotifyOverlay].nx-with-animation,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade{-webkit-animation:notify-animation-fade .3s ease-in-out 0s normal;animation:notify-animation-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}@keyframes notify-animation-fade{0%{opacity:0}100%{opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom{-webkit-animation:notify-animation-zoom .3s ease-in-out 0s normal;animation:notify-animation-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes notify-animation-zoom{0%{-webkit-transform:scale(0);transform:scale(0)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(1);transform:scale(1)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right{-webkit-animation:notify-animation-from-right .3s ease-in-out 0s normal;animation:notify-animation-from-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}@keyframes notify-animation-from-right{0%{right:-300px;opacity:0}50%{right:8px;opacity:1}100%{right:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left{-webkit-animation:notify-animation-from-left .3s ease-in-out 0s normal;animation:notify-animation-from-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}@keyframes notify-animation-from-left{0%{left:-300px;opacity:0}50%{left:8px;opacity:1}100%{left:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top{-webkit-animation:notify-animation-from-top .3s ease-in-out 0s normal;animation:notify-animation-from-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}@keyframes notify-animation-from-top{0%{top:-50px;opacity:0}50%{top:8px;opacity:1}100%{top:0;opacity:1}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom{-webkit-animation:notify-animation-from-bottom .3s ease-in-out 0s normal;animation:notify-animation-from-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}@keyframes notify-animation-from-bottom{0%{bottom:-50px;opacity:0}50%{bottom:8px;opacity:1}100%{bottom:0;opacity:1}}[id^=NotiflixNotifyOverlay].nx-with-animation.nx-remove,[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-fade.nx-remove{opacity:0;-webkit-animation:notify-remove-fade .3s ease-in-out 0s normal;animation:notify-remove-fade .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}@keyframes notify-remove-fade{0%{opacity:1}100%{opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-zoom.nx-remove{-webkit-transform:scale(0);transform:scale(0);-webkit-animation:notify-remove-zoom .3s ease-in-out 0s normal;animation:notify-remove-zoom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}@keyframes notify-remove-zoom{0%{-webkit-transform:scale(1);transform:scale(1)}50%{-webkit-transform:scale(1.05);transform:scale(1.05)}100%{-webkit-transform:scale(0);transform:scale(0)}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-top.nx-remove{opacity:0;-webkit-animation:notify-remove-to-top .3s ease-in-out 0s normal;animation:notify-remove-to-top .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}@keyframes notify-remove-to-top{0%{top:0;opacity:1}50%{top:8px;opacity:1}100%{top:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-right.nx-remove{opacity:0;-webkit-animation:notify-remove-to-right .3s ease-in-out 0s normal;animation:notify-remove-to-right .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}@keyframes notify-remove-to-right{0%{right:0;opacity:1}50%{right:8px;opacity:1}100%{right:-300px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-bottom.nx-remove{opacity:0;-webkit-animation:notify-remove-to-bottom .3s ease-in-out 0s normal;animation:notify-remove-to-bottom .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}@keyframes notify-remove-to-bottom{0%{bottom:0;opacity:1}50%{bottom:8px;opacity:1}100%{bottom:-50px;opacity:0}}[id^=NotiflixNotifyWrap]>div.nx-with-animation.nx-from-left.nx-remove{opacity:0;-webkit-animation:notify-remove-to-left .3s ease-in-out 0s normal;animation:notify-remove-to-left .3s ease-in-out 0s normal}@-webkit-keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}@keyframes notify-remove-to-left{0%{left:0;opacity:1}50%{left:8px;opacity:1}100%{left:-300px;opacity:0}}';
        return notifyCSS || null;
    };
    // NOTIFY: Get Internal CSS Codes: end
    // NOTIFY: Create: begin
    var notifyCreateCounter = 0;
    var notifyCreate = function(notifyType, message, callbackOrOptions, options) {
        // check doc body
        if (!commonCheckHeadOrBody('body')) return false;
        // if not initialized pretend like init
        if (!newNotifySettings) Notiflix.Notify.init({
        });
        // create a backup for new settings
        var newNotifySettingsBackup = commonExtendOptions(true, newNotifySettings, {
        });
        // check callbackOrOptions and options: begin
        if (typeof callbackOrOptions === 'object' && !Array.isArray(callbackOrOptions) || typeof options === 'object' && !Array.isArray(options)) {
            // new options
            var newOptions = {
            };
            if (typeof callbackOrOptions === 'object') newOptions = callbackOrOptions;
            else if (typeof options === 'object') newOptions = options;
            // extend new settings with the new options
            newNotifySettings = commonExtendOptions(true, newNotifySettings, newOptions);
        }
        // check callbackOrOptions and options: end
        // notify type
        var theType = newNotifySettings[notifyType.toLocaleLowerCase('en')];
        // notify counter
        notifyCreateCounter++;
        // check the message: begin
        if (typeof message !== 'string') message = 'Notiflix ' + notifyType;
        // check the message: end
        // if plainText is true => HTML tags not allowed: begin
        if (newNotifySettings.plainText) message = commonGetPlaintext(message); // message plain text
        // if plainText is true => HTML tags not allowed: end
        // if plainText is false but the message length more than messageMaxLength => Possible HTML tags error: begin
        if (!newNotifySettings.plainText && message.length > newNotifySettings.messageMaxLength) {
            // extend settings for error massege
            newNotifySettings = commonExtendOptions(true, newNotifySettings, {
                closeButton: true,
                messageMaxLength: 150
            });
            // error message
            message = 'Possible HTML Tags Error: The "plainText" option is "false" and the notification content length is more than the "messageMaxLength" option.';
        }
        // if plainText is false but the message length more than messageMaxLength => Possible HTML tags error: end
        // check message max length: begin
        if (message.length > newNotifySettings.messageMaxLength) message = message.substring(0, newNotifySettings.messageMaxLength) + '...';
        // check message max length: end
        // font awesome icon style: begin
        if (newNotifySettings.fontAwesomeIconStyle === 'shadow') theType.fontAwesomeIconColor = theType.background;
        // font awesome icon style: end
        // if cssAnimaion is false => duration: begin
        if (!newNotifySettings.cssAnimation) newNotifySettings.cssAnimationDuration = 0;
        // if cssAnimaion is false => duration: end
        // notify wrap: begin
        var ntflxNotifyWrap = window.document.getElementById(notifySettings.wrapID) || window.document.createElement('div');
        ntflxNotifyWrap.id = notifySettings.wrapID;
        ntflxNotifyWrap.style.width = newNotifySettings.width;
        ntflxNotifyWrap.style.zIndex = newNotifySettings.zindex;
        ntflxNotifyWrap.style.opacity = newNotifySettings.opacity;
        // wrap position: begin
        if (newNotifySettings.position === 'center-center') {
            ntflxNotifyWrap.style.left = newNotifySettings.distance;
            ntflxNotifyWrap.style.top = newNotifySettings.distance;
            ntflxNotifyWrap.style.right = newNotifySettings.distance;
            ntflxNotifyWrap.style.bottom = newNotifySettings.distance;
            ntflxNotifyWrap.style.margin = 'auto';
            ntflxNotifyWrap.classList.add('nx-flex-center-center');
            ntflxNotifyWrap.style.maxHeight = 'calc((100vh - ' + newNotifySettings.distance + ') - ' + newNotifySettings.distance + ')';
            ntflxNotifyWrap.style.display = 'flex';
            ntflxNotifyWrap.style.flexWrap = 'wrap';
            ntflxNotifyWrap.style.flexDirection = 'column';
            ntflxNotifyWrap.style.justifyContent = 'center';
            ntflxNotifyWrap.style.alignItems = 'center';
            ntflxNotifyWrap.style.pointerEvents = 'none';
        } else if (newNotifySettings.position === 'center-top') {
            ntflxNotifyWrap.style.left = newNotifySettings.distance;
            ntflxNotifyWrap.style.right = newNotifySettings.distance;
            ntflxNotifyWrap.style.top = newNotifySettings.distance;
            ntflxNotifyWrap.style.bottom = 'auto';
            ntflxNotifyWrap.style.margin = 'auto';
        } else if (newNotifySettings.position === 'center-bottom') {
            ntflxNotifyWrap.style.left = newNotifySettings.distance;
            ntflxNotifyWrap.style.right = newNotifySettings.distance;
            ntflxNotifyWrap.style.bottom = newNotifySettings.distance;
            ntflxNotifyWrap.style.top = 'auto';
            ntflxNotifyWrap.style.margin = 'auto';
        } else if (newNotifySettings.position === 'right-bottom') {
            ntflxNotifyWrap.style.right = newNotifySettings.distance;
            ntflxNotifyWrap.style.bottom = newNotifySettings.distance;
            ntflxNotifyWrap.style.top = 'auto';
            ntflxNotifyWrap.style.left = 'auto';
        } else if (newNotifySettings.position === 'left-top') {
            ntflxNotifyWrap.style.left = newNotifySettings.distance;
            ntflxNotifyWrap.style.top = newNotifySettings.distance;
            ntflxNotifyWrap.style.right = 'auto';
            ntflxNotifyWrap.style.bottom = 'auto';
        } else if (newNotifySettings.position === 'left-bottom') {
            ntflxNotifyWrap.style.left = newNotifySettings.distance;
            ntflxNotifyWrap.style.bottom = newNotifySettings.distance;
            ntflxNotifyWrap.style.top = 'auto';
            ntflxNotifyWrap.style.right = 'auto';
        } else {
            ntflxNotifyWrap.style.right = newNotifySettings.distance;
            ntflxNotifyWrap.style.top = newNotifySettings.distance;
            ntflxNotifyWrap.style.left = 'auto';
            ntflxNotifyWrap.style.bottom = 'auto';
        }
        // wrap position: end
        // if background overlay is true: begin
        if (newNotifySettings.backOverlay) {
            var ntflxNotifyOverlay = window.document.getElementById(notifySettings.overlayID) || window.document.createElement('div');
            ntflxNotifyOverlay.id = notifySettings.overlayID;
            ntflxNotifyOverlay.style.width = '100%';
            ntflxNotifyOverlay.style.height = '100%';
            ntflxNotifyOverlay.style.position = 'fixed';
            ntflxNotifyOverlay.style.zIndex = newNotifySettings.zindex - 1;
            ntflxNotifyOverlay.style.left = 0;
            ntflxNotifyOverlay.style.top = 0;
            ntflxNotifyOverlay.style.right = 0;
            ntflxNotifyOverlay.style.bottom = 0;
            ntflxNotifyOverlay.style.background = theType.backOverlayColor || newNotifySettings.backOverlayColor;
            ntflxNotifyOverlay.className = newNotifySettings.cssAnimation ? 'nx-with-animation' : '';
            ntflxNotifyOverlay.style.animationDuration = newNotifySettings.cssAnimation ? newNotifySettings.cssAnimationDuration + 'ms' : '';
            if (!window.document.getElementById(notifySettings.overlayID)) window.document.body.appendChild(ntflxNotifyOverlay);
        }
        // if background overlay is true: end
        if (!window.document.getElementById(notifySettings.wrapID)) window.document.body.appendChild(ntflxNotifyWrap);
        // notify wrap: end
        // notify content: begin
        var ntflxNotify = window.document.createElement('div');
        ntflxNotify.id = newNotifySettings.ID + '-' + notifyCreateCounter;
        ntflxNotify.className = newNotifySettings.className + ' ' + theType.childClassName + ' ' + (newNotifySettings.cssAnimation ? 'nx-with-animation' : '') + ' ' + (newNotifySettings.useIcon ? 'nx-with-icon' : '') + ' nx-' + newNotifySettings.cssAnimationStyle + ' ' + (newNotifySettings.closeButton && typeof callbackOrOptions !== 'function' ? 'nx-with-close-button' : '') + ' ' + (typeof callbackOrOptions === 'function' ? 'nx-with-callback' : '') + ' ' + (newNotifySettings.clickToClose ? 'nx-click-to-close' : '');
        ntflxNotify.style.fontSize = newNotifySettings.fontSize;
        ntflxNotify.style.color = theType.textColor;
        ntflxNotify.style.background = theType.background;
        ntflxNotify.style.borderRadius = newNotifySettings.borderRadius;
        ntflxNotify.style.pointerEvents = 'all';
        // rtl: begin
        if (newNotifySettings.rtl) {
            ntflxNotify.setAttribute('dir', 'rtl');
            ntflxNotify.classList.add('nx-rtl-on');
        }
        // rtl: end
        // font-family: begin
        ntflxNotify.style.fontFamily = '"' + newNotifySettings.fontFamily + '", ' + defaultFontFamily;
        // font-family: end
        // use css animation: begin
        if (newNotifySettings.cssAnimation) ntflxNotify.style.animationDuration = newNotifySettings.cssAnimationDuration + 'ms';
        // use css animation: end
        // close button element: begin
        var closeButtonHTML = '';
        if (newNotifySettings.closeButton && typeof callbackOrOptions !== 'function') closeButtonHTML = '<span class="nx-close-button"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><g><path fill="' + theType.notiflixIconColor + '" d="M0.38 2.19l7.8 7.81 -7.8 7.81c-0.51,0.5 -0.51,1.31 -0.01,1.81 0.25,0.25 0.57,0.38 0.91,0.38 0.34,0 0.67,-0.14 0.91,-0.38l7.81 -7.81 7.81 7.81c0.24,0.24 0.57,0.38 0.91,0.38 0.34,0 0.66,-0.14 0.9,-0.38 0.51,-0.5 0.51,-1.31 0,-1.81l-7.81 -7.81 7.81 -7.81c0.51,-0.5 0.51,-1.31 0,-1.82 -0.5,-0.5 -1.31,-0.5 -1.81,0l-7.81 7.81 -7.81 -7.81c-0.5,-0.5 -1.31,-0.5 -1.81,0 -0.51,0.51 -0.51,1.32 0,1.82z"/></g></svg></span>';
        // close buttpon element: end
        // use icon: begin
        if (newNotifySettings.useIcon) {
            // use font awesome
            if (newNotifySettings.useFontAwesome) ntflxNotify.innerHTML = '<i style="color:' + theType.fontAwesomeIconColor + '; font-size:' + newNotifySettings.fontAwesomeIconSize + ';" class="nx-message-icon nx-message-icon-fa ' + theType.fontAwesomeClassName + ' ' + (newNotifySettings.fontAwesomeIconStyle === 'shadow' ? 'nx-message-icon-fa-shadow' : 'nx-message-icon-fa-basic') + '"></i><span class="nx-message nx-with-icon">' + message + '</span>' + (newNotifySettings.closeButton ? closeButtonHTML : '');
            else {
                var svgIcon = '';
                if (notifyType === typesNotify.Success) svgIcon = '<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="' + theType.notiflixIconColor + '" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-2.4 -13.29l11.52 -12.96c0.37,-0.41 1.01,-0.45 1.42,-0.08 0.42,0.37 0.46,1 0.09,1.42l-12.16 13.67c-0.19,0.22 -0.46,0.34 -0.75,0.34 -0.23,0 -0.45,-0.07 -0.63,-0.22l-7.6 -6.07c-0.43,-0.35 -0.5,-0.99 -0.16,-1.42 0.35,-0.43 0.99,-0.5 1.42,-0.16l6.85 5.48z"/></g></svg>';
                else if (notifyType === typesNotify.Failure) svgIcon = '<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="' + theType.notiflixIconColor + '" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm1.42 -17.98l6.13 6.12c0.39,0.4 0.39,1.04 0,1.43 -0.19,0.19 -0.45,0.29 -0.71,0.29 -0.27,0 -0.53,-0.1 -0.72,-0.29l-6.12 -6.13 -6.13 6.13c-0.19,0.19 -0.44,0.29 -0.71,0.29 -0.27,0 -0.52,-0.1 -0.71,-0.29 -0.39,-0.39 -0.39,-1.03 0,-1.43l6.13 -6.12 -6.13 -6.13c-0.39,-0.39 -0.39,-1.03 0,-1.42 0.39,-0.39 1.03,-0.39 1.42,0l6.13 6.12 6.12 -6.12c0.4,-0.39 1.04,-0.39 1.43,0 0.39,0.39 0.39,1.03 0,1.42l-6.13 6.13z"/></g></svg>';
                else if (notifyType === typesNotify.Warning) svgIcon = '<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="' + theType.notiflixIconColor + '" d="M21.91 3.48l17.8 30.89c0.84,1.46 -0.23,3.25 -1.91,3.25l-35.6 0c-1.68,0 -2.75,-1.79 -1.91,-3.25l17.8 -30.89c0.85,-1.47 2.97,-1.47 3.82,0zm16.15 31.84l-17.8 -30.89c-0.11,-0.2 -0.41,-0.2 -0.52,0l-17.8 30.89c-0.12,0.2 0.05,0.4 0.26,0.4l35.6 0c0.21,0 0.38,-0.2 0.26,-0.4zm-19.01 -4.12l0 -1.05c0,-0.53 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.42 0.95,0.95l0 1.05c0,0.53 -0.42,0.95 -0.95,0.95 -0.53,0 -0.95,-0.42 -0.95,-0.95zm0 -4.66l0 -13.39c0,-0.52 0.42,-0.95 0.95,-0.95 0.53,0 0.95,0.43 0.95,0.95l0 13.39c0,0.53 -0.42,0.96 -0.95,0.96 -0.53,0 -0.95,-0.43 -0.95,-0.96z"/></g></svg>';
                else if (notifyType === typesNotify.Info) svgIcon = '<svg class="nx-message-icon" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40"><g><path fill="' + theType.notiflixIconColor + '" d="M20 0c11.03,0 20,8.97 20,20 0,11.03 -8.97,20 -20,20 -11.03,0 -20,-8.97 -20,-20 0,-11.03 8.97,-20 20,-20zm0 37.98c9.92,0 17.98,-8.06 17.98,-17.98 0,-9.92 -8.06,-17.98 -17.98,-17.98 -9.92,0 -17.98,8.06 -17.98,17.98 0,9.92 8.06,17.98 17.98,17.98zm-0.99 -23.3c0,-0.54 0.44,-0.98 0.99,-0.98 0.55,0 0.99,0.44 0.99,0.98l0 15.86c0,0.55 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.44 -0.99,-0.99l0 -15.86zm0 -5.22c0,-0.55 0.44,-0.99 0.99,-0.99 0.55,0 0.99,0.44 0.99,0.99l0 1.09c0,0.54 -0.44,0.99 -0.99,0.99 -0.55,0 -0.99,-0.45 -0.99,-0.99l0 -1.09z"/></g></svg>';
                ntflxNotify.innerHTML = svgIcon + '<span class="nx-message nx-with-icon">' + message + '</span>' + (newNotifySettings.closeButton ? closeButtonHTML : '');
            }
        } else ntflxNotify.innerHTML = '<span class="nx-message">' + message + '</span>' + (newNotifySettings.closeButton ? closeButtonHTML : '');
        // use icon: end
        // notify content: end
        // notify append or prepend: begin
        if (newNotifySettings.position === 'left-bottom' || newNotifySettings.position === 'right-bottom') {
            var notifyWrap = window.document.getElementById(notifySettings.wrapID);
            notifyWrap.insertBefore(ntflxNotify, notifyWrap.firstChild);
        } else window.document.getElementById(notifySettings.wrapID).appendChild(ntflxNotify);
        // notify append or prepend: end
        // remove by timeout or click: begin
        var eachNotifyElement = window.document.getElementById(ntflxNotify.id);
        if (eachNotifyElement) {
            // timeout variables
            var timeoutHide;
            var timeoutRemove;
            // hide notify elm and hide overlay: begin
            var hideNotifyElementsAndOverlay = function() {
                eachNotifyElement.classList.add('nx-remove');
                var removeOverlay = window.document.getElementById(notifySettings.overlayID);
                if (removeOverlay && ntflxNotifyWrap.childElementCount <= 0) removeOverlay.classList.add('nx-remove');
                clearTimeout(timeoutHide);
            };
            // hide notify elm and hide overlay: end
            // remove notify elm and wrapper: begin
            var removeNotifyElmentsAndWrapper = function() {
                if (eachNotifyElement && eachNotifyElement.parentNode !== null) eachNotifyElement.parentNode.removeChild(eachNotifyElement);
                if (ntflxNotifyWrap.childElementCount <= 0 && ntflxNotifyWrap.parentNode !== null) {
                    ntflxNotifyWrap.parentNode.removeChild(ntflxNotifyWrap);
                    var removeOverlay = window.document.getElementById(notifySettings.overlayID);
                    if (removeOverlay && removeOverlay.parentNode !== null) removeOverlay.parentNode.removeChild(removeOverlay);
                }
                clearTimeout(timeoutRemove);
            };
            // remove notify elm and wrapper: end
            // if has close button and callbackOrOptions is not a function: begin
            if (newNotifySettings.closeButton && typeof callbackOrOptions !== 'function') {
                var closeButtonElm = window.document.getElementById(ntflxNotify.id).querySelector('span.nx-close-button');
                closeButtonElm.addEventListener('click', function() {
                    hideNotifyElementsAndOverlay();
                    var clickToCloseTimeout = setTimeout(function() {
                        removeNotifyElmentsAndWrapper();
                        clearTimeout(clickToCloseTimeout);
                    }, newNotifySettings.cssAnimationDuration);
                });
            }
            // if has close button and callbackOrOptions is not a function: end
            // if callbackOrOptions or click to close: begin
            if (typeof callbackOrOptions === 'function' || newNotifySettings.clickToClose) eachNotifyElement.addEventListener('click', function() {
                if (typeof callbackOrOptions === 'function') callbackOrOptions();
                hideNotifyElementsAndOverlay();
                var callbackTimeout = setTimeout(function() {
                    removeNotifyElmentsAndWrapper();
                    clearTimeout(callbackTimeout);
                }, newNotifySettings.cssAnimationDuration);
            });
            // if callbackOrOptions or click to close: end
            // else auto remove: begin
            if (!newNotifySettings.closeButton && typeof callbackOrOptions !== 'function') {
                // auto remove: begin
                var autoRemove = function() {
                    timeoutHide = setTimeout(function() {
                        hideNotifyElementsAndOverlay();
                    }, newNotifySettings.timeout);
                    timeoutRemove = setTimeout(function() {
                        removeNotifyElmentsAndWrapper();
                    }, newNotifySettings.timeout + newNotifySettings.cssAnimationDuration);
                };
                autoRemove();
                // auto remove: end
                // pause auto remove: begin
                if (newNotifySettings.pauseOnHover) {
                    eachNotifyElement.addEventListener('mouseenter', function() {
                        eachNotifyElement.classList.add('nx-paused');
                        clearTimeout(timeoutHide);
                        clearTimeout(timeoutRemove);
                    });
                    eachNotifyElement.addEventListener('mouseleave', function() {
                        eachNotifyElement.classList.remove('nx-paused');
                        autoRemove();
                    });
                }
            // pause auto remove: end
            }
        // else auto remove: end
        }
        // remove by timeout or click: end
        // notify - show only the last one: begin
        if (newNotifySettings.showOnlyTheLastOne && notifyCreateCounter > 0) {
            var allNotifyElmNotTheLastOne = window.document.querySelectorAll('[id^=' + newNotifySettings.ID + '-]:not([id=' + newNotifySettings.ID + '-' + notifyCreateCounter + '])');
            for(var i = 0; i < allNotifyElmNotTheLastOne.length; i++){
                var eachNotifyElmNotLastOne = allNotifyElmNotTheLastOne[i];
                if (eachNotifyElmNotLastOne.parentNode !== null) eachNotifyElmNotLastOne.parentNode.removeChild(eachNotifyElmNotLastOne);
            }
        }
        // notify - show only the last one: end
        // extend new settings with the backup settings
        newNotifySettings = commonExtendOptions(true, newNotifySettings, newNotifySettingsBackup);
    };
    // NOTIFY: Create: end
    var Notiflix = {
        Notify: {
            // Init
            init: function(userNotifyOptions) {
                // extend options
                newNotifySettings = commonExtendOptions(true, notifySettings, userNotifyOptions);
                // internal css if exist
                commonSetInternalCSSCodes(notifyGetInternalCSSCodes, 'NotiflixNotifyInternalCSS');
            },
            // Merge First Init
            merge: function(userNotifyExtendOptions) {
                // if initialized already
                if (newNotifySettings) newNotifySettings = commonExtendOptions(true, newNotifySettings, userNotifyExtendOptions);
                else {
                    commonConsoleError('You have to initialize the Notify module before call Merge function.');
                    return false;
                }
            },
            // Success
            success: function(message, callbackOrOptions, options) {
                notifyCreate(typesNotify.Success, message, callbackOrOptions, options);
            },
            // Failure
            failure: function(message, callbackOrOptions, options) {
                notifyCreate(typesNotify.Failure, message, callbackOrOptions, options);
            },
            // Warning
            warning: function(message, callbackOrOptions, options) {
                notifyCreate(typesNotify.Warning, message, callbackOrOptions, options);
            },
            // Info
            info: function(message, callbackOrOptions, options) {
                notifyCreate(typesNotify.Info, message, callbackOrOptions, options);
            }
        }
    };
    if (typeof window.Notiflix === 'object') return commonExtendOptions(true, window.Notiflix, {
        Notify: Notiflix.Notify
    });
    else return {
        Notify: Notiflix.Notify
    };
});

},{}]},["7FFbI","6mHD6"], "6mHD6", "parcelRequire26bc")

//# sourceMappingURL=02-timer.006301b4.js.map
