'use strict';

module.exports = {
    list: function list(params) {
        return axios.post('wdCmsAnswer/applyList/', params, {
            withCredentials: true
        }).then(function (resp) {
            return resp.data.data;
        });
    },
    detail: function detail(answerId) {
        return axios.post('wdCmsAnswer/detail/', { answerId: answerId }, {
            withCredentials: true
        }).then(function (resp) {
            return resp.data.data;
        });
    },
    audit: function audit(params) {
        console.log("audit para:", params);
        return axios.post('wdCmsAnswer/audit/', params, {
            withCredentials: true
        }).then(function (resp) {
            return resp.data.data;
        });
    },
    edit: function edit(params) {
        return axios.post('wdCmsAnswer/editAnswerer/', params, {
            withCredentials: true
        }).then(function (resp) {
            return resp.data.data;
        });
    },
    add: function add(params) {
        return axios.post('wdCmsAnswer/addAnswerer/', params, {
            withCredentials: true
        }).then(function (resp) {
            return resp.data.data;
        });
    },
    answerList: function answerList(params) {
        return axios.post('wdCmsAnswer/answererList/', params, {
            withCredentials: true
        }).then(function (resp) {
            return resp.data.data;
        });
    },

    //常用答主
    recentAnswerers: function recentAnswerers() {
        return axios.post('/wdCmsAnswer/recentAnswerers/', {}, {
            withCredentials: true
        }).then(function (resp) {
            return resp.data.data;
        });
    },
    answerDetail: function answerDetail(answerId) {
        debugger;
        return axios.post('/wdCmsAnswer/answerDetail/', { answerId: answerId }, {
            withCredentials: true
        }).then(function (resp) {
            return resp.data.data;
        });
    }
};
//# sourceMappingURL=answer.js.map