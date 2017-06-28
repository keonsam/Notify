import React from 'react'

const NoteComponent = ({dispatch}) => (
  <div>
    <button onClick={dispatch}>Save</button>
    <textarea rows="20"></textarea>
  </div>
)
export default NoteComponent
