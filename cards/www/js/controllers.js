angular.module('starter.controllers', [])//angular.module('sideMenuTest', ['ionic'])

.controller('AppCtrl', function($scope) {
  // Main app controller, empty for the example
})
.controller('MenuCtrl', function($scope) {
    $scope.list = [];
    for(var i = 0; i < 20; i++) {
        $scope.list.push({
            text: 'Item ' + i
        });
    }
    $scope.openLeft = function() {
        $scope.sideMenuController.toggleLeft();
    };

})

// A simple controller that fetches a list of data
.controller('CardTabCtrl', function($scope, Cards) {
  // "Pets" is a service returning mock data (services.js)
  $scope.cards = Cards.all();

  $scope.$on('tab.shown', function() {
    // Might do a load here
  });
  $scope.$on('tab.hidden', function() {
    // Might recycle content here
  });
})

// A simple controller that shows a tapped item's data
.controller('CardCtrl', function($scope, $routeParams, Cards) {
  // "Pets" is a service returning mock data (services.js)
  $scope.card = Card.get($routeParams.cardId);
})
//Menu control
.controller('TestCtrl', function($scope, Cards) {
    // Main app controller, empty for the example
    $scope.cards = Cards.shuffle();

    var startApp = function() {
        $location.path('/main');

        // Set a flag that we finished the tutorial
        window.localStorage['didTutorial'] = true;
    };

    // Check if the user already did the tutorial and skip it if so
    if(window.localStorage['didTutorial'] === "true") {
        startApp();
        return;
    }

    // Move to the next slide
    $scope.next = function() {
        $scope.$broadcast('slideBox.nextSlide');
    };


    // Our initial right buttons
    var rightButtons = [
        {
            content: 'Next',
            type: 'button-positive button-clear',
            tap: function(e) {
                // Go to the next slide on tap
                $scope.next();
            }
        }
    ];

    // Our initial left buttons
    var leftButtons = [
        {
            content: 'Skip',
            type: 'button-positive button-clear',
            tap: function(e) {
                // Start the app on tap
                startApp();
            }
        }
    ];

    // Bind the left and right buttons to the scope
    $scope.leftButtons = leftButtons;
    $scope.rightButtons = rightButtons;


    // Called each time the slide changes
    $scope.slideChanged = function(index) {

        // Check if we should update the left buttons
        if(index > 0) {
            // If this is not the first slide, give it a back button
            $scope.leftButtons = [
                {
                    content: 'Back',
                    type: 'button-positive button-clear',
                    tap: function(e) {
                        // Move to the previous slide
                        $scope.$broadcast('slideBox.prevSlide');
                    }
                }
            ];
        } else {
            // This is the first slide, use the default left buttons
            $scope.leftButtons = leftButtons;
        }

        // If this is the last slide, set the right button to
        // move to the app
        if(index == 2) {
            $scope.rightButtons = [
                {
                    content: 'Start using MyApp',
                    type: 'button-positive button-clear',
                    tap: function(e) {
                        startApp();
                    }
                }
            ];
        } else {
            // Otherwise, use the default buttons
            $scope.rightButtons = rightButtons;
        }
    };


})

