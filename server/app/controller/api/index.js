import {
  Controller,
  Get,
  Post,
  Put,
  Middleware
} from 'bitorjs-decorators';

@Controller('/')
export default class {

  @Get('/')
  async index(ctx, next) {

  }
}