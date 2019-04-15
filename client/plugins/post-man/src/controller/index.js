import {
  Controller,
  Get,
  Post,
  Middleware
} from 'bitorjs-decorators';
import index from '../view/';

@Controller('/post-man')
export default class {
  @Get('/')
  @Middleware('login')
  async index() {
    this.ctx.render(index)
  }

}