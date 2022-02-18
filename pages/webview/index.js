Page({
  data: {
    webviewSrc: ''
  },
  onLoad: function() {
    this.setData({webviewSrc: 'https://www.xkool.ai/cad/planshare/ec02278c-38ce-40dd-abbb-cd46abb38323'})

    wx.login({
      timeout: 1000,
      success(res) {
        console.log('code:', res)
      }
    })
  }
})