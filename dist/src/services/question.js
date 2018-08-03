'use strict';

module.exports = {
    list: function list(params) {
        return axios.post('wdCmsQuestion/list/', params, {
            withCredentials: true
        }).then(function (resp) {
            return resp.data.data;
        });
    },
    setShow: function setShow(questionId, show) {
        return axios.post('wdCmsQuestion/setShow/', { questionId: questionId, show: show }, {
            withCredentials: true
        }).then(function (resp) {
            return resp.data.data;
        });
    },
    setRecommend: function setRecommend(questionId, recommend) {
        return axios.post('wdCmsQuestion/setRecommend/', { questionId: questionId, recommend: recommend }, {
            withCredentials: true
        }).then(function (resp) {
            return resp.data.data;
        });
    },
    move: function move(questionId, step) {
        return axios.post('wdCmsQuestion/move/', { questionId: questionId, step: step }, {
            withCredentials: true
        }).then(function (resp) {
            return resp.data.data;
        });
    },
    delete: function _delete(questionId) {
        return axios.post('wdCmsQuestion/delete/', { questionId: questionId }, {
            withCredentials: true
        }).then(function (resp) {
            return resp.data.data;
        });
    },
    detail: function detail(questionId) {
        return axios.post('wdCmsQuestion/detail/', { questionId: questionId }, {
            withCredentials: true
        }).then(function (resp) {
            return resp.data.data;
        });
    },
    editDetail: function editDetail(question) {
        return axios.post('wdCmsQuestion/editDetail/', question, {
            withCredentials: true
        }).then(function (resp) {
            return resp.data.data;
        });
    },
    addQuestion: function addQuestion(params) {
        return axios.post('wdCmsQuestion/addQuest/', params, {
            withCredentials: true
        }).then(function (resp) {
            return resp.data.data;
        });
    },
    answers: function answers(params) {
        return axios.post('/wdCmsQuestion/answers/', params, {
            withCredentials: true
        }).then(function (resp) {
            return resp.data.data;
        });
    },
    setAnswerShow: function setAnswerShow(answerId, show) {
        return axios.post('/wdCmsQuestion/setAnswerShow/', {
            answerId: answerId,
            show: show
        }, { withCredentials: true }).then(function (resp) {
            return resp.data.data;
        });
    },
    deleteAnswer: function deleteAnswer(answerId) {
        return axios.post('/wdCmsQuestion/deleteAnswer/', { answerId: answerId }, {
            withCredentials: true
        }).then(function (resp) {
            return resp.data.data;
        });
    },
    editAnswer: function editAnswer(answer) {

        return axios.post('/wdCmsQuestion/editAnswer/', answer, {
            withCredentials: true
        }).then(function (resp) {
            return resp.data.data;
        });
    },
    answerMove: function answerMove(answerId, toSeq) {
        return axios.post('/wdCmsQuestion/answerMove/', { answerId: answerId, toSeq: toSeq }, {
            withCredentials: true
        }).then(function (resp) {
            return resp.data.data;
        });
    },

    /**
     * 问题评论
     */
    comments: function comments(params) {
        return axios.post('/wdCmsQuestion/comments/', params, {
            withCredentials: true
        }).then(function (resp) {
            return resp.data.data;
        });
    },
    addComment: function addComment(params) {
        return axios.post('/wdCmsQuestion/addComment/', params, {
            withCredentials: true
        }).then(function (resp) {
            return resp.data.data;
        });
    },
    setCommentShow: function setCommentShow(commentId, show) {
        return axios.post('/wdCmsQuestion/setCommentShow/', {
            commentId: commentId,
            show: show
        }, { withCredentials: true }).then(function (resp) {
            return resp.data.data;
        });
    },
    deleteComment: function deleteComment(commentId) {
        return axios.post('/wdCmsQuestion/deleteComment/', { commentId: commentId }, {
            withCredentials: true
        }).then(function (resp) {
            return resp.data.data;
        });
    },
    getUserAnswer: function getUserAnswer(questionId, userId) {
        return axios.post('/wdCmsQuestion/getUserAnswer/', { questionId: questionId, userId: userId }, {
            withCredentials: true
        }).then(function (resp) {
            return resp.data.data;
        });
    },
    addAnswer: function addAnswer(answer) {
        return axios.post('/wdCmsQuestion/addAnswer/', answer, {
            withCredentials: true
        }).then(function (resp) {
            return resp.data.data;
        });
    },


    /**
     *回答评论
     */
    commentsOfAnswer: function commentsOfAnswer(params) {
        return axios.post('/wdCmsAnswer/comments/', params, {
            withCredentials: true
        }).then(function (resp) {
            return resp.data.data;
        });
    },
    addCommentOfAnswer: function addCommentOfAnswer(params) {
        return axios.post('/wdCmsAnswer/addComment/', params, {
            withCredentials: true
        }).then(function (resp) {
            return resp.data.data;
        });
    },
    editAnswerLikeBase: function editAnswerLikeBase(answerId, likeBase) {
        return axios.post('/wdCmsAnswer/editAnswerLikeBase/', { answerId: answerId, likeBase: likeBase }, {
            withCredentials: true
        }).then(function (resp) {
            return resp.data.data;
        });
    }
};
//# sourceMappingURL=question.js.map