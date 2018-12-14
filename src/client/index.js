import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import { Provider } from 'mobx-react'
import WikiPresenter from './presenters/WikiPresenter'

import 'highlight.js/styles/github.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import "./app.css"


ReactDOM.render(<Provider WikiPresenter={WikiPresenter}><App/></Provider>, document.getElementById("root"))
