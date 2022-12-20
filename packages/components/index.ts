/**
 * Created by WebStorm.
 * User: NiRongxu
 * Date: 2022/12/1
 * Description: 文件描述
 */
import {mainInstall} from '@ql-ui/utils/withInstall'
import {version} from './package.json'
import QlButton from '@ql-ui/components/button'
import '@ql-ui/theme-chalk/src/index.scss'


const components = [
  QlButton
]
const install = mainInstall(components)
export default {
  version,
  install
}
