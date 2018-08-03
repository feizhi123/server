module.exports = {
    getTypeCount() {
        return axios.get('/countList').then((resp) => {
            return resp.data;
        })
    },
    getType(params){
        return axios.get('/',{params:params}).then((resp)=>{
            return resp.data;
        })
    },
    updateType(params){
        return axios.post('/updateType',params).then((resp)=>{
            return resp.data;
        })
    },
    delType(params){
        return axios.post('/delType',params).then((resp)=>{
            return resp.data;
        })
    },
    getTypebyName(params){
        return axios.get('/getTypebyname',{params:params}).then((resp) => {
            return resp.data;
        })
    },
    getTypeCountbyName(params){
        return axios.get('/getTypeCountbyname',{params:params}).then((resp) => {
            return resp.data;
        })
    },
    addType(params){
        return axios.post('/addType',params).then((resp)=>{
            return resp.data;
        })
    },
    getCountList(params){
        return axios.get('/detail/countList',{params:{type:params}}).then((resp) => {
            return resp.data;
        })
    },
    getDetail(params){
        return axios.get('/detail',{params:params}).then((resp) => {
            return resp.data;
        })
    },
    deleteDetail(params){
        return axios.post('/deleteDetail',params).then((resp)=>{
            return resp.data;
        })
    },
    getDetailbyName(params){
        return axios.get('/getallDetailsbyname',{params:params}).then((resp) => {
            return resp.data;
        })
    },
    getDetailCountbyName(params){
        return axios.get('/getallDetailsbyname/countList',{params:params}).then((resp) => {
            return resp.data;
        })
    },
    addDetail(params){
        return axios.post('/insertItem',params).then((resp)=>{
            return resp.data;
        })
    },
    getDetailItem(params){
        return axios.get('/detailItem',{params:params}).then((resp) => {
            return resp.data;
        })
    },
    updateDetail(params){
        return axios.post('/updateDetail',params).then((resp)=>{
            return resp.data;
        })
    },
    getallDetailsbyname(params){
        return axios.get('/getallDetailsbyname',{params:params}).then((resp)=>{
            return resp.data;
        })
    },
    getallDetailsCountbyName(params){
        return axios.get('/getallDetailsbyname/countList',{params:params}).then((resp)=>{
            return resp.data;
        })
    },
    getallDetails(params){
        return axios.get('/alldetails',{params:params}).then((resp)=>{
            return resp.data;
        })
    },
    getallDetails(params){
        return axios.get('/alldetails',{params:params}).then((resp)=>{
            return resp.data;
        })
    },
    getallCountList(params){
        return axios.get('/alldetails/countList',{params:params}).then((resp)=>{
            return resp.data;
        })
    },
}