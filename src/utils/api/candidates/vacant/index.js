const Request = require('request');
const ApiConfig = require('../../config');

module.exports = {
    getVacant: function(userId, vacantId) {
        return new Promise((resolve, reject) => {
            Request.get(
                `${ApiConfig.api_base_url}/v1/VacantCandidates/${vacantId}/candidate/${userId}/action/getresult`,
                function(error, response, body) {
                    return (error) ? reject(error) : resolve(body);
            });
        });
    },
    getIdByKeyShare: function(KeyShare) {
        return new Promise((resolve, reject) => {
            Request.get(
                `${ApiConfig.api_base_url}/v1/VacantCandidates//KeyShare/${KeyShare}`,
                function(error, response, body) {
                    return (error) ? reject(error) : resolve(body);
            });
        });
    },
    // getAllVacants: function() {
    //     return new
    // }
};
