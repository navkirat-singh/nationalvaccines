

function navigationController() {
}

angular.module("myApp").controller("navigationController", [navigationController]);

angular.module("myApp").directive('nvNavigation',[function() {
    return {
        templateUrl: 'navigation/navigation.html',
        controller: navigationController,
    }
}] );