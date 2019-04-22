import {
  Controller,
  Get,
  Post,
  Middleware
} from 'bitorjs';

import layout from '../view/layout';
@Controller('/cnpm')
export default class {
  @Get('/')
  @Middleware('login')
  async index() {
    this.ctx.render(layout, {
      view: 'index'
    })
  }

  @Get('/search')
  async search(a, b, c) {
    this.ctx.render(layout, {
      view: 'search',
      data: this.ctx.$store.state.ttt.data
    })
  }

  @Get('/package')
  async package(a, b, c) {
    this.ctx.render(layout, {
      view: 'package',
      data: this.ctx.$store.state.ttt.data
    })
  }

}