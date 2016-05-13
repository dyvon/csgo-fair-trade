angular.module('app', ['ui.materialize'])
  .controller('AppCtrl', AppCtrl)
  .service('SkinsApi', skinsApi);


function skinsApi($http) {
    var _this = this;

    this.getSkins1 = function () {
        var skins = {};

        return $http.get('./app/json_files/sniper_skins.json')
            .then(function (res) {
                skins.sniper = res.data;
                return skins;
            });
    };

    this.getSkins2 = function (skins) {
        return $http.get('./app/json_files/rifle_skins.json')
            .then(function (res) {
                skins.rifle = res.data;
                return skins;
            });
    };

    this.getSkins3 = function (skins) {
        return $http.get('./app/json_files/submachinegun_skins.json')
            .then(function (res) {
                skins.submachinegun = res.data;
                return skins;
            });
    };

    this.getSkins4 = function (skins) {
        return $http.get('./app/json_files/light_machinegun.json')
            .then(function (res) {
                skins.lightmachinegun = res.data;
                return skins;
            });
    };

    this.getSkins5 = function (skins) {
        return $http.get('./app/json_files/pistol_skins.json')
            .then(function (res) {
                skins.pistol = res.data;
                return skins;
            });
    };

    this.getSkins6 = function (skins) {
        return $http.get('./app/json_files/knife_skins.json')
            .then(function (res) {
                skins.knife = res.data;
                return skins;
            });
    };

    this.getSkins7 = function (skins) {
        return $http.get('./app/json_files/shotgun_skins.json')
            .then(function (res) {
                skins.shotgun = res.data;
                return skins;
            });
    };

    this.getSkins8 = function (skins) {
        return $http.get('./app/json_files/misc.json')
            .then(function (res) {
                skins.misc = res.data;
                return skins;
            });
    };

    this.getSkins = function () {
        return _this.getSkins1()
            .then(_this.getSkins2)
            .then(_this.getSkins3)
            .then(_this.getSkins4)
            .then(_this.getSkins5)
            .then(_this.getSkins6)
            .then(_this.getSkins7)
            .then(_this.getSkins8);
    };
}



/**
 * Skins Controller.
 *
 * @param SkinsApi
 * @constructor
 */

function AppCtrl(SkinsApi, $filter) {



  var vm = this;
    vm.skins = {};
    SkinsApi.getSkins()
      .then(function (skins) {
          _.forOwn(skins, function (value, key) {
              var names = _.keys(value),
                  data = _.values(value);

              data = _.map(data, function (skin, index) {
                  skin.name = names[index];
                  skin.last_updated = moment(skin.last_updated * 1000).fromNow();
                  skin.currencyValue = $filter('currency')(skin.value / 100);
                  return skin;
              });

              vm.skins[key] = data;
          });
      });
}






