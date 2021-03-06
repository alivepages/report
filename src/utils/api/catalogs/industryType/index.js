const Request = require('request');
const ApiConfig = require('../../config');

module.exports = {
    getAllIndustryTypes: function() {

        return new Promise((resolve, reject) => {

            Request.get(`${ApiConfig.api_base_url}/Catalog/IndustryType`, function(error, response, body){
                
                return (error) ? reject(error) : resolve(body);
            
            });
        });

        
    },
    getIndustryTypeByLanguageCountry: function() {

    },
    getAllEnterpriseSizes: function() {

        return new Promise((resolve, reject) => {
            
            Request.get(`${ApiConfig.api_base_url}/Catalog/EnterpriseSize`, function(error, response, body){
                
                return (error) ? reject(error) : resolve(body);
            
            });
        });
    }
}