const system = {
  url: '/mock/login',
  method: 'post',
  response: () => {
    return {
      code: 20000,
      userInfo: {
        userName: 'wss',
        userId: '0522'
      },
      jwtToken: '666666',
    }
  },
}

const loginOut = {
  url: '/mock/loginOut',
  method: 'post',
  response: () => {
    return {
      code: 200,
      message: '成功',
    }
  },
}

export default [system, loginOut]
