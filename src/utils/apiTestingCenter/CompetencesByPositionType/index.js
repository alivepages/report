const Request = require('request');
const ApiConfig = require('../config');

module.exports = {
    getCompetencesByPositionType: function(IdPositionType) {
        return new Promise((resolve, reject) => {
            Request.get(
                `${ApiConfig.api_base_url}/ProfileLibrary/Competences/PositionType/${IdPositionType}`,
                function(error, response, body) {
                    return (error) ? reject(error) : resolve(body);
            });
        });
    }
};
