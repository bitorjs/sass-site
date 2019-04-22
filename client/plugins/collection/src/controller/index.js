import {
  Controller,
  Get,
  Post,
  Middleware
} from 'bitorjs';
import index from '../view';
import menu from '../menu';

@Controller('/collection')
@Middleware('login')
@Middleware(menu)
export default class {
  @Get('/')
  async index() {
    this.ctx.render(index)
  }
}