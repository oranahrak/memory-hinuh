// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('MemoryGame', ['ionic'])

  .run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
      if (window.cordova && window.cordova.plugins.Keyboard) {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

        // Don't remove this line unless you know what you are doing. It stops the viewport
        // from snapping when text inputs are focused. Ionic handles this internally for
        // a much nicer keyboard experience.
        cordova.plugins.Keyboard.disableScroll(true);
      }
      if (window.StatusBar) {
        StatusBar.styleDefault();
      }
    });
  })


  .config(function ($stateProvider, $urlRouterProvider) {

    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider

      // about page
      .state('about', {
        url: '/about',
        templateUrl: 'templates/about.html'
      })

      // instruction page
      .state('instruction', {
        url: '/instruction',
        templateUrl: 'templates/instruction.html'
      })

      // game page
      .state('game', {
        url: '/game',
        cache: false,
        templateUrl: 'templates/game.html',
        controller: 'GameController'
      })

      // // game2 page
      // .state('game2', {
      //   url: '/game2',
      //   templateUrl: 'templates/game2.html',
      //   controller: 'GameController2'
      // })
      // // game3 page
      // .state('game3', {
      //   url: '/game3',
      //   templateUrl: 'templates/game3.html',
      //   controller: 'GameController3'
      // })
      // choose subject page
      .state('gameoptions', {
        url: '/gameoptions',
        cache: false,
        templateUrl: 'templates/gameoptions.html',
        controller: 'GameOptionsController'

      })

      // glossary page
      .state('glossary', {
        url: '/glossary',
        cache: false,
        templateUrl: 'templates/glossary.html',
        controller: 'GlossaryController'

      })

      // home page
      .state('home', {
        url: '/home',
        templateUrl: 'templates/home.html'
      });



    // home page when we open the app
    $urlRouterProvider.when('/', "/home");
    $urlRouterProvider.otherwise('/home');
  });
