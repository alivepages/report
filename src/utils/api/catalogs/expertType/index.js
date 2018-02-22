const Request = require('request');
const ApiConfig = require('../../config');

module.exports = {
    getExpertTypeCatalog: function() {
        return new Promise((resolve, reject) => {            
            Request.get(`${ApiConfig.api_base_url}/Catalog/ExpertType/Country/MX/Language/es`, 
            function(error, response, body){        
                return (error) ? reject(error) : resolve(body);
            });
        });
    }
};

