angular.module('app', [])
  .controller('AppCtrl', AppCtrl)
  .service('SkinsApi', skinsApi);

var select_skin_type = document.getElementById("select_skin_types");
var skin_list_div = document.getElementById("skin_list_div");
var select = document.createElement("select");
var att1 = document.createAttribute("class");
att1.value ="form-control";
var att2 = document.createAttribute("ng-model");
var att3 = document.createAttribute("ng-options");
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

/**
 * Skins Controller.
 *
 * @param SkinsApi
 * @constructor
 */

function select_change(){
    if(select_skin_type.value == 1){
        att2.value=
        att3.value=
       skin_list_div.appendChild(select);
    }
    if(select_skin_type.value == 2){

    }
    if(select_skin_type.value == 3){

    }
    if(select_skin_type.value == 4){

    }
    if(select_skin_type.value == 5){

    }
    if(select_skin_type.value == 6){

    }
    if(select_skin_type.value == 7){

    }
    if(select_skin_type.value == 8){

    }

}

function AppCtrl(SkinsApi, $filter) {
  var vm = this;
    console.time('loading');
  SkinsApi.knife()
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
        console.timeEnd('loading');
    });
}
