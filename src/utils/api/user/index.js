const Request = require('request');
const ApiConfig = require('../config');

module.exports = {
    getUser: function(username, token) {
        return new Promise((resolve, reject) => {
            Request.get({
                url: `${ApiConfig.api_base_url}/account/${username}/user`,
                headers: {
                    'Authorization': 'Bearer ' + token,
                }
            }, function(error, response, body) {
                return (error) ? reject(error) : resolve(body);
            });
        });
    },
    getUserProfile: function(token) {
        return new Promise((resolve, reject) =>{
            Request.get({                
                url: `${ApiConfig.api_base_url}/v1/User/Profile`,
                headers: {
                    'Authorization': 'Bearer ' + token,
                }
            }, function(error, response, body){
                return (error) ? reject(error) : resolve(body)
            });
        });
    },
    updateUserProfile: function(token, userProfileData) {
        return new Promise((resolve, reject) => {
            Request.put({                
                url: `${ApiConfig.api_base_url}/v1/User/Profile`,
                headers: {
                    'Authorization': 'Bearer ' + token,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userProfileData)
            }, function(error, response, body){
                return (error) ? reject(error) : resolve(body)
            });
        })
    } 
};