angular.module('docs').controller('components.datepickerCtrl', function ($scope) {
    $scope.$parent.title = 'Datepicker';

    $scope.codes = {
        basic: (
            '<input class="input" value="2017-01-01" readonly data-toggle="datepicker"/>'
        ),
        colors: (
            '<input class="input" value="2017-01-01" placeholder="Focus me" readonly data-toggle="datepicker" data-color="red-6"/>'
        )
    }
});