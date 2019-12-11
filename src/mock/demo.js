import Mock from 'mockjs'
Mock.mock('/getList','get',{
    'list|1-10': [{
        'id|+1': 1
    }] 
})