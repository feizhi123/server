'use strict';

module.exports = {
    list: function list(params) {
        return axios.post('/ddCmsUser/authenticationList/', params, {
            withCredentials: true
        }).then(function (resp) {
            return resp.data.data;
        });
    }
};
//# sourceMappingURL=ddUser.js.map