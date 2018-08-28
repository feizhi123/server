module.exports = {
    getTypeCount() {
        return axios.post('/cms/TypeCount').then((resp) => {
            return resp.data;
        })
    },
    getType(params){
        return axios.post('/cms/Type',params).then((resp)=>{
            return resp.data;
        })
    },
    updateType(params){
        return axios.post('/cms/updateType',params).then((resp)=>{
            return resp.data;
        })
    },
    delType(params){
        return axios.post('/cms/delType',params).then((resp)=>{
            return resp.data;
        })
    },
    getTypebyName(params){
        return axios.post('/cms/getTypebyname',params).then((resp) => {
            return resp.data;
        })
    },
    getTypeCountbyName(params){
        return axios.post('/cms/getTypeCountbyname',params).then((resp) => {
            return resp.data;
        })
    },
    addType(params){
        return axios.post('/cms/addType',params).then((resp)=>{
            return resp.data;
        })
    },
    getCountList(params){
        return axios.post('/cms/detailCountByType',{type:params}).then((resp) => {
            return resp.data;
        })
    },
    getDetail(params){
        return axios.post('/cms/detailByType',params).then((resp) => {
            return resp.data;
        })
    },
    deleteDetail(params){
        return axios.post('/cms/deleteDetailById',params).then((resp)=>{
            return resp.data;
        })
    },
    getDetailbyName(params){
        return axios.post('/cms/getDetailByNameType',params).then((resp) => {
            return resp.data;
        })
    },
    getDetailCountbyName(params){
        return axios.post('/cms/getDetailCountByNameType',params).then((resp) => {
            return resp.data;
        })
    },
    addDetail(params){
        return axios.post('/cms/insertItem',params).then((resp)=>{
            return resp.data;
        })
    },
    getDetailItem(params){
        return axios.post('/cms/detailItem',params).then((resp) => {
            return resp.data;
        })
    },
    updateDetail(params){
        return axios.post('/cms/updateDetail',params).then((resp)=>{
            return resp.data;
        })
    },
    getallDetailsbyname(params){
        return axios.post('/cms/getallDetailsbyname',params).then((resp)=>{
            return resp.data;
        })
    },
    getallDetailsCountbyName(params){
        return axios.post('/cms/getAllDetailsCountByName',params).then((resp)=>{
            return resp.data;
        })
    },
    getallDetails(params){
        return axios.post('/cms/allDetailsByPage',params).then((resp)=>{
            return resp.data;
        })
    },
    getallCountList(params){
        return axios.post('/cms/allDetailsCountByPage',params).then((resp)=>{
            return resp.data;
        })
    }
}