const reducer = (state, action) => {
  switch(action.type) {
    case "CHANGE_TEXT":
      return {
        ...state,
        editorState: action.text
      }
    default:
      return state;
  }
}

export default reducer;
