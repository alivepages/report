const Request = require('request');
const ApiConfig = require('../config');
const apiTestingCenterUrl = require('../../apiTestingCenter/config');

module.exports = {
    getVacants: function(token) {
        return new Promise((resolve, reject) => {
            Request.get({
                url: `${ApiConfig.api_base_url}/v1/vacants`,
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
    },
    activeVacant: function(data, token) {
        return new Promise((resolve, reject) => {
            Request.put({
                url: `${ApiConfig.api_base_url}/v1/Vacant/Action/Activate`,
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json",
                    'Authorization': 'Bearer ' + token,
                }
            }, function(error, response, body) {
                if(error) return reject(error);

                if(response.statusCode == 200) {
                    return resolve();
                } else {
                    return reject(null);
                }
            });
        });
    },
    addNewVacant: function(data, token) {
        return new Promise((resolve, reject) => {
            Request.post({
                url: `${ApiConfig.api_base_url}/v1/vacant`,
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json',
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
    },
    closeVacant: function(data, token) {
        return new Promise((resolve, reject) => {
            Request.put({
                url: `${ApiConfig.api_base_url}/v1/Vacant/Action/Close`,
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json",
                    'Authorization': 'Bearer ' + token,
                },
            }, function(error, response, body) {
                if(error) return reject(error);

                if(response.statusCode == 200) {
                    return resolve();
                } else {
                    return reject(null);
                }
            });
        });
    },
    deactiveVacant: function(data, token) {
        return new Promise((resolve, reject) => {
            Request.put({
                url: `${ApiConfig.api_base_url}/v1/Vacant/Action/Deactivate`,
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json",
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
    },
    editVacant: function(data, token) {
        return new Promise((resolve, reject) => {
            Request.put({
                url: `${ApiConfig.api_base_url}/v1/vacant`,
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json",
                    'Authorization': 'Bearer ' + token,
                },
            }, function(error, response, body) {
                if(error) return reject(error);

                if(response.statusCode == 200) {
                    return resolve(data);
                } else {
                    return reject(null);
                }
            });
        });
    },
    getCompetencesByPositionType: function(position) {
        return new Promise((resolve, reject) => {
            Request.get({
                url: `${apiTestingCenterUrl.api_base_url}/ProfileLibrary/Competences/PositionType/${position}`,
                headers: {
                    "Content-Type": "application/json"
                }
            }, function(error, response, body) {
                if(error) return reject(error);

                if(response.statusCode == 200) {
                    return resolve(body);
                } else {
                    return resolve([]);
                }
            });
        });
    },
    getVacantCompetencesProfile: function(VacantId, token)  {
        return new Promise((resolve, reject) => {
            Request.get({
                url: `${ApiConfig.api_base_url}/v1/VacantCompetences/Vacant/${VacantId}/actions/interpret`,
                headers: {
                    "Content-Type": "application/json",
                    'Authorization': 'Bearer ' + token,
                }
            }, function(error, response, body) {
                if(error) return reject(error);

                if(response.statusCode == 200) {
                    return resolve(body);
                } else {
                    return resolve([]);
                }
            });
        });
    },
    getPositionType: function(position, area) {
        return new Promise((resolve, reject) => {
            Request.get({
                url: `${apiTestingCenterUrl.api_base_url}/ProfileLibrary/Yooin/PositionType/PositionLevel/${position}/FunctionalArea/${area}`,
                headers: {
                    "Content-Type": "application/json"
                }
            }, function(error, response, body) {
                if(error) return reject(error);

                if(response.statusCode == 200) {
                    return resolve(body);
                } else {
                    return resolve([]);
                }
            });
        });
    },
    getVacantCandidateByLinkShare: function(key) {
        return new Promise((resolve, reject) => {
            Request.get({
                url: `${ApiConfig.api_base_url}/v1/VacantCandidates/KeyShare/${key}`,
                headers: {
                    "Content-Type": "application/json"
                }
            }, function(error, response, body) {
                if(error) return reject(error);

                if(response.statusCode == 200) {
                    return resolve(body);
                } else {
                    return resolve([]);
                }
            });
        });
    },
    getVacantByLinkShare: function(key) {
        return new Promise((resolve, reject) => {
            Request.get({
                url: `${ApiConfig.api_base_url}/v1/vacant/keyshare/${key}/data`,
                headers: {
                    "Content-Type": "application/json"
                }
            }, function(error, response, body) {
                if(error) return reject(error);

                if(response.statusCode == 200) {
                    return resolve(body);
                } else {
                    return resolve([]);
                }
            });
        });
    },
    loadVacant: function(vacant, token) {
        return new Promise((resolve, reject) => {
            Request.get({
                url: `${ApiConfig.api_base_url}/v1/vacant/${vacant}`,
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
    },
    saveVacantJobType:  function(data, token) {

        console.log(data);

        return new Promise((resolve, reject) => {
            Request.put({
                url: `${ApiConfig.api_base_url}/v1/Vacant/Action/JobType`,
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token,
                }
            }, function(error, response, body) {

                console.log(error);
                console.log(response.statusCode);

                if(error) return reject(error);

                if(response.statusCode == 200) {
                    return resolve();
                } else {
                    return reject(null);
                }
            });
        });
    },
    saveCompetences: function(competences, vacant, token) {

        console.log('Carga de competencias');
        console.log(competences);
        return new Promise((resolve, reject) => {
            Request.put({
                url: `${ApiConfig.api_base_url}/v1/VacantCompetences/${vacant}`,
                body: JSON.stringify(competences),
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token,
                }
            }, function(error, response, body) {

                if(error) return reject(error);

                if(response.statusCode == 200) {
                    return resolve();
                } else {
                    return reject(null);
                }
            });
        });
    },
    generateKey: function(data, token) {
        return new Promise((resolve, reject) => {
            Request.post({
                url: `${ApiConfig.api_base_url}/v1/vacant/share`,
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token,
                },
            }, function(error, response, body) {

                if(error) return reject(error);

                if(response.statusCode == 200) {
                    return resolve(body);
                } else {
                    return reject(null);
                }
            });
        });
    },
    getVacantKey: function(vacant, token) {
        return new Promise((resolve, reject) => {
            Request.get({
                url: `${ApiConfig.api_base_url}/v1/vacant/${vacant}/keyshare`,
                headers: {
                    'Authorization': 'Bearer ' + token,
                },
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