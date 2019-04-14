import {
  Controller,
  Get,
  Post,
  Middleware
} from 'bitorjs-decorators';
import index from '../view/';
import menu from '../menu/';

@Controller('/operation')
@Middleware('login')
@Middleware(menu)
export default class {
  @Get('/')
  async index() {
    this.ctx.render(index)
  }

}