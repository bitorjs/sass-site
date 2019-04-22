import {
  Controller,
  Get,
  Post,
  Middleware
} from 'bitorjs';
import menu from '../menu/';

import index from '../view/';
import gitlab from '../view/gitlab';

@Controller('/operation')
@Middleware('login')
@Middleware(menu)
export default class {
  @Get('/')
  async index() {
    this.ctx.render(index)
  }

  @Get('/gitlab')
  async gitlab() {
    this.ctx.render(gitlab)
  }

}