import React from 'react'
import { render } from 'react-dom'
import App from './components/app.jsx'
import { createStore } from 'redux'
import reducer from './reducers/index'
import { Provider } from 'react-redux'
import { EditorState } from 'draft-js'


const store = createStore(reducer, {editorState: EditorState.createEmpty()}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

render (
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
