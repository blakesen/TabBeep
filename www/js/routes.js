angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
      
        
    .state('tabsController.profile', {
      url: '/profile',
      views: {
        'tab1': {
          templateUrl: 'templates/profile.html',
          controller: 'profileCtrl'
        }
      }
    })
        
      
    
      
        
    .state('tabsController.search', {
      url: '/search',
      views: {
        'tab2': {
          templateUrl: 'templates/search.html',
          controller: 'searchCtrl'
        }
      }
    })
        
      
    
      
        
    .state('tabsController.pay', {
      url: '/pay',
      views: {
        'tab3': {
          templateUrl: 'templates/pay.html',
          controller: 'payCtrl'
        }
      }
    })
        
      
    
      
    .state('tabsController', {
      url: '/tabs',
      abstract:true,
      templateUrl: 'templates/tabsController.html'
    })
      
    
      
        
    .state('analyticReport', {
      url: '/report',
      templateUrl: 'templates/analyticReport.html',
      controller: 'analyticReportCtrl'
    })
        
      
    ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tabs/profile');

});