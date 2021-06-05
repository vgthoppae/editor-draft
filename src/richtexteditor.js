import React from 'react';
import {Editor, EditorState, RichUtils, convertToRaw, convertFromRaw} from 'draft-js';
import 'draft-js/dist/Draft.css';

const RichTextEditor = ({rawContent, setRawContent}) => {
  const [editorState, setEditorState] = React.useState(() =>
    EditorState.createEmpty()
  );

  const editor = React.useRef(null);
  function focusEditor() {
    editor.current.focus();
  }

  const handleKeyCommand = (command) => {
    const newState = RichUtils.handleKeyCommand(editorState, command)
    let content = convertToRaw(editorState.getCurrentContent())
    setRawContent(content);
    if (newState) {
        setEditorState(newState);
        return 'handled';
    }
    return 'not-handled';
  }

  const onItalicClick = () => {
    // setEditorState(RichUtils.toggleInlineStyle(editorState, 'italic'))
    let content = convertToRaw(editorState.getCurrentContent())
    handleKeyCommand("italic")
  }

  return (
    <div
      style={{ border: "0.4rem ridge #f8f5f1", minHeight: "6em", cursor: "text" }}
      onClick={focusEditor}
    >
      {/* <button onClick={onItalicClick}>
        <em>I</em>
      </button> */}
      <Editor
        ref={editor}
        editorState={editorState}
        onChange={setEditorState}
        handleKeyCommand={handleKeyCommand}
        placeholder="Write something!"
      />
    </div>
  );
}

export default RichTextEditor;