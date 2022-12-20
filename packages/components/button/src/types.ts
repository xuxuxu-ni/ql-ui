/**
 * Created by WebStorm.
 * User: NiRongxu
 * Date: 2022/11/21
 * Description: 文件描述
 */
export const ButtonType = ['primary', 'success', 'info', 'warning', 'danger']
export const ButtonSize = ['midium', 'small', 'mini']
export const buttonProps = {
  type: {
    type: String,
    validator(value: string) {
      return ButtonType.includes(value)
    }
  },
  plain: Boolean,
  round: Boolean,
  disabled: Boolean,
  text: Boolean,
  size: {
    type: String,
    validator(value: string) {
      return ButtonSize.includes(value)
    }
  },
} as const


