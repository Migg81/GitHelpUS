angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
.state('gitgub', {
    url: '/mainTab',
    templateUrl: 'templates/gitTabs.html',
    abstract:true
  })

  .state('gitgub.home', {
    url: '/home',
    views: {
      'tab1': {
        templateUrl: 'templates/home.html',
        controller: 'homeCtrl'
      }
    }
  })

  .state('gitgub.learn', {
    url: '/learn',
    views: {
      'tab2': {
        templateUrl: 'templates/learn.html',
        controller: 'learnCtrl'
      }
    }
  })

  .state('about', {
    url: '/About',
    templateUrl: 'templates/about.html',
    controller: 'aboutCtrl'
  })

  .state('profile', {
    url: '/profile',
    templateUrl: 'templates/profile.html',
    controller: 'profileCtrl'
  })

$urlRouterProvider.otherwise('/mainTab/learn')

});