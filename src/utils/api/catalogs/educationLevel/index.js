const Request = require('request');
const ApiConfig = require('../../config');

module.exports = {
    GetEducationLevelByLanguageCountry: function() {
        return new Promise((resolve, reject) => {
            Request.get(
                `${ApiConfig.api_base_url}/catalog/EducationLevel/Country/mx/Language/es`,
                function(error, response, body) {
                    return (error) ? reject(error) : resolve(body);
            });
        });
    }  
};