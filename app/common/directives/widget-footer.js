/**
 * Widget Footer Directive
 */
'use strict';

angular
    .module('app.common')
    .directive('rdWidgetFooter', rdWidgetFooter);

function rdWidgetFooter() {
    var directive = {
        requires: '^rdWidget',
        transclude: true,
        template: '<div class="widget-footer" ng-transclude></div>',
        restrict: 'E'
    };
    return directive;
};
