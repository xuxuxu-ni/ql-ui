/**
 * Created by WebStorm.
 * User: NiRongxu
 * Date: 2022/11/22
 * Description: 文件描述
 */
import Link from './src/link.vue'
import { withInstall } from '@ql-ui/utils/withInstall'
import {ExtractPropTypes} from 'vue'
import {linkProps} from './src/types'
export type {linkProps} from './src/types'

export const QlLink = withInstall(Link) // 生成带有 install 方法的组件

export default QlLink
// 导出组件 props 的类型
export type LinkProps = ExtractPropTypes<typeof linkProps>
