import React from 'react';
import {Editor} from 'react-draft-wysiwyg';
import {EditorState, convertToRaw} from 'draft-js';
// import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import {stateToHTML} from 'draft-js-export-html';
import {stateFromHTML} from 'draft-js-import-html';
import autoBind from 'react-autobind';

class Draft extends React.Component {
  state = {
    editorState: EditorState.createEmpty(),
    value: null,
  };

  componentWillMount() {
    this.setState({value: this.props.value});
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
  onChange() {
    const HTML = stateToHTML(this.state.editorState.getCurrentContent());
    this.props.onChange(HTML);
  }

  onBlur() {
    const HTML = stateToHTML(this.state.editorState.getCurrentContent());
    this.props.onBlur(HTML);
  }

  handleEditorStateChange(editorState) {
    this.setState({editorState});
  }

  render() {
    return (
      <Editor
        {...this.props}
        editorState={this.state.editorState}
        onBlur={this.onBlur.bind(this)}
        onChange={this.onChange.bind(this)}
        onEditorStateChange={this.handleEditorStateChange.bind(this)}
      />
    );
  }
}

export default Draft;
// registerComponent("FormComponentTextarea", HOC(Draft));
