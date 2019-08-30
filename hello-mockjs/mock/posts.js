const data = require('./posts.json');

// const data = [
//   {
//     "account": "admin",
//     "roles": [
//       "admin"
//     ],
//     "password": "admin"
//   },
//   {
//     "account": "guest",
//     "roles": [
//       "guest"
//     ],
//     "password": "guest"
//   },
//   {
//     "account": "pm",
//     "roles": [
//       "pm"
//     ],
//     "password": "pm"
//   },
//   {
//     "account": "ui",
//     "roles": [
//       "ui"
//     ],
//     "password": "ui"
//   },
//   {
//     "account": "dev",
//     "roles": [
//       "dev"
//     ],
//     "password": "dev"
//   },
//   {
//     "account": "qa",
//     "roles": [
//       "qa"
//     ],
//     "password": "qa"
//   },
//   {
//     "account": "bowen",
//     "roles": [
//       "dev",
//       "ui"
//     ],
//     "password": "bowen"
//   }
// ]
const Mock = require('mockjs')

module.exports = {
    'GET /api/posts': (req, res) => { res.status(200).json({ users: Mock.mock({
        // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
          'list|1-10': [{
            'id|+1': 1,
            "name": "@last",
            "nickName": "@string",
            "isMale": "@boolean",
            "birthday":"@date('yyyy-MM-dd')",
            "avantar":"@image('100x100', @color, @color, @string)", 
            "province":"@province",
        }]
      }) }) },
  
    // Method like GET or POST can be omitted
    '/api/users/1': { id: 1 },
  
    // Support for custom functions, the API is the same as express@4
    'POST /api/users/create': (req, res) => { res.end('OK rails365'); },
  }