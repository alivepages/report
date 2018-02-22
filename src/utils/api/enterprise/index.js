const Request = require('request');
const ApiConfig = require('../config');

module.exports = {
    loadEnterprise: function(token) {
        return new Promise((resolve, reject) => {
            Request.get({
                url: `${ApiConfig.api_base_url}/v1/enterprise`,
                headers: {
                    'Authorization': 'Bearer ' + token,
                }
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
    registerEnterprise: function(data, token) {
        return new Promise((resolve, reject) => {
            Request.post({
                url: `${ApiConfig.api_base_url}/account/enterprise`,  
                headers: {
                    'Authorization': 'Bearer ' + token,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
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
    updateEnterprise: function(data, token) {
        return new Promise((resolve, reject) => {
            Request.put({
                url: `${ApiConfig.api_base_url}/v1/Enterprise/Action/Update`,  
                headers: {
                    "Content-Type": "application/json",
                    'Authorization': 'Bearer ' + token,
                },
                body: JSON.stringify(data),
            }, function(error, response, body) {
                if(error) return reject(error);

                if(response.statusCode == 200) {
                    return resolve();
                } else {
                    return reject();
                }
            });
        });
    }
}