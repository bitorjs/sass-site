import {
  Controller,
  Get,
  Post,
  Middleware
} from 'bitorjs';

import login from '../view/pages/login';

@Controller('/')
export default class {

  @Get('/login')
  async login() {
    sessionStorage.clear();
    this.ctx.render(login, null)
  }

  @Post('/login')
  async login_post(ctx) {
    return ctx.$service.main.login({
      username: ctx.request.body.username,
      password: ctx.request.body.password
    })
  }

  @Post('/regist')
  async register_post(ctx) {
    return ctx.$service.main.register({
      username: ctx.request.body.username,
      password: ctx.request.body.password,
    })
  }
}