import React from "react"
import ViewContainer from '../containers/ViewContainer'
import BaseComponent from '../components/BaseComponent'

import ReactMde, { DraftUtil } from "react-mde"
import Showdown from 'showdown'

class Write extends BaseComponent {

  constructor(props) {
    super(props)

    this.state = {
      mdeState: null
    }

    this.converter = new Showdown.Converter({
      tables: true,
      simplifiedAutoLink: true
    })

    this.handleValueChange = this.handleValueChange.bind(this)
    this.generateMarkdownPreview = this.generateMarkdownPreview.bind(this)
    this.onButtonClick = this.onButtonClick.bind(this)
  }

  handleValueChange(mdeState){
    this.setState({mdeState})
  }

  generateMarkdownPreview = (markdown) => {
    return this.converter.makeHtml(markdown)
  }

  onButtonClick = async () => {
    const { mdeState } = this.state
    const newMdeState = await DraftUtil.buildNewMdeState(
      mdeState,
      this.generateMarkdownPreview,
      mdeState.markdown + " " + mdeState.markdown
    )
    this.setState({ mdeState: newMdeState })
  }

  render() {
    const content = (
      <div>
        <ReactMde
          onChange={this.handleValueChange}
          editorState={this.state.mdeState}
          generateMarkdownPreview={this.generateMarkdownPreview}
        />
        <button style={{ marginTop: 20 }} onClick={this.onButtonClick}>
          Save
        </button>
      </div>

    )

    return <ViewContainer content={content}/>
  }
}

export default Write