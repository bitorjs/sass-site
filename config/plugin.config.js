import ajax from '../plugins/ajax';
import wiki from '../plugins/wiki';
import mock from '../plugins/mock';
import cnpm from '../plugins/cnpm';
import postMan from '../plugins/post-man';
import system from '../plugins/system';
import collection from '../plugins/collection';


export default [
  {
    name: 'ajax',
    module: ajax,
    enable: true
  },
  {
    name: 'wiki',
    module: wiki,
    enable: true
  },
  {
    name: 'mock',
    module: mock,
    enable: true
  },
  {
    name: 'cnpm',
    module: cnpm,
    enable: true
  },
  {
    name: 'post-man',
    module: postMan,
    enable: true
  },
  {
    name: 'system',
    module: system,
    enable: true
  },
  {
    name: 'collection',
    module: collection,
    enable: true
  },
]