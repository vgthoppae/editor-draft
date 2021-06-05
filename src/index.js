import React from 'react';
import ReactDOM from 'react-dom';
import {Editor, EditorState, RichUtils, convertToRaw, convertFromRaw} from 'draft-js';
import 'draft-js/dist/Draft.css';
import RichTextEditor from './richtexteditor';

export default function MyEditor() {
  const [rawContent, setRawContent] = React.useState();

  const onCheck = () => {
    alert(rawContent?rawContent.blocks[0].text:'nothing');
  }
  return (
    <div>
      <button onClick={onCheck}>
        Hello
      </button>
      <RichTextEditor rawContent= {rawContent} setRawContent={setRawContent}/>
    </div>
    
  );
}

ReactDOM.render(<MyEditor />, document.getElementById('root'));