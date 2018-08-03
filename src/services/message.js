module.exports = {
    tempList(params) {
        return axios.post('wdTemplate/list/', params, {
            withCredentials: true
        }).then((resp) => {
            return resp.data.data;
        })
    },
    deleteTemp(id) {
        return axios.post('wdTemplate/delete/', {id}, {
            withCredentials: true
        }).then((resp) => {
            return resp.data.data
        })
    },
    msgList(params) {
        return axios.post('wdTemplate/msgList/', params, {
            withCredentials: true
        }).then((resp) => {
            return resp.data.data
        })
    },
    sendGroupTemplateMsg(params) {
        return axios.post('wdTemplate/sendGroupTemplateMsg/', params, {
            withCredentials: true
        }).then((resp) => {
            return resp.data.data
        })
    },
    reSendGroupTemplateMsg(templateMsgId){
        return axios.post('wdTemplate/reSendGroupTemplateMsg/', {templateMsgId}, {
            withCredentials: true
        }).then((resp) => {
            return resp.data.data
        })
    }

}