const Request = require('request');
const ApiConfig = require('../../config');

module.exports = {
    getAllCountries: function() {

        return new Promise((resolve, reject) => {
            Request.get(`${ApiConfig.api_base_url}/catalog/country/language/es`, 
            function(error, response, body){                
                return (error) ? reject(error) : resolve(body);
            });
        });
    },
    getCurrencyCatalog: function() {
        return new Promise((resolve, reject) => {            
            Request.get(`${ApiConfig.api_base_url}/catalog/Country/Currency`, 
            function(error, response, body){        
                return (error) ? reject(error) : resolve(body);
            });
        });
    },
    getLanguageCatalog: function() {
        return new Promise((resolve, reject) => {            
            Request.get(`${ApiConfig.api_base_url}/catalog/Language`, 
            function(error, response, body){        
                return (error) ? reject(error) : resolve(body);
            });
        });
    }
}