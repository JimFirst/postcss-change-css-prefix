const assert = require('assert')
const { replaceStr } = require('../src/utils')

describe('正则替换', () => {
  generateIt('.el-menu', '.gp-menu')
  generateIt('.el-menu .el-menu-item', '.gp-menu .gp-menu-item')
  generateIt('.el-form--label-top', '.gp-form--label-top')
  generateIt('carousel-arrow-left', 'carousel-arrow-left')
  generateIt('[class*=increase] [class*=el-col-]', '[class*=increase] [class*=gp-col-]')

  function generateIt(str, expect) {
    it(`替换${str}`, () => {
      assert.equal(replaceStr(str, 'el-', 'gp-'), expect)
    })
  }
})
