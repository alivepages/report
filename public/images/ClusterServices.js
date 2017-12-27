import { StorageService } from '../utils/StorageService';
import { FirstConfigurationService } from '../utils/FirstConfigurationService';
import { HttpService } from '../utils/HttpService';
import request from 'superagent';

export default class clusterService{

  static getCluster(testId, callback){
    let user = StorageService.getItem('user');
    let candidateId = user.userId; // TODO: Guardar userId en el login en setItem(user)
    if (!candidateId) {
      let userName = user.UserName;
      userName = 'rchglucio'; // temporal, mi usuario no funciona
      let config = FirstConfigurationService.getConfig();
      let URL = config.ApiBaseURL + '/candidates/profiles/' + userName;
      request
        .get(URL)
        .then(data => {
          var candidateId = data.body.Id;
          this.getClusterByUser(candidateId, testId, callback);
        })
        .catch(function(err){
            var error  = JSON.parse(err.error);
            console.log('---error---------------------------------');
            console.log(error);
            console.log('------------------------------------');
            HttpService.postLogClientExceptionApi({System:'WEB', Content: 'getCluster - ' + error});
        });
    } else {
      this.getClusterByUser(candidateId, testId, callback);
    }
  }

  static getClusterByUser(candidateId, testId, callback){
    let config = FirstConfigurationService.getConfig();
    let URL = config.ApiBaseURL + '/candidates/' + candidateId + '/clusters/tests/' + testId + '/actions/getResults';
    request
      .get(URL)
      .then(callback)
      .catch(function(err){
          var error  = JSON.parse(err.error);
          console.log('---error---------------------------------');
          console.log(error);
          console.log('------------------------------------');
          HttpService.postLogClientExceptionApi({System:'WEB', Content: 'getClusterByUser - ' + error});
      });
  }

}
