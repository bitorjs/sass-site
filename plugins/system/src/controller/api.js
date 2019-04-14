import {
  Controller,
  Get,
  Post,
  Middleware
} from 'bitorjs-decorators';


@Controller('/system-api')
export default class {

  @Get('/users')
  @Middleware('login')
  async index(ctx, next) {
    console.log('...////', ctx, next)
    return await [
      {
        key: 1,
        name: "John Brown",
        age: 32,
        address: "New York No. 1 Lake Park",
        description:
          "My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park."
      },
      {
        key: 2,
        name: "Jim Green",
        age: 42,
        address: "London No. 1 Lake Park",
        description:
          "My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park."
      },
      {
        key: 3,
        name: "Joe Black",
        age: 32,
        address: "Sidney No. 1 Lake Park",
        description:
          "My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park."
      }
    ];
  }
}