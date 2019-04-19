export default class {
  async add(params) {
    return this.ctx.$ajax.post('/collection/add', params);
  }

  async list(params) {
    return this.ctx.$ajax.post('/collection/list', params);
  }
}