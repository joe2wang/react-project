import React, { Component } from 'react'
import PropTypes from 'prop-types'
 import { useParams } from 'react-router-dom'

function ListDetail (){
  let {id,...res} = useParams()
  console.log(id,res, 'detail,666')
  return <div>详情</div>
}
ListDetail.propTypes = {}

export default ListDetail
