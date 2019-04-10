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
  @Middleware((ctx, next) => {
    if (true) {
      ctx.app.redirect('/home')
    } else {
      next()
    }
  })
  async login() {
    this.ctx.render(login, null)
  }
}