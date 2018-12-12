angular.module('flowers', []);
angular.module('features', []);
angular.module('sightings', []);
angular.module('users', []);


var app = angular.module('flowersApp', ['flowers', 'features', 'sightings', 'users', 'ui.router', 'ui.bootstrap', 'ngAnimate', 'ngRoute'])
    .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
        $urlRouterProvider.otherwise('/home');

        // Classical routes naming
        $stateProvider
            .state('home', {
                url: '/home',
                controller: 'MainController'
            })
            .state('signup', {
                url: '/signup',
                controller: 'SignupController'
            })

            .state('signin', {
                url: '/signin',
                controller: 'SigninController'
            })

        // $locationProvider.html5Mode(true)
    })

    // We really need this. All the modals should be closed when navigating to places
    .run(function ($rootScope, $uibModalStack) {
        $rootScope.previousState = null;

        $rootScope.$on('$stateChangeStart', function () {
            $uibModalStack.dismissAll();
        });

        $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, from, fromParams) {
            $rootScope.previousState = from;
        });
    });