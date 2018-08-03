'use strict';

module.exports = {
    getFloatIconConfig: function getFloatIconConfig() {
        return axios.post('/wdCmsAdmin/getFloatIconConfig/', {}, {
            withCredentials: true
        }).then(function (resp) {
            return resp.data.data;
        });
    },
    editFloatIconConfig: function editFloatIconConfig(params) {
        return axios.post('/wdCmsAdmin/editFloatIconConfig/', params, {
            withCredentials: true
        }).then(function (resp) {
            return resp.data.data;
        });
    },
    getRoundTableConfig: function getRoundTableConfig() {
        return axios.post('/wdCmsAdmin/getRoundTableConfig/', {}, {
            withCredentials: true
        }).then(function (resp) {
            return resp.data.data;
        });
    },
    editRoundTableConfig: function editRoundTableConfig(params) {
        return axios.post('/wdCmsAdmin/editRoundTableConfig/', params, {
            withCredentials: true
        }).then(function (resp) {
            return resp.data.data;
        });
    }
};
//# sourceMappingURL=activity.js.map