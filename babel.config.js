/*
 * @Description:
 * @Version: 0.1.0
 * @Author: AiDongYang
 * @Date: 2021-01-22 14:21:02
 * @LastEditors: AiDongYang
 * @LastEditTime: 2021-01-22 16:34:36
 */
module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  'plugins': [
    ['import', { 'libraryName': 'ant-design-vue', 'libraryDirectory': 'es', 'style': 'css' }] // `style: true` 会加载 less 文件
  ]
}
