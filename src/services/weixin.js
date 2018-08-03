module.exports = {
  getSignature() {
    let url = location.href;
    console.log('url:'+url)
    return axios.post('ddUser/getShareSignature/', { url }, {
      withCredentials: true
    })
      .then((resp) => {
        console.log(resp);
        return resp.data.data;
      });
  }
}