import { connect } from 'react-redux'
import NoteComponent from '../components/notecomponent.jsx'

const mapStateToProps = (state) => ({
  editorState: state.editorState
})

const mapDispatchToProps = (dispatch) => ({
  onSave: (text) => {
    dispatch({
      type: "CHANGE_TEXT",
      text
    })
  }
})

const NoteContainer = connect(mapStateToProps, mapDispatchToProps)(NoteComponent)

export default NoteContainer
