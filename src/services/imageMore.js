module.exports = {
    getPictures() {
        return axios.post('/wdCmsAdmin/getPictures/', {}, {
            withCredentials: true
        }).then((resp) => {
            return resp.data.data;
        })
    },
    editPicture(type, imgUrl) {
        return axios.post('/wdCmsAdmin/editPicture/', {type, imgUrl}, {
            withCredentials: true
        }).then((resp) => {
            return resp.data.data;
        })
    },
}