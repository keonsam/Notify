import { connect } from 'react-redux'
import NoteComponent from '../components/notecomponent.jsx'
import {EditorState} from 'draft-js'
const mapStateToProps = (state) => {
  if(state.editorState == "") {
    return {
      editorState: EditorState.createEmpty()
    }
  }
  return {
    editorState: state.editorState
  }
}

const mapDispatchToProps = (dispatch) => ({
  dispatch: (text) => {
    dispatch({type: "CHANGE_TEXT", text: text})
  }
})

const NoteContainer = connect(mapStateToProps, mapDispatchToProps)(NoteComponent)

export default NoteContainer
