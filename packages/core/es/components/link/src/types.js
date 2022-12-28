const LinkType = ["primary", "success", "info", "warning", "danger"];
const linkProps = {
  type: {
    type: String,
    validator(value) {
      return LinkType.includes(value);
    }
  },
  href: String || null,
  underline: Boolean,
  disabled: Boolean
};
export {
  LinkType,
  linkProps
};
