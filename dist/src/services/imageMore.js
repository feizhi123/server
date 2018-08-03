'use strict';

module.exports = {
    getPictures: function getPictures() {
        return axios.post('/wdCmsAdmin/getPictures/', {}, {
            withCredentials: true
        }).then(function (resp) {
            return resp.data.data;
        });
    },
    editPicture: function editPicture(type, imgUrl) {
        return axios.post('/wdCmsAdmin/editPicture/', { type: type, imgUrl: imgUrl }, {
            withCredentials: true
        }).then(function (resp) {
            return resp.data.data;
        });
    }
};
//# sourceMappingURL=imageMore.js.map