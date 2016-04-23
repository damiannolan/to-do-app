
angular.module('toDoList', ['ionic', 'toDoList.controllers', 'toDoList.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
    })

    .state('app.search', {
    url: '/search',
    views: {
      'menuContent': {
        templateUrl: 'templates/search.html'
      }
    }
    })

    .state('app.toDo', {
    url: '/toDo',
    views: {
        'menuContent': {
        templateUrl: 'templates/toDo.html',
        controller: 'ToDoCtrl'
        }
      }
    })
    
    .state('app.completedItems', {
    url: '/completedItems',
    views: {
      'menuContent': {
        templateUrl: 'templates/completedItems.html',
        controller: 'CompletedCtrl'  
      }
    }
    });
    
    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/toDo');
});
