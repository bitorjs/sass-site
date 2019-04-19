import {
  Controller,
  Get,
  Post,
  Middleware
} from 'bitorjs-decorators';

import login from '../view/pages/login';

@Controller('/')
export default class {

  @Get('/login')
  async login() {
    console.log("...///")
    this.ctx.render(login, null)
  }

  @Post('/login')
  async login_post(ctx) {
    return ctx.$service.main.login({
      username: ctx.body.username,
      password: ctx.body.password
    })
  }

  @Post('/regist')
  async register_post(ctx) {
    return ctx.$service.main.register({
      username: ctx.body.username,
      password: ctx.body.password,
    })
  }
}