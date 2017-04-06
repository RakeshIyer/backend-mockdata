(function() {
    'use strict'
    angular.module('werner.core')
        .factory('cpLoginService', function($http) {
            return angular.extend({
                getLtlCarriers: function getLtlCarriers(_queryName) {
                    var url = '/api/ltl/match/' + _queryName;
                    //return $http.get(url);
                    return $http.get('src/app/cpLogin/ltlCarriers.json');
                },
                createCPLogin: function createCPLogin(obj) {
                    var url = 'api/logins/account/';
                    return $http.post(url, obj);
                },
                getCarrierDetails: function getCarrierDetails(_ident) {                    
                    var url = 'api/logins/carrier/' + _ident;
                    //return $http.get(url);
                    return $http.get('src/app/cpLogin/carrierDetails.json');
                },
                inactivateLoginId: function inactivateLoginId(key) {
                    var url = 'api/logins/account/'+ key + '/inactivate';
                    return $http.posy(url, {});
                },
                updateCPLogin: function updateCPLogin(key, obj){
                    var url = 'api/logins/account/' + key;
                    return $http.post(url, obj);
                }
            })
        });
})();
