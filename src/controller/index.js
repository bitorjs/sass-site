import {
  Controller,
  Get,
  Post,
  Middleware
} from 'bitorjs-decorators';
import login from '../view/pages/login';
import home from '../view/pages/home';
import wiki from '../view/pages/wiki';

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

  @Get('/home')
  @Middleware('login')
  async Index() {
    this.ctx.render(home)
  }

  @Get('/wiki')
  @Middleware('login')
  async markdown() {
    this.ctx.render(wiki)
  }

}