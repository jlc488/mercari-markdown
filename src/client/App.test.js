import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import { Provider } from 'mobx-react'
import WikiPresenter from './presenters/WikiPresenter'

test("renders App without crashing", () => {
  const div = document.createElement("div")

  ReactDOM.render(<Provider WikiPresenter={WikiPresenter}><App/></Provider>, div)
  ReactDOM.unmountComponentAtNode(div)
})


