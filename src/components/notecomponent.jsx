import React from 'react'
import {Editor} from 'draft-js'

const NoteComponent = ({dispatch, editorState}) => (
  <div>
    <Editor EditorState={editorState} onChange={dispatch}/>
  </div>
)
export default NoteComponent
