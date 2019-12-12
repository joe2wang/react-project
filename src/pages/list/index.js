import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Button } from 'antd'

class ListComp extends Component {
  backHome () {
    console.log(this.props)
    this.props.history.push({ pathname: '/home' })
  }
  render () {
    console.log(this.props,'list')
    return (
      <Fragment>
        <Button onClick={this.backHome.bind(this)}>返回首页</Button>
      </Fragment>
    )
  }
}

ListComp.propTypes = {}

export default connect(state => state)(ListComp)
