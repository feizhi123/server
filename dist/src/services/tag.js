'use strict';

module.exports = {
    list: function list(params) {
        return axios.post('/wdCmsTag/list/', params, {
            withCredentials: true
        }).then(function (resp) {
            return resp.data.data;
        });
    },
    createTag: function createTag(name, iconUrl) {
        return axios.post('/wdCmsTag/createTag/', { name: name, iconUrl: iconUrl }, {
            withCredentials: true
        }).then(function (resp) {
            return resp.data.data;
        });
    },
    move: function move(tagId, step) {
        return axios.post('/wdCmsTag/move/', { tagId: tagId, step: step }, {
            withCredentials: true
        }).then(function (resp) {
            return resp.data.data;
        });
    },
    remove: function remove(tagId) {
        return axios.post('/wdCmsTag/delete/', { tagId: tagId }, {
            withCredentials: true
        }).then(function (resp) {
            return resp.data.data;
        });
    },
    editTag: function editTag(params) {
        return axios.post('/wdCmsTag/editTag/', params, {
            withCredentials: true
        }).then(function (resp) {
            return resp.data.data;
        });
    },
    detail: function detail(tagId) {
        return axios.post('/wdCmsTag/detail/', { tagId: tagId }, {
            withCredentials: true
        }).then(function (resp) {
            return resp.data.data;
        });
    }
};
//# sourceMappingURL=tag.js.map