(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _checkbox = require('../../lib/components/ddForm/components/input/specifics/checkbox/checkbox');

var _checkbox2 = _interopRequireDefault(_checkbox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

document.addEventListener('DOMContentLoaded', function () {
	//Input.initInputControls(document.querySelectorAll('.form-inputCheckbox'));
	_checkbox2.default.initFew('.form-inputCheckbox');
});

},{"../../lib/components/ddForm/components/input/specifics/checkbox/checkbox":3}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.InputControl = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ddUtil = require('../../../ddUtil/ddUtil');

var _ddUtil2 = _interopRequireDefault(_ddUtil);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Input = function Input() {
	_classCallCheck(this, Input);
};

exports.default = Input;

var InputControl = exports.InputControl = function () {
	function InputControl(el) {
		_classCallCheck(this, InputControl);

		el.inputControl = this;
		this.el = el;
		this.input = this.el.querySelector('input');
		this.label = this.el.querySelector('label');
		this.toggleCallback = function () {};
		this.init();
	}

	_createClass(InputControl, [{
		key: 'init',
		value: function init() {
			var _this = this;

			this.toggleCallback = function (e) {
				_this.toggle();
				e.preventDefault();
			};
			this.el.addEventListener('click', this.toggleCallback);
			this.el.addEventListener('touch', this.toggleCallback);
		}
	}, {
		key: 'destroy',
		value: function destroy() {
			this.el.removeEventListener('click', this.toggleCallback);
			this.el.removeEventListener('touch', this.toggleCallback);
			delete this.el.inputControl;
		}
	}, {
		key: 'toggle',
		value: function toggle() {
			this.input.checked = !this.input.checked;
			event.preventDefault();
		}
	}], [{
		key: 'initFew',
		value: function initFew(input) {
			_ddUtil2.default.eachNodes(input, function (el) {
				new InputControl(el);
			});
		}
	}]);

	return InputControl;
}();

},{"../../../ddUtil/ddUtil":4}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _input = require("../../input");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InputCheckbox = function (_InputControl) {
	_inherits(InputCheckbox, _InputControl);

	function InputCheckbox() {
		_classCallCheck(this, InputCheckbox);

		return _possibleConstructorReturn(this, (InputCheckbox.__proto__ || Object.getPrototypeOf(InputCheckbox)).apply(this, arguments));
	}

	return InputCheckbox;
}(_input.InputControl);

exports.default = InputCheckbox;

},{"../../input":2}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Util = function () {
	function Util() {
		_classCallCheck(this, Util);
	}

	_createClass(Util, null, [{
		key: 'nodesToArray',
		value: function nodesToArray(input) {
			var els = [];
			if (input instanceof HTMLElement) {
				els.push(input);
			} else if (Array.isArray(input)) {
				els = input;
			} else if (input instanceof NodeList) {
				els = [].concat(_toConsumableArray(input));
			} else if (typeof input === 'string') {
				els = [].concat(_toConsumableArray(document.querySelectorAll(input)));
			} else {
				console.log(input + ' must be Array, NodeList, selector or HTMLElement');
				return [];
			}
			return els;
		}
	}, {
		key: 'eachNodes',
		value: function eachNodes(input, callback) {
			var els = this.nodesToArray(input);
			els.forEach(function (el) {
				callback.call(el, el);
			});
		}
	}]);

	return Util;
}();

exports.default = Util;

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmNcXGV4YW1wbGVcXGpzXFxtYWluLmpzIiwic3JjXFxsaWJcXGNvbXBvbmVudHNcXGRkRm9ybVxcY29tcG9uZW50c1xcaW5wdXRcXGlucHV0LmpzIiwic3JjXFxsaWJcXGNvbXBvbmVudHNcXGRkRm9ybVxcY29tcG9uZW50c1xcaW5wdXRcXHNwZWNpZmljc1xcY2hlY2tib3hcXGNoZWNrYm94LmpzIiwic3JjXFxsaWJcXGNvbXBvbmVudHNcXGRkVXRpbFxcZGRVdGlsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQTs7Ozs7O0FBRUEsU0FBUyxnQkFBVCxDQUEwQixrQkFBMUIsRUFBOEMsWUFBTTtBQUNuRDtBQUNBLG9CQUFjLE9BQWQsQ0FBc0IscUJBQXRCO0FBQ0EsQ0FIRDs7Ozs7Ozs7Ozs7O0FDRkE7Ozs7Ozs7O0lBRXFCLEs7Ozs7a0JBQUEsSzs7SUFLUixZLFdBQUEsWTtBQUVaLHVCQUFZLEVBQVosRUFDQTtBQUFBOztBQUNDLEtBQUcsWUFBSCxHQUFrQixJQUFsQjtBQUNBLE9BQUssRUFBTCxHQUFVLEVBQVY7QUFDQSxPQUFLLEtBQUwsR0FBYSxLQUFLLEVBQUwsQ0FBUSxhQUFSLENBQXNCLE9BQXRCLENBQWI7QUFDQSxPQUFLLEtBQUwsR0FBYSxLQUFLLEVBQUwsQ0FBUSxhQUFSLENBQXNCLE9BQXRCLENBQWI7QUFDQSxPQUFLLGNBQUwsR0FBc0IsWUFBTSxDQUFFLENBQTlCO0FBQ0EsT0FBSyxJQUFMO0FBQ0E7Ozs7eUJBVUQ7QUFBQTs7QUFDQyxRQUFLLGNBQUwsR0FBc0IsVUFBQyxDQUFELEVBQU87QUFDNUIsVUFBSyxNQUFMO0FBQ0EsTUFBRSxjQUFGO0FBQ0EsSUFIRDtBQUlBLFFBQUssRUFBTCxDQUFRLGdCQUFSLENBQXlCLE9BQXpCLEVBQWtDLEtBQUssY0FBdkM7QUFDQSxRQUFLLEVBQUwsQ0FBUSxnQkFBUixDQUF5QixPQUF6QixFQUFrQyxLQUFLLGNBQXZDO0FBQ0E7Ozs0QkFHRDtBQUNDLFFBQUssRUFBTCxDQUFRLG1CQUFSLENBQTRCLE9BQTVCLEVBQXFDLEtBQUssY0FBMUM7QUFDQSxRQUFLLEVBQUwsQ0FBUSxtQkFBUixDQUE0QixPQUE1QixFQUFxQyxLQUFLLGNBQTFDO0FBQ0EsVUFBTyxLQUFLLEVBQUwsQ0FBUSxZQUFmO0FBQ0E7OzsyQkFHRDtBQUNDLFFBQUssS0FBTCxDQUFXLE9BQVgsR0FBcUIsQ0FBQyxLQUFLLEtBQUwsQ0FBVyxPQUFqQztBQUNBLFNBQU0sY0FBTjtBQUNBOzs7MEJBNUJjLEssRUFDZjtBQUNDLG9CQUFLLFNBQUwsQ0FBZSxLQUFmLEVBQXNCLFVBQUMsRUFBRCxFQUFRO0FBQzdCLFFBQUksWUFBSixDQUFpQixFQUFqQjtBQUNBLElBRkQ7QUFHQTs7Ozs7Ozs7Ozs7OztBQ3hCRjs7Ozs7Ozs7SUFFcUIsYTs7Ozs7Ozs7Ozs7O2tCQUFBLGE7Ozs7Ozs7Ozs7Ozs7OztJQ0ZBLEk7Ozs7Ozs7K0JBRUEsSyxFQUNwQjtBQUNDLE9BQUksTUFBTSxFQUFWO0FBQ0EsT0FBSSxpQkFBaUIsV0FBckIsRUFBa0M7QUFDakMsUUFBSSxJQUFKLENBQVMsS0FBVDtBQUNBLElBRkQsTUFFTyxJQUFJLE1BQU0sT0FBTixDQUFjLEtBQWQsQ0FBSixFQUEwQjtBQUNoQyxVQUFNLEtBQU47QUFDQSxJQUZNLE1BRUEsSUFBSSxpQkFBaUIsUUFBckIsRUFBK0I7QUFDckMsdUNBQVUsS0FBVjtBQUNBLElBRk0sTUFFQSxJQUFJLE9BQU8sS0FBUCxLQUFpQixRQUFyQixFQUErQjtBQUNyQyx1Q0FBVSxTQUFTLGdCQUFULENBQTBCLEtBQTFCLENBQVY7QUFDQSxJQUZNLE1BRUE7QUFDTixZQUFRLEdBQVIsQ0FBZSxLQUFmO0FBQ0EsV0FBTyxFQUFQO0FBQ0E7QUFDRCxVQUFPLEdBQVA7QUFDQTs7OzRCQUVnQixLLEVBQU8sUSxFQUN4QjtBQUNDLE9BQUksTUFBTSxLQUFLLFlBQUwsQ0FBa0IsS0FBbEIsQ0FBVjtBQUNBLE9BQUksT0FBSixDQUFZLFVBQVMsRUFBVCxFQUFZO0FBQ3ZCLGFBQVMsSUFBVCxDQUFjLEVBQWQsRUFBa0IsRUFBbEI7QUFDQSxJQUZEO0FBR0E7Ozs7OztrQkExQm1CLEkiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0IElucHV0Q2hlY2tib3ggZnJvbSAnLi4vLi4vbGliL2NvbXBvbmVudHMvZGRGb3JtL2NvbXBvbmVudHMvaW5wdXQvc3BlY2lmaWNzL2NoZWNrYm94L2NoZWNrYm94JztcclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XHJcblx0Ly9JbnB1dC5pbml0SW5wdXRDb250cm9scyhkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZm9ybS1pbnB1dENoZWNrYm94JykpO1xyXG5cdElucHV0Q2hlY2tib3guaW5pdEZldygnLmZvcm0taW5wdXRDaGVja2JveCcpO1xyXG59KTsiLCJpbXBvcnQgVXRpbCBmcm9tIFwiLi4vLi4vLi4vZGRVdGlsL2RkVXRpbFwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5wdXRcclxue1xyXG5cdFxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgSW5wdXRDb250cm9sXHJcbntcclxuXHRjb25zdHJ1Y3RvcihlbClcclxuXHR7XHJcblx0XHRlbC5pbnB1dENvbnRyb2wgPSB0aGlzO1xyXG5cdFx0dGhpcy5lbCA9IGVsO1xyXG5cdFx0dGhpcy5pbnB1dCA9IHRoaXMuZWwucXVlcnlTZWxlY3RvcignaW5wdXQnKTtcclxuXHRcdHRoaXMubGFiZWwgPSB0aGlzLmVsLnF1ZXJ5U2VsZWN0b3IoJ2xhYmVsJyk7XHJcblx0XHR0aGlzLnRvZ2dsZUNhbGxiYWNrID0gKCkgPT4ge307XHJcblx0XHR0aGlzLmluaXQoKTtcclxuXHR9XHJcblxyXG5cdHN0YXRpYyBpbml0RmV3KGlucHV0KVxyXG5cdHtcclxuXHRcdFV0aWwuZWFjaE5vZGVzKGlucHV0LCAoZWwpID0+IHtcclxuXHRcdFx0bmV3IElucHV0Q29udHJvbChlbCk7XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdGluaXQoKVxyXG5cdHtcclxuXHRcdHRoaXMudG9nZ2xlQ2FsbGJhY2sgPSAoZSkgPT4ge1xyXG5cdFx0XHR0aGlzLnRvZ2dsZSgpO1xyXG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHR9O1xyXG5cdFx0dGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMudG9nZ2xlQ2FsbGJhY2spO1xyXG5cdFx0dGhpcy5lbC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaCcsIHRoaXMudG9nZ2xlQ2FsbGJhY2spO1xyXG5cdH1cclxuXHJcblx0ZGVzdHJveSgpXHJcblx0e1xyXG5cdFx0dGhpcy5lbC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMudG9nZ2xlQ2FsbGJhY2spO1xyXG5cdFx0dGhpcy5lbC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaCcsIHRoaXMudG9nZ2xlQ2FsbGJhY2spO1xyXG5cdFx0ZGVsZXRlIHRoaXMuZWwuaW5wdXRDb250cm9sO1xyXG5cdH1cclxuXHJcblx0dG9nZ2xlKClcclxuXHR7XHJcblx0XHR0aGlzLmlucHV0LmNoZWNrZWQgPSAhdGhpcy5pbnB1dC5jaGVja2VkO1xyXG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHR9XHJcbn0iLCJpbXBvcnQge0lucHV0Q29udHJvbH0gZnJvbSBcIi4uLy4uL2lucHV0XCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbnB1dENoZWNrYm94IGV4dGVuZHMgSW5wdXRDb250cm9sXHJcbntcclxuXHRcclxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFV0aWxcclxue1xyXG5cdHN0YXRpYyBub2Rlc1RvQXJyYXkoaW5wdXQpXHJcblx0e1xyXG5cdFx0bGV0IGVscyA9IFtdO1xyXG5cdFx0aWYgKGlucHV0IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcclxuXHRcdFx0ZWxzLnB1c2goaW5wdXQpO1xyXG5cdFx0fSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGlucHV0KSkge1xyXG5cdFx0XHRlbHMgPSBpbnB1dDtcclxuXHRcdH0gZWxzZSBpZiAoaW5wdXQgaW5zdGFuY2VvZiBOb2RlTGlzdCkge1xyXG5cdFx0XHRlbHMgPSBbLi4uaW5wdXRdO1xyXG5cdFx0fSBlbHNlIGlmICh0eXBlb2YgaW5wdXQgPT09ICdzdHJpbmcnKSB7XHJcblx0XHRcdGVscyA9IFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGlucHV0KV07XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRjb25zb2xlLmxvZyhgJHtpbnB1dH0gbXVzdCBiZSBBcnJheSwgTm9kZUxpc3QsIHNlbGVjdG9yIG9yIEhUTUxFbGVtZW50YCk7XHJcblx0XHRcdHJldHVybiBbXTtcclxuXHRcdH1cclxuXHRcdHJldHVybiBlbHM7XHJcblx0fVxyXG5cclxuXHRzdGF0aWMgZWFjaE5vZGVzKGlucHV0LCBjYWxsYmFjaylcclxuXHR7XHJcblx0XHRsZXQgZWxzID0gdGhpcy5ub2Rlc1RvQXJyYXkoaW5wdXQpO1xyXG5cdFx0ZWxzLmZvckVhY2goZnVuY3Rpb24oZWwpe1xyXG5cdFx0XHRjYWxsYmFjay5jYWxsKGVsLCBlbCk7XHJcblx0XHR9KTtcclxuXHR9XHJcbn0iXX0=
