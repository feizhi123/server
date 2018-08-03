module.exports = {
    list(params) {
        return axios.post('wdCmsAnswer/applyList/', params, {
            withCredentials: true
        }).then((resp) => {
            return resp.data.data;
        })
    },
    detail(answerId) {
        return axios.post('wdCmsAnswer/detail/', {answerId}, {
            withCredentials: true
        }).then((resp) => {
            return resp.data.data
        })
    },
    audit(params) {
        console.log("audit para:", params)
        return axios.post('wdCmsAnswer/audit/', params, {
            withCredentials: true
        }).then((resp) => {
            return resp.data.data
        })
    }, edit(params) {
        return axios.post('wdCmsAnswer/editAnswerer/', params, {
            withCredentials: true
        }).then((resp) => {
            return resp.data.data
        })
    },
    add(params) {
        return axios.post('wdCmsAnswer/addAnswerer/', params, {
            withCredentials: true
        }).then((resp) => {
            return resp.data.data
        })
    },
    answerList(params) {
        return axios.post('wdCmsAnswer/answererList/', params, {
            withCredentials: true
        }).then((resp) => {
            return resp.data.data
        })
    },
    //常用答主
    recentAnswerers() {
        return axios.post('/wdCmsAnswer/recentAnswerers/', {}, {
            withCredentials: true
        }).then((resp) => {
            return resp.data.data;
        })
    },
    answerDetail(answerId) {
        debugger
        return axios.post('/wdCmsAnswer/answerDetail/', {answerId}, {
            withCredentials: true
        }).then((resp) => {
            return resp.data.data
        })
    },
}