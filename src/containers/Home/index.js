import React from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { changeInput } from '../../modules/input'
import ReactMarkdown from 'react-markdown'
import './style.css'

class Home  extends React.Component{

  onMarkdownChange = (md) => {
    return this.props.changeInput(this.refs.pathInput.value);
  }

  render(){
    return(
      <form
        className={'container'}
        onSubmit={this.onMarkdownChangeSubmit}>
        <div className={'form'} >
          <textArea
            cols={50}
            rows={25}
            className={'input'}
            value={this.props.input}
            onChange={this.onMarkdownChange}
            placeholder={'Your text goes here'}
            ref={'pathInput'} />
          <ReactMarkdown
            className={'output'}
            mode={this.props.htmlMode}
            source={this.props.input}
          />
        </div>
      </form>
    )
  }
}

const mapStateToProps = state => ({
  htmlMode: state.input.htmlMode,
  input: state.input.input
})

const mapDispatchToProps = dispatch => bindActionCreators({
  changeInput,
  changePage: () => push('/about-us')
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
