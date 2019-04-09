import wiki from '../plugins/wiki';
import mock from '../plugins/mock';


export default [
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
]