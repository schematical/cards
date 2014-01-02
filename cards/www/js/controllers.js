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
.controller('TestCtrl', function($scope, Cards, Modal) {
    // Main app controller, empty for the example
    $scope.cards = Cards.shuffle();

    $scope.disp_card_info = window.localStorage.getItem('disp_card_info');
    $scope.disp_skill_info = window.localStorage.getItem('disp_skill_info');

    $scope.disp_card_info = true;
    $scope.disp_skill_info = true;


    Modal.fromTemplateUrl('modal.html', function(modal) {
        $scope.modal = modal;



    }, {
        // Use our scope for the scope of the modal to keep it simple
        scope: $scope,
        // The animation we want to use for the modal entrance
        animation: 'slide-in-up'
    });


    // Move to the next slide
    $scope.next = function() {
        $scope.$broadcast('slideBox.nextSlide');
    };
    // Move to the next slide
    $scope.prev = function() {
        $scope.$broadcast('slideBox.prevSlide');
    };
    $scope.showMenu = function() {

/*      console.log($scope);
        console.log(window.localStorage.getItem('disp_card_info') + ' - ' + $scope.disp_card_info);
        console.log(window.localStorage.getItem('disp_skill_info') + ' - ' + $scope.disp_skill_info);*/
        window.localStorage.setItem('disp_card_info', $scope.disp_card_info);
        window.localStorage.setItem('disp_skill_info',  $scope.disp_skill_info);

        $scope.modal.show();

    };
    $scope.closeMenu = function() {
        $scope.modal.hide();
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
            },
            {
                content: 'Options',
                type: 'button-positive button-clear',
                tap: function(e) {
                    // Move to the previous slide
                    $scope.showMenu();
                }
            },

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

