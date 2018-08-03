'use strict';

module.exports = {
    tempList: function tempList(params) {
        return axios.post('wdTemplate/list/', params, {
            withCredentials: true
        }).then(function (resp) {
            return resp.data.data;
        });
    },
    deleteTemp: function deleteTemp(id) {
        return axios.post('wdTemplate/delete/', { id: id }, {
            withCredentials: true
        }).then(function (resp) {
            return resp.data.data;
        });
    },
    msgList: function msgList(params) {
        return axios.post('wdTemplate/msgList/', params, {
            withCredentials: true
        }).then(function (resp) {
            return resp.data.data;
        });
    },
    sendGroupTemplateMsg: function sendGroupTemplateMsg(params) {
        return axios.post('wdTemplate/sendGroupTemplateMsg/', params, {
            withCredentials: true
        }).then(function (resp) {
            return resp.data.data;
        });
    },
    reSendGroupTemplateMsg: function reSendGroupTemplateMsg(templateMsgId) {
        return axios.post('wdTemplate/reSendGroupTemplateMsg/', { templateMsgId: templateMsgId }, {
            withCredentials: true
        }).then(function (resp) {
            return resp.data.data;
        });
    }
};
//# sourceMappingURL=message.js.map