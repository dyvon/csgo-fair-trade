angular.module('app', [])
  .controller('AppCtrl', AppCtrl)
  .service('SkinsApi', skinsApi);

/**
 * the Api service will get data via http requests
 * and make it available inside our application.
 */
function skinsApi($http) {
  /**
   * This function will call an api and return some skins.
   * 
   * @returns {*}
   */
  this.getSkins = function () {
    return $http.get('./app/skins.json')
      .then(function (res) {
        return res.data; 
      });
  };
}

/**
 * Skins Controller.
 * 
 * @param SkinsApi
 * @constructor
 */
function AppCtrl(SkinsApi) {
  var vm = this;
  
  SkinsApi.getSkins()
    .then(function (skins) {
      var names = _.keys(skins),
        data = _.values(skins);
      
      data = _.map(data, function (skin, index) {
        skin.name = names[index];
        skin.last_updated = moment(skin.last_updated * 1000).fromNow();
        return skin;
      });

      vm.skins = data;
    });
}