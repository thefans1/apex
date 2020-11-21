(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-dashboard-module"],{

/***/ "./node_modules/angular-resize-event/fesm2015/angular-resize-event.js":
/*!****************************************************************************!*\
  !*** ./node_modules/angular-resize-event/fesm2015/angular-resize-event.js ***!
  \****************************************************************************/
/*! exports provided: AngularResizedEventModule, ResizedEvent, ResizedDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularResizedEventModule", function() { return AngularResizedEventModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResizedEvent", function() { return ResizedEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResizedDirective", function() { return ResizedDirective; });
/* harmony import */ var D_Projects_apex_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var D_Projects_apex_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var css_element_queries__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! css-element-queries */ "./node_modules/css-element-queries/index.js");
/* harmony import */ var css_element_queries__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(css_element_queries__WEBPACK_IMPORTED_MODULE_4__);





/**
 * @fileoverview added by tsickle
 * Generated from: lib/resized-event.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



var ResizedEvent =
/**
 * @param {?} element
 * @param {?} newWidth
 * @param {?} newHeight
 * @param {?} oldWidth
 * @param {?} oldHeight
 */
function ResizedEvent(element, newWidth, newHeight, oldWidth, oldHeight) {
  Object(D_Projects_apex_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, ResizedEvent);

  this.element = element;
  this.newWidth = newWidth;
  this.newHeight = newHeight;
  this.oldWidth = oldWidth;
  this.oldHeight = oldHeight;
};
/**
 * @fileoverview added by tsickle
 * Generated from: lib/resized.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


var ResizedDirective = /*#__PURE__*/function () {
  /**
   * @param {?} element
   */
  function ResizedDirective(element) {
    Object(D_Projects_apex_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, ResizedDirective);

    this.element = element;
    this.resized = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
  }
  /**
   * @return {?}
   */


  Object(D_Projects_apex_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(ResizedDirective, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this = this;

      // only initialize resize watching if sensor is available
      if (css_element_queries__WEBPACK_IMPORTED_MODULE_4__["ResizeSensor"]) {
        this.resizeSensor = new css_element_queries__WEBPACK_IMPORTED_MODULE_4__["ResizeSensor"](this.element.nativeElement,
        /**
        * @return {?}
        */
        function () {
          return _this.onResized();
        });
      }
    }
    /**
     * @return {?}
     */

  }, {
    key: "ngOnDestroy",
    value: function ngOnDestroy() {
      if (this.resizeSensor) {
        this.resizeSensor.detach();
      }
    }
    /**
     * @private
     * @return {?}
     */

  }, {
    key: "onResized",
    value: function onResized() {
      /** @type {?} */
      var newWidth = this.element.nativeElement.clientWidth;
      /** @type {?} */

      var newHeight = this.element.nativeElement.clientHeight;

      if (newWidth === this.oldWidth && newHeight === this.oldHeight) {
        return;
      }
      /** @type {?} */


      var event = new ResizedEvent(this.element, newWidth, newHeight, this.oldWidth, this.oldHeight);
      this.oldWidth = this.element.nativeElement.clientWidth;
      this.oldHeight = this.element.nativeElement.clientHeight;
      this.resized.emit(event);
    }
  }]);

  return ResizedDirective;
}();

ResizedDirective.ɵfac = function ResizedDirective_Factory(t) {
  return new (t || ResizedDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]));
};

ResizedDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
  type: ResizedDirective,
  selectors: [["", "resized", ""]],
  outputs: {
    resized: "resized"
  }
});
/** @nocollapse */

ResizedDirective.ctorParameters = function () {
  return [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
  }];
};

ResizedDirective.propDecorators = {
  resized: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
  }]
};
/*@__PURE__*/

(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](ResizedDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
    args: [{
      selector: '[resized]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
    }];
  }, {
    resized: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
    }]
  });
})();
/**
 * @fileoverview added by tsickle
 * Generated from: lib/angular-resized-event.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


var AngularResizedEventModule = function AngularResizedEventModule() {
  Object(D_Projects_apex_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, AngularResizedEventModule);
};

AngularResizedEventModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: AngularResizedEventModule
});
AngularResizedEventModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  factory: function AngularResizedEventModule_Factory(t) {
    return new (t || AngularResizedEventModule)();
  },
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]]]
});

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AngularResizedEventModule, {
    declarations: function declarations() {
      return [ResizedDirective];
    },
    imports: function imports() {
      return [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]];
    },
    exports: function exports() {
      return [ResizedDirective];
    }
  });
})();
/*@__PURE__*/


(function () {
  _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](AngularResizedEventModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
    args: [{
      declarations: [ResizedDirective],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
      exports: [ResizedDirective]
    }]
  }], null, null);
})();
/**
 * @fileoverview added by tsickle
 * Generated from: index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: angular-resize-event.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */




/***/ }),

/***/ "./node_modules/chartist-plugin-tooltips-updated/dist/chartist-plugin-tooltip.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/chartist-plugin-tooltips-updated/dist/chartist-plugin-tooltip.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (root, factory) {
  if (root === undefined && window !== undefined) root = window;

  if (true) {
    // AMD. Register as an anonymous module unless amdModuleId is set
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! chartist */ "./node_modules/chartist/dist/chartist.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (a0) {
      return root['Chartist.plugins.tooltip'] = factory(a0);
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(this, function (Chartist) {
  /**
   * Chartist.js plugin to display a data label on top of the points in a line chart.
   *
   */

  /* global Chartist */
  (function (window, document, Chartist) {
    'use strict';

    var defaultOptions = {
      currency: undefined,
      currencyFormatCallback: undefined,
      tooltipOffset: {
        x: 0,
        y: -20
      },
      anchorToPoint: false,
      appendToBody: true,
      class: undefined,
      pointClass: 'ct-point'
    };
    Chartist.plugins = Chartist.plugins || {};

    Chartist.plugins.tooltip = function (options) {
      options = Chartist.extend({}, defaultOptions, options);
      return function tooltip(chart) {
        // Warning: If you are using npm link or yarn link, these instanceof checks will fail and you won't any tooltips
        var tooltipSelector = options.pointClass;

        if (chart instanceof Chartist.Bar) {
          tooltipSelector = 'ct-bar';
        } else if (chart instanceof Chartist.Pie) {
          // Added support for donut graph
          if (chart.options.donut) {
            // Added support for the solid donut graph
            tooltipSelector = chart.options.donutSolid ? 'ct-slice-donut-solid' : 'ct-slice-donut';
          } else {
            tooltipSelector = 'ct-slice-pie';
          }
        }

        var $chart = chart.container;
        var $toolTipIsShown = false;
        var $tooltipOffsetParent = offsetParent($chart);
        var $toolTip;

        if (!options.appendToBody) {
          // searching for existing tooltip in the chart, because appendToBody is disabled
          $toolTip = $chart.querySelector('.chartist-tooltip');
        } else {
          // searching for existing tooltip in the body, because appendToBody is enabled
          $toolTip = document.querySelector('.chartist-tooltip');
        }

        if (!$toolTip) {
          $toolTip = document.createElement('div');
          $toolTip.className = !options.class ? 'chartist-tooltip' : 'chartist-tooltip ' + options.class;

          if (!options.appendToBody) {
            $chart.appendChild($toolTip);
          } else {
            document.body.appendChild($toolTip);
          }
        }

        var height = $toolTip.offsetHeight;
        var width = $toolTip.offsetWidth;
        hide($toolTip);

        function on(event, selector, callback) {
          $chart.addEventListener(event, function (e) {
            if (!selector || hasClass(e.target, selector)) callback(e);
          });
        }

        on('mouseover', tooltipSelector, function (event) {
          var $point = event.target;
          var tooltipText = '';
          var isPieChart = chart instanceof Chartist.Pie ? $point : $point.parentNode;
          var seriesName = isPieChart ? $point.parentNode.getAttribute('ct:meta') || $point.parentNode.getAttribute('ct:series-name') : '';
          var meta = $point.getAttribute('ct:meta') || seriesName || '';
          var hasMeta = !!meta;
          var value = $point.getAttribute('ct:value');

          if (options.transformTooltipTextFnc && typeof options.transformTooltipTextFnc === 'function') {
            value = options.transformTooltipTextFnc(value);
          }

          if (options.tooltipFnc && typeof options.tooltipFnc === 'function') {
            tooltipText = options.tooltipFnc(meta, value);
          } else {
            if (options.metaIsHTML) {
              var txt = document.createElement('textarea');
              txt.innerHTML = meta;
              meta = txt.value;
            }

            meta = '<span class="chartist-tooltip-meta">' + meta + '</span>';

            if (hasMeta) {
              tooltipText += meta + '<br>';
            } else {
              // For Pie Charts also take the labels into account
              // Could add support for more charts here as well!
              if (chart instanceof Chartist.Pie) {
                var label = next($point, 'ct-label');

                if (label) {
                  tooltipText += text(label) + '<br>';
                }
              }
            }

            if (value) {
              if (options.currency) {
                if (options.currencyFormatCallback != undefined) {
                  value = options.currencyFormatCallback(value, options);
                } else {
                  value = options.currency + value.replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, '$1,');
                }
              }

              value = '<span class="chartist-tooltip-value">' + value + '</span>';
              tooltipText += value;
            }
          }

          if (tooltipText) {
            $toolTip.innerHTML = tooltipText; // Calculate new width and height, as toolTip width/height may have changed with innerHTML change

            height = $toolTip.offsetHeight;
            width = $toolTip.offsetWidth;

            if (options.appendToBody !== true) {
              $tooltipOffsetParent = offsetParent($chart);
            }

            if ($toolTip.style.display !== 'absolute') {
              $toolTip.style.display = 'absolute';
            }

            setPosition(event);
            show($toolTip); // Remember height and width to avoid wrong position in IE

            height = $toolTip.offsetHeight;
            width = $toolTip.offsetWidth;
          }
        });
        on('mouseout', tooltipSelector, function () {
          hide($toolTip);
        });
        on('mousemove', null, function (event) {
          if (options.anchorToPoint === false && $toolTipIsShown) {
            setPosition(event);
          }
        });

        function setPosition(event) {
          height = height || $toolTip.offsetHeight;
          width = width || $toolTip.offsetWidth;
          var offsetX = -width / 2 + options.tooltipOffset.x;
          var offsetY = -height + options.tooltipOffset.y;
          var anchor = options.anchorToPoint === true && event.target.x2 && event.target.y2;

          if (options.appendToBody === true) {
            if (anchor) {
              var box = $chart.getBoundingClientRect();
              var left = event.target.x2.baseVal.value + box.left + window.pageXOffset;
              var top = event.target.y2.baseVal.value + box.top + window.pageYOffset;
              $toolTip.style.left = left + offsetX + 'px';
              $toolTip.style.top = top + offsetY + 'px';
            } else {
              $toolTip.style.left = event.pageX + offsetX + 'px';
              $toolTip.style.top = event.pageY + offsetY + 'px';
            }
          } else {
            var offsetBox = $tooltipOffsetParent.getBoundingClientRect();
            var allOffsetLeft = -offsetBox.left - window.scrollX + offsetX;
            var allOffsetTop = -offsetBox.top - window.scrollY + offsetY;

            if (anchor) {
              var box = $chart.getBoundingClientRect();
              var left = event.target.x2.baseVal.value + box.left + window.pageXOffset;
              var top = event.target.y2.baseVal.value + box.top + window.pageYOffset;
              $toolTip.style.left = left + allOffsetLeft + 'px';
              $toolTip.style.top = top + allOffsetTop + 'px';
            } else {
              $toolTip.style.left = event.pageX + allOffsetLeft + 'px';
              $toolTip.style.top = event.pageY + allOffsetTop + 'px';
            }
          }
        }
        /**
         * Shows the tooltip element, if not shown
         * @param element
         */


        function show(element) {
          $toolTipIsShown = true;

          if (!hasClass(element, 'tooltip-show')) {
            element.className = element.className + ' tooltip-show';
          }
        }
        /**
         * Hides the tooltip element
         * @param element
         */


        function hide(element) {
          $toolTipIsShown = false;
          var regex = new RegExp('tooltip-show' + '\\s*', 'gi');
          element.className = element.className.replace(regex, '').trim();
        }
      };
    };
    /**
     * Returns whether a element has a css class called className
     * @param element
     * @param className
     * @return {boolean}
     */


    function hasClass(element, className) {
      return (' ' + element.getAttribute('class') + ' ').indexOf(' ' + className + ' ') > -1;
    }

    function next(element, className) {
      do {
        element = element.nextSibling;
      } while (element && !hasClass(element, className));

      return element;
    }
    /**
     *
     * @param element
     * @return {string | string}
     */


    function text(element) {
      return element.innerText || element.textContent;
    }
    /**
     * Returns the first positioned parent of the element
     * @return HTMLElement
     */


    function offsetParent(elem) {
      if (offsetParent in elem) {
        // Using the native property if possible
        var parent = elem.offsetParent;

        if (!parent) {
          parent = document.body.parentElement;
        }

        return parent;
      }

      var parent = elem.parentNode;

      if (!parent) {
        return document.body.parentElement;
      }

      if (window.getComputedStyle(parent).position !== 'static') {
        return parent;
      } else if (parent.tagName === 'BODY') {
        return parent.parentElement;
      } else {
        return offsetParent(parent);
      }
    }
  })(window, document, Chartist);

  return Chartist.plugins.tooltip;
});

/***/ }),

/***/ "./node_modules/css-element-queries/index.js":
/*!***************************************************!*\
  !*** ./node_modules/css-element-queries/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  ResizeSensor: __webpack_require__(/*! ./src/ResizeSensor */ "./node_modules/css-element-queries/src/ResizeSensor.js"),
  ElementQueries: __webpack_require__(/*! ./src/ElementQueries */ "./node_modules/css-element-queries/src/ElementQueries.js")
};

/***/ }),

/***/ "./node_modules/css-element-queries/src/ElementQueries.js":
/*!****************************************************************!*\
  !*** ./node_modules/css-element-queries/src/ElementQueries.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;
/**
 * Copyright Marc J. Schmidt. See the LICENSE file at the top-level
 * directory of this distribution and at
 * https://github.com/marcj/css-element-queries/blob/master/LICENSE.
 */

(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ./ResizeSensor.js */ "./node_modules/css-element-queries/src/ResizeSensor.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(typeof window !== 'undefined' ? window : this, function (ResizeSensor) {
  /**
   *
   * @type {Function}
   * @constructor
   */
  var ElementQueries = function ElementQueries() {
    //<style> element with our dynamically created styles
    var cssStyleElement; //all rules found for element queries

    var allQueries = {}; //association map to identify which selector belongs to a element from the animationstart event.

    var idToSelectorMapping = [];
    /**
     *
     * @param element
     * @returns {Number}
     */

    function getEmSize(element) {
      if (!element) {
        element = document.documentElement;
      }

      var fontSize = window.getComputedStyle(element, null).fontSize;
      return parseFloat(fontSize) || 16;
    }
    /**
     * Get element size
     * @param {HTMLElement} element
     * @returns {Object} {width, height}
     */


    function getElementSize(element) {
      if (!element.getBoundingClientRect) {
        return {
          width: element.offsetWidth,
          height: element.offsetHeight
        };
      }

      var rect = element.getBoundingClientRect();
      return {
        width: Math.round(rect.width),
        height: Math.round(rect.height)
      };
    }
    /**
     *
     * @copyright https://github.com/Mr0grog/element-query/blob/master/LICENSE
     *
     * @param {HTMLElement} element
     * @param {*} value
     * @returns {*}
     */


    function convertToPx(element, value) {
      var numbers = value.split(/\d/);
      var units = numbers[numbers.length - 1];
      value = parseFloat(value);

      switch (units) {
        case "px":
          return value;

        case "em":
          return value * getEmSize(element);

        case "rem":
          return value * getEmSize();
        // Viewport units!
        // According to http://quirksmode.org/mobile/tableViewport.html
        // documentElement.clientWidth/Height gets us the most reliable info

        case "vw":
          return value * document.documentElement.clientWidth / 100;

        case "vh":
          return value * document.documentElement.clientHeight / 100;

        case "vmin":
        case "vmax":
          var vw = document.documentElement.clientWidth / 100;
          var vh = document.documentElement.clientHeight / 100;
          var chooser = Math[units === "vmin" ? "min" : "max"];
          return value * chooser(vw, vh);

        default:
          return value;
        // for now, not supporting physical units (since they are just a set number of px)
        // or ex/ch (getting accurate measurements is hard)
      }
    }
    /**
     *
     * @param {HTMLElement} element
     * @param {String} id
     * @constructor
     */


    function SetupInformation(element, id) {
      this.element = element;
      var key, option, elementSize, value, actualValue, attrValues, attrValue, attrName;
      var attributes = ['min-width', 'min-height', 'max-width', 'max-height'];
      /**
       * Extracts the computed width/height and sets to min/max- attribute.
       */

      this.call = function () {
        // extract current dimensions
        elementSize = getElementSize(this.element);
        attrValues = {};

        for (key in allQueries[id]) {
          if (!allQueries[id].hasOwnProperty(key)) {
            continue;
          }

          option = allQueries[id][key];
          value = convertToPx(this.element, option.value);
          actualValue = option.property === 'width' ? elementSize.width : elementSize.height;
          attrName = option.mode + '-' + option.property;
          attrValue = '';

          if (option.mode === 'min' && actualValue >= value) {
            attrValue += option.value;
          }

          if (option.mode === 'max' && actualValue <= value) {
            attrValue += option.value;
          }

          if (!attrValues[attrName]) attrValues[attrName] = '';

          if (attrValue && -1 === (' ' + attrValues[attrName] + ' ').indexOf(' ' + attrValue + ' ')) {
            attrValues[attrName] += ' ' + attrValue;
          }
        }

        for (var k in attributes) {
          if (!attributes.hasOwnProperty(k)) continue;

          if (attrValues[attributes[k]]) {
            this.element.setAttribute(attributes[k], attrValues[attributes[k]].substr(1));
          } else {
            this.element.removeAttribute(attributes[k]);
          }
        }
      };
    }
    /**
     * @param {HTMLElement} element
     * @param {Object}      id
     */


    function setupElement(element, id) {
      if (!element.elementQueriesSetupInformation) {
        element.elementQueriesSetupInformation = new SetupInformation(element, id);
      }

      if (!element.elementQueriesSensor) {
        element.elementQueriesSensor = new ResizeSensor(element, function () {
          element.elementQueriesSetupInformation.call();
        });
      }
    }
    /**
     * Stores rules to the selector that should be applied once resized.
     *
     * @param {String} selector
     * @param {String} mode min|max
     * @param {String} property width|height
     * @param {String} value
     */


    function queueQuery(selector, mode, property, value) {
      if (typeof allQueries[selector] === 'undefined') {
        allQueries[selector] = []; // add animation to trigger animationstart event, so we know exactly when a element appears in the DOM

        var id = idToSelectorMapping.length;
        cssStyleElement.innerHTML += '\n' + selector + ' {animation: 0.1s element-queries;}';
        cssStyleElement.innerHTML += '\n' + selector + ' > .resize-sensor {min-width: ' + id + 'px;}';
        idToSelectorMapping.push(selector);
      }

      allQueries[selector].push({
        mode: mode,
        property: property,
        value: value
      });
    }

    function getQuery(container) {
      var query;
      if (document.querySelectorAll) query = container ? container.querySelectorAll.bind(container) : document.querySelectorAll.bind(document);
      if (!query && 'undefined' !== typeof $$) query = $$;
      if (!query && 'undefined' !== typeof jQuery) query = jQuery;

      if (!query) {
        throw 'No document.querySelectorAll, jQuery or Mootools\'s $$ found.';
      }

      return query;
    }
    /**
     * If animationStart didn't catch a new element in the DOM, we can manually search for it
     */


    function findElementQueriesElements(container) {
      var query = getQuery(container);

      for (var selector in allQueries) {
        if (allQueries.hasOwnProperty(selector)) {
          // find all elements based on the extract query selector from the element query rule
          var elements = query(selector, container);

          for (var i = 0, j = elements.length; i < j; i++) {
            setupElement(elements[i], selector);
          }
        }
      }
    }
    /**
     *
     * @param {HTMLElement} element
     */


    function attachResponsiveImage(element) {
      var children = [];
      var rules = [];
      var sources = [];
      var defaultImageId = 0;
      var lastActiveImage = -1;
      var loadedImages = [];

      for (var i in element.children) {
        if (!element.children.hasOwnProperty(i)) continue;

        if (element.children[i].tagName && element.children[i].tagName.toLowerCase() === 'img') {
          children.push(element.children[i]);
          var minWidth = element.children[i].getAttribute('min-width') || element.children[i].getAttribute('data-min-width'); //var minHeight = element.children[i].getAttribute('min-height') || element.children[i].getAttribute('data-min-height');

          var src = element.children[i].getAttribute('data-src') || element.children[i].getAttribute('url');
          sources.push(src);
          var rule = {
            minWidth: minWidth
          };
          rules.push(rule);

          if (!minWidth) {
            defaultImageId = children.length - 1;
            element.children[i].style.display = 'block';
          } else {
            element.children[i].style.display = 'none';
          }
        }
      }

      lastActiveImage = defaultImageId;

      function check() {
        var imageToDisplay = false,
            i;

        for (i in children) {
          if (!children.hasOwnProperty(i)) continue;

          if (rules[i].minWidth) {
            if (element.offsetWidth > rules[i].minWidth) {
              imageToDisplay = i;
            }
          }
        }

        if (!imageToDisplay) {
          //no rule matched, show default
          imageToDisplay = defaultImageId;
        }

        if (lastActiveImage !== imageToDisplay) {
          //image change
          if (!loadedImages[imageToDisplay]) {
            //image has not been loaded yet, we need to load the image first in memory to prevent flash of
            //no content
            var image = new Image();

            image.onload = function () {
              children[imageToDisplay].src = sources[imageToDisplay];
              children[lastActiveImage].style.display = 'none';
              children[imageToDisplay].style.display = 'block';
              loadedImages[imageToDisplay] = true;
              lastActiveImage = imageToDisplay;
            };

            image.src = sources[imageToDisplay];
          } else {
            children[lastActiveImage].style.display = 'none';
            children[imageToDisplay].style.display = 'block';
            lastActiveImage = imageToDisplay;
          }
        } else {
          //make sure for initial check call the .src is set correctly
          children[imageToDisplay].src = sources[imageToDisplay];
        }
      }

      element.resizeSensorInstance = new ResizeSensor(element, check);
      check();
    }

    function findResponsiveImages() {
      var query = getQuery();
      var elements = query('[data-responsive-image],[responsive-image]');

      for (var i = 0, j = elements.length; i < j; i++) {
        attachResponsiveImage(elements[i]);
      }
    }

    var regex = /,?[\s\t]*([^,\n]*?)((?:\[[\s\t]*?(?:min|max)-(?:width|height)[\s\t]*?[~$\^]?=[\s\t]*?"[^"]*?"[\s\t]*?])+)([^,\n\s\{]*)/mgi;
    var attrRegex = /\[[\s\t]*?(min|max)-(width|height)[\s\t]*?[~$\^]?=[\s\t]*?"([^"]*?)"[\s\t]*?]/mgi;
    /**
     * @param {String} css
     */

    function extractQuery(css) {
      var match, smatch, attrs, attrMatch;
      css = css.replace(/'/g, '"');

      while (null !== (match = regex.exec(css))) {
        smatch = match[1] + match[3];
        attrs = match[2];

        while (null !== (attrMatch = attrRegex.exec(attrs))) {
          queueQuery(smatch, attrMatch[1], attrMatch[2], attrMatch[3]);
        }
      }
    }
    /**
     * @param {CssRule[]|String} rules
     */


    function readRules(rules) {
      var selector = '';

      if (!rules) {
        return;
      }

      if ('string' === typeof rules) {
        rules = rules.toLowerCase();

        if (-1 !== rules.indexOf('min-width') || -1 !== rules.indexOf('max-width')) {
          extractQuery(rules);
        }
      } else {
        for (var i = 0, j = rules.length; i < j; i++) {
          if (1 === rules[i].type) {
            selector = rules[i].selectorText || rules[i].cssText;

            if (-1 !== selector.indexOf('min-height') || -1 !== selector.indexOf('max-height')) {
              extractQuery(selector);
            } else if (-1 !== selector.indexOf('min-width') || -1 !== selector.indexOf('max-width')) {
              extractQuery(selector);
            }
          } else if (4 === rules[i].type) {
            readRules(rules[i].cssRules || rules[i].rules);
          } else if (3 === rules[i].type) {
            if (rules[i].styleSheet.hasOwnProperty("cssRules")) {
              readRules(rules[i].styleSheet.cssRules);
            }
          }
        }
      }
    }

    var defaultCssInjected = false;
    /**
     * Searches all css rules and setups the event listener to all elements with element query rules..
     */

    this.init = function () {
      var animationStart = 'animationstart';

      if (typeof document.documentElement.style['webkitAnimationName'] !== 'undefined') {
        animationStart = 'webkitAnimationStart';
      } else if (typeof document.documentElement.style['MozAnimationName'] !== 'undefined') {
        animationStart = 'mozanimationstart';
      } else if (typeof document.documentElement.style['OAnimationName'] !== 'undefined') {
        animationStart = 'oanimationstart';
      }

      document.body.addEventListener(animationStart, function (e) {
        var element = e.target;
        var styles = element && window.getComputedStyle(element, null);
        var animationName = styles && styles.getPropertyValue('animation-name');
        var requiresSetup = animationName && -1 !== animationName.indexOf('element-queries');

        if (requiresSetup) {
          element.elementQueriesSensor = new ResizeSensor(element, function () {
            if (element.elementQueriesSetupInformation) {
              element.elementQueriesSetupInformation.call();
            }
          });
          var sensorStyles = window.getComputedStyle(element.resizeSensor, null);
          var id = sensorStyles.getPropertyValue('min-width');
          id = parseInt(id.replace('px', ''));
          setupElement(e.target, idToSelectorMapping[id]);
        }
      });

      if (!defaultCssInjected) {
        cssStyleElement = document.createElement('style');
        cssStyleElement.type = 'text/css';
        cssStyleElement.innerHTML = '[responsive-image] > img, [data-responsive-image] {overflow: hidden; padding: 0; } [responsive-image] > img, [data-responsive-image] > img {width: 100%;}'; //safari wants at least one rule in keyframes to start working

        cssStyleElement.innerHTML += '\n@keyframes element-queries { 0% { visibility: inherit; } }';
        document.getElementsByTagName('head')[0].appendChild(cssStyleElement);
        defaultCssInjected = true;
      }

      for (var i = 0, j = document.styleSheets.length; i < j; i++) {
        try {
          if (document.styleSheets[i].href && 0 === document.styleSheets[i].href.indexOf('file://')) {
            console.warn("CssElementQueries: unable to parse local css files, " + document.styleSheets[i].href);
          }

          readRules(document.styleSheets[i].cssRules || document.styleSheets[i].rules || document.styleSheets[i].cssText);
        } catch (e) {}
      }

      findResponsiveImages();
    };
    /**
     * Go through all collected rules (readRules()) and attach the resize-listener.
     * Not necessary to call it manually, since we detect automatically when new elements
     * are available in the DOM. However, sometimes handy for dirty DOM modifications.
     *
     * @param {HTMLElement} container only elements of the container are considered (document.body if not set)
     */


    this.findElementQueriesElements = function (container) {
      findElementQueriesElements(container);
    };

    this.update = function () {
      this.init();
    };
  };

  ElementQueries.update = function () {
    ElementQueries.instance.update();
  };
  /**
   * Removes all sensor and elementquery information from the element.
   *
   * @param {HTMLElement} element
   */


  ElementQueries.detach = function (element) {
    if (element.elementQueriesSetupInformation) {
      //element queries
      element.elementQueriesSensor.detach();
      delete element.elementQueriesSetupInformation;
      delete element.elementQueriesSensor;
    } else if (element.resizeSensorInstance) {
      //responsive image
      element.resizeSensorInstance.detach();
      delete element.resizeSensorInstance;
    }
  };

  ElementQueries.init = function () {
    if (!ElementQueries.instance) {
      ElementQueries.instance = new ElementQueries();
    }

    ElementQueries.instance.init();
  };

  var domLoaded = function domLoaded(callback) {
    /* Mozilla, Chrome, Opera */
    if (document.addEventListener) {
      document.addEventListener('DOMContentLoaded', callback, false);
    }
    /* Safari, iCab, Konqueror */
    else if (/KHTML|WebKit|iCab/i.test(navigator.userAgent)) {
        var DOMLoadTimer = setInterval(function () {
          if (/loaded|complete/i.test(document.readyState)) {
            callback();
            clearInterval(DOMLoadTimer);
          }
        }, 10);
      }
      /* Other web browsers */
      else window.onload = callback;
  };

  ElementQueries.findElementQueriesElements = function (container) {
    ElementQueries.instance.findElementQueriesElements(container);
  };

  ElementQueries.listen = function () {
    domLoaded(ElementQueries.init);
  };

  return ElementQueries;
});

/***/ }),

/***/ "./node_modules/css-element-queries/src/ResizeSensor.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-element-queries/src/ResizeSensor.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;
/**
 * Copyright Marc J. Schmidt. See the LICENSE file at the top-level
 * directory of this distribution and at
 * https://github.com/marcj/css-element-queries/blob/master/LICENSE.
 */

(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(typeof window !== 'undefined' ? window : this, function () {
  // Make sure it does not throw in a SSR (Server Side Rendering) situation
  if (typeof window === "undefined") {
    return null;
  } // https://github.com/Semantic-Org/Semantic-UI/issues/3855
  // https://github.com/marcj/css-element-queries/issues/257


  var globalWindow = typeof window != 'undefined' && window.Math == Math ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')(); // Only used for the dirty checking, so the event callback count is limited to max 1 call per fps per sensor.
  // In combination with the event based resize sensor this saves cpu time, because the sensor is too fast and
  // would generate too many unnecessary events.

  var requestAnimationFrame = globalWindow.requestAnimationFrame || globalWindow.mozRequestAnimationFrame || globalWindow.webkitRequestAnimationFrame || function (fn) {
    return globalWindow.setTimeout(fn, 20);
  };

  var cancelAnimationFrame = globalWindow.cancelAnimationFrame || globalWindow.mozCancelAnimationFrame || globalWindow.webkitCancelAnimationFrame || function (timer) {
    globalWindow.clearTimeout(timer);
  };
  /**
   * Iterate over each of the provided element(s).
   *
   * @param {HTMLElement|HTMLElement[]} elements
   * @param {Function}                  callback
   */


  function forEachElement(elements, callback) {
    var elementsType = Object.prototype.toString.call(elements);
    var isCollectionTyped = '[object Array]' === elementsType || '[object NodeList]' === elementsType || '[object HTMLCollection]' === elementsType || '[object Object]' === elementsType || 'undefined' !== typeof jQuery && elements instanceof jQuery //jquery
    || 'undefined' !== typeof Elements && elements instanceof Elements //mootools
    ;
    var i = 0,
        j = elements.length;

    if (isCollectionTyped) {
      for (; i < j; i++) {
        callback(elements[i]);
      }
    } else {
      callback(elements);
    }
  }
  /**
  * Get element size
  * @param {HTMLElement} element
  * @returns {Object} {width, height}
  */


  function getElementSize(element) {
    if (!element.getBoundingClientRect) {
      return {
        width: element.offsetWidth,
        height: element.offsetHeight
      };
    }

    var rect = element.getBoundingClientRect();
    return {
      width: Math.round(rect.width),
      height: Math.round(rect.height)
    };
  }
  /**
   * Apply CSS styles to element.
   *
   * @param {HTMLElement} element
   * @param {Object} style
   */


  function setStyle(element, style) {
    Object.keys(style).forEach(function (key) {
      element.style[key] = style[key];
    });
  }
  /**
   * Class for dimension change detection.
   *
   * @param {Element|Element[]|Elements|jQuery} element
   * @param {Function} callback
   *
   * @constructor
   */


  var ResizeSensor = function ResizeSensor(element, callback) {
    //Is used when checking in reset() only for invisible elements
    var lastAnimationFrameForInvisibleCheck = 0;
    /**
     *
     * @constructor
     */

    function EventQueue() {
      var q = [];

      this.add = function (ev) {
        q.push(ev);
      };

      var i, j;

      this.call = function (sizeInfo) {
        for (i = 0, j = q.length; i < j; i++) {
          q[i].call(this, sizeInfo);
        }
      };

      this.remove = function (ev) {
        var newQueue = [];

        for (i = 0, j = q.length; i < j; i++) {
          if (q[i] !== ev) newQueue.push(q[i]);
        }

        q = newQueue;
      };

      this.length = function () {
        return q.length;
      };
    }
    /**
     *
     * @param {HTMLElement} element
     * @param {Function}    resized
     */


    function attachResizeEvent(element, resized) {
      if (!element) return;

      if (element.resizedAttached) {
        element.resizedAttached.add(resized);
        return;
      }

      element.resizedAttached = new EventQueue();
      element.resizedAttached.add(resized);
      element.resizeSensor = document.createElement('div');
      element.resizeSensor.dir = 'ltr';
      element.resizeSensor.className = 'resize-sensor';
      var style = {
        pointerEvents: 'none',
        position: 'absolute',
        left: '0px',
        top: '0px',
        right: '0px',
        bottom: '0px',
        overflow: 'hidden',
        zIndex: '-1',
        visibility: 'hidden',
        maxWidth: '100%'
      };
      var styleChild = {
        position: 'absolute',
        left: '0px',
        top: '0px',
        transition: '0s'
      };
      setStyle(element.resizeSensor, style);
      var expand = document.createElement('div');
      expand.className = 'resize-sensor-expand';
      setStyle(expand, style);
      var expandChild = document.createElement('div');
      setStyle(expandChild, styleChild);
      expand.appendChild(expandChild);
      var shrink = document.createElement('div');
      shrink.className = 'resize-sensor-shrink';
      setStyle(shrink, style);
      var shrinkChild = document.createElement('div');
      setStyle(shrinkChild, styleChild);
      setStyle(shrinkChild, {
        width: '200%',
        height: '200%'
      });
      shrink.appendChild(shrinkChild);
      element.resizeSensor.appendChild(expand);
      element.resizeSensor.appendChild(shrink);
      element.appendChild(element.resizeSensor);
      var computedStyle = window.getComputedStyle(element);
      var position = computedStyle ? computedStyle.getPropertyValue('position') : null;

      if ('absolute' !== position && 'relative' !== position && 'fixed' !== position && 'sticky' !== position) {
        element.style.position = 'relative';
      }

      var dirty = false; //last request animation frame id used in onscroll event

      var rafId = 0;
      var size = getElementSize(element);
      var lastWidth = 0;
      var lastHeight = 0;
      var initialHiddenCheck = true;
      lastAnimationFrameForInvisibleCheck = 0;

      var resetExpandShrink = function resetExpandShrink() {
        var width = element.offsetWidth;
        var height = element.offsetHeight;
        expandChild.style.width = width + 10 + 'px';
        expandChild.style.height = height + 10 + 'px';
        expand.scrollLeft = width + 10;
        expand.scrollTop = height + 10;
        shrink.scrollLeft = width + 10;
        shrink.scrollTop = height + 10;
      };

      var reset = function reset() {
        // Check if element is hidden
        if (initialHiddenCheck) {
          var invisible = element.offsetWidth === 0 && element.offsetHeight === 0;

          if (invisible) {
            // Check in next frame
            if (!lastAnimationFrameForInvisibleCheck) {
              lastAnimationFrameForInvisibleCheck = requestAnimationFrame(function () {
                lastAnimationFrameForInvisibleCheck = 0;
                reset();
              });
            }

            return;
          } else {
            // Stop checking
            initialHiddenCheck = false;
          }
        }

        resetExpandShrink();
      };

      element.resizeSensor.resetSensor = reset;

      var onResized = function onResized() {
        rafId = 0;
        if (!dirty) return;
        lastWidth = size.width;
        lastHeight = size.height;

        if (element.resizedAttached) {
          element.resizedAttached.call(size);
        }
      };

      var onScroll = function onScroll() {
        size = getElementSize(element);
        dirty = size.width !== lastWidth || size.height !== lastHeight;

        if (dirty && !rafId) {
          rafId = requestAnimationFrame(onResized);
        }

        reset();
      };

      var addEvent = function addEvent(el, name, cb) {
        if (el.attachEvent) {
          el.attachEvent('on' + name, cb);
        } else {
          el.addEventListener(name, cb);
        }
      };

      addEvent(expand, 'scroll', onScroll);
      addEvent(shrink, 'scroll', onScroll); // Fix for custom Elements and invisible elements

      lastAnimationFrameForInvisibleCheck = requestAnimationFrame(function () {
        lastAnimationFrameForInvisibleCheck = 0;
        reset();
      });
    }

    forEachElement(element, function (elem) {
      attachResizeEvent(elem, callback);
    });

    this.detach = function (ev) {
      // clean up the unfinished animation frame to prevent a potential endless requestAnimationFrame of reset
      if (!lastAnimationFrameForInvisibleCheck) {
        cancelAnimationFrame(lastAnimationFrameForInvisibleCheck);
        lastAnimationFrameForInvisibleCheck = 0;
      }

      ResizeSensor.detach(element, ev);
    };

    this.reset = function () {
      element.resizeSensor.resetSensor();
    };
  };

  ResizeSensor.reset = function (element) {
    forEachElement(element, function (elem) {
      elem.resizeSensor.resetSensor();
    });
  };

  ResizeSensor.detach = function (element, ev) {
    forEachElement(element, function (elem) {
      if (!elem) return;

      if (elem.resizedAttached && typeof ev === "function") {
        elem.resizedAttached.remove(ev);
        if (elem.resizedAttached.length()) return;
      }

      if (elem.resizeSensor) {
        if (elem.contains(elem.resizeSensor)) {
          elem.removeChild(elem.resizeSensor);
        }

        delete elem.resizeSensor;
        delete elem.resizedAttached;
      }
    });
  };

  if (typeof MutationObserver !== "undefined") {
    var observer = new MutationObserver(function (mutations) {
      for (var i in mutations) {
        if (mutations.hasOwnProperty(i)) {
          var items = mutations[i].addedNodes;

          for (var j = 0; j < items.length; j++) {
            if (items[j].resizeSensor) {
              ResizeSensor.reset(items[j]);
            }
          }
        }
      }
    });
    document.addEventListener("DOMContentLoaded", function (event) {
      observer.observe(document.body, {
        childList: true,
        subtree: true
      });
    });
  }

  return ResizeSensor;
});

/***/ }),

/***/ "./src/app/dashboard/dashboard-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/dashboard/dashboard-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: DashboardRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardRoutingModule", function() { return DashboardRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _dashboard1_dashboard1_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard1/dashboard1.component */ "./src/app/dashboard/dashboard1/dashboard1.component.ts");
/* harmony import */ var _dashboard2_dashboard2_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard2/dashboard2.component */ "./src/app/dashboard/dashboard2/dashboard2.component.ts");






var routes = [
    {
        path: '',
        children: [
            {
                path: 'dashboard1',
                component: _dashboard1_dashboard1_component__WEBPACK_IMPORTED_MODULE_2__["Dashboard1Component"],
                data: {
                    title: 'Dashboard 1'
                }
            },
            {
                path: 'dashboard2',
                component: _dashboard2_dashboard2_component__WEBPACK_IMPORTED_MODULE_3__["Dashboard2Component"],
                data: {
                    title: 'Dashboard 2'
                }
            },
        ]
    }
];
var DashboardRoutingModule = /** @class */ (function () {
    function DashboardRoutingModule() {
    }
    DashboardRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DashboardRoutingModule });
    DashboardRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DashboardRoutingModule_Factory(t) { return new (t || DashboardRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return DashboardRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DashboardRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/dashboard/dashboard.module.ts":
/*!***********************************************!*\
  !*** ./src/app/dashboard/dashboard.module.ts ***!
  \***********************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard-routing.module */ "./src/app/dashboard/dashboard-routing.module.ts");
/* harmony import */ var ng_chartist__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-chartist */ "./node_modules/ng-chartist/fesm2015/ng-chartist.js");
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-apexcharts */ "./node_modules/ng-apexcharts/fesm2015/ng-apexcharts.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var angular_resize_event__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-resize-event */ "./node_modules/angular-resize-event/fesm2015/angular-resize-event.js");
/* harmony import */ var _shared_directives_match_height_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/directives/match-height.directive */ "./src/app/shared/directives/match-height.directive.ts");
/* harmony import */ var _dashboard1_dashboard1_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dashboard1/dashboard1.component */ "./src/app/dashboard/dashboard1/dashboard1.component.ts");
/* harmony import */ var _dashboard2_dashboard2_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dashboard2/dashboard2.component */ "./src/app/dashboard/dashboard2/dashboard2.component.ts");











var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DashboardModule });
    DashboardModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DashboardModule_Factory(t) { return new (t || DashboardModule)(); }, providers: [], imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_2__["DashboardRoutingModule"],
                ng_chartist__WEBPACK_IMPORTED_MODULE_3__["ChartistModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
                _shared_directives_match_height_directive__WEBPACK_IMPORTED_MODULE_7__["MatchHeightModule"],
                ng_apexcharts__WEBPACK_IMPORTED_MODULE_4__["NgApexchartsModule"],
                angular_resize_event__WEBPACK_IMPORTED_MODULE_6__["AngularResizedEventModule"]
            ]] });
    return DashboardModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DashboardModule, { declarations: [_dashboard1_dashboard1_component__WEBPACK_IMPORTED_MODULE_8__["Dashboard1Component"],
        _dashboard2_dashboard2_component__WEBPACK_IMPORTED_MODULE_9__["Dashboard2Component"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_2__["DashboardRoutingModule"],
        ng_chartist__WEBPACK_IMPORTED_MODULE_3__["ChartistModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
        _shared_directives_match_height_directive__WEBPACK_IMPORTED_MODULE_7__["MatchHeightModule"],
        ng_apexcharts__WEBPACK_IMPORTED_MODULE_4__["NgApexchartsModule"],
        angular_resize_event__WEBPACK_IMPORTED_MODULE_6__["AngularResizedEventModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_2__["DashboardRoutingModule"],
                    ng_chartist__WEBPACK_IMPORTED_MODULE_3__["ChartistModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
                    _shared_directives_match_height_directive__WEBPACK_IMPORTED_MODULE_7__["MatchHeightModule"],
                    ng_apexcharts__WEBPACK_IMPORTED_MODULE_4__["NgApexchartsModule"],
                    angular_resize_event__WEBPACK_IMPORTED_MODULE_6__["AngularResizedEventModule"]
                ],
                exports: [],
                declarations: [
                    _dashboard1_dashboard1_component__WEBPACK_IMPORTED_MODULE_8__["Dashboard1Component"],
                    _dashboard2_dashboard2_component__WEBPACK_IMPORTED_MODULE_9__["Dashboard2Component"]
                ],
                providers: [],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/dashboard/dashboard1/dashboard1.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/dashboard/dashboard1/dashboard1.component.ts ***!
  \**************************************************************/
/*! exports provided: Dashboard1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dashboard1Component", function() { return Dashboard1Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var chartist__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! chartist */ "./node_modules/chartist/dist/chartist.js");
/* harmony import */ var chartist__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(chartist__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var chartist_plugin_tooltips_updated__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! chartist-plugin-tooltips-updated */ "./node_modules/chartist-plugin-tooltips-updated/dist/chartist-plugin-tooltip.js");
/* harmony import */ var chartist_plugin_tooltips_updated__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(chartist_plugin_tooltips_updated__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var angular_resize_event__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-resize-event */ "./node_modules/angular-resize-event/fesm2015/angular-resize-event.js");
/* harmony import */ var ng_chartist__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-chartist */ "./node_modules/ng-chartist/fesm2015/ng-chartist.js");






var data = __webpack_require__(/*! ../../shared/data/chartist.json */ "./src/app/shared/data/chartist.json");
var Dashboard1Component = /** @class */ (function () {
    function Dashboard1Component() {
        // Line area chart configuration Starts
        this.lineArea = {
            type: 'Line',
            data: data['lineAreaDashboard'],
            options: {
                low: 0,
                showArea: true,
                fullWidth: true,
                onlyInteger: true,
                axisY: {
                    low: 0,
                    scaleMinSpace: 50,
                },
                plugins: [
                    chartist_plugin_tooltips_updated__WEBPACK_IMPORTED_MODULE_2___default()({
                        appendToBody: true,
                        pointClass: 'ct-point-regular'
                    })
                ],
                axisX: {
                    showGrid: false
                }
            },
            events: {
                created: function (data) {
                    var defs = data.svg.elem('defs');
                    defs.elem('linearGradient', {
                        id: 'gradient',
                        x1: 0,
                        y1: 1,
                        x2: 1,
                        y2: 0
                    }).elem('stop', {
                        offset: 0,
                        'stop-color': 'rgba(0, 201, 255, 1)'
                    }).parent().elem('stop', {
                        offset: 1,
                        'stop-color': 'rgba(146, 254, 157, 1)'
                    });
                    defs.elem('linearGradient', {
                        id: 'gradient1',
                        x1: 0,
                        y1: 1,
                        x2: 1,
                        y2: 0
                    }).elem('stop', {
                        offset: 0,
                        'stop-color': 'rgba(132, 60, 247, 1)'
                    }).parent().elem('stop', {
                        offset: 1,
                        'stop-color': 'rgba(56, 184, 242, 1)'
                    });
                },
                draw: function (data) {
                    if (data.type === 'point') {
                        var circle = new chartist__WEBPACK_IMPORTED_MODULE_1__["Svg"]('circle', {
                            cx: data.x,
                            cy: data.y,
                            r: 4,
                            'ct:value': data.value.y,
                            'ct:meta': data.meta,
                            style: 'pointer-events: all !important',
                            class: 'ct-point-regular'
                        });
                        data.element.replace(circle);
                    }
                }
            },
        };
        // Line area chart configuration Ends
        // Stacked Bar chart configuration Starts
        this.Stackbarchart = {
            type: 'Bar',
            data: data['Stackbarchart'],
            options: {
                stackBars: true,
                fullWidth: true,
                axisX: {
                    showGrid: false,
                },
                axisY: {
                    showGrid: false,
                    showLabel: false,
                    offset: 0
                },
                chartPadding: 30
            },
            events: {
                created: function (data) {
                    var defs = data.svg.elem('defs');
                    defs.elem('linearGradient', {
                        id: 'linear',
                        x1: 0,
                        y1: 1,
                        x2: 0,
                        y2: 0
                    }).elem('stop', {
                        offset: 0,
                        'stop-color': '#7441DB'
                    }).parent().elem('stop', {
                        offset: 1,
                        'stop-color': '#C89CFF'
                    });
                },
                draw: function (data) {
                    if (data.type === 'bar') {
                        data.element.attr({
                            style: 'stroke-width: 5px',
                            x1: data.x1 + 0.001
                        });
                    }
                    else if (data.type === 'label') {
                        data.element.attr({
                            y: 270
                        });
                    }
                }
            },
        };
        // Stacked Bar chart configuration Ends
        // Line area chart 2 configuration Starts
        this.lineArea2 = {
            type: 'Line',
            data: data['lineArea2'],
            options: {
                showArea: true,
                fullWidth: true,
                lineSmooth: chartist__WEBPACK_IMPORTED_MODULE_1__["Interpolation"].none(),
                axisX: {
                    showGrid: false,
                },
                axisY: {
                    low: 0,
                    scaleMinSpace: 50
                },
                plugins: [
                    chartist_plugin_tooltips_updated__WEBPACK_IMPORTED_MODULE_2___default()({
                        appendToBody: true,
                        pointClass: 'ct-point-circle'
                    })
                ],
            },
            responsiveOptions: [
                ['screen and (max-width: 640px) and (min-width: 381px)', {
                        axisX: {
                            labelInterpolationFnc: function (value, index) {
                                return index % 2 === 0 ? value : null;
                            }
                        }
                    }],
                ['screen and (max-width: 380px)', {
                        axisX: {
                            labelInterpolationFnc: function (value, index) {
                                return index % 3 === 0 ? value : null;
                            }
                        }
                    }]
            ],
            events: {
                created: function (data) {
                    var defs = data.svg.elem('defs');
                    defs.elem('linearGradient', {
                        id: 'gradient2',
                        x1: 0,
                        y1: 1,
                        x2: 0,
                        y2: 0
                    }).elem('stop', {
                        offset: 0,
                        'stop-opacity': '0.2',
                        'stop-color': 'transparent'
                    }).parent().elem('stop', {
                        offset: 1,
                        'stop-opacity': '0.2',
                        'stop-color': '#60AFF0'
                    });
                    defs.elem('linearGradient', {
                        id: 'gradient3',
                        x1: 0,
                        y1: 1,
                        x2: 0,
                        y2: 0
                    }).elem('stop', {
                        offset: 0.3,
                        'stop-opacity': '0.2',
                        'stop-color': 'transparent'
                    }).parent().elem('stop', {
                        offset: 1,
                        'stop-opacity': '0.2',
                        'stop-color': '#6CD975'
                    });
                },
                draw: function (data) {
                    var circleRadius = 4;
                    if (data.type === 'point') {
                        var circle = new chartist__WEBPACK_IMPORTED_MODULE_1__["Svg"]('circle', {
                            cx: data.x,
                            cy: data.y,
                            r: circleRadius,
                            'ct:value': data.value.y,
                            'ct:meta': data.meta,
                            style: 'pointer-events: all !important',
                            class: 'ct-point-circle'
                        });
                        data.element.replace(circle);
                    }
                    else if (data.type === 'label') {
                        // adjust label position for rotation
                        var dX = data.width / 2 + (30 - data.width);
                        data.element.attr({ x: data.element.attr('x') - dX });
                    }
                }
            },
        };
        // Line area chart 2 configuration Ends
        // Line chart configuration Starts
        this.lineChart = {
            type: 'Line', data: data['LineDashboard'],
            options: {
                axisX: {
                    showGrid: false
                },
                axisY: {
                    showGrid: false,
                    showLabel: false,
                    low: 0,
                    high: 100,
                    offset: 0,
                },
                plugins: [
                    chartist_plugin_tooltips_updated__WEBPACK_IMPORTED_MODULE_2___default()({
                        appendToBody: true,
                        currency: '$',
                        pointClass: 'ct-point-circle'
                    })
                ],
                fullWidth: true,
                offset: 0,
            },
            events: {
                draw: function (data) {
                    var circleRadius = 4;
                    if (data.type === 'point') {
                        var circle = new chartist__WEBPACK_IMPORTED_MODULE_1__["Svg"]('circle', {
                            cx: data.x,
                            cy: data.y,
                            r: circleRadius,
                            'ct:value': data.value.y,
                            'ct:meta': data.meta,
                            style: 'pointer-events: all !important',
                            class: 'ct-point-circle'
                        });
                        data.element.replace(circle);
                    }
                    else if (data.type === 'label') {
                        // adjust label position for rotation
                        var dX = data.width / 2 + (30 - data.width);
                        data.element.attr({ x: data.element.attr('x') - dX });
                    }
                }
            },
        };
        // Line chart configuration Ends
        // Donut chart configuration Starts
        this.DonutChart = {
            type: 'Pie',
            data: data['donutDashboard'],
            options: {
                donut: true,
                startAngle: 0,
                labelInterpolationFnc: function (value) {
                    var total = data['donutDashboard'].series.reduce(function (prev, series) {
                        return prev + series.value;
                    }, 0);
                    return total + '%';
                }
            },
            events: {
                draw: function (data) {
                    if (data.type === 'label') {
                        if (data.index === 0) {
                            data.element.attr({
                                dx: data.element.root().width() / 2,
                                dy: data.element.root().height() / 2
                            });
                        }
                        else {
                            data.element.remove();
                        }
                    }
                }
            }
        };
        // Donut chart configuration Ends
        //  Bar chart configuration Starts
        this.BarChart = {
            type: 'Bar', data: data['DashboardBar'], options: {
                axisX: {
                    showGrid: false,
                },
                axisY: {
                    showGrid: false,
                    showLabel: false,
                    offset: 0
                },
                low: 0,
                high: 60,
            },
            responsiveOptions: [
                ['screen and (max-width: 640px)', {
                        seriesBarDistance: 5,
                        axisX: {
                            labelInterpolationFnc: function (value) {
                                return value[0];
                            }
                        }
                    }]
            ],
            events: {
                created: function (data) {
                    var defs = data.svg.elem('defs');
                    defs.elem('linearGradient', {
                        id: 'gradient4',
                        x1: 0,
                        y1: 1,
                        x2: 0,
                        y2: 0
                    }).elem('stop', {
                        offset: 0,
                        'stop-color': '#8E1A38'
                    }).parent().elem('stop', {
                        offset: 1,
                        'stop-color': '#FAA750'
                    });
                    defs.elem('linearGradient', {
                        id: 'gradient5',
                        x1: 0,
                        y1: 1,
                        x2: 0,
                        y2: 0
                    }).elem('stop', {
                        offset: 0,
                        'stop-color': '#1750A5'
                    }).parent().elem('stop', {
                        offset: 1,
                        'stop-color': '#40C057'
                    });
                    defs.elem('linearGradient', {
                        id: 'gradient6',
                        x1: 0,
                        y1: 1,
                        x2: 0,
                        y2: 0
                    }).elem('stop', {
                        offset: 0,
                        'stop-color': '#3B1C93'
                    }).parent().elem('stop', {
                        offset: 1,
                        'stop-color': '#60AFF0'
                    });
                    defs.elem('linearGradient', {
                        id: 'gradient7',
                        x1: 0,
                        y1: 1,
                        x2: 0,
                        y2: 0
                    }).elem('stop', {
                        offset: 0,
                        'stop-color': '#562DB7'
                    }).parent().elem('stop', {
                        offset: 1,
                        'stop-color': '#F55252'
                    });
                },
                draw: function (data) {
                    var barHorizontalCenter, barVerticalCenter, label, value;
                    if (data.type === 'bar') {
                        data.element.attr({
                            y1: 195,
                            x1: data.x1 + 0.001
                        });
                    }
                }
            },
        };
        // Bar chart configuration Ends
        // line chart configuration Starts
        this.WidgetlineChart = {
            type: 'Line', data: data['Dashboard1_WidgetlineChart'],
            options: {
                axisX: {
                    showGrid: false,
                    showLabel: false,
                    offset: 0
                },
                axisY: {
                    showGrid: false,
                    low: 40,
                    showLabel: false,
                    offset: 0
                },
                plugins: [
                    chartist_plugin_tooltips_updated__WEBPACK_IMPORTED_MODULE_2___default()({
                        appendToBody: true,
                        currency: '$',
                        pointClass: 'ct-point-regular'
                    })
                ],
                lineSmooth: chartist__WEBPACK_IMPORTED_MODULE_1__["Interpolation"].cardinal({
                    tension: 0
                }),
                fullWidth: true
            },
            events: {
                draw: function (data) {
                    if (data.type === 'point') {
                        var circle = new chartist__WEBPACK_IMPORTED_MODULE_1__["Svg"]('circle', {
                            cx: data.x,
                            cy: data.y,
                            r: 4,
                            'ct:value': data.value.y,
                            'ct:meta': data.meta,
                            style: 'pointer-events: all !important',
                            class: 'ct-point-regular'
                        });
                        data.element.replace(circle);
                    }
                }
            }
        };
        // Line chart configuration Ends
        // line chart configuration Starts
        this.WidgetlineChart1 = {
            type: 'Line', data: data['Dashboard1_WidgetlineChart1'],
            options: {
                axisX: {
                    showGrid: false,
                    showLabel: false,
                    offset: 0
                },
                axisY: {
                    showGrid: false,
                    low: 40,
                    showLabel: false,
                    offset: 0
                },
                plugins: [
                    chartist_plugin_tooltips_updated__WEBPACK_IMPORTED_MODULE_2___default()({
                        appendToBody: true,
                        currency: '$',
                        pointClass: 'ct-point-regular'
                    })
                ],
                lineSmooth: chartist__WEBPACK_IMPORTED_MODULE_1__["Interpolation"].cardinal({
                    tension: 0
                }),
                fullWidth: true
            },
            events: {
                draw: function (data) {
                    if (data.type === 'point') {
                        var circle = new chartist__WEBPACK_IMPORTED_MODULE_1__["Svg"]('circle', {
                            cx: data.x,
                            cy: data.y,
                            r: 4,
                            'ct:value': data.value.y,
                            'ct:meta': data.meta,
                            style: 'pointer-events: all !important',
                            class: 'ct-point-regular'
                        });
                        data.element.replace(circle);
                    }
                }
            }
        };
        // Line chart configuration Ends
        // line chart configuration Starts
        this.WidgetlineChart2 = {
            type: 'Line', data: data['Dashboard1_WidgetlineChart2'],
            options: {
                axisX: {
                    showGrid: false,
                    showLabel: false,
                    offset: 0
                },
                axisY: {
                    showGrid: false,
                    low: 40,
                    showLabel: false,
                    offset: 0
                },
                plugins: [
                    chartist_plugin_tooltips_updated__WEBPACK_IMPORTED_MODULE_2___default()({
                        appendToBody: true,
                        currency: '$',
                        pointClass: 'ct-point-regular'
                    })
                ],
                lineSmooth: chartist__WEBPACK_IMPORTED_MODULE_1__["Interpolation"].cardinal({
                    tension: 0
                }),
                fullWidth: true
            },
            events: {
                draw: function (data) {
                    if (data.type === 'point') {
                        var circle = new chartist__WEBPACK_IMPORTED_MODULE_1__["Svg"]('circle', {
                            cx: data.x,
                            cy: data.y,
                            r: 4,
                            'ct:value': data.value.y,
                            'ct:meta': data.meta,
                            style: 'pointer-events: all !important',
                            class: 'ct-point-regular'
                        });
                        data.element.replace(circle);
                    }
                }
            }
        };
        // Line chart configuration Ends
        // line chart configuration Starts
        this.WidgetlineChart3 = {
            type: 'Line', data: data['Dashboard1_WidgetlineChart3'],
            options: {
                axisX: {
                    showGrid: false,
                    showLabel: false,
                    offset: 0
                },
                axisY: {
                    showGrid: false,
                    low: 40,
                    showLabel: false,
                    offset: 0
                },
                plugins: [
                    chartist_plugin_tooltips_updated__WEBPACK_IMPORTED_MODULE_2___default()({
                        appendToBody: true,
                        currency: '$',
                        pointClass: 'ct-point-regular'
                    })
                ],
                lineSmooth: chartist__WEBPACK_IMPORTED_MODULE_1__["Interpolation"].cardinal({
                    tension: 0
                }),
                fullWidth: true
            },
            events: {
                draw: function (data) {
                    if (data.type === 'point') {
                        var circle = new chartist__WEBPACK_IMPORTED_MODULE_1__["Svg"]('circle', {
                            cx: data.x,
                            cy: data.y,
                            r: 4,
                            'ct:value': data.value.y,
                            'ct:meta': data.meta,
                            style: 'pointer-events: all !important',
                            class: 'ct-point-regular'
                        });
                        data.element.replace(circle);
                    }
                }
            }
        };
        this.fireRefreshEventOnWindow = function () {
            var evt = document.createEvent("HTMLEvents");
            evt.initEvent("resize", true, false);
            window.dispatchEvent(evt);
        };
    }
    // Line chart configuration Ends
    Dashboard1Component.prototype.onResized = function (event) {
        var _this = this;
        setTimeout(function () {
            _this.fireRefreshEventOnWindow();
        }, 300);
    };
    Dashboard1Component.ɵfac = function Dashboard1Component_Factory(t) { return new (t || Dashboard1Component)(); };
    Dashboard1Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Dashboard1Component, selectors: [["app-dashboard1"]], decls: 351, vars: 50, consts: [[1, "row", 3, "resized"], [1, "col-xl-3", "col-lg-6", "col-md-6", "col-12"], [1, "card", "gradient-purple-love"], [1, "card-content"], [1, "card-body", "py-0"], [1, "media", "pb-1"], [1, "media-body", "white", "text-left"], [1, "font-large-1", "white", "mb-0"], [1, "media-right", "white", "text-right"], [1, "ft-activity", "font-large-1"], ["id", "Widget-line-chart", 1, "WidgetlineChart", "WidgetlineChartshadow", "mb-2"], [1, "height-75", 3, "data", "type", "options", "responsiveOptions", "events"], [1, "card", "gradient-ibiza-sunset"], [1, "ft-percent", "font-large-1"], [1, "card", "gradient-mint"], [1, "ft-trending-up", "font-large-1"], [1, "card", "gradient-king-yna"], [1, "ft-credit-card", "font-large-1"], [1, "row"], [1, "col-12"], [1, "card"], [1, "card-header"], [1, "card-title"], [1, "card-body"], [1, "chart-info", "mb-3", "ml-3"], [1, "gradient-purple-bliss", "d-inline-block", "rounded-circle", "mr-1", 2, "width", "15px", "height", "15px"], [1, "gradient-mint", "d-inline-block", "rounded-circle", "mr-1", "ml-2", 2, "width", "15px", "height", "15px"], ["id", "line-area", 1, "lineArea"], [1, "height-350", 3, "data", "type", "options", "responsiveOptions", "events"], [1, "row", "match-height"], [1, "col-xl-4", "col-lg-12", "col-12"], [1, "font-medium-2", "text-center", "my-2"], ["id", "Stack-bar-chart", 1, "Stackbarchart", "mb-2"], [1, "height-300", 3, "data", "type", "options", "responsiveOptions", "events"], [1, "col-xl-8", "col-lg-12", "col-12"], [1, "card", "shopping-cart"], [1, "card-header", "pb-2"], [1, "card-title", "mb-1"], [1, "card-body", "p-0"], [1, "table-responsive"], [1, "table", "text-center", "m-0"], ["src", "assets/img/elements/01.png", "alt", "Generic placeholder image", 1, "height-50"], [1, "badge", "badge-pill", "bg-light-primary", "cursor-pointer"], [1, "ft-trash-2"], ["src", "assets/img/elements/15.png", "alt", "Generic placeholder image", 1, "height-50"], [1, "badge", "badge-pill", "bg-light-danger", "cursor-pointer"], ["src", "assets/img/elements/11.png", "alt", "Generic placeholder image", 1, "height-50"], [1, "badge", "badge-pill", "bg-light-info", "cursor-pointer"], ["src", "assets/img/elements/14.png", "alt", "Generic placeholder image", 1, "height-50"], [1, "badge", "badge-pill", "bg-light-success", "cursor-pointer"], [1, "card-title", "mb-0"], [1, "chart-info", "mb-2"], [1, "text-uppercase", "mr-3"], [1, "fa", "fa-circle", "success", "font-small-2", "mr-1"], [1, "text-uppercase"], [1, "fa", "fa-circle", "info", "font-small-2", "mr-1"], ["id", "line-area2", 1, "lineArea2"], [1, "height-400", 3, "data", "type", "options", "responsiveOptions", "events"], [1, "card", "gradient-purple-bliss"], [1, "card-title", "white"], [1, "p-2", "text-center"], [1, "white", "font-medium-1"], [1, "btn", "round", "bg-light-info", "mx-3", "px-3"], [1, "my-3", "text-center", "white"], [1, "font-large-2", "d-block", "mb-1"], [1, "ft-arrow-up", "font-large-2"], [1, "font-medium-1"], ["id", "lineChart", 1, "lineChart", "lineChartShadow"], [1, "height-250", 3, "data", "type", "options", "responsiveOptions", "events"], [1, "col-xl-4", "col-md-6", "col-12"], [1, "font-medium-2", "text-center", "mb-0", "mt-2"], ["id", "bar-chart", 1, "BarChartShadow", "BarChart"], [1, "col", "text-center"], [1, "gradient-starfall", "d-block", "rounded-circle", "mx-auto", "mb-2", 2, "width", "10px", "height", "10px"], [1, "font-medium-4", "d-block", "mb-2"], [1, "font-small-3"], [1, "gradient-mint", "d-block", "rounded-circle", "mx-auto", "mb-2", 2, "width", "10px", "height", "10px"], [1, "gradient-purple-bliss", "d-block", "rounded-circle", "mx-auto", "mb-2", 2, "width", "10px", "height", "10px"], [1, "gradient-ibiza-sunset", "d-block", "rounded-circle", "mx-auto", "mb-2", 2, "width", "10px", "height", "10px"], [1, "media", "pt-0", "pb-2"], ["src", "assets/img/portrait/small/avatar-s-12.png", "alt", "Avatar", "width", "35", 1, "mr-3", "avatar"], [1, "media-body"], [1, "font-medium-1", "mb-0"], [1, "text-muted", "font-small-3", "m-0"], [1, "mt-1"], [1, "checkbox"], ["type", "checkbox", "id", "dash-checkbox1", "checked", ""], ["for", "dash-checkbox1"], [1, "media", "py-2"], ["src", "assets/img/portrait/small/avatar-s-11.png", "alt", "Avatar", "width", "35", 1, "mr-3", "avatar"], ["type", "checkbox", "id", "dash-checkbox2"], ["for", "dash-checkbox2"], ["src", "assets/img/portrait/small/avatar-s-3.png", "alt", "Avatar", "width", "35", 1, "mr-3", "avatar"], ["type", "checkbox", "id", "dash-checkbox3"], ["for", "dash-checkbox3"], ["src", "assets/img/portrait/small/avatar-s-22.png", "alt", "Avatar", "width", "35", 1, "mr-3", "avatar"], ["type", "checkbox", "id", "dash-checkbox4", "checked", ""], ["for", "dash-checkbox4"], ["src", "assets/img/portrait/small/avatar-s-18.png", "alt", "Avatar", "width", "35", 1, "mr-3", "avatar"], ["type", "checkbox", "id", "dash-checkbox5"], ["for", "dash-checkbox5"], ["src", "assets/img/portrait/small/avatar-s-21.png", "alt", "Avatar", "width", "35", 1, "mr-3", "avatar"], ["type", "checkbox", "id", "dash-checkbox6", "checked", ""], ["for", "dash-checkbox6"], [1, "text-center", "mt-2"], ["type", "button", 1, "btn", "bg-light-primary"], [1, "col-xl-4", "col-12"], ["id", "donut-dashboard-chart", 1, "donut"], [1, "row", "mb-3"], [1, "col"], [1, "mb-1", "text-muted", "d-block"], [1, "progress", 2, "height", "5px"], ["role", "progressbar", "aria-valuenow", "23", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg-info", 2, "width", "23%"], ["role", "progressbar", "aria-valuenow", "28", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg-success", 2, "width", "28%"], [1, "row", "mb-2"], ["role", "progressbar", "aria-valuenow", "35", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg-primary", 2, "width", "35%"], ["role", "progressbar", "aria-valuenow", "14", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg-warning", 2, "width", "14%"]], template: function Dashboard1Component_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resized", function Dashboard1Component_Template_div_resized_0_listener($event) { return ctx.onResized($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "$2,156");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Total Tax");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "x-chartist", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h3", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "$15,678");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Total Cost");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "i", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "x-chartist", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h3", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "$45,668");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Total Sales");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "i", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "x-chartist", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "h3", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "$32,454");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Total Earning");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "i", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "x-chartist", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "h4", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "PRODUCTS SALES");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "span", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Sales");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "span", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Visits");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "x-chartist", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "h4", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Statistics");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "p", 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Last 6 Months Sales");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "x-chartist", 33);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 34);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 35);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 36);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "h4", 37);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "Shopping Cart");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 38);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 39);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "table", 40);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "thead");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "tr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "Image");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "Product");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "Quantity");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "Status");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "Amount");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "th");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "Delete");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "tbody");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "tr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](112, "img", 41);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "Espresso");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "1");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "span", 42);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "Active");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "$19.94");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](123, "i", 43);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "tr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](126, "img", 44);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, "iPhone");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "2");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "span", 45);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, "Disabled");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, "$99.00");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](137, "i", 43);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "tr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](140, "img", 46);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, "iMac");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, "1");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "span", 47);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147, "Paused");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, "$299.00");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](151, "i", 43);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "tr");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](154, "img", 48);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156, "iWatch");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](158, "2");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "span", 49);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](161, "Active");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](163, "$24.51");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "td");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](165, "i", 43);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "div", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "div", 34);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "div", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "div", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "h4", 50);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, "Visit & Sales Statistics");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "div", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "div", 51);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "span", 52);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](176, "i", 53);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](177, " Sales");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "span", 54);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](179, "i", 55);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](180, " Visits");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "div", 56);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](182, "x-chartist", 57);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "div", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "div", 58);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "div", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "h4", 59);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](188, "Statistics");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "div", 60);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](190, "a", 61);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](191, "Month");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "a", 62);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](193, "Week");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "a", 61);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](195, "Day");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "div", 63);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "div", 64);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](198, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](199, "$78.89");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](200, "i", 65);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "span", 66);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](202, "Week2 +15.44");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "div", 67);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](204, "x-chartist", 68);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "div", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "div", 69);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "div", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "div", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "h4", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](210, "Statistics");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "p", 70);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](213, "Hobbies");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](214, "div", 71);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](215, "x-chartist", 68);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "div", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "div", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "div", 72);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](219, "span", 73);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](220, "span", 74);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](221, "48");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](222, "span", 75);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](223, "Sport");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](224, "div", 72);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](225, "span", 76);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](226, "span", 74);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](227, "9");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "span", 75);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](229, "Music");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "div", 72);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](231, "span", 77);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](232, "span", 74);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](233, "26");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](234, "span", 75);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](235, "Travel");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](236, "div", 72);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](237, "span", 78);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](238, "span", 74);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](239, "17");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](240, "span", 75);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](241, "News");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](242, "div", 69);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](243, "div", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](244, "div", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](245, "h4", 50);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](246, "User List");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](247, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](248, "div", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](249, "div", 79);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](250, "img", 80);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](251, "div", 81);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](252, "h4", 82);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](253, "Jessica Rice");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](254, "p", 83);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](255, "UX Designer");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](256, "div", 84);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](257, "div", 85);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](258, "input", 86);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](259, "label", 87);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](260, "div", 88);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](261, "img", 89);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](262, "div", 81);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](263, "h4", 82);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](264, "Jacob Rios");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](265, "p", 83);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](266, "HTML Developer");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](267, "div", 84);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](268, "div", 85);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](269, "input", 90);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](270, "label", 91);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](271, "div", 88);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](272, "img", 92);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](273, "div", 81);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](274, "h4", 82);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](275, "Russell Delgado");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](276, "p", 83);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](277, "Database Designer");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](278, "div", 84);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](279, "div", 85);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](280, "input", 93);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](281, "label", 94);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](282, "div", 88);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](283, "img", 95);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](284, "div", 81);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](285, "h4", 82);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](286, "Sara McDonald");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](287, "p", 83);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](288, "Team Leader");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](289, "div", 84);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](290, "div", 85);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](291, "input", 96);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](292, "label", 97);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](293, "div", 88);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](294, "img", 98);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](295, "div", 81);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](296, "h4", 82);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](297, "Janet Lucas");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](298, "p", 83);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](299, "Project Manger");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](300, "div", 84);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](301, "div", 85);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](302, "input", 99);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](303, "label", 100);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](304, "div", 88);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](305, "img", 101);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](306, "div", 81);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](307, "h4", 82);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](308, "Mark Carter");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](309, "p", 83);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](310, "HTML Developer");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](311, "div", 84);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](312, "div", 85);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](313, "input", 102);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](314, "label", 103);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](315, "div", 104);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](316, "button", 105);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](317, "Add New");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](318, "div", 106);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](319, "div", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](320, "div", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](321, "h4", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](322, "Project Stats");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](323, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](324, "p", 70);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](325, "Project Tasks");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](326, "div", 107);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](327, "x-chartist", 68);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](328, "div", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](329, "div", 108);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](330, "div", 109);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](331, "span", 110);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](332, "23% - Started");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](333, "div", 111);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](334, "div", 112);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](335, "div", 109);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](336, "span", 110);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](337, "28% - Done");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](338, "div", 111);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](339, "div", 113);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](340, "div", 114);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](341, "div", 109);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](342, "span", 110);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](343, "35% - Remaining");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](344, "div", 111);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](345, "div", 115);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](346, "div", 109);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](347, "span", 110);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](348, "14% - In Progress");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](349, "div", 111);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](350, "div", 116);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.WidgetlineChart.data)("type", ctx.WidgetlineChart.type)("options", ctx.WidgetlineChart.options)("responsiveOptions", ctx.WidgetlineChart.responsiveOptions)("events", ctx.WidgetlineChart.events);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.WidgetlineChart1.data)("type", ctx.WidgetlineChart1.type)("options", ctx.WidgetlineChart1.options)("responsiveOptions", ctx.WidgetlineChart1.responsiveOptions)("events", ctx.WidgetlineChart1.events);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.WidgetlineChart2.data)("type", ctx.WidgetlineChart2.type)("options", ctx.WidgetlineChart2.options)("responsiveOptions", ctx.WidgetlineChart2.responsiveOptions)("events", ctx.WidgetlineChart2.events);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.WidgetlineChart3.data)("type", ctx.WidgetlineChart3.type)("options", ctx.WidgetlineChart3.options)("responsiveOptions", ctx.WidgetlineChart3.responsiveOptions)("events", ctx.WidgetlineChart3.events);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.lineArea.data)("type", ctx.lineArea.type)("options", ctx.lineArea.options)("responsiveOptions", ctx.lineArea.responsiveOptions)("events", ctx.lineArea.events);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.Stackbarchart.data)("type", ctx.Stackbarchart.type)("options", ctx.Stackbarchart.options)("responsiveOptions", ctx.Stackbarchart.responsiveOptions)("events", ctx.Stackbarchart.events);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](97);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.lineArea2.data)("type", ctx.lineArea2.type)("options", ctx.lineArea2.options)("responsiveOptions", ctx.lineArea2.responsiveOptions)("events", ctx.lineArea2.events);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.lineChart.data)("type", ctx.lineChart.type)("options", ctx.lineChart.options)("responsiveOptions", ctx.lineChart.responsiveOptions)("events", ctx.lineChart.events);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.BarChart.data)("type", ctx.BarChart.type)("options", ctx.BarChart.options)("responsiveOptions", ctx.BarChart.responsiveOptions)("events", ctx.BarChart.events);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](112);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.DonutChart.data)("type", ctx.DonutChart.type)("options", ctx.DonutChart.options)("responsiveOptions", ctx.DonutChart.responsiveOptions)("events", ctx.DonutChart.events);
        } }, directives: [angular_resize_event__WEBPACK_IMPORTED_MODULE_3__["ResizedDirective"], ng_chartist__WEBPACK_IMPORTED_MODULE_4__["ChartistComponent"]], styles: ["[_nghost-%COMP%]     .ct-grid {\n  stroke-dasharray: 0;\n  stroke: rgba(0, 0, 0, 0.1);\n}\n\n[_nghost-%COMP%]     .ct-label {\n  font-size: 0.9rem;\n}\n\n[_nghost-%COMP%]     .WidgetlineChart .ct-point {\n  stroke-width: 0;\n}\n\n[_nghost-%COMP%]     .WidgetlineChart .ct-line {\n  stroke: rgba(255, 255, 255, 0.6);\n  stroke-width: 4px;\n}\n\n[_nghost-%COMP%]     .WidgetlineChart .ct-grid {\n  stroke-dasharray: 0;\n  stroke: transparent !important;\n}\n\n[_nghost-%COMP%]     .WidgetlineChart .ct-point-regular {\n  stroke-width: 2px;\n  fill: transparent;\n  stroke: transparent !important;\n}\n\n[_nghost-%COMP%]     .WidgetlineChartshadow {\n  filter: drop-shadow(0px 13px 6px rgba(0, 0, 0, 0.5));\n  \n}\n\n[_nghost-%COMP%]     .lineArea .ct-line {\n  stroke-width: 0;\n}\n\n[_nghost-%COMP%]     .lineArea .ct-point {\n  stroke-width: 0;\n}\n\n[_nghost-%COMP%]     .lineArea .ct-series-a .ct-area {\n  fill-opacity: 0.7;\n  fill: url(\"/dashboard/dashboard1#gradient1\") !important;\n}\n\n[_nghost-%COMP%]     .lineArea .ct-series-b .ct-area {\n  fill: url(\"/dashboard/dashboard1#gradient\") !important;\n  fill-opacity: 0.9;\n}\n\n[_nghost-%COMP%]     .lineArea .ct-point-regular {\n  stroke-width: 2px;\n  fill: transparent;\n  stroke: transparent !important;\n}\n\n[_nghost-%COMP%]     .Stackbarchart .ct-series-a .ct-bar {\n  stroke: url(\"/dashboard/dashboard1#linear\") !important;\n}\n\n[_nghost-%COMP%]     .Stackbarchart .ct-series-b .ct-bar {\n  stroke: #EEEEEE;\n}\n\n[_nghost-%COMP%]     .shopping-cart i.ft-trash-2 {\n  cursor: pointer;\n}\n\n[_nghost-%COMP%]     .shopping-cart i.ft-trash-2:hover {\n  color: #F55252;\n}\n\n[_nghost-%COMP%]     .shopping-cart table td {\n  vertical-align: middle;\n}\n\n[_nghost-%COMP%]     .lineArea2 .ct-line {\n  fill: none;\n  stroke-width: 2px;\n}\n\n[_nghost-%COMP%]     .lineArea2 .ct-point-circle {\n  stroke-width: 2px;\n  fill: #FFFFFF;\n}\n\n[_nghost-%COMP%]     .lineArea2 .ct-series-a .ct-area {\n  fill: url(\"/dashboard/dashboard1#gradient2\") !important;\n  fill-opacity: 0.8;\n}\n\n[_nghost-%COMP%]     .lineArea2 .ct-series-a .ct-line {\n  stroke: #60AFF0;\n}\n\n[_nghost-%COMP%]     .lineArea2 .ct-series-a .ct-point-circle {\n  stroke: #2F8BE6;\n}\n\n[_nghost-%COMP%]     .lineArea2 .ct-series-b .ct-area {\n  fill: url(\"/dashboard/dashboard1#gradient3\") !important;\n  fill-opacity: 0.8;\n}\n\n[_nghost-%COMP%]     .lineArea2 .ct-series-b .ct-line {\n  stroke: #6CD975;\n}\n\n[_nghost-%COMP%]     .lineArea2 .ct-series-b .ct-point-circle {\n  stroke: #40C057;\n}\n\n[_nghost-%COMP%]     .lineChart .ct-line {\n  fill: none;\n  stroke: #FFFFFF;\n  stroke-width: 1px;\n}\n\n[_nghost-%COMP%]     .lineChart .ct-label {\n  color: #FFFFFF;\n}\n\n[_nghost-%COMP%]     .lineChart .ct-point-circle {\n  stroke-width: 2px;\n  fill: #FFFFFF;\n}\n\n[_nghost-%COMP%]     .lineChart .ct-series-a .ct-point-circle, .lineChart[_ngcontent-%COMP%]   .ct-series-a[_ngcontent-%COMP%]   .ct-point[_ngcontent-%COMP%] {\n  stroke: #FFFFFF;\n}\n\n[_nghost-%COMP%]     .lineChartShadow {\n  filter: drop-shadow(0px 25px 8px rgba(0, 0, 0, 0.5));\n  \n}\n\n[_nghost-%COMP%]     .BarChart .ct-series-a .ct-bar:nth-of-type(4n+1) {\n  stroke: url(\"/dashboard/dashboard1#gradient7\");\n}\n\n[_nghost-%COMP%]     .BarChart .ct-series-a .ct-bar:nth-of-type(4n+2) {\n  stroke: url(\"/dashboard/dashboard1#gradient5\");\n}\n\n[_nghost-%COMP%]     .BarChart .ct-series-a .ct-bar:nth-of-type(4n+3) {\n  stroke: url(\"/dashboard/dashboard1#gradient6\");\n}\n\n[_nghost-%COMP%]     .BarChart .ct-series-a .ct-bar:nth-of-type(4n+4) {\n  stroke: url(\"/dashboard/dashboard1#gradient4\");\n}\n\n[_nghost-%COMP%]     .BarChartShadow {\n  filter: drop-shadow(0px 20px 8px rgba(0, 0, 0, 0.3));\n  \n}\n\n[_nghost-%COMP%]     .donut .ct-label {\n  font-size: 20px;\n}\n\n[_nghost-%COMP%]     .donut .ct-done .ct-slice-donut {\n  stroke: #40C057;\n  stroke-width: 24px !important;\n}\n\n[_nghost-%COMP%]     .donut .ct-progress .ct-slice-donut {\n  stroke: #F77E17;\n  stroke-width: 16px !important;\n}\n\n[_nghost-%COMP%]     .donut .ct-outstanding .ct-slice-donut {\n  stroke: #975AFF;\n  stroke-width: 8px !important;\n}\n\n[_nghost-%COMP%]     .donut .ct-started .ct-slice-donut {\n  stroke: #2F8BE6;\n  stroke-width: 32px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZDEvZGFzaGJvYXJkMS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNFLG1CQUFvQjtFQUNwQiwwQkFBMkI7QUFGN0I7O0FBS0E7RUFDRSxpQkFBa0I7QUFGcEI7O0FBS0E7RUFDRSxlQUFnQjtBQUZsQjs7QUFLQTtFQUNFLGdDQUFpQztFQUMvQixpQkFBaUI7QUFGckI7O0FBS0E7RUFDRSxtQkFBb0I7RUFDcEIsOEJBQStCO0FBRmpDOztBQUtBO0VBQ0UsaUJBQWtCO0VBQ2xCLGlCQUFrQjtFQUNsQiw4QkFBK0I7QUFGakM7O0FBS0E7RUFFVSxvREFBcUQ7RUFDN0QsOERBQUE7QUFGRjs7QUFLQTtFQUNFLGVBQWdCO0FBRmxCOztBQUtBO0VBQ0UsZUFBZ0I7QUFGbEI7O0FBS0E7RUFDRSxpQkFBa0I7RUFDbEIsdURBQThEO0FBRmhFOztBQUtBO0VBQ0Usc0RBQTZEO0VBQzdELGlCQUFrQjtBQUZwQjs7QUFLQTtFQUNFLGlCQUFrQjtFQUNsQixpQkFBa0I7RUFDbEIsOEJBQStCO0FBRmpDOztBQUtBO0VBQ0Usc0RBQTZEO0FBRi9EOztBQUtBO0VBQ0UsZUFBZ0I7QUFGbEI7O0FBS0E7RUFDRSxlQUFnQjtBQUZsQjs7QUFJQTtFQUNFLGNBQWU7QUFEakI7O0FBSUE7RUFDRSxzQkFBdUI7QUFEekI7O0FBSUE7RUFDRSxVQUFXO0VBQ1gsaUJBQWtCO0FBRHBCOztBQUlBO0VBQ0UsaUJBQWtCO0VBQ2xCLGFBQWM7QUFEaEI7O0FBSUE7RUFDRSx1REFBOEQ7RUFDOUQsaUJBQWtCO0FBRHBCOztBQUlBO0VBQ0UsZUFBZ0I7QUFEbEI7O0FBSUE7RUFDRSxlQUFnQjtBQURsQjs7QUFJQTtFQUNFLHVEQUE4RDtFQUM5RCxpQkFBa0I7QUFEcEI7O0FBSUE7RUFDRSxlQUFnQjtBQURsQjs7QUFJQTtFQUNFLGVBQWdCO0FBRGxCOztBQUlBO0VBQ0UsVUFBVztFQUNYLGVBQWdCO0VBQ2hCLGlCQUFrQjtBQURwQjs7QUFJQTtFQUNFLGNBQWU7QUFEakI7O0FBSUE7RUFDRSxpQkFBa0I7RUFDbEIsYUFBYztBQURoQjs7QUFJQTtFQUNFLGVBQWdCO0FBRGxCOztBQUlBO0VBRVUsb0RBQXFEO0VBQzdELDhEQUFBO0FBREY7O0FBSUE7RUFDRSw4Q0FBcUQ7QUFEdkQ7O0FBSUE7RUFDRSw4Q0FBcUQ7QUFEdkQ7O0FBSUE7RUFDRSw4Q0FBcUQ7QUFEdkQ7O0FBSUE7RUFDRSw4Q0FBcUQ7QUFEdkQ7O0FBSUE7RUFFVSxvREFBcUQ7RUFDN0QsOERBQUE7QUFERjs7QUFJQTtFQUNFLGVBQWdCO0FBRGxCOztBQUlBO0VBQ0UsZUFBZ0I7RUFDaEIsNkJBQThCO0FBRGhDOztBQUlBO0VBQ0UsZUFBZ0I7RUFDaEIsNkJBQThCO0FBRGhDOztBQUlBO0VBQ0UsZUFBZ0I7RUFDaEIsNEJBQTZCO0FBRC9COztBQUlBO0VBQ0UsZUFBZ0I7RUFDaEIsNkJBQThCO0FBRGhDIiwiZmlsZSI6InNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZDEvZGFzaGJvYXJkMS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJhc3NldHMvc2Fzcy9jb3JlL3ZhcmlhYmxlcy9ncmFkaWVudC12YXJpYWJsZXMuc2Nzc1wiO1xuXG5cbjpob3N0IDo6bmctZGVlcCAuY3QtZ3JpZCB7XG4gIHN0cm9rZS1kYXNoYXJyYXkgOiAwO1xuICBzdHJva2UgOiByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG5cbjpob3N0IDo6bmctZGVlcCAuY3QtbGFiZWwge1xuICBmb250LXNpemUgOiAwLjlyZW07XG59XG5cbjpob3N0IDo6bmctZGVlcCAuV2lkZ2V0bGluZUNoYXJ0IC5jdC1wb2ludCB7XG4gIHN0cm9rZS13aWR0aCA6IDA7XG59XG5cbjpob3N0IDo6bmctZGVlcCAuV2lkZ2V0bGluZUNoYXJ0IC5jdC1saW5lIHtcbiAgc3Ryb2tlIDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpO1xuICAgIHN0cm9rZS13aWR0aDogNHB4O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLldpZGdldGxpbmVDaGFydCAuY3QtZ3JpZCB7XG4gIHN0cm9rZS1kYXNoYXJyYXkgOiAwO1xuICBzdHJva2UgOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLldpZGdldGxpbmVDaGFydCAuY3QtcG9pbnQtcmVndWxhciB7XG4gIHN0cm9rZS13aWR0aCA6IDJweDtcbiAgZmlsbCA6IHRyYW5zcGFyZW50O1xuICBzdHJva2UgOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLldpZGdldGxpbmVDaGFydHNoYWRvdyB7XG4gIC13ZWJraXQtZmlsdGVyIDogZHJvcC1zaGFkb3coMHB4IDEzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC41KSk7XG4gICAgICAgICAgZmlsdGVyIDogZHJvcC1zaGFkb3coMHB4IDEzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC41KSk7XG4gIC8qIFNhbWUgc3ludGF4IGFzIGJveC1zaGFkb3csIGV4Y2VwdCBmb3IgdGhlIHNwcmVhZCBwcm9wZXJ0eSAqL1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLmxpbmVBcmVhIC5jdC1saW5lIHtcbiAgc3Ryb2tlLXdpZHRoIDogMDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5saW5lQXJlYSAuY3QtcG9pbnQge1xuICBzdHJva2Utd2lkdGggOiAwO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLmxpbmVBcmVhIC5jdC1zZXJpZXMtYSAuY3QtYXJlYSB7XG4gIGZpbGwtb3BhY2l0eSA6IDAuNztcbiAgZmlsbCA6IHVybCgkZGFzaGJvYXJkMS1ncmFkaWVudC1wYXRoICsgICNncmFkaWVudDEpICFpbXBvcnRhbnQ7XG59XG5cbjpob3N0IDo6bmctZGVlcCAubGluZUFyZWEgLmN0LXNlcmllcy1iIC5jdC1hcmVhIHtcbiAgZmlsbCA6IHVybCgkZGFzaGJvYXJkMS1ncmFkaWVudC1wYXRoICsgICNncmFkaWVudCkgIWltcG9ydGFudDtcbiAgZmlsbC1vcGFjaXR5IDogMC45O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLmxpbmVBcmVhIC5jdC1wb2ludC1yZWd1bGFyIHtcbiAgc3Ryb2tlLXdpZHRoIDogMnB4O1xuICBmaWxsIDogdHJhbnNwYXJlbnQ7XG4gIHN0cm9rZSA6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59XG5cbjpob3N0IDo6bmctZGVlcCAuU3RhY2tiYXJjaGFydCAuY3Qtc2VyaWVzLWEgLmN0LWJhciB7XG4gIHN0cm9rZSA6IHVybCgkZGFzaGJvYXJkMS1ncmFkaWVudC1wYXRoICsgICNsaW5lYXIpICFpbXBvcnRhbnQ7XG59XG5cbjpob3N0IDo6bmctZGVlcCAuU3RhY2tiYXJjaGFydCAuY3Qtc2VyaWVzLWIgLmN0LWJhciB7XG4gIHN0cm9rZSA6ICNFRUVFRUU7XG59XG5cbjpob3N0IDo6bmctZGVlcCAuc2hvcHBpbmctY2FydCBpLmZ0LXRyYXNoLTIge1xuICBjdXJzb3IgOiBwb2ludGVyO1xufVxuOmhvc3QgOjpuZy1kZWVwIC5zaG9wcGluZy1jYXJ0IGkuZnQtdHJhc2gtMjpob3ZlciB7XG4gIGNvbG9yIDogI0Y1NTI1Mjtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5zaG9wcGluZy1jYXJ0IHRhYmxlIHRkIHtcbiAgdmVydGljYWwtYWxpZ24gOiBtaWRkbGU7XG59XG5cbjpob3N0IDo6bmctZGVlcCAubGluZUFyZWEyIC5jdC1saW5lIHtcbiAgZmlsbCA6IG5vbmU7XG4gIHN0cm9rZS13aWR0aCA6IDJweDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5saW5lQXJlYTIgLmN0LXBvaW50LWNpcmNsZSB7XG4gIHN0cm9rZS13aWR0aCA6IDJweDtcbiAgZmlsbCA6ICNGRkZGRkY7XG59XG5cbjpob3N0IDo6bmctZGVlcCAubGluZUFyZWEyIC5jdC1zZXJpZXMtYSAuY3QtYXJlYSB7XG4gIGZpbGwgOiB1cmwoJGRhc2hib2FyZDEtZ3JhZGllbnQtcGF0aCArICAjZ3JhZGllbnQyKSAhaW1wb3J0YW50O1xuICBmaWxsLW9wYWNpdHkgOiAwLjg7XG59XG5cbjpob3N0IDo6bmctZGVlcCAubGluZUFyZWEyIC5jdC1zZXJpZXMtYSAuY3QtbGluZSB7XG4gIHN0cm9rZSA6ICM2MEFGRjA7XG59XG5cbjpob3N0IDo6bmctZGVlcCAubGluZUFyZWEyIC5jdC1zZXJpZXMtYSAuY3QtcG9pbnQtY2lyY2xlIHtcbiAgc3Ryb2tlIDogIzJGOEJFNjtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5saW5lQXJlYTIgLmN0LXNlcmllcy1iIC5jdC1hcmVhIHtcbiAgZmlsbCA6IHVybCgkZGFzaGJvYXJkMS1ncmFkaWVudC1wYXRoICsgICNncmFkaWVudDMpICFpbXBvcnRhbnQ7XG4gIGZpbGwtb3BhY2l0eSA6IDAuODtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5saW5lQXJlYTIgLmN0LXNlcmllcy1iIC5jdC1saW5lIHtcbiAgc3Ryb2tlIDogIzZDRDk3NTtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5saW5lQXJlYTIgLmN0LXNlcmllcy1iIC5jdC1wb2ludC1jaXJjbGUge1xuICBzdHJva2UgOiAjNDBDMDU3O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLmxpbmVDaGFydCAuY3QtbGluZSB7XG4gIGZpbGwgOiBub25lO1xuICBzdHJva2UgOiAjRkZGRkZGO1xuICBzdHJva2Utd2lkdGggOiAxcHg7XG59XG5cbjpob3N0IDo6bmctZGVlcCAubGluZUNoYXJ0IC5jdC1sYWJlbCB7XG4gIGNvbG9yIDogI0ZGRkZGRjtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5saW5lQ2hhcnQgLmN0LXBvaW50LWNpcmNsZSB7XG4gIHN0cm9rZS13aWR0aCA6IDJweDtcbiAgZmlsbCA6ICNGRkZGRkY7XG59XG5cbjpob3N0IDo6bmctZGVlcCAubGluZUNoYXJ0IC5jdC1zZXJpZXMtYSAuY3QtcG9pbnQtY2lyY2xlLCAubGluZUNoYXJ0IC5jdC1zZXJpZXMtYSAuY3QtcG9pbnQge1xuICBzdHJva2UgOiAjRkZGRkZGO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLmxpbmVDaGFydFNoYWRvdyB7XG4gIC13ZWJraXQtZmlsdGVyIDogZHJvcC1zaGFkb3coMHB4IDI1cHggOHB4IHJnYmEoMCwgMCwgMCwgMC41KSk7XG4gICAgICAgICAgZmlsdGVyIDogZHJvcC1zaGFkb3coMHB4IDI1cHggOHB4IHJnYmEoMCwgMCwgMCwgMC41KSk7XG4gIC8qIFNhbWUgc3ludGF4IGFzIGJveC1zaGFkb3csIGV4Y2VwdCBmb3IgdGhlIHNwcmVhZCBwcm9wZXJ0eSAqL1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLkJhckNoYXJ0IC5jdC1zZXJpZXMtYSAuY3QtYmFyOm50aC1vZi10eXBlKDRuKzEpIHtcbiAgc3Ryb2tlIDogdXJsKCRkYXNoYm9hcmQxLWdyYWRpZW50LXBhdGggKyAgI2dyYWRpZW50Nyk7XG59XG5cbjpob3N0IDo6bmctZGVlcCAuQmFyQ2hhcnQgLmN0LXNlcmllcy1hIC5jdC1iYXI6bnRoLW9mLXR5cGUoNG4rMikge1xuICBzdHJva2UgOiB1cmwoJGRhc2hib2FyZDEtZ3JhZGllbnQtcGF0aCArICAjZ3JhZGllbnQ1KTtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5CYXJDaGFydCAuY3Qtc2VyaWVzLWEgLmN0LWJhcjpudGgtb2YtdHlwZSg0biszKSB7XG4gIHN0cm9rZSA6IHVybCgkZGFzaGJvYXJkMS1ncmFkaWVudC1wYXRoICsgICNncmFkaWVudDYpO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLkJhckNoYXJ0IC5jdC1zZXJpZXMtYSAuY3QtYmFyOm50aC1vZi10eXBlKDRuKzQpIHtcbiAgc3Ryb2tlIDogdXJsKCRkYXNoYm9hcmQxLWdyYWRpZW50LXBhdGggKyAgI2dyYWRpZW50NCk7XG59XG5cbjpob3N0IDo6bmctZGVlcCAuQmFyQ2hhcnRTaGFkb3cge1xuICAtd2Via2l0LWZpbHRlciA6IGRyb3Atc2hhZG93KDBweCAyMHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMykpO1xuICAgICAgICAgIGZpbHRlciA6IGRyb3Atc2hhZG93KDBweCAyMHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMykpO1xuICAvKiBTYW1lIHN5bnRheCBhcyBib3gtc2hhZG93LCBleGNlcHQgZm9yIHRoZSBzcHJlYWQgcHJvcGVydHkgKi9cbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5kb251dCAuY3QtbGFiZWwge1xuICBmb250LXNpemUgOiAyMHB4O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLmRvbnV0IC5jdC1kb25lIC5jdC1zbGljZS1kb251dCB7XG4gIHN0cm9rZSA6ICM0MEMwNTc7XG4gIHN0cm9rZS13aWR0aCA6IDI0cHggIWltcG9ydGFudDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5kb251dCAuY3QtcHJvZ3Jlc3MgLmN0LXNsaWNlLWRvbnV0IHtcbiAgc3Ryb2tlIDogI0Y3N0UxNztcbiAgc3Ryb2tlLXdpZHRoIDogMTZweCAhaW1wb3J0YW50O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLmRvbnV0IC5jdC1vdXRzdGFuZGluZyAuY3Qtc2xpY2UtZG9udXQge1xuICBzdHJva2UgOiAjOTc1QUZGO1xuICBzdHJva2Utd2lkdGggOiA4cHggIWltcG9ydGFudDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5kb251dCAuY3Qtc3RhcnRlZCAuY3Qtc2xpY2UtZG9udXQge1xuICBzdHJva2UgOiAjMkY4QkU2O1xuICBzdHJva2Utd2lkdGggOiAzMnB4ICFpbXBvcnRhbnQ7XG59XG4iXX0= */"] });
    return Dashboard1Component;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Dashboard1Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-dashboard1',
                templateUrl: './dashboard1.component.html',
                styleUrls: ['./dashboard1.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/dashboard/dashboard2/dashboard2.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/dashboard/dashboard2/dashboard2.component.ts ***!
  \**************************************************************/
/*! exports provided: Dashboard2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dashboard2Component", function() { return Dashboard2Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var chartist__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! chartist */ "./node_modules/chartist/dist/chartist.js");
/* harmony import */ var chartist__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(chartist__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shared_data_chartjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/data/chartjs */ "./src/app/shared/data/chartjs.ts");
/* harmony import */ var angular_resize_event__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-resize-event */ "./node_modules/angular-resize-event/fesm2015/angular-resize-event.js");
/* harmony import */ var ng_chartist__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-chartist */ "./node_modules/ng-chartist/fesm2015/ng-chartist.js");
/* harmony import */ var ng_apexcharts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-apexcharts */ "./node_modules/ng-apexcharts/fesm2015/ng-apexcharts.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");








function Dashboard2Component_ng_template_295_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 162);
} }
function Dashboard2Component_ng_template_296_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 163);
} }
function Dashboard2Component_ng_template_297_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 164);
} }
var data = __webpack_require__(/*! ../../shared/data/chartist.json */ "./src/app/shared/data/chartist.json");
var $info = "#2F8BE6", $info_light = "#ACE0FC";
var themeColors = [$info, $info_light];
var Dashboard2Component = /** @class */ (function () {
    function Dashboard2Component() {
        // barChart
        this.barChartOptions = _shared_data_chartjs__WEBPACK_IMPORTED_MODULE_2__["barChartOptions"];
        this.barChartLabels = _shared_data_chartjs__WEBPACK_IMPORTED_MODULE_2__["barChartLabels"];
        this.barChartType = _shared_data_chartjs__WEBPACK_IMPORTED_MODULE_2__["barChartType"];
        this.barChartLegend = _shared_data_chartjs__WEBPACK_IMPORTED_MODULE_2__["barChartLegend"];
        this.barChartData = _shared_data_chartjs__WEBPACK_IMPORTED_MODULE_2__["barChartData"];
        this.barChartColors = _shared_data_chartjs__WEBPACK_IMPORTED_MODULE_2__["barChartColors"];
        //Column chart
        // Line chart configuration Starts
        this.WidgetlineChart = {
            type: 'Line', data: data['WidgetlineDashboard2Chart'],
            options: {
                axisX: {
                    showGrid: false,
                    showLabel: false,
                    offset: 0,
                },
                axisY: {
                    showGrid: false,
                    low: 50,
                    showLabel: false,
                    offset: 0,
                },
                fullWidth: true
            },
        };
        this.WidgetlineChart1 = {
            type: 'Line', data: data['WidgetlineDashboard2Chart_1'],
            options: {
                axisX: {
                    showGrid: false,
                    showLabel: false,
                    offset: 0,
                },
                axisY: {
                    showGrid: false,
                    low: 50,
                    showLabel: false,
                    offset: 0,
                },
                fullWidth: true
            },
        };
        this.WidgetlineChart2 = {
            type: 'Line', data: data['WidgetlineDashboard2Chart_2'],
            options: {
                axisX: {
                    showGrid: false,
                    showLabel: false,
                    offset: 0,
                },
                axisY: {
                    showGrid: false,
                    low: 50,
                    showLabel: false,
                    offset: 0,
                },
                fullWidth: true
            },
        };
        this.WidgetlineChart3 = {
            type: 'Line', data: data['WidgetlineDashboard2Chart_3'],
            options: {
                axisX: {
                    showGrid: false,
                    showLabel: false,
                    offset: 0,
                },
                axisY: {
                    showGrid: false,
                    low: 50,
                    showLabel: false,
                    offset: 0,
                },
                fullWidth: true
            },
        };
        // Line chart configuration Ends
        // Line chart configuration Starts
        this.WidgetlineChartEarning = {
            type: 'Line', data: data['WidgetlineChartEarning'],
            options: {
                axisX: {
                    showGrid: true,
                    showLabel: false,
                    offset: 0,
                },
                axisY: {
                    showGrid: false,
                    low: 40,
                    showLabel: false,
                    offset: 0,
                },
                lineSmooth: chartist__WEBPACK_IMPORTED_MODULE_1__["Interpolation"].cardinal({
                    tension: 0
                }),
                fullWidth: true
            },
            events: {
                created: function (data) {
                    var defs = data.svg.elem('defs');
                    defs.elem('linearGradient', {
                        id: 'widgradient1',
                        x1: 0,
                        y1: 1,
                        x2: 0,
                        y2: 0
                    }).elem('stop', {
                        offset: 0,
                        'stop-color': '#226CC5'
                    }).parent().elem('stop', {
                        offset: 1,
                        'stop-color': '#81C8F7'
                    });
                },
            },
        };
        // Line chart configuration Ends
        // Donut chart configuration Starts
        this.DonutChart1 = {
            type: 'Pie',
            data: data['DashboardDonut'],
            options: {
                donut: true,
                donutWidth: 3,
                startAngle: 0,
                chartPadding: 25,
                labelInterpolationFnc: function (value) {
                    return '\ue8dd';
                }
            },
            events: {
                draw: function (data) {
                    if (data.type === 'label') {
                        if (data.index === 0) {
                            data.element.attr({
                                dx: data.element.root().width() / 2,
                                dy: (data.element.root().height() + (data.element.height() / 4)) / 2,
                                class: 'ct-label',
                                'font-family': 'feather'
                            });
                        }
                        else {
                            data.element.remove();
                        }
                    }
                }
            }
        };
        // Donut chart configuration Ends
        // Donut chart configuration Starts
        this.DonutChart2 = {
            type: 'Pie',
            data: data['DashboardDonut'],
            options: {
                donut: true,
                donutWidth: 3,
                startAngle: 90,
                chartPadding: 25,
                labelInterpolationFnc: function (value) {
                    return '\ue8f8';
                }
            },
            events: {
                draw: function (data) {
                    if (data.type === 'label') {
                        if (data.index === 0) {
                            data.element.attr({
                                dx: data.element.root().width() / 2,
                                dy: (data.element.root().height() + (data.element.height() / 4)) / 2,
                                class: 'ct-label',
                                'font-family': 'feather'
                            });
                        }
                        else {
                            data.element.remove();
                        }
                    }
                }
            }
        };
        // Donut chart configuration Ends
        // Donut chart configuration Starts
        this.DonutChart3 = {
            type: 'Pie',
            data: data['DashboardDonut'],
            options: {
                donut: true,
                donutWidth: 3,
                startAngle: 270,
                chartPadding: 25,
                labelInterpolationFnc: function (value) {
                    return '\ue879';
                }
            },
            events: {
                draw: function (data) {
                    if (data.type === 'label') {
                        if (data.index === 0) {
                            data.element.attr({
                                dx: data.element.root().width() / 2,
                                dy: (data.element.root().height() + (data.element.height() / 4)) / 2,
                                class: 'ct-label',
                                'font-family': 'feather'
                            });
                        }
                        else {
                            data.element.remove();
                        }
                    }
                }
            }
        };
        // Donut chart configuration Ends
        // Line area chart configuration Starts
        this.lineAreaChart = {
            type: 'Line',
            data: data['lineArea3'],
            options: {
                low: 0,
                showArea: true,
                fullWidth: true,
                onlyInteger: true,
                axisY: {
                    low: 0,
                    scaleMinSpace: 50,
                },
                axisX: {
                    showGrid: false
                }
            },
            events: {
                created: function (data) {
                    var defs = data.svg.elem('defs');
                    defs.elem('linearGradient', {
                        id: 'gradient',
                        x1: 0,
                        y1: 1,
                        x2: 0,
                        y2: 0
                    }).elem('stop', {
                        offset: 0,
                        'stop-opacity': '0.2',
                        'stop-color': 'rgba(255, 255, 255, 1)'
                    }).parent().elem('stop', {
                        offset: 1,
                        'stop-opacity': '0.2',
                        'stop-color': 'rgba(181, 131, 255, 1)'
                    });
                },
                draw: function (data) {
                    var circleRadius = 6;
                    if (data.type === 'point') {
                        var circle = new chartist__WEBPACK_IMPORTED_MODULE_1__["Svg"]('circle', {
                            cx: data.x,
                            cy: data.y,
                            r: circleRadius,
                            class: 'ct-point-circle'
                        });
                        data.element.replace(circle);
                    }
                }
            },
        };
        // Line area chart configuration Ends
        // Line chart configuration Starts
        this.lineChart2 = {
            type: 'Line', data: data['line2'],
            options: {
                axisX: {
                    showGrid: false,
                },
                axisY: {
                    low: 0,
                    scaleMinSpace: 50,
                },
                fullWidth: true,
            },
            responsiveOptions: [
                ['screen and (max-width: 640px) and (min-width: 381px)', {
                        axisX: {
                            labelInterpolationFnc: function (value, index) {
                                return index % 2 === 0 ? value : null;
                            }
                        }
                    }],
                ['screen and (max-width: 380px)', {
                        axisX: {
                            labelInterpolationFnc: function (value, index) {
                                return index % 3 === 0 ? value : null;
                            }
                        }
                    }]
            ],
            events: {
                draw: function (data) {
                    var circleRadius = 6;
                    if (data.type === 'point') {
                        var circle = new chartist__WEBPACK_IMPORTED_MODULE_1__["Svg"]('circle', {
                            cx: data.x,
                            cy: data.y,
                            r: circleRadius,
                            class: 'ct-point-circle'
                        });
                        data.element.replace(circle);
                    }
                    else if (data.type === 'label') {
                        // adjust label position for rotation
                        var dX = data.width / 2 + (30 - data.width);
                        data.element.attr({ x: data.element.attr('x') - dX });
                    }
                }
            },
        };
        this.fireRefreshEventOnWindow = function () {
            var evt = document.createEvent("HTMLEvents");
            evt.initEvent("resize", true, false);
            window.dispatchEvent(evt);
        };
        this.columnChartOptions = {
            chart: {
                height: 350,
                type: 'bar',
                toolbar: {
                    show: false
                },
                animations: {
                    enabled: false
                }
            },
            colors: themeColors,
            plotOptions: {
                bar: {
                    horizontal: false,
                    endingShape: 'rounded',
                    columnWidth: '25%',
                },
            },
            grid: {
                borderColor: "#BDBDBD44"
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                show: true,
                width: 2,
                colors: ['transparent']
            },
            series: [{
                    name: 'Net Profit',
                    data: [40, 50, 110, 90, 85, 115, 100, 90]
                }, {
                    name: 'Revenue',
                    data: [30, 40, 100, 80, 75, 105, 90, 80]
                }],
            legend: {
                show: false
            },
            xaxis: {
                categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
                axisBorder: {
                    color: "#BDBDBD44"
                }
            },
            tooltip: {
                y: {
                    formatter: function (val) {
                        return "$" + val + " thousands";
                    }
                }
            }
        };
    }
    // Line chart configuration Ends
    Dashboard2Component.prototype.onResized = function (event) {
        var _this = this;
        setTimeout(function () {
            _this.fireRefreshEventOnWindow();
        }, 300);
    };
    Dashboard2Component.ɵfac = function Dashboard2Component_Factory(t) { return new (t || Dashboard2Component)(); };
    Dashboard2Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Dashboard2Component, selectors: [["app-dashboard2"]], decls: 450, vars: 67, consts: [[1, "row", 3, "resized"], [1, "col-xl-3", "col-lg-6", "col-md-6", "col-12"], [1, "card", "bg-info", "bg-lighten-3"], [1, "card-content"], [1, "card-body", "py-0"], [1, "media"], [1, "media-body", "info", "text-left"], [1, "font-large-1", "info", "mb-0"], [1, "media-right", "info", "text-right"], [1, "ft-percent", "font-large-1"], ["id", "Widget-line-chart", 1, "WidgetlineChart", "WidgetlineChartShadow", "mb-3"], [1, "height-75", 3, "data", "type", "options", "responsiveOptions", "events"], [1, "card", "bg-warning", "bg-lighten-3"], [1, "media-body", "warning", "text-left"], [1, "font-large-1", "warning", "mb-0"], [1, "media-right", "warning", "text-right"], [1, "ft-activity", "font-large-1"], ["id", "Widget-line-chart2", 1, "WidgetlineChart1", "WidgetlineChart1Shadow", "mb-3"], [1, "card", "bg-primary", "bg-lighten-3"], [1, "media-body", "primary", "text-left"], [1, "font-large-1", "primary", "mb-0"], [1, "media-right", "primary", "text-right"], [1, "ft-trending-up", "font-large-1"], ["id", "Widget-line-chart2", 1, "WidgetlineChart2", "WidgetlineChart2Shadow", "mb-3"], [1, "card", "bg-success", "bg-lighten-3"], [1, "media-body", "success", "text-left"], [1, "font-large-1", "success", "mb-0"], [1, "media-right", "success", "text-right"], [1, "ft-credit-card", "font-large-1"], ["id", "Widget-line-chart2", 1, "WidgetlineChart3", "WidgetlineChart3Shadow", "mb-3"], [1, "row", "match-height"], [1, "col-xl-4", "col-lg-12"], [1, "card"], [1, "card-header"], [1, "card-title", "mb-0"], [1, "card-body"], [1, "media", "pt-0", "pb-2"], ["src", "assets/img/portrait/small/avatar-s-20.png", "alt", "Avatar", "width", "35", 1, "mr-3", "avatar", "rounded"], [1, "media-body"], [1, "font-medium-1", "mb-0"], [1, "grey", "font-small-3", "m-0"], ["type", "button", 1, "btn", "btn-primary"], [1, "ft-user-plus"], [1, "media", "py-2"], ["src", "assets/img/portrait/small/avatar-s-15.png", "alt", "Avatar", "width", "35", 1, "mr-3", "avatar", "rounded"], ["type", "button", 1, "btn", "bg-light-primary"], [1, "ft-user-check"], ["src", "assets/img/portrait/small/avatar-s-7.png", "alt", "Avatar", "width", "35", 1, "mr-3", "avatar", "rounded"], ["src", "assets/img/portrait/small/avatar-s-6.png", "alt", "Avatar", "width", "35", 1, "mr-3", "avatar", "rounded"], ["src", "assets/img/portrait/small/avatar-s-16.png", "alt", "Avatar", "width", "35", 1, "mr-3", "avatar", "rounded"], ["src", "assets/img/portrait/small/avatar-s-25.png", "alt", "Avatar", "width", "35", 1, "mr-3", "avatar", "rounded"], [1, "media", "pt-2", "pb-1"], ["src", "assets/img/portrait/small/avatar-s-5.png", "alt", "Avatar", "width", "35", 1, "mr-3", "avatar", "rounded"], [1, "col-xl-8", "col-lg-12"], [1, "float-right", "cursor-pointer"], [1, "ft-more-vertical-"], [1, "chart-info", "mb-3"], [1, "mr-3"], [1, "fa", "fa-circle", "info", "font-small-3", "mr-1"], [1, "fa", "fa-circle", "info", "lighten-3", "font-small-3", "mr-1"], ["id", "line-chart1", 1, "height-350"], [3, "series", "colors", "chart", "xaxis", "yaxis", "title", "dataLabels", "stroke", "grid", "tooltip", "plotOptions", "fill", "legend", "labels", "markers", "theme", "responsive"], [1, "col-md-4", "col-12"], [1, "card-header", "text-center", "pb-0"], [1, "font-medium-2", "warning"], [1, "font-large-2", "mt-2"], ["id", "donut-chart1", 1, "donut1"], [1, "height-250", 3, "data", "type", "options", "responsiveOptions", "events"], [1, "card-body", "text-center"], [1, "font-large-1", "d-block", "mb-1"], [1, "font-medium-1"], [1, "font-medium-2", "info"], [1, "font-medium-1", "grey", "text-bold-400"], ["id", "donut-chart2", 1, "donut2"], [1, "font-medium-2", "danger"], ["id", "donut-chart3", 1, "donut3"], [1, "col-xl-6", "col-lg-12", "col-sm-12"], [1, "card", "overflow-hidden"], [1, "card-img"], ["src", "assets/img/photos/sunny-weather.jpg", "alt", "Card image cap", 1, "card-img-top", "img-fluid", "height-300", "weather-pic"], [1, "card-img-overlay", "overlay-dark"], [1, "card-title"], ["type", "button", 1, "btn", "btn-floating", "halfway-fab", "bg-secondary"], [1, "ft-plus"], [1, "row"], [1, "col-2", "text-center"], [1, "d-block"], [1, "wi", "wi-day-sunny", "d-block", "secondary", "lighten-1", "font-large-1", "my-3"], [1, "wi", "wi-day-cloudy", "d-block", "secondary", "lighten-1", "font-large-1", "my-3"], [1, "wi", "wi-day-cloudy-gusts", "d-block", "secondary", "lighten-1", "font-large-1", "my-3"], [1, "wi", "wi-day-cloudy-windy", "d-block", "secondary", "lighten-1", "font-large-1", "my-3"], [1, "wi", "wi-day-fog", "d-block", "secondary", "lighten-1", "font-large-1", "my-3"], [1, "wi", "wi-day-lightning", "d-block", "secondary", "lighten-1", "font-large-1", "my-3"], [1, "col-xl-6", "col-lg-12"], [1, "card-header", "pb-0"], [1, "chart-info", "mb-2"], [1, "fa", "fa-circle", "info", "font-small-2", "mr-1"], [1, "fa", "fa-circle", "success", "font-small-2", "mr-1"], ["id", "line-chart2", 1, "lineChart2", "lineChart2Shadow"], [1, "height-350", 3, "data", "type", "options", "responsiveOptions", "events"], [1, "row", "mb-3", "match-height"], [1, "grey"], [1, "earning-details", "mb-3"], [1, "mb-1"], [1, "ft-arrow-up", "success", "font-medium-3"], [1, "font-medium-1", "grey"], ["id", "Widget-line-chart2", 1, "WidgetlineChartEarning", "WidgetlineChartEarningShadow"], [1, "height-100", 3, "data", "type", "options", "responsiveOptions", "events"], [1, "text-center", "mt-4"], ["type", "button", 1, "btn", "btn-info", "mr-2"], ["type", "button", 1, "btn", "bg-light-info", "px-3"], ["ngbSlide", ""], ["type", "button", 1, "btn", "btn-floating", "halfway-fab", "bg-danger"], [1, "badge", "bg-light-primary", "mr-2"], [1, "badge", "bg-light-success", "mr-2"], [1, "badge", "bg-light-warning", "mr-2"], [1, "card", "dash2-user"], [1, "d-flex", "justify-content-end", "mb-1"], [1, "text-center", "mb-4"], ["src", "assets/img/portrait/small/avatar-s-13.png", "alt", "Avatar", 1, "avatar", "mb-2"], [1, "mb-0"], [1, "d-flex", "justify-content-center", "align-items-center", "mt-3"], [1, "dash-followers", "mr-4"], [1, "d-flex", "justify-content-center", "align-items-center"], ["type", "button", 1, "btn", "bg-light-secondary", "px-2"], [1, "ft-user"], [1, "ml-2"], [1, "dash-ratings"], [1, "ft-star"], [1, "font-small-3", "ml-1"], [1, "progress", "dash2-progress"], ["role", "progressbar", "aria-valuenow", "30", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg-primary", "bg-lighten-3", "primary", 2, "width", "30%"], ["role", "progressbar", "aria-valuenow", "20", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg-success", "bg-lighten-3", "success", 2, "width", "20%"], ["role", "progressbar", "aria-valuenow", "35", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "bg-info", "bg-lighten-3", "info", 2, "width", "35%"], [1, "col-lg-4", "col-md-4", "col-sm-12", "mb-2"], [1, "card", "card-inverse", "bg-warning", "bg-lighten-3", "text-center", "shadow-none"], [1, "card-img", "overlap"], ["src", "assets/img/elements/11.png", "alt", "element 06", "height", "150"], [1, "card-title", "warning"], [1, "m-0", "warning"], [1, "card", "card-inverse", "bg-success", "bg-lighten-3", "text-center", "shadow-none"], ["src", "assets/img/elements/14.png", "alt", "element 03", "height", "150"], [1, "card-title", "success"], [1, "m-0", "success"], [1, "card", "card-inverse", "bg-primary", "bg-lighten-3", "text-center", "shadow-none"], ["src", "assets/img/elements/15.png", "alt", "element 07", "height", "150"], [1, "card-title", "primary"], [1, "m-0", "primary"], [1, "chart-info", "mb-4"], [1, "fa", "fa-circle", "primary", "font-small-2", "mr-1"], [1, "fa", "fa-circle", "danger", "font-small-2", "mr-1"], ["id", "line-area-chart", 1, "lineAreaChart", "mb-1"], [1, "height-300", 3, "data", "type", "options", "responsiveOptions", "events"], [1, "list-group", "mb-3"], [1, "list-group-item"], [1, "badge", "bg-light-primary", "float-right"], [1, "badge", "bg-light-info", "float-right"], [1, "badge", "bg-light-warning", "float-right"], [1, "badge", "bg-light-success", "float-right"], [1, "badge", "bg-light-secondary", "float-right"], [1, "badge", "bg-light-danger", "float-right"], ["type", "button", 1, "btn", "btn-primary", "mr-2"], ["src", "assets/img/photos/17.jpg", "alt", "First slide"], ["src", "assets/img/photos/13.jpg", "alt", "Second slide"], ["src", "assets/img/photos/12.jpg", "alt", "Third slide"]], template: function Dashboard2Component_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resized", function Dashboard2Component_Template_div_resized_0_listener($event) { return ctx.onResized($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "$15,678");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Total Cost");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "x-chartist", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h3", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "$2156");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Total Tax");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "i", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "x-chartist", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h3", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "$45,668");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Total Sales");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "i", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "x-chartist", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "h3", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "$32,454");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Total Earning");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "i", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "x-chartist", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 33);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "h4", 34);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Discover People");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 35);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 36);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "img", 37);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 38);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "h4", 39);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Jessica Rice");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "p", 40);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "UX Designer");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "button", 41);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "i", 42);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 43);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "img", 44);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 38);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "h4", 39);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Jacob Rios");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "p", 40);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "HTML Developer");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "button", 45);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "i", 46);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 43);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "img", 47);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 38);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "h4", 39);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Russell Delgado");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "p", 40);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Database Designer");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "button", 41);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "i", 42);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 43);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "img", 48);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 38);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "h4", 39);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "Sara McDonald");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "p", 40);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "Team Leader");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "button", 45);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "i", 46);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 43);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "img", 49);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 38);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "h4", 39);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "Janet Lucas");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "p", 40);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "Project Manger");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "button", 45);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](109, "i", 46);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 43);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](111, "img", 50);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 38);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "h4", 39);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "Mark Carter");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "p", 40);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "HTML Developer");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "button", 41);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](118, "i", 42);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "div", 51);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](120, "img", 52);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "div", 38);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "h4", 39);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "Chad Reese");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "p", 40);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "UI Designer");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "button", 41);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](127, "i", 42);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "div", 53);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "div", 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "div", 33);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "h4", 34);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, "Sales Analysis");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "span", 54);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](135, "i", 55);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "div", 35);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "div", 56);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "span", 57);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](140, "i", 58);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, "Net Profit");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "span", 57);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](144, "i", 59);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, "Revenue");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "div", 60);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](148, "apx-chart", 61);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "div", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "div", 62);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "div", 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "div", 63);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "span", 64);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](154, "Steps");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "h3", 65);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156, "7261");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "div", 66);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](159, "x-chartist", 67);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "div", 68);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "span", 69);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](162, "10000");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "span", 70);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](164, "Today's Target");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "div", 62);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "div", 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "div", 63);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "span", 71);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](169, "Distance");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "h3", 65);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, "5.6 ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "span", 72);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173, "miles");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](174, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "div", 73);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](176, "x-chartist", 67);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "div", 68);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "span", 69);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](179, "8");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "span", 70);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](181, "Today's Target");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "div", 62);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "div", 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](184, "div", 63);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "span", 74);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](186, "Calories");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "h3", 65);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](188, "4025 ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "span", 72);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](190, "kcal");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "div", 75);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](193, "x-chartist", 67);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "div", 68);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](195, "span", 69);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](196, "5000");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "span", 70);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](198, "Today's Target");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "div", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](200, "div", 76);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "div", 77);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](202, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "div", 78);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](204, "img", 79);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](205, "div", 80);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "h4", 81);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](207, "Sunny");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](208, "button", 82);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](209, "i", 83);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](210, "div", 35);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "div", 84);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](212, "div", 85);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](213, "span", 86);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](214, "Mon");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](215, "i", 87);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](216, "span", 86);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](217, "13\u00B0");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](218, "div", 85);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](219, "span", 86);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](220, "Tue");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](221, "i", 88);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](222, "span", 86);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](223, "12\u00B0");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](224, "div", 85);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "span", 86);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](226, "Wed");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](227, "i", 89);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](228, "span", 86);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](229, "10\u00B0");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](230, "div", 85);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](231, "span", 86);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](232, "Thu");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](233, "i", 90);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](234, "span", 86);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](235, "12\u00B0");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](236, "div", 85);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](237, "span", 86);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](238, "Fri");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](239, "i", 91);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](240, "span", 86);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](241, "9\u00B0");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](242, "div", 85);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](243, "span", 86);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](244, "Sat");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](245, "i", 92);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](246, "span", 86);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](247, "6\u00B0");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](248, "div", 93);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](249, "div", 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](250, "div", 94);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](251, "h4", 81);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](252, "Statistics");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](253, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](254, "div", 35);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](255, "div", 95);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](256, "span", 57);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](257, "i", 96);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](258, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](259, "Profit");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](260, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](261, "i", 97);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](262, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](263, "Growth");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](264, "div", 98);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](265, "x-chartist", 99);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](266, "div", 100);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](267, "div", 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](268, "div", 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](269, "div", 33);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](270, "h4", 81);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](271, "Earnings");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](272, "span", 101);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](273, "Mon 18 - Sun 21");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](274, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](275, "div", 35);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](276, "div", 102);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](277, "h2", 103);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](278, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](279, "$4295.36");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](280, "i", 104);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](281, "span", 105);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](282, "Total Earnings");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](283, "div", 106);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](284, "x-chartist", 107);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](285, "div", 108);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](286, "button", 109);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](287, "View Full");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](288, "button", 110);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](289, "Print");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](290, "div", 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](291, "div", 77);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](292, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](293, "div", 78);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](294, "ngb-carousel");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](295, Dashboard2Component_ng_template_295_Template, 1, 0, "ng-template", 111);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](296, Dashboard2Component_ng_template_296_Template, 1, 0, "ng-template", 111);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](297, Dashboard2Component_ng_template_297_Template, 1, 0, "ng-template", 111);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](298, "button", 112);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](299, "i", 83);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](300, "div", 35);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](301, "h4", 81);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](302, "Our Products");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](303, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](304, "Developer friendly and highly customizable admin templates with Light and Dark layouts.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](305, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](306, "span", 113);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](307, "Apex");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](308, "span", 114);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](309, "Vuexy");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](310, "span", 115);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](311, "Frest");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](312, "div", 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](313, "div", 116);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](314, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](315, "div", 35);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](316, "div", 117);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](317, "span", 113);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](318, "Designer");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](319, "div", 118);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](320, "img", 119);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](321, "h4", 120);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](322, "Melvin Shelton");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](323, "p", 101);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](324, "@Pitinvent");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](325, "div", 121);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](326, "div", 122);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](327, "div", 123);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](328, "button", 124);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](329, "i", 125);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](330, "div", 126);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](331, "h5", 120);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](332, "365k");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](333, "span", 101);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](334, "Followers");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](335, "div", 127);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](336, "div", 123);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](337, "button", 124);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](338, "i", 128);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](339, "div", 126);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](340, "h5", 120);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](341, "4.7");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](342, "span", 101);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](343, "Ratings");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](344, "h5");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](345, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](346, "Today's Earnings");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](347, "small", 129);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](348, "$25k");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](349, "div", 130);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](350, "div", 131);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](351, "30%");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](352, "div", 132);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](353, "20%");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](354, "div", 133);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](355, "35%");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](356, "div", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](357, "div", 134);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](358, "div", 135);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](359, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](360, "div", 136);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](361, "img", 137);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](362, "div", 35);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](363, "h4", 138);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](364, "New Arrival");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](365, "p", 139);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](366, "Donut toffee candy brownie souffl\u00E9 macaroon.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](367, "div", 134);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](368, "div", 140);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](369, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](370, "div", 136);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](371, "img", 141);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](372, "div", 35);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](373, "h4", 142);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](374, "Brand Minute");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](375, "p", 143);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](376, "Donut toffee candy brownie souffl\u00E9 macaroon.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](377, "div", 134);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](378, "div", 144);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](379, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](380, "div", 136);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](381, "img", 145);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](382, "div", 35);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](383, "h4", 146);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](384, "Brand Minute");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](385, "p", 147);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](386, "Donut toffee candy brownie souffl\u00E9 macaroon.");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](387, "div", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](388, "div", 53);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](389, "div", 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](390, "div", 94);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](391, "h4", 81);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](392, "Product Order");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](393, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](394, "div", 35);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](395, "div", 148);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](396, "span", 57);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](397, "i", 149);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](398, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](399, "Delivered");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](400, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](401, "i", 150);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](402, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](403, "Pending");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](404, "div", 151);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](405, "x-chartist", 152);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](406, "div", 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](407, "div", 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](408, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](409, "div", 35);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](410, "h4", 81);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](411, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](412, "Product Sale");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](413, "span", 54);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](414, "i", 55);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](415, "p", 101);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](416, "Sales of 2019");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](417, "ul", 153);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](418, "li", 154);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](419, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](420, "Apex Angular");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](421, "span", 155);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](422, "2.5k");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](423, "li", 154);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](424, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](425, "Vuexy VueJS");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](426, "span", 156);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](427, "3.7k");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](428, "li", 154);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](429, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](430, "Frest HTML");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](431, "span", 157);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](432, "2.3k");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](433, "li", 154);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](434, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](435, "Modern Angular");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](436, "span", 158);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](437, "4.1k");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](438, "li", 154);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](439, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](440, "Frest Sketch");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](441, "span", 159);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](442, "2.8k");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](443, "li", 154);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](444, "span");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](445, "Materialize HTML");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](446, "span", 160);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](447, "5.6k");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](448, "button", 161);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](449, "Profile");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.WidgetlineChart.data)("type", ctx.WidgetlineChart.type)("options", ctx.WidgetlineChart.options)("responsiveOptions", ctx.WidgetlineChart.responsiveOptions)("events", ctx.WidgetlineChart.events);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.WidgetlineChart1.data)("type", ctx.WidgetlineChart1.type)("options", ctx.WidgetlineChart1.options)("responsiveOptions", ctx.WidgetlineChart1.responsiveOptions)("events", ctx.WidgetlineChart1.events);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.WidgetlineChart2.data)("type", ctx.WidgetlineChart2.type)("options", ctx.WidgetlineChart2.options)("responsiveOptions", ctx.WidgetlineChart2.responsiveOptions)("events", ctx.WidgetlineChart2.events);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.WidgetlineChart3.data)("type", ctx.WidgetlineChart3.type)("options", ctx.WidgetlineChart3.options)("responsiveOptions", ctx.WidgetlineChart3.responsiveOptions)("events", ctx.WidgetlineChart3.events);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](92);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("series", ctx.columnChartOptions.series)("colors", ctx.columnChartOptions.colors)("chart", ctx.columnChartOptions.chart)("xaxis", ctx.columnChartOptions.xaxis)("yaxis", ctx.columnChartOptions.yaxis)("title", ctx.columnChartOptions.title)("dataLabels", ctx.columnChartOptions.dataLabels)("stroke", ctx.columnChartOptions.stroke)("grid", ctx.columnChartOptions.grid)("tooltip", ctx.columnChartOptions.tooltip)("plotOptions", ctx.columnChartOptions.plotOptions)("fill", ctx.columnChartOptions.fill)("legend", ctx.columnChartOptions.legend)("labels", ctx.columnChartOptions.labels)("markers", ctx.columnChartOptions.markers)("theme", ctx.columnChartOptions.theme)("responsive", ctx.columnChartOptions.responsive);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.DonutChart1.data)("type", ctx.DonutChart1.type)("options", ctx.DonutChart1.options)("responsiveOptions", ctx.DonutChart1.responsiveOptions)("events", ctx.DonutChart1.events);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.DonutChart2.data)("type", ctx.DonutChart2.type)("options", ctx.DonutChart2.options)("responsiveOptions", ctx.DonutChart2.responsiveOptions)("events", ctx.DonutChart2.events);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.DonutChart3.data)("type", ctx.DonutChart3.type)("options", ctx.DonutChart3.options)("responsiveOptions", ctx.DonutChart3.responsiveOptions)("events", ctx.DonutChart3.events);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](72);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.lineChart2.data)("type", ctx.lineChart2.type)("options", ctx.lineChart2.options)("responsiveOptions", ctx.lineChart2.responsiveOptions)("events", ctx.lineChart2.events);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.WidgetlineChartEarning.data)("type", ctx.WidgetlineChartEarning.type)("options", ctx.WidgetlineChartEarning.options)("responsiveOptions", ctx.WidgetlineChartEarning.responsiveOptions)("events", ctx.WidgetlineChartEarning.events);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](121);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.lineAreaChart.data)("type", ctx.lineAreaChart.type)("options", ctx.lineAreaChart.options)("responsiveOptions", ctx.lineAreaChart.responsiveOptions)("events", ctx.lineAreaChart.events);
        } }, directives: [angular_resize_event__WEBPACK_IMPORTED_MODULE_3__["ResizedDirective"], ng_chartist__WEBPACK_IMPORTED_MODULE_4__["ChartistComponent"], ng_apexcharts__WEBPACK_IMPORTED_MODULE_5__["ChartComponent"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbCarousel"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbSlide"]], styles: ["[_nghost-%COMP%]     .ct-grid {\n  stroke-dasharray: 0;\n  stroke: rgba(0, 0, 0, 0.1);\n}\n\n[_nghost-%COMP%]     .ct-label {\n  font-size: 0.9rem;\n}\n\n[_nghost-%COMP%]     .WidgetlineChart .ct-point {\n  stroke-width: 0;\n}\n\n[_nghost-%COMP%]     .WidgetlineChartShadow {\n  filter: drop-shadow(0px 15px 6px rgba(47, 139, 230, 0.6));\n}\n\n[_nghost-%COMP%]     .WidgetlineChart .ct-line {\n  stroke: #2F8BE6;\n  stroke-width: 4px;\n}\n\n[_nghost-%COMP%]     .WidgetlineChart1 .ct-point {\n  stroke-width: 0;\n}\n\n[_nghost-%COMP%]     .WidgetlineChart1Shadow {\n  filter: drop-shadow(0px 15px 6px rgba(247, 126, 23, 0.6));\n}\n\n[_nghost-%COMP%]     .WidgetlineChart1 .ct-line {\n  stroke: #F77E17;\n  stroke-width: 4px;\n}\n\n[_nghost-%COMP%]     .WidgetlineChart2 .ct-point {\n  stroke-width: 0;\n}\n\n[_nghost-%COMP%]     .WidgetlineChart2Shadow {\n  filter: drop-shadow(0px 15px 6px rgba(151, 90, 255, 0.6));\n}\n\n[_nghost-%COMP%]     .WidgetlineChart2 .ct-line {\n  stroke: #975AFF;\n  stroke-width: 4px;\n}\n\n[_nghost-%COMP%]     .WidgetlineChart3 .ct-point {\n  stroke-width: 0;\n}\n\n[_nghost-%COMP%]     .WidgetlineChart3Shadow {\n  filter: drop-shadow(0px 15px 6px rgba(64, 192, 87, 0.6));\n}\n\n[_nghost-%COMP%]     .WidgetlineChart3 .ct-line {\n  stroke: #40C057;\n  stroke-width: 4px;\n}\n\n[_nghost-%COMP%]     .lineChart1 .apexcharts-tooltip {\n  color: #342E49 !important;\n}\n\n[_nghost-%COMP%]     .lineChart1Shadow {\n  filter: drop-shadow(0px 15px 5px rgba(0, 0, 0, 0.1));\n  \n}\n\n[_nghost-%COMP%]     .donut1 .ct-label {\n  font-size: 4rem;\n  fill: #F77E17;\n}\n\n[_nghost-%COMP%]     .donut1 .ct-outstanding .ct-slice-donut {\n  stroke: #F5F5F5;\n}\n\n[_nghost-%COMP%]     .donut1 .ct-done .ct-slice-donut {\n  stroke: #FCC173;\n}\n\n[_nghost-%COMP%]     .donut2 .ct-label {\n  font-size: 4rem;\n  fill: #2F8BE6;\n}\n\n[_nghost-%COMP%]     .donut2 .ct-outstanding .ct-slice-donut {\n  stroke: #F5F5F5;\n}\n\n[_nghost-%COMP%]     .donut2 .ct-done .ct-slice-donut {\n  stroke: #81C8F7;\n}\n\n[_nghost-%COMP%]     .donut3 .ct-label {\n  font-size: 4rem;\n  fill: #F55252;\n}\n\n[_nghost-%COMP%]     .donut3 .ct-outstanding .ct-slice-donut {\n  stroke: #F5F5F5;\n}\n\n[_nghost-%COMP%]     .donut3 .ct-done .ct-slice-donut {\n  stroke: #FCA897;\n}\n\n[_nghost-%COMP%]     .weather-pic {\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n[_nghost-%COMP%]     .lineChart2 .ct-point-circle {\n  stroke-width: 2px;\n  fill: #FFFFFF;\n}\n\n[_nghost-%COMP%]     .lineChart2 .ct-line {\n  stroke-width: 1px;\n}\n\n[_nghost-%COMP%]     .lineChart2 .ct-series-a .ct-line {\n  stroke: #60AFF0;\n}\n\n[_nghost-%COMP%]     .lineChart2 .ct-series-a .ct-point-circle {\n  stroke: #2F8BE6;\n}\n\n[_nghost-%COMP%]     .lineChart2 .ct-series-b .ct-line {\n  stroke: #6CD975;\n}\n\n[_nghost-%COMP%]     .lineChart2 .ct-series-b .ct-point-circle {\n  stroke: #40C057;\n}\n\n[_nghost-%COMP%]     .lineChart2Shadow {\n  filter: drop-shadow(0px 16px 6px rgba(0, 0, 0, 0.15));\n  \n}\n\n[_nghost-%COMP%]     .WidgetlineChartEarning .ct-point {\n  stroke-width: 0;\n}\n\n[_nghost-%COMP%]     .WidgetlineChartEarning .ct-line {\n  stroke: url(\"/dashboard/dashboard2#widgradient1\") !important;\n  stroke-width: 4px;\n}\n\n[_nghost-%COMP%]     .WidgetlineChartEarning .ct-grid {\n  stroke: transparent !important;\n}\n\n[_nghost-%COMP%]     .WidgetlineChartEarningShadow {\n  filter: drop-shadow(0px 20px 6px rgba(0, 0, 0, 0.2));\n  \n}\n\n[_nghost-%COMP%]     .dash2-user img {\n  width: 6.5rem;\n  background-color: transparent;\n  border: 2px solid #975AFF;\n  padding: 0.4rem;\n}\n\n[_nghost-%COMP%]     .dash2-progress {\n  height: 1rem;\n  background-color: #F7F7F8;\n}\n\n[_nghost-%COMP%]     .dash2-progress .progress-bar {\n  border-radius: 0;\n}\n\n[_nghost-%COMP%]     .dash2-progress .progress-bar:last-child {\n  border-top-right-radius: inherit;\n  border-bottom-right-radius: inherit;\n}\n\n[_nghost-%COMP%]     .lineAreaChart .ct-line {\n  stroke-width: 1px;\n}\n\n[_nghost-%COMP%]     .lineAreaChart .ct-point-circle {\n  stroke-width: 2px;\n  fill: #FFFFFF;\n}\n\n[_nghost-%COMP%]     .lineAreaChart .ct-series-a .ct-area {\n  fill: url(\"/dashboard/dashboard2#gradient\") !important;\n}\n\n[_nghost-%COMP%]     .lineAreaChart .ct-series-a .ct-point-circle, .lineAreaChart[_ngcontent-%COMP%]   .ct-series-a[_ngcontent-%COMP%]   .ct-line[_ngcontent-%COMP%] {\n  stroke: #975AFF;\n}\n\n[_nghost-%COMP%]     .lineAreaChart .ct-series-b .ct-area {\n  fill: #F9877C;\n  fill-opacity: 0.1;\n}\n\n[_nghost-%COMP%]     .lineAreaChart .ct-series-b .ct-point-circle {\n  stroke: #F55252;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZDIvZGFzaGJvYXJkMi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLG1CQUFvQjtFQUNwQiwwQkFBMkI7QUFEN0I7O0FBSUE7RUFDRSxpQkFBa0I7QUFEcEI7O0FBSUE7RUFDRSxlQUFnQjtBQURsQjs7QUFJQTtFQUVVLHlEQUEwRDtBQURwRTs7QUFJQTtFQUNFLGVBQWdCO0VBQ2hCLGlCQUFpQjtBQURuQjs7QUFJQTtFQUNFLGVBQWdCO0FBRGxCOztBQUlBO0VBRVUseURBQTBEO0FBRHBFOztBQUlBO0VBQ0UsZUFBZ0I7RUFDaEIsaUJBQWlCO0FBRG5COztBQUlBO0VBQ0UsZUFBZ0I7QUFEbEI7O0FBSUE7RUFFVSx5REFBMEQ7QUFEcEU7O0FBSUE7RUFDRSxlQUFnQjtFQUNoQixpQkFBaUI7QUFEbkI7O0FBSUE7RUFDRSxlQUFnQjtBQURsQjs7QUFJQTtFQUVVLHdEQUF5RDtBQURuRTs7QUFJQTtFQUNFLGVBQWdCO0VBQ2hCLGlCQUFpQjtBQURuQjs7QUFJQTtFQUNFLHlCQUEwQjtBQUQ1Qjs7QUFJQTtFQUVVLG9EQUFxRDtFQUM3RCw4REFBQTtBQURGOztBQUlBO0VBQ0UsZUFBZ0I7RUFDaEIsYUFBYztBQURoQjs7QUFJQTtFQUNFLGVBQWdCO0FBRGxCOztBQUlBO0VBQ0UsZUFBZ0I7QUFEbEI7O0FBSUE7RUFDRSxlQUFnQjtFQUNoQixhQUFjO0FBRGhCOztBQUlBO0VBQ0UsZUFBZ0I7QUFEbEI7O0FBSUE7RUFDRSxlQUFnQjtBQURsQjs7QUFJQTtFQUNFLGVBQWdCO0VBQ2hCLGFBQWM7QUFEaEI7O0FBSUE7RUFDRSxlQUFnQjtBQURsQjs7QUFJQTtFQUNFLGVBQWdCO0FBRGxCOztBQUlBO0VBQ0Usb0JBQWtCO0tBQWxCLGlCQUFrQjtBQURwQjs7QUFJQTtFQUNFLGlCQUFrQjtFQUNsQixhQUFjO0FBRGhCOztBQUlBO0VBQ0UsaUJBQWtCO0FBRHBCOztBQUlBO0VBQ0UsZUFBZ0I7QUFEbEI7O0FBSUE7RUFDRSxlQUFnQjtBQURsQjs7QUFJQTtFQUNFLGVBQWdCO0FBRGxCOztBQUlBO0VBQ0UsZUFBZ0I7QUFEbEI7O0FBSUE7RUFFVSxxREFBc0Q7RUFDOUQsOERBQUE7QUFERjs7QUFJQTtFQUNFLGVBQWdCO0FBRGxCOztBQUlBO0VBQ0UsNERBQW1FO0VBQ25FLGlCQUFpQjtBQURuQjs7QUFJQTtFQUNFLDhCQUErQjtBQURqQzs7QUFJQTtFQUVVLG9EQUFxRDtFQUM3RCw4REFBQTtBQURGOztBQUlBO0VBQ0UsYUFBYztFQUNkLDZCQUE4QjtFQUM5Qix5QkFBMEI7RUFDMUIsZUFBZ0I7QUFEbEI7O0FBSUE7RUFDRSxZQUFhO0VBQ2IseUJBQTBCO0FBRDVCOztBQUdBO0VBQ0UsZ0JBQWlCO0FBQW5COztBQUVBO0VBQ0UsZ0NBQWlDO0VBQ2pDLG1DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLGlCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGlCQUFrQjtFQUNsQixhQUFjO0FBQ2hCOztBQUVBO0VBRUUsc0RBQTREO0FBQTlEOztBQUlBO0VBQ0UsZUFBZ0I7QUFEbEI7O0FBSUE7RUFDRSxhQUFjO0VBQ2QsaUJBQWtCO0FBRHBCOztBQUlBO0VBQ0UsZUFBZ0I7QUFEbEIiLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmQvZGFzaGJvYXJkMi9kYXNoYm9hcmQyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcImFzc2V0cy9zYXNzL2NvcmUvdmFyaWFibGVzL2dyYWRpZW50LXZhcmlhYmxlcy5zY3NzXCI7XG5cbjpob3N0IDo6bmctZGVlcCAuY3QtZ3JpZCB7XG4gIHN0cm9rZS1kYXNoYXJyYXkgOiAwO1xuICBzdHJva2UgOiByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG5cbjpob3N0IDo6bmctZGVlcCAuY3QtbGFiZWwge1xuICBmb250LXNpemUgOiAwLjlyZW07XG59XG5cbjpob3N0IDo6bmctZGVlcCAuV2lkZ2V0bGluZUNoYXJ0IC5jdC1wb2ludCB7XG4gIHN0cm9rZS13aWR0aCA6IDA7XG59XG5cbjpob3N0IDo6bmctZGVlcCAuV2lkZ2V0bGluZUNoYXJ0U2hhZG93IHtcbiAgLXdlYmtpdC1maWx0ZXIgOiBkcm9wLXNoYWRvdygwcHggMTVweCA2cHggcmdiYSg0NywgMTM5LCAyMzAsIDAuNikpO1xuICAgICAgICAgIGZpbHRlciA6IGRyb3Atc2hhZG93KDBweCAxNXB4IDZweCByZ2JhKDQ3LCAxMzksIDIzMCwgMC42KSk7XG59XG5cbjpob3N0IDo6bmctZGVlcCAuV2lkZ2V0bGluZUNoYXJ0IC5jdC1saW5lIHtcbiAgc3Ryb2tlIDogIzJGOEJFNjtcbiAgc3Ryb2tlLXdpZHRoOiA0cHg7XG59XG5cbjpob3N0IDo6bmctZGVlcCAuV2lkZ2V0bGluZUNoYXJ0MSAuY3QtcG9pbnQge1xuICBzdHJva2Utd2lkdGggOiAwO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLldpZGdldGxpbmVDaGFydDFTaGFkb3cge1xuICAtd2Via2l0LWZpbHRlciA6IGRyb3Atc2hhZG93KDBweCAxNXB4IDZweCByZ2JhKDI0NywgMTI2LCAyMywgMC42KSk7XG4gICAgICAgICAgZmlsdGVyIDogZHJvcC1zaGFkb3coMHB4IDE1cHggNnB4IHJnYmEoMjQ3LCAxMjYsIDIzLCAwLjYpKTtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5XaWRnZXRsaW5lQ2hhcnQxIC5jdC1saW5lIHtcbiAgc3Ryb2tlIDogI0Y3N0UxNztcbiAgc3Ryb2tlLXdpZHRoOiA0cHg7XG59XG5cbjpob3N0IDo6bmctZGVlcCAuV2lkZ2V0bGluZUNoYXJ0MiAuY3QtcG9pbnQge1xuICBzdHJva2Utd2lkdGggOiAwO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLldpZGdldGxpbmVDaGFydDJTaGFkb3cge1xuICAtd2Via2l0LWZpbHRlciA6IGRyb3Atc2hhZG93KDBweCAxNXB4IDZweCByZ2JhKDE1MSwgOTAsIDI1NSwgMC42KSk7XG4gICAgICAgICAgZmlsdGVyIDogZHJvcC1zaGFkb3coMHB4IDE1cHggNnB4IHJnYmEoMTUxLCA5MCwgMjU1LCAwLjYpKTtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5XaWRnZXRsaW5lQ2hhcnQyIC5jdC1saW5lIHtcbiAgc3Ryb2tlIDogIzk3NUFGRjtcbiAgc3Ryb2tlLXdpZHRoOiA0cHg7XG59XG5cbjpob3N0IDo6bmctZGVlcCAuV2lkZ2V0bGluZUNoYXJ0MyAuY3QtcG9pbnQge1xuICBzdHJva2Utd2lkdGggOiAwO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLldpZGdldGxpbmVDaGFydDNTaGFkb3cge1xuICAtd2Via2l0LWZpbHRlciA6IGRyb3Atc2hhZG93KDBweCAxNXB4IDZweCByZ2JhKDY0LCAxOTIsIDg3LCAwLjYpKTtcbiAgICAgICAgICBmaWx0ZXIgOiBkcm9wLXNoYWRvdygwcHggMTVweCA2cHggcmdiYSg2NCwgMTkyLCA4NywgMC42KSk7XG59XG5cbjpob3N0IDo6bmctZGVlcCAuV2lkZ2V0bGluZUNoYXJ0MyAuY3QtbGluZSB7XG4gIHN0cm9rZSA6ICM0MEMwNTc7XG4gIHN0cm9rZS13aWR0aDogNHB4O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLmxpbmVDaGFydDEgLmFwZXhjaGFydHMtdG9vbHRpcCB7XG4gIGNvbG9yIDogIzM0MkU0OSAhaW1wb3J0YW50O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLmxpbmVDaGFydDFTaGFkb3cge1xuICAtd2Via2l0LWZpbHRlciA6IGRyb3Atc2hhZG93KDBweCAxNXB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMSkpO1xuICAgICAgICAgIGZpbHRlciA6IGRyb3Atc2hhZG93KDBweCAxNXB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMSkpO1xuICAvKiBTYW1lIHN5bnRheCBhcyBib3gtc2hhZG93LCBleGNlcHQgZm9yIHRoZSBzcHJlYWQgcHJvcGVydHkgKi9cbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5kb251dDEgLmN0LWxhYmVsIHtcbiAgZm9udC1zaXplIDogNHJlbTtcbiAgZmlsbCA6ICNGNzdFMTc7XG59XG5cbjpob3N0IDo6bmctZGVlcCAuZG9udXQxIC5jdC1vdXRzdGFuZGluZyAuY3Qtc2xpY2UtZG9udXQge1xuICBzdHJva2UgOiAjRjVGNUY1O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLmRvbnV0MSAuY3QtZG9uZSAuY3Qtc2xpY2UtZG9udXQge1xuICBzdHJva2UgOiAjRkNDMTczO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLmRvbnV0MiAuY3QtbGFiZWwge1xuICBmb250LXNpemUgOiA0cmVtO1xuICBmaWxsIDogIzJGOEJFNjtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5kb251dDIgLmN0LW91dHN0YW5kaW5nIC5jdC1zbGljZS1kb251dCB7XG4gIHN0cm9rZSA6ICNGNUY1RjU7XG59XG5cbjpob3N0IDo6bmctZGVlcCAuZG9udXQyIC5jdC1kb25lIC5jdC1zbGljZS1kb251dCB7XG4gIHN0cm9rZSA6ICM4MUM4Rjc7XG59XG5cbjpob3N0IDo6bmctZGVlcCAuZG9udXQzIC5jdC1sYWJlbCB7XG4gIGZvbnQtc2l6ZSA6IDRyZW07XG4gIGZpbGwgOiAjRjU1MjUyO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLmRvbnV0MyAuY3Qtb3V0c3RhbmRpbmcgLmN0LXNsaWNlLWRvbnV0IHtcbiAgc3Ryb2tlIDogI0Y1RjVGNTtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5kb251dDMgLmN0LWRvbmUgLmN0LXNsaWNlLWRvbnV0IHtcbiAgc3Ryb2tlIDogI0ZDQTg5Nztcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC53ZWF0aGVyLXBpYyB7XG4gIG9iamVjdC1maXQgOiBjb3Zlcjtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5saW5lQ2hhcnQyIC5jdC1wb2ludC1jaXJjbGUge1xuICBzdHJva2Utd2lkdGggOiAycHg7XG4gIGZpbGwgOiAjRkZGRkZGO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLmxpbmVDaGFydDIgLmN0LWxpbmUge1xuICBzdHJva2Utd2lkdGggOiAxcHg7XG59XG5cbjpob3N0IDo6bmctZGVlcCAubGluZUNoYXJ0MiAuY3Qtc2VyaWVzLWEgLmN0LWxpbmUge1xuICBzdHJva2UgOiAjNjBBRkYwO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLmxpbmVDaGFydDIgLmN0LXNlcmllcy1hIC5jdC1wb2ludC1jaXJjbGUge1xuICBzdHJva2UgOiAjMkY4QkU2O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLmxpbmVDaGFydDIgLmN0LXNlcmllcy1iIC5jdC1saW5lIHtcbiAgc3Ryb2tlIDogIzZDRDk3NTtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5saW5lQ2hhcnQyIC5jdC1zZXJpZXMtYiAuY3QtcG9pbnQtY2lyY2xlIHtcbiAgc3Ryb2tlIDogIzQwQzA1Nztcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5saW5lQ2hhcnQyU2hhZG93IHtcbiAgLXdlYmtpdC1maWx0ZXIgOiBkcm9wLXNoYWRvdygwcHggMTZweCA2cHggcmdiYSgwLCAwLCAwLCAwLjE1KSk7XG4gICAgICAgICAgZmlsdGVyIDogZHJvcC1zaGFkb3coMHB4IDE2cHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xNSkpO1xuICAvKiBTYW1lIHN5bnRheCBhcyBib3gtc2hhZG93LCBleGNlcHQgZm9yIHRoZSBzcHJlYWQgcHJvcGVydHkgKi9cbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5XaWRnZXRsaW5lQ2hhcnRFYXJuaW5nIC5jdC1wb2ludCB7XG4gIHN0cm9rZS13aWR0aCA6IDA7XG59XG5cbjpob3N0IDo6bmctZGVlcCAuV2lkZ2V0bGluZUNoYXJ0RWFybmluZyAuY3QtbGluZSB7XG4gIHN0cm9rZSA6IHVybCgkZGFzaGJvYXJkMi1ncmFkaWVudC1wYXRoICsgICN3aWRncmFkaWVudDEpICFpbXBvcnRhbnQ7XG4gIHN0cm9rZS13aWR0aDogNHB4O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLldpZGdldGxpbmVDaGFydEVhcm5pbmcgLmN0LWdyaWQge1xuICBzdHJva2UgOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLldpZGdldGxpbmVDaGFydEVhcm5pbmdTaGFkb3cge1xuICAtd2Via2l0LWZpbHRlciA6IGRyb3Atc2hhZG93KDBweCAyMHB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMikpO1xuICAgICAgICAgIGZpbHRlciA6IGRyb3Atc2hhZG93KDBweCAyMHB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMikpO1xuICAvKiBTYW1lIHN5bnRheCBhcyBib3gtc2hhZG93LCBleGNlcHQgZm9yIHRoZSBzcHJlYWQgcHJvcGVydHkgKi9cbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5kYXNoMi11c2VyIGltZyB7XG4gIHdpZHRoIDogNi41cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yIDogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlciA6IDJweCBzb2xpZCAjOTc1QUZGO1xuICBwYWRkaW5nIDogMC40cmVtO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLmRhc2gyLXByb2dyZXNzIHtcbiAgaGVpZ2h0IDogMXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvciA6ICNGN0Y3Rjg7XG59XG46aG9zdCA6Om5nLWRlZXAgLmRhc2gyLXByb2dyZXNzIC5wcm9ncmVzcy1iYXIge1xuICBib3JkZXItcmFkaXVzIDogMDtcbn1cbjpob3N0IDo6bmctZGVlcCAuZGFzaDItcHJvZ3Jlc3MgLnByb2dyZXNzLWJhcjpsYXN0LWNoaWxkIHtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXMgOiBpbmhlcml0O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1cyA6IGluaGVyaXQ7XG59XG5cbjpob3N0IDo6bmctZGVlcCAubGluZUFyZWFDaGFydCAuY3QtbGluZSB7XG4gIHN0cm9rZS13aWR0aCA6IDFweDtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5saW5lQXJlYUNoYXJ0IC5jdC1wb2ludC1jaXJjbGUge1xuICBzdHJva2Utd2lkdGggOiAycHg7XG4gIGZpbGwgOiAjRkZGRkZGO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLmxpbmVBcmVhQ2hhcnQgLmN0LXNlcmllcy1hIC5jdC1hcmVhIHtcbiAgLy8gZmlsbCA6ICNCNTgzRkY7XG4gIGZpbGw6IHVybCgkZGFzaGJvYXJkMi1ncmFkaWVudC1wYXRoICsgICNncmFkaWVudCkgIWltcG9ydGFudDtcblxufVxuXG46aG9zdCA6Om5nLWRlZXAgLmxpbmVBcmVhQ2hhcnQgLmN0LXNlcmllcy1hIC5jdC1wb2ludC1jaXJjbGUsIC5saW5lQXJlYUNoYXJ0IC5jdC1zZXJpZXMtYSAuY3QtbGluZSB7XG4gIHN0cm9rZSA6ICM5NzVBRkY7XG59XG5cbjpob3N0IDo6bmctZGVlcCAubGluZUFyZWFDaGFydCAuY3Qtc2VyaWVzLWIgLmN0LWFyZWEge1xuICBmaWxsIDogI0Y5ODc3QztcbiAgZmlsbC1vcGFjaXR5IDogMC4xO1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLmxpbmVBcmVhQ2hhcnQgLmN0LXNlcmllcy1iIC5jdC1wb2ludC1jaXJjbGUge1xuICBzdHJva2UgOiAjRjU1MjUyO1xufVxuIl19 */"] });
    return Dashboard2Component;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Dashboard2Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-dashboard2',
                templateUrl: './dashboard2.component.html',
                styleUrls: ['./dashboard2.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/shared/directives/match-height.directive.ts":
/*!*************************************************************!*\
  !*** ./src/app/shared/directives/match-height.directive.ts ***!
  \*************************************************************/
/*! exports provided: MatchHeightDirective, MatchHeightModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatchHeightDirective", function() { return MatchHeightDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatchHeightModule", function() { return MatchHeightModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


var MatchHeightDirective = /** @class */ (function () {
    function MatchHeightDirective(el) {
        this.el = el;
    }
    MatchHeightDirective.prototype.ngAfterViewInit = function () {
        var _this = this;
        // call our matchHeight function here
        setTimeout(function () { _this.matchHeights(_this.el.nativeElement, _this.matchHeight); }, 300);
    };
    MatchHeightDirective.prototype.matchHeights = function (parent, className) {
        // match height logic here
        if (!parent)
            return;
        // step 1: find all the child elements with the selected class name
        var children = parent.getElementsByClassName(className);
        if (!children)
            return;
        //Pixinvent - Match hight - fix --- comment below code
        Array.from(children).forEach(function (x) {
            x.style.height = 'initial';
        });
        // step 2a: get all the child elements heights
        var itemHeights = Array.from(children)
            .map(function (x) { return x.getBoundingClientRect().height; });
        // step 2b: find out the tallest
        var maxHeight = itemHeights.reduce(function (prev, curr) {
            return curr > prev ? curr : prev;
        }, 0);
        // step 3: update all the child elements to the tallest height
        Array.from(children)
            .forEach(function (x) { return x.style.height = maxHeight + "px"; });
    };
    MatchHeightDirective.prototype.onResize = function () {
        // call our matchHeight function here
        this.matchHeights(this.el.nativeElement, this.matchHeight);
    };
    MatchHeightDirective.ɵfac = function MatchHeightDirective_Factory(t) { return new (t || MatchHeightDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
    MatchHeightDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: MatchHeightDirective, selectors: [["", "matchHeight", ""]], hostBindings: function MatchHeightDirective_HostBindings(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function MatchHeightDirective_resize_HostBindingHandler() { return ctx.onResize(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
        } }, inputs: { matchHeight: "matchHeight" } });
    return MatchHeightDirective;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatchHeightDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[matchHeight]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { matchHeight: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], onResize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:resize']
        }] }); })();
var MatchHeightModule = /** @class */ (function () {
    function MatchHeightModule() {
    }
    MatchHeightModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MatchHeightModule });
    MatchHeightModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MatchHeightModule_Factory(t) { return new (t || MatchHeightModule)(); } });
    return MatchHeightModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MatchHeightModule, { declarations: [MatchHeightDirective], exports: [MatchHeightDirective] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MatchHeightModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [MatchHeightDirective],
                exports: [MatchHeightDirective]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=dashboard-dashboard-module.js.map