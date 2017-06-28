import React from 'react'
import { render } from 'react-dom'
import App from './components/app.jsx'
import { createStore } from 'redux'

//const store = createStore
render (
  <App />,
  document.getElementById('root')
)
