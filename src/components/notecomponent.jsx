import React from 'react'
import { Editor } from 'draft-js'

const NoteComponent = ({ editorState, onSave }) => (
  <Editor
    editorState={editorState}
    onChange={onSave}
  />
)
export default NoteComponent
