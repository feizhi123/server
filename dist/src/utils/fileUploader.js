'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var uploadUrl = '/image/upload/';
var compressUpload = '/image/compressUpload/';

exports.default = {
    normal: function normal(file) {
        var formData = new FormData();
        formData.append('file', file);
        return axios.post(uploadUrl, formData, {
            headers: {
                'Content-type': 'multipart/form-data'
            },
            withCredentials: true
        }).then(function (resp) {
            console.log("file resp", resp);
            return resp.data.data;
        });
    },
    compress: function compress(file) {
        var formData = new FormData();
        formData.append('file', file);
        return axios.post(compressUpload, formData, {
            headers: {
                'Content-type': 'multipart/form-data'
            },
            withCredentials: true
        }).then(function (resp) {
            console.log("file resp", resp);
            return resp.data.data;
        });
    }
};
//# sourceMappingURL=fileUploader.js.map