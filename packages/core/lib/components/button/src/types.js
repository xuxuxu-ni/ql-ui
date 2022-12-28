"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
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
exports.ButtonSize = ButtonSize;
exports.ButtonType = ButtonType;
exports.buttonProps = buttonProps;
