export default class {
  async register(params) {
    console.log(params)
    return this.ctx.$ajax.post('/reg-user', params)
  }

  async login(params) {
    console.log(params)
    return this.ctx.$ajax.post('/login', params)
  }
} 