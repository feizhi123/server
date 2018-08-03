'use strict';

module.exports = {
    list: function list(params) {
        return axios.post('wdCmsTopic/list/', params, {
            withCredentials: true
        }).then(function (resp) {
            return resp.data.data;
        });
    },
    setShow: function setShow(topicId, show) {
        return axios.post('wdCmsTopic/setShow/', { topicId: topicId, show: show }, {
            withCredentials: true
        }).then(function (resp) {
            return resp.data.data;
        });
    },
    detail: function detail(topicId) {
        return axios.post('wdCmsTopic/detail/', { topicId: topicId }, {
            withCredentials: true
        }).then(function (resp) {
            return resp.data.data;
        });
    },
    editTopic: function editTopic(params) {
        return axios.post('wdCmsTopic/editTopic/', params, {
            withCredentials: true
        }).then(function (resp) {
            return resp.data.data;
        });
    },
    move: function move(topicId, step) {
        return axios.post('wdCmsTopic/move/', { topicId: topicId, step: step }, {
            withCredentials: true
        }).then(function (resp) {
            return resp.data.data;
        });
    },
    remove: function remove(topicId) {
        return axios.post('wdCmsTopic/delete/', { topicId: topicId }, {
            withCredentials: true
        }).then(function (resp) {
            return resp.data.data;
        });
    },
    createTopic: function createTopic(params) {
        return axios.post('wdCmsTopic/createTopic/', params, {
            withCredentials: true
        }).then(function (resp) {
            return resp.data.data;
        });
    },
    searchQuestions: function searchQuestions(params) {
        return axios.post('wdCmsTopic/searchQuestions/', params, {
            withCredentials: true
        }).then(function (resp) {
            return resp.data.data;
        });
    },
    topicQuestions: function topicQuestions(params) {
        return axios.post('wdCmsTopic/topicQuestions/', params, {
            withCredentials: true
        }).then(function (resp) {
            return resp.data.data;
        });
    },
    topicApprovingQuestions: function topicApprovingQuestions(params) {
        return axios.post('wdCmsTopic/topicApprovingQuestions/', params, {
            withCredentials: true
        }).then(function (resp) {
            return resp.data.data;
        });
    },
    addQuestionToTopic: function addQuestionToTopic(topicId, questionId) {
        return axios.post('wdCmsTopic/addQuestionToTopic/', { topicId: topicId, questionId: questionId }, {
            withCredentials: true
        }).then(function (resp) {
            return resp.data.data;
        });
    },
    deleteQuestionFromTopic: function deleteQuestionFromTopic(topicId, questionId) {
        return axios.post('wdCmsTopic/deleteQuestionFromTopic/', { topicId: topicId, questionId: questionId }, {
            withCredentials: true
        }).then(function (resp) {
            return resp.data.data;
        });
    },
    moveTopicQuestion: function moveTopicQuestion(params) {
        return axios.post('wdCmsTopic/moveTopicQuestion/', params, {
            withCredentials: true
        }).then(function (resp) {
            return resp.data.data;
        });
    }
};
//# sourceMappingURL=topic.js.map