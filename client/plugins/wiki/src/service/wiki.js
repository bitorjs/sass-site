export default class {
  async getDetail(params) {
    return this.ctx.$ajax.post('/wiki/detail', params);
  }

  async addType(params) {
    console.log("addType", params)
    return this.ctx.$ajax.post('/wiki/add/type', params);
  }

  async addArticle(params) {
    console.log("addArticle", params)
    return this.ctx.$ajax.post('/wiki/add/article', params);
  }

  async getTypeList(params) {
    return this.ctx.$ajax.post('/wiki/types', params);
  }

  async getList(params) {
    return this.ctx.$ajax.post('/wiki/list', params);
  }
}