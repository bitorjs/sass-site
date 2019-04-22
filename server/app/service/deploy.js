import Model from '../models';
const { ProjectDeploy, ProjectUser } = Model;


export default class {

  async getProjectUsers(params) {
    let one = await ProjectUser.findOne({
      where: {
        pro_id: params.id
      }
    })
    return one;
  }

  async setProjectUsers(params) {
    let users = params.users;
    let project = await ProjectUser.findOrCreate({
      where: {
        pro_id: params.id
      },
      defaults: {
        pro_id: params.id,
        user_ids: users.join(',')
      }
    })

    if (project[1] === false) {
      project[0].user_ids = users.join(',')
      project[0].save()
    }

    return project;
  }
}