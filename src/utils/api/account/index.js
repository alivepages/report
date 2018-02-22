const Request = require('request');
const ApiConfig = require('../config');

module.exports = {

    getAvatar: function(token) {
        
        return new Promise((resolve, reject) => {

            Request.get({
                url: `${ApiConfig.api_base_url}/v1/User/url_avatar`,
                headers: {
                    'Authorization': 'Bearer ' + token
                }
            }, function(error, response, body) {

                if(response.statusCode === 200) {

                    return resolve(body);

                } else {

                    return reject(error);
                } 

            });
        });
    }
}