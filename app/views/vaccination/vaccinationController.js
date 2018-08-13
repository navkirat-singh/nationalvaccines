function vaccinationController() {
    console.log("vaccinationController");
    this.childVaccination = [
    ]
}

angular.module("myApp").controller("vaccinationController", [vaccinationController]);