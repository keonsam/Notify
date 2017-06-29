const reducer = (state, action) => {
  switch(action.type) {
    case "CHANGE_TEXT":
      console.log('redux action: ', action.type, /*action.text.getCurrentContent().getPlainText()*/);
      return {
        ...state,
        editorState: action.text
      }
    default:
      return state;
  }
}

export default reducer;
