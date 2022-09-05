let reg
function replaceStr(str, prefix, replace) {
  if (!reg) {
    reg = new RegExp(`(^|(\\s)+|\\.|=)${prefix}(?!icon)`, 'g')
  }
  return str.replace(reg, `$1${replace}`)
}

exports.replaceStr = replaceStr