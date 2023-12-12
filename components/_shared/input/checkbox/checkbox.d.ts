export interface Checkbox {
  checked: {
    type: Boolean,
    default: false,
  },
  htmlId: {
    type: String,
    default: undefined,
  },
  label: {
    type: String,
    // required: true,
  },
  val: {
    type: [String, Number],
    // required: true,
  },
  value: {
    type: Array,
    // required: true,
  },
}
