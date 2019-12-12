import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Button, Table } from 'antd'
import { GET_LIST_ACTION } from '../../constant/action/namespace'

class ListComp extends Component {
  backHome () {
    console.log(this.props)
    this.props.history.push({ pathname: '/home' })
  }
  getList () {
   
  }
  componentDidMount(){
    this.props.dispatch({
      type: GET_LIST_ACTION
    })
  }
  render () {
    const { visibilityFilter } = this.props
    const columns = [
      {
        title: '姓名',
        dataIndex: 'name',
        key: 'name',
        align:"center"
      },
      {
        title: '年龄',
        dataIndex: 'age',
        key: 'age',
        align:"center"
      },
      {
        title: '描述',
        dataIndex: 'desc',
        key: 'desc',
        align:"center"
      },
    ];
    return (
      <Fragment>
        {/* <Button onClick={this.backHome.bind(this)}>返回首页</Button> */}
        <br/>
        <Table columns={columns} dataSource={visibilityFilter.listResult}/>
      </Fragment>
    )
  }
}

ListComp.propTypes = {}

export default connect(state => state)(ListComp)
