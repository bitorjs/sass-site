import {
  Controller,
  Get,
  Post,
  Middleware
} from 'bitorjs-decorators';
import index from '../view/';
import users from '../view/users';
import roles from '../view/roles';
import menus from '../view/menus';
import products from '../view/products';

@Controller('/system')
@Middleware('login')
export default class {
  @Get('/')
  async index() {
    this.ctx.render(index)
  }

  @Get('/products')
  async products() {
    this.ctx.render(products)
  }

  @Get('/menus')
  async menus() {
    this.ctx.render(menus)
  }

  @Get('/roles')
  async roles() {
    this.ctx.render(roles)
  }

  @Get('/users')
  async users() {
    this.ctx.render(users)
  }

}