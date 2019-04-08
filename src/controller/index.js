import {
  Controller,
  Get,
  Post,
  Middleware
} from 'bitorjs-decorators';
import login from '../view/pages/login';
import a from '../view/pages/a';

@Controller('/')
export default class {

  @Get('/login')
  async login() {
    this.ctx.render(login, null)
  }

  @Get('/')
  @Middleware('login')
  async a() {
    console.log("a")
    this.ctx.render(a)
  }

}