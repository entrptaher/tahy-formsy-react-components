'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDraftWysiwyg = require('react-draft-wysiwyg');

var _draftJs = require('draft-js');

var _draftJsExportHtml = require('draft-js-export-html');

var _draftJsImportHtml = require('draft-js-import-html');

var _reactAutobind = require('react-autobind');

var _reactAutobind2 = _interopRequireDefault(_reactAutobind);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';


var Draft = function (_React$Component) {
  _inherits(Draft, _React$Component);

  function Draft() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Draft);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Draft.__proto__ || Object.getPrototypeOf(Draft)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      editorState: _draftJs.EditorState.createEmpty(),
      value: null
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Draft, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.setState({ value: this.props.value });
    }

    // componentWillReceiveProps(newProps) {
    //   if (newProps.value === this.props.value) {
    //     return false;
    //   }

    //   this.setState({value: this.props.value});
    //   if (newProps.value !== this.state.value) {
    //     const editorState = EditorState.createWithContent(
    //       stateFromHTML(newProps.value || ''),
    //     );
    //     this.setState({editorState});
    //   }
    // }

    // setValue() will set the value of the component, which in
    // turn will validate it and the rest of the form

  }, {
    key: 'onChange',
    value: function onChange() {
      var HTML = (0, _draftJsExportHtml.stateToHTML)(this.state.editorState.getCurrentContent());
      this.props.onChange(HTML);
    }
  }, {
    key: 'onBlur',
    value: function onBlur() {
      var HTML = (0, _draftJsExportHtml.stateToHTML)(this.state.editorState.getCurrentContent());
      this.props.onBlur(HTML);
    }
  }, {
    key: 'handleEditorStateChange',
    value: function handleEditorStateChange(editorState) {
      this.setState({ editorState: editorState });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_reactDraftWysiwyg.Editor, _extends({}, this.props, {
        editorState: this.state.editorState,
        onBlur: this.onBlur.bind(this),
        onChange: this.onChange.bind(this),
        onEditorStateChange: this.handleEditorStateChange.bind(this)
      }));
    }
  }]);

  return Draft;
}(_react2.default.Component);

exports.default = Draft;
// registerComponent("FormComponentTextarea", HOC(Draft));