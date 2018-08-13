function slideShowController() {
    console.log("Slide show initialized");
}

angular.module("myApp").directive("nvSlideShow", [function() {
    return {
        templateUrl: 'components/slideshow/slideShow.html',
        controller: slideShowController
    };
}]);