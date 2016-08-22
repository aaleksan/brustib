'use strict';

angular.module('brustib.version', [
  'brustib.version.interpolate-filter',
  'brustib.version.version-directive'
])

.value('version', '0.1');
