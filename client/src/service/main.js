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

export const test = function () {
  console.log(this.$service)
  return 1;
}