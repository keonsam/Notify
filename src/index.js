import React from 'react'
import { render } from 'react-dom'
import App from './components/app.jsx'
import { createStore } from 'redux'
import reducer from './reducers/index'

const store = createStore(reducer, {editorState: ""}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

render (
  <App />,
  document.getElementById('root')
)
