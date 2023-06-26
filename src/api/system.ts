import axiosReq from 'axios'

//登录
export const loginReq = (subForm) => {
  return axiosReq({
    url: '/mock/login',
    params: subForm,
    method: 'post'
  })
}

//退出登录
export const loginOutReq = () => {
  return axiosReq({
    url: '/mock/loginOut',
    method: 'post'
  })
}