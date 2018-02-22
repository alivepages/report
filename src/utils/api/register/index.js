import { request } from 'https';

const Request = require('request');
const ApiConfig = require('../config');
const apiTestingCenterUrl = require('../../apiTestingCenter/config');

module.exports = {
    confirmation: function(data, token) {
        return new Promise((resolve, reject) => {
            Request.post({
                url: `${ApiConfig.auth_base_url}/confirmed`,
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
    register: function(data) {
        return new Promise((resolve, reject) => {
            Request.post({
                    url: `${ApiConfig.auth_base_url}/users`,
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                }, function(error, response, body) {
    
                    if(error) return reject(error);
    
                    if(response.statusCode == 409) {
                        return reject();
                    }
    
                    if(response.statusCode == 200) {
                        return resolve();
                    }
                }
            );
        });
    },
    registerByEmail: function(emailData) {
        return new Promise((resolve, reject) => {
            Request.post({
                    url: `${ApiConfig.auth_base_url}/users/reset_password`,
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(emailData)
                }, function(error, response, body) {
                    return (error) ? reject(error) : resolve(body);
                }
            );
        });
    },
    registerComunication: function(data) {
        return new Promise((resolve, reject) => {
            Request.post({
                    //url: `${ApiConfig.api_base_url}/comunication/welcome`,
                    url: `${ApiConfig.api_base_url}/v1/email/welcome`,
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                }, function(error, response, body) {
                   
                    if(error) return reject(error);
    
                    if(response.statusCode != 200) {
                        return reject({ error: true });
                    }
    
                    if(response.statusCode == 200) {
                        return resolve({ resolved: true });
                    }
                }
            );
        });
    },
    registerProfile: function(data, token) {
        return new Promise((resolve, reject) => {
            Request.post({
                    url: `${ApiConfig.api_base_url}/account/user`,
                        headers: {
                            'Authorization': 'Bearer ' + token,
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(data)
                }, function(error, response, body) {
                   
                    if(error) return reject(error);
    
                    if(response.statusCode != 200) {
                        return reject();
                    }
    
                    if(response.statusCode == 200) {
                        return resolve();
                    }
                }
            );
        });
    },
    registerEnterpriseProfile: function(data, token) {
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
    
                    if(response.statusCode != 200) {
                        return reject();
                    }
    
                    if(response.statusCode == 200) {
                        return resolve();
                    }
                }
            );
        });
    },
    singinQuickStart: function(data) {
        return new Promise((resolve, reject) => {
                Request.post({
                    url: `${ApiConfig.app_base_url}/signin`,
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(data)
                }, function(error, response, body) {
                   
                    if(error) return reject(error);
    
                    if(response.statusCode != 200) {
                        return reject();
                    }
    
                    if(response.statusCode == 200) {
                        return resolve(body);
                    }
                }
            );
        });
    }
};