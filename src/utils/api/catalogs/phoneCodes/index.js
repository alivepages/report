const Request = require('request');
const ApiConfig = require('../../config');

module.exports = {
    getAllCountriesPhoneCodes: function() {

        return new Promise((resolve, reject) => {

            Request.get(`${ApiConfig.api_base_url}/catalog/countryphonecode`, function(error, response, body){
                                return (error) ? reject(error) : resolve(body);
            });
        });
    },
    getPhoneCodeByIdCountry: function() {

    }
}