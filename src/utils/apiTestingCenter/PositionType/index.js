const Request = require('request');
const ApiConfig = require('../config');

module.exports = {
    getPositionType: function() {
        return new Promise((resolve, reject) => {
            Request.get(
                `${ApiConfig.api_base_url}/ProfileLibrary/Yooin/PositionType`,
                function(error, response, body) {
                    return (error) ? reject(error) : resolve(body);
            });
        });
    },

    getPositionTypeByPositionLevelFunctionalArea: function(IdPositionLevel,IdFunctionalArea ) {
        return new Promise((resolve, reject) => {
            Request.get(
                `${ApiConfig.api_base_url}/ProfileLibrary/Yooin/PositionType/PositionLevel/${IdPositionLevel}/FunctionalArea/${IdFunctionalArea}`,
                function(error, response, body) {
                    return (error) ? reject(error) : resolve(body);
            });
        });
    }

};
