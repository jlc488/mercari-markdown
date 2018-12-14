import React from "react"
import { inject, observer } from 'mobx-react'
import ViewContainer from '../containers/ViewContainer'
import BaseComponent from '../components/BaseComponent'
import {withRouter } from 'react-router-dom'
import {Form, FormGroup, Label, Input, Button} from 'reactstrap'

@inject('WikiPresenter')
@withRouter
@observer
class Write extends BaseComponent {

  constructor(props) {
    super(props)

    this.state = {
      title: '',
      contents: '',
      redirectTo: ''
    }

    this.onSubmit = this.onSubmit.bind(this)
    this.onChange = this.onChange.bind(this)
  }

  onChange = (evt) => {
    evt.preventDefault()

    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  onSubmit = (event) => {
    event.preventDefault()
    try{
      console.log('onButtonClick')
      const {title, contents} = this.state
      this.props.WikiPresenter.wikiItemList.push({
        title,
        contents
      })

      console.log(this.state.title)
      console.log(this.state.contents)
      
      const wPresenter = this.props.WikiPresenter
      
      wPresenter.saveWikiItem({
        title: this.state.title,
        contents: this.state.contents
      })

      this.redirectTo('/list')

    }catch(err){
      console.log(err)
    }
  }

  render() {
    const content = (
      <div>
        <Form onSubmit={this.onSubmit}>
          <FormGroup>
            <Label for="mdText">Enter texts using MarkDown</Label>
            {' '}
            <Input type="text" name="title" id="titleId" placeholder="title (No markdown)" value={this.state.title} onChange={this.onChange} />
          </FormGroup>
          {' '}
          <FormGroup>
            <Input type="textarea" name="contents" id="contentsId" placeholder="Markdown allowed" value={this.state.contents} onChange={this.onChange} />
          </FormGroup>
          {' '}
          <Button style={{ marginTop: 20 }} >Save</Button>
        </Form>
      </div>

    )

    return <ViewContainer content={content}/>
  }
}

export default Write