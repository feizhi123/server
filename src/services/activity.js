module.exports = {
    getFloatIconConfig() {
        return axios.post('/wdCmsAdmin/getFloatIconConfig/', {}, {
            withCredentials: true
        }).then(resp => {
            return resp.data.data;
        })
    },
    editFloatIconConfig(params) {
        return axios.post('/wdCmsAdmin/editFloatIconConfig/', params, {
            withCredentials: true
    }).then(resp => {
            return resp.data.data;
        })
    },
    getRoundTableConfig() {
        return axios.post('/wdCmsAdmin/getRoundTableConfig/', {}, {
            withCredentials: true
    }).then(resp => {
            return resp.data.data;
        })
    },
    editRoundTableConfig(params) {
        return axios.post('/wdCmsAdmin/editRoundTableConfig/', params, {
            withCredentials: true
        }).then(resp => {
            return resp.data.data;
        })
    }
};