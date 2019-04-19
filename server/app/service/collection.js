import Model from '../models';
const { Collection, Users } = Model;

export default class {

  async add(params, payload) {
    let login_name = payload.name;

    let user = await Users.findOne({
      where: {
        login_name
      }
    });

    return await Collection.findOrCreate({
      where: {
        url: params.url
      },
      defaults: {
        title: params.title,
        url: params.url,
        u_id: user.id
      }
    })
  }

  async list(payload) {
    let login_name = payload.name;

    let user = await Users.findOne({
      where: {
        login_name
      }
    });

    return Collection.findAll({
      where: {
        u_id: user.id
      }
    });
  }
}