import React from "react"
import { inject, observer } from 'mobx-react'
import ViewContainer from "../containers/ViewContainer"
import BaseComponent from '../components/BaseComponent'
import Markdown from 'react-markdown'
import breaks from 'remark-breaks'
import CodeBlock from '../../utils/code-block'
import {withRouter} from 'react-router-dom'
import {Button} from 'reactstrap'


@inject('WikiPresenter')
@withRouter
@observer
class Read extends BaseComponent {
  constructor(props) {
    super(props)
    
    const id = this.props.location.pathname.split('/read/')

    this.cId = id[1]

    this.wItem = {}
    
    this.props.WikiPresenter.loadWikiItem(id[1])

    this.onClick = this.onClick.bind(this)
  }
  
  componentWillReact() {
    console.log("Read page will re-render")
  }

  componentDidMount() {
    this.wItem = this.props.WikiPresenter.wikiItem
  }
  
  onClick(event) {
    event.preventDefault()
    this.props.history.push(`/edit/${this.cId}`)
  }

  render() {
    this.wItem = this.props.WikiPresenter.wikiItem

    const content =  (
      <section>
        <article className="result" ><p>{this.wItem?.title}</p></article>
        {' '}
        <div className="result-pane">
        <Markdown
          className="cfe-markdown"
          source={this.wItem?.contents}
          plugins={[breaks]}
          renderers={{code: CodeBlock}}
          />
        </div>
        <div>
        <Button style={{ marginTop: 20 }} onClick={this.onClick}>Modify</Button>
        </div>
      </section>
    )

    return <ViewContainer content={content} />
  }
}

export default Read
