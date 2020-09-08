export function onChange(name, value) {
 return {
    type: "CHANGE_TEMPORARY",
    fieldName: name,
    value: value,
  };
}
