import React, {  Fragment, useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import {  Table } from 'antd'
import { GET_LIST_ACTION } from '../../constant/action/namespace'
import { useHistory } from 'react-router-dom'

function ListComp (props) {
  useEffect(() => {
    props.dispatch({
      type: GET_LIST_ACTION
    })
  },[])
  const { visibilityFilter } = props
  let history = useHistory()

  const columns = [
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
      align: 'center'
    },
    {
      title: '年龄',
      dataIndex: 'age',
      key: 'age',
      align: 'center'
    },
    {
      title: '描述',
      dataIndex: 'desc',
      key: 'desc',
      align: 'center'
    }
  ]
  return (
    <Fragment>
      {/* <Button onClick={this.backHome.bind(this)}>返回首页</Button> */}
      <br />
      <Table
        columns={columns}
        onRow={record => {
          return {
            onClick: () => {
              history.push(`/list/${record.age}`)
            }
          }
        }}
        dataSource={visibilityFilter.listResult}
      />
    </Fragment>
  )
}
ListComp.propTypes = {}

export default connect(state => state)(ListComp)
