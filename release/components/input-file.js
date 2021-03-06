'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _componentCommon = require('./component-common');

var _componentCommon2 = _interopRequireDefault(_componentCommon);

var _errorMessages = require('./error-messages');

var _errorMessages2 = _interopRequireDefault(_errorMessages);

var _help = require('./help');

var _help2 = _interopRequireDefault(_help);

var _row = require('./row');

var _row2 = _interopRequireDefault(_row);

var _icon = require('./icon');

var _icon2 = _interopRequireDefault(_icon);

var _inputFile = require('./controls/input-file');

var _inputFile2 = _interopRequireDefault(_inputFile);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var File = function (_Component) {
  _inherits(File, _Component);

  function File() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, File);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = File.__proto__ || Object.getPrototypeOf(File)).call.apply(_ref, [this].concat(args))), _this), _this.handleChange = function (event) {
      var target = event.currentTarget;
      var value = target.value;

      _this.props.onSetValue(target.files);

      // We're passing an additional argument to the onChange handler here,
      // the 'value' of the field. This value is actually pretty useless,
      // and we're only including here for completeness.
      // An example value would be: "C:\fakepath\name-of-file.txt". Note that
      // if we select multiple files, it only returns a "fakepath" string for
      // the first file.
      // A web search for "C:\fakepath\" gives more details.
      _this.props.onChange(_this.props.name, target.files, value);
    }, _this.initElementRef = function (control) {
      _this.element = control ? control.element : null;
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(File, [{
    key: 'render',
    value: function render() {
      var inputProps = Object.assign({}, this.props);
      Object.keys(_componentCommon2.default.propTypes).forEach(function (key) {
        delete inputProps[key];
      });

      var control = _react2.default.createElement(_inputFile2.default, _extends({}, inputProps, {
        onChange: this.handleChange,
        ref: this.initElementRef
      }));

      if (this.props.layout === 'elementOnly') {
        return control;
      }

      return _react2.default.createElement(
        _row2.default,
        _extends({}, this.props, { htmlFor: this.props.id }),
        control,
        this.props.showErrors ? _react2.default.createElement(_icon2.default, { symbol: 'remove', className: 'form-control-feedback' }) : null,
        this.props.help ? _react2.default.createElement(_help2.default, { help: this.props.help }) : null,
        this.props.showErrors ? _react2.default.createElement(_errorMessages2.default, { messages: this.props.errorMessages }) : null
      );
    }
  }]);

  return File;
}(_react.Component);

File.propTypes = _extends({}, _inputFile2.default.propTypes, _componentCommon2.default.propTypes);

File.defaultProps = _extends({}, _componentCommon2.default.defaultProps);

exports.default = File;