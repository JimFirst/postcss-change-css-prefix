const postcss = require('postcss')
module.exports = postcss.plugin('postcss-change-css-prefix', function (opts = {}) {
  const { prefix = 'el-', replace = 'gt-' } = opts || {}
  
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
    		const reg = new RegExp(`(^|(\\s)*)\\.${prefix}(?!icon)`, 'g')
        clone.selector = selector.replace(reg, `$1.${replace}`)
        rule.replaceWith(clone)
      }
    })
  }

  return plugin
})
