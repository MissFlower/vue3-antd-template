/*
 * @Description:
 * @Version: 0.1.0
 * @Author: AiDongYang
 * @Date: 2021-01-22 16:23:21
 * @LastEditors: AiDongYang
 * @LastEditTime: 2021-01-22 16:23:47
 */
import defaultSettings from '@/settings'

const title = defaultSettings.title || 'Vue3 Antd Template'
export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}
