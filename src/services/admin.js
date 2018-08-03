// const LOGIN = 'console/admin/login'
const LOGIN = '/login'

module.exports = {
    login(username, password) {
        return axios.post(LOGIN, {username:username, password:password})
            .then((resp) => {
                console.log(resp);
                return resp.data.data;
            });
    }
}