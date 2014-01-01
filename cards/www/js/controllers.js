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



    // Move to the next slide
    $scope.next = function() {
        $scope.$broadcast('slideBox.nextSlide');
    };
    // Move to the next slide
    $scope.prev = function() {
        $scope.$broadcast('slideBox.prevSlide');
    };

        // If this is not the first slide, give it a back button
        $scope.leftButtons = [
            {
                content: 'Back',
                type: 'button-positive button-clear',
                tap: function(e) {
                    // Move to the previous slide
                    $scope.prev();
                }
            }
        ];


        $scope.rightButtons = [
            {
                content: 'Next',
                type: 'button-positive button-clear',
                tap: function(e) {
                    $scope.next();
                }
            }
        ];


    // Called each time the slide changes
    $scope.slideChanged = function(index) {




    };


})

