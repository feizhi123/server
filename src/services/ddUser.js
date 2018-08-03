module.exports = {
    list(params) {
        return axios.post('/ddCmsUser/authenticationList/', params, {
            withCredentials: true
        }).then((resp) => {
            return resp.data.data;
        })
    }
}