// 封装一个本地储存方法 当有一个或多个储存对象时 使其更简洁 易用 
export function util_SetStroage(obj) {
    Object.keys(obj).forEach(key => {
      const keys = key
      const value = obj[key]
      wx.setStorageSync(keys, value)
    })
  } 