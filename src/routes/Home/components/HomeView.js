import React from 'react'
import DuckImage from '../assets/Duck.jpg'
import './HomeView.scss'
import ReactMarkdown from 'react-markdown'

class HomeView extends React.Component {
  state = {
    input: '```datacamp```',
    htmlMode: 'raw'
  }

  onMarkdownChange = (md) => this.setState({ input: md.target.value });

  onMarkdownChangeSubmit = (e) => {
    e.preventDefault()
  }

  onControlsChange = (mode) => this.setState({ htmlMode: mode  });

  render(){
    return (
      <div>
      <form onSubmit={this.onMarkdownChangeSubmit}
        style={{
          borderWidth:1}}>
        <input
          style={{ flex:0.5,
            float:'left',
            height: 500,
            borderColor: 'black', }}
          onChange={this.onMarkdownChange}
          value={this.state.input}>
        </input>
        <ReactMarkdown
          style={{ flex:0.5,
            borderWidth: 1,
            float: 'right',
            height: 500,
            borderColor: 'black',
            flexDirection: 'row',
            justifyContent:'center' }}
          onChange={this.onControlsChange}
          mode={this.state.htmlMode}
          source={this.state.input}
        />
      </form>
      <button onClick={this.onMarkdownChangeSubmit}>
        submit
      </button>
  </div>
    )
  }
}

export default HomeView
