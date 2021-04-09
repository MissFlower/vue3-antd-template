/*
 * @Description:
 * @Version: 0.1.0
 * @Author: AiDongYang
 * @Date: 2021-01-22 15:30:24
 * @LastEditors: AiDongYang
 * @LastEditTime: 2021-01-26 17:33:42
 */
const getters = {
  sidebar: state => state.app.sidebar,
  permission_routes: state => state.permission.routes
}

export default getters
