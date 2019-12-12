import Mock from 'mockjs'
import {HOST_NAME} from '../api'

Mock.mock(`${HOST_NAME}/get/list`,'get',{
    'list|1-30': [{
        'key|+1': 1,
        'name|+1':'@name',
        'age|+1':11,
        'desc|+1':'@sentence(1, 3)'
    }] 
})

