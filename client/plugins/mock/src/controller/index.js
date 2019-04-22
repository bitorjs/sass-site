import {
  Controller,
  Get,
  Post,
  Middleware
} from 'bitorjs';
import index from '../view/';

@Controller('/mock')
export default class {
  @Get('/')
  @Middleware('login')
  async index() {
    this.ctx.render(index)
  }

}