const postcss = require('postcss')
const { replaceStr } = require('../src/utils')

module.exports = postcss.plugin('postcss-change-css-prefix', function (opts = {}) {
  const { prefix = 'el-', replace = 'gp-' } = opts || {}
  
  // 接收两个参数，第一个是每个css文件的ast，第二个参数中可获取转换结果相关信息(包括当前css文件相关信息)
  function plugin(css, result) {
    css.walkRules((rule) => {
      // 遍历当前ast所有rule节点
      const { selector } = rule
      if (
        selector.includes(prefix) &&
        !selector.includes(replace)
      ) {
        const clone = rule.clone()
        clone.selector = replaceStr(selector, prefix, replace)
        rule.replaceWith(clone)
      }
    })
  }

  return plugin
})
