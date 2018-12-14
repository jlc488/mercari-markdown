import React from 'react'
import PropTypes from 'prop-types'
import hljs from 'highlight.js/lib/highlight'


class CodeBlock extends React.PureComponent {
  constructor(props) {
    super(props)
    this.setRef = this.setRef.bind(this)
  }

  setRef(el) {
    this.codeEl = el
  }

  componentDidMount() {
    this.highlightCode()
  }

  componentDidUpdate() {
    this.highlightCode()
  }

  highlightCode() {
    hljs.highlightBlock(this.codeEl)
  }

  render() {
    return (
      <pre>
        <code ref={this.setRef} className="markdown">
          {this.props.value}
        </code>
      </pre>
    )
  }
}


CodeBlock.propTypes = {
  value: PropTypes.string.isRequired
}

export default CodeBlock