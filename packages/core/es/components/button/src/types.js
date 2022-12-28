const ButtonType = ["primary", "success", "info", "warning", "danger"];
const ButtonSize = ["midium", "small", "mini"];
const buttonProps = {
  type: {
    type: String,
    validator(value) {
      return ButtonType.includes(value);
    }
  },
  plain: Boolean,
  round: Boolean,
  disabled: Boolean,
  text: Boolean,
  size: {
    type: String,
    validator(value) {
      return ButtonSize.includes(value);
    }
  }
};
export {
  ButtonSize,
  ButtonType,
  buttonProps
};
