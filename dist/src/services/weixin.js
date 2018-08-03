'use strict';

module.exports = {
  getSignature: function getSignature() {
    var url = location.href;
    console.log('url:' + url);
    return axios.post('ddUser/getShareSignature/', { url: url }, {
      withCredentials: true
    }).then(function (resp) {
      console.log(resp);
      return resp.data.data;
    });
  }
};
//# sourceMappingURL=weixin.js.map