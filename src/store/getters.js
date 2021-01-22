/*
 * @Description:
 * @Version: 0.1.0
 * @Author: AiDongYang
 * @Date: 2021-01-22 15:30:24
 * @LastEditors: AiDongYang
 * @LastEditTime: 2021-01-22 17:17:43
 */
const getters = {
  sideBar: state => state.app.sideBar,
  permission_routes: state => state.permission.routes
}

export default getters
