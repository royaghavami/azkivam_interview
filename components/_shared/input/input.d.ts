export interface Input{
  hasIcon: {
    type: Boolean,
    default: false,
  },
  icon: {
    type: String,
    default: '',
  },
  value: {
    type: [String, Number],
    default: '',
  },
}
