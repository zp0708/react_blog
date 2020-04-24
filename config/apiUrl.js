const ipUrl = 'http://127.0.0.1:7001/default/'

let servicePath = {
  getArticleList: ipUrl + 'getArticleList',
  getArticleListById: ipUrl + 'getArticleListById/',
  getArticleById: ipUrl + 'getArticleById/',
  getTypeInfo: ipUrl + 'getTypeInfo',
}

export default servicePath;