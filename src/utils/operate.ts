/*
 * @description: 自定义 ts
 * @Author: Jay
 * @Date: 2022-06-08 13:22:07
 * @LastEditors: Jay
 * @LastEditTime: 2022-06-08 14:35:07
 */
// todo 使用新的代替 vuex 数据
// import store from "../store/index";

export default {
  //接口地址
  baseUrl: function () {
    // console.log(process.env.NODE_ENV)
    if (process.env.NODE_ENV == "development") {
      //开发环境
      return "development";
    } else {
      //正式环境
      return "production";
    }
  },

  //获取用户token
  isToken: function () {
    // if (store.state.Authorization != "") {
    //   return store.state.Authorization;
    // }
    return false;
  },

  /*
        格式化时间 加上时分秒
        num: 后台时间格式
        type: 'YY-MM-DD'年月日 ,'HH-MM-SS'时分秒 ,不传 年月日时分秒
    */
  happenTime: function (num: any, type: string) {
    const date = new Date(num * 1000);
    //时间戳为10位需*1000，时间戳为13位的话不需乘1000
    const y: any = date.getFullYear();
    let MM: any = date.getMonth() + 1;
    MM = MM < 10 ? "0" + MM : MM; //月补0
    let d: any = date.getDate();
    d = d < 10 ? "0" + d : d; //天补0
    let h: any = date.getHours();
    h = h < 10 ? "0" + h : h; //小时补0
    let m: any = date.getMinutes();
    m = m < 10 ? "0" + m : m; //分钟补0
    let s: any = date.getSeconds();
    s = s < 10 ? "0" + s : s; //秒补0
    if (type === "YY-MM-DD") {
      //年月日
      return y + "-" + MM + "-" + d;
    } else if (type === "HH-MM-SS") {
      //时分秒
      return h + ":" + m + ":" + s;
    } else {
      //全部
      return y + "-" + MM + "-" + d + " " + h + ":" + m + ":" + s;
    }
  },

  //性别
  formSex: function (set: string | number) {
    const status: any = {
      "0": "男",
      "1": "女",
    };
    let key: keyof any;
    for (key in status) {
      //console.log(key, status[key])
      if (key == set) {
        return status[key];
      }
    }
    return "未知";
  },
};
