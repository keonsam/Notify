import React from 'react'
import { Editor } from 'draft-js'
//just rerender this when clicking on note
const NoteComponent = ({ editorState, onSave }) => (
  <Editor
    editorState={editorState}
    onChange={onSave}
  />
)

export default NoteComponent
