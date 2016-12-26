angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
.state('gitgub', {
    url: '/mainTab',
    templateUrl: 'app/layout/gitTabs.html',
    abstract:true
  })
.state('gitgub.home', {
    url: '/home',
    views: {
      'tab1': {
        templateUrl: 'app/home/home.html',
        controller: 'homeCtrl'
      }
    }
  })

  .state('gitgub.learn', {
    url: '/learn',
    views: {
      'tab2': {
        templateUrl: 'app/tutorial/gitCommand.html',
        controller: 'learnCtrl'
      }
    }
  })

  .state('about', {
    url: '/About',
    templateUrl: 'app/about/about.html',
    controller: 'aboutCtrl'
  })

  .state('profile', {
    url: '/profile/:userid',
    templateUrl: 'app/profile/profile.html',
    controller: 'profileCtrl'
  })

  .state('gitgub.repodetails', {
    url: '/repo/:username/:reponame',
    views: {
      'tab1': {
        templateUrl: 'app/repo/repodetails.html',
        controller: 'repodetailsCtrl'
      }
    }
  })
  .state('login', {
    url: '/login',
    templateUrl: 'app/login/login.html',
    controller: 'loginCtrl'
  })

$urlRouterProvider.otherwise('/mainTab/learn')

});