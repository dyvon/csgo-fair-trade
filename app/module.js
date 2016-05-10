angular.module('app', ['ui.materialize'])
  .controller('AppCtrl', AppCtrl)
  .service('SkinsApi', skinsApi);



function skinsApi($http) {
  /**
   * This function will call an api and return some skins.
   *
   * @returns {*}
   */

    this.knife = function () {
        return $http.get('./app/json_files/knife_skins.json')
            .then(function (res) {
                return res.data;
            });
    };
    this.light_machinegun = function () {
        return $http.get('./app/json_files/light_machinegun.json')
            .then(function (res) {
                return res.data;
            });
    };
    this.misc = function () {
        return $http.get('./app/json_files/misc.json')
            .then(function (res) {
                return res.data;
            });
    };
    this.pistol = function () {
        return $http.get('./app/json_files/pistol_skins.json')
            .then(function (res) {
                return res.data;
            });
    };
    this.rifle = function () {
        return $http.get('./app/json_files/rifle_skins.json')
            .then(function (res) {
                return res.data;
            });
    };
    this.shotgun = function () {
        return $http.get('./app/json_files/shotgun_skins.json')
            .then(function (res) {
                return res.data;
            });
    };
    this.sniper = function () {
        return $http.get('./app/json_files/sniper_skins.json')
            .then(function (res) {
                return res.data;
            });
    };
    this.sub_machinegun = function () {
        return $http.get('./app/json_files/submachinegun_skins.json')
            .then(function (res) {
                return res.data;
            });
    };
}

function select_change(){
    var skin_list_div = document.getElementById("skin_list_div");
    var select = document.createElement("select");
    skin_list_div.appendChild(select);
    select.setAttribute("class", "form-control");
    select.setAttribute("ng-model", "app.selectedSkin");
    select.setAttribute("ng-options", "skin.name as skin.name + ' - ' + skin.currencyValue for skin in app.skins");


}
/**
 * Skins Controller.
 *
 * @param SkinsApi
 * @constructor
 */

function AppCtrl(SkinsApi, $filter) {



  var vm = this;
    SkinsApi.sniper()
      .then(function (skins) {
          var names = _.keys(skins),
              data = _.values(skins);

          data = _.map(data, function (skin, index) {
              skin.name = names[index];
              skin.last_updated = moment(skin.last_updated * 1000).fromNow();
              skin.currencyValue = $filter('currency')(skin.value / 100);
              return skin;
          });

          vm.skins = data;
      });
}






