(function() {
    'use strict';

    angular.module('app')
        .service('navService', [
            '$q',
            navService
        ]);

    function navService($q) {
        var menuItems = [{
                name: 'Dashboard',
                icon: 'dashboard',
                sref: '.dashboard'
            },
            {
                name: 'Issues',
                icon: 'public',
                sref: '.table'
            },
            {
                name: 'Profile',
                icon: 'person',
                sref: '.profile'
            }
        ];

        return {
            loadAllItems: function() {
                return $q.when(menuItems);
            }
        };
    }

})();