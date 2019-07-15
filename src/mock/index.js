const Mock = require('mockjs');
//格式： Mock.mock( url, post/get , 返回的数据)；
Mock.mock(
    '/test',
    'get',
    {
        "result": "success",
        "data": {
            "userSn": "3785521",
            "username": "不求甚解",
            "age": 25,
            "imgUrl": "https://avatar.csdn.net/8/5/D/3_bocongbo.jpg"
        },
        "msg": ""
    }
);

