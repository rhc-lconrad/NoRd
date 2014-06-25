'use strict';

angular.module('noRdApp')
  .factory('Session', function ($resource) {
    return $resource('/api/session/');
  });
