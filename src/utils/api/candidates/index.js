const Request = require('request');
const ApiConfig = require('../config');

module.exports = {
    candidatesFilter: function(data, token) {
        return new Promise((resolve, reject) => {
            Request.post({
                url: `${ApiConfig.api_base_url}/v1/VacantCandidates/Action/filter`,
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token,
                },
                body: JSON.stringify(data)
            }, function(error, response, body) {

                if(error) return reject(error);

                if(response.statusCode == 200) {
                    return resolve(body);
                } else {
                    return reject();
                }
            });
        });
    },
    discardCandidate: function(data, token) {
        return new Promise((resolve, reject) => {
            Request.post({
                url: `${ApiConfig.api_base_url}/v1/VacantCandidates/Candidate/Action/Discard`,
                headers:{
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token
                },
                body: JSON.stringify(data)
            }, function(error, response, body) {
                return (error) ? reject(error) : resolve();
            });
        });
    },
    getCandidate: function(userId) {
        return new Promise((resolve, reject) => {
            Request.get(
                `${ApiConfig.api_base_url}/v1/candidates/${userId}`,
                function(error, response, body) {
                    return (error) ? reject(error) : resolve(body);
            });
        });
    },
    getCandidates: function(data, id, token) {
        return new Promise((resolve, reject) => {
            Request.get({
                    url: `${ApiConfig.api_base_url}/v1/Vacant/${id}`,
                    body: JSON.stringify(data),
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + token
                    }
                },
                function(error, response, body) {
                    return (error) ? reject(error) : resolve(body);
            });
        });
    },
    getEnterpriseProcessState: function(data, token) {
        return new Promise((resolve, reject) => {
            Request.get({
                    url: `${ApiConfig.api_base_url}/v1/Enterprise/ProcessState`,
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + token,
                    },
                    body: JSON.stringify(data)
                },
                function(error, response, body) {
                    return (error) ? reject(error) : resolve(body);
            });
        });
    },
    highlightCandidate: function(data, token) {
        return new Promise((resolve, reject) => {
            Request.post({
                url: `${ApiConfig.api_base_url}/v1/VacantCandidates/Candidate/Action/Highlight`,
                headers:{
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token
                },
                body: JSON.stringify(data)
            }, function(error, response, body) {
                return (error) ? reject(error) : resolve();
            });
        });
    },
    hireCandidate: function(data, token) {
        return new Promise((resolve, reject) => {
            Request.post({
                url: `${ApiConfig.api_base_url}/v1/VacantCandidates/Candidate/Action/Contract`,
                headers:{
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token
                },
                body: JSON.stringify(data)
            }, function(error, response, body) {
                return (error) ? reject(error) : resolve();
            });
        });
    },
    interviewCandidate: function(data, token) {
        return new Promise((resolve, reject) => {
            Request.post({
                url: `${ApiConfig.api_base_url}/v1/VacantCandidates/Candidate/Action/Interview`,
                headers:{
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token
                },
                body: JSON.stringify(data)
            }, function(error, response, body) {
                return (error) ? reject(error) : resolve();
            });
        });
    },
    inviteCandidate: function(data, token) {
        return new Promise((resolve, reject) => {
            Request.post({
                url: `${ApiConfig.api_base_url}/v1/VacantCandidates/Candidate/Action/Invite`,
                headers: {
                    "Content-Type": "application/json",
                    'Authorization': 'Bearer ' + token,
                },
                body: JSON.stringify(data),
                credentials: 'same-origin'
            }, function(error, response, body) {

                if(error) return reject(error);

                if(response.statusCode == 200) {
                    return resolve();
                } else {
                    return reject();
                }
            });
        });
    },
    comunication: function(data, token) {
        return new Promise((resolve, reject) => {
            Request.post({
                url: `${ApiConfig.api_base_url}/comunication/candidate_invite`,
                //url: `${ApiConfig.api_base_url}/v1/email/candidate/action/invite`,
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json",
                    'Authorization': 'Bearer ' + token,
                },
                credentials: 'same-origin'
            }, function(error, response, body) {
                return (error) ? reject(error) : resolve();
            });
        });
    },
    reaction: function(data, token) {
        return new Promise((resolve, reject) => {
            Request.post({
                url: `${ApiConfig.api_base_url}/v1/VacantCandidates/Vacant/Candidate/Opinion`,
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token
                },
                body: JSON.stringify(data)
            }, function(error, response, body) {
                return (error) ? reject(error) : resolve();
            });
        });
    },
    sendCandidateReportByMail: function(data, token) {
        return new Promise((resolve, reject) => {
            Request.post({
                url: `${ApiConfig.api_base_url}/v1/email/candidate/report/action/share`,
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token
                },
                body: JSON.stringify(data)
            }, function(error, response, body) {
                return (error) ? reject(error) : resolve(body);
            });
        });
    },
    setCandidateReportKeyShare: function(data, token) {
        return new Promise((resolve, reject) => {
            Request.post({
                url: `${ApiConfig.api_base_url}/v1/VacantCandidates/Action/share`,
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token
                },
                body: JSON.stringify(data)
            }, function(error, response, body) {
                return (error) ? reject(error) : resolve(body);
            });
        });
    },
    setInviteCandidate: function(data, token) {
        return new Promise((resolve, reject) => {
            Request.post({
                url: `${ApiConfig.api_base_url}/v1/VacantCandidates/Candidate/Action/Invite`,
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token
                },
                body: JSON.stringify(data)
            }, function(error, response, body) {
                return (error) ? reject(error) : resolve();
            });
        });
    },
    getCandidateByEmail: function(email, token) {
        return new Promise((resolve, reject) => {
            Request.get({
                url: `${ApiConfig.api_base_url}/v1/Candidates/Email/${email}`,
                headers: {
                    'Authorization': 'Bearer ' + token,
                }                
            }, function(error, response, body) {
                if(error) return reject(error);

                if(response.statusCode == 200) {
                    return resolve(body);
                } else {
                    return reject(null);
                }
            });
        });
    }
};
