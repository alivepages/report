const Request = require('request');
const ApiConfig = require('../config');
const apiTestingCenterUrl = require('../../apiTestingCenter/config');

module.exports = {
    upload: function(data, token) {

        var formData = {
            file: data
        };
       
        return new Promise((resolve, reject) => {
            Request.post({
                url: `${ApiConfig.api_base_url }/account/user/avatar/1`,
                headers: {
                    'Authorization': 'Bearer ' + token
                },
                formData: formData,
                credentials: 'same-origin'
            }, function(error, response, body) {

                console.log(error);
                console.log(response);
                console.log(body);

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