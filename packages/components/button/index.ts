/**
 * Created by WebStorm.
 * User: NiRongxu
 * Date: 2022/11/22
 * Description: 文件描述
 */
import Button from './src/button.vue'
import { withInstall } from '@ql-ui/utils/withInstall'
import {ExtractPropTypes} from 'vue'
import {buttonProps} from './src/types'
export type {buttonProps} from './src/types'

export const QlButton = withInstall(Button) // 生成带有 install 方法的组件

export default QlButton
// 导出组件 props 的类型
export type ButtonProps = ExtractPropTypes<typeof buttonProps>
