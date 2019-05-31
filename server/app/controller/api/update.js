import {
  Controller,
  Get,
  Post,
  Put,
  Middleware
} from 'bitorjs';


@Controller('/update')
export default class {
  @Get('/latest')
  async update(ctx) {
    return ctx.body = {
      url: `https://github.com/electron-userland/electron-builder-binaries/releases/download/nsis-resources-3.3.0/nsis-resources-3.3.0.7z`
    }
  }

  @Post('/latest')
  async xxx(ctx) {
    return ctx.body = {
      url: `https://github.com/electron-userland/electron-builder-binaries/releases/download/nsis-resources-3.3.0/nsis-resources-3.3.0.7z`
    }
  }
}