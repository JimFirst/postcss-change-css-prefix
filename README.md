# postcss-change-css-prefix
a postcss plugin to change element-ui prefix

### 快速上手

```
npm i postcss-change-css-prefix -D


<!-- postcss.config.js -->
const addCssPrefix = require('postcss-change-css-prefix')

module.exports = {
  plugins: [
    addCssPrefix({
      prefix: 'el-',
      replace: 'gp-',
    }),
  ],
}

```

### options

1. prefix
    * type: string, 可选
    * 需要被替换的前缀
    * default: el-

2. replace
    * type: string, 可选
    * 需要替换的前缀
    * default: gt-