const Request = require('request');
const ApiConfig = require('../config');

module.exports = {
    getFunctionalArea: function() {
        return new Promise((resolve, reject) => {
            Request.get(
                `${ApiConfig.api_base_url}/ProfileLibrary/FunctionalArea`,
                function(error, response, body) {
                    return (error) ? reject(error) : resolve(body);
            });
        });
    }
};
