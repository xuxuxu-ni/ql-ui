/**
 * Created by WebStorm.
 * User: NiRongxu
 * Date: 2022/11/21
 * Description: 文件描述
 */
export const LinkType = ['primary', 'success', 'info', 'warning', 'danger']

export const linkProps = {
  type: {
    type: String,
    validator(value: string) {
      return LinkType.includes(value)
    }
  },
  href: String || null,
  underline: Boolean,
  disabled: Boolean,
} as const


