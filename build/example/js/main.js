(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _input = require('../../lib/components/ddForm/components/input/input');

var _input2 = _interopRequireDefault(_input);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

document.addEventListener('DOMContentLoaded', function () {
	_input2.default.initInputControls(document.querySelectorAll('.form-inputCheckbox'));
});

},{"../../lib/components/ddForm/components/input/input":2}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Input = function () {
	function Input() {
		_classCallCheck(this, Input);
	}

	_createClass(Input, null, [{
		key: 'normalizeElements',
		value: function normalizeElements(input) {
			var els = [];
			if (input instanceof HTMLElement) {
				els.push(input);
			} else if (Array.isArray(input)) {
				els = input;
			} else if (input instanceof NodeList) {
				els = [].concat(_toConsumableArray(input));
			} else {
				console.log(input + ' must be Array, NodeList or HTMLElement');
				return [];
			}
			return els;
		}
	}, {
		key: 'initInputControls',
		value: function initInputControls(input) {
			var els = this.normalizeElements(input);
			els.forEach(function (el) {
				new InputControl(el);
			});
		}
	}]);

	return Input;
}();

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
	}]);

	return InputControl;
}();

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmNcXGV4YW1wbGVcXGpzXFxtYWluLmpzIiwic3JjXFxsaWJcXGNvbXBvbmVudHNcXGRkRm9ybVxcY29tcG9uZW50c1xcaW5wdXRcXGlucHV0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQTs7Ozs7O0FBRUEsU0FBUyxnQkFBVCxDQUEwQixrQkFBMUIsRUFBOEMsWUFBTTtBQUNuRCxpQkFBTSxpQkFBTixDQUF3QixTQUFTLGdCQUFULENBQTBCLHFCQUExQixDQUF4QjtBQUNBLENBRkQ7Ozs7Ozs7Ozs7Ozs7OztJQ0ZxQixLOzs7Ozs7O29DQUVLLEssRUFDekI7QUFDQyxPQUFJLE1BQU0sRUFBVjtBQUNBLE9BQUksaUJBQWlCLFdBQXJCLEVBQWtDO0FBQ2pDLFFBQUksSUFBSixDQUFTLEtBQVQ7QUFDQSxJQUZELE1BRU8sSUFBSSxNQUFNLE9BQU4sQ0FBYyxLQUFkLENBQUosRUFBMEI7QUFDaEMsVUFBTSxLQUFOO0FBQ0EsSUFGTSxNQUVBLElBQUksaUJBQWlCLFFBQXJCLEVBQStCO0FBQ3JDLHVDQUFVLEtBQVY7QUFDQSxJQUZNLE1BRUE7QUFDTixZQUFRLEdBQVIsQ0FBZSxLQUFmO0FBQ0EsV0FBTyxFQUFQO0FBQ0E7QUFDRCxVQUFPLEdBQVA7QUFDQTs7O29DQUV3QixLLEVBQ3pCO0FBQ0MsT0FBSSxNQUFNLEtBQUssaUJBQUwsQ0FBdUIsS0FBdkIsQ0FBVjtBQUNBLE9BQUksT0FBSixDQUFZLFVBQVMsRUFBVCxFQUFZO0FBQ3ZCLFFBQUksWUFBSixDQUFpQixFQUFqQjtBQUNBLElBRkQ7QUFHQTs7Ozs7O2tCQXhCbUIsSzs7SUEyQlIsWSxXQUFBLFk7QUFFWix1QkFBWSxFQUFaLEVBQ0E7QUFBQTs7QUFDQyxLQUFHLFlBQUgsR0FBa0IsSUFBbEI7QUFDQSxPQUFLLEVBQUwsR0FBVSxFQUFWO0FBQ0EsT0FBSyxLQUFMLEdBQWEsS0FBSyxFQUFMLENBQVEsYUFBUixDQUFzQixPQUF0QixDQUFiO0FBQ0EsT0FBSyxLQUFMLEdBQWEsS0FBSyxFQUFMLENBQVEsYUFBUixDQUFzQixPQUF0QixDQUFiO0FBQ0EsT0FBSyxjQUFMLEdBQXNCLFlBQU0sQ0FBRSxDQUE5QjtBQUNBLE9BQUssSUFBTDtBQUNBOzs7O3lCQUdEO0FBQUE7O0FBQ0MsUUFBSyxjQUFMLEdBQXNCLFVBQUMsQ0FBRCxFQUFPO0FBQzVCLFVBQUssTUFBTDtBQUNBLE1BQUUsY0FBRjtBQUNBLElBSEQ7QUFJQSxRQUFLLEVBQUwsQ0FBUSxnQkFBUixDQUF5QixPQUF6QixFQUFrQyxLQUFLLGNBQXZDO0FBQ0EsUUFBSyxFQUFMLENBQVEsZ0JBQVIsQ0FBeUIsT0FBekIsRUFBa0MsS0FBSyxjQUF2QztBQUNBOzs7NEJBR0Q7QUFDQyxRQUFLLEVBQUwsQ0FBUSxtQkFBUixDQUE0QixPQUE1QixFQUFxQyxLQUFLLGNBQTFDO0FBQ0EsUUFBSyxFQUFMLENBQVEsbUJBQVIsQ0FBNEIsT0FBNUIsRUFBcUMsS0FBSyxjQUExQztBQUNBLFVBQU8sS0FBSyxFQUFMLENBQVEsWUFBZjtBQUNBOzs7MkJBR0Q7QUFDQyxRQUFLLEtBQUwsQ0FBVyxPQUFYLEdBQXFCLENBQUMsS0FBSyxLQUFMLENBQVcsT0FBakM7QUFDQSxTQUFNLGNBQU47QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQgSW5wdXQgZnJvbSAnLi4vLi4vbGliL2NvbXBvbmVudHMvZGRGb3JtL2NvbXBvbmVudHMvaW5wdXQvaW5wdXQnO1xyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcclxuXHRJbnB1dC5pbml0SW5wdXRDb250cm9scyhkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZm9ybS1pbnB1dENoZWNrYm94JykpO1xyXG59KTsiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBJbnB1dFxyXG57XHJcblx0c3RhdGljIG5vcm1hbGl6ZUVsZW1lbnRzKGlucHV0KVxyXG5cdHtcclxuXHRcdGxldCBlbHMgPSBbXTtcclxuXHRcdGlmIChpbnB1dCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XHJcblx0XHRcdGVscy5wdXNoKGlucHV0KTtcclxuXHRcdH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShpbnB1dCkpIHtcclxuXHRcdFx0ZWxzID0gaW5wdXQ7XHJcblx0XHR9IGVsc2UgaWYgKGlucHV0IGluc3RhbmNlb2YgTm9kZUxpc3QpIHtcclxuXHRcdFx0ZWxzID0gWy4uLmlucHV0XTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGNvbnNvbGUubG9nKGAke2lucHV0fSBtdXN0IGJlIEFycmF5LCBOb2RlTGlzdCBvciBIVE1MRWxlbWVudGApO1xyXG5cdFx0XHRyZXR1cm4gW107XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gZWxzO1xyXG5cdH1cclxuXHJcblx0c3RhdGljIGluaXRJbnB1dENvbnRyb2xzKGlucHV0KVxyXG5cdHtcclxuXHRcdGxldCBlbHMgPSB0aGlzLm5vcm1hbGl6ZUVsZW1lbnRzKGlucHV0KTtcclxuXHRcdGVscy5mb3JFYWNoKGZ1bmN0aW9uKGVsKXtcclxuXHRcdFx0bmV3IElucHV0Q29udHJvbChlbCk7XHJcblx0XHR9KTtcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBJbnB1dENvbnRyb2xcclxue1xyXG5cdGNvbnN0cnVjdG9yKGVsKVxyXG5cdHtcclxuXHRcdGVsLmlucHV0Q29udHJvbCA9IHRoaXM7XHJcblx0XHR0aGlzLmVsID0gZWw7XHJcblx0XHR0aGlzLmlucHV0ID0gdGhpcy5lbC5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpO1xyXG5cdFx0dGhpcy5sYWJlbCA9IHRoaXMuZWwucXVlcnlTZWxlY3RvcignbGFiZWwnKTtcclxuXHRcdHRoaXMudG9nZ2xlQ2FsbGJhY2sgPSAoKSA9PiB7fTtcclxuXHRcdHRoaXMuaW5pdCgpO1xyXG5cdH1cclxuXHJcblx0aW5pdCgpXHJcblx0e1xyXG5cdFx0dGhpcy50b2dnbGVDYWxsYmFjayA9IChlKSA9PiB7XHJcblx0XHRcdHRoaXMudG9nZ2xlKCk7XHJcblx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdH07XHJcblx0XHR0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy50b2dnbGVDYWxsYmFjayk7XHJcblx0XHR0aGlzLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoJywgdGhpcy50b2dnbGVDYWxsYmFjayk7XHJcblx0fVxyXG5cclxuXHRkZXN0cm95KClcclxuXHR7XHJcblx0XHR0aGlzLmVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy50b2dnbGVDYWxsYmFjayk7XHJcblx0XHR0aGlzLmVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoJywgdGhpcy50b2dnbGVDYWxsYmFjayk7XHJcblx0XHRkZWxldGUgdGhpcy5lbC5pbnB1dENvbnRyb2w7XHJcblx0fVxyXG5cclxuXHR0b2dnbGUoKVxyXG5cdHtcclxuXHRcdHRoaXMuaW5wdXQuY2hlY2tlZCA9ICF0aGlzLmlucHV0LmNoZWNrZWQ7XHJcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdH1cclxufSJdfQ==
